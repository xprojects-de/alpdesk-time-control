"""Phase 8: create a Gaudi-Modus (Punkte-Mischwertung / POINTS_COMBINATION) over all races with
weight 1.0 each, WITHOUT an explicit pointsScaleId (exercises the default-FIS-Schema fallback),
and independently verify every person's total points and place by recomputing per-race places
and looking them up on the same FIS-Schema table the backend seeds by default."""
import sys, json
sys.path.insert(0, '.')
import common as c
import config
from phase6_verify_rankings import compute_expected_places, RACE_DIRECTIONS

token = c.login(config.MAIN)
race_ids = json.load(open("state.json"))["race_ids"]

# The FIS-Schema seeded by Flyway migration V1 (31 places; anything beyond that scores 0).
FIS_SCHEMA = [100,80,60,50,45,40,36,32,29,26,24,22,20,18,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]
def points_for_place(place):
    idx = place - 1
    return FIS_SCHEMA[idx] if 0 <= idx < len(FIS_SCHEMA) else 0

per_race = {}
for race_name, direction in RACE_DIRECTIONS.items():
    race_id = race_ids[race_name]
    _, participants = c.get(config.MAIN, token, f"/participants?raceId={race_id}")
    places_by_ext, _ = compute_expected_places(participants, direction)
    by_person = {p["person"]["id"]: p for p in participants}
    places_by_person = {p["person"]["id"]: places_by_ext[p["person"]["externalId"]]
                         for p in participants if p["person"]["externalId"] in places_by_ext}
    per_race[race_name] = {"participants_by_person": by_person, "places_by_person": places_by_person}

all_person_ids = set()
for race_name in RACE_DIRECTIONS:
    all_person_ids |= set(per_race[race_name]["participants_by_person"].keys())

expected_totals = {}
for pid in all_person_ids:
    complete, total = True, 0
    for race_name in RACE_DIRECTIONS:
        place = per_race[race_name]["places_by_person"].get(pid)
        if place is None:
            complete = False
            break
        total += points_for_place(place)
    if complete:
        expected_totals[pid] = total

print(f"Expected: {len(expected_totals)} of {len(all_person_ids)} persons complete in all races and thus scored")

races_body = [{"raceId": race_ids[n]} for n in RACE_DIRECTIONS]
status, gm = c.post(config.MAIN, token, "/gaudi-modes", {
    "races": races_body, "type": "POINTS_COMBINATION", "name": "Gesamtwertung",
})
print("create gaudi-mode:", status, gm)
assert status == 201, gm
gm_id = gm["id"]

status, ranking = c.get(config.MAIN, token, f"/gaudi-modes/{gm_id}/ranking")
assert status == 200, ranking
print(f"actual ranking entries: {len(ranking)}")

actual_totals = {e["personId"]: e["totalPoints"] for e in ranking}
mismatches = [(pid, exp, actual_totals.get(pid)) for pid, exp in expected_totals.items() if actual_totals.get(pid) != exp]
missing = set(expected_totals) - set(actual_totals)
extra = set(actual_totals) - set(expected_totals)

print(f"total-point mismatches: {len(mismatches)}")
for m in mismatches[:15]:
    print("  ", m)
print(f"missing from actual ranking: {missing}")
print(f"extra in actual ranking: {extra}")

sorted_pairs = sorted(expected_totals.items(), key=lambda kv: -kv[1])
expected_places, prev, place = {}, None, 0
for i, (pid, tot) in enumerate(sorted_pairs):
    if prev is None or tot != prev:
        place = i + 1
    expected_places[pid] = place
    prev = tot

actual_places = {e["personId"]: e["place"] for e in ranking}
place_mismatches = [(pid, expected_places[pid], actual_places.get(pid)) for pid in expected_places if actual_places.get(pid) != expected_places[pid]]
print(f"place mismatches: {len(place_mismatches)}")
for m in place_mismatches[:15]:
    print("  ", m)

ok = not mismatches and not missing and not extra and not place_mismatches
print()
print("GAUDI PUNKTE-MISCHUNG: " + ("KORREKT" if ok else "ABWEICHUNGEN GEFUNDEN"))

status, pdf_bytes = c.get_raw(config.MAIN, token, f"/gaudi-modes/{gm_id}/export/pdf")
print(f"PDF export status={status} size={len(pdf_bytes) if isinstance(pdf_bytes, (bytes, bytearray)) else 'N/A'}")
if isinstance(pdf_bytes, (bytes, bytearray)):
    with open("gaudi_combo.pdf", "wb") as f:
        f.write(pdf_bytes)

with open("gaudi_state.json", "w") as f:
    json.dump({"gm_id": gm_id, "expected_totals": expected_totals, "expected_places": expected_places}, f)
