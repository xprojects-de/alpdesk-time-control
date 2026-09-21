---
name: time-control-e2e
description: "Run all Time Control end-to-end test suites under e2e-tests/ (currently the Bergsprint single-race import test, the Kondi2025 5-instance federation test with its run_all/run_phased/run_phased_results/run_phased_results_with_status variants, the Nachtslalom auto-assign/measurement-editing test, the Rundung rounding-consistency regression test, the Saison season-scoped age-class test, and the Saison-Upgrade migration test) against throwaway, isolated backend instances. Use when the user invokes /time-control-e2e or asks to run the project's end-to-end tests."
---

## What this runs

Every subdirectory of `e2e-tests/` that has its own `run_all.sh` is one suite:

- `e2e-tests/bergsprint/` — single race, real device-import path, category + Los-Modus scoring.
  Has a second runnable variant, `run_manual.sh` (own fresh instance needed, same reason as
  kondi's variants): the same race without live auto-assign — measurements poll in unassigned,
  get archived onto the race, are assigned to participants by hand via
  `PUT /race-measurements/{id}` (incl. the duplicate-assignment 409 and a corrected mix-up),
  DNF/DSQ are recorded before the sync, and its times carry deliberate rounding edge cases.
  Its last step (`manual_verify_dns_scope.py`) checks that the "nicht gewertet" list is scoped
  like the ranking above it across all 13 PDF variants and the live results in both forms (the
  `/results` JSON and the `/results-html` page spectators open).
- `e2e-tests/kondi2025-federation/` — 5-instance station federation test (1 main + 4 stations),
  with four runnable variants, each needing its own fresh set of 5 instances (they all create
  races with the same names, so none can run against instances another variant already used):
  - `run_all.sh` — the baseline scenario: stations enter results, export, MAIN imports them back,
    then full ranking/gender/age-group/Gaudi verification (phases 1–10).
  - `run_phased.sh` — the same scenario but with results entered/exported/imported in 3 waves
    instead of one shot at the end, to check partial imports don't error or corrupt data.
  - `run_phased_results.sh` — runs phases 1–5 like `run_all.sh`, then exercises the dedicated
    **results** export/import round-trip (`/participants/export/results-csv` +
    `/participants/import-results-mapped`, phase 4b): export MAIN's results per race, reset them
    via `clear-result`, reimport from that CSV, and verify every result was restored exactly —
    distinct from the roster export/import path, which also carries identity data.
  - `run_phased_results_with_status.sh` — runs phases 1–10 like `run_phased_results.sh`, then adds
    phases 11–13: inject targeted DNS/DNF/DSQ on 5 chosen participants, create 6 Gaudi
    points-combination instances covering every `keepDnsInRanking`/`keepDnfInRanking`/
    `keepDsqInRanking` flag combination and verify each against an independent Python
    recalculation (JSON ranking + PDF "nicht gewertet" list), then a guardrail check that these
    flags have no effect on `TIME_COMBINATION` mode.
  See its [README.md](../../e2e-tests/kondi2025-federation/README.md) for full detail on each
  variant — treat it as authoritative if a new variant script appears there that isn't listed here.
- `e2e-tests/nachtslalom/` — two-run race exercising every `AutoAssignService` combination/error
  case (enable/skip/set-next/disable, default-by-raceNumber vs. default-by-startSequence, a
  participant marked DSQ/DNF/DNS while the cursor sits on them, `discardOldestStart()`) plus
  manual measurement corrections and the reset-time regressions (device unreachable during
  archive+reset; a manual and a device measurement colliding on the same low id right after a
  reset). Also uses `fake_device.py`, like bergsprint.
- `e2e-tests/rundung/` — rounding-consistency regression test: a near-tie 2ms apart that must
  print/rank as the same place, a "Rueckstand"/"Abweichung" that must equal the difference of the
  two already-rounded printed values (not an independently-rounded raw gap), the same place-tie
  reaching into a derived Lauf-2 start order, and the DESC Zeit-Kombination sign fix (checked
  against the actual PDF text via `pdftotext`, not just the JSON API). No timing device involved -
  results are set directly via `PUT`/`POST /participants` - so it runs much faster than
  bergsprint/nachtslalom.
- `e2e-tests/saison/` — season-scoped age classes end to end: which season a race is scored in
  follows its *date* and the configured season boundary, and with it which age classes apply.
  Covers the post-upgrade state (only the upgrade year configured, so a past season's race comes
  out "ohne Altersklasse" without any export failing), the rollover in both directions, moving and
  un-moving the season boundary, and a Gaudi-Modus spanning two seasons — which must produce a
  ranking, a "nicht gewertet" list, a PDF and a CSV rather than an error, scored against the first
  race's season. Birth years are chosen so the same person is U16 in one season and U14 in the
  other, which is what makes a wrong season visible. No timing device, no external data.
- `e2e-tests/saison-upgrade/` — migration V4 (the `age_group` table rebuild) applied to a database
  that already holds age groups: no row lost, **ids preserved** (the fixture uses non-contiguous
  ids on purpose), AUTOINCREMENT high-water mark carried over, no leftover `age_group_v1`, and the
  point of the rebuild — the same class name now allowed once per season. Then the consequence for
  race history: a past season's race comes out "ohne Altersklasse" and is fixable from the UI by
  rolling a season backwards. The only suite that does **not** start on an empty database:
  `make_fixture.py` assembles a V3-schema database from the repo's own V1-V3 migration files, and
  `start_instances.sh` passes `-Dflyway.datasources.default.validate-on-migrate=false` because that
  fixture's flyway history is hand-written with NULL checksums (V4 itself is applied normally).
  Its `run_all.sh` takes the instance's DB path — `start_instances.sh` prints it — as an argument;
  pass it, or the SQLite-level checks are skipped.

Each suite starts its own throwaway backend instance(s) via its own `start_instances.sh` into a
fresh `mktemp -d` work dir with an isolated SQLite DB — **never** the real
`Backend/database/time-control.db`. Treat these prerequisites and the per-suite `README.md` as
authoritative if anything here is out of date.

## Safety check — do this first, every time

Run `pgrep -fl 'time-control.jar'` before starting anything. If it finds a process already
running, **stop and ask the user** before proceeding: cleanup for these suites runs
`pkill -f 'time-control.jar'`, which kills *every* process matching that name — including a real
instance running live at a club event. Only proceed automatically when no matching process is
found.

## Steps

1. Build the jar once: `cd Backend && ./gradlew shadowJar` (produces
   `Backend/build/libs/time-control.jar`). Skip the rebuild only if that jar already exists and
   is newer than the newest file under `Backend/src`. The Backend requires Java 25
   (`sourceCompatibility 25`); if the default `java` on PATH is older, running the jar fails with
   `UnsupportedClassVersionError` and the instance's health check comes back HTTP 000/connection
   failure with no obvious cause until you check `backend.log`. Export `JAVA_HOME` to a Java 25
   install before building/running (`/usr/libexec/java_home -V` lists installed JVMs) — and
   re-export it in every subsequent command, since exported env vars don't persist between
   separate shell invocations.
2. For `kondi2025-federation`, check its 4 required CSVs exist first (see its
   [README.md](../../e2e-tests/kondi2025-federation/README.md)):
   `race1_schnelligkeit_import.csv`, `race2_gleichgewicht_import.csv`,
   `race3_kraft_import.csv`, `race4_lauf_import.csv`. This repo ships without real participant
   data for privacy reasons, so if any are missing, **skip this suite** with a clear note in the
   final summary instead of failing.
3. Run the runnable suites **one at a time** (not in parallel — cleanup of one must not race
   another's ports/PIDs/work dir), each from its own directory:
   a. `./start_instances.sh <absolute-path-to-time-control.jar>` — let it create its own temp
      work dir; note the work dir and PIDs it prints.
   b. Check the printed health-check output shows the expected ports responding (HTTP 200/302
      etc., not connection failures) before continuing.
   c. `./run_all.sh` — record pass/fail. The scripts use `set -euo pipefail`, so they stop at
      the first failed step/verification. For `saison-upgrade` only, pass the instance database
      path that its `start_instances.sh` printed (`./run_all.sh <work-dir>/app/database/time-control.db`);
      without it that suite skips its SQLite-level checks and says so.
   d. Clean up regardless of outcome: `pkill -f 'time-control.jar'` (plus
      `pkill -f 'fake_device.py'` for bergsprint/nachtslalom), then `rm -rf` that suite's temp work dir.
   e. For `kondi2025-federation` only, if step 2 didn't skip it: repeat a-d three more times, once
      each with `./run_phased.sh`, `./run_phased_results.sh`, and
      `./run_phased_results_with_status.sh` instead of `./run_all.sh` — fresh instances/work dir
      each time, same CSVs, same cleanup.
4. Report a final summary with three parts:
   a. A short recap of what was actually done — whether the jar was (re)built or reused, which
      suites ran, which were skipped and why (e.g. missing CSVs), and which of the four
      `kondi2025-federation` variants ran.
   b. A summary table: suite → ran/skipped, pass/fail, and for any failure point at
      `backend.log` inside that suite's (now-deleted, so quote it before cleanup) work dir and
      the failing script's output.
   c. An explicit, unambiguous overall verdict as the closing line — e.g. "Alle gelaufenen Suiten
      erfolgreich" or "Fehlgeschlagen: <suite(s)>" — don't make the user infer success from the
      table alone.
   Present this summary in German — prose, table labels, and the verdict in German, but keep
   suite names, file paths, and quoted log/script output as-is.

## Notes

- These suites are the closest thing this project has to full-stack e2e coverage — the Spock
  suite (`./gradlew test` in `Backend/`) and Angular unit tests are separate and unaffected.
- Don't run this against the dev server on :18000/:4200 or against the real database — the whole
  point of `start_instances.sh` is isolation from both.
