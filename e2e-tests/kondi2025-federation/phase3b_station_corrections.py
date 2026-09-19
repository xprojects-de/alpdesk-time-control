"""Station corrections between breaks - run by run_phased.sh as `python3
phase3b_station_corrections.py add` (after Wettkampf-Phase 1's result entry, before its
export/import) and `python3 phase3b_station_corrections.py remove` (after Wettkampf-Phase 2's result
entry, before its export/import).

Simulates a timekeeper correcting an already-exported result: "add" gives one participant at each
station in CORRECTED_STATIONS a penalty, which phase 1's export/import carries over to MAIN; "remove"
first checks MAIN really has that penalty (otherwise this test would prove nothing), then removes it
again at the station (PUT with penalty=0, exactly like the participant dialog does). Phase 2's
export now has a blank penalty cell for that participant, and phase4_phased_export_import.py's
MAIN-vs-station cross-check fails unless the import actually clears MAIN's stale penalty.

Only participants whose own CSV row has no penalty are picked, so the final data after "remove" is
identical to what the unphased run produces - phase 5-10 are unaffected.
"""
import sys, csv, json
sys.path.insert(0, '.')
import common as c
import config

step = sys.argv[1]
assert step in ("add", "remove"), "step must be add or remove"

# station -> penalty to add (TIME race: ms, POINTS race: hundredths of a point)
CORRECTED_STATIONS = {"station1": 2000, "station2": 150}
STATE_FILE = c.results_path("station_corrections.json")

with open(c.results_path("state.json")) as f:
    main_race_ids = json.load(f)["race_ids"]


def update_body(p, race_id, penalty):
    # PUT always overwrites comment with whatever is sent, so carry the existing one over.
    return {
        "raceId": race_id,
        "personId": p["person"]["id"],
        "raceNumber": p["raceNumber"],
        "teamId": p["team"]["id"] if p.get("team") else None,
        "categoryId": p["category"]["id"] if p.get("category") else None,
        "penalty": penalty,
        "status": p.get("status") or "NONE",
        "comment": p.get("comment"),
    }


if step == "add":
    picked = {}
    for key, penalty in CORRECTED_STATIONS.items():
        base = config.STATION_BASES[key]
        token = c.login(base)
        name, _, _, _, csv_file, _ = next(r for r in config.RACES if r[5] == key)
        with open(c.results_path(f"state_{key}.json")) as f:
            race_id = json.load(f)["race_id"]
        with open(csv_file, newline="", encoding="utf-8") as f:
            no_penalty_in_csv = {
                int(row["raceNumber"]) for row in csv.DictReader(f, delimiter=";")
                if (row.get("raceNumber") or "").strip() and (row.get("penalty") or "").strip() in ("", "0")
            }

        _, participants = c.get(base, token, f"/participants?raceId={race_id}")
        candidate = next((p for p in sorted(participants, key=lambda p: p["raceNumber"] or 0)
                          if p.get("durationMs") is not None and p.get("status") == "NONE"
                          and p.get("penalty") is None and p["raceNumber"] in no_penalty_in_csv), None)
        assert candidate, f"{key}: kein Teilnehmer mit Ergebnis ohne Strafzeit gefunden"

        st, resp = c.put(base, token, f"/participants/{candidate['id']}", update_body(candidate, race_id, penalty))
        assert st == 200, (st, resp)
        assert resp.get("penalty") == penalty, resp
        picked[key] = {"raceNumber": candidate["raceNumber"], "penalty": penalty}
        print(f"{key}/{name}: Strafzeit {penalty} fuer raceNumber {candidate['raceNumber']} gesetzt")

    with open(STATE_FILE, "w") as f:
        json.dump(picked, f, indent=2)

else:
    with open(STATE_FILE) as f:
        picked = json.load(f)
    main_token = c.login(config.MAIN)
    for key, entry in picked.items():
        base = config.STATION_BASES[key]
        token = c.login(base)
        name = next(r[0] for r in config.RACES if r[5] == key)
        rn, penalty = entry["raceNumber"], entry["penalty"]

        _, main_ps = c.get(config.MAIN, main_token, f"/participants?raceId={main_race_ids[name]}")
        main_p = next(p for p in main_ps if p["raceNumber"] == rn)
        assert main_p.get("penalty") == penalty, \
            f"{key}: MAIN hat die in der Pause importierte Strafzeit nicht ({main_p.get('penalty')} statt {penalty}) - Test waere wertlos"

        with open(c.results_path(f"state_{key}.json")) as f:
            race_id = json.load(f)["race_id"]
        _, participants = c.get(base, token, f"/participants?raceId={race_id}")
        station_p = next(p for p in participants if p["raceNumber"] == rn)
        st, resp = c.put(base, token, f"/participants/{station_p['id']}", update_body(station_p, race_id, 0))
        assert st == 200, (st, resp)
        assert resp.get("penalty") is None, resp
        print(f"{key}/{name}: Strafzeit fuer raceNumber {rn} an der Station wieder entfernt "
              f"(MAIN hat noch {main_p.get('penalty')}, muss beim naechsten Import verschwinden)")
