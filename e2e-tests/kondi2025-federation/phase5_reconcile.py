"""Phase 5: verify every participant's result on MAIN (after phase 4's import) matches exactly
what its station instance had, matched by raceNumber (personId differs across instances since
each created its own Person rows independently)."""
import sys, json
sys.path.insert(0, '.')
import common as c
import config

main_token = c.login(config.MAIN)
with open(c.results_path("state.json")) as f:
    race_ids = json.load(f)["race_ids"]

total_mismatches = 0
for name, unit, label, direction, csv_file, key in config.RACES:
    BASE = config.STATION_BASES[key]
    token = c.login(BASE)
    with open(c.results_path(f"state_{key}.json")) as f:
        station_race_id = json.load(f)["race_id"]

    _, station_ps = c.get(BASE, token, f"/participants?raceId={station_race_id}")
    _, main_ps = c.get(config.MAIN, main_token, f"/participants?raceId={race_ids[name]}")

    station_by_rn = {p["raceNumber"]: p for p in station_ps}
    main_by_rn = {p["raceNumber"]: p for p in main_ps}
    assert set(station_by_rn) == set(main_by_rn), f"{name}: raceNumber sets differ!"

    mismatches = []
    for rn, sp in station_by_rn.items():
        mp = main_by_rn[rn]
        fields = ["durationMs", "penalty", "status", "comment"]
        s_vals = {f: sp.get(f) for f in fields}
        m_vals = {f: mp.get(f) for f in fields}
        if s_vals != m_vals:
            mismatches.append((rn, s_vals, m_vals))

    print(f"{name}: {len(station_by_rn)} participants compared, {len(mismatches)} mismatches")
    for rn, sv, mv in mismatches:
        print(f"   MISMATCH raceNumber={rn}: station={sv} main={mv}")
    total_mismatches += len(mismatches)

print()
print(f"TOTAL MISMATCHES ACROSS ALL RACES: {total_mismatches}")
if total_mismatches:
    sys.exit(f"MAIN weicht in {total_mismatches} Ergebnissen von den Stationen ab")
