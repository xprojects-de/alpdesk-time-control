# Konditionswettkampf: 5-Instanzen-Föderationstest

Simuliert den "Stationsbetrieb": eine Hauptinstanz legt Rennen + Teilnehmerliste an, vier
getrennte Stationsinstanzen (je eine pro Rennen) importieren den Teilnehmer-Export der
Hauptinstanz, tragen die Ergebnisse **einzeln per API** ein (kein Bulk-Import, simuliert einen
Zeitnehmer am Gerät), exportieren ihre Ergebnisse und die Hauptinstanz importiert sie zurück.
Danach werden alle Auswertungsebenen (Gesamt, Geschlecht, Altersklassen, Gaudi-Punkte-Mischung)
automatisiert gegen eine unabhängige Python-Nachrechnung der Rangfolge geprüft.

## Voraussetzungen

- Gebauter `time-control.jar` (`./gradlew optimizedJitJarAll` im `Backend/`-Verzeichnis).
- Python 3 (nur Standardbibliothek, kein `pip install` nötig).
- `pdftotext` (Teil von `poppler`, z.B. `brew install poppler`).
- **Nie gegen die echte Produktions-DB laufen lassen** — immer frische, isolierte
  Arbeitsverzeichnisse pro Instanz (siehe `start_instances.sh`).

## Testdaten

Der Test läuft auf **synthetischen Demodaten** unter `fixtures/` — erfundene Namen, Vereine und
Ids, erzeugt von `make_fixtures.py`. Hier liegen **keine echten Teilnehmerdaten**, und es dürfen
auch nie welche hier landen (siehe „Mit echten Renndaten laufen" weiter unten).

Die Demodaten bilden die Form eines echten Konditionswettkampfs ab, weil genau diese Form den Test
aussagekräftig macht: 83 Teilnehmer in 4 Klassen (U14/U16 × weiblich/männlich), eine Station in
Zeit gewertet (schnellste gewinnt, mit Zeitstrafen) und drei in „größter Wert gewinnt" (Meter bzw.
Punkte), 7 Teilnehmer die gar nicht angetreten sind (DNS in allen Stationen — müssen aus der
Gesamtwertung fallen) sowie einzelne DNS/DNF/DSQ in nur einer Station (müssen mit 0 Punkten für
dieses Bein **in** der Wertung bleiben). Dazu absichtlich gesetzte Gleichstände, inklusive der
Rundungsfälle: zwei Zeiten 8 ms auseinander, die beide als `31,23 s` gedruckt werden und sich
deshalb einen Platz teilen müssen, zwei 2 ms auseinander, die das nicht dürfen, und ein
Gleichstand, der erst durch die Strafzeit entsteht.

Nach einer Änderung an `make_fixtures.py` die Dateien neu erzeugen und den Referenzlauf
aktualisieren (siehe nächster Abschnitt):

```bash
python3 make_fixtures.py          # schreibt fixtures/
python3 make_fixtures.py --check  # schlägt fehl, wenn fixtures/ nicht zum Generator passt
```

### Wie geprüft wird

Zwei voneinander unabhängige Absicherungen:

1. **Phasen 5–9 rechnen jede Wertungsebene in Python nach** (Gesamt, Geschlecht, Altersklassen,
   Gaudi-Punkte-Mischung) und vergleichen das Ergebnis mit dem, was die App über API und PDF
   ausgibt. Das prüft, ob die Rangfolge *rechnerisch richtig* ist — unabhängig vom Java-Code.
2. **Phase 10 vergleicht gegen `fixtures/reference_gesamtwertung.pdf`**, eine von Time Control
   selbst erzeugte und eingefrorene Gesamtwertung über genau diese Demodaten. Das ist der
   Regressionsschutz: Er schlägt an, sobald irgendetwas in der Kette ein anderes Ergebnis liefert
   als bisher.

Ändert sich das Ergebnis absichtlich, wird die Referenz neu eingefroren — aber erst, nachdem die
Phasen 5–9 grün sind, denn die sagen, ob das neue Ergebnis auch das richtige ist:

```bash
cp results/gaudi_agegroups_all.pdf fixtures/reference_gesamtwertung.pdf
```

### Mit echten Renndaten laufen

Für einen Abgleich gegen ein tatsächlich gelaufenes Rennen zeigt `KONDI_DATA_DIR` auf ein
Verzeichnis mit denselben vier Dateinamen wie unter `fixtures/`. `local-data/` ist dafür
vorgesehen und in `.gitignore` — echte Exporte enthalten Namen, Jahrgänge und Vereine von (meist
minderjährigen) Teilnehmern und dürfen nicht ins Repository:

