---
name: time-control-bedienung-review
description: "Focused non-diff, multi-agent review of operating Time Control from the UI to the database: creating and changing races, entering persons and participants, teams and categories, importing participant lists (CSV/XLSX, mapping, preview, row errors) and results, setting up age groups per season and variant (copy, rollover), building the start list (race numbers, start order from a previous race, start groups) - and what each action does to the evaluation of this and other races and Gaudi-Modi. Checks per action: validation in frontend and backend, the operator's feedback (German messages, loading and error states), the effect on existing results, protection against data loss, and the spec that proves it. Includes a walkthrough of the race-day workflow. Asks which action groups to review. Follows the shared review base (decision register, at most 10 verified findings, fix packages). Use when the user invokes /time-control-bedienung-review or asks whether setting up races, participants, age groups or imports works and is safe - NOT a diff/branch/PR comparison."
---

## What this does

A read-only review of **how the operator uses the software** before and during a race: every action of the setup
workflow, from the Angular dialog through the store, the effect and the REST endpoint into the service and the
database - and then **forward into the evaluation**: which results, age classes, start lists or Gaudi-Modi of this
race and of other races the action changes, and whether the operator knows it.

For every action it answers whether bad input is **stopped** (and where), whether the operator **sees** what happened
in German, what the action does to **existing evaluations**, whether data can be **lost** without a confirmation, and
**which spec proves it**. The result is a matrix per action group, a walkthrough of the race-day workflow, a short list
of verified findings and fix packages.

**It follows [.claude/review-base.md](../../review-base.md)**: rules (current working tree, read-only, never touch
`Backend/database/`), the decision register [docs/review/entscheidungen.md](../../../docs/review/entscheidungen.md)
(E06-E11 are about operation), what counts as a finding, the verifier, the budget, fix packages and the report. Read
it first; this skill adds scope, matrix, agents and its own report sections.

Relation to the other reviews: whether a computed place or a printed value is right is
`time-control-auswertung-review`; timing devices, measurements and their assignment are
`time-control-zeitmessung-review`. Here the question is whether the operator can set things up correctly and whether
a change reaches the evaluation the way they expect.

## Step A - choose the action groups

- If the arguments name groups (`gruppe=a,c`, `alle`, "nur Import" ...), take them.
- Otherwise **ask** with `AskUserQuestion` - one question, `multiSelect: true`, header "Bereiche", question "Welche
  Bedienbereiche soll das Review prüfen?", options:
  - "A: Rennen und Einstellungen" - Rennen anlegen/ändern/löschen (Datum, Sortierung, Einheit, Variante, Vorlauf, Deckblatt), Saisonstart, PDF-Schalter
  - "B: Personen und Teilnehmer" - Person/Teilnehmer anlegen, ändern, löschen, kopieren; Teams, Kategorien; Ergebnis von Hand, Status, Strafe
  - "C: Import" - Teilnehmerliste (CSV/XLSX, Zuordnung, Vorschau, Zeilenfehler, Dubletten, Klassen), Ergebnis-Import nach Startnummer, CSV-Exporte als Rundreise
  - "D: Altersgruppen" - Saisons, Varianten, anlegen/ändern/löschen, Saison übernehmen, Variante kopieren
  - "E: Startliste" - Startnummern vergeben, Startreihenfolge aus Vorlauf, Startgruppen (Vorlagen, Zuweisung, kopieren, Nummern daraus)
  Nothing chosen (or "Other: alle") means all five.
- Name the chosen groups in the Überblick; everything of other groups is left out.

## Scope

### The actions (rows)

Frontend `Frontend/src/app/components/<folder>/**` with its store slice `store/<feature>/**` and service
`services/<feature>.service.ts`; backend `Backend/src/main/java/x/timecontrol/Controller/<X>Controller.java` and the
services behind it:

- **A - Rennen und Einstellungen**: `race-list` (`race-dialog`, `race-live-links-dialog`), `settings`
  (`season-settings`, `pdf-export-settings`); `RaceController`, `SettingsController`; `RaceService`, `SettingsService`,
  `SeasonService`, `AgeGroupService#assertVariantSelectable`. Changing date (other season!), sort direction, result
  unit, variant, previous race; deleting a race with participants, measurements or Gaudi-Modi.
- **B - Personen und Teilnehmer**: `person-list`, `participant-list` (`participant-dialog`, `participant-copy-dialog`),
  `team-list`, `category-list`; `PersonController`, `ParticipantController`, `TeamController`, `CategoryController`;
  `PersonService`, `ParticipantService` (create/update/delete/clearResult/copyParticipants), `TeamService`,
  `CategoryService`. Changing a person's birth date or gender (re-categorises every race), deleting a person, team or
  category still in use, the same person twice in a race, entering a result, status or penalty by hand.
