---
name: time-control-auswertung-review
description: "Focused non-diff, multi-agent review of how Time Control evaluates results: the ranking of a single race (places, ties on the printed value, sort direction, penalties, start-group offsets, DNS/DNF/DSQ, rounding, Rückstand, age-class/season/variant/gender/category grouping) and the four Gaudi-Modus types (LOS, TEAM, TIME_COMBINATION, POINTS_COMBINATION), and whether every output - UI, PDF, CSV, public live view - shows exactly the same numbers. Answers seven key questions, builds a rule matrix (rule × code × spec × e2e) and hand-calculates worked examples against the code. Asks which parts to review (Einzelrennen, Gaudi-Modi, Ausgaben). Follows the shared review base (decision register, at most 10 verified findings, fix packages). Use when the user invokes /time-control-auswertung-review or asks whether rankings, placings, rounding or Gaudi-Modus results are right - NOT a diff/branch/PR comparison."
---

## What this does

A read-only review of **what the race officials get to read**: the result lists of a single race and of the
Gaudi-Modus combinations. It follows every value from the participant's stored duration, penalty and status through
`RankingService`, the age-class resolution and the calculators to every place it is shown - the UI, the PDFs, the
CSV exports and the public live view - and asks whether it is right by the race rules and the same everywhere.

It is the most important review of this project: a wrong place or a wrong age class on a printed list is the one
error the officials notice at once and the club cannot take back.

**It follows [.claude/review-base.md](../../review-base.md)**: rules (current working tree, read-only, never touch
`Backend/database/`), the decision register [docs/review/entscheidungen.md](../../../docs/review/entscheidungen.md)
(E09, E12 and E13 are about evaluation), what counts as a finding, the verifier, the budget, fix packages and the
report. Read it first; this skill adds scope, key questions, agents and its own report sections.

Relation to the other reviews: how participants, races and age groups get **into** the system (dialogs, imports,
validation) is `time-control-bedienung-review`; how finish times get onto a participant is
`time-control-zeitmessung-review`. Here the stored data is taken as given - what matters is what is computed and
printed from it.

## Step A - choose the parts

- If the arguments name parts (`teil=1,2`, `alle`, "nur Los-Modus", "nur PDF" ...), take them.
- Otherwise **ask** with `AskUserQuestion` - one question, `multiSelect: true`, header "Teile", question "Welche Teile
  der Auswertung soll das Review prüfen?", options:
  - "1: Einzelrennen" - Plätze, Gleichstand, Sortierrichtung, Strafen, Startgruppen-Versatz, DNS/DNF/DSQ, Rundung, Rückstand, Wertungsgruppen (Altersklasse, Geschlecht, Kategorie)
  - "2: Gaudi-Modi" - Los-Verfahren, Mannschaft, Zeit-Kombination, Punkte-Kombination: Regeln, Gleichstände, fehlende Läufe, Filter
  - "3: Ausgaben" - UI, PDF, CSV und Live-Ansicht zeigen dieselben Werte; Spalten, Schalter, Seitenumbrüche, Kopf
  Nothing chosen (or "Other: alle") means all three. With part 2, a named type ("nur LOS") narrows it to that type.
- Name the chosen parts in the Überblick.

## Scope

### Where the values come from and go to

| Stage | Where |
|---|---|
| Stored result | `Participant` (durationMs, penalty, status, raceNumber, startGroupId, categoryId), `Race` (resultUnit, sortDirection, date, ageGroupVariant), `Person` (birthDate, gender) |
| Value that counts | `RankingService#adjustedValue`, `#netDurationMs`, `#startGroupOffsetMs`, `#roundForDisplay`, `#placeTieValue`, `#computePlaces`, `#assignStandardPlaces`, `#dnsStatusLabel` |
| Wertungsgruppe | `SeasonService` (season from the date and the configured season start), `AgeGroupService#calculateAgeGroupName`, `#findBySeasonAndVariant`, `#findForScoring`, `CategoryService`, `ParticipantService#toResponses` |
| Single-race views | `RankingViewService` (ranking entries, DNS rows, start list, `formatTime`/`formatValue`, section order `uniqueAgeGroupNamesYoungestFirst`) |
| Gaudi-Modus | `GaudiModeService` (validation, filters, Los draw/pairing), `services/gaudi/*Calculator.java`, `PointsScaleService` |
| Outputs | `PdfExportService`, `RaceLiveService` (JSON and `renderHtml`), `ParticipantService#exportResultsCsv`, `GaudiCsvExportService`, the controllers' export endpoints, the frontend's `participant-list` and `gaudi-modus/gaudi-mode-detail` |

### Key questions (every agent keeps them in mind; the report answers each one explicitly)

1. **Richtige Plätze**: is every place right by the race rules - ascending/descending (`SortDirection`), TIME vs.
   POINTS (`ResultUnit`), penalties added before ranking, start-group offsets subtracted, ties on the **printed**
   value sharing a place and the next place skipped ("1, 1, 3"), DNS/DNF/DSQ never ranked even with a measured
   duration, a participant without a result never ranked and never lost?
