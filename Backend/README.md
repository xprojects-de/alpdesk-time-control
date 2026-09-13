# Time Control – Installation

Es gibt zwei Varianten der Desktop-Anwendung, die bei jedem Push auf `main` automatisch
gebaut werden (siehe [.github/workflows/build-installers.yml](../.github/workflows/build-installers.yml))
und als Assets im jeweiligen [GitHub Release](../../releases) landen:

| | GraalVM Native-Image | Java-Build (jpackage) |
|---|---|---|
| Dateien | `TimeControl-macOS.dmg`, `TimeControl-Windows-Setup.exe`, `TimeControl-Linux.tar.gz` | `Time Control-*.dmg`, `Time Control-*.exe`, `Time Control-*.deb` |
| Größe | klein (~50–140 MB) | größer (~150–250 MB, eigene Java-25-Runtime an Bord) |
| Startzeit | sehr schnell (natives Binary) | normaler JVM-Start (1–2 Sek.) |
| Läuft ohne separat installiertes Java | ja | ja (Runtime ist im Installer enthalten) |
| Konsole/Fenster nach dem Start | öffnet nur den Browser | öffnet den Browser **und** zeigt ein kleines Kontroll-Fenster (Name, Version, Link, Beenden-Button) |

Beide starten einen lokalen Server auf `http://localhost:18000` und öffnen automatisch den
Standardbrowser. Erster Login mit den Default-Zugangsdaten `time-control` / `time-control`
(unbedingt über `APP_USERNAME`/`APP_PASSWORD` ändern, bevor das Programm im Netzwerk
erreichbar gemacht wird).

Keine der beiden Varianten ist aktuell mit einem Apple-Developer- bzw. Windows-Code-Signing-
Zertifikat signiert. Deshalb meldet sich beim ersten Start jeweils der Betriebssystem-Schutz
(Gatekeeper unter macOS, SmartScreen unter Windows) – siehe unten, wie man das einmalig
bestätigt. Unter Linux gibt es keine vergleichbare Warnung.

## macOS

Betrifft **beide** Varianten (`.dmg`) gleichermaßen, da beide unsigniert sind.

1. `.dmg` öffnen und die App nach `Programme`/`Applications` ziehen.
2. Beim ersten Start meldet macOS *"Apple konnte nicht überprüfen, ob … frei von
   Schadsoftware ist"*. Bei aktuellem macOS (Sonoma/Sequoia) bietet **Rechtsklick → Öffnen**
   dabei keinen Bypass mehr an (nur noch "In den Papierkorb legen"/"Abbrechen") – stattdessen
   **eine** der Optionen:
   - Terminal, einmalig die Quarantäne-Markierung entfernen:
     ```bash
     xattr -rd com.apple.quarantine "/Applications/Time Control.app"
     ```
     (Beim Graal-Build entsprechend `TimeControl.app` bzw. den tatsächlichen App-Namen
     verwenden.)
   - Ohne Terminal: Im Finder mit **Rechtsklick → Öffnen** starten (statt Doppelklick) und im Dialog
     nochmal **Öffnen** bestätigen, dann **Systemeinstellungen → Datenschutz & Sicherheit** → runterscrollen bis
     zur Meldung *"'Time Control' wurde blockiert…"* → **Trotzdem öffnen** (Passwort/Touch-ID
     nötig) → App danach nochmal starten, dann erscheint ein zweiter Dialog mit einem
     tatsächlichen "Trotzdem öffnen"-Button.

## Windows

Betrifft **beide** Varianten (`.exe`) gleichermaßen.

1. Installer starten. Windows SmartScreen zeigt *"Der Computer wurde durch Windows
   geschützt"*.
2. Auf **Weitere Informationen** klicken, dann **Trotzdem ausführen**.
3. Danach läuft die Installation normal durch (Desktop-Icon optional).

Kein Terminal-Befehl nötig – ist nur ein Klick-Dialog.

## Linux

- **Native-Image:** `TimeControl-Linux.tar.gz` entpacken und `./time-control` ausführen.
- **Java-Build:** `.deb` installieren, z. B. `sudo apt install ./TimeControl-*.deb`, danach
  aus dem Anwendungsmenü starten oder `time-control` in der Konsole.

Keine Sicherheitswarnung, kein Zusatzschritt nötig.

## Wo liegt die Datenbank?

- **Lokale Entwicklung** (`./gradlew run`, IDE-Start, Tests): Der Pfad ist relativ
  (`database/time-control.db`, siehe
  [application.properties](src/main/resources/application.properties)) und liegt damit im
  jeweiligen Arbeitsverzeichnis des Prozesses – bei uns i. d. R. `Backend/database/`.
- **jpackage-Installer** (Doppelklick der `.app`/`.exe`/`.deb`): Hier ist das
  Arbeitsverzeichnis des Prozesses **nicht** zuverlässig – macOS setzt es bei Start über
  Finder/LaunchServices z. B. auf `/` (schreibgeschütztes System-Volume seit Catalina), was
  ohne Gegenmaßnahme sofort beim Start crasht (`FileSystemException: /database: Read-only
  file system`). Deshalb setzt `jpackageArgs` in [build.gradle](build.gradle) das
  Java-Property `-Dapp.packaged=true`, wodurch [Application.java](src/main/java/x/timecontrol/Application.java)
  Datenbank und JWT-Secret-Datei fest unter `<Home-Verzeichnis>/database/` ablegt –
  unabhängig vom tatsächlichen Arbeitsverzeichnis beim Start.
- **Native-Image-Build** (GraalVM, `nativeCompile`): nutzt denselben `Application`-Code,
  bekommt aber `-Dapp.packaged=true` bisher **nicht** gesetzt (das Binary wird ohne
  jpackage-Wrapper direkt in die DMG/das Archiv gepackt). Das gleiche Crash-Muster ist hier
  beim Doppelklick auf macOS zu erwarten, wurde aber noch nicht separat gefixt/getestet.

Gilt entsprechend für die JWT-Secret-Datei (`database/jwt-secret.txt` bzw.
`<Home>/database/jwt-secret.txt`), die im selben Ordner liegt.

## Lokal selbst bauen

Voraussetzung: [GraalVM](https://www.graalvm.org/) 25 als JDK (Toolchain ist in
[build.gradle](build.gradle) fest auf `vendor = GRAAL_VM`, `languageVersion = 25` gesetzt).

```bash
# einmalig: Frontend bauen und ins Backend kopieren
cd Backend
./gradlew copyFrontend

# Native-Image (Graal) - Ergebnis in build/native/nativeCompile/
./gradlew nativeCompile

# Java-Build (jpackage) - schnelle Variante ohne Installer-Verpackung
./gradlew shadowJar
./gradlew jpackageAppImage      # Ergebnis in dist/

# Java-Build - echter Installer (.dmg/.exe/.deb je nach OS)
./gradlew jpackageInstaller     # Windows braucht zusätzlich WiX Toolset installiert
```
