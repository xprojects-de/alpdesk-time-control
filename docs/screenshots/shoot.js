// Erzeugt die Abbildungen für docs/menuepunkte.md aus einer laufenden Instanz.
//
//   node shoot.js
//
// Erwartet eine Instanz auf Port 18100, die bereits Demodaten enthält - siehe README.md in
// diesem Verzeichnis. Von Hand aufgerufen, nicht automatisiert: ob ein Screenshot etwas taugt,
// sieht man erst, wenn man ihn anschaut.
//
// Voraussetzungen: `npm install` hier und ein installiertes Google Chrome - playwright-core
// bringt bewusst keinen eigenen Browser mit (spart ~130 MB Download), sondern steuert über
// `channel: "chrome"` den vorhandenen.
const {chromium} = require("playwright-core");
const fs = require("fs");
const path = require("path");

const BASE = process.env.SHOT_BASE || "http://localhost:18100";
const USER = process.env.SHOT_USER || "e2e_admin";
const PASS = process.env.SHOT_PASS || "e2eTestPass123";
const OUT = path.resolve(process.env.SHOT_OUT || path.join(__dirname, "..", "images"));

// Die Seitenleiste endet bei knapp 840 px. Eine Höhe knapp darüber schneidet die leere Fläche
// darunter weg, ohne die Navigation anzuschneiden.
const DESKTOP = {width: 1600, height: 880};

async function login(page) {
    await page.goto(`${BASE}/login`, {waitUntil: "networkidle"});
    const inputs = page.locator("input");
    await inputs.nth(0).fill(USER);
    await inputs.nth(1).fill(PASS);
    await page.keyboard.press("Enter");
    await page.waitForURL(/dashboard/, {timeout: 20000});
    await page.waitForLoadState("networkidle");
}

// force: true ist hier kein Notnagel, sondern nötig: Angular Materials Animationen halten die
// Elemente aus Playwrights Sicht dauerhaft "instabil", ein normaler Klick läuft in den Timeout.
async function click(page, locator) {
    await locator.click({force: true, timeout: 10000});
}

// Die erste Option eines Rennen-Filters ist der Platzhalter ("Rennen auswählen…"), der nichts
// lädt - gesucht ist der erste echte Eintrag.
async function pickFirstRace(page) {
    const select = page.locator("mat-select").first();
    if ((await select.count()) === 0) return false;
    await click(page, select);
    const options = page.locator("mat-option");
    await options.first().waitFor({state: "visible", timeout: 5000});
    const texts = await options.allInnerTexts();
    let idx = texts.findIndex(t => !/auswählen|auswaehlen|\.\.\./i.test(t));
    if (idx < 0) idx = texts.length > 1 ? 1 : 0;
    await click(page, options.nth(idx));
    await page.waitForTimeout(2000);
    return true;
}

async function shot(page, name, minRows) {
    const file = path.join(OUT, `${name}.png`);
    await page.screenshot({path: file});
    const rows = await page.locator("tr").count();
    const kb = Math.round(fs.statSync(file).size / 1024);
    const ok = rows >= minRows;
    console.log(`  ${ok ? "ok  " : "LEER"} ${name.padEnd(16)} ${String(kb).padStart(4)} KB  Zeilen: ${rows}`);
    return ok;
}

(async () => {
    fs.mkdirSync(OUT, {recursive: true});
    let allOk = true;

    const browser = await chromium.launch({
        channel: "chrome",
        headless: true,
        args: ["--force-prefers-reduced-motion"],
    });
    const page = await browser.newPage({viewport: DESKTOP, deviceScaleFactor: 2});
    await login(page);

    // --- Rennen: zeigt die Stationen eines Wettkampfs -----------------------------------------
    await page.goto(`${BASE}/dashboard/races`, {waitUntil: "networkidle"});
    await page.waitForTimeout(1000);
    allOk = (await shot(page, "rennen", 2)) && allOk;

    // --- Teilnehmer: braucht erst ein ausgewähltes Rennen --------------------------------------
    await page.goto(`${BASE}/dashboard/participants`, {waitUntil: "networkidle"});
    await page.waitForTimeout(1000);
    await pickFirstRace(page);
    allOk = (await shot(page, "teilnehmer", 3)) && allOk;

    // --- Gaudi-Modus: Liste -> "Anzeigen" -> "Wertung anzeigen" --------------------------------
    // Ohne den zweiten Klick steht dort nur "Noch keine Wertung berechnet".
    await page.goto(`${BASE}/dashboard/gaudi-mode`, {waitUntil: "networkidle"});
    await page.waitForTimeout(1200);
    await page.setViewportSize({width: DESKTOP.width, height: 980});
    await click(page, page.getByRole("button", {name: /Anzeigen/i}).first());
    await page.waitForTimeout(1500);
    await click(page, page.getByRole("button", {name: /Wertung anzeigen/i}).first());
    await page.waitForTimeout(3000);
    await page.mouse.move(DESKTOP.width - 40, 950); // Tooltip des zuletzt geklickten Knopfs wegnehmen
    await page.keyboard.press("Escape");
    await page.waitForTimeout(800);
    allOk = (await shot(page, "gesamtwertung", 5)) && allOk;

    await browser.close();

    // --- Öffentliche Live-Ansicht, in Handy-Breite ---------------------------------------------
    // Der Link kommt aus der API, weil er den Live-Token des Rennens enthält.
    const auth = await fetch(`${BASE}/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: USER, password: PASS}),
    }).then(r => r.json());
    const links = await fetch(`${BASE}/races/1/live-links`, {
        headers: {Authorization: `Bearer ${auth.access_token}`},
    }).then(r => r.json());
    const overall = links.find(l => /Gesamtwertung/i.test(l.label)) || links[0];

    const mobileBrowser = await chromium.launch({channel: "chrome", headless: true});
    const mobile = await mobileBrowser.newContext({
        viewport: {width: 540, height: 760},
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
    });
    const mobilePage = await mobile.newPage();
    await mobilePage.goto(`${BASE}${overall.path}`, {waitUntil: "networkidle"});
    await mobilePage.waitForTimeout(1200);
    allOk = (await shot(mobilePage, "live-ansicht", 5)) && allOk;
    await mobileBrowser.close();

    if (!allOk) {
        console.error("\nMindestens eine Seite enthielt keine Daten - lief die Instanz mit Demodaten?");
        process.exit(1);
    }
    console.log(`\nFertig. Bilder in ${OUT}`);
})();
