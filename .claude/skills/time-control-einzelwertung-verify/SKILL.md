---
name: time-control-einzelwertung-verify
description: "Independently re-derive the results of ONE race (Einzelwertung) - value that counts, places with ties on the printed value, Rückstand/Diff, penalty, start-group offset, DNS/DNF/DSQ, and the split into gender/age-group/category sections - from the race's participant export, and compare it against the app's own result PDF (Gesamtwertung, Wertung männlich/weiblich, Altersklassen, Kategorien and their combinations), to verify the app computed it correctly. Use when the user invokes /time-control-einzelwertung-verify or asks to check/verify a single race's results, placings or result PDF. For a Gaudi-Modus result use time-control-los-verify (LOS) or time-control-punktemischung-verify (POINTS_COMBINATION) instead."
---

## Purpose

Cross-check a Time Control **single-race result PDF** (Einzelwertung): recompute every section of
it from the raw participant data, independently of the app's Java code, then diff it row by row
against the PDF the app printed. It checks what a race official reads off the sheet: who is in
which section, the place (ties share it), Wert/Strafe/Gesamt, the Rückstand (`Diff`), the age
class, the team, and the "Nicht gewertet" list with its status.

This skill covers the result PDFs of one race. For Gaudi-Modus results use
`time-control-los-verify` (LOS) or `time-control-punktemischung-verify` (POINTS_COMBINATION). The
public live view and the result CSV are built from the same `RankingViewService` rows as the PDF
and are **not** diffed here - say so if the user asks about them.

## Inputs to collect first

**Hard gate before writing a single line of the verification script** - ask these, explicitly, in
one go (e.g. a single `AskUserQuestion`), and get an answer for *this* run. None of them is
visible in the files, and a wrong guess produces a plausible-looking table of "app bugs":

1. **Which PDF is it?** One of the eight result exports (they differ in their sections *and* in
   how the "Nicht gewertet" list is scoped - see `EXPORT` in the reference script): Gesamtwertung;
   Wertung männlich/weiblich; one Altersklasse + Geschlecht; alle Altersklassen; one Kategorie;
   alle Kategorien; männlich/weiblich nach Kategorien; Altersklassen nach Kategorien. The section
   titles usually tell, but confirm - a one-section PDF titled "Wertung E-Bike" could be a category
   or an age class named like one.
2. **Did the race use Startgruppen with a Zeitversatz?** If yes, get the Startlisten-CSV
   (`GET /participants/export/startlist-csv/{raceId}`, `startGroupOffset` as `m:ss`): every
   affected raw value is netted before anything else (TIME races only). The columns are missing
   entirely when nobody has a start group - that means "no offset", not a broken export.
3. **Were the participant export and the PDF exported at the same state?** A time corrected, a
   status set, a person's birth date/gender/category changed in between invalidates the comparison.

Everything else is files:

1. **The race's participant export** - `GET /participants/export/csv/{raceId}` (the "rennergebnisse"
   CSV: `lastName;firstName;birthDate;gender;ageGroup;team;category;externalId;raceNumber;
   durationMs;penalty;measuredAt;comment;status`). It is the right input because it carries the
   **raw** `durationMs`/`penalty` in ms (hundredths for POINTS) plus gender, birth date and
   category, which the sections are split by. Its `ageGroup` column is always empty - see #3.
   The results CSV (`export/results-csv`) is no substitute: no gender, no birth date, no category.
2. **The result PDF to check** - `pdftotext -layout` it. If the file lies in iCloud Drive
   (`~/Library/Mobile Documents/...`), macOS refuses access from this session - ask the user to
   copy it to `~/Downloads`.
3. **The age groups**, only when the PDF has age-class sections or an `Alterskl.` column you want
   checked: `GET /age-groups?season=<season of the race>&variant=<race's variant>` as JSON, in the
   order the endpoint returns it (the first matching group wins). The season follows the race date
   (default boundary 1 January). Without it the script skips the `Alterskl.` column and cannot
   build age-class sections - say in the report that the age classes were not checked.
4. **Result unit and sort direction** (TIME ascending, POINTS usually descending) and, for POINTS,
   the unit label (e.g. "Pkt.") - visible in the PDF, ask if unclear.

Never read the live `time-control.db` for any of this - it is real data from club events. This
skill works only from exports the user hands over.

## The algorithm to reimplement (do not approximate - this must match the app exactly)

**Read these files fresh at the start of every run**, before writing any script - the summary below
is a snapshot, and when it differs from the code, **the code wins** (follow it, and flag the
discrepancy so this skill gets a follow-up edit):
- `Backend/src/main/java/x/timecontrol/services/RankingService.java`
- `Backend/src/main/java/x/timecontrol/services/RankingViewService.java`
- the `generate*Ranking` methods, `RANKING_COLUMNS`/`rankingColumns` and `DNS_COLUMNS` of
  `Backend/src/main/java/x/timecontrol/services/PdfExportService.java`

**Step 1 - the value that counts (`RankingService#adjustedValue`)**
- No `durationMs`, or a status other than `NONE` → **no value**: not ranked, listed under "Nicht
  gewertet". A DSQ *with* a measured time is still not ranked.
- `net = max(0, durationMs - offsetSeconds*1000)` for a TIME race's participant in a start group
  with an offset, otherwise the raw value.
- `adjusted = net + penalty` (ascending) or `net - penalty` (descending), floored at 0 - a penalty
  always makes the result worse.

