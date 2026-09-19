"""Step 5: Gaudi-Modus Los-Modus over 4 dedicated participants, drawn into pairs by the backend
(random - see config.py for why the exact pairing doesn't matter). Independently recomputes every
returned pairing's "Abweichung" using the FIXED formula (round each side to the printed hundredth,
THEN subtract - matching LosModeCalculator/RankingService#roundForDisplay) and cross-checks it
EXACTLY (no tolerance) against the API response, including the place assigned from it.

Math note: Java's Math.round() rounds a `.5` boundary UP (away from zero), not to-even like Python's
built-in round() - round_for_display() below replicates Java's rule explicitly. 33525/10=3352.5 is
exactly such a boundary among this suite's numbers, so using plain Python round() here would produce
a value that looks "wrong" against the real API response even though the backend is correct.
"""
import math, sys, json
sys.path.insert(0, '.')
import common as c
import config

def round_for_display(value_ms):
    """Java Math.round(value_ms / 10.0) * 10 - round-half-up, not round-half-to-even."""
    return int(math.floor(value_ms / 10.0 + 0.5)) * 10

token = c.login(config.BASE)

print("=== Rennen + 4 Teilnehmer anlegen ===")
status, race = c.post(config.BASE, token, "/races", {
    "name": config.LOS_RACE_NAME, "date": "2026-02-01", "resultUnit": "TIME", "sortDirection": "ASC",
})
assert status == 201, race
race_id = race["id"]

durations_by_lastname = {}
for rn, (first, last, birth_year, duration_ms) in config.LOS_PARTICIPANTS.items():
    status, p = c.post(config.BASE, token, "/persons", {
        "firstName": first, "lastName": last, "birthDate": f"{birth_year}-05-10", "gender": "FEMALE" if rn % 2 else "MALE",
    })
    assert status == 201, p
    status, part = c.post(config.BASE, token, "/participants", {
        "raceId": race_id, "personId": p["id"], "raceNumber": rn, "durationMs": duration_ms,
    })
    assert status == 201, (rn, part)
    durations_by_lastname[last] = duration_ms

print("=== Auslosen ===")
status, gm = c.post(config.BASE, token, "/gaudi-modes", {
    "races": [{"raceId": race_id}], "type": "LOS", "name": "Praezision Los-Wertung",
})
assert status == 201, gm
gm_id = gm["id"]
status, resp = c.post(config.BASE, token, f"/gaudi-modes/{gm_id}/draw", {})
assert status == 200, resp

status, ranking = c.get(config.BASE, token, f"/gaudi-modes/{gm_id}/ranking")
assert status == 200, ranking
print(f"{len(ranking)} Paare in der Wertung (aus {len(config.LOS_PARTICIPANTS)} Teilnehmern)")

overall_average_ms = sum(durations_by_lastname.values()) / len(durations_by_lastname)
overall_display = round_for_display(overall_average_ms)
print(f"Gesamtdurchschnitt: {overall_average_ms}ms -> gedruckt {overall_display}ms")

problems = []
expected_diffs = []
for entry in ranking:
    # label is "Lastname Firstname [& Lastname Firstname]" - both members' raw times are known from
    # durations_by_lastname, so the pairing itself (random) doesn't need to be predicted up front.
    lastnames = [part.split(" ")[0] for part in entry["label"].replace(" (Einzel)", "").split(" & ")]
    values = [durations_by_lastname[ln] for ln in lastnames if ln in durations_by_lastname]
    if len(values) != len(lastnames):
        problems.append(("Unbekannter Name im Los-Ranking", entry["label"]))
        continue

    pair_average_ms = sum(values) / len(values)
    pair_display = round_for_display(pair_average_ms)
    expected_diff = abs(pair_display - overall_display)
    expected_diffs.append(expected_diff)

    # valueMs/referenceMs are the PRINTED averages - rounded once, straight from the raw average to
    # the hundredth (no intermediate rounding to a whole ms).
    if entry.get("valueMs") != pair_display:
        problems.append((entry["label"], "valueMs", f"erwartet {pair_display}", entry.get("valueMs")))
    if entry.get("referenceMs") != overall_display:
        problems.append((entry["label"], "referenceMs", f"erwartet {overall_display}", entry.get("referenceMs")))
    if entry.get("diffMs") != expected_diff:
        problems.append((entry["label"], "diffMs", f"erwartet {expected_diff}", entry.get("diffMs")))

# Standard-competition place assignment (1,2,2,4,...) over the fixed diffDisplay values, best
# (smallest deviation) first - mirrors RankingService#assignStandardPlaces.
order = sorted(range(len(ranking)), key=lambda i: expected_diffs[i]) if len(expected_diffs) == len(ranking) else []
expected_places, prev, place = {}, None, 0
for rank_i, idx in enumerate(order):
    if prev is None or expected_diffs[idx] != prev:
        place = rank_i + 1
    expected_places[ranking[idx]["label"]] = place
    prev = expected_diffs[idx]

for entry in ranking:
    expected_place = expected_places.get(entry["label"])
    if expected_place is not None and entry["place"] != expected_place:
        problems.append((entry["label"], "place", f"erwartet {expected_place}", entry["place"]))

print(f"\nAbweichungen: {len(problems)}")
for p in problems:
    print("  ", p)

status, pdf_bytes = c.get_raw(config.BASE, token, f"/gaudi-modes/{gm_id}/export/pdf")
assert status == 200
with open(c.results_path("los_ranking.pdf"), "wb") as f:
    f.write(pdf_bytes)
print(f"\nPDF-Export erfolgreich ({len(pdf_bytes)} bytes)")

if problems:
    print("\nRUNDUNG E2E-TEST (Los-Modus): ABWEICHUNGEN GEFUNDEN")
    sys.exit(1)
print("\nRUNDUNG E2E-TEST (Los-Modus): KORREKT")
