---
name: time-control-ultra-code-review
description: "Full non-diff, multi-agent deep review of the current Backend+Frontend codebase against five criteria (Bugs, Best Practice, Funktionalität, Stabilität, Performance), grouped by severity with a production-readiness punch list. Use when the user invokes /time-control-ultra-code-review, or explicitly asks for a full/ultra codebase review that is NOT a diff/branch/PR comparison."
---

## What this does

Unlike [time-control-code-review](../time-control-code-review/SKILL.md) (which wraps the
built-in `code-review` skill and is diff/PR-based unless `ultra` is passed), this skill never
looks at a diff, branch comparison, or PR. It reads the **entire current state** of
Backend + Frontend, area by area, using several parallel research agents that each read full
files in their assigned area — not excerpts, not `git diff` — and evaluates every area against
the same five criteria. Findings are then merged and presented primarily by **Härtegrad**
(severity), with a closing section on what must change before relying on this in a live,
production race-day setting (see [CLAUDE.md](../../CLAUDE.md) for the single-laptop,
no-external-services deployment model and the German-frontend/English-backend convention).

Take no `<PR#>`/branch/`--comment`/`--fix`/`--post` style arguments — if the user passes any,
ignore them and note that this skill always reviews the current working tree in full, not a diff.

## Step 1 — Spawn parallel deep-read agents

In a **single assistant turn**, launch the following agents via the `Agent` tool, each with
`subagent_type: general-purpose` and `run_in_background: false` (they must all return before
synthesis, and running them foreground-but-parallel-in-one-message keeps this a single review
pass instead of a background-notification chain). Each agent gets its own area so the review
covers the whole codebase without any single agent's context window forcing it to skim:

1. **Backend API-Schicht** — `Backend/src/main/java/x/timecontrol/Controller/`,
   `Backend/src/main/java/x/timecontrol/Security/`, `Backend/src/main/java/x/timecontrol/dto/`,
   plus `Backend/src/main/resources/application.properties`'s
   `micronaut.security.intercept-url-map` section.
2. **Backend Kern-Services (Domain)** — every service directly under
   `Backend/src/main/java/x/timecontrol/services/` that is NOT listed in area 3, i.e.
   `RaceService`, `ParticipantService`, `PersonService`, `TeamService`, `CategoryService`,
   `AgeGroupService`, `RankingService`, `RankingViewService`, `RaceMeasurementService`,
   `MeasurementService`, `SettingsService`, `PointsScaleService`.
3. **Backend Timing-Import & Scheduling** — `TimingDataImporter`, `TimingProviderRegistry`,
   `DataImportScheduler`, `AutoAssignService`, `MeasurementTableLock`,
   `MeasurementImportParsers`, `ParticipantImportParsers`, `ParticipantResultImportParsers`,
   `AlpdeskTimeControlDataImportService`, `ValidationUtils`, `PdfExportService` (all under
   `Backend/src/main/java/x/timecontrol/services/`).
4. **Backend Gaudi-Modus** — `Backend/src/main/java/x/timecontrol/services/gaudi/` and
   `GaudiModeService.java`.
5. **Backend Datenmodell & Lifecycle** — `Backend/src/main/java/x/timecontrol/entities/`,
   `Backend/src/main/java/x/timecontrol/repositories/`,
   `Backend/src/main/resources/db/migration/`, `Backend/src/main/java/x/timecontrol/listener/`,
   `Backend/src/main/java/x/timecontrol/util/`, `Backend/src/main/java/x/timecontrol/Application.java`,
   and the rest of `application.properties` not covered in area 1.
6. **Frontend State-Management** — every feature slice under `Frontend/src/app/store/`
   (actions/reducer/selectors/effects) plus `Frontend/src/app/services/`.
7. **Frontend UI & Infrastruktur** — everything under `Frontend/src/app/components/`,
   `Frontend/src/app/guards/`, `Frontend/src/app/interceptors/`, `Frontend/src/app/models/`,
   `Frontend/src/app/utils/`, and `Frontend/src/environments/`.

Give every agent the same prompt skeleton (fill in its own area/file list), self-contained since
the agent has no conversation context:

> You are reviewing the CURRENT STATE of a real production codebase for a ski-race-timing app —
> not a diff, not a PR, not recent commits. Read every file listed below in full.
>
> Files/directories: <area's paths>
>
> Context: Time Control is a self-contained Micronaut/Java backend + Angular frontend for timing
> ski races live at club events, backed by local SQLite, often running on a single laptop with no
> internet at the venue. Race data entered during review is frequently real, currently-used data.
> Backend code/comments/logs are English-only; Frontend user-facing strings are German, code stays
> English. [Add any other relevant CLAUDE.md excerpt for this area, e.g. RankingService being the
> single source of truth for placings, or the JDBC multi-pragma SQLite caveat.]
>
> Evaluate everything you read against exactly these five criteria — an issue may fit more than
> one, list it under its primary one:
> - **Bugs** — incorrect logic, wrong results, crashes, unhandled exceptions/edge cases.
> - **Best Practice** — style/structure/convention violations, missed reuse, dead code, violating
>   this project's language convention.
> - **Funktionalität** — behavior that doesn't match what the surrounding code/domain implies it
>   should do, incomplete features, silently-wrong outputs.
> - **Stabilität** — race conditions, error-handling gaps, resource/connection handling, anything
>   that could crash or wedge a live event.
> - **Performance** — inefficient queries/algorithms, N+1s, unnecessary blocking work, anything
>   that would degrade during a live event with many participants/measurements.
>
> For every finding report: file:line, the criterion, a one-sentence description of the concrete
> failure scenario (what input/state causes what wrong behavior), and a severity of Kritisch /
> Hoch / Mittel / Niedrig — judged by real-world impact on a live race-timing event (data loss or
> wrong race results are Kritisch; a papercut in a rarely-used settings screen is Niedrig). Flag
> whether fixing it is something you'd insist on before trusting this in production
> (`produktionsrelevant: true/false`). Skip purely stylistic nitpicks with no real consequence.
> Return your findings as a structured list, not prose.

## Step 2 — Synthesize

Once all seven agents have returned:

1. Pool every finding, dedupe near-duplicates (the same underlying issue spotted from two
   angles, e.g. a service bug also visible from its controller), keeping the more precise
   file:line and description.
2. Group the final list **primarily by Härtegrad**, in this order: **Kritisch**, **Hoch**,
   **Mittel**, **Niedrig**. Within each severity bucket, tag each finding with its criterion
   (Bug / Best Practice / Funktionalität / Stabilität / Performance) and whether it's
   Backend or Frontend. Drop empty severity buckets rather than showing them with no entries.
3. Close with a **"Für den produktiven Betrieb"** section: a short, concrete punch list built
   only from the `produktionsrelevant: true` findings (plus any Kritisch/Hoch items regardless
   of that flag), phrased as actions — what to fix before the next live event, not a restatement
   of the findings above.
4. Write the summary in German (matching this project's audience), keep file/method names and
   code identifiers as-is, and use `file:line` refs so they're clickable.
