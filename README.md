# ⏱️ Alpdesk Time Control

**Zeitnahme, Auswertung und Live-Ergebnisse für Vereinswettkämpfe aller Art – mit Zeit, Punkten oder
Weite, an einer Station oder an vielen. Auf einem Laptop, ohne Cloud, ohne Internet, ohne Abo.**

[![PR Checks](https://github.com/xprojects-de/alpdesk-time-control/actions/workflows/pr-checks.yml/badge.svg)](https://github.com/xprojects-de/alpdesk-time-control/actions/workflows/pr-checks.yml)
[![E2E Tests](https://github.com/xprojects-de/alpdesk-time-control/actions/workflows/e2e-tests.yml/badge.svg)](https://github.com/xprojects-de/alpdesk-time-control/actions/workflows/e2e-tests.yml)
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

### Wettkämpfe aller Art – an einer Station oder an vielen

Time Control ist auf keine Sportart festgelegt. Ein **Wettkampf** besteht aus einer oder mehreren
**Stationen** (in der Oberfläche jeweils ein „Rennen“), und jede Station hat ihre **eigene Wertung**:

- in **Zeit** (schnellste gewinnt oder langsamer ist besser)  – Sprint, Ausdauerlauf, Slalom,
- in **Weite oder Strecke** (größter oder kleinster Wert gewinnt) – Weitsprung, Gleichgewicht in Metern,
- in **Punkten, Wiederholungen, etc** – Kraftstation, Geschicklichkeitsparcours, Torwandschießen.

Einheit und Sortierrichtung sind je Station frei wählbar. Ob ein Wettkampf nur aus einem einzigen
Lauf besteht oder aus zehn Stationen, ist der Software egal.

**Ein Beispiel: der Konditionswettkampf.** Schnelligkeit und Ausdauerlauf werden in Zeit gewertet,
Gleichgewicht in Metern, Kraft in Wiederholungen – jede Station mit eigener Einheit und eigener
Sortierrichtung, am Ende eine Gesamtwertung. Genau so ein Ablauf lässt sich in Time Control abbilden. 
Dasselbe Prinzip funktioniert aber genauso für Vereinsmeisterschaften, Sportfeste, Mehrkämpfe, Gaudiwettbewerbe oder ein einzelnes
Skirennen.

Was dabei möglich ist:

- **Einzel- und Gesamtwertung.** Jede Station wird für sich ausgewertet – gesamt, nach Geschlecht,
  nach Altersklassen und nach Kategorien. Darüber liegt die **Gesamtwertung über alle Stationen**
  (Gaudi-Modus): als Punkte-Mischwertung, Zeit-Kombination, Mannschaftswertung oder Los-Modus.
- **Punkte-Mischwertung mit Gewichtung.** Platz je Station → Punkte laut frei definierbarem
  Punkteschema (z.B. FIS-Schema), **gewichtbar je Station**: Zählt der Ausdauerlauf doppelt, bekommt er Gewicht 2;
  eine Station mit Gewicht 0 wird ignoriert.
- **Strafen.** Zu jedem Ergebnis lässt sich eine Strafe eintragen (z. B. Torfehler, Fehlversuch,
  Übertritt). Sie verschlechtert das Ergebnis immer – bei Zeitwertung wird sie aufgeschlagen, bei
  „größter Wert gewinnt“ abgezogen – und fließt in Rangliste, PDF, CSV und Live-Ansicht ein.
  Daneben gibt es die Status **DNS / DNF / DSQ**, die einen Teilnehmer aus der Wertung nehmen.
- **Stationsbetrieb auf mehreren Rechnern.** Jede Station kann ihre eigene Instanz auf einem
  eigenen Laptop fahren – auch völlig ohne Netzwerk. Die Hauptinstanz exportiert die
  Teilnehmerliste, jede Station importiert sie, trägt ihre Ergebnisse ein und gibt eine
  Ergebnis-CSV zurück, die die Hauptinstanz einliest. Teilimporte in den Wettkampfpausen sind
  ausdrücklich vorgesehen und überschreiben nichts doppelt.
- **Oder alles auf einem Rechner.** Hängen die Stationen im selben WLAN, arbeiten sie einfach per
  Browser auf derselben Instanz – dann entfällt das Hin und Her mit Dateien ganz.
- Natürlich können die einzelnen Stationen die Ergebnisse auch in ein vorher aus der Hauptinstanz exportiertes CSV mit Excel eintragen was dann wieder zurück in die Hauptinstanz importiert werden kann

### Import und Export per CSV – der rote Faden

Time Control ist bewusst dateifreundlich: Fast alles, was in die Software hineingeht oder aus ihr
herauskommt, gibt es als **CSV** – lesbar in Excel, Numbers und LibreOffice, ohne Sonderformat.

| Was | Import | Export |
|---|---|---|
| **Teilnehmer** | CSV (beliebiges Trennzeichen) oder DSV-Wettkampfdatei, mit interaktiver Spaltenzuordnung | Startliste als CSV (inkl. Startgruppe und Zeitversatz) |
| **Ergebnisse je Station** | über die Startnummer zu vorhandenen Teilnehmern – oder als komplettes neues Rennen | Ergebnisse als CSV, um sie einer anderen Instanz zu geben |
| **Komplettes Rennen** | „Rennergebnisse importieren“ legt ein Rennen aus der Datei neu an | Alle Ergebnisse inkl. Personendaten und Zeiten |
| **Messungen** (Zeitgerät, Rohdaten) | CSV mit Spaltenzuordnung | Alle Messungen als CSV |
| **Gesamtwertung (Gaudi-Modus)** | – | CSV für Gesamt, Damen, Herren, Altersklassen (als ZIP) |

So lassen sich Teilnehmerlisten aus der Anmeldesoftware oder aus Excel übernehmen, Stationen ohne
Netzwerk anbinden, Zwischenstände zusammenführen und alles für die Weiterverarbeitung wieder
herausholen. Die Exporte sind reines UTF-8 ohne Sonderzeichen-Kennung.

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

> In der Oberfläche heißt jede Station und jeder Lauf schlicht **„Rennen“** – ob dahinter ein
> Slalom, ein Sprint oder eine Station „Klimmzüge“ steckt, ist der Software egal.

**Wettkämpfe & Stammdaten**
- Beliebig viele Rennen mit Datum, Veranstalter, Schiedsrichter, Streckendaten und eigenem
  PDF-Deckblatt.
- Gewertet wird wahlweise nach **Zeit** oder nach **Punkten/Weite/etc.** – mit frei wählbarer
  Sortierrichtung („kleinster Wert gewinnt“ oder „größter Wert gewinnt“) und frei benennbarer
  Einheit wie „m“, „Wiederholungen“ oder „Punkte“, etc
- Personen werden einmal angelegt und wiederverwendet; Teams/Vereine, frei definierbare
  Kategorien und saisonbezogene Altersklassen (Geburtsjahrgänge je Geschlecht) ordnen sich
  automatisch zu.
- **Saisonlogik**: Der Saisonstart ist einstellbar – mit dem 1. Januar entspricht eine Saison dem
  Kalenderjahr, mit dem 1. Juli gehören Dezember- und Januar-Veranstaltung zur selben Saison und
  damit zu denselben Altersklassen.

**Startvorbereitung**
- Teilnehmerimport aus **CSV (beliebiges Trennzeichen) oder DSV-Wettkampfdatei (XML)** – mit
  interaktiver Spaltenzuordnung, die passende Felder selbst vorschlägt.
- Startnummern zufällig innerhalb der Altersklassen vergeben.
- (optional) **Startgruppen-Board**: Teilnehmer per Drag-and-drop auf farbige Startgruppen mit Zeitversatz
  verteilen – oder automatisch vorschlagen lassen (nach Startnummernblöcken, Geschlecht/Alter,
  Altersklasse, Verein, ausgelostem Verein oder Kategorie). Ideal für Riegen, die stationsweise
  rotieren.
- **Zweiter Durchgang**: Startreihenfolge aus dem verknüpften ersten Durchgang übernehmen, inklusive
  Umkehrung der besten *n* je Altersklasse.
- Startlisten als PDF und CSV.

**Ergebnisse erfassen**
- **Von Hand**: Zeiten, Weiten oder Punkte direkt in der Teilnehmerliste eintragen oder eben in die CSV – der
  Normalfall an einer Kondi-Station mit Stoppuhr und Maßband.
- **Vom Zeitmessgerät**: Anbindung an das Alpdesk-TimeControl-Zielgerät über WLAN, Messungen werden
  alle 5 Sekunden automatisch abgeholt; ein Statussymbol zeigt, ob das Gerät erreichbar ist. (derzeit sind die etablierten Zeitmessgeräte noch nicht angebunden)
- **Automatische Zuordnung**: Jede neue Messung wandert auf den nächsten erwarteten Starter – in
  Startnummern- oder abgeleiteter Startreihenfolge. Wer nicht startet, wird mit einem Klick
  übersprungen; ein Sturz wird dem Gerät direkt gemeldet.
- **Aus Dateien**: Ergebnisse als CSV importieren – wahlweise als komplette Teilnehmerliste oder
  nur als Ergebnisse zu bereits vorhandenen Startnummern.
- Alles bleibt korrigierbar – inklusive **Strafe**, Kommentar und den Status
  **DNS / DNF / DSQ**.

**Auswertung**
- **Einzelwertung je Station** und **Gesamtwertung über alle Stationen** – beides aus denselben
  Daten, jeweils gesamt, nach Geschlecht, Altersklasse und Kategorie.
- Ranglisten mit korrekter Platzvergabe bei Gleichstand (Standard „1224“), Rückstand zum Sieger
  und Strafen – berechnet an *einer* Stelle im Code, damit PDF, CSV und Live-Ansicht nie
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
- **Punkte-Mischwertung** – die Gesamtwertung über mehrere Stationen (z. B. eines Konditionswettkampfs):
  Platz je Station wird über ein frei definierbares Punkteschema in Punkte umgerechnet und mit einer
  **Gewichtung je Station** multipliziert – so zählt eine Station doppelt oder gar nicht. Wer eine
  Station nicht absolviert hat, fällt standardmäßig heraus – oder bleibt auf Wunsch mit 0 Punkten
  drin.
- **Zeit-Kombination** – Zeiten mehrerer Durchgänge oder Läufe addiert.
- **Mannschaftswertung** – die *n* besten Teilnehmer je Verein zählen.
- **Los-Modus** – zufällig gepaarte Zweier-Teams; gewonnen hat das Paar, dessen Durchschnitt dem
  Gesamtdurchschnitt am nächsten kommt. Anfänger und Profis haben dieselbe Chance – der perfekte
  Abschluss für den Vereinsabend
- Gerne noch mehr für die Zukunft...

**Im Betrieb**
- Alles liegt in einer lokalen SQLite-Datei – ein Backup ist ein Dateikopiervorgang.
- Die Oberfläche ist eine Webseite: Vom selben WLAN aus können weitere Laptops oder Tablets an
  Stationen, im Start- oder im Zielbereich mitarbeiten.
- Ein rotes Banner warnt sofort, wenn die Oberfläche das Backend nicht mehr erreicht – damit
  niemand eine Stunde lang ins Leere tippt.
- Die REST-API ist dokumentiert und unter `/swagger` erreichbar.

---

## Ein Wettkampftag in Kurzform

**Wettkampf mit mehreren Stationen (Beispiel: Konditionswettkampf)**

1. **Vorher:** Altersklassen der Saison prüfen, je Station ein Rennen anlegen (Einheit und
   Sortierrichtung festlegen), Teilnehmer importieren, Startnummern und Riegen vergeben,
   Startlisten drucken.
2. **Verteilen:** Entweder alle Stationen arbeiten im WLAN auf derselben Instanz – oder jede
   Station bekommt ihre eigene Instanz und den Teilnehmer-Export der Hauptinstanz – oder sogar nur
   die CSV, in der direkt in Excel gearbeitet wird.
3. **Während des Wettkampfs:** Ergebnisse je Station eintragen (Strafen gleich mit); in den Pausen Zwischenstände als
   CSV an die Hauptinstanz zurückgeben.
4. **Nach dem Wettkampf:** Einzelwertungen je Station prüfen, Gesamtwertung als Punkte-Mischwertung anlegen,
   Gewichtung je Station setzen, Live-Link teilen.
5. **Siegerehrung:** Ergebnislisten nach Wahl als PDF drucken.

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
`http://localhost:18000`; Logindaten sind im Fenster der Anwendung (nicht Browser) auf dem Rechner sichtbar.

---

## Betrieb: wofür das gebaut ist

Time Control läuft auf **einem Laptop im Zielbereich, in einem Netz, das ihr selbst kontrolliert**.
Diese Annahme steckt tief im Entwurf, und sie ist der Grund, warum die Bedienung so unkompliziert
ist: kein Konto anlegen, keine Serverkonfiguration, keine Zertifikate. Was daraus folgt, solltet
ihr trotzdem wissen:

- Es gibt **kein HTTPS** und **ein einziges Operator-Konto** – wer sich anmelden kann, kann alles.
- Die **Live-Ansicht für Zuschauer ist absichtlich ohne Anmeldung** erreichbar. Wer im selben Netz
  ist, sieht Namen, Vereine und Ergebnisse – so wie beim Aushang am Hang, nur bequemer.
- Es gibt **keine Härtung gegen Angriffe von außen**, weil es dafür nicht gedacht ist.

> [!CAUTION]
> **Stellt Time Control nicht ins Internet.** Keine Portfreigabe, kein Reverse-Proxy nach außen,
> kein Tunneldienst. Im WLAN am Hang oder in der Turnhalle ist alles gut – öffentlich erreichbar
> gemacht, ist es weder sicher noch datenschutzkonform.

Weil die Anwendung Daten von – meist minderjährigen – Teilnehmern verarbeitet, gibt es dazu ein
eigenes Dokument: [docs/datenschutz.md](docs/datenschutz.md) sagt, welche Daten wo liegen, wer
dafür verantwortlich ist (ihr als Verein, nicht der Autor) und was beim Löschen und Archivieren zu
beachten ist. Sicherheitslücken meldet ihr über [SECURITY.md](SECURITY.md).

---

## Dokumentation

| Dokument | Inhalt |
|---|---|
| [docs/README.md](docs/README.md) | Übersicht und Einstieg |
| [docs/installation.md](docs/installation.md) | Installation auf macOS, Windows und Linux, Zertifikats-Warnungen, Datenverzeichnis, Backup |
| [docs/menuepunkte.md](docs/menuepunkte.md) | Alle Menüpunkte der Oberfläche kurz erklärt |
| [docs/datenschutz.md](docs/datenschutz.md) | Welche Personendaten entstehen, wo sie liegen, wer verantwortlich ist, Löschen und Archivieren |
| [SECURITY.md](SECURITY.md) | Betriebsmodell und wie ihr Sicherheitslücken meldet |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Bauen, Testen, Konventionen – für alle, die mitentwickeln wollen |

---

## Für Entwickler

Das Repository enthält zwei eigenständige Projekte:

| Ordner | Inhalt |
|---|---|
| `Backend/` | Micronaut-REST-API (Java 25, Gradle), SQLite + Flyway-Migrationen, PDF/CSV-Export, Zeitnahme-Anbindung |
| `Frontend/` | Angular-22-SPA (Angular Material, NgRx), wird in den Backend-Jar einkopiert |
| `e2e-tests/` | End-to-End-Testsuites gegen echte, wegwerfbare Backend-Instanzen – unter anderem der Fünf-Instanzen-Stationsbetrieb eines mehrstationigen Wettkampfs |

```bash
# Frontend (Ordner Frontend/)
npm ci
npm start            # Dev-Server auf http://localhost:4200

# Backend (Ordner Backend/)
./gradlew run        # API + Oberfläche auf http://localhost:18000
./gradlew test       # Spock-Testsuite
./gradlew shadowJar  # lauffähiges Fat-Jar
```

Für einen Produktionsbuild zuerst `npm run deploy` im Frontend, dann `./gradlew shadowJar` im
Backend – der Gradle-Task `copyFrontend` übernimmt das gebaute Frontend automatisch.

Das **gebaute Frontend liegt mit im Repository** (`Backend/src/main/resources/public`), obwohl es
Build-Ergebnis ist. Das ist Absicht: So kommt man mit einem reinen Java-Setup ohne npm zu einem
lauffähigen Jar. Der Preis ist, dass nach einem Frontend-Build die neu gehashten Bundles im Diff
auftauchen – wer nur am Backend arbeitet, lässt sie aus dem Commit heraus.

Details zu Architektur, Konventionen und Build-Varianten stehen in [CONTRIBUTING.md](CONTRIBUTING.md)
und [CLAUDE.md](CLAUDE.md).

---

## Mitmachen

Issues und Pull Requests sind willkommen – besonders Rückmeldungen aus echten Wettkämpfen: andere
Disziplinen und Wertungsformen, andere Zeitmessgeräte, andere Verbands-Dateiformate.
[CONTRIBUTING.md](CONTRIBUTING.md) erklärt Voraussetzungen (Java 25, Node 24), Konventionen und
den Weg zum PR; es gilt der [Verhaltenskodex](CODE_OF_CONDUCT.md).

Eine Bitte vorweg: **Keine echten Teilnehmerdaten** in Issues, PRs oder Tests – keine Namen,
Startlisten, Ergebnis-CSVs oder Screenshots mit Klarnamen. Erfundene Namen tun es genauso, und was
einmal in der Git-Historie steht, bleibt dort.

## Lizenz

[MIT](LICENSE) – © Benjamin Hummel

Die mitgelieferten Bibliotheken stehen unter eigenen Lizenzen; die vollständige Aufstellung steht
in [THIRD-PARTY.md](THIRD-PARTY.md), die erforderlichen Hinweise in [NOTICE](NOTICE).

---

*English summary: Alpdesk Time Control is a self-contained timing and scoring application for club
sports events of any kind – timed, scored or measured, at a single station or several (multi-station
fitness competitions are one example, ski races another). It is a
Micronaut/Java backend serving a REST API plus an Angular frontend, backed by a local SQLite
database and packaged as a single desktop app. It covers start lists, per-station result units and
sort directions, optional timing-device import, penalties, individual and combined scoring across stations (with per-station weighting), CSV import/export, PDF exports
and public live results. The user interface and documentation are in German, since that is who it
is built for.*
