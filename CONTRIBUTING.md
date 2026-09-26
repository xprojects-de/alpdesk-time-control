# Mitmachen

Schön, dass du hier bist. Time Control ist aus dem praktischen Bedarf eines Skiclubs entstanden und
läuft bei echten Wettkämpfen — Beiträge, die aus ebensolcher Praxis kommen, sind besonders
willkommen: ein Wertungsmodus, den euer Verband braucht, die Anbindung eines anderen
Zeitmessgeräts, oder schlicht ein Fehler, über den ihr am Hang gestolpert seid.

## Was du brauchst

| | |
|---|---|
| **Java 25** | Pflicht. Das Backend wird mit `sourceCompatibility 25` gebaut; mit Java 21 startet das Jar mit `UnsupportedClassVersionError`. `/usr/libexec/java_home -V` (macOS) listet installierte JDKs, notfalls `JAVA_HOME` exportieren. |
| **Node 24** | Für das Frontend. |
| **pdftotext** | Nur für die End-to-End-Tests (Teil von `poppler`, z.B. `brew install poppler`). |

## Bauen und starten

```bash
# Backend, API auf http://localhost:18000
cd Backend && ./gradlew run

# Frontend-Dev-Server auf http://localhost:4200, spricht mit dem Backend auf :18000
cd Frontend && npm install && npm start
```

Der Dev-Server muss auf **genau Port 4200** laufen — die CORS-Konfiguration des Backends lässt nur
diesen Origin zu.

Für einen vollständigen Produktionsbuild zuerst das Frontend, dann das Backend: `npm run deploy`
erzeugt `Frontend/dist/time-control/browser`, und die Gradle-Aufgabe `copyFrontend` kopiert das nach
`Backend/src/main/resources/public`, von wo aus das Jar es ausliefert (`./gradlew copyFrontend shadowJar`).

> **Das gebaute Frontend ist nicht eingecheckt:** `Backend/src/main/resources/public` steht in der
> `.gitignore`. Die GitHub-Workflows, die ein ausgeliefertes Jar oder einen Installer bauen
> (`build-installers.yml`), bauen das Frontend selbst. Ein lokal ohne Frontend-Build erzeugtes Jar
> startet und bedient die API, hat aber keine Oberfläche - `/` antwortet dann mit einem Fehler,
> `/watchdog` weiterhin mit 200. Für die e2e-Suiten reicht so ein Jar.

## Tests

```bash
cd Backend && ./gradlew test        # Spock/Groovy-Suite
cd Frontend && npm test             # Vitest
```

Die Backend-Suite ist die inhaltlich dichteste Absicherung, vor allem rund um `RankingService`. Die
Frontend-Testabdeckung ist derzeit sehr dünn (im Wesentlichen ein Smoke-Test) — verlass dich beim
Umbauen von Komponenten nicht darauf, dass bestehendes Verhalten durch Tests geschützt ist.

Dazu kommen **End-to-End-Tests** unter `e2e-tests/`, die gegen echte, wegwerfbare Backend-Instanzen
laufen und ganze Wettkampfabläufe durchspielen — inklusive Stationsbetrieb über mehrere Instanzen.
Jede Suite hat ein eigenes `README.md`. Sie laufen auf **synthetischen Demodaten**.

> **Echte Renndaten gehören nie ins Repository** — auch nicht in ein privates. Sie enthalten Namen,
> Jahrgänge und Vereine meist minderjähriger Teilnehmer und bleiben in der Git-Historie, selbst wenn
> die Datei später gelöscht wird. Leg sie unter `e2e-tests/*/local-data/` ab (per `.gitignore`
> ausgenommen) oder außerhalb des Repos. Details in
> [docs/datenschutz.md](docs/datenschutz.md).

## Code-Konventionen

**Sprache.** Das ist die Regel, die am ehesten überrascht:

- **Code ist durchgängig englisch** — Bezeichner, Kommentare, Log- und Fehlermeldungen,
  Commit-Nachrichten, Datenbankschema.
- **Was Nutzer sehen, ist deutsch** — Beschriftungen, Knöpfe, Dialogtitel, Validierungsmeldungen im
  Frontend. Zielgruppe sind deutschsprachige Wettkampforganisatoren.
