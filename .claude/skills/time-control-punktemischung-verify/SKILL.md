---
name: time-control-punktemischung-verify
description: "Independently re-derive a Gaudi-Modus Punkte-Kombination/Punkte-Mischwertung (POINTS_COMBINATION) result from the underlying per-race results and compare it against the app's own combined ranking, to verify the app computed it correctly. Use when the user invokes /time-control-punktemischung-verify or asks to check/verify a Gaudi-Modus points combination result. For a Los-Verfahren (LOS) result use time-control-los-verify instead - a different algorithm with different inputs."
---

## Purpose

Cross-check a Time Control **Gaudi-Modus "Punkte-Kombination"** result: recompute the combined
ranking from scratch, independently of the app's own Java code, from the raw per-race results plus
the points-scale/weighting configuration — then diff that against the app's actual output (its PDF,
or a JSON export). This catches configuration mistakes (wrong scale, wrong weight, wrong
keep-in-ranking flags) as well as genuine app bugs, the same way
`e2e-tests/kondi-federation/run_phased_results_with_status.sh` cross-checks the app with an
independent Python recalculation.

This skill only covers `POINTS_COMBINATION` mode (Punkte-Kombination / Punkte-Mischwertung).
For a **Los-Verfahren** instance there is a separate skill, `time-control-los-verify` — point the
user there rather than adapting this algorithm, the two have almost nothing in common (Los scores
one race, has no scale/weights/keep-flags, and compares pair averages against the field average).
For `TIME_COMBINATION` or Mannschaftswertung there is no skill yet: say so and ask whether they
still want a (differently shaped) ad-hoc check.

## Inputs to collect first

Ask for whatever is missing before computing anything — don't guess at weights or flags, and
don't silently skip a question just because a reasonable default exists.

