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

Optional, zum Abgleich mit einem echten offiziellen Ergebnis-PDF:

```bash
python3 verify_against_official.py
```

Ohne Argument wird standardmäßig `sample-data/official_result.pdf` verwendet (liegt bei, siehe
Hinweis unten) — mit Argument könnt ihr stattdessen ein beliebiges anderes PDF angeben:

```bash
python3 verify_against_official.py /pfad/zu/anderes_ergebnis.pdf
```

Trägt zuerst eure bewusst injizierten DNS/DNF/DSQ-Abweichungen in `KNOWN_INTENTIONAL_DEVIATIONS`
in dieser Datei ein, sonst werden sie als unerklärte Abweichungen gemeldet.

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
| `phase5_reconcile.py` | Datenintegrität Station ↔ Hauptinstanz prüfen |
| `phase6_verify_rankings.py` | Gesamt-Platzierung unabhängig nachrechnen und mit PDF abgleichen |
| `phase7_verify_gender_agegroup.py` | Dasselbe für Geschlecht/Altersklassen-Aufschlüsselung |
| `phase8_gaudi_combo.py` | Gaudi-Punkte-Mischwertung erstellen und verifizieren |
| `phase9_gaudi_agegroups.py` | Gaudi-Punkte-Mischwertung nach Altersklassen verifizieren |
| `verify_against_official.py` | Optional: Abgleich mit einem echten Ergebnis-PDF |
| `sample-data/official_result.pdf` | Das mitgelieferte echte Ergebnis-PDF (siehe Datenschutz-Hinweis oben) |
