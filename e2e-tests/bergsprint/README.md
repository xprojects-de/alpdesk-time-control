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

### Variante: manuelle Zuordnung statt Auto-Assign (`run_manual.sh`)

Derselbe Bergsprint, aber genau in dem Ablauf, der ohne Live-Zuordnung gefahren wird:

1. Zeiten laufen ueber das echte Polling (`Kontinuierlicher Import`) ein - Auto-Assign bleibt aus,
   alle Messungen landen **ohne** Teilnehmer.
2. Messungen werden ins Rennen archiviert (Live-Tabelle geleert, Geraet zurueckgesetzt).
3. Jede archivierte Messung wird **von Hand** einem Teilnehmer zugewiesen
   (`PUT /race-measurements/{id}`, wie der Zuordnungs-Dialog) - inklusive der zwei Fehlbedienungen,
   die am Renntag wirklich vorkommen: dieselbe Startnummer zweimal zuweisen (muss 409 geben) und
   zwei vertauschte Zuordnungen wieder korrigieren.
4. DNF/DSQ werden **vor** dem Sync eingetragen und duerfen vom Sync nicht ueberschrieben werden.
5. Wertung Damen/Herren je Kategorie (Bio-Bike/E-Bike) und Gaudi-Modus Los, beide unabhaengig
   nachgerechnet und gegen das PDF geprueft.
6. Die "nicht gewertet"-Liste muss zur jeweiligen Wertung passen: ein nach Geschlecht/Altersklasse/
   Kategorie gefiltertes Dokument darf dort niemanden auffuehren, den die Wertung darueber gar nicht
   betrachtet (frueher stand eine Dame unter "Nicht gewertet" auf dem Herren-Blatt), waehrend ein
   Dokument ueber das ganze Feld die vollstaendige Liste behaelt. Geprueft fuer **alle 13
   PDF-Varianten und die Live-Ergebnisse in beiden Formen** - als JSON (`/results`) und als die
   HTML-Seite, die die Zuschauer tatsaechlich oeffnen (`/results-html`) -, jeweils gegen eine aus
   dem Szenario berechnete Erwartung.

Die Zeiten in `manual_config.py` enthalten bewusst Rundungs-Grenzfaelle (zwei Paare, die erst durch
die Hundertstel-Rundung gleichziehen und sich einen Platz teilen muessen; `.xx5`-Werte, die half-up
nach oben runden muessen; ein Rueckstand, der der Differenz der *gedruckten* Zeiten entsprechen
muss und nicht dem unabhaengig gerundeten Rohabstand).

```bash
./start_instances.sh /pfad/zu/time-control.jar
./run_manual.sh
```

Braucht - wie `run_all.sh` - eine **frische** Instanz: das Rennen wird unter festem Namen angelegt,
ein zweiter Lauf gegen dieselbe DB bricht mit "A race named ... already exists" ab.

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
| `manual_config.py` | Variante *manuelle Zuordnung*: Teilnehmerfeld + Zeiten inkl. Rundungs-Grenzfällen |
| `manual_setup.py` | Variante: Rennen, Kategorien Bio-Bike/E-Bike, Teilnehmer, Startliste |
| `manual_simulate_device.py` | Variante: Polling-Import **ohne** Auto-Assign |
| `manual_assign_and_sync.py` | Variante: Sicherung, Archivieren, manuelle Zuordnung, Ausfälle, Sync |
| `manual_verify_evaluations.py` | Variante: Wertung je Kategorie/Geschlecht gegen das PDF prüfen |
| `manual_verify_los.py` | Variante: Los-Modus nachrechnen (API + PDF) |
| `manual_verify_dns_scope.py` | Variante: "nicht gewertet" je Export/Live-Ansicht gegen die Erwartung prüfen |
| `run_manual.sh` | Variante: alle Schritte der manuellen Zuordnung am Stück |
