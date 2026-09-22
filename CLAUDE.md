# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Time Control (a.k.a. "Alpdesk Time-Control") is a self-contained race-timing application for ski
club events: a Micronaut/Java backend serving a REST API plus the built Angular frontend as static
resources, backed by a local SQLite database. It's designed to run as a single packaged desktop app
(jpackage installer / native-image binary / AOT-optimized fat jar) on a laptop at the race venue, with no
external services required. See [docs/installation.md](docs/installation.md) for end-user installation/packaging details
and where the SQLite DB and JWT secret live for each distribution type (`app.packaged` /
`APP_DATA_DIR` in [Application.java](Backend/src/main/java/x/timecontrol/Application.java)).

The repo has two independent projects:
- `Backend/` — Micronaut (Java 25) REST API, Gradle build.
- `Frontend/` — Angular 22 SPA, npm/Angular CLI build.

`Backend/build.gradle`'s `copyFrontend` task copies `Frontend/dist/time-control/browser` into
`Backend/src/main/resources/public`, so a full production build is Frontend-then-Backend.

## Commands

### Backend (run from `Backend/`)

```bash
./gradlew run                        # start the API on http://localhost:18000 (relative ./database dir)
./gradlew test                       # run the full Spock/Groovy test suite
./gradlew test --tests "x.timecontrol.services.RankingServiceSpec"          # single spec class
./gradlew test --tests "x.timecontrol.services.RankingServiceSpec.<test name>"  # single test
./gradlew optimizedJitJarAll         # the shipped fat jar, Micronaut AOT-optimized (build/libs/time-control.jar)
./gradlew shadowJar                  # unoptimized fat jar for comparison only (build/libs/time-control-no-aot.jar)
./gradlew jpackageAppImage           # local self-contained app image (no installer wrapper)
./gradlew jpackageInstaller          # platform installer (.dmg/.exe/.deb)
```

The released jar, the e2e jar, the Docker image and the jpackage installers are all built from
`optimizedJitJarAll`: Micronaut AOT (the `aot {}` block in `build.gradle`) runs on the plain JVM
and only takes effect in the `optimized*` tasks - a plain `shadowJar` carries none of it. jpackage
reads a staging dir (`build/jpackage-input`) holding exactly `time-control.jar`, because the AOT
build leaves further jars in `build/libs`.

Tests are Spock specs under `Backend/src/test/groovy/x/timecontrol/...`, mirroring the
`src/main/java/x/timecontrol/...` package layout (mostly `services/`). `failOnNoDiscoveredTests` is
enabled, so a misconfigured test source set fails the build instead of silently passing.

Default login is `time-control` / `time-control` unless overridden via `APP_USERNAME`/`APP_PASSWORD`
env vars — see [application.properties](Backend/src/main/resources/application.properties).

### Frontend (run from `Frontend/`)

```bash
npm start                # ng serve, dev server on http://localhost:4200 (calls backend directly at :18000)
npm run build             # development build
npm run deploy             # production build → dist/time-control/browser (what copyFrontend consumes)
npm test                  # Angular's unit-test builder (Vitest under the hood)
npm run lint              # ng lint: ESLint (angular-eslint) + Prettier as a lint rule
npm run lint:fix          # ng lint --fix: formats with Prettier and auto-fixes what ESLint can
```

