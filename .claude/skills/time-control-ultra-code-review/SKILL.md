---
name: time-control-ultra-code-review
description: "Full non-diff, multi-agent deep review of the current Backend+Frontend codebase of Time Control against eight criteria (Bugs, Stabilität, Funktionalität, Best Practice, Performance, Memory-Leaks, Testabdeckung, Struktur), grouped by severity, with a test-coverage matrix, a structure verdict and a production-readiness punch list for the next race. Honours the decision register docs/review/entscheidungen.md. Use when the user invokes /time-control-ultra-code-review, or explicitly asks for a full/ultra codebase review that is NOT a diff/branch/PR comparison. For a focused review of one topic use time-control-auswertung-review, time-control-bedienung-review or time-control-zeitmessung-review instead."
---

## What this does

This skill never looks at a diff, branch comparison or PR. It reads the **entire current state** of Backend and
Frontend area by area. Several parallel research agents each read the full files of their area, not excerpts and not
`git diff`, and evaluate them against the same eight criteria. The findings are merged and presented by
**Härtegrad** (severity). The report adds a test-coverage matrix and a structure verdict, and closes with what must
change before the next live race.

[CLAUDE.md](../../../CLAUDE.md) is the yardstick: code style, English backend / German UI (with the exemption for the
PDF and CSV output), `RankingService` as the single place for places, the timing-provider seams and the two sink entry
points, the import pause, the Gaudi-Modus calculators, the Flyway rules, "Backend tests (always)", the frontend lint
rules and `takeUntilDestroyed` for new code. A deviation from it is a finding. A rule the code has outgrown is also a
finding, as a suggestion to update CLAUDE.md.

It follows sections 1 to 3 of [.claude/review-base.md](../../review-base.md): the rules (current working tree,
read-only, **never** touch `Backend/database/` - real race data), the decision register
[docs/review/entscheidungen.md](../../../docs/review/entscheidungen.md) (what an entry covers is not reported, only
"Entscheidung prüfen (E..)" when its premise no longer holds), and what counts as a finding with its severities.
Unlike the scoped reviews, this one has **no finding budget** - it is meant to find everything.

Ignore any `<PR#>`, branch, `--comment`, `--fix` or `--post` arguments and say that this skill always reviews the
whole working tree.

## Step 0 - Ground truth (parallel to step 1)

In the same turn as the agents, start in the background:

- `cd Backend && JAVA_HOME=$(/usr/libexec/java_home -v 25) ./gradlew test` (its own throwaway DB; a running instance
  on port 18000 is not affected),
- `cd Frontend && npm run lint && npm test -- --watch=false`.

Afterwards count the tests and failures from `Backend/build/test-results/test/*.xml` and from the Vitest summary. A red
test or lint run is itself a finding (Hoch). The e2e suites are **not** run (they need the jar and minutes per suite);
their code is read by agent 9.

## Step 1 - Spawn parallel deep-read agents

In a **single assistant turn**, launch the following agents via the `Agent` tool, each with
`subagent_type: general-purpose` and `run_in_background: false`, so that they all return before the synthesis. Base
paths: `Backend/src/main/java/x/timecontrol/` (below `…/`), tests in `Backend/src/test/groovy/x/timecontrol/`, and
`Frontend/src/app/`.

1. **Backend API & Security**:
   - `…/Controller/**`, `…/dto/**`, `…/Security/**`
   - `micronaut.security.*`, CORS and `endpoints.*` in `Backend/src/main/resources/application.properties`
   - Focus:
     - every endpoint `@Secured` except the whitelisted ones (`intercept-url-map`); the public live endpoints
       (`RaceLiveController`) expose only what the operator's switches allow
     - thin controllers; a service's `IllegalArgumentException` → 400, `IllegalStateException` → 409, 404 for unknown
       ids - consistently, via `ErrorResponse`
     - DTOs instead of entities; Serde leaving out `""`/`[]` where they carry meaning (`@JsonInclude(ALWAYS)`)
     - upload endpoints (participant/measurement import, cover page PDF): size, type, encoding
     - `GlobalExceptionHandler`: nothing internal (stack traces, SQL) reaches the client
