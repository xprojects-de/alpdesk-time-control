"""Step 5 (manual-assign variant): Gaudi-Modus "Los" over the race - draw the pairs, then
independently recompute pair average, deviation from the overall average and place, and compare
against both the API ranking and the exported PDF."""
import sys, json, math, subprocess
sys.path.insert(0, '.')
import common as c
import manual_config as cfg

token = c.login(cfg.BASE)
state = json.load(open(c.results_path(cfg.STATE_FILE)))
race_id = state["race_id"]
roster = state["roster"]
by_pid = {r["participantId"]: r for r in roster}

def round10(x):
    """RankingService#roundForDisplay: nearest 10ms, half up - applied once to each printed value
    and once to each average built from them."""
    return int(math.floor(x / 10.0 + 0.5)) * 10

def fmt(ms):
    r = round10(ms)
    return f"{r // 60000}:{(r // 1000) % 60:02d}.{(r % 1000) // 10:02d}"

def value(r):
    """LosModeCalculator#printedValue: the averages are built from the printed hundredths, not the
    raw ms, so the PDF can be recomputed by hand."""
    return round10(r["durationMs"]) if (r and r["durationMs"] is not None and r["status"] is None) else None

problems = []

print("=== Los-Modus anlegen und auslosen ===")
status, gm = c.post(cfg.BASE, token, "/gaudi-modes", {
    "races": [{"raceId": race_id}], "type": "LOS", "name": f"{cfg.RACE_NAME} Losrennen",
})
assert status == 201, gm
gm_id = gm["id"]
status, resp = c.post(cfg.BASE, token, f"/gaudi-modes/{gm_id}/draw", {})
assert status == 200, resp

status, pairings = c.get(cfg.BASE, token, f"/gaudi-modes/{gm_id}/pairing")
assert status == 200
print(f"{len(pairings)} Paarungen gezogen (bei {len(roster)} Teilnehmern)")
drawn_ids = []
for p in pairings:
    drawn_ids.append(p["participant1Id"])
    if p.get("participant2Id"):
        drawn_ids.append(p["participant2Id"])
# Anyone already marked DNS/DNF/DSQ at draw time is left out on purpose (see
# GaudiModeService#drawLosPairing): a known non-starter would only cost their partner the placing.
# Here that is bib 17 (DNF) and bib 27 (DSQ), both set by manual_setup.py before the draw. Bib 16
# (never started, but no status) is still drawn - the draw goes by status alone.
expected_drawn = sorted(r["participantId"] for r in roster if r["status"] is None)
if sorted(drawn_ids) != expected_drawn:
    problems.append("Auslosung deckt nicht jeden Teilnehmer ohne Status genau einmal ab")
not_drawn = [r for r in roster if r["participantId"] not in drawn_ids]
print("nicht ausgelost (Status vor der Auslosung): "
      + ", ".join(f"StNr {r['raceNumber']} {r['status']}" for r in not_drawn))
if len(set(drawn_ids)) != len(drawn_ids):
    problems.append("Ein Teilnehmer wurde in mehr als ein Paar gelost")

all_values = [v for v in (value(r) for r in roster) if v is not None]
overall_raw = sum(all_values) / len(all_values)
overall_display = round10(overall_raw)
print(f"\nGesamtdurchschnitt aus {len(all_values)} gueltigen Zeiten: "
      f"{overall_raw:.3f} ms -> gedruckt {fmt(overall_raw)}")

expected, excluded = [], []
for pairing in pairings:
    r1 = by_pid.get(pairing["participant1Id"])
    r2 = by_pid.get(pairing.get("participant2Id")) if pairing.get("participant2Id") else None
    v1, v2 = value(r1), value(r2)
    if v1 is None or (pairing.get("participant2Id") and v2 is None):
        excluded.append((r1, r2))
        continue
    pair_avg_display = round10((v1 + v2) / 2.0 if v2 is not None else v1)
    expected.append({
        "label": f"{r1['lastName']} {r1['firstName']} & {r2['lastName']} {r2['firstName']}" if v2 is not None
                 else f"{r1['lastName']} {r1['firstName']} (Einzel)",
        "avg": pair_avg_display,
        "diff": abs(pair_avg_display - overall_display),
    })

expected.sort(key=lambda e: e["diff"])
places, prev, place = [], None, 0
for i, e in enumerate(expected):
    if prev is None or e["diff"] != prev:
        place = i + 1
    places.append(place)
    prev = e["diff"]

status, ranking = c.get(cfg.BASE, token, f"/gaudi-modes/{gm_id}/ranking")
assert status == 200, ranking
actual_by_label = {r["label"]: r for r in ranking}

print(f"\ngewertete Paare: {len(expected)}, nicht gewertet (Partner ohne Ergebnis): {len(excluded)}")
print(f"\n{'Pl':>3}  {'Paarung':<42} {'Ø Paar':>9} {'Abweichung':>11}")
for e, pl in zip(expected, places):
    a = actual_by_label.get(e["label"])
    print(f"{pl:>3}. {e['label']:<42} {fmt(e['avg']):>9} {fmt(e['diff']):>11}")
    if a is None:
        problems.append(f"Paar fehlt in der API-Wertung: {e['label']}")
        continue
    if a["place"] != pl:
        problems.append(f"{e['label']}: Platz API={a['place']} erwartet={pl}")
    if a["valueMs"] != e["avg"]:
        problems.append(f"{e['label']}: Ø API={a['valueMs']} erwartet={e['avg']}")
    if a["diffMs"] != e["diff"]:
        problems.append(f"{e['label']}: Abweichung API={a['diffMs']} erwartet={e['diff']}")
    if a.get("referenceMs") not in (None, overall_display):
        problems.append(f"{e['label']}: Gesamtdurchschnitt API={a.get('referenceMs')} erwartet={overall_display}")
if len(ranking) != len(expected):
    problems.append(f"API-Wertung hat {len(ranking)} Paare, erwartet {len(expected)}")

if excluded:
    print("\nNicht gewertet:")
    for r1, r2 in excluded:
        names = f"{r1['lastName']} {r1['firstName']}" + (f" & {r2['lastName']} {r2['firstName']}" if r2 else " (Einzel)")
        reasons = [f"StNr {r['raceNumber']}: {r['status'] or 'ohne Zeit'}" for r in (r1, r2) if r and value(r) is None]
        print(f"   {names}  ({', '.join(reasons)})")

print("\n=== PDF-Export der Los-Wertung ===")
status, pdf = c.get_raw(cfg.BASE, token, f"/gaudi-modes/{gm_id}/export/pdf")
assert status == 200
fname = c.results_path("manual_los_wertung.pdf")
with open(fname, "wb") as f:
    f.write(pdf)
text = subprocess.run(["pdftotext", "-layout", fname, "-"], capture_output=True, text=True).stdout
print(f"PDF: {len(pdf)} bytes")
for e, pl in list(zip(expected, places))[:3]:
    if fmt(e["avg"]) not in text:
        problems.append(f"Ø-Wert {fmt(e['avg'])} von '{e['label']}' steht nicht im PDF")
if expected and fmt(overall_display) not in text:
    problems.append(f"Gesamtdurchschnitt {fmt(overall_display)} steht nicht im PDF")

print(f"\nAbweichungen: {len(problems)}")
for p in problems:
    print("  ", p)
print("\nSCHRITT 5: " + ("ALLES KORREKT" if not problems else "ABWEICHUNGEN"))
sys.exit(1 if problems else 0)
