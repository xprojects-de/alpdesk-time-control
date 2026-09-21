# Datenschutz: Was Betreiber wissen müssen

Time Control verarbeitet personenbezogene Daten — Namen, Jahrgänge, Vereinszugehörigkeit und
Leistungsdaten von Wettkampfteilnehmern, in der Regel überwiegend **Minderjährige**. Dieses Dokument
sagt, wer dafür verantwortlich ist, welche Daten wo liegen und was ihr tun müsst. Es ist eine
technische Beschreibung als Grundlage für eure eigene Bewertung, keine Rechtsberatung.

## Wer ist verantwortlich

**Der Verein bzw. der Veranstalter, der die Software einsetzt** — nicht der Autor der Software. Time
Control ist ein Werkzeug, das ihr auf eurem eigenen Laptop betreibt; es gibt keinen Dienst, keinen
Server des Herstellers und keine Datenübermittlung an Dritte. Damit seid ihr im Sinne der DSGVO
Verantwortliche für alles, was ihr damit verarbeitet, und der Autor ist weder Auftragsverarbeiter
noch gemeinsam Verantwortlicher.

Praktisch heißt das: Rechtsgrundlage, Informationspflichten gegenüber den Teilnehmern, Einwilligungen
und Löschfristen liegen bei euch. In der Regel gibt es diese Grundlagen im Vereins- oder
Verbandskontext bereits (Wettkampfmeldung, Vereinssatzung, Einwilligung bei der Anmeldung) — Time
Control ändert daran nichts, es wertet nur aus, was ihr ohnehin erhebt.

## Welche Daten entstehen

| Daten | Woher | Anmerkung |
|---|---|---|
| Nachname, Vorname, Geburtsdatum oder -jahr, Geschlecht | Teilnehmerimport oder Handeingabe | Kern der Personendaten |
| Verein, Kategorie, Altersklasse | Import oder Handeingabe | |
| Startnummer, externe ID | Import | Die externe ID ist oft eine Verbands-Startnummer und damit ein dauerhaftes Kennzeichen |
| Ergebnisse, Strafen, Status (DNS/DNF/DSQ), Kommentare | Zeitmessgerät oder Handeingabe | Kommentare können Angaben zum Grund enthalten („Abbruch wegen Schulterschmerzen") und sind deshalb heikler als reine Zeiten |
| Zeitstempel der Messung | Gerät | |

Besonders beachten: Ein **Kommentarfeld** verleitet dazu, Gesundheitsangaben einzutragen. Das sind
besondere Kategorien personenbezogener Daten (Art. 9 DSGVO) mit deutlich strengeren Anforderungen.
Haltet Kommentare sachlich auf den Wettkampf bezogen („Tor ausgelassen"), nicht auf die Person.

## Wo die Daten liegen

Alles bleibt auf dem Rechner, auf dem ihr die Anwendung startet. Es gibt keine Cloud-Anbindung,
keine Telemetrie und keinen Internetzugriff im Betrieb.

- **Datenbank:** eine SQLite-Datei. Bei installierten Paketen unter `~/alpdesk-time-control/`, im
  Entwicklungsbetrieb unter `./database/`. Daneben liegen WAL-Dateien (`-wal`, `-shm`), die ebenfalls
  Inhalte enthalten.
- **Automatische Backups** legt die Anwendung im selben Datenverzeichnis ab. Sie sind vollwertige
  Kopien der Datenbank und damit genauso schützenswert wie diese.
- **Exporte**, die ihr auslöst — PDFs für die Siegerehrung, CSVs für den Stationsbetrieb —
  landen dort, wohin ihr sie speichert, und enthalten Klarnamen.

Daraus folgt das Wesentliche: Ein Backup des Laptops, ein USB-Stick mit den Ergebnis-CSVs oder ein
weitergegebenes PDF ist eine Weitergabe personenbezogener Daten. Behandelt sie entsprechend.

## Die Live-Ansicht veröffentlicht Namen

Die Zuschaueransicht ist **bewusst ohne Anmeldung** erreichbar: Wer im selben Netz ist, kann sie im
Browser öffnen und sieht Namen, Vereine, Startnummern und Ergebnisse. Genau dafür ist sie da — die
Alternative wäre ein Aushang am Zielhang, der dieselben Daten zeigt.

Wichtig ist, dass ihr das bewusst entscheidet und nicht versehentlich tut:

- Die Ansicht ist für **alle** erreichbar, die das Netz erreichen — nicht nur für Zuschauer am Hang.
  Betreibt sie in einem Netz, das ihr kontrolliert, und hängt den Rechner nicht ins offene Gäste-WLAN
  einer Unterkunft.
- Es gibt **kein HTTPS**. Im selben Netz ist der Verkehr mitlesbar. Für eine öffentliche
  Ergebnisliste ist das vertretbar, für den Betrieb über ein fremdes Netz nicht.
- Stellt die Anwendung **niemals ins Internet** — weder per Portfreigabe noch per Tunnel. Sie ist
  für ein vertrauenswürdiges lokales Netz gebaut, hat genau ein Operator-Konto und keine
  Härtung gegen Angriffe von außen.
- Informiert die Teilnehmer (bzw. deren Eltern), dass Name und Ergebnis während des Wettkampfs live
  sichtbar sind. Wer widerspricht, sollte gar nicht erst in die veröffentlichte Wertung kommen.

## Aufbewahrung und Löschung

Für die Durchführung des Wettkampfs braucht ihr die Daten nur kurz; die Ergebnisse selbst wollt ihr
oft länger behalten. Trennt diese beiden Dinge:

- **Nach dem Wettkampf** (Urkunden gedruckt, Ergebnisse veröffentlicht): Es gibt keinen Grund mehr,
  die vollständigen Personendaten auf dem Laptop vorzuhalten. Legt fest, wann ihr die Datenbank und
  die automatischen Backups löscht.
- **Ergebnislisten archivieren** könnt ihr getrennt davon, in der Detailtiefe, die ihr
  tatsächlich braucht — häufig reichen Platzierung, Name und Verein ohne Geburtsdatum und
  Verbands-ID.
- **Auskunft und Löschung einzelner Personen:** Teilnehmer haben ein Recht darauf. Ein Teilnehmer
  lässt sich in der Oberfläche löschen; denkt daran, dass bereits erstellte Exporte und Backups
  davon nicht erfasst werden — die müsst ihr separat behandeln.
- **Gerätespeicher:** Das Zeitmessgerät selbst hält Messungen vor, bis es zurückgesetzt wird. Es
  speichert allerdings nur Zeiten und Nummern, keine Namen.

## Wenn ihr den Laptop weitergebt oder ausmustert

Datenbank, Backups und alle exportierten PDFs/CSVs vorher löschen. Ein gelöschtes Benutzerkonto
reicht nicht, wenn die Datei noch im Dateisystem liegt.

## Für Entwickler: echte Daten gehören nicht ins Repository

Die End-to-End-Tests laufen auf synthetischen Demodaten. Echte Renndaten — Teilnehmerlisten,
Ergebnis-Exporte, gedruckte Wertungen — gehören **nie** in ein Git-Repository, auch nicht in ein
privates: Sie bleiben in der Historie, selbst wenn die Datei später gelöscht wird. Legt sie unter
`e2e-tests/*/local-data/` ab (per `.gitignore` ausgenommen) oder ganz außerhalb des Repos und zeigt
mit `KONDI_DATA_DIR` darauf. Siehe
[e2e-tests/kondi-federation/README.md](../e2e-tests/kondi-federation/README.md).
