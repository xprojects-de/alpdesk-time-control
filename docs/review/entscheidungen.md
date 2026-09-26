# Register der Review-Entscheidungen

Hier steht, was bewusst so ist und in keinem Code-Review mehr als Befund auftauchen soll. Alle Review-Skills lesen
diese Datei (siehe [.claude/review-base.md](../../.claude/review-base.md)). Ein Befund, den ein Eintrag abdeckt,
wird nicht gemeldet. Nur wenn die **Begründung** eines Eintrags nicht mehr stimmt, meldet ein Review ihn als
„Entscheidung prüfen (E…)“.

**Pflege:** Ein Eintrag kommt dazu, wenn du einen Befund bewusst akzeptierst (die Reviews schlagen am Ende
„Kandidaten fürs Register“ vor). Ins Register gehört nur, was Umfang, Bedienkomfort oder Anzeige betrifft, oder dessen
Folge der Bediener sieht und korrigieren kann. Was eine Ergebnisliste verfälschen, eine Zielzeit verlieren oder
Daten Minderjähriger ungewollt veröffentlichen kann, wird gefixt, wenn der Fix klein ist - nicht eingetragen.
Einträge werden nie umnummeriert. Ein überholter Eintrag bekommt den Status „aufgehoben“ und bleibt stehen.

Ein Eintrag besteht aus einer Nummer, dem Bereich, der Entscheidung, der Begründung und der Frage, was ihn aufheben
würde.

## Einträge

### E01 · Eine Instanz, ein Laptop, eine SQLite-Datei
- **Bereich:** Architektur, alle Reviews
- **Entscheidung:** Time Control läuft als genau ein Prozess gegen seine eigene SQLite-Datenbank. Sperren
  (`MeasurementTableLock`, `DeviceImportGate`) und Zustände (Auto-Assign, aktiver Timing-Provider) liegen im
  Speicher der JVM. Mehrere Instanzen (Kondi-Stationsbetrieb) haben jeweils ihre eigene Datenbank und tauschen Daten
  nur über Export/Import aus.
- **Begründung:** Das Programm läuft offline auf einem Laptop an der Strecke, ohne externe Dienste.
- **Aufgehoben, wenn:** zwei Prozesse auf dieselbe Datenbank zugreifen sollen.
- **Quelle:** CLAUDE.md „Project overview“

### E02 · Ein fest eingestelltes Bediener-Konto
- **Bereich:** Sicherheit
- **Entscheidung:** Es gibt genau ein Konto (`APP_USERNAME`/`APP_PASSWORD` bzw. das beim ersten Start erzeugte
  Passwort), keine Benutzertabelle, keine Rollen.
- **Begründung:** Eine Person bedient die Zeitmessung am Laptop.
- **Aufgehoben, wenn:** mehrere Personen mit unterschiedlichen Rechten arbeiten sollen.
- **Quelle:** CLAUDE.md „Backend architecture“ (Security)

### E03 · Öffentliche Live-Ansicht ohne Login
- **Bereich:** Live-Ansicht, Sicherheit
- **Entscheidung:** Die Live-Ergebnisse sind ohne Login über ein nicht erratbares `liveToken` erreichbar. Startnummer
  und Jahrgang erscheinen dort nur, wenn der Bediener die Schalter unter „Einstellungen“ einschaltet (V7 schaltet
  beide aus).
- **Begründung:** Zuschauer und Vereine sollen Ergebnisse auf dem Handy sehen, ohne Zugangsdaten.
- **Aufgehoben, wenn:** die Live-Ansicht Daten zeigt, die der Bediener nicht per Schalter freigibt.
- **Quelle:** `Race#liveToken`, `RaceLiveService#buildResponse`, V7

### E04 · Push-Messungen werden während der Pause nicht verworfen
- **Bereich:** Zeitmessung
- **Entscheidung:** `TimingEventSink.accept` verwirft eine gepushte Messung nur, wenn der Bediener den automatischen
  Import ausgeschaltet hat, nicht während eines Geräte-Resets oder einer Archivierung (`pauseDuring`).
