"""Step 6: create a Los-Modus over all participants, draw pairings, and independently verify the
pair-average/deviation-from-overall-average math and place assignment."""
import sys, json
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.BASE)
state = json.load(open("state.json"))
race_id = state["race_id"]

status, all_participants = c.get(config.BASE, token, f"/participants?raceId={race_id}")
by_id = {p["id"]: p for p in all_participants}

def adjusted_value(p):
    if p.get("durationMs") is None or (p.get("status") not in (None, "NONE")):
        return None
    return p["durationMs"]

print("=== Los-Modus erstellen und auslosen ===")
status, gm = c.post(config.BASE, token, "/gaudi-modes", {
    "races": [{"raceId": race_id}], "type": "LOS", "name": f"{config.RACE_NAME} Los-Wertung",
})
assert status == 201, gm
gm_id = gm["id"]
status, resp = c.post(config.BASE, token, f"/gaudi-modes/{gm_id}/draw", {})
assert status == 200, resp

status, pairings = c.get(config.BASE, token, f"/gaudi-modes/{gm_id}/pairing")
assert status == 200
print(f"{len(pairings)} Paarungen/Einzel gezogen")

status, ranking = c.get(config.BASE, token, f"/gaudi-modes/{gm_id}/ranking")
assert status == 200, ranking
print(f"{len(ranking)} Paare in der Wertung")

all_values = [v for v in (adjusted_value(p) for p in all_participants) if v is not None]
overall_avg = sum(all_values) / len(all_values)
print(f"\nErwarteter Gesamtdurchschnitt (aus {len(all_values)} gueltigen Werten): {overall_avg:.3f} ms")

expected_pairs, skipped_pairs = [], []
for pairing in pairings:
    p1 = by_id.get(pairing["participant1Id"])
    p2 = by_id.get(pairing.get("participant2Id")) if pairing.get("participant2Id") else None
    v1 = adjusted_value(p1) if p1 else None
    v2 = adjusted_value(p2) if p2 else None
    if v1 is None or (pairing.get("participant2Id") and v2 is None):
        skipped_pairs.append((pairing["participant1Name"], pairing.get("participant2Name")))
        continue
    pair_avg = (v1 + v2) / 2.0 if v2 is not None else v1
    label = f"{pairing['participant1Name']} & {pairing['participant2Name']}" if v2 is not None else f"{pairing['participant1Name']} (Einzel)"
    expected_pairs.append({"label": label, "avg": pair_avg, "diff": abs(pair_avg - overall_avg)})

print(f"gueltige Paare: {len(expected_pairs)}, uebersprungen (DNF/DNS-Partner): {len(skipped_pairs)}")

expected_pairs.sort(key=lambda e: e["diff"])
expected_places, prev, place = [], None, 0
for i, e in enumerate(expected_pairs):
    if prev is None or abs(e["diff"] - prev) > 1e-9:
        place = i + 1
    expected_places.append(place)
    prev = e["diff"]

actual_by_label = {r["label"]: r for r in ranking}
mismatches = []
for e, exp_place in zip(expected_pairs, expected_places):
    actual = actual_by_label.get(e["label"])
    if actual is None:
        mismatches.append((e["label"], "MISSING FROM ACTUAL RANKING"))
        continue
    if actual["place"] != exp_place:
        mismatches.append((e["label"], f"expected place {exp_place}, got {actual['place']}"))
    if abs(actual["valueMs"] - round(e["avg"])) > 1:
        mismatches.append((e["label"], f"expected avg {e['avg']:.1f}, got {actual['valueMs']}"))
    if abs(actual["diffMs"] - round(e["diff"])) > 1:
        mismatches.append((e["label"], f"expected diff {e['diff']:.1f}, got {actual['diffMs']}"))

print(f"\nAbweichungen: {len(mismatches)}")
for m in mismatches[:20]:
    print("  ", m)

status, pdf_bytes = c.get_raw(config.BASE, token, f"/gaudi-modes/{gm_id}/export/pdf")
assert status == 200
with open("los_ranking.pdf", "wb") as f:
    f.write(pdf_bytes)
print(f"\nPDF-Export erfolgreich ({len(pdf_bytes)} bytes)")

print()
print("LOS-MODUS: " + ("KORREKT" if not mismatches and len(ranking) == len(expected_pairs) else "ABWEICHUNGEN GEFUNDEN"))
