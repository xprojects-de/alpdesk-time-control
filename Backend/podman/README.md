# Alpdesk-Time-Control

## Build and run Podman locally

```shell
podman build --build-arg ARTIFACT_NAME=time-control -t alpdesk/alpdesk-time-control:latest .
```
```shell
podman run -p 18000:18000 alpdesk/alpdesk-time-control:latest
```

```shell
podman run -dit --name=alpdesk-time-control -p 18000:18000 alpdesk/alpdesk-time-control:latest
podman stop alpdesk-time-control # stop container
podman rm alpdesk-time-control # rm container
podman exec -it alpdesk-time-control /bin/bash # access container
```

```shell
docker run -p 18000:18000 -e APP_USERNAME="time-control" -e APP_PASSWORD="alpdesk" alpdesk/alpdesk-time-control:latest
```

Using podman compose

```shell
docker-compose -f docker-compose.yml up -d
docker-compose -f docker-compose.yml down
````

## Hetzner Cloud

### Build for production and push to server

```shell
podman build --platform linux/amd64 --build-arg ARTIFACT_NAME=time-control -t alpdesk/alpdesk-time-control-prod:latest .
```
```shell
# optional if tag is missing
// podman images
// podman tag IMAGE_ID alpdesk/alpdesk-time-control-prod:latest
// podman images
```

```shell
podman save -o alpdesk-time-control.tar localhost/alpdesk/alpdesk-time-control-prod:latest
```

```shell
scp alpdesk-time-control.tar root@YOUR_SERVER_IP:/home
```
### Run on server with ssh access

```shell
cd /home
```

```shell
docker load -i alpdesk-time-control.tar
```

```shell
docker images
```

create docker-compose.yml and Caddyfile (see project folder)

```shell
docker compose up -d
```

additional commands

```shell
docker compose down # stop containers
docker compose ps # show running containers
docker compose logs -f # show logs
docker compose logs -f caddy # show logs for caddy only
docker compose restart # restart containers
```
