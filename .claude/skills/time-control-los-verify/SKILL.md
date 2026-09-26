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
   - Otherwise read the pairs out of the reference PDF (layout under input #3): a line with a
     Platz starts a pair, the line below it without one is the partner; "Nachname Vorname
     (Einzel)" is the leftover single. `parse_reference_pdf` in the reference script does exactly
     that. Fine — the pairing is input, not a computed result — but note in the report that the
     pairs were taken from the very document being checked, so a pair that the app *forgot* to
     print can't be noticed this way. Counting the printed persons against the results CSV at least
     shows that nobody is missing (Step 0).
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
   (`GET /gaudi-modes/{id}/export/pdf`). Since 2026-09-26 it prints **one line per person**:
   `Platz | StNr. | Name Vorname | Jg. | Team | Kategorie | Wert | Ø-Wert Paar | Ø-Wert Gesamt |
   Abweichung (±)`. The pair's shared values (Platz, the three averages/deviation) stand on its
   first line only; the partner's line carries just their own StNr./Name/Jg./Team/Kategorie/Wert.
   `StNr.` and `Jg.` follow the operator's PDF switches, `Kategorie` only appears once somebody has
   one — so don't parse by column position. `Abweichung (±)` is **signed**: `-` below the field
   average, `+` above, no sign when exactly on it (Step 3). The Gaudi-Modus name stands in the page
   header only, there is no title above the table.
   Older PDFs (printed results of earlier events) use one line per pair instead:
   `Platz | Paarung | Team | Wert 1 | Wert 2 | Ø-Wert Paar | Ø-Wert Gesamt | Abweichung`, with an
   unsigned deviation. `parse_reference_pdf` reads both layouts.
   Either layout ends with a "Nicht gewertet" section whose rows are still whole pairs
   ("A & B" / "A (Einzel)") or never-drawn singles — absent when nobody drops out.
   Alternative: the ranking JSON (`GET /gaudi-modes/{id}/ranking`, fields
   `place, label, time1Ms, time2Ms, valueMs, referenceMs, diffMs`, plus `members` with each
   person's own value). `diffMs` there is **always unsigned** — the sign exists only in the PDF and
   the frontend view, derived from `valueMs` vs. `referenceMs`.
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
- `drawLosPairing` shuffles the participant list, pairs the first half against the second half, and
  saves the leftover as a pairing with `participant2Id = null` when the count is odd.
- **Participants already marked `DSQ`/`DNF`/`DNS` at draw time are NOT drawn** — `drawLosPairing`
  filters them out *before* the shuffle, since pairing a known non-starter would cost their partner
  their placing however well they ride. So a participant missing from every pair is only a finding
  when their status is `NONE`; one carrying a status may legitimately appear in no pair at all.
  (The filter is on the status alone, deliberately not on `effectiveStartOrder() != null` — before a
  Losrennen, having no race number yet is the normal state.)
- A status set **after** the draw changes nothing about the pairing: the pair stays, and simply
  drops out of the ranking in Step 3 — taking a partner with a perfectly good time with it. That is
  a deliberate rules decision (the pair average is the score, and without a partner there is none),
  not a bug to report.
- Everyone else appears in **exactly one** pair, nobody twice.
- Pair count is `floor(d/2)`, plus one single when `d` is odd — where `d` is the number of *drawn*
  participants, not the size of the whole field (see the filter above).

**Step 1 — each participant's value that counts (`RankingService.adjustedValue`):**
- No measured value, or a status other than `NONE` (`DNF`/`DNS`/`DSQ`) → **no value**, excluded
  from everything below (including the field average).
- Otherwise: net the raw value of the start-group offset first
  (`net = max(0, value - offsetSeconds*1000)`, TIME races with a start group only), then
  `adjusted = net + penalty` for ascending/TIME, `net - penalty` for descending/POINTS, floored
  at 0.
- **Then round it to the printed precision** (`LosModeCalculator#printedValue` =
  `RankingService.roundForDisplay(Race, Integer)`: nearest 10 ms half-up for TIME, unchanged for
  POINTS). Every average below is built from these printed values, **not from the raw ms** — since
  2026-09-26, so that an official can recompute the PDF by hand. Before that date the app averaged
  the raw ms; a PDF printed earlier differs by a hundredth wherever the printed values' average
  ends on exactly half a hundredth, which is the old rule, not a bug.

**Step 2 — the field average (`Ø-Wert Gesamt`), computed over the WHOLE race:**
- `overallAverage = mean(all printed values of the race)` as a plain double — **every** scored
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
- `pairAverage = (v1 + v2) / 2.0` over the two **printed** values, or `v1` for the single. Round it the same way as Step 2 —
  **once**, straight to the printed precision.
- `Abweichung = |pairAverageDisplay - overallAverageDisplay|` — the difference of the two
  **already-rounded** values, not the raw gap rounded afterwards. Rounding does not distribute
  over subtraction, so doing it the other way can differ by a printed hundredth.
- Printed sign (display only, `PdfExportService#signedDiff`): `-` when `pairAverageDisplay <
  overallAverageDisplay`, `+` when above, none when the deviation is 0. It plays no part in the
  ranking — `-0:00.20` and `+0:00.20` tie.

**Step 4 — places:**
- Sort ranked pairs by `Abweichung` ascending — smallest deviation wins.
- Standard competition places (1, 2, 2, 4, ...): equal deviations share a place, the next distinct
  value's place is skipped accordingly.

**Step 5 — "Nicht gewertet":**
- One entry per dropped pair, labelled like the ranking (`"A & B"`, or `"A (Einzel)"`).
- Its status is the first explicitly recorded `DSQ`/`DNF`/`DNS` among the members that have no
  result; a member merely missing a time with no status recorded falls back to `DNS`
  (`RankingService.dnsStatusLabel`).
- A dropped pair whose other member **did** finish carries that member's printed value in the
  list's "Wert" column - it still counts in the field average (Step 2).
- **Plus one entry per participant who was entered but never drawn** — listed on their own rather
  than as a pair, because there is no partner they cost anything. Without a valid result that is
  the DSQ/DNF/DNS-at-draw-time group from Step 0, with its status. **With** a valid result (a late
  entry after the draw, or a status cleared after it) the status is `nicht ausgelost` and the row
  carries the printed value: that value counts in the field average (a rule decision - they did
  race), so the document must show it for the average to be recomputable. Either way they are on
  the start list, and a reader who finds them nowhere in the document cannot tell whether they
  were left out on purpose or forgotten. Don't mistake such a single-name row for a malformed
  pair label.
- The "Wert" column appears in the PDF's list only when at least one row has a value; without one
  the list keeps its four columns (Position, Paarung, Team, Status).
- Sorted by the entry label, case-insensitively — dropped pairs and never-drawn singles interleaved
  in one list, not in two blocks.

## Two rounding traps that produce a wrong-but-plausible diff

Both bite when you write the script from the prose above instead of copying
[`reference_script.py`](reference_script.py), which already handles them. Neither fails loudly:
they hit a subset of rows and leave every place intact, which reads exactly like a targeted app bug.

- **Java's `Math.round` is half-up; Python's `round()` is half-to-even.** They disagree on precisely
  the `.5` ties that rounding to a hundredth of a second produces constantly: `1457865 ms / 10 =
  145786.5` → Java `145787` = `24:17.87`, Python `145786` = `24:17.86`. Use
  `int(math.floor(x / 10.0 + 0.5)) * 10` — never `round()` — everywhere the app rounds: the field
  average, every pair average, and the printed individual values.
- **The printed individual values (`Wert`, or `Wert 1`/`Wert 2` in the old layout) are rounded,
  not truncated.** `RankingViewService.formatTime`
  rounds the raw ms to the nearest 10 ms *before* splitting into minutes/seconds/hundredths (a carry
  like `0:00.996` → `0:01.00` falls out of that correctly), so `2081758 ms` prints `34:41.76`, not
  `34:41.75`. Formatting `(ms % 1000) // 10` straight off the raw value diverges on roughly half of
  all rows — and *only* on the individual values, since the averages already went through
  `roundForDisplay`, which makes the pattern look like a deliberate app-side difference.

## How to run the check

1. Write a small standalone Python script in the scratchpad implementing Steps 0–5 exactly,
   reading the results CSV and the pairing. [`reference_script.py`](reference_script.py) in this
   folder is a worked example of the right shape — copy it as a starting point, but replace its
   `CONFIG` block with this run's actual answers rather than carrying them over.
   It was verified on 2026-09-21 against a live instance (30 participants, 15 drawn pairs,
   1 DNF + 1 DSQ + 1 missing result): place, Ø-Wert Paar, Abweichung, Ø-Wert Gesamt, both
   individual values and the "nicht gewertet" list incl. status matched the app exactly, via the
   pairing JSON **and** via pairs read out of the PDF. Confirmed again the same day on the
   Bergsprint export (37 participants, 18 pairs + 1 Einzel), once with a clean field and once with
   a DNF set *after* the draw — there the pair dropped out whole, the field average fell from 37 to
   36 values, and the shifted average reordered two otherwise unchanged pairs; all of it matched.
   Confirmed a third time on 2026-09-26 against the new one-line-per-person PDF (35 participants,
   17 pairs + 1 Einzel, pairs read out of the PDF): everything including the sign matched,
   among it six pairs whose average of the *printed* values ends exactly on half a hundredth —
   under the raw-ms rule of that day decided by the thousandths alone, which is what led to
   averaging the printed values instead (Step 1). The results CSV (`m:ss.SSS`) stays the input
   anyway: the netting and penalty (Step 1) apply to the raw value before it is rounded.
   All three runs were **TIME** races without start groups — the POINTS branch and the start-group
   netting are written to the spec but have not been exercised, so read those two paths against the
   Java code rather than trusting them.
   Keep it a plain script you can inspect and rerun; this is arithmetic over dozens of pairs,
   easy to slip on by hand. **Copy the reference script rather than re-deriving it from the prose**
   — the two rounding traps above cost a full extra diff cycle on exactly that mistake.
2. Before trusting the run: if both the pairing JSON and the reference PDF are available, confirm
   their pair lists match (see input #2). Then run the script, producing: the ranked table (Platz,
   Paarung, Wert 1, Wert 2, Ø-Paar, signed Abweichung), the field average, and the "Nicht
   gewertet" list with each pair's reason.
3. Extract the app's reference output into the same shape — `pdftotext -layout` on the PDF, then
   `parse_reference_pdf` (both layouts), or read the ranking JSON.
4. Diff pair by pair (`compare` in the reference script): flag any mismatch in place, the
   individual values, Ø-Wert Paar, Abweichung incl. its sign, the field average, or
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
  Abweichung incl. Vorzeichen) and the responsible step for each.
- For a PDF exported before 2026-09-26 (raw-ms averaging, see Step 1): pairs whose average of the
  printed values lands exactly on half a hundredth are decided by the raw ms there — name them and
  show the raw average, so the old rule's rounding doesn't look like an off-by-one.
- Always the sentence that the draw itself is not verified, only the computation on top of it —
  plus the Step 0 coverage result ("jeder Teilnehmer genau einmal gezogen" or the concrete
  discrepancy).
- The hard-gate answers this run actually used: whether Startgruppen with a Zeitversatz applied
  (and which), and that CSV and reference came from the same state with no re-draw in between. A
  check that silently ran on mismatched exports but still "matched" would be worthless, so state
  the basis even when everything agrees.
