"""Station corrections between breaks - run by run_phased.sh as `python3
phase3b_station_corrections.py add` (after Wettkampf-Phase 1's result entry, before its
export/import) and `python3 phase3b_station_corrections.py remove` (after Wettkampf-Phase 2's result
entry, before its export/import).

Simulates a timekeeper correcting an already-exported result: "add" applies each correction in
CORRECTIONS to one participant at that station (a penalty, or a DSQ with a comment), which phase 1's
export/import carries over to MAIN; "remove" first checks MAIN really has it (otherwise this test
would prove nothing), then takes it back at the station exactly like the participant dialog does
(PUT with penalty=0, or status NONE with the comment removed). Phase 2's export now has a blank
penalty/comment/status cell for that participant, and phase4_phased_export_import.py's
MAIN-vs-station cross-check fails unless the import actually clears MAIN's stale value.

Only participants whose own CSV row has a result and no penalty (and no INJECTED_STATUS) are picked,
so the final data after "remove" is identical to what the unphased run produces - phase 5-10 are
unaffected.
"""
import sys, csv, json
sys.path.insert(0, '.')
import common as c
import config

step = sys.argv[1]
assert step in ("add", "remove"), "step must be add or remove"

# station -> correction applied by "add" and taken back by "remove". Penalty values are in the
# race's own unit (TIME race: ms, POINTS race: hundredths of a point).
CORRECTIONS = {
    "station1": {"penalty": 2000},
    "station2": {"penalty": 150},
    "station3": {"status": "DSQ", "comment": "Regelverstoss"},
}
# What each corrected field is reset to by "remove" (and what the unphased run has for it).
REVERTED = {"penalty": None, "status": "NONE", "comment": None}
STATE_FILE = c.results_path("station_corrections.json")

with open(c.results_path("state.json")) as f:
    main_race_ids = json.load(f)["race_ids"]


def update_body(p, race_id, changes):
    # PUT always overwrites comment with whatever is sent, so carry the existing one over unless
    # it's one of the changed fields. penalty=0 is how the dialog says "remove the penalty".
    body = {
        "raceId": race_id,
        "personId": p["person"]["id"],
        "raceNumber": p["raceNumber"],
        "teamId": p["team"]["id"] if p.get("team") else None,
        "categoryId": p["category"]["id"] if p.get("category") else None,
        "status": p.get("status") or "NONE",
        "comment": p.get("comment"),
    }
    for field, value in changes.items():
        body[field] = 0 if field == "penalty" and value is None else value
    return body


def station_race(key):
    name = next(r[0] for r in config.RACES if r[5] == key)
    with open(c.results_path(f"state_{key}.json")) as f:
        return name, json.load(f)["race_id"]


def assert_fields(label, p, expected):
    actual = {field: p.get(field) for field in expected}
    assert actual == expected, f"{label}: erwartet {expected}, ist {actual}"


if step == "add":
    picked = {}
    for key, correction in CORRECTIONS.items():
        base = config.STATION_BASES[key]
        token = c.login(base)
        name, race_id = station_race(key)
        csv_file = next(r[4] for r in config.RACES if r[5] == key)
        with open(csv_file, newline="", encoding="utf-8") as f:
            neutral_in_csv = {
                int(row["raceNumber"]) for row in csv.DictReader(f, delimiter=";")
                if (row.get("raceNumber") or "").strip()
                and (row.get("durationMs") or "").strip()
                and (row.get("penalty") or "").strip() in ("", "0")
            } - set(config.INJECTED_STATUS.get(key, {}))

        _, participants = c.get(base, token, f"/participants?raceId={race_id}")
        candidate = next((p for p in sorted(participants, key=lambda p: p["raceNumber"] or 0)
                          if p.get("durationMs") is not None and p.get("status") == "NONE"
                          and p.get("penalty") is None and not p.get("comment")
                          and p["raceNumber"] in neutral_in_csv), None)
        assert candidate, f"{key}: kein Teilnehmer mit Ergebnis ohne Strafzeit/Status/Kommentar gefunden"

        st, resp = c.put(base, token, f"/participants/{candidate['id']}", update_body(candidate, race_id, correction))
        assert st == 200, (st, resp)
        assert_fields(f"{key} nach Korrektur", resp, correction)
        picked[key] = candidate["raceNumber"]
        print(f"{key}/{name}: {correction} fuer raceNumber {candidate['raceNumber']} gesetzt")

    with open(STATE_FILE, "w") as f:
        json.dump(picked, f, indent=2)

else:
    with open(STATE_FILE) as f:
        picked = json.load(f)
    main_token = c.login(config.MAIN)
    for key, rn in picked.items():
        correction = CORRECTIONS[key]
        reverted = {field: REVERTED[field] for field in correction}
        base = config.STATION_BASES[key]
        token = c.login(base)
        name, race_id = station_race(key)

        _, main_ps = c.get(config.MAIN, main_token, f"/participants?raceId={main_race_ids[name]}")
        main_p = next(p for p in main_ps if p["raceNumber"] == rn)
        assert_fields(f"{key}: MAIN hat die in der Pause importierte Korrektur nicht - Test waere wertlos",
                      main_p, correction)

        _, participants = c.get(base, token, f"/participants?raceId={race_id}")
        station_p = next(p for p in participants if p["raceNumber"] == rn)
        st, resp = c.put(base, token, f"/participants/{station_p['id']}", update_body(station_p, race_id, reverted))
        assert st == 200, (st, resp)
        assert_fields(f"{key} nach Ruecknahme", resp, reverted)
        print(f"{key}/{name}: {correction} fuer raceNumber {rn} an der Station zurueckgenommen "
              f"(MAIN hat es noch, muss beim naechsten Import verschwinden)")