```bash
mkdir -p local-data/mein-rennen      # + die 4 CSVs hineinkopieren
KONDI_DATA_DIR=local-data/mein-rennen ./run_all.sh
```

Liegt dort zusätzlich eine `reference_gesamtwertung.pdf` (die gedruckte Gesamtwertung dieses
Rennens), vergleicht Phase 10 direkt dagegen. Dabei müssen die Gaudi-Einstellungen zu denen des
echten Rennens passen — vor allem `config.GAUDI_FLAGS`: Sie entscheiden, ob jemand mit DNS/DNF/DSQ
in einer einzelnen Station mit 0 Punkten in der Gesamtwertung bleibt oder herausfällt. Stehen sie
anders als beim echten Rennen, stimmen zwar alle Punktzahlen, aber es fehlen Teilnehmer und alles
darunter verschiebt sich um einen Platz.

Spalten der CSVs (semikolongetrennt, so wie der Rennen-Export der App sie schreibt):
`lastName;firstName;birthDate;gender;ageGroup;team;category;externalId;raceNumber;durationMs;penalty;measuredAt;comment;status`
— `birthDate` akzeptiert auch ein bloßes Jahr, `gender` auch `weiblich`/`maennlich`, und `status`
(`NONE`/`DNS`/`DNF`/`DSQ`) wird unverändert übernommen; eine Zeile ohne Ergebnis und ohne Status
gilt als DNS.

Stationen, Einheiten, Sortierrichtungen, Altersklassen und Renndatum stehen in `config.py` und
sind dort anzupassen, wenn euer Wettkampf anders aufgebaut ist. `INJECTED_STATUS` überschreibt
zusätzlich einzelne Startnummern, um einen Status zu testen, den die Daten nicht hergeben.

## Ablauf

```bash
./start_instances.sh /pfad/zu/time-control.jar
./run_all.sh
```

### Phasen-Variante (Teilimporte an Pausen)

`run_phased.sh` prüft denselben Ablauf, trägt die Ergebnisse aber in 3 Phasen ein statt alles auf
einmal: an jeder Station wird nach jedem Drittel des Feldes ein Export/Import zur Hauptinstanz
gemacht (simuliert das Sichern des Zwischenstands in den Wettkampfpausen). Prüft insbesondere,
dass ein Teilimport (die meisten Teilnehmer haben noch kein Ergebnis) keine Fehler wirft und dass
ein späterer Teilimport bereits importierte Ergebnisse nicht dupliziert oder überschreibt.

**Läuft auf denselben 5 Instanzen wie `run_all.sh` nicht ein zweites Mal** - `phase1_main.py`
legt Rennen mit denselben Namen an, das schlägt auf einer Instanz fehl, die schon welche hat.
Normal-Test und Phasen-Test nacheinander laufen lassen:

```bash
./start_instances.sh /pfad/zu/time-control.jar /tmp/kondi-normal
./run_all.sh
pkill -f 'time-control.jar'; rm -rf /tmp/kondi-normal

./start_instances.sh /pfad/zu/time-control.jar /tmp/kondi-phased
./run_phased.sh
pkill -f 'time-control.jar'; rm -rf /tmp/kondi-phased
```

### Ergebnis-Backup/Restore-Variante (`run_phased_results.sh`)

Testet gezielt das **Ergebnisse**-Export/Import-Feature (`/participants/export/results-csv` +
`/participants/import-results-mapped`) als eigenständigen Wiederherstellungsweg - **nicht** den
Roster-Export/Import (`/export/csv` + `/import-mapped`), der Identitätsdaten mitschleppt. Läuft den
gleichen Ablauf wie `run_all.sh`, exportiert danach MAINs Ergebnisse je Rennen, setzt sie über
`POST /participants/{id}/clear-result` zurück und importiert sie anschließend rein aus der zuvor
exportierten CSV zurück. Prüft danach Teilnehmer-für-Teilnehmer, dass jedes Ergebnis exakt wie vor
dem Zurücksetzen wiederhergestellt wurde, plus einen erneuten `phase5_reconcile.py`-Lauf und die
volle Ranking-Verifikation (Phasen 6-10) - simuliert damit, dass ein Wettkampfleiter Ergebnisse von
Hand aus einer CSV-Sicherung wiederherstellt, ohne die Teilnehmerliste selbst anzufassen.

Läuft komplett über die API (keine direkte DB-Manipulation nötig, dank `clear-result`), braucht also
- wie `run_all.sh`/`run_phased.sh` - kein zusätzliches Argument. Auch diese Variante braucht
**frische** Instanzen (siehe oben):

