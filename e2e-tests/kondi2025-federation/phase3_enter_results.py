"""Phase 3 (run once per station, e.g. `python3 phase3_enter_results.py station1`):
enters each station's race results ONE PARTICIPANT AT A TIME via PUT /participants/{id}
(never via bulk CSV import) - simulating a timekeeper typing results in at that station.
The CSV's own "status" column (NONE/DNS/DNF/DSQ) is entered as-is; a row with no durationMs and
no explicit status is treated as DNS. config.INJECTED_STATUS can override specific raceNumbers on
top of that, to exercise a status the data does not happen to contain.
"""
import sys, csv, json
sys.path.insert(0, '.')
import common as c
import config

key = sys.argv[1]
BASE = config.STATION_BASES[key]
token = c.login(BASE)
_, _, _, _, csv_file, _ = next(r for r in config.RACES if r[5] == key)
injected_status = config.INJECTED_STATUS.get(key, {})

with open(c.results_path(f"state_{key}.json")) as f:
    state = json.load(f)
race_id = state["race_id"]

status, participants = c.get(BASE, token, f"/participants?raceId={race_id}")
by_race_number = {p["raceNumber"]: p for p in participants if p["raceNumber"] is not None}
print(f"{key}: {len(by_race_number)} participants indexed by raceNumber")

updated = injected_count = 0
status_counts = {}
failures = []
with open(csv_file, newline="", encoding="utf-8") as f:
    reader = csv.DictReader(f, delimiter=";")
    for row in reader:
        rn_raw = (row.get("raceNumber") or "").strip()
        if not rn_raw:
            continue
        rn = int(rn_raw)
        p = by_race_number.get(rn)
        if p is None:
            print(f"  WARNING: raceNumber {rn} from CSV not found among station participants!")
            failures.append(rn)
            continue

        duration_raw = (row.get("durationMs") or "").strip()
        penalty_raw = (row.get("penalty") or "").strip()

        body = {
            "raceId": race_id,
            "personId": p["person"]["id"],
            "raceNumber": rn,
            "teamId": p["team"]["id"] if p.get("team") else None,
            "categoryId": p["category"]["id"] if p.get("category") else None,
        }

        if rn in injected_status:
            status_val, comment = injected_status[rn]
            if duration_raw:
                body["durationMs"] = int(duration_raw)
            if penalty_raw:
                body["penalty"] = int(penalty_raw)
            body["status"] = status_val
            body["comment"] = comment
            injected_count += 1
        else:
            # A status in the CSV wins; without one, a row that carries no result is a DNS.
            csv_status = (row.get("status") or "").strip().upper()
            if not csv_status:
                csv_status = "NONE" if duration_raw else "DNS"
            if duration_raw:
                body["durationMs"] = int(duration_raw)
            if penalty_raw:
                body["penalty"] = int(penalty_raw)
            body["status"] = csv_status
            comment = (row.get("comment") or "").strip()
            if comment:
                body["comment"] = comment
            status_counts[csv_status] = status_counts.get(csv_status, 0) + 1

        st, resp = c.put(BASE, token, f"/participants/{p['id']}", body)
        if st != 200:
            print(f"  FAILED update for raceNumber {rn}: {st} {resp}")
            failures.append(rn)
        else:
            updated += 1

print(f"{key}: updated={updated} from_csv={status_counts} injected_status={injected_count}")
if failures:
    sys.exit(f"{key}: {len(failures)} Ergebnisse nicht eingetragen (raceNumber): {failures}")
