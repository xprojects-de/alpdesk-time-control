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

### E15 · Live-Ansicht: Teilnehmer ohne Zeit stehen während des Rennens als „DNS“ da (vertagt)
- **Bereich:** Live-Ansicht, Ausgaben
- **Entscheidung:** Vorerst bleibt es dabei, dass wer weder Ergebnis noch Status hat, unter „Nicht gewertet“ als
  „DNS“ erscheint (`RankingService#dnsStatusLabel`), auch in der Live-Ansicht während des Rennens. **Festgelegt für
  die Umsetzung:** In der Live-Ansicht kommen diese Teilnehmer in einen eigenen Abschnitt „Noch ohne Zeit“; ein
  ausdrücklich gesetztes DNS bleibt DNS. Das PDF bleibt unverändert und druckt weiter „DNS“ - nach dem Rennen ist
  „ohne Zeit, ohne Status“ ein Nichtstarter.
- **Begründung:** Die Anzeige ist zur Laufzeit irreführend, aber kein Wertungsfehler; die Schlussliste ist korrekt.
- **Aufgehoben, wenn:** die Live-Ansicht umgebaut wird oder Rückmeldungen von Zuschauern/Eltern kommen - dann wie oben
  umsetzen, mit Spec in `RaceLiveServiceSpec` und angepasstem Parser in `bergsprint/manual_verify_dns_scope.py`.
- **Quelle:** Auswertungs-Review 2026-09-26 (B4), Entscheidung des Nutzers

### E16 · Startgruppen-Vorlagen wirken auf alle Rennen, die sie nutzen (vertagt)
- **Bereich:** Einzelrennen, Startgruppen
- **Entscheidung:** Der Versatz einer Startgruppen-Vorlage wird bei jeder Auswertung live gelesen
  (`RankingService#startGroupOffsetMs`). Wer ihn ändert oder die Vorlage löscht, ändert damit auch schon gelaufene
  Rennen, die sie benutzen. **Festgelegt für die Umsetzung:** eine Sperre in `StartGroupTemplateService` - Versatz
  ändern und Löschen (auch mit `force`) werden mit 409 abgelehnt, sobald Teilnehmer mit Ergebnis aus **mehr als
  einem Rennen** die Vorlage nutzen; die Meldung nennt die Rennen. Innerhalb eines Rennens bleibt die Korrektur
  eines vertippten Versatzes möglich. Keine Migration, kein am Teilnehmer gespeicherter Versatz.
- **Begründung:** Vorlagen werden in der Praxis pro Veranstaltung angelegt; der Bediener sieht die Änderung in der
  Liste und kann sie zurücknehmen.
- **Aufgehoben, wenn:** Vorlagen über mehrere Veranstaltungen hinweg wiederverwendet werden - dann die Sperre wie
  oben umsetzen, mit Spec in `StartGroupTemplateServiceSpec`.
- **Quelle:** Auswertungs-Review 2026-09-26 (B5), Entscheidung des Nutzers

### E17 · Versatz größer als die Rohzeit ergibt 0:00.00 (vertagt)
- **Bereich:** Einzelrennen, Startgruppen
- **Entscheidung:** Ist der Startgruppen-Versatz größer als die gemessene Zeit (falsche Startgruppe zugewiesen), wird
  die Nettozeit auf 0 gesetzt und der Teilnehmer steht mit 0:00.00 auf Platz 1 (`RankingService#netDurationMs`).
- **Begründung:** Der Fehler ist in jeder Liste sofort sichtbar und durch Korrektur der Startgruppe behebbar.
- **Aufgehoben, wenn:** so ein Fall im Rennbetrieb unbemerkt veröffentlicht wird - dann Netto ≤ 0 als „kein
  gültiges Ergebnis“ werten (eigenes Etikett unter „Nicht gewertet“) und den Spec „floors at 0 …“ ersetzen.
- **Quelle:** Auswertungs-Review 2026-09-26 (M4)

### E18 · `externalId` auf der öffentlichen Live-Ansicht (vertagt, widerspricht der Pflegeregel)
- **Bereich:** Live-Ansicht, Datenschutz
- **Entscheidung:** Die Live-Ansicht (JSON und HTML) zeigt die `externalId` (Lizenz-/Verbandsnummer) jedes
  Teilnehmers, für den eine gesetzt ist; einen Schalter gibt es nicht. **Festgelegt für die Umsetzung:** die ID aus
  der Live-Antwort entfernen (PDFs und Bediener-UI behalten sie), ohne neuen Schalter; den Kommentar in
  `RaceLiveController` korrigieren; Spec in `RaceLiveServiceSpec`.