2. **Rundung und Rückstand**: is every time rounded exactly once to hundredths (half up, carry into seconds/minutes),
   is the "Rückstand"/"Diff" the difference of the two printed values, is the same rounding used for places, for the
   printed value and for Gaudi-Modus sums and averages (E12), and are POINTS values printed at their stored
   precision?
3. **Richtige Wertungsgruppe**: does each participant land in exactly one section - the age class of the **race's
   season and variant** (not today's year, not another variant), matching birth year **and** gender (BOTH matches
   either), the right category, "Unbekannt"/"ohne Altersklasse" when nothing matches - and is the section order
   (youngest first, gender order) the same in UI, PDF and live view?
4. **Überall dieselben Zahlen**: do the UI table, every PDF variant (overall, gender, age group × gender, all age
   groups, categories, start list), the results CSV, the Gaudi CSV and the live view (JSON and HTML) show the same
   place, value, Rückstand, age class and status for the same participant? Is there a second calculation anywhere
   that could drift from `RankingService`?
5. **Gaudi-Modus nachrechenbar**: for each type, is the rule implemented as the officials apply it by hand - LOS:
   pair average vs. field average, single leftover, a pair with a DNS partner; TEAM: team size, counted best members,
   incomplete teams; TIME_COMBINATION: sum over all legs, a missing leg; POINTS_COMBINATION: points scale per place,
   ties sharing points, keep-*-in-ranking flags, category/age-group/gender filters? Does the result match what
   `/time-control-los-verify` and `/time-control-punktemischung-verify` (their `reference_script.py`) compute?
6. **Nicht Gewertete ausgewiesen**: is everyone who started or was entered but not ranked listed with the right
   reason (DSQ/DNF/DNS, precedence when legs differ) in every output, and nobody listed twice or silently dropped?
7. **Datenschutz der Ausgaben**: do race number and birth year appear only where the operator's switches allow them
   (E03, E13), is nothing else personal (birth date, external id where not wanted) served on the public live view, is
   the live HTML escaped?

### Beyond the key questions

The eight criteria of the review base apply to everything in scope. For this scope, look especially at:

- **Performance**: a PDF or live request for a large field (300 participants, 20 age groups × 2 genders, several
  categories, many pages) - lookups per participant or per section (age groups, persons, teams, categories re-read
  inside loops), cover-page BLOBs loaded where not needed, Gaudi-Modi over many races recomputing each leg per
  section, the live view polled by many phones at once.
- **Memory-Leaks**: PDFBox documents and streams closed on every path; the frontend's result and Gaudi-Modus views
  releasing their subscriptions and blob URLs of downloaded PDFs.
- **Best Practice / Struktur**: a second place- or rounding-calculation outside `RankingService`, German text outside
  the exempt PDF/CSV output, `PdfExportService` growing past one responsibility.

### Worked examples (agent 4)

Instead of trusting the specs, agent 4 builds **small concrete cases** from the code and calculates by hand what each
output must show, then follows the code line by line to see whether it does. At least these, for the chosen parts:

- two finishers whose raw times differ only in the millisecond digit that rounding erases (tie, same place, next
  place skipped); 0:59.995 (carry into the minute); a DESC points race with a penalty;
- a DSQ with a measured time faster than the winner; a participant with a start-group offset;
- a participant born on the first day of the season start (season start 1 July) and one in December, in a race dated
  just before and just after the season boundary; a race with a non-standard variant;
- LOS: an odd field (single leftover), a pair whose average lands on exactly half a hundredth, a pair with a DNS
  partner; TIME_COMBINATION with one leg missing; POINTS_COMBINATION with a tie on points and a keep-flag; TEAM with an
  incomplete team.

Each example is a row: Fall · erwartet (per rule, calculated by hand) · Code liefert (path:line of each step) · ✅/❗.

## Step 0 - Ground truth (parallel to step 1)

Start in the background: `cd Backend && JAVA_HOME=$(/usr/libexec/java_home -v 25) ./gradlew test --tests
'*Ranking*' --tests '*PdfExport*' --tests '*RaceLive*' --tests '*Gaudi*' --tests '*gaudi*' --tests '*AgeGroup*'
--tests '*SeasonService*' --tests '*ParticipantServiceSpec'` (check `find Backend/src/test -name '*Spec.groovy'` for
further specs of the chosen parts). Count tests and failures from `Backend/build/test-results/test/*.xml`; a red test
is a finding (Hoch). The e2e suites `rundung`, `kondi-federation`, `saison` and `bergsprint` are **read**, not run.

## Step 1 - Spawn parallel deep-read agents

In a **single assistant turn**; base paths `Backend/src/main/java/x/timecontrol/` (below `…/`), tests in
`Backend/src/test/groovy/x/timecontrol/`. One agent per chosen part, agents 4 and 5 always:

