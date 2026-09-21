---
name: time-control-los-verify
description: "Independently re-derive a Gaudi-Modus Los-Verfahren (LOS) result - pair averages against the field average - from the race's raw results plus the drawn pairing, and compare it against the app's own ranking, to verify the app computed it correctly. Use when the user invokes /time-control-los-verify or asks to check/verify a Los-Modus / Losrennen / pairing result. For a Punkte-Kombination result use time-control-punktemischung-verify instead."
---

## Purpose

Cross-check a Time Control **Gaudi-Modus "Los-Verfahren"** result: recompute pair averages, the
field average, each pair's deviation and the resulting places from scratch — independently of the
app's Java code — then diff that against the app's own output (its PDF or the ranking JSON).

**What this verifies, and what it cannot**: the pairing is *drawn at random and persisted* — it
exists nowhere outside the app, so it is an **input** here, not something to re-derive. This skill
therefore answers *"given these pairs, does the app compute the result correctly?"*, **not** *"was
the draw fair?"*. Say that explicitly in the report so nobody reads more assurance into it than is
there. What the skill *can* check about the draw itself is coverage: every participant of the race
appears in exactly one pair (see Step 0).

This skill only covers `LOS`. For `POINTS_COMBINATION` use `time-control-punktemischung-verify`;
for `TIME_COMBINATION` or Mannschaftswertung there is no skill yet.

## Inputs to collect first

Far less configuration than the Punkte-Mischwertung: a Los-Modus has **no points scale, no race
weights and no keep-in-ranking flags** — don't ask for any of those, they play no role in
`LosModeCalculator`.

**Hard gate before writing a single line of the verification script** — ask these two, explicitly,
in one go (e.g. a single `AskUserQuestion`), and get an answer for *this* run before computing
anything. Neither is visible in the files the user hands over, so there is nothing to infer them
from, and a wrong guess doesn't fail loudly — it produces a plausible-looking comparison table that
reads exactly like a real app bug:

1. **Did the race use Startgruppen with a Zeitversatz?** (detail #4 below) — if yes, the results
   CSV's raw values must be netted before anything is averaged.
2. **Were the results CSV and the reference PDF exported at the same state?** Anything edited in
   between — a corrected time, a status set, and above all a **re-draw** — invalidates the
   comparison. Never reuse an earlier run's answers silently; both can change between runs.

Everything else is files:

1. **The race's raw results** — `GET /participants/export/results-csv/{raceId}` (columns
   `raceNumber, lastName, firstName, team, ageGroup, externalId, value, penalty, comment, status`).
   A Los-Modus scores **exactly one race**: `LosModeCalculator` uses `races.getFirst()` and ignores
   any further race configured on the instance. If the instance lists more than one race, point
   that out — only the first one counts, which is itself worth flagging to the user.
2. **The drawn pairing** — there is **no CSV/PDF export for it**. Two ways to get it, ask for
   whichever the user can produce:
   - `GET /gaudi-modes/{id}/pairing` → JSON list of
     `{participant1Id, participant1Name, participant2Id, participant2Name}`, `participant2*` null
     for the leftover single when the field size is odd. Names are `displayName` = "Nachname
     Vorname".
   - Otherwise read the pairs out of the reference PDF's "Paarung" column ("Nachname Vorname &
     Nachname Vorname", or "Nachname Vorname (Einzel)"). Fine — the pairing is input, not a
     computed result — but note in the report that the pairs were taken from the very document
     being checked, so a pair that the app *forgot* to print can't be noticed this way.
   Pairs whose members have no valid result are **not** in the ranking table; they appear under
   "Nicht gewertet" instead, so take those pairs from that section.
   **The pairing is not stable over time**: the "Neu auslosen" button discards the previous pairing
   and draws a fresh one (`GaudiModeService.drawLosPairing` deletes by gaudiModeId first), so a
   pairing fetched *after* the reference PDF was exported can describe a completely different draw.
   When you have both the JSON **and** the PDF, cross-check that their pair lists are identical
   **before** computing anything — if they differ, stop and tell the user it was re-drawn between
   the two exports; every "mismatch" you'd report otherwise is an artefact. With only one of the
   two, ask whether a re-draw happened after that export.