```bash
./start_instances.sh /pfad/zu/time-control.jar /tmp/kondi-results
./run_phased_results.sh
pkill -f 'time-control.jar'; rm -rf /tmp/kondi-results
```

### Gaudi-Modus Status-Szenarien-Variante (`run_phased_results_with_status.sh`)

Testet die `keepDnsInRanking`/`keepDnfInRanking`/`keepDsqInRanking`-Optionen (V2-Migration) der
Punkte-Mischwertung end-to-end - bislang nur auf Unit-Test-Ebene abgedeckt
(`PointsCombinationModeCalculatorSpec`), nie mit echten, über mehrere Stationen eingegebenen Daten
oder gegen den gerenderten PDF-Export. Läuft denselben Ablauf wie `run_phased_results.sh` (Phasen
1-10 unverändert), danach zusätzlich:

- **Phase 11** (`phase11_prepare_status_scenarios.py`): sucht sich 5 Teilnehmer, die in allen 4
  Rennen ein normales Ergebnis haben, und setzt gezielt DNS/DNF/DSQ in einzelnen Rennen (X1-X4:
  je ein schlechtes Bein; X5: DNS in allen 4 Rennen - muss immer ausgeschlossen bleiben).
- **Phase 12** (`phase12_gaudi_status_scenarios.py`): legt 6 Punkte-Mischwertungen mit
  verschiedenen Flag-Kombinationen an (alle aus, je einzeln an, alle an, sowie eine
  Unabhängigkeits-Kombination DNS+DNF an/DSQ aus) und verifiziert pro Szenario - unabhängig in
  Python nachgerechnet, inkl. der 0-Punkte-Regel für ein toleriertes Bein - sowohl die komplette
  Rangliste (JSON) als auch die "Nicht gewertet"-Liste im PDF (für **alle sechs** Szenarien, nicht
  nur eins).
- **Phase 13** (`phase13_status_flags_no_effect_on_other_types.py`): Guardrail - die drei Flags
  wirken laut Code nur bei `POINTS_COMBINATION`; legt zwei `TIME_COMBINATION`-Instanzen (einmal
  alle Flags an, einmal aus) über dieselben Daten an und prüft, dass die Rangliste identisch ist.

Braucht wie `run_phased_results.sh` kein zusätzliches Argument, aber ebenfalls **frische**
Instanzen:

```bash
./start_instances.sh /pfad/zu/time-control.jar /tmp/kondi-status
./run_phased_results_with_status.sh
pkill -f 'time-control.jar'; rm -rf /tmp/kondi-status
```

