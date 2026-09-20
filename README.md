# ⏱️ Alpdesk Time Control

**Zeitnahme, Auswertung und Live-Ergebnisse für Vereinswettkämpfe – vom Konditionswettkampf mit
mehreren Stationen bis zum Skirennen. Auf einem Laptop, ohne Cloud, ohne Internet, ohne Abo.**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Backend: Micronaut / Java 25](https://img.shields.io/badge/Backend-Micronaut%20%2F%20Java%2025-blue.svg)](Backend)
[![Frontend: Angular 22](https://img.shields.io/badge/Frontend-Angular%2022-red.svg)](Frontend)

Alpdesk Time Control ist die Software, die bei unseren Vereinswettkämpfen tatsächlich auf dem Tisch
steht: Startlisten bauen, Ergebnisse einsammeln – vom Zeitmessgerät oder von Hand –, Teilnehmer
zuordnen, Ranglisten rechnen, PDFs für die Siegerehrung drucken und währenddessen die Ergebnisse
live im Handy-Browser aller Zuschauer anzeigen.

Das Ganze ist **eine einzige Anwendung**, die man auf einen Laptop installiert und startet. Sie
bringt Webserver, Datenbank und Oberfläche mit. Kein Server, kein Internet, keine Anmeldung
irgendwo – in der Turnhalle oder am Hang gibt es das meistens sowieso nicht.

---

## Wofür ist das gedacht?

### Konditionswettkämpfe – der Hauptanwendungsfall

Ein Wettkampf mit mehreren **Stationen**, die sich nicht über einen Kamm scheren lassen:
Schnelligkeit und Ausdauerlauf werden in Zeit gewertet (schnellste gewinnt), Gleichgewicht in
Metern, Kraft in Wiederholungen oder Zeit – jede Station mit **eigener Einheit und eigener
Sortierrichtung**. Genau dafür ist Time Control gebaut:

- Jede Station ist ein eigener „Wettkampf“ mit eigener Wertung; die Gesamtwertung entsteht
  daraus über die **Punkte-Mischwertung** – Platz je Station → Punkte laut frei definierbarem
  Punkteschema, gewichtbar je Station.
- **Stationsbetrieb auf mehreren Rechnern:** Jede Station kann ihre eigene Instanz auf einem
  eigenen Laptop fahren – auch völlig ohne Netzwerk. Die Hauptinstanz exportiert die
  Teilnehmerliste, jede Station importiert sie, trägt ihre Ergebnisse ein und gibt eine
  Ergebnis-CSV zurück, die die Hauptinstanz einliest. Teilimporte in den Wettkampfpausen sind
  ausdrücklich vorgesehen und überschreiben nichts doppelt.
- **Oder alles auf einem Rechner:** Hängen die Stationen im selben WLAN, arbeiten sie einfach per
  Browser auf derselben Instanz – dann entfällt das Hin und Her mit Dateien ganz.
- Ausgewertet wird anschließend gesamt, nach Geschlecht, nach Altersklassen und nach Kategorien –
  als PDF für den Aushang und als CSV für alles Weitere.

Dieser Ablauf ist nicht theoretisch, sondern durch eine eigene End-to-End-Testsuite abgesichert,
die fünf Instanzen startet und die komplette Zusammenführung inklusive Nachrechnung der Rangfolge
prüft (`e2e-tests/kondi2025-federation/`).

### Skirennen – kann Time Control auch

Die Software kommt aus dem Skiclub und beherrscht den klassischen Rennbetrieb: Startgruppen,
zweiter Durchgang mit umgekehrter Startreihenfolge der besten *n* je Altersklasse, Anbindung an
das Zielgerät, Import einer DSV-Wettkampfdatei, Live-Ergebnisse für den Zielraum.

Ehrlicherweise gilt aber: **Für den ambitionierten alpinen Rennbetrieb gibt es ausgereiftere,
verbandsnahe Spezialprogramme** – mit Schnittstellen zu allen gängigen Zeitmessanlagen,
DSV-Punkte-Berechnung und angebundenen Meldewegen. Time Control tritt nicht an, die zu ersetzen.
Für ein Clubrennen, ein Gaudirennen oder ein Vereinsmeisterschaftsrennen reicht es aber vollkommen –
und es kostet nichts, läuft offline und gehört einem selbst.

---

## Was Time Control kann

> In der Oberfläche heißt jeder Wettkampf und jede Station schlicht **„Rennen“** – ob dahinter ein
> Slalom, ein Sprint oder eine Station „Klimmzüge“ steckt, ist der Software egal.

**Wettkämpfe & Stammdaten**
- Beliebig viele Rennen mit Datum, Veranstalter, Schiedsrichter, Streckendaten und eigenem
  PDF-Deckblatt.
- Gewertet wird wahlweise nach **Zeit** oder nach **Punkten/Weite** – mit frei wählbarer
  Sortierrichtung („kleinster Wert gewinnt“ oder „größter Wert gewinnt“) und frei benennbarer
  Einheit wie „m“, „Wiederholungen“ oder „Punkte“.
- Personen werden einmal angelegt und über Jahre wiederverwendet; Teams/Vereine, frei definierbare
  Kategorien und saisonbezogene Altersklassen (Geburtsjahrgänge je Geschlecht) ordnen sich
  automatisch zu.
- **Saisonlogik**: Der Saisonstart ist einstellbar – mit dem 1. Januar entspricht eine Saison dem
  Kalenderjahr, mit dem 1. Juli gehören Dezember- und Januar-Veranstaltung zur selben Saison und
  damit zu denselben Altersklassen.

**Startvorbereitung**
- Teilnehmerimport aus **CSV (beliebiges Trennzeichen) oder DSV-Wettkampfdatei (XML)** – mit
  interaktiver Spaltenzuordnung, die passende Felder selbst vorschlägt.
- Startnummern zufällig innerhalb der Altersklassen vergeben.
- **Startgruppen-Board**: Teilnehmer per Drag-and-drop auf farbige Startgruppen mit Zeitversatz
  verteilen – oder automatisch vorschlagen lassen (nach Startnummernblöcken, Geschlecht/Alter,
  Altersklasse, Verein, ausgelostem Verein oder Kategorie). Ideal für Riegen, die stationsweise
  rotieren.
- **Zweiter Durchgang**: Startreihenfolge aus dem verknüpften ersten Durchgang übernehmen, inklusive
  Umkehrung der besten *n* je Altersklasse.
- Startlisten als PDF und CSV.

**Ergebnisse erfassen**
- **Von Hand**: Zeiten, Weiten oder Punkte direkt in der Teilnehmerliste eintragen – der
  Normalfall an einer Kondi-Station mit Stoppuhr und Maßband.
- **Vom Zeitmessgerät**: Anbindung an das Alpdesk-TimeControl-Zielgerät über WLAN, Messungen werden
  alle 5 Sekunden automatisch abgeholt; ein Statussymbol zeigt, ob das Gerät erreichbar ist.
- **Automatische Zuordnung**: Jede neue Messung wandert auf den nächsten erwarteten Starter – in
  Startnummern- oder abgeleiteter Startreihenfolge. Wer nicht startet, wird mit einem Klick
  übersprungen; ein Sturz wird dem Gerät direkt gemeldet.
- **Aus Dateien**: Ergebnisse als CSV importieren – wahlweise als komplette Teilnehmerliste oder
  nur als Ergebnisse zu bereits vorhandenen Startnummern.
- Alles bleibt korrigierbar – inklusive Strafsekunden, Kommentar und den Status
  **DNS / DNF / DSQ**.

**Auswertung**
- Ranglisten mit korrekter Platzvergabe bei Gleichstand (Standard „1224“), Rückstand zum Sieger
  und Strafzeiten – berechnet an *einer* Stelle im Code, damit PDF, CSV und Live-Ansicht nie
  auseinanderlaufen.
- PDF-Exporte für Gesamtwertung, Damen, Herren, alle Altersklassen einzeln – jeweils zusätzlich
  nach Kategorie getrennt.
- CSV-Exporte zum Weitergeben an andere Instanzen oder zur Weiterverarbeitung in Excel.

**Live-Ergebnisse für Zuschauer**
- Jeder Wettkampf hat öffentliche Links (Startliste, Gesamtwertung, Damen, Herren, Altersklassen,
  einzelne Kategorien), die **ohne Login** funktionieren und sich selbst aktualisieren.
- Ein Klick kopiert den Link – ab in die WhatsApp-Gruppe, und jedes Handy in der Halle zeigt den
  aktuellen Stand.

**Wertungen über mehrere Wettkämpfe („Gaudi-Modus“)**
- **Punkte-Mischwertung** – die Gesamtwertung eines Konditionswettkampfs: Platz je Station wird
  über ein frei definierbares Punkteschema in Punkte umgerechnet, je Station gewichtbar. Wer eine
  Station nicht absolviert hat, fällt standardmäßig heraus – oder bleibt auf Wunsch mit 0 Punkten
  drin.
- **Zeit-Kombination** – Zeiten mehrerer Durchgänge oder Läufe addiert.
- **Mannschaftswertung** – die *n* besten Teilnehmer je Verein zählen.
- **Los-Modus** – zufällig gepaarte Zweier-Teams; gewonnen hat das Paar, dessen Durchschnitt dem
  Gesamtdurchschnitt am nächsten kommt. Anfänger und Profis haben dieselbe Chance – der perfekte
  Abschluss für den Vereinsabend.

**Im Betrieb**
- Alles liegt in einer lokalen SQLite-Datei – ein Backup ist ein Dateikopiervorgang.
- Die Oberfläche ist eine Webseite: Vom selben WLAN aus können weitere Laptops oder Tablets an
  Stationen, im Start- oder im Zielbereich mitarbeiten.
- Ein rotes Banner warnt sofort, wenn die Oberfläche das Backend nicht mehr erreicht – damit
  niemand eine Stunde lang ins Leere tippt.
- Die REST-API ist dokumentiert und unter `/swagger` erreichbar.

---

## Ein Wettkampftag in Kurzform

**Konditionswettkampf mit Stationen**

1. **Vorher:** Altersklassen der Saison prüfen, je Station ein Rennen anlegen (Einheit und
   Sortierrichtung festlegen), Teilnehmer importieren, Startnummern und Riegen vergeben,
   Startlisten drucken.
2. **Verteilen:** Entweder alle Stationen arbeiten im WLAN auf derselben Instanz – oder jede
   Station bekommt ihre eigene Instanz und den Teilnehmer-Export der Hauptinstanz oder sogar nur Excel um direkt in der CSV zu arbeiten.
3. **Während des Wettkampfs:** Ergebnisse je Station eintragen; in den Pausen Zwischenstände als
   CSV an die Hauptinstanz zurückgeben.
4. **Nach dem Wettkampf:** Gesamtwertung als Punkte-Mischwertung anlegen, Gewichtung je Station
   setzen, Live-Link teilen.
5. **Siegerehrung:** Ergebnislisten je Altersklasse drucken.

**Skirennen**

1. Rennen anlegen, Teilnehmer importieren, Startnummern und Startgruppen vergeben, Startliste drucken.
2. Zielgerät einschalten, in den Einstellungen auswählen, Auto-Import einschalten.
3. Rennen für die Automatik-Zuordnung wählen – Zeiten laufen ein und landen beim richtigen Starter.
4. Messungen auf das Rennen archivieren, Live-Link teilen, zweiten Durchgang mit umgekehrter
   Startreihenfolge aufsetzen.
5. PDFs je Altersklasse drucken.

---

## Installation

> [!IMPORTANT]
> Die Installer sind **nicht signiert** (kein Apple-Developer- bzw. Windows-Code-Signing-Zertifikat).
> macOS-Gatekeeper, Windows SmartScreen und Virenscanner melden sich deshalb beim ersten Start.
> Wer das gar nicht erst erleben will, nimmt die **Poor-Man-Variante**: ein ZIP mit offiziellem
> Java und der App als Datei – nichts zu installieren, nichts, was ein Virenscanner beanstanden
> könnte. Details und die Klickwege für alle Fälle stehen in
> [docs/installation.md](docs/installation.md).

Fertige Downloads für macOS, Windows und Linux liegen bei jedem
[Release](../../releases). Nach dem Start öffnet sich der Browser automatisch auf
`http://localhost:18000`; der erste Login ist `time-control` / `time-control`.

---

## Dokumentation

| Dokument | Inhalt |
|---|---|
| [docs/README.md](docs/README.md) | Übersicht und Einstieg |
| [docs/installation.md](docs/installation.md) | Installation auf macOS, Windows und Linux, Zertifikats-Warnungen, Datenverzeichnis, Backup |
| [docs/menuepunkte.md](docs/menuepunkte.md) | Alle Menüpunkte der Oberfläche kurz erklärt |

---

## Für Entwickler

Das Repository enthält zwei eigenständige Projekte:

| Ordner | Inhalt |
|---|---|
| `Backend/` | Micronaut-REST-API (Java 25, Gradle), SQLite + Flyway-Migrationen, PDF/CSV-Export, Zeitnahme-Anbindung |
| `Frontend/` | Angular-22-SPA (Angular Material, NgRx), wird in den Backend-Jar einkopiert |
| `e2e-tests/` | End-to-End-Testsuites gegen echte, wegwerfbare Backend-Instanzen – unter anderem der Fünf-Instanzen-Stationsbetrieb eines Konditionswettkampfs |

```bash
# Frontend (Ordner Frontend/)
npm ci --legacy-peer-deps
npm start            # Dev-Server auf http://localhost:4200

# Backend (Ordner Backend/)
./gradlew run        # API + Oberfläche auf http://localhost:18000
./gradlew test       # Spock-Testsuite
./gradlew shadowJar  # lauffähiges Fat-Jar
```

Für einen Produktionsbuild zuerst `npm run deploy` im Frontend, dann `./gradlew shadowJar` im
Backend – der Gradle-Task `copyFrontend` übernimmt das gebaute Frontend automatisch.
Details zu Architektur, Konventionen und Build-Varianten stehen in [CLAUDE.md](CLAUDE.md).

---

## Mitmachen

Issues und Pull Requests sind willkommen – besonders Rückmeldungen aus echten Wettkämpfen: andere
Disziplinen und Wertungsformen, andere Zeitmessgeräte, andere Verbands-Dateiformate. Vor einem PR
bitte `./gradlew test` (Backend) und `npm run lint` (Frontend) laufen lassen.

## Lizenz

[MIT](LICENSE) – © Benjamin Hummel

---

*English summary: Alpdesk Time Control is a self-contained timing and scoring application for club
sports events – primarily multi-station fitness competitions, and ski races as well. It is a
Micronaut/Java backend serving a REST API plus an Angular frontend, backed by a local SQLite
database and packaged as a single desktop app. It covers start lists, per-station result units and
sort directions, optional timing-device import, combined scoring across stations, PDF/CSV exports
and public live results. The user interface and documentation are in German, since that is who it
is built for.*