**Hard gate before writing a single line of the verification script**: points scale (#2), all
three keep-in-ranking flags (#3), and weight per leg race (#1) are configuration that lives only
on this specific Gaudi-Modus instance — none of it is visible in the CSVs/PDF the user hands you,
so there is nothing to infer it from. Ask for all three explicitly, in one go if convenient (e.g.
one `AskUserQuestion` covering scale/flags/weights together), and get an explicit answer for
*this* run before proceeding to Step 1 — even if a prior run (same event series, same club, same
skill session) already answered them, a config value can change between Gaudi-Modus instances or
get edited between runs, so never reuse a previous answer silently. A silently-wrong assumption
here doesn't fail loudly: it produces a plausible-looking but wrong comparison table that reads
exactly like a real app bug.

The same gate applies to **start-group offsets** (#6): ask in that same round whether any TIME leg
race used start groups with an offset. The results CSV carries the *raw* clock time, not the value
the app ranks on, so an unasked offset produces wrong places for exactly the affected groups.

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
   - For each race also get its **sort direction** (TIME races sort ascending/lower-is-better,
     POINTS races descending/higher-is-better — ask if unclear from the export).
   - **Always explicitly ask** whether every leg race was weighted `1.0`, or whether one or more
     had a different `GaudiModeRace.weight` configured — this is an easy thing for the app admin
     to have set and forgotten, so don't infer it from the data. Default to `1.0` for every race
     only once the user confirms that, not as a silent assumption you never surfaced.
2. **Points scale**: **always explicitly confirm** which scale is configured for *this*
   Gaudi-Modus instance — don't silently default and don't wait for the user to volunteer it
   unprompted. The club's fixed **"FIS-Schema"** place→points table is the common case —
   `100, 80, 60, 50, 45, 40, 36, 32, 29, 26, 24, 22, 20, 18, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6,
   5, 4, 3, 2, 1, 0` (index 0 = place 1; any place beyond this 31-entry list scores 0) — but only
   use it once the user has actively confirmed that's what's set here, e.g. by asking directly
   "Nutzt ihr das FIS-Schema, oder eine andere Punkte-Skala für diese Punkte-Mischwertung?" rather
   than assuming silence means yes.
3. **The three toggle flags** on this Gaudi-Modus instance — `keepDnsInRanking`,
   `keepDnfInRanking`, `keepDsqInRanking` — **must always be asked explicitly, every time**, e.g.
   with a direct multi-part question (AskUserQuestion or equivalent). Never assume a default or
   infer them from the data (a field with no DNF/DNS/DSQ rows tells you nothing about how the
   flags are set). Getting this wrong silently changes who is even included in the ranking, so
   do not proceed to computation before this is answered.
4. **Gender per person**, if the reference output is split by category (see next section) — the
   results-only CSV above has no gender column. **Ask for the roster export up front as a
   standard input alongside the per-race result CSVs whenever the reference is category-split —
   don't wait until you hit a missing-gender error to ask for it.** In order of independence:
   - **Preferred, and the default expectation**: the roster export,
     `GET /participants/export/csv/{raceId}` (any one leg race is enough, since gender doesn't
     change per race) — it includes `gender` (`MALE`/`FEMALE`) alongside identity data.
     Independent of the PDF being verified, and this project's primary user routinely has this
     file on hand, so ask for it by name ("die Teilnehmerliste/Roster-CSV") rather than only
     describing what it contains.
   - **Accepted fallback, only if the user can't provide the roster export**: take each person's
     category straight from which "Wertung <Altersklasse> <weiblich/männlich>" section they
     appear under in the reference PDF itself. This is fine for checking the *ranking/points math
     within* each category — that's what this skill verifies — but say explicitly that it means
     the category assignment itself (whether that person was correctly bucketed as e.g. U14
     weiblich in the first place) is *not* independently checked this way, only the computation
     built on top of it.
   Either way, confirm which one you're using rather than picking silently, and **never read the
   live `time-control.db` SQLite file to get this (or anything else)** — it's real production data
   from actual club events, and this skill only ever works from exports/files the user explicitly
   hands over, never by querying the app or its database directly.
5. **Reference output to diff against**: the app's own combined-ranking PDF (preferred — the
   user already has these) or a JSON export of the Gaudi ranking. PDF is fine here since it's only
   used for comparison, not as computation input — a text-extraction slip shows up immediately as
   a diff against the independently-computed table.
6. **Start groups with an offset** (Startgruppen, block start against one shared race clock) —
   **always ask explicitly** whether any TIME leg race had participants assigned to a start group
   whose template has an `offsetSeconds` ("Zeitversatz", entered as Minuten + Sekunden in the
   start-group template dialog). POINTS
   races are never affected (`RankingService.startGroupOffsetMs` returns null for them). If yes,
   ask for that race's **Startlisten-CSV** (Teilnehmerliste → "…"-Aktionsmenü → "Startnummern" → "Startliste (CSV)",
   `GET /participants/export/startlist-csv/{raceId}`): one row per starter with `externalId`,
   `startGroup` and `startGroupOffset` (the group's Zeitversatz as `m:ss`, empty for a group without
   one or a participant without a group) — convert it to seconds and key it by `externalId`. Both
   columns are **left out of the header entirely** when no starter of that race has a start group —
   that means no offset applies to anyone in the race, not a broken export.
   Neither results CSV nor roster CSV contains the start group, so don't look for it there.
   - The Startlisten-CSV leaves out anyone whose status is DSQ/DNF/DNS (no start position, same as
     the start list PDF). That's fine here: such a participant never gets a place in that race, so
     their offset can't affect anything.
   - Offsets are resolved *live* from the template at ranking time, so the Startlisten-CSV must be
     exported at the same state as the reference PDF — if the Zeitversatz was edited between the
     two exports, the comparison is meaningless.
   - Fallback if the user can't export it (older app version without that export): the Startliste
     PDF's "Gruppe"/"Zeitversatz" columns, or — older still, only "Gruppe" — the Zeitversatz per
     group read off the start-group template dialog (Minuten + Sekunden) by the user.
   If no TIME leg race used start groups (or none of the groups had an offset), note that answer
   and skip the offset entirely — no question left implicit.

If the user only has PDFs for everything (no CSV export), proceed anyway with the PDF fallback
path for the per-race inputs, but say explicitly that place-assignment itself isn't independently
verified in that case.

## Category-split rankings (Altersklasse × Geschlecht) — check this before computing anything

Look at the reference output first: if it has separate sections per age-group and gender (e.g.
"Wertung U14 weiblich", "Wertung U14 männlich", "Wertung U16 weiblich", ...) rather than one flat
table, this is `GaudiModeService.computeRankingForCategory` — **and it is not a display-time
filter of one global ranking**. It restricts every leg race's participant field to just that
category's persons and **reruns the entire algorithm from Step 1** on that subset alone: a
person's place in "Station 1" *within their category* can be completely different from their
place among the full field, because the whole race gets re-sorted and re-placed with everyone
outside the category removed first. This was a confirmed source of false-positive mismatches in
an earlier ASV Kondiwettkampf verification (see project memory
`verification-technique-ranking-crosscheck`) — assuming one global ranking and just re-labeling
places per group gives wrong numbers even when the underlying data and logic are otherwise right.

So when the reference is category-split:
- Determine each person's category as `(ageGroup, gender)` — `ageGroup` from the results CSV
  (already computed the same way the app does it), `gender` from the roster CSV (input #4 above).
- For **each category group independently**: take only that group's participants into every leg
  race, then run Steps 1–4 below from scratch on that subset (including per-race place
  assignment) — do not reuse places computed against the full field.
- The unfiltered, whole-field ranking (if the app also exposes one) and each category's ranking
  are genuinely different numbers for the same person; don't cross-check one against the other.
- **The "nicht gewertet" (DNS) list follows the export's own scope** — recompute it with the
  same filter as the ranking it sits under. `GaudiModeService.computeDnsEntries(gaudiMode,
  filterGender, filterAgeGroup)` resolves the eligible persons through the very same
  `resolveMatchingPersonIds` that `computeRankingForCategory` uses, so a Damen-Export's DNS block
  lists only women, an "U14 weiblich" export only that class.
  - The **gender export** (`/export/pdf/gender/{gender}`) and the **age-group + gender export**
    (`/export/pdf/agegroup/{ageGroup}/gender/{gender}`) are filtered.
  - The **unfiltered** ones keep the complete list: the plain `/export/pdf`, the "all age groups"
    export (`/export/pdf/agegroups/all`, whose sections together cover the whole field anyway) and
    the JSON endpoint `/{id}/not-ranked` (it takes no filter argument).
  - **This changed on 2026-09-21** — before that, every export shared one unfiltered list, which
    put e.g. men under "nicht gewertet" on a women's sheet. If you are verifying a PDF that was
    exported from an **older build**, expect the old global list instead and don't report it as a
    mismatch. When in doubt, ask the user when the reference PDF was generated. **Re-read
    `GaudiModeController` and `GaudiModeService.computeDnsEntries` at the start of every run** (you
    are told to do that below anyway) — this bullet is exactly the kind of detail that goes stale.

If the reference is a single flat table instead, skip all of this and run Steps 1–4 once over the
whole field as written below.

## The algorithm to reimplement (do not approximate — this must match the app exactly)

**Always read these three files fresh at the start of every run, in full, before writing the
verification script — every time, not just when something below seems unclear.** The summary
below is a snapshot and can silently go stale the moment someone touches ranking logic; trusting
it instead of the real code is exactly the mistake this skill exists to avoid making about the
*app's* correctness:
- `Backend/src/main/java/x/timecontrol/services/RankingService.java`
- `Backend/src/main/java/x/timecontrol/services/gaudi/PointsCombinationModeCalculator.java`
- `Backend/src/main/java/x/timecontrol/services/GaudiModeService.java` (`computeRankingForCategory`
  / `buildRaceParticipants` for the category-filtering behavior above)

If what you read differs from the steps below in any way, the code wins — update your mental
model (and flag the discrepancy to the user, since it likely means this skill needs a follow-up
edit) rather than silently reconciling the two. Run the algorithm once per category group when
categories apply, otherwise once over the whole field.

**Step 1 — per-race place, for each leg race independently:**
- A participant with no measured value, or with a non-`NONE` status (`DNF`/`DNS`/`DSQ`), gets no
  `adjustedValue` and is excluded from that race's placing entirely (`RankingService.adjustedValue`).
- Otherwise first net the raw value of its start-group offset (`RankingService.netDurationMs`):
  `net = max(0, duration - offsetMs)`, where `offsetMs = offsetSeconds * 1000` of the participant's
  start group — **TIME races only**, and only for a participant who has a group whose template has
  an offset; everyone else uses `net = duration`. `duration` here is the raw value from the
  results CSV (`time/value` column), which is exported **un-netted**.
- Then `adjustedValue = net ± penalty` (`+penalty` if ascending/TIME, `-penalty` if
  descending/POINTS), floored at 0.
- The Gaudi PDF prints each leg's time already netted of the offset (`PdfExportService.netLegValue`),
  so for a start-group participant the printed leg time is `CSV value − offset`, not the CSV value
  itself — expected, not a mismatch.
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
- When categories apply, run this eligibility check **once per category subset** - it decides both
  who appears in that category's ranking table and who appears under its "nicht gewertet", since
  both are scoped the same way (see the bullet above). Only when you are verifying an unfiltered
  export (plain `/export/pdf`, "all age groups", or the `/{id}/not-ranked` JSON) do you run it over
  the whole field instead. For a reference PDF from a build older than 2026-09-21, the DNS list is
  global even on a filtered export - compute it over the whole field in that case.

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

1. First check the reference output for category sections (see above) and get the roster CSV for
   gender if so — don't start writing the script until you know whether it needs to loop per
   category or run once over the whole field.
2. Write a small standalone Python script (in the scratchpad dir) implementing steps 1–4 above
   exactly, reading the per-race CSVs and the scale/weights/flags gathered above — looping the
   whole thing once per `(ageGroup, gender)` group when categories apply. Keep it a plain script
   you can inspect and rerun, not something you compute by hand in your head — this is arithmetic
   across potentially dozens of participants and multiple races/groups, easy to slip on manually.
   [`reference_script.py`](reference_script.py) in this skill's own folder is a worked example of
   the right shape (per-category recomputation, the always-global nicht-gewertet pass, tie
   rounding) from a past run — copy it as a starting point, but its `CONFIG`-block values (weights,
   keep-flags, gender source, points scale) are that run's answers, not defaults: replace every one
   of them with what *this* run's user actually said, never carry them over unasked.
3. Run it, producing: the final ranking table(s) (place, name, total points, per-leg points/place),
   and the "nicht gewertet" list with each excluded person's reason — **per category if the export
   being verified is category-scoped**, once over the whole field otherwise.
4. Extract the app's reference output the same way — parse the reference PDF (via the `pdf` skill)
   into the same shape: place, name, total points, and its "nicht gewertet" section, per section/
   category if the PDF has them.
5. Diff by person within the matching category: flag any mismatch in place, total points, or
   nicht-gewertet membership. For every mismatch, drill into that person's per-leg figures (place
   per race, weighted points per race, and which category subset they were ranked in) so the user
   can see exactly which leg/step caused the divergence, rather than just "totals don't match."

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
