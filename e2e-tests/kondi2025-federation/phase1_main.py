"""Phase 1 (run on the MAIN instance): create the 2 age groups, the 4 races, import race 1's
roster from CSV, copy that roster (same raceNumber) into the other 3 races, and export a
per-race roster CSV for each station to import in phase 2.

Prereq: MAIN instance running on config.MAIN_PORT, pointed at a throwaway/isolated database -
never the real production database. Run from this directory so relative CSV paths resolve.
"""
import sys, json
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.MAIN)

# Pre-create BOTH-gender age groups so the CSV import's findOrCreateForImport() reuses these
# instead of auto-creating one gender-split group per (ageGroup label) x gender combination.
# Adjust birth-year ranges/names to match your own event, or delete this block entirely to let
# the import auto-create age groups from the CSV's own "ageGroup" column instead.
# seasonYear has to match the season the races below fall into (date 2025-09-15, default
# 1 January boundary -> season 2025): age groups are configured per season, and the import
# resolves the "Klasse" column against the target race's own season only.
for ag in [
    {"name": "U16", "seasonYear": 2025, "birthYearFrom": 2010, "birthYearTo": 2011, "gender": "BOTH"},
    {"name": "U14", "seasonYear": 2025, "birthYearFrom": 2012, "birthYearTo": 2013, "gender": "BOTH"},
]:
    status, resp = c.post(config.MAIN, token, "/age-groups", ag)
    print(f"age-group {ag['name']}:", status, resp)
    assert status == 201, resp

race_ids = {}
for name, unit, label, direction, _, _ in config.RACES:
    body = {"name": name, "date": "2025-09-15", "resultUnit": unit, "sortDirection": direction}
    if label:
        body["resultUnitLabel"] = label
    status, resp = c.post(config.MAIN, token, "/races", body)
    assert status == 201, resp
    race_ids[name] = resp["id"]
    print(f"created race {name} -> id={resp['id']}")

# Roster-only mapping - explicitly excludes durationMs/penalty/measuredAt so this step imports
# ONLY identity + bib, not race 1's own results (those arrive later via the station round-trip,
# which is the actual thing this test exercises).
ROSTER_MAPPING = json.dumps({
    "lastName": "lastName", "firstName": "firstName", "birthDate": "birthDate",
    "gender": "gender", "ageGroup": "ageGroup", "team": "team", "category": "category",
    "externalId": "externalId", "raceNumber": "raceNumber",
})

first_race_name, _, _, _, first_csv, _ = config.RACES[0]
with open(first_csv, "rb") as f:
    content = f.read()
status, resp = c.post_multipart(
    config.MAIN, token, f"/participants/import-mapped/{race_ids[first_race_name]}",
    {"format": "CSV", "mapping": ROSTER_MAPPING},
    {"file": (first_csv, content, "text/csv")},
)
print(f"import into {first_race_name}:", status, "imported:", len(resp.get("imported", [])), "errors:", resp.get("errors"))
assert status == 200

status, ags = c.get(config.MAIN, token, "/age-groups")
print("age groups after import:", [(a["name"], a["gender"], a["birthYearFrom"], a["birthYearTo"]) for a in ags])

other_names = [n for n, *_ in config.RACES if n != first_race_name]
other_ids = [race_ids[n] for n in other_names]
status, resp = c.post(config.MAIN, token, "/participants/copy", {
    "sourceRaceId": race_ids[first_race_name],
    "targetRaceIds": other_ids,
    "carryStartNumber": True,  # required so results can later be matched by raceNumber across races
})
print("copy result:", status, resp)
assert status == 200

counts = {}
for name in race_ids:
    status, resp = c.get(config.MAIN, token, f"/participants?raceId={race_ids[name]}")
    counts[name] = len(resp)
print("participant counts per race:", counts)
assert len(set(counts.values())) == 1, "roster mismatch across races!"

for name, rid in race_ids.items():
    status, body = c.get_raw(config.MAIN, token, f"/participants/export/csv/{rid}")
    fname = c.results_path(f"roster_export_{name}.csv")
    with open(fname, "wb") as f:
        f.write(body)
    print(f"exported roster for {name} -> {fname} ({len(body)} bytes)")

with open(c.results_path("state.json"), "w") as f:
    json.dump({"race_ids": race_ids}, f, indent=2)
print("done. state saved to state.json")
