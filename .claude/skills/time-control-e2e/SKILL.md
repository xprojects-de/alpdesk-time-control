---
name: time-control-e2e
description: "Run all Time Control end-to-end test suites under e2e-tests/ (currently the Bergsprint single-race import test, the Kondi2025 5-instance federation test, and the Nachtslalom auto-assign/measurement-editing test) against throwaway, isolated backend instances. Use when the user invokes /time-control-e2e or asks to run the project's end-to-end tests."
---

## What this runs

Every subdirectory of `e2e-tests/` that has its own `run_all.sh` is one suite:

- `e2e-tests/bergsprint/` — single race, real device-import path, category + Los-Modus scoring.
- `e2e-tests/kondi2025-federation/` — 5-instance station federation test (1 main + 4 stations).
- `e2e-tests/nachtslalom/` — two-run race exercising every `AutoAssignService` combination/error
  case (enable/skip/set-next/disable, default-by-raceNumber vs. default-by-startSequence, a
  participant marked DSQ/DNF/DNS while the cursor sits on them, `discardOldestStart()`) plus
  manual measurement corrections and the reset-time regressions (device unreachable during
  archive+reset; a manual and a device measurement colliding on the same low id right after a
  reset). Also uses `fake_device.py`, like bergsprint.

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
   is newer than the newest file under `Backend/src`.
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
      the first failed step/verification.
   d. Clean up regardless of outcome: `pkill -f 'time-control.jar'` (plus
      `pkill -f 'fake_device.py'` for bergsprint/nachtslalom), then `rm -rf` that suite's temp work dir.
4. Report a summary table: suite → ran/skipped, pass/fail, and for any failure point at
   `backend.log` inside that suite's (now-deleted, so quote it before cleanup) work dir and the
   failing script's output.

## Notes

- These suites are the closest thing this project has to full-stack e2e coverage — the Spock
  suite (`./gradlew test` in `Backend/`) and Angular unit tests are separate and unaffected.
- Don't run this against the dev server on :18000/:4200 or against the real database — the whole
  point of `start_instances.sh` is isolation from both.
