# Installation

## Zuerst das Wichtigste: Warnungen beim ersten Start

Time Control wird als Open-Source-Projekt ohne kommerzielle Zertifikate veröffentlicht. Konkret:

- **Kein Apple-Developer-Zertifikat.** macOS meldet beim ersten Start: *„Apple konnte nicht
  überprüfen, ob … frei von Schadsoftware ist“*.
- **Kein Windows-Code-Signing-Zertifikat.** Windows SmartScreen meldet: *„Der Computer wurde durch
  Windows geschützt“*.
- **Virenscanner können anschlagen.** Ein frisch gebautes, unsigniertes `.exe` hat bei keinem
  Scanner der Welt eine Reputation. Manche heuristische Engine stuft es deshalb als verdächtig ein,
  obwohl nichts daran verdächtig ist. Das ist ein Fehlalarm, aber ein lästiger.

Diese Warnungen sind kein Fehler der App und auch kein Hinweis auf ein Problem – sie sagen nur
aus, dass niemand jährlich mehrere hundert Euro für ein Signaturzertifikat bezahlt hat. Der
komplette Quellcode und alle Build-Skripte liegen offen in diesem Repository; jeder kann die
Installer selbst bauen.

Es gibt zwei Wege damit umzugehen:

1. **Warnung einmalig bestätigen** – die Klickwege stehen weiter unten je Betriebssystem.
2. **Der Warnung ausweichen: die Poor-Man-Variante** – siehe nächster Abschnitt. Empfohlen,
   besonders unter Windows.

## Die Poor-Man-Variante (empfohlen, wenn die Warnungen nerven)

Die Poor-Man-Bundles sind ein ZIP-Archiv mit genau drei Dingen:

- `jre/` – eine **offizielle, bereits von Adoptium signierte** Java-25-Laufzeitumgebung,
- `time-control.jar` – die Anwendung selbst als Java-Archiv,
- `start.bat` bzw. `start.command` – ein zweizeiliges Startskript, das man in jedem Texteditor
  lesen kann.

Es gibt **keine Installation** und **kein eigenes, unsigniertes Programm** im Bundle: entpacken,
Startskript doppelklicken, fertig. Deinstallieren heißt: Ordner löschen.

- **Windows:** Das ist der zuverlässigste Weg um SmartScreen- und Virenscanner-Fehlalarme zu
  umgehen, weil im Bundle gar keine eigene `.exe` mehr steckt, an der eine Heuristik sich stören
  könnte – gestartet wird die vertrauenswürdige `java.exe` von Adoptium. Falls SmartScreen sich bei
  `start.bat` dennoch meldet: **Weitere Informationen → Trotzdem ausführen**.
- **macOS:** Der Gatekeeper-Dialog kann auch hier erscheinen, weil er an der heruntergeladenen
  Datei selbst hängt und nicht am Installer-Format. Der Unterschied: Es geht um ein kurzes,
  lesbares Shell-Skript statt um ein undurchsichtiges Programmpaket, und die Freigabe ist unten
  in drei Klicks beschrieben.
- **Linux:** Gibt es keine vergleichbare Warnung; hier ist die Poor-Man-Logik im
  Server-Bundle enthalten (siehe unten).

## Welche Datei brauche ich?

Alle Dateien liegen als Assets am jeweiligen [GitHub-Release](../../../releases) und werden bei jedem
Push auf `main` automatisch gebaut (siehe
[.github/workflows/build-installers.yml](../.github/workflows/build-installers.yml)).
`<Version>` steht jeweils für die Versionsnummer des Releases.

