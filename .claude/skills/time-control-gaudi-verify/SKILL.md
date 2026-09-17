---
name: time-control-gaudi-verify
description: "Independently re-derive a Gaudi-Modus Punkte-Kombination (points-mixing) result from the underlying per-race results and compare it against the app's own combined ranking, to verify the app computed it correctly. Use when the user invokes /time-control-gaudi-verify or asks to check/verify a Gaudi-Modus points combination result."
---

## Purpose

Cross-check a Time Control **Gaudi-Modus "Punkte-Kombination"** result: recompute the combined
ranking from scratch, independently of the app's own Java code, from the raw per-race results plus
the points-scale/weighting configuration — then diff that against the app's actual output (its PDF,
or a JSON export). This catches configuration mistakes (wrong scale, wrong weight, wrong
keep-in-ranking flags) as well as genuine app bugs, the same way
`e2e-tests/kondi2025-federation/run_phased_results_with_status.sh` cross-checks the app with an
independent Python recalculation.

This skill only covers `POINTS_COMBINATION` mode. If the user's Gaudi-Modus instance is
`TIME_COMBINATION`, team, or Los-Verfahren, say so and ask whether they still want a (differently
shaped) check — this skill's algorithm below doesn't apply to those.

## Inputs to collect first

Ask for whatever is missing before computing anything — don't guess at weights, scale, or flags.

1. **Per-race raw results**, one file per leg race. In order of preference:
   - **Best**: the CSV from `GET /participants/export/results-csv/{raceId}` (Einstellungen/race
     export in the UI). Columns: `raceNumber, lastName, firstName, team, ageGroup, externalId,
     value, penalty, comment, status` — `value` is `m:ss.SSS` for a TIME race or a plain decimal
     for POINTS, `status` is empty/`DNF`/`DNS`/`DSQ`. This lets the skill recompute each race's
     places itself, which is the strongest check (it also validates the underlying place
     assignment, not just the points math on top of it).
   - **Fallback**: the individual race's result PDF, if no CSV was exported. Extract
     place/name/time-or-value/status per row with the `pdf` skill. Weaker check — it trusts the
     app's own place assignment for that leg instead of re-deriving it from raw times, so tell the
     user this leg's *place* isn't independently verified, only the points built on top of it.
   - For each race also get: **sort direction** (TIME races sort ascending/lower-is-better,
     POINTS races descending/higher-is-better — ask if unclear from the export) and its **Gaudi
     weight** (`GaudiModeRace.weight`, default `1.0` if the user never set one).
2. **Points scale**: the name and the place→points list (`PointsScale.pointsCsv`, e.g.
   `100,80,60,50,45,40,36,32,29,26,...`) — from Einstellungen → Punkteschema, or ask the user to
   paste the CSV values. If they say "Standard"/default, that's the scale named `FIS-Schema`.
3. **The three toggle flags** on this Gaudi-Modus instance: `keepDnsInRanking`,
   `keepDnfInRanking`, `keepDsqInRanking` (each true/false — ask directly, these are easy to get
   backwards from memory).
4. **Reference output to diff against**: the app's own combined-ranking PDF (preferred — the
   user already has these) or a JSON export of the Gaudi ranking. PDF is fine here since it's only
   used for comparison, not as computation input — a text-extraction slip shows up immediately as
   a diff against the independently-computed table.

If the user only has PDFs for everything (no CSV export), proceed anyway with the PDF fallback
path for the per-race inputs, but say explicitly that place-assignment itself isn't independently
verified in that case.

## The algorithm to reimplement (do not approximate — this must match the app exactly)

Source of truth: `Backend/src/main/java/x/timecontrol/services/RankingService.java` and
`Backend/src/main/java/x/timecontrol/services/gaudi/PointsCombinationModeCalculator.java` — reread
those two files if anything below is ambiguous or the code has since changed.

**Step 1 — per-race place, for each leg race independently:**
- A participant with no measured value, or with a non-`NONE` status (`DNF`/`DNS`/`DSQ`), gets no
  `adjustedValue` and is excluded from that race's placing entirely (`RankingService.adjustedValue`).
