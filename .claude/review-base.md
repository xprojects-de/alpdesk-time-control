# Review base - shared by the scoped review skills

The scoped review skills (`time-control-auswertung-review`, `time-control-bedienung-review`,
`time-control-zeitmessung-review`) each define **what** they review. This file defines **how**: the rules, the
decision register, the finding budget, verification and the report. A skill that includes this file follows every
rule here unless it says otherwise. `time-control-ultra-code-review` uses sections 1 to 3 and its own synthesis.

The goal of a scoped review is a **small, reliable set of changes**, not a complete list of everything that could be
better. Fewer findings that all hold beat many findings that need sorting.

## 1. Rules

- **Current working tree, never a diff.** Ignore `<PR#>`, branch, `--comment`, `--fix` or `--post` arguments and say
  that the skill always reviews the current working tree (uncommitted changes included).
- **Read-only.** No code changes, no commits, no `./gradlew run`, no e2e suites, no request against a running
  instance. `Backend/database/` holds the operator's **real** race data (names and birth years of mostly underage
  participants): never open, copy or query it, and never read `e2e-tests/*/local-data/`.
- **The yardstick** is [CLAUDE.md](../CLAUDE.md): its conventions (code style, English backend / German UI, the
  exemption for PDF and CSV output, Flyway rules, "Backend tests (always)", the frontend lint rules) and its
  architecture sections (RankingService as the single place for places, the timing-provider seams, `accept` vs.
  `acceptBatch`, the import pause, Gaudi-Modus calculators). A deviation from them is a finding; a rule the code has
  outgrown is a suggestion to update CLAUDE.md.
- **Agents** are spawned in a single assistant turn with `subagent_type: general-purpose` and
  `run_in_background: false`. Each gets a self-contained prompt (it has no conversation context) that contains the
  skill's scope, its own area and focus, and sections 2 to 4 of this file verbatim.
- **Java 25**: every Gradle run needs `JAVA_HOME=$(/usr/libexec/java_home -v 25)`; the `java` on PATH is older. Test
  results are counted from `Backend/build/test-results/test/*.xml`, never from a piped exit code.

## 2. The decision register

[`docs/review/entscheidungen.md`](../docs/review/entscheidungen.md) lists what the user has decided to accept
(E-numbers). Every agent reads it before reviewing.

- A finding that an entry covers is **not reported**. The agent counts it under "vom Register abgedeckt: E04".
- Only if the entry's premise no longer holds (the code changed so the reason is gone, or the consequence is worse
  than the entry says) the finding is reported, marked **"Entscheidung prüfen (E04)"**, with what changed.
- Decisions stated in CLAUDE.md or in a code comment ("deliberately", "on purpose", "decided") count the same as
  register entries - unless the comment's reasoning no longer matches the code, which is itself a finding.

## 3. What counts as a finding

- **Criteria.** Every agent evaluates everything it reads in its scope against exactly these eight criteria; an issue
  may fit more than one, it is listed under its primary one:
  - **Bugs**: incorrect logic, wrong results, crashes, unhandled exceptions or edge cases.
  - **Stabilität**: race conditions, transactions, error handling, resource handling, anything that could crash or
    wedge the app during a live race or lose a finish time.
  - **Funktionalität**: behaviour that doesn't match CLAUDE.md or what the race domain implies (race rules, how
    officials read a result list, how the operator works), incomplete features, silently wrong output.
  - **Best Practice**: convention violations (CLAUDE.md "Code style", Micronaut, Angular/NgRx), missed reuse, dead
    code, language convention violations.
  - **Performance**: N+1 queries, missing indexes, loading too much (cover-page BLOBs!), work repeated per row, per
    section or per poll, blocking work - anything that degrades with many participants, measurements, races, age
    groups or PDF pages on a laptop.
  - **Memory-Leaks**: subscriptions, dialogs, intervals and object URLs never released in the frontend; growing
    collections, threads or executors never stopped in the backend.
  - **Testabdeckung**: behaviour without a spec that would catch its breakage, measured against CLAUDE.md "Backend
    tests (always)"; weak assertions. Name the concrete missing case and the spec it belongs in.
  - **Struktur**: violations of the package layout (Controller → service → repository, dto vs. entities, test packages
    mirroring main), abstractions in advance, classes too big or mixing responsibilities; in the frontend the
    component/store/service split.