3. **Reference output to diff against** — preferred: the Los ranking PDF
   (`GET /gaudi-modes/{id}/export/pdf`), whose columns are
   `Platz | Paarung | Team | Wert 1 | Wert 2 | Ø-Wert Paar | Ø-Wert Gesamt | Abweichung` plus a
   "Nicht gewertet" section. Alternative: the ranking JSON (`GET /gaudi-modes/{id}/ranking`,
   fields `place, label, time1Ms, time2Ms, valueMs, referenceMs, diffMs`).
   **Don't use `GET /gaudi-modes/{id}/export/csv` as the reference** — for LOS it puts the whole
   pair label into the "Nachname" column, leaves "Vorname" empty and carries **neither the
   individual times nor the deviation**, so it can't confirm the numbers that matter here.
   The reference and the results CSV must describe the same state — see the hard gate above.
4. **Start groups with an offset** — same question as in the Punkte skill, and for the same
   reason: the results CSV carries the **raw** clock value, not what the app ranks on. Ask
   explicitly whether the race used Startgruppen with a `Zeitversatz`; if yes, get the
   Startlisten-CSV (`GET /participants/export/startlist-csv/{raceId}`, columns `externalId`,
   `startGroup`, `startGroupOffset` as `m:ss`) and net every affected value before averaging.
   TIME races only — POINTS races never have an offset. Both columns are omitted from the header
   entirely when nobody in the race has a start group; that means "no offset applies", not a broken
   export.
5. **The race's result unit and sort direction** (TIME ascending vs. POINTS descending) — visible
   in the export, ask if unclear. It decides how the penalty is applied and whether averages are
   rounded to a hundredth of a second or to the stored unit.

Never read the live `time-control.db` SQLite file for any of this — it is real production data
from actual club events. This skill works only from exports the user explicitly hands over.

**No category split**: unlike the Punkte-Mischwertung, a Los-Modus has no per-gender or
per-age-group export (`/export/pdf/gender/...` is `POINTS_COMBINATION_ONLY`). There is exactly one
ranking over the whole field, so you never loop per category and never need a roster CSV for
gender.

## The algorithm to reimplement (do not approximate — this must match the app exactly)

**Read these two files fresh, in full, at the start of every run** — before writing any script.
The summary below is a snapshot and goes stale the moment someone touches ranking logic; trusting
it over the real code is exactly the mistake this skill exists to catch in the *app*:
- `Backend/src/main/java/x/timecontrol/services/gaudi/LosModeCalculator.java`
- `Backend/src/main/java/x/timecontrol/services/RankingService.java`

If what you read differs from the steps below, **the code wins** — follow it and flag the
discrepancy to the user, since it means this skill needs a follow-up edit.

**Step 0 — sanity-check the draw (cheap, and it catches real breakage):**
- Every participant of the race appears in **exactly one** pair, and no participant appears twice
  (`drawLosPairing` shuffles the full participant list, pairs first half against second half, and
  leaves the last one unpaired when the count is odd).
- Pair count is `floor(n/2)`, plus one single when `n` is odd.
- **Participants with DSQ/DNF/DNS are drawn too** — the draw runs over every participant of the
  race regardless of status. They just can't be scored later, which is Step 3's business, not a
  flaw in the draw.

**Step 1 — each participant's value that counts (`RankingService.adjustedValue`):**
- No measured value, or a status other than `NONE` (`DNF`/`DNS`/`DSQ`) → **no value**, excluded
  from everything below (including the field average).
- Otherwise: net the raw value of the start-group offset first
  (`net = max(0, value - offsetSeconds*1000)`, TIME races with a start group only), then
  `adjusted = net + penalty` for ascending/TIME, `net - penalty` for descending/POINTS, floored
  at 0.

**Step 2 — the field average (`Ø-Wert Gesamt`), computed over the WHOLE race:**
- `overallAverage = mean(all adjusted values of the race)` as a plain double — **every** scored
  participant of the race, not only those sitting in a scorable pair. This is the single most
  likely place to get a wrong-but-plausible number, so build the mean explicitly from the full
  field.
