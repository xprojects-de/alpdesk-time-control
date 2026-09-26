# E2E-Test: Saison & Altersklassen

Prüft, dass Altersklassen an der **Saison des Rennens** hängen und nicht am Kalender des Rechners –
über alle Wege, auf denen eine Klasse im Betrieb entsteht: Teilnehmerliste, PDF-Export, öffentliche
Live-Ansicht, Saison-Übernahme und Gaudi-Modus.

Das lässt sich in den Spock-Specs nicht abdecken: dort sind Repository und Settings gemockt, die
Saison also vorgegeben. Hier läuft eine echte Instanz gegen eine echte SQLite-Datei, die Migration
V4 eingeschlossen.

## Das Szenario

Ein Skiwinter mit zwei Rennen und zwei Teilnehmern:

| | Datum | Saison (Grenze 1.1.) | Saison (Grenze 1.7.) |
|---|---|---|---|
| Saison Dezember | 2025-12-14 | 2025 | 2025 |
| Saison Januar | 2026-01-11 | 2026 | 2025 |

Konfiguriert ist zunächst **nur Saison 2026** (U14 = 2013–2014, U16 = 2011–2012) – genau der
Zustand, in dem eine Datenbank direkt nach dem Update auf saisonbezogene Altersklassen ist:
Migration V4 stempelt die vorhandenen Gruppen auf das Jahr, in dem das Update lief.

Die beiden Teilnehmer sind so gewählt, dass eine falsche Saison auffällt statt durchzurutschen:

- **Anna, Jahrgang 2013** – U14 in beiden Saisons. Die Kontrollgruppe.
- **Bene, Jahrgang 2012** – **U16 in Saison 2026, U14 in Saison 2025.** Jede Prüfung, die an ihm
  hängt, unterscheidet „nach der Saison des Rennens gewertet" von „nach irgendeiner anderen".

Bene hat im Januar-Rennen bewusst **kein Ergebnis**. Damit landet er in der Gaudi-Wertung auf der
„nicht gewertet"-Liste – und nur dafür löst die überhaupt Altersklassen auf.

## Die Schritte

1. **`setup.py`** – legt beide Rennen, die Altersgruppen der Saison 2026, beide Personen und die
   Ergebnisse an. Schreibt die IDs nach `results/state.json`.
2. **`verify_scoping.py`** – das Januar-Rennen wertet nach U14/U16, das Dezember-Rennen (Saison
   2025, unkonfiguriert) kommt überall als „ohne Altersklasse" heraus, ohne dass ein Export
   scheitert. Prüft außerdem, dass `/age-groups/seasons` die Saison 2025 anbietet, obwohl sie noch
   keine Gruppen hat – sonst wäre ausgerechnet die Saison, die repariert werden muss, im
   Auswähler nicht erreichbar.
3. **`verify_rollover.py`** – füllt Saison 2025 per Übernahme aus 2026 auf, also **rückwärts**
   (nach dem Update der Normalfall). Danach ist Bene im Dezember-Rennen U14 und im Januar-Rennen
   U16 – gleichzeitig, in derselben Datenbank. Prüft außerdem 400 bei Quelle == Ziel und 409 bei
   leerer Quelle bzw. belegtem Ziel.
4. **`verify_boundary.py`** – verschiebt den Saisonstart auf den 1. Juli, wodurch Dezember- und
   Januar-Rennen in dieselbe Saison rutschen, und nimmt das wieder zurück. Ein unmögliches Datum
   (31. Juni) wird abgelehnt.
5. **`verify_gaudi_cross_season.py`** – eine Vereinsmeisterschaft über beide Rennen spannt bei der
   Standardgrenze zwei Saisons. Wertung, „nicht gewertet"-Liste, PDF und CSV müssen alle antworten
   (kein 500), und zwar nach der Saison des **ersten** Rennens: derselbe Gaudi-Modus mit
   umgekehrter Reihenfolge führt Bene als U16 statt U14.
6. **`verify_variants.py`** – zwei Einteilungen in **einer** Saison: ein Kinderrennen (2026-02-01)
   wählt die Variante „Jahrgangsweise“ (per Kopie aus dem Standard angelegt und auf einzelne
   Jahrgänge umgeschnitten), während das Januar-Rennen beim Standard U14/U16 bleibt. Geprüft über
   Teilnehmerliste, Live-Ansicht und PDF. Der Import folgt der Variante des Zielrennens: der
   einfache CSV-Import legt keine Klassen an und ordnet dieselbe Datei im Kinder- und im
   Januar-Rennen verschieden ein; der Import mit Klassen-Spalte ergänzt eine fehlende Klasse in der
   Variante (bzw. im Standard beim Standard-Rennen), verwendet eine vorhandene, die den Jahrgang
   abdeckt, und meldet einen passenden Namen mit falschem Jahrgang als Zeilenfehler, während der
   Rest der Datei importiert wird. Dazu die Schutzregeln: unbekannte Variante am
   Rennen (400), Datum in eine Saison ohne diese Variante (400), benutzte Variante löschen (409),
   Standard löschen (400) – und die Übernahme der Variante in die nächste Saison. Zum Schluss, was
   aus der Variante folgt: ein zweiter Lauf leitet seine Startreihenfolge pro Klasse der Variante ab
   (jüngste zuerst, ohne Klasse zuletzt); ein Gaudi-Modus über Kinder- und Januar-Rennen wertet nach
   den Klassen des ersten Rennens (Rangliste und „nicht gewertet“, in beiden Reihenfolgen); der
   PDF-Text (per `pdftotext`) und die Altersklassen-Spalte der Ergebnis- und Startlisten-CSV zeigen
   die Klassen der Variante bzw. des Standards.

## Voraussetzungen

- Java 25+ (`JAVA_HOME` setzen, falls `java` auf dem PATH älter ist)
- Python 3 (nur Standardbibliothek)
- ein gebautes `time-control.jar` (`cd Backend && ./gradlew shadowJar`)

Keine Fremddaten nötig – alles wird vom Test selbst angelegt.

## Ausführen

```bash
./start_instances.sh /pfad/zu/time-control.jar
./run_all.sh
pkill -f 'time-control.jar'
```

Oder bequemer über `/time-control-e2e`, das Bauen, Starten und Aufräumen übernimmt.

Die Instanz läuft auf Port **18500** gegen eine Wegwerf-Datenbank im Arbeitsverzeichnis. Die
Schritte bauen aufeinander auf und sind gegen eine bereits benutzte Instanz nicht einzeln
wiederholbar – für einen erneuten Lauf die Instanz neu starten.