- Each skill's **key questions** say where to look hardest; they do not replace the criteria. A skill's report groups
  its main list by severity and tags every finding with its criterion; the Überblick gives the count per criterion.
- **Concrete failure scenario required**: which input, race setup, operator action, device answer or timing leads to
  which wrong behaviour. "Could be a problem" is not a finding.
- **Verified in the code**: quote the relevant lines to yourself before reporting; cite `path:line`.
- **No pure style findings.** Naming, formatting, comment wording or "could be more elegant" only count when a rule in
  CLAUDE.md ("Code style", language convention, frontend lint) is broken, and then as Niedrig.
- **No findings outside the skill's scope**, except a **Kritisch** one, which goes into a separate short list.
- **Severities** (a skill may make them more specific for its scope):
  - **Kritisch**: a wrong place, time, point total, age class or DNS/DNF/DSQ status in a result list, PDF, CSV or the
    live view; a finish time lost or assigned to the wrong participant; data lost or silently overwritten; a
    migration that keeps an upgraded database from starting; birth years or other personal data of participants on
    the public live view or in a log without the operator having chosen it.
  - **Hoch**: a step of the race-day workflow broken or impossible (create a race, import participants, set up age
    groups, assign times, export results); an error the operator does not see; a background job that stops for good;
    an important behaviour without a spec.
  - **Mittel**: wrong or inconsistent behaviour with limited consequence, or one the operator notices and can correct
    in the UI.
  - **Niedrig**: a papercut.
- For every finding: `path:line`, criterion (one of the eight above), severity, failure scenario (one sentence), suggested fix (one sentence),
  `produktionsrelevant: true/false` (would you insist on it before the next race?), and a size estimate for the fix:
  **S** (a few lines, one spec), **M** (one class and its specs), **L** (several classes or a design change).

## 4. Verification and budget (synthesis)

1. **Pool and dedupe** the agents' findings (keep the more precise `path:line`), drop what the register covers.
2. **Refute before reporting.** Spawn one more agent, the *verifier*, with every Kritisch, Hoch and Mittel candidate
   (path:line, scenario, claimed severity). Its only task is to **try to refute** each one by reading the code: a
   guard, validation, lock, transaction, a later step or a frontend check that prevents the scenario, or a premise
   that does not hold. It answers per finding `bestätigt` / `widerlegt` (with the preventing line) / `überzogen`
   (suggested severity). Drop the refuted, adjust the overstated. Spot-check every remaining Kritisch yourself.
3. **Budget**:
   - **Main list**: at most **10** findings, only Kritisch and Hoch, most severe first.
   - **Anhang**: Mittel and Niedrig as one-liners, at most 10 each. More are cut, the number of cut ones is said.
4. **Fix packages**: group the main list (and Mittel findings that belong to the same code) into **at most three
   packages**. Each package is self-contained (one change the user reviews and commits): title, findings it fixes,
   files, the specs it needs (named, with the case they cover - "a bug fix starts with a spec that fails without the
   fix"), whether it needs `/time-control-e2e` (rankings, PDF or live layout, imports, Gaudi-Modus scoring), size
   S/M/L. Order by value: what prevents the worst damage per effort first.

## 5. Report (German)

In this order, headings in German, identifiers as they are, clickable `path:line` relative to the repository root:

1. **Überblick**: scope reviewed (and what the user chose), test run (tests, failures), findings per severity before
   and after verification, findings per criterion, how many the register covered (`E03 ×2, E07 ×1`), two or three sentences on the state.
2. The skill's own sections (answers to its key questions, matrices, walkthroughs).
3. **Befunde** (main list, max. 10).
4. **Fix-Pakete** (max. 3).
5. **Anhang**: Mittel, Niedrig, "Entscheidung prüfen" entries, out-of-scope Kritisch findings.
6. **Kandidaten fürs Register**: findings the user will likely accept as intended (a deliberate trade-off, a
   documented limit), each as a ready-to-paste register entry.

Do not fix anything unasked. End by asking which fix package to work on. When the user answers that a finding is
intended, offer to add it to the register.
