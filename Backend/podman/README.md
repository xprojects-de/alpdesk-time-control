# Alpdesk-Time-Control

This folder contains everything needed to run the backend (with the Angular frontend baked in)
as a container - either as a quick local test with Podman, or in production behind Caddy on a
Hetzner server.

All commands below assume the project is already built once for the frontend, i.e.
`src/main/resources/public` already contains the compiled Angular app (see the
[Backend README](../README.md) / `Frontend/npm run deploy` + `./gradlew copyFrontend`). The
Dockerfiles just package what's already on disk, they don't build the frontend themselves.

## Quick start (JVM image)

The fastest way to get the app running locally, using the plain JVM image (no GraalVM/native
build needed for this).

1. Start Podman (macOS only - skip if Podman is already running or you're on Linux):
   ```shell
   podman machine start
   ```
2. From this `podman/` folder, build and start the container:
   ```shell
   podman compose up -d --build
   ```
3. Watch it come up (wait for "Startup completed" and stop with Ctrl-C):
   ```shell
   podman compose logs -f alpdesk-time-control
   ```
4. Open **http://localhost:18000** and log in with `time-control` / `alpdesk`.
5. When you're done:
   ```shell
   podman compose down
   ```

That's it - see [Local testing](#local-testing) below for details (data persistence, changing
credentials, manual `podman build`/`podman run` without compose) and for the GraalVM native
variant.

There are two Dockerfiles:

* **`Dockerfile`** - plain JVM image (`eclipse-temurin` JRE). Simple, well understood, works on
  every platform Podman/Docker supports.
* **`Dockerfile.native`** - GraalVM native-image build, same approach as the macOS/Windows
  installers built in `.github/workflows/build-installers.yml`. Smaller image (~220 MB vs.
  ~400 MB) and starts in well under a second instead of ~1s, at the cost of a much heavier
  (and RAM-hungry) build step. See [Native build notes](#native-build-notes) below.

Both need to be built with the **`Backend/` folder as build context**, not `Backend/podman/`,
because they `COPY . .` the whole Gradle project. That's why every `build`/`podman build`
command below either runs from `Backend/` with `-f podman/Dockerfile[.native]`, or - simplest -
uses `podman compose`, which resolves this automatically from the compose file.

## Prerequisites (macOS / Podman Desktop)

Podman needs a Linux VM on macOS. With [Podman Desktop](https://podman-desktop.io/) this is
managed for you; from the CLI:

```shell
podman machine init   # first time only
podman machine start
```

`podman compose` (used below) works out of the box - Podman transparently delegates to
`docker-compose`/`podman-compose` if either is installed (Podman Desktop bundles this), no extra
setup needed.

If you plan to try the **native** build, give the machine more RAM first - a plain
`nativeCompile` run for this project needs ~6-8 GB, and the default machine (~4 GB) reliably
OOM-kills the build (exit code 137, "Native Image build process ran out of memory"):

```shell
podman machine stop
podman machine set --memory 8192 podman-machine-default
podman machine start
```

## Local testing

The simplest option: build and run everything with one command, from this `podman/` folder.

```shell
podman compose up -d --build
podman compose logs -f alpdesk-time-control   # follow logs
podman compose down                            # stop and remove the container
```

This builds the JVM image from `Dockerfile`, publishes the app directly on
**http://localhost:18000** (no reverse proxy needed for local testing), and mounts
`../database` (i.e. `Backend/database`) into the container so the SQLite database and the
generated JWT secret persist across restarts - including reusing whatever database you already
have from running the backend directly with Gradle.

Default login is `time-control` / `alpdesk` (overridable via the `APP_USERNAME`/`APP_PASSWORD`
environment variables in `docker-compose.yml` - change them before exposing the container beyond
localhost).

Equivalent manual steps, if you want to build/run the image yourself instead of via compose (run
from `Backend/`, not `Backend/podman/`):

```shell
podman build -f podman/Dockerfile --build-arg ARTIFACT_NAME=time-control -t alpdesk/alpdesk-time-control:latest .
podman run -dit --name=alpdesk-time-control -p 18000:18000 -v ./database:/home/app/database alpdesk/alpdesk-time-control:latest
podman logs -f alpdesk-time-control
podman stop alpdesk-time-control && podman rm alpdesk-time-control
```

### Native build

Try the GraalVM native-image variant with the `native` compose profile (see
[Prerequisites](#prerequisites-macos--podman-desktop) for the required machine memory bump
first):

```shell
podman compose --profile native up -d --build alpdesk-time-control-native
podman compose --profile native down
```

This uses `Dockerfile.native`, still publishes on **http://localhost:18000**, and shares the
same `../database` volume. Expect the build itself to take a few minutes (native-image compiles
ahead-of-time), but the resulting container starts almost instantly.

## Hetzner Cloud (production)

Production uses `docker-compose.prod.yml`, which fronts the app with Caddy for TLS termination
and does not build the image on the server - instead you build it locally, save it, and load it
on the server.

### Build for production and push to server

```shell
podman build --platform linux/amd64 -f podman/Dockerfile --build-arg ARTIFACT_NAME=time-control -t alpdesk/alpdesk-time-control-prod:latest .
```

(run from `Backend/`; use `-f podman/Dockerfile.native` instead for the native variant once
you've validated it locally)

```shell
podman save -o alpdesk-time-control.tar localhost/alpdesk/alpdesk-time-control-prod:latest
scp alpdesk-time-control.tar root@YOUR_SERVER_IP:/home
```

### Run on the server (ssh access)

```shell
cd /home
docker load -i alpdesk-time-control.tar
docker images
```

Copy `docker-compose.prod.yml` and `Caddyfile` to the server (e.g. `/home`), then edit the
Caddyfile to use your real domain instead of `localhost`, and set real `APP_USERNAME`/
`APP_PASSWORD` values in `docker-compose.prod.yml` before exposing it publicly.

```shell
docker compose -f docker-compose.prod.yml up -d
```

Additional commands:

```shell
docker compose -f docker-compose.prod.yml down       # stop containers
docker compose -f docker-compose.prod.yml ps          # show running containers
docker compose -f docker-compose.prod.yml logs -f     # show logs
docker compose -f docker-compose.prod.yml logs -f caddy
docker compose -f docker-compose.prod.yml restart
```

## Native build notes

* Requires ~6-8 GB RAM for the `nativeCompile` build step (see
  [Prerequisites](#prerequisites-macos--podman-desktop)); the resulting runtime image itself is
  small (~220 MB) and needs nowhere near that much memory to run.
* `build.gradle` pins the Gradle toolchain to vendor GraalVM (`JvmVendorSpec.GRAAL_VM`), and no
  toolchain-download resolver is configured. That means **even the plain JVM `Dockerfile`**
  must use a GraalVM-based builder image (`ghcr.io/graalvm/jdk-community`) - a plain
  `eclipse-temurin` JDK builder fails with "Cannot find a Java installation ... matching
  {vendor=GraalVM Community}".
* This mirrors the native builds already used for the macOS/Windows installers in
  `.github/workflows/build-installers.yml`, which also has a Linux job producing a
  `TimeControl-Linux.tar.gz` native binary as a release asset.
