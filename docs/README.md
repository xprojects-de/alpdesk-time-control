# Time Control – Dokumentation

Alpdesk Time Control ist eine Zeitnahme- und Auswertungssoftware für Vereinswettkämpfe – in erster
Linie für **Konditionswettkämpfe mit mehreren Stationen**, daneben auch für Skirennen. Sie läuft
komplett auf einem Laptop am Veranstaltungsort: Webserver, Datenbank und Oberfläche stecken in
einer einzigen Anwendung. Es wird kein Internet, kein Server und kein Benutzerkonto bei einem
Anbieter benötigt.

Jede Station und jeder Lauf ist in der Oberfläche ein **„Rennen“** – mit eigener Wertungseinheit
(Zeit, Meter, Punkte, Wiederholungen) und eigener Sortierrichtung. Die Gesamtwertung über mehrere
Stationen entsteht im Gaudi-Modus als Punkte-Mischwertung.

## Inhalt

1. **[Installation](installation.md)** – Download, Installation auf macOS, Windows und Linux, der
   Umgang mit den Warnungen unsignierter Installer, erster Start, Speicherort der Daten und Backup.
2. **[Die Menüpunkte im Überblick](menuepunkte.md)** – was hinter jedem Punkt der Oberfläche steckt,
   von den Stammdaten über die Zeitnahme bis zu den Ergebnislisten.

## In drei Sätzen: Wie die App gedacht ist

**Personen** werden einmal angelegt und über Jahre wiederverwendet. Ein **Rennen** – also ein Lauf
oder eine Station – entsteht daraus, indem Personen als **Teilnehmer** eingetragen werden, mit
Startnummer, Team, Kategorie und automatisch zugeordneter Altersklasse. Ergebnisse kommen von Hand,
aus einer Datei oder als **Messungen** vom Zeitmessgerät; daraus erzeugt Time Control Ranglisten,
PDFs und öffentliche Live-Ansichten.

## Typischer Ablauf eines Wettkampftags

| Wann | Was | Wo in der App |
|---|---|---|
| Tage vorher | Altersklassen der Saison prüfen, je Station/Lauf ein Rennen anlegen | Altersgruppen, Rennen |
| Tage vorher | Teilnehmer importieren oder erfassen | Teilnehmer |
| Abend vorher | Startnummern vergeben, Startgruppen/Riegen einteilen, Startlisten drucken | Teilnehmer |
| Morgens | Teilnehmerliste an die Stationsrechner verteilen **oder** Zeitmess-Gerät auswählen und Auto-Import einschalten | Teilnehmer bzw. Einstellungen, Messungen |
| Während des Wettkampfs | Ergebnisse je Station eintragen bzw. Rennen für die Automatik-Zuordnung wählen und Zeiten kontrollieren | Teilnehmer, Messungen |
| In den Pausen / danach | Ergebnisse der Stationen zurück in die Hauptinstanz importieren; beim Zeitmessgerät: Messungen archivieren | Teilnehmer, Messungen |
| Auswertung | Gesamtwertung über alle Stationen rechnen, Live-Link teilen | Gaudi-Modus, Rennen |
| Siegerehrung | Ergebnislisten drucken | Teilnehmer, Gaudi-Modus |
| Danach | Datenverzeichnis sichern | – (siehe Installation) |

## Kurzreferenz

| | |
|---|---|
| Adresse der Oberfläche | `http://localhost:18000` |
| Zugang im Netzwerk | `http://<IP-des-Laptops>:18000` |
| Standard-Login | `time-control` / `time-control` |
| Datenverzeichnis (Installer & Bundles) | `<Benutzerordner>/alpdesk-time-control/` |
| API-Dokumentation | `http://localhost:18000/swagger` |

## Noch Fragen?

Die [Fehlersuche-Tabelle](installation.md#schnelle-fehlersuche) am Ende der Installationsanleitung
deckt die häufigsten Stolpersteine ab. Alles Weitere gerne als
[Issue](../../../issues) – Rückmeldungen aus echten Rennen sind die beste Quelle für
Verbesserungen.