- **Begründung:** Auf Wunsch des Nutzers vorerst nicht umgesetzt. **Achtung:** Nach der Pflegeregel oben gehört ein
  Befund, der Daten Minderjähriger ungewollt veröffentlichen kann, nicht ins Register, sondern wird gefixt, wenn der
  Fix klein ist - das ist hier der Fall (Größe S). Solange dieser Eintrag steht, gilt E03 nicht mehr vollständig.
- **Aufgehoben, wenn:** der Fix umgesetzt ist oder eine Veranstaltung mit Lizenznummern (z. B. DSV-Import) ansteht.
- **Quelle:** Auswertungs-Review 2026-09-26 (B3), `RankingViewService#withPersonColumns`, `RaceLiveService#renderHtml`

### E19 · Sync löscht nie ein Ergebnis (Bedienfehler)
- **Bereich:** Zeitmessung, Zuordnung & Sync
- **Entscheidung:** `ParticipantService#syncMeasurementsToParticipants` schreibt nur die Teilnehmer, auf die eine
  Renn-Messung zeigt. Wird eine Renn-Messung nach einem Sync umgehängt, gelöscht oder auf „Kein Teilnehmer“ gesetzt,
  behält der vorherige Teilnehmer seine Zeit; ein `clearResult` wird vom nächsten Sync zurückgeschrieben, solange die
  Renn-Messung noch auf den Teilnehmer zeigt.
- **Begründung:** Bedienfehler: wer nach dem Sync umhängt, korrigiert den alten Teilnehmer in der Teilnehmerliste.
  **Achtung:** Die Folge (dieselbe Zeit an zwei Teilnehmern in der Ergebnisliste) fällt nach der Pflegeregel unter
  „wird gefixt“; eingetragen auf Wunsch des Nutzers.
- **Aufgehoben, wenn:** so eine doppelte Zeit in einer veröffentlichten Liste auftaucht - dann Teilnehmer ohne
  Renn-Messung, die noch deren alte Zeit tragen, im Sync leeren und melden (Spec in `ParticipantServiceSpec`).
- **Quelle:** Zeitmessungs-Review 2026-09-26 (B1)

### E20 · Sync überschreibt eine Handzeit am Teilnehmer
- **Bereich:** Zeitmessung, Zuordnung & Sync
- **Entscheidung:** Der Sync schreibt Dauer und Zeitpunkt jeder zugeordneten Renn-Messung ohne Rückfrage auf den
  Teilnehmer, auch wenn dort inzwischen eine Handzeit oder Korrektur steht. Status und Strafe bleiben.
- **Begründung:** Die Renn-Messung ist die maßgebliche Zeit; wer korrigieren will, korrigiert sie in
  „Zuordnung & Sync“.
- **Aufgehoben, wenn:** Handzeiten am Teilnehmer regelmäßig neben Gerätezeiten gepflegt werden.
- **Quelle:** Zeitmessungs-Review 2026-09-26 (B2)

### E21 · Erneutes Archivieren übernimmt die Dauer aus „Messungen“
- **Bereich:** Zeitmessung, Archivieren
- **Entscheidung:** `RaceMeasurementRepository#copyFromMeasurements` überschreibt beim erneuten Archivieren Dauer und
  Zeitpunkt einer bestehenden Renn-Messung mit dem Rohwert; nur der Teilnehmer bleibt (COALESCE). Eine Korrektur der
  Dauer in „Zuordnung & Sync“ geht damit bei einem späteren Archiv desselben Rennens verloren.
- **Begründung:** Korrekturen werden nach dem endgültigen Archiv gemacht, nicht zwischen Vorschau- und Endarchiv.
  **Achtung:** Eine überschriebene Korrektur fällt nach der Pflegeregel unter „wird gefixt“; eingetragen auf Wunsch
  des Nutzers.
- **Aufgehoben, wenn:** das Vorschau-Archiv („ohne Löschen“) mit anschließender Korrektur üblich wird - dann die Dauer
  bearbeiteter Zeilen genauso schützen wie den Teilnehmer.
- **Quelle:** Zeitmessungs-Review 2026-09-26 (B3)

### E22 · Zweites löschendes Archiv ins selbe Rennen (Bedienfehler)
- **Bereich:** Zeitmessung, Archivieren
- **Entscheidung:** Renn-Messungen sind über `(race_id, device_measurement_id)` eindeutig. Wird nach einem Archiv mit
  Geräte-Reset erneut in dasselbe Rennen archiviert, überschreiben die neu ab 1 (bzw. -1 für Handeinträge) gezählten
  Messungen die gleich nummerierten des ersten Archivs; der Teilnehmer der alten Zeile bleibt.
