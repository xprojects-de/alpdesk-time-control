---
name: time-control-zeitmessung-review
description: "Focused non-diff, multi-agent review of the path of a finish time in Time Control: from the timing device (polling provider ALPDESK_TIMECONTROL, the streaming seam, manual and file import) through TimingEventSink into the measurement table, auto-assign or manual assignment to a participant, copying into a race (race measurements) and syncing onto the participants - plus device reset/archive, the import pause and the concurrency around it (scheduler, lifecycle thread, MeasurementTableLock, DeviceImportGate, ThreadLocal config, SQLite). Answers six key questions, walks the path step by step, checks every failure case (detected, consistent, retried, visible) and builds a lock/thread table. Asks which parts to review. Follows the shared review base (decision register, at most 10 verified findings, fix packages). Use when the user invokes /time-control-zeitmessung-review or asks whether finish times get from the device onto the right participant safely - NOT a diff/branch/PR comparison."
---

## What this does

A read-only review of **one finish time's way onto a participant**: measured by the device, fetched or pushed,
deduplicated and stored, assigned (automatically by race number sequence or by hand), carried into a race and synced
onto the participant whose result then goes into the evaluation. It follows the path step by step, goes through every
failure case on it, and looks at everything that runs at the same time on it (the 5s poll, a pushing device, a manual
import, a reset or archive, the operator editing a measurement).

**It follows [.claude/review-base.md](../../review-base.md)**: rules (current working tree, read-only, never touch
`Backend/database/`, never talk to a real timing device), the decision register
[docs/review/entscheidungen.md](../../../docs/review/entscheidungen.md) (E01 one instance - races between two processes
are out of scope, between threads in scope; E04 pushes during the pause), what counts as a finding, the verifier, the
budget, fix packages and the report. Read it first; this skill adds scope, key questions, agents and its own report
sections.

Relation to the other reviews: what is computed from a participant's result is `time-control-auswertung-review`;
setting up races and participants is `time-control-bedienung-review`. Here the question ends when the right duration,
status and penalty sit on the right participant.

## Step A - choose the parts

- If the arguments name parts (`teil=1,3`, `alle` ...), take them.
- Otherwise **ask** with `AskUserQuestion` - one question, `multiSelect: true`, header "Teile", question "Welche Teile
  der Zeitmessung soll das Review prüfen?", options:
  - "1: Gerät bis Messung" - Provider, Poll und Push, Senke (Dubletten, Upsert, ungültige Zeiten), manueller Import, Datei-Import, Geräte-Befehle (Reset, Dauerbetrieb, ältesten Start verwerfen)
  - "2: Messung bis Teilnehmer" - Auto-Assign nach Startnummer, Zuordnung und Korrektur von Hand, Messungen ins Rennen übernehmen, Archivieren, auf Teilnehmer übertragen
  - "3: Nebenläufigkeit" - 5s-Poll, Stream, Lifecycle-Thread, Import-Pause, Tabellensperre, ThreadLocal, SQLite-Schreibzugriffe und Transaktionen
  Nothing chosen (or "Other: alle") means all three.
- Name the chosen parts in the Überblick.

## Scope

### The path

| Step | Where (`Backend/src/main/java/x/timecontrol/…`) |
|---|---|
| Provider and its configuration | `services/{TimingDataImporter,PollingTimingImporter,StreamingTimingImporter,TimingProviderRegistry,TimingProviderLifecycle,DeviceCapability}.java`, `services/AlpdeskTimeControlDataImportService.java`, `entities/TimingProviderType.java`, `Controller/SettingsController.java` (timing provider) |
| Fetch / push | `services/DataImportScheduler.java` (5s, `fixedDelay`), `services/DeviceImportGate.java`, `Controller/MeasurementController.java` (manual import, scheduled-import switch, device status/connection, reset, continuous mode, discard) |
| Sink | `services/{TimingEvent,TimingEventSink,MeasurementService,MeasurementTableLock}.java`, `entities/Measurement.java`, `repositories/MeasurementRepository.java` |
| File import | `services/MeasurementImportParsers.java`, `MeasurementService#previewImport/#importMapped`, `TextFileDecoder` |
| Assignment | `services/AutoAssignService.java` (sequence, skip, set-next, enable/disable per race), manual edits via `MeasurementController` |
| Into the race | `services/RaceMeasurementService.java` (`copyMeasurements`, `archiveMeasurements`, update/delete), `Controller/{RaceMeasurementController,RaceController}.java` (`archive-measurements`), `ParticipantService#syncMeasurementsToParticipants`, `#clearResult` |
| Frontend | `components/{measurement-list,race-measurement-list}/**`, `store/{measurement,race-measurement,settings}/**`, `utils/{device-measurement-id,device-reset}.util.ts` |

