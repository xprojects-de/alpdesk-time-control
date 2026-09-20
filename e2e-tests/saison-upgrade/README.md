# E2E-Test: Upgrade auf saisonbezogene Altersklassen

Prüft **Migration V4** – den einzigen Teil des Saison-Features, der zerstörend und nicht
umkehrbar ist.

SQLite kann die `UNIQUE(name)`-Bedingung aus V1 nicht löschen, deshalb wird `age_group` nicht
geändert, sondern **neu gebaut**: umbenennen, neu anlegen, kopieren, alte Tabelle löschen. Das läuft
genau einmal pro Installation, auf einer Datenbank mit echter Rennhistorie, und es gibt keinen
zweiten Versuch, wenn dabei eine Zeile verschwindet oder eine ID neu vergeben wird.

Die übrigen Suiten starten immer auf einer leeren Datenbank und durchlaufen V1–V4 am Stück – der
Rebuild kopiert dort also nichts. Nur hier läuft er mit Inhalt.

## Was geprüft wird

**Der Rebuild selbst**

- Keine Altersgruppe verloren, Name/Jahrgänge/Geschlecht unverändert.
- **IDs erhalten.** Die Fixture verwendet bewusst die IDs 7 und 9 – ein Rebuild, der neu
  durchnummeriert, erzeugt 1 und 2 und sähe trotzdem plausibel aus. Verweise auf
  `/age-groups/{id}` und gemerkter UI-Zustand hängen daran.
- **AUTOINCREMENT-Höchststand übernommen**: die nächste neue Gruppe bekommt eine ID oberhalb der
  höchsten alten, statt eine freigewordene wiederzuverwenden.
- Keine Rest-Tabelle (`age_group_v1`) übrig, Saison-Index angelegt, Schemastand 4.
- Bestehende Gruppen auf die Saison gestempelt, in der das Upgrade läuft.
- **Der Zweck des Ganzen**: derselbe Klassenname ist jetzt in zwei Saisons anlegbar – und in
  derselben Saison weiterhin nicht (409).

**Die Folge für die Rennhistorie**

- Ein Rennen der Vorsaison hat danach keine Altersklassen mehr (`ageGroup: null`), eines der
  laufenden Saison wertet normal. Genau das beschreibt der Abschnitt „Beim Update auf
  saisonbezogene Altersklassen" in der [README](../../README.md).
- Und dass es **aus der Oberfläche behebbar** ist: die Vorsaison steht im Saison-Auswähler zur
  Wahl, obwohl für sie nichts konfiguriert ist, und die Übernahme füllt sie rückwärts auf –
  danach wertet das alte Rennen wieder.

## Wie die Fixture entsteht

`make_fixture.py` baut die Datenbank aus den **V1–V3-Dateien des Repositories selbst** zusammen,
nicht aus einer eingecheckten Binärdatei: so kann die Fixture nicht von dem abweichen, was ein
älterer Release tatsächlich erzeugt hat, und es landet nichts Unlesbares in git.

Die `flyway_schema_history`-Zeilen werden von Hand mit `NULL`-Prüfsummen geschrieben. Deshalb
startet die Instanz mit `-Dflyway.datasources.default.validate-on-migrate=false` – Flyways eigenen
Prüfsummen-Algorithmus hier nachzubauen würde die Fixture ohne Gegenwert an ein Interna binden.
**V4 selbst wird völlig normal angewendet**; das Flag überspringt oder verändert keine Migration.

## Voraussetzungen

- Java 25+ (`JAVA_HOME` setzen, falls `java` auf dem PATH älter ist)
- Python 3 (nur Standardbibliothek)
- ein gebautes `time-control.jar` (`cd Backend && ./gradlew shadowJar`)

## Ausführen

```bash
./start_instances.sh /pfad/zu/time-control.jar
```

Der Start gibt den Pfad der Instanz-Datenbank aus; dieser wird an `run_all.sh` weitergereicht,
damit auch das geprüft wird, was die API nicht zeigt (Rest-Tabelle, Index, Schemastand):

```bash
./run_all.sh /pfad/aus/der/ausgabe/time-control.db
```

Ohne Pfad laufen nur die API-Prüfungen, die übersprungenen werden benannt. Danach aufräumen mit
`pkill -f 'time-control.jar'`.

Die Instanz läuft auf Port **18600**. Ein erneuter Lauf braucht eine frische Instanz – die
Migration ist danach angewendet und wiederholt sich nicht.
