"""Phase 4 (run on MAIN once all stations are done): export each station's RESULTS-ONLY CSV and
import it back into the matching race on MAIN via import-results-mapped (matched by raceNumber),
simulating each station handing its results back to the main instance after the event.
"""
import sys, json
sys.path.insert(0, '.')
import common as c
import config

main_token = c.login(config.MAIN)
with open("state.json") as f:
    race_ids = json.load(f)["race_ids"]

for name, unit, label, direction, csv_file, key in config.RACES:
    BASE = config.STATION_BASES[key]
    token = c.login(BASE)
    with open(f"state_{key}.json") as f:
        station_race_id = json.load(f)["race_id"]

    status, body = c.get_raw(BASE, token, f"/participants/export/results-csv/{station_race_id}")
    fname = f"results_export_{key}.csv"
    with open(fname, "wb") as f:
        f.write(body)
    print(f"{key}: exported results -> {fname} ({len(body)} bytes)")

    main_race_id = race_ids[name]
    status, resp = c.post_multipart(
        config.MAIN, main_token, f"/participants/import-results-mapped/{main_race_id}",
        {"timeFormat": "CLOCK"},
        {"file": (fname, body, "text/csv")},
    )
    print(f"{key} -> MAIN/{name}: import status={status} updated={resp.get('updatedCount')} errors={resp.get('errorCount')}")
    if resp.get("errors"):
        print("   errors:", resp["errors"])
    assert status == 200, (status, resp)
    assert resp.get("errorCount", 0) == 0, resp["errors"]

print("all station results imported into MAIN")
