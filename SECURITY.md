# Sicherheit

*English: to report a vulnerability, please use GitHub's private "Report a vulnerability" button on
the Security tab instead of opening a public issue. The intended operating model is described below.*

## Sicherheitslücke melden

Bitte **kein öffentliches Issue** aufmachen. Nutzt stattdessen auf dem Reiter *Security* den Knopf
**„Report a vulnerability"** — das öffnet einen privaten Kanal, der nur für den Maintainer sichtbar
ist. Alternativ per E-Mail an `infos@x-projects.de`.

Hilfreich in der Meldung: betroffene Version, was ihr getan habt, was passiert ist und was ihr
erwartet hättet. Ein Reproduktionsweg ist Gold wert.

Dies ist ein Feierabendprojekt eines einzelnen Entwicklers. Ich melde mich, so schnell es geht,
kann aber keine feste Reaktionszeit zusagen. Meldet euch gern nochmal, wenn nach zwei Wochen nichts
zurückkam.

## Wofür diese Software gebaut ist — und wofür nicht

Das ist keine Einschränkung, die wir bedauern, sondern eine bewusste Entwurfsentscheidung: Time
Control läuft auf **einem Laptop im Zielbereich, in einem Netz, das ihr kontrolliert**. Daraus
folgen ein paar Eigenschaften, die in diesem Kontext richtig sind und in einem anderen gefährlich
wären:

- **Kein HTTPS.** Der Verkehr ist im lokalen Netz mitlesbar.
- **Genau ein Operator-Konto.** Kein Benutzer- oder Rollenmodell, keine Mandantentrennung. Wer sich
  anmelden kann, kann alles.
- **Die Live-Ansicht ist absichtlich ohne Anmeldung erreichbar.** Sie zeigt Namen, Vereine und
  Ergebnisse — genau wie ein Aushang am Hang. Siehe [docs/datenschutz.md](docs/datenschutz.md).
- **Die API-Dokumentation (Swagger-UI) ist ebenfalls ohne Anmeldung erreichbar.** Sie beschreibt nur
  die Schnittstelle; die Endpunkte selbst sind geschützt.
- **Keine Härtung gegen Angriffe aus dem Internet.** Kein Rate-Limiting, keine Brute-Force-Sperre.

Daraus ergibt sich die eine Regel, die wirklich zählt:

> **Stellt Time Control nicht ins Internet.** Keine Portfreigabe, kein Reverse-Proxy nach außen,
> kein Tunneldienst. Nicht „kurz mal", nicht „ist ja passwortgeschützt".

Ein Fund, der ausschließlich darauf beruht, dass die Anwendung aus dem Internet erreichbar gemacht
wurde, ist kein Sicherheitsproblem der Software, sondern ein Betriebsfehler. Meldet ihn trotzdem,
wenn ihr denkt, dass die Dokumentation daran schuld ist — das wäre dann ein echter Mangel.

## Zugangsdaten

- In **installierten Paketen** erzeugt die Anwendung beim ersten Start ein zufälliges Passwort und
  ein zufälliges JWT-Signaturgeheimnis und legt beide im Datenverzeichnis ab
  (`~/alpdesk-time-control/`). Das Passwort steht beim Start im Log, damit ihr es erfahrt.
- Die in `application.properties` sichtbaren Werte (`time-control` / `time-control` und
  `pleaseChangeThisSecretForANewOne`) gelten **nur für den Entwicklungsstart** per `./gradlew run`.
  Sie sind keine Standard-Zugangsdaten eines ausgelieferten Systems.
- Überschreiben lassen sich beide über die Umgebungsvariablen `APP_USERNAME`, `APP_PASSWORD` und
  `JWT_GENERATOR_SIGNATURE_SECRET`.

## Unterstützte Versionen

Sicherheitskorrekturen gibt es für die jeweils aktuelle Version. Ältere Releases werden nicht
gepflegt.