### Key questions (every agent keeps them in mind; the report answers each one explicitly)

1. **Keine Zielzeit verloren**: can a time measured by the device fail to reach the table - a poll failing or timing
   out, the device answering garbage, the app restarting, a reset/archive (`pauseDuring`, the safety pull before it),
   automatic import switched off, a push during the pause (E04), a manual import racing the scheduler, an exception in
   one event of a batch? Is the worst case visible to the operator?
2. **Nicht doppelt, nicht verwechselt**: does every device event land exactly once (dedupe against stored rows,
   upsert by an event id vs. insert by a participant id, the device renumbering after a reset), and on the right
   participant (auto-assign sequence after a skip, a DNS, a manual correction, two races open; `set-next` with
   `force`)? Can an operator's manual correction be overwritten by the next poll or the next sync?
3. **Richtig ins Rennen übertragen**: does `copyMeasurements`/`syncMeasurementsToParticipants` carry exactly the
   assigned times of **this** race onto its participants (not another race's, not an archived one), keep or overwrite
   a result entered by hand the way the operator expects, report skipped ones (`SyncMeasurementsResult`), and leave
   status and penalty alone?
4. **Fehler erkannt und sichtbar**: for every failure case on the path - device unreachable, wrong protocol answer,
   invalid duration, provider not configured, capability missing (409), SQLite busy, import row errors - is it
   detected (not swallowed), classified (retry vs. fail), left consistent (no half-written batch), retried with a
   cap, **visible** to the operator (device status, connection, snackbar, log) and recovered without a restart?
5. **Nebenläufigkeit**: the scheduler tick, a push from a streaming device, a manual import, a reset/archive, the
   lifecycle thread switching providers, the operator editing or deleting a measurement, auto-assign after each poll -
   which of them can overlap, what protects each shared state (`MeasurementTableLock`, `DeviceImportGate`'s
   `pauseLock` and epoch, `ThreadLocal` config in the polling provider, volatile settings, transactions), and is every
   check-then-act covered (dedupe, next race number, unique constraints ending as 409 and not 500)?
6. **Belegt**: which spec proves each step and each race - `TimingEventSinkSpec`, `DeviceImportGateSpec`,
   `TimingProviderRegistrySpec`, `TimingProviderLifecycleSpec`, `AlpdeskTimeControlDataImportServiceSpec`,
   `AutoAssignServiceSpec`, `MeasurementServiceSpec`, the e2e suites `bergsprint` (real device import path through a
   fake `GET /data` server) and `nachtslalom` (auto-assign, corrections) - or which case is missing and where it
   belongs?

### Beyond the key questions

The eight criteria of the review base apply to everything in scope. For this scope, look especially at:

- **Performance**: what one 5s tick costs as the measurement table grows over a long race day (whole-table reads for
  dedupe or auto-assign, the device's full list re-sent on every poll), how long `MeasurementTableLock` and SQLite's
  write lock are held, device calls without a timeout blocking the scheduler thread.
- **Memory-Leaks**: executors, reader threads and vendor callbacks of a provider stopped on a provider switch and on
  shutdown, `ThreadLocal` values cleared, frontend polling of device status stopped when the view is left.
- **Best Practice / Struktur**: a provider touching `MeasurementService` instead of `TimingEventSink`, a capability
  checked in the wrong layer, the seams used as CLAUDE.md describes them.

### Failure cases (agent 3)

At least: device unreachable / timeout / 5xx / HTML or empty answer / valid JSON with a missing field / a negative or
absurd duration / the same event twice in one answer / the device's list shorter after a reset; a streaming provider
whose `start()` hangs or throws; the scheduler tick throwing; SQLite `SQLITE_BUSY` while the operator saves; the app
shut down in the middle of a batch; a reset whose safety pull fails; a measurement file with a BOM, a wrong delimiter
or an unparseable time. For each one the seven answers: Erkannt · Richtig eingeordnet · Konsistent zurückgelassen ·
Wiederholt · Sichtbar · Erholt · Belegt (spec / fehlt).

## Step 0 - Ground truth (parallel to step 1)

Start in the background: `cd Backend && JAVA_HOME=$(/usr/libexec/java_home -v 25) ./gradlew test --tests
'*TimingEventSink*' --tests '*DeviceImportGate*' --tests '*TimingProvider*' --tests '*AlpdeskTimeControlDataImport*'
--tests '*AutoAssign*' --tests '*MeasurementService*' --tests '*ParticipantServiceSpec'`. Count tests and failures
from `Backend/build/test-results/test/*.xml`; a red test is a finding (Hoch). Also run
`grep -rn "synchronized\|ThreadLocal\|volatile\|@Scheduled\|@Transactional\|ExecutorService\|MeasurementTableLock\|pauseDuring"
Backend/src/main/java` and hand the list to agent 4 as a starting point (not as its scope). The e2e suites
`bergsprint` and `nachtslalom` are read, not run.

## Step 1 - Spawn parallel deep-read agents

In a **single assistant turn**; one agent per chosen part, agents 3 and 5 always:

1. **Gerät bis Messung** (part 1): the rows "Provider", "Fetch / push", "Sink" and "File import" of the path, plus the
   frontend's `measurement-list` and `settings` (timing provider). Key questions 1, 2, 4. Deliver a **walkthrough**:
   one numbered step per hand-over (device → provider → scheduler/push → sink → table), with what is read, written and
   locked (path:line).
2. **Messung bis Teilnehmer** (part 2): the rows "Assignment" and "Into the race", plus `race-measurement-list` and the
   measurement edit dialogs. Key questions 2, 3, 4. Deliver the same kind of walkthrough from a stored measurement to
   the participant's `durationMs`.
3. **Fehlerfälle** (always): the failure cases above for the chosen parts, following the code; deliver the table
   Fehlerfall × seven answers, every ✗ cell with path:line.
4. **Nebenläufigkeit** (part 3): every writer of the measurement, race-measurement and participant-result tables and
   every thread that runs one (HTTP request threads, the scheduler, the lifecycle executor, a provider's own reader
   thread or callback). Deliver the **lock/thread table**: Schreiber (Class.method, path:line) · läuft auf (thread) ·
   Transaktion (ja/nein) · Sperren in Reihenfolge (`MeasurementTableLock`, `pauseLock`, SQLite write lock) ·
   geschützt durch Unique-Index · Urteil ✅/⚠️/❗. Every ⚠️/❗ row is also a finding. Key question 5.
5. **Specs und e2e** (always): the specs of step 0, `e2e-tests/{bergsprint,nachtslalom}/**` and their fake device
   server. Key question 6: per walkthrough step and per failure case the spec + feature (or suite + step) that proves
   it, or "fehlt" with a one-line given/when/then and the spec class it belongs in; and whether the fake device speaks
   the protocol exactly as `AlpdeskTimeControlDataImportService` expects it.

Give every agent a self-contained prompt with: "What this does", its own area and key questions, all six key
questions for context, "The path", "Beyond the key questions", and sections 2 to 4 of [.claude/review-base.md](../../review-base.md) verbatim, plus:

> You are reviewing the CURRENT STATE of a real codebase: not a diff. Read `CLAUDE.md` (especially "Timing device
> import") and `docs/review/entscheidungen.md` first, then every file of your area in full. Context: Time Control
> times ski-club races on a laptop at the venue (Micronaut / Java 25 backend on SQLite with WAL and a busy timeout,
> Angular frontend); a timing device reports finish times, which must reach the right participant exactly once while
> the operator keeps working in the UI. One process only (E01), but several threads. Read-only: do not edit files, do
> not run the application or the e2e suites, never open `Backend/database/`, never call a real device.
> Severity for this review: **Kritisch** = a finish time lost, duplicated or put on the wrong participant, a manual
> correction silently overwritten, another race's times carried into this race; **Hoch** = the import stops for good
> or wedges until a restart, a device failure the operator does not see, a race that can end in a 500 or a half-written
> batch, a step on the path without a spec.

## Step 2 - Synthesize

Follow **section 4 of the review base** (pool, dedupe, register, verifier, budget, at most three fix packages). A fix
package that changes the import path names `/time-control-e2e` (`bergsprint`, `nachtslalom`). Then the report as in
**section 5**; the skill's own sections (section 5, point 2):

- **Antworten auf die Leitfragen**: one subsection per key question with a verdict (✅ hält / ⚠️ mit Einschränkungen /
  ❗ hält nicht), reasoning with `path:line` and links to the findings.
- **Weg einer Zielzeit**: agents 1 and 2's walkthroughs as one numbered path, the steps with a ⚠️/❗ in full.
- **Fehlerfälle**: agent 3's table, only the rows with a ✗ in full; the complete rows counted.
- **Sperren und Threads** (with part 3): agent 4's table, only the ⚠️/❗ rows in full.

Present the report in German with clickable `path:line`. Do not fix anything unasked; end by asking which fix package
to work on.
