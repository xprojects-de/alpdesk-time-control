# Kondi2025 5-Instanzen-Föderationstest

Simuliert den "Stationsbetrieb": eine Hauptinstanz legt Rennen + Teilnehmerliste an, vier
getrennte Stationsinstanzen (je eine pro Rennen) importieren den Teilnehmer-Export der
Hauptinstanz, tragen die Ergebnisse **einzeln per API** ein (kein Bulk-Import, simuliert einen
Zeitnehmer am Gerät), exportieren ihre Ergebnisse und die Hauptinstanz importiert sie zurück.
Danach werden alle Auswertungsebenen (Gesamt, Geschlecht, Altersklassen, Gaudi-Punkte-Mischung)
automatisiert gegen eine unabhängige Python-Nachrechnung der Rangfolge geprüft.

## Voraussetzungen

- Gebauter `time-control.jar` (`./gradlew shadowJar` im `Backend/`-Verzeichnis).
- Python 3 (nur Standardbibliothek, kein `pip install` nötig).
- `pdftotext` (Teil von `poppler`, z.B. `brew install poppler`).
- **Nie gegen die echte Produktions-DB laufen lassen** — immer frische, isolierte
  Arbeitsverzeichnisse pro Instanz (siehe `start_instances.sh`).

## Eigene Renndaten einsetzen

Dieses Verzeichnis enthält **keine** echten Teilnehmerdaten. Lege 4 CSV-Dateien mit genau diesen
Namen hier ab (Spaltennamen exakt so, Semikolon-getrennt):

```
race1_schnelligkeit_import.csv
race2_gleichgewicht_import.csv
race3_kraft_import.csv
race4_lauf_import.csv
```

Spalten: `lastName;firstName;birthDate;gender;ageGroup;team;category;externalId;raceNumber;durationMs;penalty;measuredAt`
(`birthDate` akzeptiert ein bloßes Jahr, `gender` akzeptiert `weiblich`/`maennlich`/`MALE`/`FEMALE`).

Passe `config.py` an, falls eure Rennen andere Namen/Einheiten/Sortierrichtungen haben, oder falls
ihr DNS/DNF/DSQ gezielt auf bestimmten Startnummern testen wollt (`INJECTED_STATUS`).

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

Sowohl `run_all.sh` als auch `run_phased.sh` schließen automatisch mit einem Abgleich gegen ein
echtes offizielles Ergebnis-PDF ab (`verify_against_official.py`, Phase 10), sofern
`sample-data/official_result.pdf` vorhanden ist — fehlt die Datei (z.B. weil sie aus
Datenschutzgründen entfernt wurde, siehe Hinweis unten), wird dieser Schritt übersprungen statt den
Lauf fehlschlagen zu lassen. Findet der Abgleich unerklärte Abweichungen, bricht das Skript ab
(`set -e`) — erklärte Abweichungen müsst ihr vorher in `KNOWN_INTENTIONAL_DEVIATIONS` in
`verify_against_official.py` eintragen (z.B. eure bewusst injizierten DNS/DNF/DSQ-Abweichungen, aber
auch bekannte Datenfixture-Artefakte wie unten beschrieben).

Manuell mit einem beliebigen anderen PDF aufrufen:

```bash
python3 verify_against_official.py /pfad/zu/anderes_ergebnis.pdf
```

