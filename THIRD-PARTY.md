# Verwendete Bibliotheken und ihre Lizenzen

Alpdesk Time Control selbst steht unter der [MIT-Lizenz](LICENSE). Die ausgelieferten Installer und
das Fat-Jar bündeln die unten aufgeführten Bibliotheken mit; deren Lizenzen gelten für den jeweiligen
Anteil fort. Alle sind mit MIT verträglich — es ist keine Copyleft-Lizenz darunter, die auf den
eigenen Code durchschlägt.

Die Angaben stammen aus den tatsächlich aufgelösten Artefakten (POM-Metadaten bzw. `Bundle-License`
im Jar-Manifest und den mitgelieferten `META-INF/LICENSE`-Dateien), nicht aus einer Schätzung. Stand:
Backend-Runtime-Classpath und Frontend-`dependencies` vom 21.09.2026.

## Backend (Java, ausgeliefert im Jar)

### Apache License 2.0

Der Großteil des Stacks. Apache-2.0 verlangt, dass Lizenz und Änderungshinweise weitergegeben
werden — das leistet diese Datei zusammen mit [`NOTICE`](NOTICE).

| Komponente | Rolle |
|---|---|
| `io.micronaut:*` (micronaut-core, -inject, -http-server-netty, -router, -runtime, …) | Anwendungs-Framework |
| `io.micronaut.data:*` | Datenbankzugriff (Micronaut Data JDBC) |
| `io.micronaut.security:*` | Authentifizierung, JWT |
| `io.micronaut.serde:*`, `tools.jackson.core:*`, `com.fasterxml.jackson.core:jackson-annotations` | JSON |
| `io.micronaut.sql:micronaut-jdbc*`, `com.zaxxer:HikariCP` | Connection-Pool |
| `io.micronaut.flyway:micronaut-flyway`, `org.flywaydb:flyway-core` | Datenbankmigrationen |
| `io.micronaut.reactor:*`, `io.projectreactor:reactor-core` | Reaktive Streams |
| `io.netty:*` | Netzwerk-Layer des HTTP-Servers |
| `org.apache.pdfbox:pdfbox`, `:fontbox`, `:pdfbox-io` | PDF-Erzeugung (Start- und Ergebnislisten) |
| `org.xerial:sqlite-jdbc` | SQLite-Treiber |
| `com.nimbusds:nimbus-jose-jwt` | JWT-Signatur |
| `jakarta.inject:jakarta.inject-api`, `jakarta.validation:jakarta.validation-api` | Standard-APIs |
| `commons-logging:commons-logging`, `org.jspecify:jspecify` | Hilfsbibliotheken |

### MIT

| Komponente | Rolle |
|---|---|
| `org.slf4j:slf4j-api` | Logging-Fassade |
| `org.reactivestreams:reactive-streams` | Reactive-Streams-Spezifikation (MIT-0; das Artefakt selbst führt keine Lizenzdatei mit, die Angabe stammt vom Projekt) |

### Eclipse Public License mit Zweitlizenz

Diese Artefakte sind **dual lizenziert**. Für die Verbreitung hier gilt jeweils die EPL-Variante;
die GPL/LGPL-Zweitlizenz muss nicht in Anspruch genommen werden und schlägt daher nicht auf den
eigenen Code durch.

| Komponente | Lizenz | Rolle |
|---|---|---|
| `ch.qos.logback:logback-classic`, `:logback-core` | EPL-2.0 **oder** LGPL-2.1 | Logging-Implementierung |
| `jakarta.annotation:jakarta.annotation-api` | EPL-2.0 **oder** GPL-2.0 mit Classpath-Ausnahme | Standard-API |
| `jakarta.transaction:jakarta.transaction-api` | EPL-2.0 **oder** GPL-2.0 mit Classpath-Ausnahme | Standard-API |
| `jakarta.persistence:jakarta.persistence-api` | EPL-2.0 **oder** EDL-1.0 | Standard-API |

## Frontend (Angular, ausgeliefert im Browser-Bundle)

| Komponente | Lizenz |
|---|---|
| `@angular/*` (core, common, forms, router, platform-browser, animations, compiler) | MIT |
| `@angular/cdk`, `@angular/material` | MIT |
| `@ngrx/store`, `@ngrx/effects`, `@ngrx/store-devtools` | MIT |
| `rxjs` | Apache-2.0 |
| `tslib` | 0BSD |

### Mitgelieferte Schriften und Symbole

Diese landen als Dateien im Bundle, nicht nur als Code — ihre Lizenzen sind deshalb besonders
relevant:

| Komponente | Lizenz | Anmerkung |
|---|---|---|
| `@fontsource/roboto` (Schriftart Roboto) | SIL Open Font License 1.1 | Die OFL erlaubt Weitergabe und Einbettung; die Schrift darf nicht separat verkauft werden und behält ihren Namen. |
| `material-icons` | Apache-2.0 | Symbolsatz |

## Werkzeuge (nicht ausgeliefert)

Nur für Entwicklung, Build und Tests; sie sind in keinem Artefakt enthalten, das an Nutzer geht:
Gradle, Angular CLI, TypeScript (Apache-2.0), ESLint, Prettier, Vitest, jsdom, angular-eslint,
typescript-eslint (alle MIT), Spock und Groovy (Apache-2.0), Byte Buddy und Objenesis (Apache-2.0).

## Liste aktualisieren

Nach einem Dependency-Update stimmt diese Datei nicht mehr automatisch. Die Backend-Angaben lassen
sich aus dem aufgelösten Classpath neu gewinnen (POM-Metadaten im Gradle-Cache bzw.
`Bundle-License` im Jar-Manifest), die Frontend-Angaben aus dem `license`-Feld der jeweiligen
`node_modules/<paket>/package.json`.
