"""Phased variant of phase3_enter_results.py - run once per station PER PHASE (1, 2 or 3), e.g.
`python3 phase3_phased_results.py station1 1`: enters results for only a THIRD of that station's
CSV rows (in file order), simulating a timekeeper who has only gotten through part of the field by
the first break. Everyone not yet reached in this or an earlier phase is left completely
untouched (still no result at all, not even an explicit status) - phase4_phased_export_import.py
is what actually verifies that exporting/importing that in-progress state doesn't error or corrupt
anything. Calling this 3 times with phase=1,2,3 (in order) ends up entering exactly the same
results as the single-shot phase3_enter_results.py, just spread out.
"""
import sys, csv, json
sys.path.insert(0, '.')
import common as c
import config

key = sys.argv[1]
phase = int(sys.argv[2])
assert phase in (1, 2, 3), "phase must be 1, 2 or 3"

BASE = config.STATION_BASES[key]
token = c.login(BASE)
_, _, _, _, csv_file, _ = next(r for r in config.RACES if r[5] == key)
injected_status = config.INJECTED_STATUS.get(key, {})

with open(c.results_path(f"state_{key}.json")) as f:
    state = json.load(f)
race_id = state["race_id"]

status, participants = c.get(BASE, token, f"/participants?raceId={race_id}")
by_race_number = {p["raceNumber"]: p for p in participants if p["raceNumber"] is not None}

with open(csv_file, newline="", encoding="utf-8") as f:
    rows = [row for row in csv.DictReader(f, delimiter=";") if (row.get("raceNumber") or "").strip()]

# Same 3 chunks every time this is called (independent of `phase`), so phase=1,2,3 each pick a
# disjoint, deterministic third of the field - in CSV/start order, i.e. "whoever went through this
# station first is done first".
chunk_size = (len(rows) + 2) // 3
chunks = [rows[0:chunk_size], rows[chunk_size:2 * chunk_size], rows[2 * chunk_size:]]
this_phase_rows = chunks[phase - 1]

updated = dns_count = injected_count = 0
failures = []
for row in this_phase_rows:
    rn = int(row["raceNumber"].strip())
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
    elif not duration_raw:
        body["status"] = "DNS"
        dns_count += 1
    else:
        body["durationMs"] = int(duration_raw)
        if penalty_raw:
            body["penalty"] = int(penalty_raw)
        body["status"] = "NONE"

    st, resp = c.put(BASE, token, f"/participants/{p['id']}", body)
    if st != 200:
        print(f"  FAILED update for raceNumber {rn}: {st} {resp}")
        failures.append(rn)
    else:
        updated += 1

remaining = len(rows) - sum(len(ch) for ch in chunks[:phase])
print(f"{key} Phase {phase}/3: updated={updated} dns_set={dns_count} injected_status={injected_count} "
      f"(noch {remaining} Teilnehmer ohne Ergebnis, folgen in einer spaeteren Phase)")
if failures:
    sys.exit(f"{key}: {len(failures)} Ergebnisse nicht eingetragen (raceNumber): {failures}")