2. **Backend Auswertung (single race)**:
   - `…/services/{RankingService,RankingViewService,ParticipantService,SeasonService,AgeGroupService,
     StartGroupTemplateService,CategoryService,TeamService,PersonService,PointsScaleService}.java`
   - Focus:
     - places: ties on the printed value, sort direction, penalties, start-group offsets, DNS/DNF/DSQ, rounding to
       hundredths (`roundForDisplay`, `roundToTensOfMs`), "Rückstand"
     - age-class resolution: season from the race date and the configured season start, variant, gender, birth year
     - start order, race numbers, start groups, copying participants between races
     - participant import (CSV/XLSX, mapping, row errors), results import by race number, CSV exports
3. **Backend Ausgaben**:
   - `…/services/{PdfExportService,RaceLiveService,GaudiCsvExportService}.java`, `…/Controller/RaceLiveController.java`
   - Focus:
     - every printed/served value comes from `RankingService`/`RankingViewService`, the same as the UI shows
     - columns and switches (StNr./Jg., ID, Strafe/Gesamt, Team, Kategorie), truncation, page breaks, cover pages
     - HTML escaping of the live view; German output strings (exempt from the English rule)
4. **Backend Gaudi-Modus**:
   - `…/services/gaudi/**`, `…/services/GaudiModeService.java`, `…/Controller/GaudiModeController.java`
   - Focus:
     - each calculator (LOS, TEAM, TIME_COMBINATION, POINTS_COMBINATION): its scoring rule, ties, DNS handling, a
       participant missing from one leg, keep-*-in-ranking flags, category/age-group filters
     - Los drawing and pairing persistence, redraw after participant changes
     - season/variant of mixed races (E09)
5. **Backend Zeitmessung**:
   - `…/services/{TimingDataImporter,PollingTimingImporter,StreamingTimingImporter,TimingEvent,TimingEventSink,
     TimingProviderRegistry,TimingProviderLifecycle,DeviceImportGate,DeviceCapability,DataImportScheduler,
     AlpdeskTimeControlDataImportService,MeasurementService,MeasurementTableLock,MeasurementImportParsers,
     RaceMeasurementService,AutoAssignService,TextFileDecoder,ValidationUtils,ParticipantImportParsers,
     ParticipantResultImportParsers}.java`, `…/Controller/{MeasurementController,RaceMeasurementController}.java`
   - Focus: the rules in CLAUDE.md "Timing device import" (two transports, `ThreadLocal` in polling providers,
     `accept` vs. `acceptBatch`, the pause, capabilities → 409), dedupe/upsert by device id, auto-assign, manual
     assignment, copying measurements to a race and syncing them to participants, archive/reset, timeouts of device
     calls, the lifecycle thread
6. **Backend Datenmodell, Lifecycle & Build**:
   - `…/entities/**`, `…/repositories/**`, `Backend/src/main/resources/db/migration/**`, `…/listener/**`, `…/util/**`,
     `…/Application.java`, the rest of `application.properties`, `Backend/build.gradle`, `.github/workflows/**`
   - Focus:
     - constraints and indexes matching the queries; native queries listing every column (cover-page BLOB variants)
     - Flyway: never edit an applied migration, table rebuilds like V4/V6, SQLite pragmas via the JDBC URL
     - DB directory, JWT secret, generated password, backups (`DatabaseBackupListener`), desktop window, browser start
     - packaging (shadowJar, jpackage, native), `copyFrontend`, CI: `pr-checks.yml`, the e2e matrix in
       `e2e-tests.yml` covering every suite/`run_*.sh`, `build-installers.yml`