- Otherwise `adjustedValue = duration ± penalty` (`+penalty` if ascending/TIME, `-penalty` if
  descending/POINTS), floored at 0.
- Sort remaining participants best-to-worst (ascending for TIME, descending for POINTS).
- Assign standard competition places (1, 2, 2, 4, ...): for **TIME races only**, round the
  adjusted value to the nearest 10ms *before* comparing for ties (two results differing only in
  the ms digit the display rounds away must share a place) — POINTS races compare unrounded.

**Step 2 — eligibility per person, across all leg races of this Gaudi-Modus instance:**
- Group each leg's participants by the same real person (match across races by `externalId` if
  present, else by `lastName`+`firstName` — flag to the user any ambiguous duplicate name so they
  can confirm the match manually).
- Races with weight `0` are ignored completely for this step (and for scoring) — a person missing
  from a weight-0 race is never penalized for it.
- A race counts as a "bad leg" for a person when they have no Participant record in it, or their
  status in it is `DNF`/`DNS`/`DSQ` (or a status-less missing result, which defaults to `DNS`).
- The person is **excluded entirely** (goes to "nicht gewertet") unless: (a) they have a valid
  place in **at least one** required (non-zero-weight) race, **and** (b) **every** required race
  is either a valid place for them **or** a bad leg whose specific status is tolerated by the
  matching flag (`DNS`→`keepDnsInRanking`, `DNF`→`keepDnfInRanking`, `DSQ`→`keepDsqInRanking`).
  A bad leg whose flag is off drops the person even if they have valid places everywhere else.

**Step 3 — points and total, for each included person:**
- Per race: `pointsForPlace(place) * race.weight`, where `pointsForPlace` looks up the scale's
  place→points list 1-indexed (place beyond the list's length → 0 points); a tolerated bad leg
  contributes exactly `0` for that race.
- Sum these weighted-per-race values as a running **double**, and round only the **final total**
  to the nearest integer (`Math.round`) — never round per-leg values before summing, that
  compounds error and can flip a close placing (e.g. two legs at weight 0.5 must round `16.5` once
  as `33`, not round `16.5→17` twice).

**Step 4 — final ranking:**
- Sort included persons by total points descending.
- Assign standard competition places (1, 2, 2, 4, ...) on the (unrounded-comparison-irrelevant,
  since totals are already integers) totals — equal totals share a place, next distinct total's
  place is skipped accordingly (e.g. 1, 1, 3).

## How to run the check

1. Write a small standalone Python script (in the scratchpad dir) implementing steps 1–4 above
   exactly, reading the per-race CSVs and the scale/weights/flags gathered above. Keep it a plain
   script you can inspect and rerun, not something you compute by hand in your head — this is
   arithmetic across potentially dozens of participants and multiple races, easy to slip on
   manually.
2. Run it, producing: the final ranking table (place, name, total points, per-leg points/place),
   and the "nicht gewertet" list with each excluded person's reason.
3. Extract the app's reference output the same way — parse the reference PDF (via the `pdf` skill)
   into the same shape: place, name, total points, and its "nicht gewertet" section.
4. Diff the two tables by person: flag any mismatch in place, total points, or nicht-gewertet
   membership. For every mismatch, drill into that person's per-leg figures (place per race,
   weighted points per race) so the user can see exactly which leg/step caused the divergence,
   rather than just "totals don't match."

## Reporting

Answer in German (the user-facing audience for this project's results is German-speaking, per
[CLAUDE.md](../../CLAUDE.md)'s frontend convention) with:
- A one-line verdict up front: either "Auswertung stimmt vollständig überein" or "N Abweichungen
  gefunden".
- If there are discrepancies: a table of affected persons with computed vs. reference (place,
  Punkte), and for each one the specific leg/step responsible (falsche Gewichtung, falsches
  Punkteschema, Flag-Konfiguration, Rundung, Platzierungs-Fehler in einem Einzelrennen, ...).
- If everything matches: still state which scale/weights/flags were used for the check, so the
  user can confirm those were the intended configuration (a check that silently used the wrong
  scale but still "matched" the reference would be worthless).