| Datei | Für wen | Java nötig? | Warnung beim Start |
|---|---|---|---|
| `Time-Control-macOS-AppleSilicon-PoorMan-v<Version>.zip` | **macOS (M1/M2/M3/M4)** – empfohlen | nein, enthalten | Gatekeeper, einmalig |
| `Time-Control-macOS-Intel-PoorMan-v<Version>.zip` | **macOS (ältere Intel-Macs)** – empfohlen | nein, enthalten | Gatekeeper, einmalig |
| `Time-Control-Windows-PoorMan-v<Version>.zip` | **Windows** – empfohlen | nein, enthalten | meist keine |
| `Time-Control-java-v<Version>.dmg` | macOS (Apple Silicon), klassischer Installer | nein, enthalten | Gatekeeper, einmalig |
| `Time-Control-macOS-Intel-v<Version>.zip` | macOS (Intel), fertiges `TimeControl.app` | nein, enthalten | Gatekeeper, einmalig |
| `Time-Control-java-v<Version>.exe` | Windows, klassischer Installer | nein, enthalten | SmartScreen / ggf. Virenscanner |
| `Time-Control-java-v<Version>.deb` | Linux-Desktop (x64, Debian/Ubuntu) | nein, enthalten | keine |
| `Time-Control-Linux-x64-Server-v<Version>.tar.gz` | Linux-Server ohne Bildschirm (x64) | nein, enthalten | keine |
| `Time-Control-Linux-AArch64-Server-v<Version>.tar.gz` | Raspberry Pi 4/5, 64-Bit-Raspberry-Pi-OS | nein, enthalten | keine |
| `Time-Control-java-v<Version>.jar` | alle Systeme, kleinste Datei | **ja, Java 25** | keine |

Alle Varianten enthalten dieselbe Anwendung und dieselben Funktionen. Sie unterscheiden sich nur
darin, wie sie verpackt sind.

## macOS

### Poor-Man-Bundle (empfohlen)

1. `Time-Control-macOS-AppleSilicon-PoorMan-v<Version>.zip` (neuere Macs) bzw.
   `Time-Control-macOS-Intel-PoorMan-v<Version>.zip` (ältere Macs) herunterladen und entpacken.
   Welchen Mac man hat, steht im Apple-Menü unter *Über diesen Mac*: „Apple M…“ heißt Apple
   Silicon, „Intel“ heißt Intel.
2. Den entpackten Ordner an einen festen Platz legen, z. B. in den eigenen Benutzerordner.
   Nicht im Downloads-Ordner liegen lassen.
3. **Doppelklick auf `start.command`.**
4. Erscheint die Gatekeeper-Meldung, einmalig freigeben – siehe nächster Abschnitt.
5. Der Browser öffnet sich automatisch auf `http://localhost:18000`.

Zum Beenden das Fenster schließen bzw. den Beenden-Knopf im kleinen Kontrollfenster drücken.

### Gatekeeper einmalig freigeben

Betrifft **alle** macOS-Varianten (Poor-Man-Bundle, `.dmg`, Intel-`.app`), da keine davon signiert ist.

Ab **macOS 15 (Sequoia)** hat Apple den früher üblichen Bypass per *Rechtsklick → Öffnen*
entfernt – dort erscheint nur noch „In den Papierkorb legen“/„Abbrechen“, egal wie oft man es
versucht. Die Freigabe läuft seitdem über die Systemeinstellungen. Es führt **eine** der beiden
Varianten zum Ziel:

- **Ohne Terminal (macOS 15 und neuer):**
  1. Die Datei ganz normal per **Doppelklick** starten. Die Blockier-Meldung mit **Fertig** bzw.
     **Abbrechen** schließen – keinesfalls „In den Papierkorb legen“ wählen.
  2. **Systemeinstellungen → Datenschutz & Sicherheit** öffnen und nach unten scrollen bis zur
     Meldung *„'Time Control' wurde blockiert…“*. Dort **Trotzdem öffnen** wählen
     (Passwort/Touch ID nötig).
  3. Die Datei erneut per Doppelklick starten und im letzten Dialog **Öffnen** bestätigen.

  Auf **macOS 14 (Sonoma) und älter** genügt stattdessen meist **Rechtsklick → Öffnen** und im
  Dialog nochmals **Öffnen**. Führt das nicht zum Ziel, funktioniert dort ebenfalls der Weg über
  die Systemeinstellungen.
- **Mit Terminal (alle Versionen, schnellster Weg):** Die Quarantäne-Markierung einmalig
  entfernen. Pfad an die eigene Variante anpassen:

  ```bash
  xattr -rd com.apple.quarantine ~/Time-Control-macOS-AppleSilicon-PoorMan
  ```

  Für den Installer entsprechend:

  ```bash
  xattr -rd com.apple.quarantine "/Applications/Time Control.app"
  ```