1. **Einzelrennen** (part 1): `…/services/{RankingService,RankingViewService,SeasonService,AgeGroupService,
   CategoryService,StartGroupTemplateService}.java`, the ranking parts of `…/services/ParticipantService.java`
   (`toResponses`, grouping), `…/entities/{Participant,Race,Person,AgeGroup,ResultUnit,SortDirection,
   DisqualificationStatus}.java`. Key questions 1, 2, 3, 6.
2. **Gaudi-Modi** (part 2): `…/services/gaudi/**`, `…/services/{GaudiModeService,PointsScaleService}.java`,
   `…/Controller/GaudiModeController.java`, `…/entities/{GaudiMode,GaudiModeRace,GaudiModeType,GaudiLosPairing,PointsScale}.java`,
   `.claude/skills/time-control-los-verify/**`, `.claude/skills/time-control-punktemischung-verify/**` (as the
   reference of the rules). Key questions 1, 2, 3, 5, 6.
3. **Ausgaben** (part 3): `…/services/{PdfExportService,RaceLiveService,GaudiCsvExportService}.java`, the export
   methods of `ParticipantService`, `…/Controller/{ParticipantController,GaudiModeController,RaceLiveController}.java`
   (export endpoints), `Frontend/src/app/components/{participant-list,gaudi-modus}/**` (how the UI shows the values).
   Key questions 4, 6, 7. Deliver an **output table**: per value (place, value, penalty, total, Rückstand/Abweichung,
   age class, status, race number, birth year) × output (UI, each PDF variant, results CSV, Gaudi CSV, live JSON, live
   HTML): the method that produces it (path:line) and whether it goes through the same `RankingService` call.
4. **Nachrechnen** (always): the worked examples above for the chosen parts, reading the code of agents 1-3 itself.
5. **Specs und e2e** (always): the specs of step 0, `e2e-tests/{rundung,kondi-federation,saison,bergsprint}/**`
   (scripts, parsers, fixtures, READMEs). Deliver the **rule matrix**: one row per evaluation rule of the key
   questions (e.g. "Gleichstand auf gedrucktem Wert", "DSQ nie gewertet", "Saison aus Datum und Saisonstart", "Los:
   Einzel-Rest", "Punkte bei Gleichstand geteilt") - Regel · im Code (path:line) · im Spec (spec + feature / fehlt) ·
   in e2e (suite + step / fehlt) · Ausgabe gelesen (PDF-Text via `PDFTextStripper` / `renderHtml` / fehlt). Also: e2e
   steps that print `MISMATCH`/`ABWEICHUNGEN` but exit 0, and parsers that no longer read the kondi reference PDF.

Give every agent a self-contained prompt with: "What this does", its own area and key questions, all seven key
questions for context, "Where the values come from and go to", "Beyond the key questions", and sections 2 to 4 of
[.claude/review-base.md](../../review-base.md) verbatim, plus:

> You are reviewing the CURRENT STATE of a real codebase: not a diff. Read `CLAUDE.md` and
> `docs/review/entscheidungen.md` first, then every file of your area in full, and follow the calls into the other
> stages. Context: Time Control times ski-club races (Micronaut / Java 25 backend on SQLite, Angular frontend). Race
> officials check the printed result lists by hand and publish them; the participants are mostly minors. Read-only:
> do not edit files, do not run the application or the e2e suites, never open `Backend/database/`.
> Severity for this review: **Kritisch** = a wrong place, value, Rückstand, point total, age class, category or
> status in any output, a participant ranked who must not be or missing who must be, two outputs showing different
> numbers for the same participant, personal data on the live view against the operator's switch; **Hoch** = an
> evaluation rule without a spec that would catch its breakage, an output that crashes or is cut off for a realistic
> field (long names, many age groups, many pages), a Gaudi-Modus configuration the UI allows but the calculator
> scores wrongly.

## Step 2 - Synthesize

Follow **section 4 of the review base** (pool, dedupe, register, verifier, budget, at most three fix packages). Every
fix package that changes a ranking, a PDF or the live layout names `/time-control-e2e` and the parsers to adjust
(keeping them able to read the old layout). Then the report as in **section 5**; the skill's own sections (section 5,
point 2):

- **Antworten auf die Leitfragen**: one subsection per key question with a verdict (✅ hält / ⚠️ mit Einschränkungen /
  ❗ hält nicht), reasoning with `path:line` and links to the findings.
- **Nachgerechnet**: agent 4's table of worked examples, the ❗ rows in full.
- **Regelmatrix**: agent 5's matrix, only the rows with a gap in full; the complete rows counted.
- **Ausgabentabelle** (with part 3): agent 3's table, condensed to the cells that do **not** go through the shared
  calculation.

Present the report in German with clickable `path:line`. Do not fix anything unasked; end by asking which fix package
to work on.
