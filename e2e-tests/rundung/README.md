# Rundung-Test (Platz-Gleichstand, Rueckstand-Konsistenz, Vorzeichen)

Regressionstest fuer die Rundungs-Bugfixes in `RankingService`/`RankingViewService`/
`TimeCombinationModeCalculator`/`LosModeCalculator`/`PdfExportService`: die Anzeige rundet
Zeit-Ergebnisse auf Hundertstelsekunden, aber Platzierung und "Rueckstand"/"Abweichung" wurden
vorher teils aus den **rohen, ungerundeten** Millisekunden-Werten berechnet statt aus dem, was
tatsaechlich gedruckt wird - das konnte zu widerspruechlichen PDFs fuehren (zwei Teilnehmer mit
identisch gedruckter Zeit aber unterschiedlichem Platz; ein "Rueckstand", der nicht zur Differenz
der beiden gedruckten Zeiten passt; ein IMMER positives Vorzeichen selbst bei negativem Wert).

Ein zusammenhaengendes Szenario ("Praezision Einzel" + abgeleiteter Lauf 2 + zwei Gaudi-Modus-
Wertungen) deckt alle vier Fixes ab, statt vieler isolierter Einzeltests:

- **Platz-Gleichstand durch Rundung** (Lauf 1, bib3 vs. bib4: 36430ms vs. 36432ms - beide drucken
  `0:36.43` und muessen denselben Platz bekommen; der naechste, tatsaechlich unterschiedliche Wert
  (bib5) darf dabei nicht einen Platz zu viel ueberspringen).
- **Rueckstand-Konsistenz im Einzelrennen** (bib2 gegen den Leader: der gedruckte Rueckstand muss
  der Differenz der beiden gedruckten Zeiten entsprechen, `+0:29.45`, nicht dem unabhaengig
  gerundeten rohen Abstand `+0:29.44` - exakt der vom Nutzer gemeldete Bug mit denselben
  Millisekunden-Groessenordnungen).
- **Der Platz-Gleichstand wirkt sich auf die abgeleitete Lauf-2-Startreihenfolge aus**: bib3/bib4
  sind ab dem Fix fuer denselben Platz gewertet und muessen deshalb gemeinsam in den umgekehrten
  Top-3-Block wandern (`ParticipantService.applyStartOrderFromPreviousRace`'s "cut by place value,
  not raw index") - mit den alten, unterschiedlichen Plaetzen waere die Startreihenfolge nachweislich
  anders (siehe `config.py`, `EXPECTED_START_SEQUENCE`).
- **Rueckstand-Konsistenz bei Gaudi-Modus Zeit-Kombination**, ASC und DESC: dieselbe Rechnung wie
  oben, aber ueber zwei kombinierte Rennen statt einem.
- **Vorzeichen-Fix bei DESC-Zeit-Kombination**: der gedruckte "Rueckstand" muss bei einem
  DESC-sortierten (hoeher-ist-besser) Rennen tatsaechlich `-0:29.45` zeigen statt des alten,
  immer-"+"-praefixierten Datenmuells - per `pdftotext` direkt am erzeugten PDF geprueft, da dieser
  Bug rein in der PDF-Text-Formatierung sass (die JSON-API war nie betroffen).
- **Abweichung-Konsistenz im Los-Modus**: unabhaengige Python-Nachrechnung (mittelt die gedruckten
  Hundertstel statt der rohen Millisekunden, rundet Paar- und Gesamt-Durchschnitt getrennt auf die
  gedruckte Genauigkeit, erst DANN subtrahieren) wird exakt
  (ohne Toleranz) gegen die tatsaechliche API-Antwort geprueft, fuer die vom Backend zufaellig
  gezogene Paarung.

## Voraussetzungen

- Gebauter `time-control.jar`.
- Python 3 (Standardbibliothek reicht).
- `pdftotext` (Teil von `poppler`, z.B. `brew install poppler`) - nur fuer den DESC-Vorzeichen-Check.
- **Nie gegen die echte Produktions-DB laufen lassen.**

## Ablauf

```bash
./start_instances.sh /pfad/zu/time-control.jar
./run_all.sh
```

Deutlich schneller als bergsprint/nachtslalom - kein Zeitmessgeraet, kein Scheduler-Polling: jedes
Ergebnis wird direkt per `PUT`/`POST /participants` gesetzt.

## Aufraeumen

```bash
pkill -f 'time-control.jar'
rm -rf /pfad/zum/work-dir
```

## Konfiguration

Alle Zeiten/erwarteten Werte stehen bewusst hardcoded in `config.py`, mit Kommentaren, die die
Handrechnung fuer jeden erwarteten Wert zeigen (analog zum Vorgehen in den zugehoerigen
Spock-Tests `RankingServiceSpec`/`LosModeCalculatorSpec`/`TimeCombinationModeCalculatorSpec`/
`PdfExportServiceFormatSignedDiffSpec`) - Zufall wuerde die genau kalibrierten Rundungsgrenzfaelle
zerstoeren.

## Dateien

| Datei | Zweck |
|---|---|
| `config.py` | Ports, Teilnehmer, Zeiten, alle erwarteten Werte samt Herleitung |
| `common.py` | Kleiner HTTP-Client (nur Standardbibliothek) |
| `setup_race.py` | Lauf 1 + Lauf 2 anlegen, Altersgruppe, Teilnehmer, Lauf-1-Ergebnisse |
| `verify_lauf1.py` | Platz-Gleichstand + Rueckstand-Konsistenz gegen die Live-Ergebnis-JSON-API |
| `lauf2_start_order.py` | Startreihenfolge aus Lauf 1 ableiten, gemeinsames Wandern pruefen |
| `gaudi_zeitkombination.py` | Zeit-Kombination ASC + DESC, inkl. PDF-Text-Check fuers Vorzeichen |
| `gaudi_los.py` | Los-Modus: unabhaengige Nachrechnung der Abweichung, exakter Soll-Ist-Abgleich |