7. **Frontend State & Services**:
   - `store/**`, `services/**`, `models/**`, `interceptors/**`, `guards/**`, `app.config.ts`, `app.routes.ts`
   - Focus:
     - one slice per feature; effects: `mergeMap`/`switchMap`/`concatMap`/`exhaustMap` choice and late answers that
       overwrite a newer selection; reload after writes; polling stop
     - models matching the backend DTOs (including fields Serde omits); `extractErrorMessage()` for errors
     - auth token handling and logout on 401
8. **Frontend UI**:
   - `components/**`, `utils/**`, `Frontend/src/environments/**`
   - Focus:
     - components read state via selectors, do not call services
     - subscriptions: `destroy$` in existing components (E06), `takeUntilDestroyed` in new ones; dialogs and
       `afterClosed()`; object URLs revoked
     - German UI texts, English code; form validation matching the backend's; date handling (`german-date-adapter`,
       time zone, season boundary from the backend)
     - what the operator sees on race day: loading/error states, confirmations before deleting, snackbar texts
9. **Tests**:
   - all of `Backend/src/test/**`, all `*.spec.ts`, and the e2e suites under `e2e-tests/` (scripts, parsers,
     fixtures, READMEs) - read, never run
   - compared against the main code (list the services with their public methods and the controllers with their
     endpoints)
   - Focus:
     - the checklist in CLAUDE.md "Backend tests (always)" per feature: happy path, every validation rule (400, as a
       `where:` table), the business rules (ranking ties/sort/penalties/status, rounding, age-group/season/variant
       scoping), PDF text read back with `PDFTextStripper`, the live view's response and `renderHtml`
     - spec independence, flaky patterns (sleeps, fixed ports, today's date, order dependence)
     - e2e parsers that still read the old PDF layout (kondi reference PDF); steps that print `MISMATCH`/
       `ABWEICHUNGEN` but exit 0; every suite and `run_*.sh` variant listed in `.github/workflows/e2e-tests.yml`
     - which frontend logic has no unit test but should (reducers with late-answer guards, utils, selectors)
   - Deliver the coverage matrix (see below) in addition to the findings.

Give every agent the same self-contained prompt skeleton (the agent has no conversation context), with its own area,
file list and focus filled in, followed by sections 2 and 3 of [.claude/review-base.md](../../review-base.md)
verbatim:

> You are reviewing the CURRENT STATE of a real codebase: not a diff, not a PR, not recent commits. Read the
> repository's `CLAUDE.md` first - it is the binding convention for structure, style and tests - then
> `docs/review/entscheidungen.md`, then every file listed below in full.
>
> Area: <name>. Files/directories: <paths>. Focus: <focus points>.
>
> Context:
> - Time Control times ski-club races live at the venue: a Micronaut / Java 25 backend (Micronaut Data JDBC on a
>   local SQLite file, Flyway, Spock tests) serving a REST API and the built Angular 22 frontend (Material, NgRx),
>   packaged as a desktop app on one laptop, usually offline.
> - One operator creates races, enters or imports participants, sets up age groups per season and variant, takes
>   finish times from a timing device or by hand, and prints result lists (single race and Gaudi-Modus combinations)
>   that race officials check by hand. The participants are mostly minors.
> - Backend code, comments and messages are English; frontend UI texts, PDF and CSV output are German.
>
> Rules:
> - **This is read-only**: do not edit files, do not run the application or the e2e suites, never open
>   `Backend/database/` (real race data) or `e2e-tests/*/local-data/`.
> - You may use `grep`/`find` to find callers or tests of what you read.
>
> Evaluate everything you read against exactly these eight criteria. An issue may fit more than one; list it under
> its primary one:
> - **Bugs**: incorrect logic, wrong results, crashes, unhandled exceptions or edge cases.
> - **Stabilität**: race conditions, transactions, error handling, resource handling, anything that could crash or
>   wedge the app during a live race or lose a finish time.
> - **Funktionalität**: behaviour that doesn't match CLAUDE.md or what the race domain implies (race rules, how
>   officials read a result list), incomplete features, silently wrong output.
> - **Best Practice**: convention violations (CLAUDE.md "Code style", Micronaut, Angular/NgRx), missed reuse, dead
>   code, language convention violations.
> - **Performance**: N+1 queries, missing indexes, loading too much (cover-page BLOBs!), blocking work, anything that
>   degrades with many participants, measurements, races or pages.
> - **Memory-Leaks**: subscriptions, dialogs, intervals and object URLs never released in the frontend; growing
>   collections, threads or executors never stopped in the backend.
> - **Testabdeckung**: behaviour of your area without a test that would catch its breakage, measured against the
>   CLAUDE.md checklist; weak assertions. Name the concrete missing case and the spec it belongs in.
> - **Struktur**: violations of the package layout (Controller → service → repository, dto vs. entities, test packages
>   mirroring main), abstractions in advance, classes that are too big or mix responsibilities; in the frontend the
>   component/store/service split.
>
> Skip purely stylistic nitpicks without consequence. Return a structured list, not prose.