**Hinweis zu knappen Gleichständen (Rundung):** Das offizielle Ergebnis ist nur auf Hundertstelsekunden
genau, während unsere `durationMs`-CSV-Fixtures Millisekunden-Präzision tragen. Zwei beim echten
Rennen tatsächlich gleichzeitige Ergebnisse (gleiche Hundertstelsekunden) können beim Nachbauen der
CSV 1-2ms auseinanderfallen — das bricht den Gleichstand im exakten Vergleich von `RankingService`
und verschiebt beide um einen Platz. Das ist kein Ranking-Bug (bei echt gleichen `durationMs` weist
`RankingService` korrekt denselben Platz zu, Standard-"1224"-Regel), sondern ein Artefakt der
Fixture-Erstellung. Ein bestätigter Fall ist bereits in `KNOWN_INTENTIONAL_DEVIATIONS` eingetragen
(`REDACTED`/`REDACTED`, Schnelligkeit, 36432 vs. 36430ms bei offiziell beide 36,43s). Wird eine CSV neu
erzeugt/aktualisiert, prüft neue knappe Gleichstände (`durationMs` innerhalb weniger ms in derselben
Kategorie) vor der Annahme, ein neuer Mismatch sei ein echter Bug.

### ⚠️ Datenschutz-Hinweis zu `sample-data/official_result.pdf`

Diese Datei enthält echte Namen, Geburtsjahre und Vereine von (teils minderjährigen) Teilnehmern
des echten Kondi2025-Rennens. Sie liegt hier nur lokal bei, ist aber **nicht** automatisch von Git
ignoriert. Bevor ihr das committet oder in ein (insbesondere öffentliches) Repo pusht: prüft, ob
ihr das wirklich in der Git-Historie haben wollt — sonst z.B. in die `.gitignore` aufnehmen
(`e2e-tests/kondi2025-federation/sample-data/`) oder außerhalb des Repos ablegen und den Pfad per
Argument übergeben.

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
| `phase3b_station_corrections.py` | Phasen-Variante: Strafzeit an Station 1/2 vor Pause 1 setzen (`add`), vor Pause 2 an der Station wieder entfernen (`remove`) - prüft, dass die Entfernung beim nächsten Import auch auf MAIN ankommt |
| `run_phased.sh` | Orchestriert phase1+phase2 wie gewohnt, dann 3x phase3_phased+phase4_phased, dann phase5-9 |
| `phase4b_results_backup_restore.py` | MAIN: Ergebnisse je Rennen exportieren (Ergebnis-CSV), über `clear-result` zurücksetzen, aus der CSV zurückimportieren, gegen den Vorher-Stand verifizieren |
| `run_phased_results.sh` | Orchestriert phase1-5 wie `run_all.sh`, dann phase4b, dann erneut phase5, dann phase6-9 |
| `phase5_reconcile.py` | Datenintegrität Station ↔ Hauptinstanz prüfen |
| `phase6_verify_rankings.py` | Gesamt-Platzierung unabhängig nachrechnen und mit PDF abgleichen |
| `phase7_verify_gender_agegroup.py` | Dasselbe für Geschlecht/Altersklassen-Aufschlüsselung |
| `phase8_gaudi_combo.py` | Gaudi-Punkte-Mischwertung erstellen und verifizieren |
| `phase9_gaudi_agegroups.py` | Gaudi-Punkte-Mischwertung nach Altersklassen verifizieren |
| `verify_against_official.py` | Phase 10 (automatisch, falls PDF vorhanden): Abgleich mit einem echten Ergebnis-PDF |
| `phase11_prepare_status_scenarios.py` | MAIN: 5 Teilnehmer auswählen, gezielt DNS/DNF/DSQ in einzelnen Rennen setzen (X1-X5) |
| `phase12_gaudi_status_scenarios.py` | 6 Punkte-Mischwertungen mit verschiedenen keep-in-ranking-Flag-Kombinationen anlegen und je gegen unabhängige Python-Berechnung + PDF verifizieren |
| `phase13_status_flags_no_effect_on_other_types.py` | Guardrail: keep-in-ranking-Flags dürfen bei TIME_COMBINATION keinen Effekt haben |
| `run_phased_results_with_status.sh` | Orchestriert phase1-10 wie `run_phased_results.sh`, dann phase11-13 |
| `sample-data/official_result.pdf` | Das mitgelieferte echte Ergebnis-PDF (siehe Datenschutz-Hinweis oben) |
