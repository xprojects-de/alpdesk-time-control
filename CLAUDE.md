# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Time Control (a.k.a. "Alpdesk Time-Control") is a self-contained race-timing application for ski
club events: a Micronaut/Java backend serving a REST API plus the built Angular frontend as static
resources, backed by a local SQLite database. It's designed to run as a single packaged desktop app
(jpackage installer / native-image binary / shadow jar) on a laptop at the race venue, with no
external services required. See [README.md](README.md) for end-user installation/packaging details
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
./gradlew shadowJar                  # build the runnable fat jar (build/libs/time-control.jar)
./gradlew jpackageAppImage           # local self-contained app image (no installer wrapper)
./gradlew jpackageInstaller          # platform installer (.dmg/.exe/.deb)
```

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
```

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
  (methods, fields, comments) still follows the English-only rule.
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

**Timing device import** (`services/TimingDataImporter`, `TimingProviderRegistry`,
`DataImportScheduler`): timing hardware is abstracted behind the `TimingDataImporter` interface;
`TimingProviderRegistry` resolves the currently-configured provider from `AppSettings` and
re-applies its config on every call so a settings change takes effect immediately.
`DataImportScheduler` polls the active provider every 5s and always runs `AutoAssignService`
afterwards regardless of whether a device is configured — auto-assign matches unassigned
measurements (device-imported, JSON-imported, or manually entered) to participants purely by
querying the measurement table, independent of polling. Device-reset/archive operations pause the
scheduler for their duration via `pauseDuring()` to avoid writing stale pre-reset data back in.

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
- **guards/auth.guard.ts** + **interceptors/auth.interceptor.ts**: route guarding and attaching the
  JWT bearer token to outgoing requests, backed by `store/auth`.
- **environments/**: `environment.ts` (dev) hardcodes `apiUrl: 'http://localhost:18000'`, relying on
  the backend's CORS config (`application.properties`, allowed origin `http://localhost:4200` only)
  to permit cross-origin calls from `ng serve`. `environment.prod.ts` uses `apiUrl: ''` since the
  production build is copied into and served by the same Micronaut jar it talks to.

## Full reviews

For a categorized stability/best-practice/functionality review across Backend and Frontend, use the
built-in `/code-review` skill instead of an ad-hoc manual review — e.g. `/code-review high` for the
current branch, `/code-review <PR#>` for a PR, or `/code-review ultra` for a deep multi-agent cloud
review. Group the resulting findings under these five categories: **Best Practice**, **Stabilität**,
**Performance**, **Funktionalität**, **Memory-Leaks**.
