"""Phase 2 (run once per station, e.g. `python3 phase2_station_setup.py station1`):
each station creates its own race (matching name/resultUnit/sortDirection to MAIN) and imports
the roster CSV that phase 1 exported from MAIN - giving the station the correct participant
list, with zero results yet.
"""
import sys, json
sys.path.insert(0, '.')
import common as c
import config

key = sys.argv[1]
BASE = config.STATION_BASES[key]
token = c.login(BASE)

name, unit, label, direction, _, station_key = next(r for r in config.RACES if r[5] == key)
roster_file = f"roster_export_{name}.csv"

body = {"name": name, "date": "2025-09-15", "resultUnit": unit, "sortDirection": direction}
if label:
    body["resultUnitLabel"] = label
status, resp = c.post(BASE, token, "/races", body)
assert status == 201, resp
race_id = resp["id"]
print(f"{key}: created race {name} -> id={race_id}")

with open(roster_file, "rb") as f:
    content = f.read()
status, resp = c.post_multipart(
    BASE, token, f"/participants/import-mapped/{race_id}",
    {"format": "CSV"},
    {"file": (roster_file, content, "text/csv")},
)
print(f"{key}: import roster:", status, "imported:", len(resp.get("imported", [])), "errors:", resp.get("errors"))
assert status == 200 and len(resp.get("errors", [])) == 0

status, participants = c.get(BASE, token, f"/participants?raceId={race_id}")
print(f"{key}: participant count = {len(participants)}")

with open(f"state_{key}.json", "w") as f:
    json.dump({"race_id": race_id, "race_name": name}, f, indent=2)
print(f"{key}: done")