- Bewusste Ausnahme: Die **Inhalte** der erzeugten PDFs und CSV-Exporte sind deutsch („Platz",
  „Rückstand"), weil sie direkt von Kampfrichtern gelesen werden. Der Code dieser Klassen bleibt
  trotzdem englisch.

Also: neue UI-Texte deutsch, neue Bezeichner englisch — und nicht das eine ins Gebiet des anderen
übersetzen.

**Formatierung im Frontend** gehört Prettier, durchgesetzt über ESLint. `ng lint` ist die eine
Anlaufstelle für beides:

```bash
cd Frontend
npx eslint <geänderte dateien> --fix   # für wenige Dateien
npm run lint:fix                       # für größere Änderungen
npm run lint                           # muss sauber durchlaufen
```

Bitte **vor jedem Commit** laufen lassen. Eine unformatierte Änderung zieht sonst beim Nächsten
fremde Dateien in den Diff.

Zwei Fallen, die `--fix` hier schon gestellt hat und die im Code abgesichert sind — bitte die
Absicherungen nicht entfernen:

- `--fix` korrigiert nicht nur Formatierung, sondern auch Regeln. In `german-date-adapter.ts` hat
  `@typescript-eslint/no-wrapper-object-types` einmal `displayFormat: Object` zu `object`
  umgeschrieben und damit den Build zerlegt (TS2367); die Zeile trägt jetzt ein
  `eslint-disable-next-line`. **Nach einem `--fix` über viele Dateien immer `ng build` laufen
  lassen.**
- Für `**/*.html` braucht `eslint-plugin-prettier` die Angabe `{parser: "angular"}` (steht in
  `eslint.config.js`). Ohne sie formatiert es Templates als JSX und macht aus
  `<router-outlet />` ein `<router-outlet />;` — ein Semikolon, das der Nutzer dann auf der Seite
  liest.

## Architektur in zwei Absätzen

**Backend** (`Backend/src/main/java/x/timecontrol`): Micronaut, annotationsgetrieben, kein Spring.
Controller bleiben dünn und delegieren an `services/`; Entitäten sind Java-Records mit
`@MappedEntity`, darüber Micronaut-Data-Repositories. `RankingService` ist die **einzige** Stelle,
die aus Rohzeit und Strafe den wertungsrelevanten Wert macht und Plätze nach der
Standardregel („1224") vergibt — PDF-Export und Gaudi-Modus benutzen sie beide. Ranking-Fehler
gehören dorthin, nicht in die Aufrufer.

**Frontend** (`Frontend/src/app`): Angular mit Standalone-Komponenten, Angular Material und NgRx.
Pro Domäne ein Store-Slice unter `store/<feature>/`; Komponenten lesen über Selektoren und rufen
keine Services direkt auf. Bei der Aufräumlogik von Subscriptions existieren zwei Muster
nebeneinander, und das ist Absicht: Bestehende Komponenten nutzen `destroy$` mit `takeUntil` und
bleiben so; **neue** Komponenten nutzen `takeUntilDestroyed()`.
`race-live-links-dialog.component.ts` ist die Referenz für den neuen Stil.

Mehr Details stehen in [CLAUDE.md](CLAUDE.md) — die Datei richtet sich an KI-Assistenten, ist aber
schlicht die ausführlichste Beschreibung der Architektur und für Menschen genauso lesbar.

## Pull Requests

Der übliche Weg: Repository forken, im Fork einen Branch von `main` abzweigen, dort arbeiten und
den Pull Request gegen `main` aufmachen.

`dev` ist der Integrationsbranch der Leute mit Schreibzugriff aufs Repository. Als externer
Beitragender brauchst du ihn nicht — zweig von `main` ab, dann passt dein PR auch dann noch, wenn
sich auf `dev` gerade etwas anderes tut.

- Eine Sache pro PR. Lieber zwei kleine als einer, der nebenbei noch formatiert.
- Beschreibe, **warum** die Änderung nötig ist — bei einem Wertungsmodus gern mit dem Regelwerk oder
  einem Beispiel aus einem echten Wettkampf.
- Für Änderungen an Wertung, Ranking oder Export: bitte einen Spock-Test dazu. Das ist der Bereich,
  in dem ein Fehler jemandem die Siegerehrung verdirbt.
- `ng lint` sauber, `./gradlew test` grün.

## Fragen

Mach gern ein Issue auf, auch für „ist das so gedacht?". Für Sicherheitsthemen bitte nicht —
dafür gibt es [SECURITY.md](SECURITY.md).