### Klassischer Installer (.dmg)

1. `Time-Control-java-v<Version>.dmg` öffnen und die App nach *Programme*/*Applications* ziehen.
2. Beim ersten Start wie oben beschrieben freigeben.
3. Danach normal aus dem Launchpad starten.

Dieser Installer wird auf Apple-Silicon-Rechnern gebaut und läuft dort nativ. Für **Intel-Macs**
gibt es stattdessen `Time-Control-macOS-Intel-v<Version>.zip`: entpacken, `TimeControl.app` nach
*Programme* ziehen, freigeben wie oben. Ein plattformübergreifendes Bauen für Intel ist mit
jpackage nicht möglich, deshalb die getrennte Datei.

## Windows

### Poor-Man-Bundle (empfohlen)

1. `Time-Control-Windows-PoorMan-v<Version>.zip` herunterladen.
2. **Rechtsklick auf die ZIP-Datei → Eigenschaften →** falls unten *„Zulassen“* angeboten wird,
   Haken setzen und **OK**. Das erspart die Blockade aller entpackten Dateien.
3. ZIP entpacken, z. B. nach `C:\TimeControl`. Nicht direkt aus dem ZIP-Fenster starten.
4. **Doppelklick auf `start.bat`.** Es öffnet sich ein Konsolenfenster – das muss offen bleiben,
   solange die App läuft, und beendet die App beim Schließen.
5. Der Browser öffnet sich automatisch auf `http://localhost:18000`.

Meldet sich SmartScreen trotzdem: **Weitere Informationen → Trotzdem ausführen**.

Schlägt ein Virenscanner an (Fehlalarm, siehe oben), den Ordner `C:\TimeControl` in den
Ausnahmen des Scanners eintragen.

### Klassischer Installer (.exe)

1. `Time-Control-java-v<Version>.exe` starten.
2. SmartScreen zeigt *„Der Computer wurde durch Windows geschützt“* → **Weitere Informationen** →
   **Trotzdem ausführen**.
3. Die Installation läuft normal durch, ein Desktop-Symbol ist optional.

Wird die Datei vom Virenscanner blockiert oder gelöscht, ist das ein Fehlalarm bei einer
unsignierten, brandneuen Datei. In dem Fall bitte auf das Poor-Man-Bundle ausweichen, statt den
Virenscanner abzuschalten.

## Linux

### Desktop (Debian/Ubuntu, x64)

```bash
sudo apt install ./Time-Control-java-v<Version>.deb
```

Danach über das Anwendungsmenü oder mit `time-control` in der Konsole starten. Keine
Sicherheitswarnung, kein Zusatzschritt.

### Server / Raspberry Pi (ohne Bildschirm)

Die Server-Bundles starten keinen Browser und laufen bewusst headless. Sie bringen eine
fertige systemd-Unit mit:

```bash
sudo mkdir -p /opt/time-control
sudo tar xzf Time-Control-Linux-x64-Server-v<Version>.tar.gz --strip-components=1 -C /opt/time-control
sudo cp /opt/time-control/time-control.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now time-control
```

Für einen Raspberry Pi (64-Bit-OS) stattdessen `Time-Control-Linux-AArch64-Server-v<Version>.tar.gz`
verwenden. In der Unit-Datei ggf. `User=` anpassen. Status und Logs:

```bash
systemctl status time-control
journalctl -u time-control -f
```

Zum Testen ohne systemd genügt `./start.sh` im entpackten Ordner.

## Variante für alle Systeme: das Jar

`Time-Control-java-v<Version>.jar` ist die kleinste Datei, setzt aber eine selbst installierte
**Java-25-Laufzeitumgebung** voraus (z. B. [Eclipse Temurin](https://adoptium.net/) oder Amazon
Corretto – jeder Hersteller geht). Start:

```bash
java -jar Time-Control-java-v<Version>.jar
```

Gatekeeper und SmartScreen greifen hier nicht, weil die Datei nie per Doppelklick, sondern immer
über die Kommandozeile gestartet wird. **Wichtig:** Die Datenbank wird bei dieser Variante relativ
zum aktuellen Arbeitsverzeichnis angelegt – also immer aus demselben Ordner starten, sonst steht
man plötzlich vor einer leeren Datenbank.

## Der erste Start

1. Die App startet einen lokalen Webserver auf **`http://localhost:18000`** und öffnet den
   Standardbrowser automatisch. Passiert das nicht, die Adresse einfach von Hand eingeben.
2. Anmelden mit **`time-control` / `time-control`**.
3. Zuerst unter **Einstellungen** den Saisonstart prüfen und – falls vorhanden – das
   Zeitmess-System auswählen.

> [!WARNING]
> Die Zugangsdaten sind fest voreingestellt und öffentlich bekannt. Sobald der Rechner in einem
> Netzwerk erreichbar ist, an dem nicht nur das eigene Team hängt, müssen sie über die
> Umgebungsvariablen `APP_USERNAME` und `APP_PASSWORD` geändert werden.

Beispiel (macOS/Linux, Jar- oder Poor-Man-Variante):

```bash
APP_USERNAME=zeitnahme APP_PASSWORD=ein-gutes-passwort ./start.command
```

## Im Netzwerk arbeiten

Der Server lauscht auf allen Netzwerkschnittstellen. Andere Geräte im selben WLAN erreichen die
Oberfläche unter `http://<IP-des-Laptops>:18000` – praktisch, um vom Startbereich aus Teilnehmer
nachzumelden oder Zuschauern die Live-Ergebnisse zu zeigen. Die IP-Adresse steht unter macOS in den
Netzwerkeinstellungen, unter Windows liefert sie `ipconfig`.

Die öffentlichen Live-Links (siehe [Menüpunkte → Rennen](menuepunkte.md#rennen)) funktionieren ohne
Anmeldung; alle anderen Seiten verlangen den Login.

## Wo liegen Datenbank und Einstellungen?

Time Control speichert alles in einer einzigen SQLite-Datei plus einer Datei mit dem
JWT-Signaturschlüssel.

| Variante | Speicherort |
|---|---|
| Installer (`.dmg`/`.exe`/`.deb`), `TimeControl.app`, Poor-Man- und Server-Bundles | `<Benutzerordner>/alpdesk-time-control/` |
| Jar (`java -jar …`) | `database/` **relativ zum aktuellen Arbeitsverzeichnis** |
| Lokale Entwicklung (`./gradlew run`) | `Backend/database/` |

Darin liegen `time-control.db` (alle Renndaten) und `jwt-secret.txt` (Anmeldeschlüssel, wird beim
ersten Start einmalig erzeugt).

**Backup:** Die App beenden und den Ordner `alpdesk-time-control` kopieren – fertig. Das ist das
komplette Backup inklusive aller Rennen. Vor einem Renntag lohnt sich das genauso wie danach.
Eine Wiederherstellung ist das Zurückkopieren derselben Dateien bei beendeter App.

**Update:** Neue Version installieren bzw. neues Bundle entpacken. Das Datenverzeichnis bleibt
unberührt, nötige Datenbank-Anpassungen führt die App beim Start selbst durch. Ein Backup vorher
schadet trotzdem nie.

## Schnelle Fehlersuche

| Symptom | Ursache / Lösung |
|---|---|
| Browser zeigt „Seite nicht erreichbar“ | Die App wurde beendet oder ist abgestürzt. Konsolenfenster bzw. Kontrollfenster prüfen und neu starten. |
| Rotes Banner *„Backend nicht erreichbar“* | Dasselbe Problem, nur aus Sicht der schon geöffneten Oberfläche. Eingaben werden jetzt nicht gespeichert – erst App neu starten, dann im Banner auf Aktualisieren klicken. |
| Port 18000 ist belegt | Es läuft bereits eine zweite Instanz von Time Control. Diese beenden. |
| Symbol in der Kopfzeile zeigt „Gerät nicht verbunden“ | WLAN-Verbindung zum Zielgerät prüfen, danach in **Einstellungen** die Basis-URL des Geräts kontrollieren. |
| Datenbank scheint leer, obwohl Daten erfasst wurden | Fast immer die Jar-Variante aus einem anderen Ordner gestartet (siehe Speicherorte oben). |
