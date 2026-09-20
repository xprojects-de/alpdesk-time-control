# Die Menüpunkte im Überblick

Diese Seite erklärt kurz, was hinter jedem Punkt der Oberfläche steckt. Wer gerade zum ersten Mal
einen Wettkampf aufsetzt, arbeitet die Punkte am besten in der Reihenfolge ab, in der sie hier
stehen – sie entspricht ungefähr dem Ablauf eines Wettkampftags.

> Ein **„Rennen“** ist in Time Control jede eigenständig gewertete Einheit: ein Skirennen, ein
> Durchgang – oder eine einzelne Station eines Konditionswettkampfs. Mehrere davon fasst der
> [Gaudi-Modus](#gaudi-modus) zu einer Gesamtwertung zusammen.

## Anmeldung

Nach dem Start fragt Time Control nach Benutzername und Passwort. Voreingestellt ist
`time-control` / `time-control` (änderbar über die Umgebungsvariablen `APP_USERNAME` und
`APP_PASSWORD`, siehe [Installation](installation.md#der-erste-start)). Die Anmeldung gilt
24 Stunden; danach – oder nach *Abmelden* – meldet man sich neu an.

## Die Kopfzeile

Oben ist immer sichtbar:

- **Menü-Knopf** – klappt die Navigation links ein und aus (praktisch auf kleinen Bildschirmen).
  Der Zustand wird gemerkt.
- **Verbindungssymbol** – zeigt an, ob das Zeitmess-Gerät erreichbar ist (grün = verbunden,
  rot = nicht verbunden). Das Symbol erscheint nur, wenn überhaupt ein Gerät konfiguriert ist.
- **Benutzermenü** – zeigt den angemeldeten Benutzer und enthält *Abmelden*.
- **Versionsnummer** – ganz unten in der Navigation.
- **Rotes Banner „Backend nicht erreichbar“** – erscheint, sobald die Oberfläche den Server nicht
  mehr erreicht. Solange es zu sehen ist, wird **nichts gespeichert**. Der Knopf daneben prüft
  sofort erneut.

---

# Rennen und Stammdaten

## Rennen

Die Liste aller Rennen, mit Suche über Name und Datum. Die Spalte *Saison* zeigt, zu welcher
Saison ein Rennen gehört – das ergibt sich automatisch aus dem Renndatum und dem eingestellten
Saisonstart und entscheidet darüber, welche Altersklassen gelten.

Beim Anlegen oder Bearbeiten eines Rennens gibt es:

- **Name und Datum** – Pflichtfelder.
- **Wertung** – *Einheit* (Zeit oder Punkte/Weite), *Sortierung* (kleinster oder größter Wert
  gewinnt) und bei Punkten eine frei wählbare *Einheiten-Bezeichnung* wie „m“ oder „Punkte“.
- **Startreihenfolge (optional)** – ein *verknüpfter Durchgang*, aus dem sich die Startreihenfolge
  dieses Laufs ableiten lässt, plus die Anzahl der Top-Platzierten, die dabei je Altersgruppe
  umgekehrt starten (klassisch 15 beim Slalom, 0 = keine Umkehrung).
- **Zusatzinformationen (optional)** – Veranstalter, Schiedsrichter, Rennleiter, Zeitnahme,
  Streckenname, Höhendifferenz, Streckenlänge, Kurssetzer, Wetter. Diese Angaben landen im Kopf
  der PDF-Ergebnislisten.
- **Deckblatt (optional)** – ein eigenes PDF, das den Ergebnislisten vorangestellt wird
  (Sponsorenseite, Vereinslogo …).

Je Zeile gibt es außerdem:

- **Live-Ergebnisse-Links** – öffnet eine Liste aller öffentlichen Links dieses Rennens: das
  Live-Menü mit allen Ansichten, Startliste, Gesamtwertung, Damen, Herren, alle Altersklassen,
  jeweils auch nach Kategorie getrennt, sowie ein Link je Kategorie. Jeder Link lässt sich direkt
  öffnen oder in die Zwischenablage kopieren. Diese Seiten brauchen **keine Anmeldung** und sind
  für Zuschauer gedacht.
- **CSV-Export** – alle Rennergebnisse inklusive Personendaten und Zeiten als Datei.
- **Bearbeiten / Löschen.**

Der Knopf **Rennergebnisse importieren** oben legt umgekehrt aus einer solchen Ergebnisdatei ein
komplettes neues Rennen an – so wandert ein Rennen von einem Laptop auf einen anderen.

## Kategorien

Eine freie Zusatz-Einteilung quer zu Altersklasse und Geschlecht – zum Beispiel „E-Bike“,
„Snowboard“ oder „Gäste“. Ranglisten und Live-Ansichten gibt es wahlweise auch nach Kategorie
getrennt. Wer das nicht braucht, lässt die Liste leer.

## Altersgruppen

Hier stehen die Altersklassen je **Saison**: Name (z. B. „Herren allgemein“ oder „Damen U18“),
Saisonjahr, Geschlecht und der Geburtsjahrgangsbereich von/bis. Teilnehmer werden anhand von
Geburtsjahr und Geschlecht automatisch der passenden Altersgruppe zugeordnet.

Weil die Jahrgänge jedes Jahr weiterwandern, gehören Altersgruppen immer zu einer Saison. Über den
Saison-Filter wechselt man zwischen den Jahren; ein Knopf übernimmt alle Altersgruppen der
Vorsaison in die neue – man muss also nur noch die Jahrgänge verschieben statt alles neu zu tippen.

> Wenn eine Teilnehmerliste plötzlich lauter leere Altersgruppen zeigt, sind fast immer für die
> Saison des Rennens noch keine Altersgruppen angelegt.

## Teams

Die Vereine oder Mannschaften (z. B. „SC Musterhausen“). Ein Team wird einem Teilnehmer zugeordnet
und ist die Grundlage für die Mannschaftswertung im Gaudi-Modus sowie für die Startgruppen-Verteilung
„nach Verein“.

## Startgruppen

Die **Vorlagen** für Startgruppen – also die Blöcke, in denen gestartet wird. Je Vorlage:

- **Label** (z. B. „Gruppe A“),
- **Farbe** – zur Unterscheidung auf dem Zuordnungs-Board,
- **Position** – Reihenfolge gegenüber den anderen Gruppen,
- **Zeitversatz** in Minuten und Sekunden – wann diese Gruppe gegenüber der ersten startet.

Angelegt werden die Vorlagen einmal; die eigentliche Zuordnung von Teilnehmern passiert je Rennen
auf dem Startgruppen-Board (siehe [Teilnehmer](#teilnehmer)).

## Personen

Der Stammdatenbestand: Vorname, Nachname, Geburtsdatum, Geschlecht und optional eine externe ID
(Vereins- oder Verbandsnummer, z. B. DSV-Code). Personen sind rennübergreifend – dieselbe Person
startet über Jahre in vielen Rennen, ohne jedes Mal neu erfasst zu werden.

Ein Knopf räumt verwaiste Personen auf, also alle, die aktuell keinem Rennen zugeordnet sind.

## Teilnehmer

Die zentrale Arbeitsseite. Oben wählt man ein Rennen; darunter stehen alle Teilnehmer dieses
Rennens mit Startnummer, Team, Kategorie, Altersgruppe, Ergebnis, Status, Messzeitpunkt und
Kommentar. Die Suche findet Name, Vorname oder Startnummer, jede Spalte ist sortierbar.

Ein Teilnehmer ist immer „diese **Person** in diesem **Rennen**“. Im Bearbeiten-Dialog lassen sich
setzen:

- Person, Startnummer, Team und Kategorie,
- das Ergebnis als Minuten/Sekunden/Millisekunden (bzw. als Wert bei Punkterennen),
- **Strafe** in Sekunden, die auf die Zeit addiert wird,
- **Status** – `DNS` (nicht gestartet), `DNF` (nicht beendet) oder `DSQ` (disqualifiziert). Ein
  gesetzter Status schließt den Teilnehmer aus jeder Rangliste aus, auch wenn eine Zeit gemessen wurde,
- ein freier Kommentar.

Das große Aktionsmenü bündelt alles, was für ein ganzes Rennen gilt:

**Startvorbereitung**
- **Startnummern zuweisen** – vergibt die Startnummern zufällig innerhalb der Altersklassen.
- **Startgruppen** – öffnet das Zuordnungs-Board (siehe unten).
- **Startreihenfolge übernehmen** – erzeugt aus dem verknüpften Durchgang die Startreihenfolge des
  zweiten Laufs; die Startnummern bleiben dabei unverändert.
- **Startliste (PDF)** und **Startliste (CSV)** – letztere inklusive Startgruppe und Zeitversatz.

**Import und Export**
- **Teilnehmer importieren** – liest eine CSV-Datei (beliebiges Trennzeichen) oder eine
  DSV-Wettkampfdatei im XML-Format ein. In einem Zwischenschritt ordnet man die Spalten der Datei
  den eigenen Feldern zu; die naheliegende Zuordnung schlägt Time Control selbst vor.
- **Ergebnisse importieren** – trägt Zeiten und Status für **bereits vorhandene** Teilnehmer über
  die Startnummer nach; legt keine neuen Teilnehmer an.
- **Ergebnisse exportieren** – Startnummer, Zeit und Status als CSV, um sie einer anderen Instanz
  zu geben, die dieselben Teilnehmer bereits kennt.
- **In andere Rennen kopieren** – übernimmt die Teilnehmer in einen zweiten Durchgang oder ein
  Parallelrennen.

**Ergebnislisten als PDF**
Gesamtwertung, alle Damen, alle Herren und nach Altersklassen aufgeteilt – jede Variante zusätzlich
auch nach Kategorie getrennt. Das sind die Listen für Aushang und Siegerehrung.

Außerdem lassen sich einzelne Ergebnisse zurücksetzen, einzelne Teilnehmer löschen oder alle
Teilnehmer des gewählten Rennens auf einmal entfernen.

### Startgruppen-Zuordnung (Board)

Erreichbar über *Teilnehmer → Startgruppen*. Links stehen die noch nicht zugeordneten Teilnehmer,
daneben je aktiver Startgruppe eine farbige Spalte. Teilnehmer zieht man per Drag-and-drop in die
Spalten, die Spalten selbst lassen sich in ihrer Reihenfolge verschieben.

- **Aktive Gruppen** – welche der angelegten Vorlagen in diesem Rennen verwendet werden.
- **Automatisch vorschlagen** – verteilt alle Teilnehmer auf einen Schlag: nach Startnummernblöcken,
  nach Geschlecht und Alter, nach Altersklasse und Geschlecht, nach Verein, nach Verein mit
  ausgeloster Reihenfolge oder nach Kategorie. Die bestehende Zuordnung wird dabei überschrieben.
- **Von Rennen übernehmen** – kopiert eine bereits gespeicherte Zuordnung aus einem anderen Rennen.
- **Startnummern aus Gruppierung vergeben** – nummeriert die Teilnehmer in der Reihenfolge der
  Gruppen und Spalten durch. Nur möglich, solange das Rennen noch keine Ergebnisse hat.
- **Speichern** – solange „Ungespeicherte Änderungen“ angezeigt wird, ist nichts geschrieben; beim
  Verlassen der Seite wird nachgefragt.

## Gaudi-Modus

Für Wertungen, die über ein einzelnes Rennen hinausgehen. Man legt eine Wertung an, wählt den Typ,
vergibt einen Namen und wählt die beteiligten Rennen:

- **Punkte-Mischwertung** – je Rennen wird der Platz über ein **Punkteschema** (Platz → Punkte) in
  Punkte umgerechnet und mit einer Gewichtung je Rennen multipliziert. Gewertet wird die Summe,
  die höchste Punktzahl gewinnt. Personen werden über die Rennen hinweg anhand ihrer Person
  zusammengeführt. Standardmäßig zählt nur, wer in jedem Rennen ein gültiges Ergebnis hat; per
  Häkchen lässt sich das für `DNS`, `DNF` und `DSQ` einzeln lockern (dann 0 Punkte statt Ausschluss).
- **Zeit-Kombination** – die Zeiten mehrerer Rennen werden addiert; wer in einem Rennen fehlt,
  erscheint unter „Nicht gewertet“.
- **Mannschaftswertung** – die besten *n* Teilnehmer je Team werden summiert, *n* ist einstellbar.
  Teams mit zu wenigen gewerteten Läufern qualifizieren sich nicht.
- **Los-Modus** – die Teilnehmer werden zufällig in Zweier-Paare gelost. Gewonnen hat das Paar,
  dessen Durchschnitt dem Durchschnitt aller am nächsten kommt – Anfänger und Profis haben dieselbe
  Chance.

**Punkteschemata** (Platz → Punkte) verwaltet man direkt im Dialog; sie lassen sich für spätere
Wertungen wiederverwenden. Auch eine Gaudi-Wertung kann ein eigenes Deckblatt bekommen.

Die Detailansicht zeigt die fertige Rangliste samt der Läufer, die nicht gewertet werden konnten,
und bietet PDF- und CSV-Exporte für Gesamtwertung, Damen, Herren und nach Altersklassen aufgeteilt
(letztere als ZIP-Archiv beim CSV-Export).

---

# Zeitnahme

## Messungen

Die Rohdaten der Zeitnahme – alles, was vom Zielgerät kommt, importiert oder von Hand eingetippt
wurde, mit Dauer, zugeordnetem Teilnehmer und Messzeitpunkt. Die Liste aktualisiert sich während
des Rennens selbst.

**Zeiten hereinbekommen**
- **Auto-Import AN/AUS** – holt alle 5 Sekunden neue Messungen vom konfigurierten Gerät.
- **Kontinuierlich AN/AUS** – schaltet den kontinuierlichen Modus des Geräts um (laufende
  Zeitnahme statt Einzelmessung).
- **Sturz signalisieren** – verwirft den ältesten offenen Start am Gerät. Genau der Knopf, den man
  drückt, wenn ein Läufer eingefädelt hat und nie ins Ziel kommt.
- **Neue Messung** / Bearbeiten – Zeiten von Hand erfassen oder korrigieren.
- **CSV Import / CSV Export** – Messungen aus einer Datei einlesen (mit Spaltenzuordnung) oder
  alle Messungen herunterladen.

**Automatik-Zuordnung**
Wählt man unten ein Rennen aus, ordnet Time Control jede neu eintreffende Messung dem nächsten
erwarteten Läufer zu – in Startnummernreihenfolge oder, falls vorhanden, in der abgeleiteten
Startreihenfolge. Daneben steht immer, welche Startnummer als nächste erwartet wird und wer das
ist. **Überspringen** rückt einen Läufer weiter, wenn jemand nicht gestartet ist. Solange nicht
archiviert wurde, ist jede Zuordnung gefahrlos korrigierbar – am Rennen selbst ändert sich dadurch
noch nichts.

**Archivieren**
Überträgt die aktuellen Messungen fest auf ein Rennen. Drei Varianten:
- *inkl. Gerät-Reset* – zuordnen, danach Datenbank und Gerät leeren. Der Normalfall zwischen zwei
  Läufen.
- *nur Datenbank* – zuordnen und die Datenbank leeren, das Gerät bleibt unverändert.
- *ohne Löschen* – nur zuordnen, sonst nichts anfassen.

**Zurücksetzen** löscht alle aktuellen Messungen – wahlweise nur in der Datenbank oder zusätzlich
auf dem Gerät. Archivierte Messungen eines Rennens bleiben davon unberührt.

## Zuordnung & Sync

Die Gegenstelle zum Archivieren: Hier stehen die **archivierten** Messungen eines Rennens mit
Geräte-ID, zugeordnetem Teilnehmer, Dauer und Messzeitpunkt. Einzelne Messungen lassen sich hier
nachträglich einem anderen Teilnehmer zuordnen, korrigieren oder löschen.

**Sync zu Teilnehmern** schreibt die archivierten Zeiten auf die Teilnehmer des Rennens – erst
danach tauchen sie in Ranglisten, PDFs und Live-Ansichten auf. Nach einer nachträglichen Korrektur
also nicht vergessen, erneut zu synchronisieren.

---

# Einstellungen

## Saison

Altersklassen gelten jeweils für eine Saison, und zu welcher Saison ein Rennen gehört, ergibt sich
aus seinem Datum. Mit dem **1. Januar** entspricht eine Saison genau dem Kalenderjahr. Geht der
Winter über den Jahreswechsel, verschiebt man den Saisonstart z. B. auf den **1. Juli** – dann
zählen ein Dezember- und ein Januar-Rennen zur selben Saison und damit zu denselben Altersklassen.
Die aktuell laufende Saison mit ihrem Zeitraum wird direkt darunter angezeigt.

## Zeitmessung

Auswahl des **Zeitmess-Systems**:

- **Keine Zeitmessung (nur Auswertung)** – Time Control fragt kein Gerät ab. Zeiten kommen per
  Import oder von Hand. Das Verbindungssymbol in der Kopfzeile verschwindet dann, weil „nicht
  verbunden“ in diesem Fall kein Fehler wäre.
- **Alpdesk TimeControl** – das Zielgerät wird über seine **Basis-URL** angesprochen (Standard
  `http://192.168.4.1`, das WLAN des Geräts). Leer lassen übernimmt den Standardwert aus der
  Server-Konfiguration.

Eine Änderung wirkt sofort – der nächste automatische Import fragt bereits das neu gewählte Gerät ab.

---

## Und sonst?

Die REST-Schnittstelle hinter der Oberfläche ist dokumentiert und im laufenden Betrieb unter
`http://localhost:18000/swagger` erreichbar – nützlich für eigene Auswertungen oder Anbindungen.