Alle vier Lauf-Varianten schließen mit Phase 10 ab, dem Abgleich gegen
`fixtures/reference_gesamtwertung.pdf` (siehe „Wie geprüft wird" oben). Fehlt die Datei, wird der
Schritt übersprungen statt den Lauf fehlschlagen zu lassen; findet er unerklärte Abweichungen,
bricht das Skript ab (`set -e`). Bewusste Abweichungen — etwa wenn ihr gegen ein echtes Rennen
vergleicht, bei dem ihr einzelne Status absichtlich anders gesetzt habt — gehören nach
`KNOWN_INTENTIONAL_DEVIATIONS` in `phase10_verify_reference.py`, mit der `externalId` als Schlüssel.

Manuell gegen eine andere Referenz aufrufen:

```bash
python3 phase10_verify_reference.py /pfad/zu/anderer_gesamtwertung.pdf
```

**Hinweis zu knappen Gleichständen (Rundung):** Ein gedrucktes Ergebnis ist nur auf
Hundertstelsekunden genau, `durationMs` trägt aber Millisekunden. Baut ihr eine CSV aus einem
gedruckten Ergebnis nach, können zwei tatsächlich gleichzeitige Ergebnisse 1–2 ms auseinander
liegen; die Wertung teilt dann keinen Platz mehr und beide verschieben sich. Das ist kein
Ranking-Bug — bei wirklich gleichen Werten vergibt `RankingService` korrekt denselben Platz, und
Werte, die auf dieselbe Hundertstelsekunde gerundet werden, teilen sich den Platz ebenfalls
(genau das prüfen die gesetzten Gleichstände in den Demodaten). Es ist ein Artefakt des
Nachbauens. Prüft neue knappe Gleichstände also erst auf diese Ursache, bevor ihr einen echten
Fehler annehmt.

### ⚠️ Datenschutz

In diesem Verzeichnis liegen **ausschließlich synthetische Demodaten**. Echte Renndaten —
Teilnehmerlisten, Ergebnis-Exporte, gedruckte Wertungen — enthalten Namen, Jahrgänge und Vereine
von meist minderjährigen Teilnehmern und dürfen nicht ins Repository. Sie gehören nach
`local-data/` (steht in `.gitignore`) oder ganz außerhalb des Repos; der Test findet sie über
`KONDI_DATA_DIR`, siehe „Mit echten Renndaten laufen".

## Aufräumen

```bash
pkill -f 'time-control.jar'
rm -rf /pfad/zum/work-dir   # das mktemp-Verzeichnis von start_instances.sh
```

## Dateien

| Datei | Zweck |
|---|---|
| `config.py` | Ports, Zugangsdaten, Rennkonfiguration, DNS/DNF/DSQ-Injektionen |
| `common.py` | Kleiner HTTP-Client (nur Standardbibliothek) |
| `phase1_main.py` | Hauptinstanz: Altersgruppen, Rennen, Roster-Import, Kopie auf alle Rennen |
| `phase2_station_setup.py` | Station: eigenes Rennen anlegen, Roster importieren |
| `phase3_enter_results.py` | Station: Ergebnisse einzeln eintragen (inkl. DNS/DNF/DSQ) |
| `phase4_export_import.py` | Ergebnis-Export je Station → Import in Hauptinstanz |
| `phase3_phased_results.py` | Wie phase3, aber nur ein Drittel des Feldes pro Aufruf (`station<N> <phase 1\|2\|3>`) |
| `phase4_phased_export_import.py` | Wie phase4, aber pro Phase (`<phase 1\|2\|3>`) - prüft insb. `errorCount == 0` bei unvollständigem Zwischenstand |
| `phase3b_station_corrections.py` | Phasen-Variante: vor Pause 1 an Station 1/2 eine Strafzeit, an Station 3 eine DSQ mit Kommentar setzen (`add`), vor Pause 2 an der Station wieder zurücknehmen (`remove`) - prüft, dass die Rücknahme beim nächsten Import auch auf MAIN ankommt |
| `run_phased.sh` | Orchestriert phase1+phase2 wie gewohnt, dann 3x phase3_phased+phase4_phased, dann phase5-9 |
| `phase4b_results_backup_restore.py` | MAIN: Ergebnisse je Rennen exportieren (Ergebnis-CSV), über `clear-result` zurücksetzen, aus der CSV zurückimportieren, gegen den Vorher-Stand verifizieren |
| `run_phased_results.sh` | Orchestriert phase1-5 wie `run_all.sh`, dann phase4b, dann erneut phase5, dann phase6-9 |
| `phase5_reconcile.py` | Datenintegrität Station ↔ Hauptinstanz prüfen |
| `phase6_verify_rankings.py` | Gesamt-Platzierung unabhängig nachrechnen und mit PDF abgleichen |
| `phase7_verify_gender_agegroup.py` | Dasselbe für Geschlecht/Altersklassen-Aufschlüsselung |
| `phase8_gaudi_combo.py` | Gaudi-Punkte-Mischwertung erstellen und verifizieren |
| `phase9_gaudi_agegroups.py` | Gaudi-Punkte-Mischwertung nach Altersklassen verifizieren |
| `phase10_verify_reference.py` | Phase 10: Abgleich gegen die eingefrorene Referenz-Gesamtwertung |
| `phase11_prepare_status_scenarios.py` | MAIN: 5 Teilnehmer auswählen, gezielt DNS/DNF/DSQ in einzelnen Rennen setzen (X1-X5) |
| `phase12_gaudi_status_scenarios.py` | 6 Punkte-Mischwertungen mit verschiedenen keep-in-ranking-Flag-Kombinationen anlegen und je gegen unabhängige Python-Berechnung + PDF verifizieren |
| `phase13_status_flags_no_effect_on_other_types.py` | Guardrail: keep-in-ranking-Flags dürfen bei TIME_COMBINATION keinen Effekt haben |
| `run_phased_results_with_status.sh` | Orchestriert phase1-10 wie `run_phased_results.sh`, dann phase11-13 |
| `make_fixtures.py` | Erzeugt die synthetischen Demodaten unter `fixtures/` (deterministisch, `--check` prüft sie) |
| `fixtures/race*.csv` | Die vier Stations-CSVs der Demodaten |
| `fixtures/reference_gesamtwertung.pdf` | Eingefrorene Gesamtwertung über die Demodaten - die Referenz für Phase 10 |
| `local-data/` | Nicht eingecheckt: Platz für echte Renndaten, per `KONDI_DATA_DIR` ansteuerbar |