- **C - Import**: `participant-import-mapping-dialog`, `participant-result-import-mapping-dialog`,
  `utils/import-form-data.util.ts`; `ParticipantController` import endpoints; `ParticipantService#importFromCsv`,
  `#importMapped`, `#previewImport`, `#importResultsByRaceNumber`, the export methods; `ParticipantImportParsers`,
  `ParticipantResultImportParsers`, `TextFileDecoder`, `ValidationUtils`, `AgeGroupService#findOrCreateForImport`.
  Encodings (UTF-8 with/without BOM, Windows-1252), delimiters, XLSX, dates, genders, names with particles, duplicate
  rows, existing persons, "Klasse" columns, partial failure, importing twice.
- **D - Altersgruppen**: `age-group-list` (`age-group-dialog`, `age-group-variant-dialog`); `AgeGroupController`;
  `AgeGroupService`, `SeasonService`. Overlaps, names, variant spelling, the last group of a used variant (E07), a race
  keeping an emptied variant (E08), rollover shift (E11), editing groups of a season whose races are already printed.
- **E - Startliste**: `participant-list` start-list actions, `start-group-board`, `start-group-template-list`;
  `ParticipantController` start endpoints, `StartGroupTemplateController`; `ParticipantService#assignRaceNumbers`,
  `#applyStartOrderFromPreviousRace`, `#applyStartGroupAssignment`, `#copyStartGroupAssignment`,
  `#generateRaceNumbersFromStartGroups`, `StartGroupTemplateService`. Duplicate race numbers, participants added after
  numbering, reverse top-N from a previous race with ties or DNS, start-group offsets and their effect on net times.

### The five questions per action

1. **Abgefangen?** Is bad input stopped - in the form (validators, disabled buttons) **and** in the backend
   (`IllegalArgumentException` → 400, `IllegalStateException` → 409, constraint)? Do both apply the same rule, so the
   UI never offers what the backend refuses and the API never accepts what the UI would stop? A unique constraint that
   ends as a 500 instead of a 409 is a gap.
2. **Rückmeldung?** Does the operator see success and failure in German (snackbar, dialog text, the backend's
   `ErrorResponse` via `extractErrorMessage()`), a loading state, and the changed data without reloading the page?
   Does a partial result (import with row errors) say exactly which rows and why?
3. **Wirkung auf Auswertungen?** Which stored values that feed the evaluation (see `time-control-auswertung-review`:
   duration, penalty, status, race number, start group, category, team, birth date, gender, race date, sort
   direction, result unit, variant, age groups of a season) does the action change, for **which races and Gaudi-Modi**
   (also already printed ones and other seasons)? Is that intended, and does the UI warn before it (e.g. "wird von N
   Rennen verwendet")?
4. **Schutz vor Verlust?** Is a destructive action confirmed, refused while still needed (guard, 409), or cascading
   without a word (deleting a race with results, a person used in several races, a Gaudi-Modus' race, a start-group
   template in use)? Can an import or a copy overwrite what the operator entered by hand?
5. **Belegt?** The backend spec and feature method that covers the action's rule (a `where:` table for the validation
   rules), a frontend spec where the logic lives in the frontend (reducer, util, validator), and the e2e suite step
   that walks it (`kondi-federation`, `nachtslalom`, `saison`, `bergsprint`) - or **"Spec fehlt"** with a one-line
   given/when/then and the spec class it belongs in.

### Beyond the five questions

The eight criteria of the review base apply to everything in scope. For this scope, look especially at:

- **Performance**: importing a large list (queries per row for persons, teams, categories, age groups; the preview
  parsing the file twice), loading the participant list of a big race with its computed age classes, copying
  participants into several races, start-order and start-group actions on a full field.
- **Memory-Leaks**: dialogs and their `afterClosed()` subscriptions, file readers and object URLs of uploads and
  downloads, store subscriptions in the list components (E06 for `destroy$`).
- **Best Practice / Struktur**: components calling services directly, German/English mix-ups, validators duplicated
  instead of shared (`utils/validators.util.ts`), `ParticipantService` mixing import, start list and export.

### The race-day workflow (agent 6)

The typical order the operator follows, walked through the UI and the code as one story, each step with what can go
wrong between steps:

