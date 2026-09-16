# Bergsprint-Test (echter Zeitmessungs-Import + Kategorien/Los-Modus)

Simuliert ein Einzelrennen mit gemischten Kategorien: Teilnehmerliste anlegen, Zeitmessung über
den **echten AlpdeskTimeControl-Geräteimport-Pfad** simulieren (ein kleiner Fake-HTTP-Server
spricht exakt das `GET /data`-Protokoll, das `AlpdeskTimeControlDataImportService` erwartet),
Live-Auto-Assign, Messungen archivieren/sichern/zuweisen, und anschließend Damen/Herren-je-
Kategorie- sowie Los-Modus-Auswertungen unabhängig verifizieren.

## Voraussetzungen

- Gebauter `time-control.jar`.
- Python 3 (Standardbibliothek reicht).
- `pdftotext` (`brew install poppler`).
- **Nie gegen die echte Produktions-DB laufen lassen.**

## Ablauf

```bash
./start_instances.sh /pfad/zu/time-control.jar
./run_all.sh
```

Optional, um zusätzliche DNS/DNF-Fälle auf bereits gültigen Ergebnissen zu testen: in `config.py`
`ADDITIONAL_STATUS_OVERRIDES` befüllen, dann:

```bash
python3 apply_additional_status.py
python3 verify_evaluations.py
python3 verify_los.py
```

## Wichtiger Hinweis zum Ablauf

`processNewMeasurements()` (die eigentliche Auto-Assign-Zuordnungslogik) läuft ausschließlich im
5-Sekunden-Scheduler-Tick, nicht beim manuellen "Jetzt importieren"-Klick
(`POST /measurements/import`). `enable_scheduled_and_wait.py` aktiviert deshalb kurz den
"Kontinuierlichen Import", wartet auf mindestens einen Tick und deaktiviert ihn wieder - das ist
kein Bug, sondern dokumentiertes Verhalten (siehe `DataImportScheduler` im Backend-Code).

## Konfiguration

Alle Stellschrauben (Portnummern, Teilnehmerzahl, Kategorie-Aufteilung, wie viele eine Geräte-Zeit
bekommen, welche Startnummer DNF wird) stehen in `config.py`.

## Aufräumen

```bash
pkill -f 'time-control.jar'
pkill -f 'fake_device.py'
rm -rf /pfad/zum/work-dir
```

## Dateien

| Datei | Zweck |
|---|---|
| `config.py` | Ports, Teilnehmerzahl, Kategorien, Geräte-Zeit-Verteilung, DNF/DNS-Konfiguration |
| `common.py` | Kleiner HTTP-Client (nur Standardbibliothek) |
| `fake_device.py` | Fake-"Alpdesk TimeControl"-Zeitmessgerät (`/data`, `/ping`, `/status`, `/reset`, ...) |
| `run_bergsprint.py` | Rennen, Kategorien, Teilnehmer, Startliste |
| `simulate_device.py` | Zeitmessung über das Fake-Gerät simulieren (echter Importpfad) |
| `enable_scheduled_and_wait.py` | Kontinuierlichen Import kurz aktivieren, damit Auto-Assign zuordnet |
| `finish_workflow.py` | Sicherung, Archivieren, DNF setzen, Live-Messungen löschen, Sync |
| `apply_additional_status.py` | Optional: nachträglich weitere DNF/DNS auf gültigen Ergebnissen setzen |
| `verify_evaluations.py` | Damen/Herren je Kategorie unabhängig nachrechnen und mit PDF abgleichen |
| `verify_los.py` | Los-Modus auslosen und unabhängig verifizieren |