Agent 9 additionally gets:

> Also deliver a **coverage matrix**: one row per backend feature (Rennen, Teilnehmer & Personen, Teilnehmer-Import,
> Ergebnis-Import, Altersgruppen/Saison/Varianten, Startreihenfolge & Startgruppen, Ranking & Rundung,
> PDF-Export, Live-Ansicht, CSV-Export, Gaudi LOS, Gaudi TEAM, Gaudi TIME_COMBINATION, Gaudi POINTS_COMBINATION,
> Zeitmessung Gerät, Messungen & Auto-Assign, Messungen einem Rennen zuordnen, Einstellungen, Security). Columns:
> Happy Path, Validierung 400, 404/409, Geschäftsregeln, Ausgabe gelesen (PDF-Text/HTML), e2e-Suite. Each cell is
> ✅ covered / ⚠️ partial / ❌ missing / – not applicable, with the spec or suite name.

## Step 2 - Synthesize

Once all agents and the step-0 runs have returned:

1. Pool every finding and drop what the decision register covers (say how many, by entry). Dedupe near-duplicates,
   such as a service bug that is also visible from its controller or the test agent's view of it, and keep the more
   precise file:line.
2. Spot-check every **Kritisch** and **Hoch** finding yourself by reading the cited lines. Drop what does not hold,
   and downgrade what is overstated.
3. Structure the report:
   - **Überblick**:
     - test run (backend tests and failures, frontend tests, duration), lint result
     - numbers of findings per severity and per criterion, register hits (`E04 ×1`)
     - two or three sentences on the overall state
   - **Befunde nach Härtegrad**, in the order Kritisch, Hoch, Mittel, Niedrig; drop empty buckets. Tag each finding
     with its criterion and Backend/Frontend, then give the description, the suggested fix and its size (S/M/L).
   - **Testabdeckung**: the coverage matrix from agent 9 (checked against the other agents' Testabdeckung findings),
     plus the frontend and e2e test situation in two or three sentences.
   - **Struktur**: a short verdict on the backend and frontend structure. Where does the code match CLAUDE.md, and
     where does it drift? Include suggestions for updates if the code outgrew a rule.
   - **Für den nächsten Renntag**: a concrete punch list of actions, phrased as actions and not as a restatement of
     the findings, ordered by priority. Build it from every `produktionsrelevant: true` finding and every
     Kritisch/Hoch finding.
   - **Kandidaten fürs Register**: findings the user will likely accept as intended, as ready-to-paste entries.
4. Present the report in German (headings, severity labels, descriptions). Keep file, class and method names and
   identifiers as they are, and use clickable `path:line` references relative to the repository root.
5. Do not fix anything unasked. At the end, offer to work through the punch list, e.g. starting with Kritisch/Hoch.