- **Begründung:** Bedienfehler: nach einem löschenden Archiv wird nicht mehr in dasselbe Rennen archiviert,
  Nachstarter werden von Hand eingetragen. **Achtung:** Dabei geht eine Zielzeit verloren und eine falsche steht in
  der Liste - nach der Pflegeregel „wird gefixt“; eingetragen auf Wunsch des Nutzers.
- **Aufgehoben, wenn:** Nachstarter oder ein zweiter Durchgang unter demselben Rennen archiviert werden sollen - dann
  eine Archiv-Generation in den Unique-Index (Migration, Spec in `RaceMeasurementServiceSpec`).
- **Quelle:** Zeitmessungs-Review 2026-09-26 (B4)

### E23 · „Archivieren (nur Datenbank)“ mit abfragendem Gerät
- **Bereich:** Zeitmessung, Archivieren
- **Entscheidung:** Der Modus leert nur die Tabelle, nicht das Gerät. Ein abfragendes Gerät liefert beim nächsten
  Poll seine ganze Liste erneut; die Zeiten stehen dann wieder unzugeordnet in „Messungen“. Gleiches gilt für
  „Alle Messungen löschen (nur Datenbank)“.
- **Begründung:** Der Modus ist für Geräte ohne Reset und für den NONE-Modus gedacht; der Bediener sieht die
  zurückgekommenen Zeilen in „Messungen“.
- **Aufgehoben, wenn:** der Modus bei einem abfragenden Gerät im Rennbetrieb benutzt wird.
- **Quelle:** Zeitmessungs-Review 2026-09-26 (B5)

### E24 · Zwei Renn-Messungen für einen Teilnehmer möglich
- **Bereich:** Zeitmessung, Zuordnung & Sync
- **Entscheidung:** `race_measurement` hat keinen Unique-Index auf `(race_id, participant_id)`. Über Kopie/Archiv (z. B.
  Wiederholungslauf mit set-next `force` zwischen Vorschau- und Endarchiv) kann ein Teilnehmer zwei Zeilen bekommen;
  der Sync schreibt dann beide, welche gewinnt, ist nicht festgelegt. Nur `PUT /race-measurements` verhindert die
  Doppelzuordnung (409).
- **Begründung:** Beide Zeilen stehen sichtbar in „Zuordnung & Sync“ und lassen sich dort bereinigen.
- **Aufgehoben, wenn:** der Ablauf Vorschau-Archiv → Wiederholungslauf → Endarchiv üblich wird.
- **Quelle:** Zeitmessungs-Review 2026-09-26 (B6)

### E25 · Löschendes Archiv nimmt Zeiten anderer Rennen mit (Bedienfehler)
- **Bereich:** Zeitmessung, Archivieren
- **Entscheidung:** `copyFromMeasurements` kopiert alle Zeilen aus „Messungen“; Zeilen, die Teilnehmern eines anderen
  Rennens zugeordnet sind, landen ohne Teilnehmer im gewählten Rennen, danach wird „Messungen“ geleert. Ins
  eigentliche Rennen lassen sie sich nicht mehr übertragen.
- **Begründung:** Bedienfehler: jedes Rennen wird archiviert, bevor das nächste gezeitet wird.
- **Aufgehoben, wenn:** mehrere Rennen parallel ohne Archiv dazwischen gezeitet werden - dann ein löschendes Archiv mit
  409 ablehnen, solange Zeilen fremder Rennen in der Tabelle liegen.
- **Quelle:** Zeitmessungs-Review 2026-09-26 (B7)

### E26 · Ein Poll überschreibt eine von Hand korrigierte Dauer
- **Bereich:** Zeitmessung, Gerät bis Messung
- **Entscheidung:** Meldet das Gerät für eine Geräte-Nr. eine andere Dauer als die gespeicherte, schreibt
  `TimingEventSink#acceptOne` die Gerätedauer (Upsert, `MeasurementRepository#upsertByDeviceMeasurementId`); nur
  Teilnehmer und Zeitpunkt bleiben. Eine Korrektur der Dauer einer Gerätezeile in „Messungen“ hält damit nur bis zum
  nächsten Poll bzw. bis zum Sicherheits-Pull vor Archiv/Reset.
- **Begründung:** Die Gerätezeit ist die maßgebliche Zeit; korrigiert wird nach dem Archiv in „Zuordnung & Sync“.
  **Achtung:** Eine überschriebene Korrektur fällt nach der Pflegeregel unter „wird gefixt“; eingetragen auf Wunsch
  des Nutzers.
- **Aufgehoben, wenn:** Zeiten von Geräteeinträgen vor dem Archiv in „Messungen“ korrigiert werden - dann bearbeitete
  Zeilen markieren (Migration) und ihre Dauer im Sink nicht mehr überschreiben (Spec in `TimingEventSinkSpec`, der
  bestehende Fall „a changed duration is written …“ wird angepasst).
