# Abbildungen neu erzeugen

Die Bilder in [`docs/images/`](../images), die [menuepunkte.md](../menuepunkte.md) einbindet,
entstehen mit diesem Skript. Sie zeigen ausschließlich **synthetische Demodaten** – niemals echte
Renndaten.

Das läuft von Hand, wenn sich die Oberfläche sichtbar geändert hat. Es ist bewusst kein
automatischer Ablauf: Ob ein Screenshot etwas taugt, sieht man erst, wenn man ihn anschaut.

## Ablauf

Eine Instanz mit Demodaten besorgen – am einfachsten über die
[kondi-federation-Suite](../../e2e-tests/kondi-federation), die genau den Zustand herstellt, den
die Bilder zeigen (vier Stationen, 83 Teilnehmer mit Ergebnissen, eine Gesamtwertung):

```bash
cd ../../e2e-tests/kondi-federation
./start_instances.sh /pfad/zu/time-control.jar /tmp/shots
./run_all.sh
```

Dann hier die Bilder erzeugen – die Hauptinstanz läuft auf Port 18100:

```bash
npm install          # nur beim ersten Mal
node shoot.js
```

Hinterher aufräumen:

```bash
pkill -f 'time-control[.]jar'
rm -rf /tmp/shots
```

Ein anderes Ziel lässt sich über Umgebungsvariablen setzen: `SHOT_BASE` (Adresse der Instanz),
`SHOT_USER` / `SHOT_PASS`, `SHOT_OUT` (Ausgabeverzeichnis).

## Voraussetzungen

- **Google Chrome** – `playwright-core` bringt bewusst keinen eigenen Browser mit; das spart rund
  130 MB Download, steuert dafür das installierte Chrome über `channel: "chrome"`
- **Node**

## Wenn sich die Oberfläche ändert

`shoot.js` klickt sich durch die Seiten, und zwei Eigenheiten sind fest eingebaut, weil sie sonst
jedes Mal neu Zeit kosten:

- **`force: true` bei jedem Klick.** Angular Materials Animationen halten Elemente aus Playwrights
  Sicht dauerhaft „instabil"; ein gewöhnlicher Klick läuft in den Timeout, obwohl das Element
  sichtbar und anklickbar ist.
- **Der erste Eintrag eines Rennen-Filters ist der Platzhalter** („Rennen auswählen…") und lädt
  nichts. Das Skript nimmt den ersten echten Eintrag.

Nach jedem Bild meldet es die Anzahl gefundener Tabellenzeilen und bricht am Ende ab, wenn eine
Seite leer geblieben ist – eine leere Tabelle als Screenshot fällt sonst erst im fertigen Dokument
auf.

Kommt ein Bild dazu, gehört es in `shoot.js` **und** an die passende Stelle in
[menuepunkte.md](../menuepunkte.md).