Formatting is owned by Prettier (`.prettierrc.json`: 4 spaces, double quotes, no bracket spacing,
120 columns - chosen to match the existing code, not Prettier's defaults) and enforced through
ESLint via `eslint-plugin-prettier`, so `ng lint` is the single entry point for both formatting and
linting. `src/index.html` is excluded: it is a plain HTML document, and the Angular template parser
used for `**/*.html` fails on its doctype.

**After every frontend code change, run the linter before reporting the change as done** — either
`npx eslint <changed files> --fix` for a handful of files or `npm run lint:fix` for a broader change,
and then `npm run lint` to confirm it is clean. `ng lint` must stay green; leaving a change
unformatted means the next person's lint run drags unrelated files into their diff.

Two traps `--fix` has already caused here, both now guarded in the code - don't undo the guards:
- It applies rule fixes, not just formatting. `@typescript-eslint/no-wrapper-object-types` rewrote
  `displayFormat: Object` to `object` in `german-date-adapter.ts` and broke the build (TS2367), so
  **always run `ng build` after a `--fix` over many files**; the line now carries an
  `eslint-disable-next-line`.
- For `**/*.html`, `eslint-plugin-prettier` needs `{parser: "angular"}` (set in `eslint.config.js`).
  Without it, it infers a JS parser and "formats" templates as JSX - it turned `app.html`'s
  `<router-outlet />` into `<router-outlet />;`, i.e. a stray semicolon rendered as text.

CORS in `application.properties` only allows `http://localhost:4200` as an origin, so the Angular
dev server must run on that exact port when talking to a locally running backend.

Frontend test coverage is currently minimal (essentially one smoke spec); don't assume existing
component/service behavior is covered by tests when refactoring.

## Backend architecture

Micronaut app (`x.timecontrol` package), annotation-driven, no Spring:

- **Language convention**: everything in the backend is English — code (identifiers, comments),
  log messages, exception/`ErrorResponse` text, and the database schema (table/column names,
  migration comments) alike. This differs from the frontend's convention
  ([see below](#frontend-architecture)), where UI-facing text stays German.
  One deliberate exception: `PdfExportService`'s generated PDF content (column headers, labels
  like "Platz"/"Rückstand"/"Höhendifferenz") stays German, since the PDF is read directly by
  German-speaking race officials — only that service's *output strings* are exempt, its own code
  (methods, fields, comments) still follows the English-only rule. The same exemption applies to
  `GaudiCsvExportService`'s CSV header row (Platz/Name/Vorname/...), the CSV counterpart of the
  Gaudi-Modus PDFs.
- **Controller/** — REST endpoints (`@Controller`), one per resource (Race, Participant, Person,
  Team, Category, AgeGroup, Measurement, RaceMeasurement, GaudiMode, Settings, PointsScale,
  Version). Nearly everything is `@Secured` behind JWT bearer auth; a handful of static
  resource/login paths are explicitly whitelisted in `application.properties`
  (`micronaut.security.intercept-url-map`).
- **services/** — business logic; controllers stay thin and delegate here.
- **entities/** — Java `record`s annotated `@MappedEntity` (Micronaut Data JDBC), one table each.
- **repositories/** — Micronaut Data `@JdbcRepository` interfaces over the entities.
- **dto/** — request/response shapes exposed over HTTP, kept separate from entities.
- **Security/** — `AuthenticationProviderUserPassword`: single hardcoded operator
  account (not a user table), credentials from `application.properties`/env vars.
- Auth is JWT bearer (`micronaut-security-jwt`); the JWT signing secret is auto-generated once and
  persisted next to the DB (`ensureJwtSecret` in `Application.java`) rather than using the
  insecure default that ships in `application.properties`.

**Domain model**: a `Race` groups `Participant` rows (one per `Person` entered in that race),
each optionally in a `Team`/`Category`/`AgeGroup`. Raw finish-line events land in `Measurement`;
`RaceMeasurement` links a measurement to a specific race/participant. `RankingService` is the
single place that turns a participant's raw duration + penalty into the value that actually
counts for ranking, and assigns standard-competition ("1224") places — reused by both PDF export
and Gaudi-Modus scoring, so ranking bugs are usually fixed there, not in each caller.

**Timing device import** (`services/TimingDataImporter` + `PollingTimingImporter` /
`StreamingTimingImporter`, `TimingEventSink`, `TimingProviderRegistry`, `TimingProviderLifecycle`,
`DeviceImportGate`, `DataImportScheduler`): timing hardware is abstracted behind
`TimingDataImporter`, which every provider implements through exactly one of two transport
sub-interfaces — which one it is, is the answer to "who drives the transfer", and there is no
separate enum for it, `instanceof` is the check:

- `PollingTimingImporter` — this backend asks the device (`ALPDESK_TIMECONTROL`, HTTP `/data`).
  `DataImportScheduler` calls it every 5s; `TimingProviderRegistry` re-applies the saved config on
  every call so a settings change takes effect immediately (which is why a polling provider must
  keep configured values in a `ThreadLocal`, not a plain field — concurrent callers interleave).
- `StreamingTimingImporter` — the device delivers on its own, over whatever the provider holds
  open: a WebSocket, a serial reader thread, or a vendor library's callback subscribed in `start()`
  and dropped in `stop()`. All three are the same case here; only who drives the transfer matters.
  `TimingProviderLifecycle` configures and starts it at startup / on a provider or config change and
  stops it on shutdown — on its own single thread, so a device that hangs while connecting cannot
  hang the settings request. The registry deliberately does *not* re-configure it per call. No such
  provider ships yet — the seam exists so one can be added without touching the scheduler or the
  controllers.
- **Both at once is allowed**: a device that pushes live *and* can be asked for its whole list (the
  usual way to catch up after a connection drop) implements both. It is then configured/started like
  a stream, stays reachable for a deliberate pull (manual import, safety pull before a reset), and is
  skipped by the 5s background poll — see `TimingProviderRegistry#getActiveScheduledPollImporter()`.

Both write through `TimingEventSink` (`TimingEvent` in, `Measurement` out), the single place that
dedupes against stored rows, decides upsert-vs-insert by whether the device id identifies an *event*
or a *participant*, and rejects invalid durations — providers never touch `MeasurementService`
themselves. Its two entry points are not interchangeable:

- `accept(TimingEvent)` — a measurement that arrived **unasked** (push). Dropped only while the
  operator has automatic import switched off, since a streaming device cannot be told to stop
  sending; it reads that switch through `isImportEnabledByOperator()`, not the effective flag,
  because `pauseDuring()` forces the latter to false. Deliberately **not** dropped during a
  reset/archive pause: a push is a single event delivered once, so discarding it loses a finish
  time for good, while the table lock already guarantees it lands either before the archive copies
  the table or after it was cleared. Matches its stored row by an indexed lookup, not by reading
  the table.
- `acceptBatch(List)` — the answer to a poll somebody **asked for**, and therefore not subject to
  the switch either. The scheduler checks it before polling; a manual import is an operator
  pressing a button; and the safety pull before a device reset/archive runs *inside* the pause on
  purpose — dropping it would lose a finish time at the one moment it is unrecoverable.

Optional device commands (reset, continuous mode, discarding the oldest start) are declared per
provider via `capabilities()` (`DeviceCapability`); controllers check the capability and answer
409 for a device that simply doesn't have that command, instead of reporting a device failure. The
active provider's capabilities (plus `supportsManualImport`) are exposed on
`GET/PUT /settings/timing-provider` so the frontend can hide controls the configured device
doesn't have.

`DataImportScheduler` always runs `AutoAssignService` after its poll, regardless of whether a
device is configured or what its transport is — auto-assign matches unassigned measurements
(device-imported, JSON-imported, or manually entered) to participants purely by querying the
measurement table, independent of polling, so pushed measurements are picked up by it too.
Device-reset/archive operations pause import for their duration via `DeviceImportGate.pauseDuring()`.
What that pause is for is the **polling** path: a polling device reports its whole list on every
poll, so a scheduled fetch still in flight when the table is cleared would re-insert the device's
entire pre-reset state. It therefore stops the scheduler's own ticks — not the deliberate pull that
runs inside the pause, and not pushed measurements, which are single events that would simply be
lost (see the two sink entry points above).

**Gaudi-Modus** (`services/gaudi/`, `GaudiModeService`): a separate scoring mode that combines
results across multiple races per `GaudiModeType` (points combination, time combination, team,
"Los"/draw pairing) via one `GaudiModeCalculator` implementation per type, looked up through a
`Map<GaudiModeType, GaudiModeCalculator>` injected as a list of beans.

**Database**: SQLite at `database/time-control.db` in dev (packaged builds anchor it under
`~/alpdesk-time-control/` instead — see README). Foreign keys, WAL mode, and a busy-timeout are set
via JDBC URL query params, not `connection-init-sql` (the SQLite JDBC driver only executes the first
`;`-separated statement of a multi-pragma string). Schema is managed by Flyway migrations under
`src/main/resources/db/migration/`.

## Frontend architecture

Angular 22 standalone-style app using Angular Material and NgRx.

- **Language convention**: user-facing text (template labels, buttons, dialog titles, validation/
  error messages) is German — the target audience is German-speaking ski-club race officials. All
  code itself (variable/method/class names, comments, commit messages) stays in English. Keep new
  UI strings German and new identifiers English; don't translate one into the other's territory.
- **State**: NgRx `store`/`effects`, one feature slice per domain under `store/<feature>/`
  (actions/reducer/selectors/effects). Effects call the matching `services/<feature>.service.ts`
  (thin `HttpClient` wrappers) and dispatch success/failure actions; components read state via
  selectors rather than calling services directly.
- **components/**: one folder per feature/page, matching the store slices (race-list,
  participant-list, measurement-list, gaudi-modus, settings, etc.).
- **Subscription cleanup**: existing components use a `private destroy$ = new Subject<void>()` plus
  `takeUntil(this.destroy$)` and an `ngOnDestroy` — that is correct and stays as is; don't convert
  them wholesale. New components (and ones being reworked anyway) use Angular's
  `takeUntilDestroyed()` from `@angular/core/rxjs-interop` instead — without an argument only inside
  an injection context (constructor/field initializer), otherwise with an injected `DestroyRef`.
  `race-live-links-dialog.component.ts` is the reference for the new style. Both patterns coexisting
  is intentional.
- **guards/auth.guard.ts** + **interceptors/auth.interceptor.ts**: route guarding and attaching the
  JWT bearer token to outgoing requests, backed by `store/auth`.
- **environments/**: `environment.ts` (dev) hardcodes `apiUrl: 'http://localhost:18000'`, relying on
  the backend's CORS config (`application.properties`, allowed origin `http://localhost:4200` only)
  to permit cross-origin calls from `ng serve`. `environment.prod.ts` uses `apiUrl: ''` since the
  production build is copied into and served by the same Micronaut jar it talks to.

## Full reviews

For a categorized stability/best-practice/functionality review across Backend and Frontend, use `/time-control-code-review`
skill instead of an ad-hoc manual review — e.g. `/time-control-code-review high` for the
current branch, `/time-control-code-review <PR#>` for a PR, or `/time-control-code-review ultra` for a deep multi-agent cloud
review. Group the resulting findings under these five categories: **Best Practice**, **Stabilität**,
**Performance**, **Funktionalität**, **Memory-Leaks**.

## Full e2e

For end-to-end verification against real (throwaway) backend instances — as opposed to the Spock
suite under `Backend/src/test/groovy`, which mocks/unit-tests individual services — use
`/time-control-e2e` instead of running the scripts under `e2e-tests/` by hand. It builds the jar,
starts each suite's isolated instance(s), runs its `run_all.sh`, and tears everything down
afterward; see each suite's own `README.md` (`e2e-tests/bergsprint/`,
`e2e-tests/kondi-federation/`) for what it covers and its prerequisites.

Every suite runs on synthetic data only. `kondi-federation` ships its demo field under
`fixtures/` (regenerate with `make_fixtures.py`) plus `fixtures/reference_gesamtwertung.pdf`, a
Gesamtwertung that Time Control itself exported from that data and which its phase 10 diffs every
run against. **Real race data never goes into the repo** — it holds names, birth years and clubs of
mostly underage participants. Each suite reads its data from a directory the caller can override
(`KONDI_DATA_DIR` for the federation suite), and `e2e-tests/*/local-data/` is gitignored for
exactly that purpose.

These suites also run in CI, on every pull request, through
[`.github/workflows/e2e-tests.yml`](.github/workflows/e2e-tests.yml) — separate from `pr-checks.yml`,
which only covers the Spock suite and the frontend build. **Nothing discovers suites
automatically.** A new suite, or a new `run_*.sh` variant of an existing one, is covered locally by
`/time-control-e2e` but stays invisible to CI until it is added to that workflow's matrix:

```yaml
          - name: <displayed as the check name>
            suite: <directory under e2e-tests/>
            script: run_all.sh
```

Adding it there is enough — the aggregate job `E2E Suites` is what the branch ruleset requires, so
a new entry is covered without touching any repository settings. A suite whose `run_all.sh` needs
an argument (only `saison-upgrade` so far, which takes the instance's database path) additionally
needs `needs_db_path: true` and a matching branch in the *Run Suite* step.