- Then round it **once**, straight to the printed precision (`RankingService.roundForDisplay(Race,
  double)`): nearest 10 ms for TIME, `Math.round` for POINTS. Never round to a whole millisecond
  first — that rounds twice and can land a printed hundredth off.

**Step 3 — per pair:**
- If the first member has no value → the pair is **not ranked** (goes to "Nicht gewertet").
- If the pair has a second member and that member has no value → likewise not ranked. A pair is
  dropped by **either** member missing a result.
- The leftover single (no second member) is ranked on its own value alone.
- `pairAverage = (v1 + v2) / 2.0`, or `v1` for the single. Round it the same way as Step 2 —
  **once**, straight to the printed precision.
- `Abweichung = |pairAverageDisplay - overallAverageDisplay|` — the difference of the two
  **already-rounded** values, not the raw gap rounded afterwards. Rounding does not distribute
  over subtraction, so doing it the other way can differ by a printed hundredth.

**Step 4 — places:**
- Sort ranked pairs by `Abweichung` ascending — smallest deviation wins.
- Standard competition places (1, 2, 2, 4, ...): equal deviations share a place, the next distinct
  value's place is skipped accordingly.

**Step 5 — "Nicht gewertet":**
- One entry per dropped pair, labelled like the ranking (`"A & B"`, or `"A (Einzel)"`).
- Its status is the first explicitly recorded `DSQ`/`DNF`/`DNS` among the members that have no
  result; a member merely missing a time with no status recorded falls back to `DNS`
  (`RankingService.dnsStatusLabel`).
- Sorted by the pair label, case-insensitively.

## How to run the check

1. Write a small standalone Python script in the scratchpad implementing Steps 0–5 exactly,
   reading the results CSV and the pairing. [`reference_script.py`](reference_script.py) in this
   folder is a worked example of the right shape — copy it as a starting point, but replace its
   `CONFIG` block with this run's actual answers rather than carrying them over.
   It was verified on 2026-09-21 against a live instance (30 participants, 15 drawn pairs,
   1 DNF + 1 DSQ + 1 missing result): place, Ø-Wert Paar, Abweichung, Ø-Wert Gesamt, both
   individual values and the "nicht gewertet" list incl. status matched the app exactly, via the
   pairing JSON **and** via pairs read out of the PDF. That was a **TIME** race without start
   groups — its POINTS branch and its start-group netting are written to the spec but have not
   been exercised, so read those two paths against the Java code rather than trusting them.
   Keep it a plain script you can inspect and rerun; this is arithmetic over dozens of pairs,
   easy to slip on by hand.
2. Before trusting the run: if both the pairing JSON and the reference PDF are available, confirm
   their pair lists match (see input #2). Then run the script, producing: the ranked table (Platz,
   Paarung, Wert 1, Wert 2, Ø-Paar, Abweichung), the field average, and the "Nicht gewertet" list
   with each pair's reason.
3. Extract the app's reference output into the same shape — parse the PDF with the `pdf` skill, or
   read the ranking JSON.
4. Diff pair by pair: flag any mismatch in place, Ø-Wert Paar, Abweichung, the field average, or
   nicht-gewertet membership. For each mismatch drill into that pair's two individual values and
   show where the divergence starts (a single participant's netted/penalised value, the field
   average, a rounding step, or the place assignment).

## Reporting

Answer in German, with:
- A one-line verdict up front: "Los-Wertung stimmt vollständig überein" or "N Abweichungen
  gefunden".
- The field average actually used (`Ø-Wert Gesamt`) and how many valid results it was built from —
  if that number is wrong, every deviation in the table is wrong with it, so it belongs in the
  report even when everything matches.
- On mismatches: a table of affected pairs with berechnet vs. Referenz (Platz, Ø-Wert Paar,
  Abweichung) and the responsible step for each.
- Always the sentence that the draw itself is not verified, only the computation on top of it —
  plus the Step 0 coverage result ("jeder Teilnehmer genau einmal gezogen" or the concrete
  discrepancy).
- The hard-gate answers this run actually used: whether Startgruppen with a Zeitversatz applied
  (and which), and that CSV and reference came from the same state with no re-draw in between. A
  check that silently ran on mismatched exports but still "matched" would be worthless, so state
  the basis even when everything agrees.