**Step 2 - who is in a section (`matchesCategoryFilters`)**
- Gender: the person's gender. Age class: `AgeGroupService#calculateAgeGroupName` - birth year in
  `[birthYearFrom, birthYearTo]` and gender equal or the group is `BOTH`, first match in list order;
  no birth date or no match → `Unbekannt`, whose section is titled "ohne Altersklasse". Category:
  the participant's category; "Ohne Kategorie" collects those without one.

**Step 3 - order and places**
- Sort by `adjusted` (ascending, or descending for DESC). Among identical raw values the order is
  whatever the database returns - match rows by race number or name, never by position.
- Places are standard competition places (1, 2, 2, 4) on the **printed** value
  (`RankingService#placeTieValue` = rounded to the hundredth for TIME): 16:40.000 and 16:40.004
  share a place.

**Step 4 - the printed columns (`createRankingEntriesFromParticipants`, `formatValue`)**
- `Wert` = the netted value **before** the penalty; `Strafe` = the penalty, `-` for none or 0;
  `Gesamt` = `adjusted`. `Strafe`/`Gesamt` are printed only when somebody **in that section** has a
  non-zero penalty.
- `Diff` = `-` on the first row, then `rounded(own) - rounded(leader)` with its sign (negative on a
  DESC race): the difference of the two already-rounded values, not the raw gap rounded afterwards.
  When several share the leader's value exactly, which of them prints `-` depends on the database
  order - the others print `+0:00.00`.
- TIME prints `m:ss.hh`, rounded half-up to the hundredth (Java `Math.round` - **not** Python's
  `round()`, which rounds half to even: `1234565 ms` is `20:34.57`). POINTS prints `value/100` with
  two decimals plus the unit label, with the **JVM's default locale**: a German machine prints
  `95,50 Pkt.` - compare the decimal separator loosely.
- Names print as "Nachname Vorname", truncated to 30 characters (27 + `...`), team to 18, age class
  to 16; no team prints `-`. Letters outside Latin-1 lose their diacritics in the PDF (`ž` → `z`).
- `StNr.` and `Jg.` follow the operator's two PDF switches; `ID` only appears when somebody has an
  externalId. Never parse by column position - the reference script locates each cell by the
  header's x-position.

**Step 5 - the sections of each PDF (`PdfExportService#generate*Ranking`)**
- One-section PDFs (Gesamtwertung, männlich/weiblich, one Altersklasse, one Kategorie) print their
  section even when it is empty.
- Multi-section PDFs skip empty sections. Age classes run youngest first (`birthYearTo`
  descending, ties female before male), each split weiblich before männlich, `Unbekannt` last;
  categories run by name (case-sensitive), "Ohne Kategorie" last.

**Step 6 - "Nicht gewertet" (`createDnsRows`)**
- Everyone without a value (Step 1), sorted by last name then first name, case-insensitively.
  Status is the recorded DSQ/DNF/DNS, or `DNS` when nothing was recorded.
- **One list per document**, scoped to what the document is scoped to: whole field for
  Gesamtwertung, alle Altersklassen, alle Kategorien and Altersklassen nach Kategorien; the gender
  for männlich/weiblich (also by category); gender + age class for one Altersklasse; the category
  for one Kategorie.

## How to run the check

1. Copy [`reference_script.py`](reference_script.py) to the scratchpad and replace its `CONFIG`
   block with this run's answers - never carry values over from an earlier run. It handles both
   rounding traps, the locale of POINTS values, the tie order and the column switches already;
   **copy it rather than re-deriving it from the prose above**.
   It was verified on 2026-09-27 against a throwaway instance with synthetic data: all eight
   result PDFs of a TIME race (ties on the printed value with different raw ms, a `.5` half-up
   case, penalties including a 0 penalty, DSQ with a time, DNF, a missing time without status,
   `Unbekannt` age class, a `BOTH` age group, truncated name and team, a name with `ž`), with the
   StNr./Jg. switches both off and on, a POINTS/DESC race with a three-way tie at the top on a
   German-locale JVM, and a TIME race with a 2:00 start-group offset. All matched; tampered PDF
   text (a place, a value, a status, a missing row) and a forgotten offset were each reported.
2. Run it: it prints the recomputed sections and the "Nicht gewertet" list, then the diff against
   the PDF - section titles and their order, row count, each row's Platz, Name, Team, Wert,
   Strafe/Gesamt, Diff, and Jg./Alterskl. where printed, whether the rows stand in place order,
   and the "Nicht gewertet" list with position and status.
3. For each mismatch, drill into that participant: raw `durationMs`, offset, penalty, rounding,
   the place of the neighbours - and name the step where it diverges.

## Reporting

Answer in German, with:
- A one-line verdict up front: "Einzelwertung stimmt vollständig überein" or "N Abweichungen
  gefunden".
- Which PDF was checked, how many sections, how many ranked participants and how many under
  "Nicht gewertet".
- On mismatches: a table of affected rows with berechnet vs. PDF and the responsible step.
- Anything conspicuous in the data even when it matches - identical raw times, a result without a
  status that is missing a time, a participant landing in `Unbekannt`/"ohne Altersklasse" (usually
  a birth year outside every configured group, or a placeholder birth date like 1900).
- The basis the check ran on: which export, whether a start-group offset applied (and which),
  whether the age classes were checked (age-groups JSON given or not), and that the participant
  export and the PDF came from the same state.