- **Begründung:** Eine gepushte Messung kommt genau einmal; verworfen wäre die Zielzeit verloren. Die Tabellensperre
  sorgt dafür, dass sie vor dem Archivieren oder nach dem Leeren landet.
- **Aufgehoben, wenn:** ein Streaming-Provider Messungen wiederholt liefert oder die Tabellensperre wegfällt.
- **Quelle:** CLAUDE.md „Timing device import“

### E05 · `@Inject`-Felder in `DataImportScheduler` und `AlpdeskTimeControlDataImportService`
- **Bereich:** Code-Stil
- **Entscheidung:** Diese beiden Klassen bekommen ihre Abhängigkeiten über Felder statt über den Konstruktor.
- **Begründung:** Bestand; CLAUDE.md nennt sie ausdrücklich als Ausnahme, nicht als Vorbild.
- **Aufgehoben, wenn:** eine der Klassen ohnehin umgebaut wird.
- **Quelle:** CLAUDE.md „Code style“

### E06 · `destroy$`/`takeUntil` neben `takeUntilDestroyed`
- **Bereich:** Frontend
- **Entscheidung:** Bestehende Komponenten behalten `destroy$` mit `takeUntil`; nur neue oder ohnehin umgebaute
  Komponenten nutzen `takeUntilDestroyed()`. Kein flächiger Umbau.
- **Begründung:** Beide Muster sind korrekt; ein mechanischer Umbau ohne Verhaltensänderung bläht nur den Diff.
- **Aufgehoben, wenn:** ein Muster nachweislich ein Leck erzeugt.
- **Quelle:** CLAUDE.md „Frontend architecture“ (Subscription cleanup)

### E07 · Letzte Altersgruppe der Standard-Variante bleibt löschbar
- **Bereich:** Altersgruppen
- **Entscheidung:** Die letzte Gruppe einer Variante, die Rennen noch benutzen, kann weder gelöscht noch in eine
  andere Saison oder Variante verschoben werden - außer in der Standard-Variante.
- **Begründung:** Jedes Rennen ohne eigene Variante nutzt die Standard-Variante; ihre letzte Gruppe war immer
  löschbar, und eine Saison ohne Altersgruppen ist ein erlaubter Zustand („ohne Altersklasse“, von der UI angezeigt).
- **Aufgehoben, wenn:** eine Saison ohne Altersgruppen nicht mehr erlaubt sein soll.
- **Quelle:** `AgeGroupService#delete`, `#update`

### E08 · Ein Rennen darf eine leer gewordene Variante behalten
- **Bereich:** Rennen, Altersgruppen
- **Entscheidung:** `AgeGroupService#assertVariantSelectable` prüft die Variante nur, wenn Saison oder Variante des
  Rennens sich ändern. Ein Rennen, dessen Variante keine Gruppen mehr hat, bleibt bearbeitbar.
- **Begründung:** Eine Korrektur am Renntag (Wetter, Kurssetzer) darf nicht an den Altersklassen scheitern. Die
  Altersgruppen-Seite zeigt die leere, noch benutzte Variante mit Hinweis an.
- **Aufgehoben, wenn:** leere Varianten wieder entstehen können, ohne dass die UI darauf hinweist.
- **Quelle:** `AgeGroupService#assertVariantSelectable`, `#findVariants`

### E09 · Gaudi-Modus über mehrere Saisons oder Varianten: das erste Rennen entscheidet
- **Bereich:** Gaudi-Modus, Altersgruppen
- **Entscheidung:** Liegen die Rennen eines Gaudi-Modus in verschiedenen Saisons oder Varianten, wird gegen Saison
  und Variante des ersten Rennens gewertet (`SeasonService#scoringSeasonOf`, `AgeGroupService#findForScoring`). Die
  Gaudi-Modus-Ansicht weist darauf hin.
