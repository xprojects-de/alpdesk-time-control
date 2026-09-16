"""Phased variant of phase4_export_import.py - run once PER PHASE (1, 2 or 3) after that phase's
phase3_phased_results.py has been run for every station, e.g. `python3
phase4_phased_export_import.py 2`: exports each station's CURRENT (still-partial before phase 3)
results and imports them into MAIN, exactly like the single-shot version does once at the end -
just run 3 times against a growing dataset instead of once against the finished one.

This is the actual point of the "phased" test: does importing an in-progress result set (most
participants still have no result and no explicit status at all after phase 1/2) work without row
errors, and does re-importing the SAME already-imported rows again in a later phase (every
export is the station's full current state, not just what's new) leave already-correct data alone
instead of corrupting it?
"""
import sys, json
sys.path.insert(0, '.')
import common as c
import config

phase = int(sys.argv[1])
assert phase in (1, 2, 3), "phase must be 1, 2 or 3"

main_token = c.login(config.MAIN)
with open("state.json") as f:
    race_ids = json.load(f)["race_ids"]

print(f"=== Phase {phase}/3: Teil-Export/Import je Station ===")
for name, unit, label, direction, csv_file, key in config.RACES:
    BASE = config.STATION_BASES[key]
    token = c.login(BASE)
    with open(f"state_{key}.json") as f:
        station_race_id = json.load(f)["race_id"]

    status, body = c.get_raw(BASE, token, f"/participants/export/results-csv/{station_race_id}")
    fname = f"results_export_{key}_phase{phase}.csv"
    with open(fname, "wb") as f:
        f.write(body)

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
    # The critical assertion for this whole test: a still-pending participant (no result, no
    # explicit status yet) must NOT come back as a row error just because durationMs is empty -
    # exportResultsCsv writes their status as the literal string "NONE", which
    # importResultsByRaceNumber's parseExplicitStatus() recognizes as an explicit (non-null)
    # status, so the row is a harmless no-op update instead of "time is missing".
    assert resp.get("errorCount", 0) == 0, \
        f"Teilimport in Phase {phase} hat Fehler geworfen statt unvollstaendige Zeilen klaglos zu uebernehmen: {resp['errors']}"

    # Cross-check MAIN against the station for every participant, whether or not they have a
    # result yet - a still-pending one must land on MAIN exactly as "no result yet" too, not as
    # some half-written/corrupted state; an already-entered one must match exactly, including
    # ones entered in an EARLIER phase and now being re-imported unchanged (must not have been
    # reverted/duplicated by this phase's import of the station's full, still-growing export).
    _, station_ps = c.get(BASE, token, f"/participants?raceId={station_race_id}")
    _, main_ps = c.get(config.MAIN, main_token, f"/participants?raceId={main_race_id}")
    station_by_rn = {p["raceNumber"]: p for p in station_ps}
    main_by_rn = {p["raceNumber"]: p for p in main_ps}
    fields = ["durationMs", "penalty", "status", "comment"]
    mismatches = [
        (rn, {f: sp.get(f) for f in fields}, {f: main_by_rn[rn].get(f) for f in fields})
        for rn, sp in station_by_rn.items()
        if {f: sp.get(f) for f in fields} != {f: main_by_rn[rn].get(f) for f in fields}
    ]
    pending = sum(1 for p in station_ps if p.get("status") == "NONE" and p.get("durationMs") is None)
    done = len(station_ps) - pending
    print(f"   {name}: {done} mit Ergebnis, {pending} noch offen, {len(mismatches)} Abweichungen zu MAIN")
    assert not mismatches, mismatches

print(f"\nPhase {phase}/3 abgeschlossen: Teilimport ueberall fehlerfrei, MAIN konsistent mit allen Stationen.")