1. new season: set the season start, roll the age groups over (or create them), check the birth years;
2. create the race (date, unit, direction, variant; for a second run the previous race);
3. enter or import the participants, fix the import's row errors, assign teams and categories;
4. build the start list: race numbers, start order from the previous run, start groups; print the start list;
5. (times arrive - out of scope here) correct a result, a status or a penalty by hand;
6. print the results (single race, age groups, categories), open the live view, set up and print a Gaudi-Modus;
7. a late change after printing: a birth date was wrong, a participant was in the wrong category, a race date was
   wrong - what changes where, and does the operator notice what needs reprinting?

## Step 0 - Ground truth (parallel to step 1)

Start in the background: `cd Backend && JAVA_HOME=$(/usr/libexec/java_home -v 25) ./gradlew test --tests
'*Controller*' --tests '*ParticipantServiceSpec' --tests '*ParticipantImportParsersSpec' --tests '*TextFileDecoder*'
--tests '*AgeGroup*' --tests '*SeasonService*' --tests '*RaceServiceSpec' --tests '*StartGroupTemplate*'` (check
`find Backend/src/test -name '*Spec.groovy'` for further specs of the chosen groups), and `cd Frontend && npm test --
--watch=false`. Count tests and failures from `Backend/build/test-results/test/*.xml` and the Vitest summary; a red
test is a finding (Hoch).

## Step 1 - Spawn parallel deep-read agents

In a **single assistant turn**; base paths `Backend/src/main/java/x/timecontrol/`, `Backend/src/test/groovy/x/timecontrol/`,
`Frontend/src/app/`. One agent per chosen group (A-E), agent 6 always:

- **Agents A-E**: the frontend components, store slice, service and models of the group **and** the backend
  controllers, services, entities and repositories behind them, followed forward into the evaluation code
  (`RankingService`, `RankingViewService`, `AgeGroupService`, `SeasonService`, `GaudiModeService`) as far as needed
  for question 3. Deliver the group's **matrix**: one row per action (e.g. "Rennen: Datum ändern", "Import: XLSX mit
  Klasse", "Altersgruppe löschen") with a verdict per question - ✅ (path:line), ⚠️ Lücke, ❗ Schaden, – nicht
  zutreffend - and the reasoning behind every ⚠️/❗ cell. Every ⚠️/❗ cell is also a finding.
- **Agent 6 - Renntag-Durchlauf** (always): the workflow above across all groups (only the steps of chosen groups in
  full, the others only at their seams), as a numbered walkthrough: what the operator clicks, what happens
  (path:line), what can go wrong, what the operator sees. It also reads `e2e-tests/{kondi-federation,nachtslalom,
  saison,bergsprint}/README.md` and scripts to say which steps an e2e suite walks today.

Give every agent a self-contained prompt with: "What this does", its own group or the workflow, "The actions" of the
chosen groups, "The five questions per action", "Beyond the five questions", and sections 2 to 4 of [.claude/review-base.md](../../review-base.md)
verbatim, plus:

> You are reviewing the CURRENT STATE of a real codebase: not a diff. Read `CLAUDE.md` and
> `docs/review/entscheidungen.md` first, then every file of your area in full, frontend and backend, and follow the
> calls into the evaluation. Context: Time Control times ski-club races (Micronaut / Java 25 backend on SQLite,
> Angular 22 frontend with NgRx and Material); one operator sets up races, participants and age groups on a laptop at
> the venue, often under time pressure shortly before the start; UI texts are German. Read-only: do not edit files,
> do not run the application or the e2e suites, never open `Backend/database/`.
> Severity for this review: **Kritisch** = an action that silently changes printed results of other races or
> seasons, loses or overwrites entered data (participants, results, age groups) without confirmation, or imports
> data wrongly without saying so (wrong birth year, gender, class, person merged with another); **Hoch** = a setup
> step that cannot be completed or fails without a visible reason, the UI and the backend applying different rules, a
> 500 for realistic input, an action with evaluation impact and no spec.

## Step 2 - Synthesize

Follow **section 4 of the review base** (pool, dedupe, register, verifier, budget, at most three fix packages). A fix
package that touches frontend code names the lint and build steps from CLAUDE.md (`npx eslint <files> --fix`,
`npm run lint`, `ng build` after a broad `--fix`). Then the report as in **section 5**; the skill's own sections
(section 5, point 2):

- **Matrix je Bereich**: the merged matrix of each chosen group; below each matrix one sentence on its weakest point.
- **Renntag-Durchlauf**: agent 6's walkthrough, condensed to the steps with a ⚠️/❗ and the seams between groups.
- **Wirkung auf Auswertungen**: one table of the actions that change evaluation data - Aktion · betroffene Rennen /
  Gaudi-Modi · gewollt? · Warnung in der UI (ja/nein) · Spec.

Present the report in German with clickable `path:line`. Do not fix anything unasked; end by asking which fix package
to work on.
