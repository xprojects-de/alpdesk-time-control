# Nachtslalom-Test (Auto-Assign + Messungs-Korrekturen, alle Kombinationen + Fehlerfaelle)

Simuliert einen zweilaeufigen Vereins-Nachtslalom: Lauf 1 regulaer nach Startnummer, Lauf 2 mit
Startreihenfolge, die aus Lauf 1 abgeleitet wird (die besten 3 je Geschlecht starten in
umgekehrter Reihenfolge - ein reales, gaengiges Slalom-Format). Dieses eine Szenario zwingt fast
jede `AutoAssignService`-Kombination und mehrere Messungs-Korrektur-/Fehlerfaelle in eine
zusammenhaengende, plausible Rennerzaehlung statt vieler isolierter Einzeltests:

- **Auto-Assign default-Start** sowohl nach niedrigster Startnummer (Lauf 1, noch keine
  `startSequence`) als auch nach niedrigster `startSequence` (Lauf 2, aus Lauf 1 abgeleitet -
  bewusst NICHT identisch mit aufsteigender Startnummer, siehe `config.py`).
- **Manuelle Nachkorrektur zweier Messungen** (bib2/bib3 wurden vom Geraet vertauscht erfasst) und
  dass diese Korrektur einen weiteren, unveraenderten Re-Poll desselben Geraete-Datensatzes
  ueberlebt, statt dupliziert oder rueckgaengig gemacht zu werden.
- **Ein Teilnehmer wird DSQ/DNF/DNS, waehrend der Auto-Assign-Cursor exakt auf ihm steht** - einmal
  ueber `skip()` (bib 4), einmal ueber `discardOldestStart()` (bib 5). Beides ist die Regression
  fuer den Bug, bei dem `AutoAssignService.firstAfter()` in genau diesem Fall dauerhaft `null`
  zurueckgab statt zum naechsten echten Teilnehmer weiterzuspringen.
- **Manuelles `set-next()`**, das mehrere Teilnehmer uebersprint (bib 7/8), plus der Fehlerfall
  einer unbekannten Startnummer - in Lauf 1 (Startnummer-Reihenfolge) UND in Lauf 2
  (`startSequence`-Reihenfolge).
- **Warteschlangen-Erschoepfung** (`nextRaceNumber` wird `null`, sobald alle durch sind).
- **Alle `enable`/`skip`/`set-next`-Fehlerfaelle**: unbekanntes Rennen, unbekannte Startnummer,
  Aufruf ohne aktives Auto-Assign.
- **Reset zwischen Lauf 1 und Lauf 2**, mit den zwei Regressionen, die den Anstoss fuer dieses
  ganze Szenario gegeben haben:
  - Das Geraet ist beim Archivieren+Reset kurz nicht erreichbar -> die App bricht sauber ab, statt
    trotzdem zu leeren (sonst waeren ungesicherte Zielzeiten verloren).
  - Direkt nach dem Reset bekommen sowohl eine von Hand eingetragene Messung als auch eine
    Geraete-Messung dieselbe niedrige ID (beide Zaehler starten nach einem Reset wieder bei 1) -
    beide muessen als getrennte Zeilen erhalten bleiben statt dass die Geraete-Messung die
    manuelle stillschweigend ueberschreibt.

## Voraussetzungen

- Gebauter `time-control.jar`.
- Python 3 (Standardbibliothek reicht).
- **Nie gegen die echte Produktions-DB laufen lassen.**

## Ablauf

```bash
./start_instances.sh /pfad/zu/time-control.jar
./run_all.sh
```

Dauert ein paar Minuten - mehrere Schritte warten bewusst auf echte 5-Sekunden-Scheduler-Ticks
(siehe `wait_for_tick()` in den einzelnen Skripten), genau wie beim echten "Kontinuierlicher
Import"-Feature.

## Aufraeumen

```bash
pkill -f 'time-control.jar'
pkill -f 'fake_device.py'
rm -rf /pfad/zum/work-dir
```

## Konfiguration

Alle Stellschrauben (Ports, Teilnehmer, Zeiten, welche Startnummer wann DNF/DNS wird, welche
beiden Startnummern vertauscht korrigiert werden) stehen in `config.py` - bewusst komplett
hardcoded statt zufaellig, damit die abgeleitete Lauf-2-Startreihenfolge und alle erwarteten
Zuordnungen eindeutig vorhersagbar bleiben.

## Dateien

| Datei | Zweck |
|---|---|
| `config.py` | Ports, Teilnehmer, Zeiten, DNF/DNS/Tausch-Konfiguration |
| `common.py` | Kleiner HTTP-Client (nur Standardbibliothek) |
| `fake_device.py` | Fake-"Alpdesk TimeControl"-Zeitmessgeraet (`/data`, `/discard`, `/reset`, ...) |
| `setup_race.py` | Lauf 1 + Lauf 2 anlegen, Altersgruppen, Teilnehmer, Vorab-Fehlerfaelle |
| `lauf1_autoassign.py` | Lauf 1: die komplette Auto-Assign-Kombinations-/Fehlerfall-Tour |
| `lauf1_reset_regression.py` | Sicherung, Archivieren+Sync, Reset-Regressionen (Fix #1 + Fix #6) |
| `lauf2_start_order_autoassign.py` | Startreihenfolge aus Lauf 1 ableiten, Auto-Assign in dieser Reihenfolge |
| `verify_final.py` | Lauf 2 archivieren/synchronisieren, alle Ergebnisse unabhaengig gegenpruefen |