- **Begründung:** Eine Wertung braucht genau einen Satz Altersklassen; das erste Rennen steht auch im Kopf des PDFs.
- **Aufgehoben, wenn:** der Hinweis in der Ansicht fehlt oder gemischte Wertungen regelmäßig vorkommen.
- **Quelle:** `AgeGroupService#findForScoring`, `gaudi-mode-detail.component.ts` (seasonSpan/variantSpan)

### E10 · Ein Import verändert keine bestehende Altersgruppe
- **Bereich:** Teilnehmer-Import, Altersgruppen
- **Entscheidung:** Passt eine „Klasse“ aus der Importdatei nicht zu einer gleichnamigen Gruppe der Saison und
  Variante, wird die Zeile als Fehler gemeldet; die Gruppe wird nicht verbreitert. Fehlt die Klasse, wird sie mit genau
  diesem Jahrgang angelegt.
- **Begründung:** Eine Importdatei darf die vom Bediener eingerichteten Klassen nicht umbauen und damit bereits
  gelaufene Rennen neu einteilen.
- **Aufgehoben, wenn:** Importe die Klassen einer Saison bewusst festlegen sollen.
- **Quelle:** `AgeGroupService#findOrCreateForImport`

### E11 · Saison-Übernahme verschiebt alle Jahrgänge
- **Bereich:** Altersgruppen
- **Entscheidung:** `copyVariant` verschiebt jeden Jahrgangsbereich um den Abstand der Saisons. Eine Klasse mit
  festem Jahrgang („Jahrgang 2012“) muss danach von Hand korrigiert werden; die Snackbar fordert zum Prüfen auf.
- **Begründung:** Fast alle Klassen rollen mit (U14, U16, Herren allgemein); eine Stichprobe kann die beiden Arten
  nicht unterscheiden.
- **Aufgehoben, wenn:** Klassen mit festem Jahrgang häufig werden.
- **Quelle:** `AgeGroupService#copyVariant`

### E12 · Los-Verfahren rechnet mit den gedruckten Werten
- **Bereich:** Gaudi-Modus (LOS)
- **Entscheidung:** Paar- und Feldmittel werden aus den auf Hundertstel gerundeten Einzelwerten gebildet, nicht aus
  den Rohmillisekunden. „Abweichung“ ist die Differenz der beiden gedruckten Mittelwerte.
- **Begründung:** Kampfrichter rechnen aus der gedruckten Liste nach; Rohwerte ergäben bei halben Hundertsteln eine
  scheinbar falsche Rechnung.
- **Aufgehoben, wenn:** das Reglement eine Rechnung auf Millisekunden verlangt.
- **Quelle:** `LosModeCalculator#printedValue`, `/time-control-los-verify`

### E13 · V7 schaltet Startnummer- und Jahrgangsspalten für alle aus
- **Bereich:** Datenbank, Ausgaben
- **Entscheidung:** V7 setzt beide Schalter hart auf aus. Wer sie nach V5 bewusst eingeschaltet hatte, muss sie unter
  „Einstellungen“ wieder einschalten. Der `DEFAULT 1` aus V5 bleibt stehen.
- **Begründung:** Jahrgänge Minderjähriger auf der öffentlichen Live-Ansicht müssen eine bewusste Entscheidung sein;
  SQLite kann den Default nicht ohne Tabellenumbau ändern, und nach V1 wird nie eine Zeile eingefügt.
- **Aufgehoben, wenn:** `app_settings` je mehr als eine Zeile bekommt.
- **Quelle:** `V7__pdf_race_number_birth_year_off.sql`

### E14 · CSV-Exporte ohne BOM
- **Bereich:** Ausgaben
- **Entscheidung:** CSV-Exporte sind reines UTF-8 mit `;` als Trenner, ohne BOM.
- **Begründung:** So vom Nutzer gewünscht; der Import erkennt einen BOM trotzdem (`TextFileDecoder`).
- **Aufgehoben, wenn:** der Nutzer einen BOM verlangt.
- **Quelle:** `GaudiCsvExportService`, Entscheidung des Nutzers
