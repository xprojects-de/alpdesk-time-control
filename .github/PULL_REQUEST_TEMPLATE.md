# Was und warum

<!-- Was ändert sich, und welches Problem löst das? Bei Wertungsthemen gern mit dem Regelwerk
     oder einem Beispiel aus einem echten Wettkampf. -->

## Geprüft durch

<!-- Was hast du tatsächlich laufen lassen? Bitte nur ankreuzen, was du wirklich ausgeführt hast. -->

- [ ] `./gradlew test` (Backend) ist grün
- [ ] `npm run lint` (Frontend) läuft sauber durch
- [ ] `ng build` nach einem `--fix` über mehrere Dateien
- [ ] Betroffene e2e-Suite gelaufen: <!-- welche? -->
- [ ] In der laufenden Anwendung ausprobiert

## Checkliste

- [ ] Neue UI-Texte sind deutsch, neue Bezeichner englisch
- [ ] Keine echten Teilnehmerdaten im Diff — keine Namen, Startlisten, Ergebnis-CSVs oder
      Screenshots mit Klarnamen, auch nicht in Tests oder Kommentaren
- [ ] Bei Änderungen an Wertung, Ranking oder Export: ein Spock-Test liegt bei
- [ ] Wenn das Frontend neu gebaut wurde: die neu gehashten Bundles unter
      `Backend/src/main/resources/public` gehören nur dann in den Commit, wenn die Frontend-Änderung
      Teil dieses PRs ist