- **Quelle:** Zeitmessungs-Review 2026-09-26, Alpdesk-Pfad (B1)

### E27 · Ein neu zählendes Gerät überschreibt gespeicherte Zeilen
- **Bereich:** Zeitmessung, Gerät bis Messung
- **Entscheidung:** Der Sink erkennt nicht, dass das Gerät wieder bei 1 zu zählen begonnen hat, solange die Tabelle
  noch Zeilen mit denselben Geräte-Nrn. hält. Neue Zielzeiten landen dann per Upsert auf den alten Zeilen und behalten
  deren Teilnehmer. Wege dahin: `/reset` ausgeführt, aber die Antwort geht verloren (Rollback trotz leerem Gerät,
  `MeasurementService#deleteAllAndResetDevice`), Umschalten des Dauerbetriebs (`MeasurementController#setContinuousMode`
  ohne Pause, Sicherheits-Pull oder Tabellenprüfung), Wechsel von Basis-URL oder Provider mitten im Rennen, Gerät
  aus- und eingeschaltet.
- **Begründung:** Ablauf am Renntag: vor jedem Neustart des Geräts wird archiviert bzw. gelöscht. **Achtung:** Dabei
  geht eine Zielzeit verloren und eine falsche steht beim alten Teilnehmer - nach der Pflegeregel „wird gefixt“;
  eingetragen auf Wunsch des Nutzers.
- **Aufgehoben, wenn:** so ein Fall im Rennbetrieb auftritt - dann im Sink keine abweichende Gerätedauer auf eine
  zugeordnete Zeile schreiben, den Batch ablehnen und als Konflikt sichtbar machen; Dauerbetrieb mit 409 ablehnen,
  solange Gerätezeilen in der Tabelle liegen (Specs in `TimingEventSinkSpec` und einem Controller-Spec, e2e mit einem
  Fake, der ohne `/reset` neu zählt).
- **Quelle:** Zeitmessungs-Review 2026-09-26, Alpdesk-Pfad (B2)

### E28 · Eine gelöschte Gerätezeile kommt beim nächsten Poll zurück
- **Bereich:** Zeitmessung, Gerät bis Messung
- **Entscheidung:** `MeasurementService#delete` und `AutoAssignService#discardExistingMeasurements` (set-next mit
  `force`) löschen nur die Zeile; das Gerät meldet die Geräte-Nr. weiter, und der Sink fügt sie neu und unzugeordnet
  ein. Auto-Assign gibt sie dann dem nächsten erwarteten Starter.
- **Begründung:** Wunsch des Nutzers; der Bediener sieht die zurückgekommene Zeile in „Messungen“. **Achtung:** Bei
  laufender Automatik-Zuordnung verschiebt das alle folgenden Zeiten um einen Teilnehmer, beim Wiederholungslauf mit
  `force` bekommt der Läufer die verworfene Zeit zurück - nach der Pflegeregel „wird gefixt“; eingetragen auf Wunsch
  des Nutzers.
- **Aufgehoben, wenn:** Fehlauslösungen oder Wiederholungsläufe bei laufender Automatik-Zuordnung vorkommen - dann
  gelöschte positive Geräte-Nrn. (mit Dauer) als Merker speichern, im Sink überspringen und beim Leeren der Tabelle
  mitleeren (Specs in `TimingEventSinkSpec`, `AutoAssignServiceSpec`, e2e nachtslalom mit Wiederholungslauf).
- **Quelle:** Zeitmessungs-Review 2026-09-26, Alpdesk-Pfad (B3)

### E29 · Fehler beim automatischen Poll stehen nur im Log
- **Bereich:** Zeitmessung, Gerät bis Messung
- **Entscheidung:** Scheitert der 5s-Poll (Gerät nicht erreichbar, 5xx, Timeout) oder liefert eine 200-Antwort keine
  lesbare Zeile, schreibt `DataImportScheduler` ein WARN beim ersten Fehler und danach nur DEBUG; eine unlesbare
  Antwort gilt als erfolgreicher Poll ohne neue Zeiten. Die Verbindungsanzeige fragt nur `/ping` ab und bleibt grün.
- **Begründung:** Der Bediener sieht, dass in „Messungen“ keine neuen Zeiten ankommen; die Zeiten bleiben auf dem Gerät
  und kommen mit dem nächsten erfolgreichen Poll.
- **Aufgehoben, wenn:** ein Poll-Fehler im Rennbetrieb unbemerkt bleibt - dann letzten Fehler/Erfolg des Polls per
  Endpunkt ausliefern und neben der Verbindungsanzeige zeigen, eine nicht leere Antwort ohne lesbare Zeile als Fehler
  werten.
- **Quelle:** Zeitmessungs-Review 2026-09-26, Alpdesk-Pfad (B4)
