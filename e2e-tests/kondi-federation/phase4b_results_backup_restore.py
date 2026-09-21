"""Phase 4b (run on MAIN once phase4/phase5 have established that MAIN's results already match
every station): for every race, exports MAIN's results via the RESULTS-ONLY CSV export
(/participants/export/results-csv - NOT /export/csv, which also carries the roster/identity data),
clears every participant's result via POST /participants/{id}/clear-result, then restores them
purely via the RESULTS-ONLY import (/participants/import-results-mapped) and checks every
participant's result comes back exactly as it was before the clear. Simulates an operator restoring
a race's results from a CSV backup (e.g. after the database had to be rebuilt) using only the
manual results import/export feature - the participant/roster list itself is never touched.

Why a dedicated clear-result call instead of PUT /participants/{id}: PUT
(ParticipantService#update) always falls back to the participant's EXISTING durationMs/penalty/
measuredAt whenever the request's value is null - there is no way for a JSON body to distinguish
"explicitly clear this" from "field omitted" for those three fields (see that method's own
comment), so PUT alone could never actually null out an already-entered result. clear-result exists
specifically to make that possible (see ParticipantService#clearResult).
"""
import os, sys, json
sys.path.insert(0, '.')
import common as c
import config

main_token = c.login(config.MAIN)
with open(c.results_path("state.json")) as f:
    race_ids = json.load(f)["race_ids"]

RESULT_FIELDS = ["durationMs", "penalty", "status", "comment"]
total_mismatches = 0

for name, unit, label, direction, csv_file, key in config.RACES:
    race_id = race_ids[name]

    # 1) snapshot the current (post phase4/5) state, by raceNumber - this is what must come back
    #    unchanged after the clear + reimport.
    _, before = c.get(config.MAIN, main_token, f"/participants?raceId={race_id}")
    before_by_rn = {p["raceNumber"]: {f: p.get(f) for f in RESULT_FIELDS} for p in before}

    # 2) export via the RESULTS-ONLY CSV export.
    status, body = c.get_raw(config.MAIN, main_token, f"/participants/export/results-csv/{race_id}")
    assert status == 200, status
    fname = c.results_path(f"backup_results_{key}.csv")
    with open(fname, "wb") as f:
        f.write(body)
    print(f"{name}: Ergebnisse exportiert -> {fname} ({len(body)} bytes)")

    # 3) clear every participant's result via the dedicated endpoint - identity columns
    #    (person/team/category/raceNumber) are left untouched.
    cleared_count = 0
    for p in before:
        st, resp = c.post(config.MAIN, main_token, f"/participants/{p['id']}/clear-result", {})
        assert st == 200, (p["id"], st, resp)
        cleared_count += 1
    print(f"{name}: {cleared_count} Teilnehmer-Ergebnisse zurueckgesetzt")

    # sanity check: clear-result only clears durationMs/penalty/measuredAt - comment/status are
    # deliberately preserved (see ParticipantService#clearResult's docstring), so only the former
    # are asserted empty here.
    _, cleared = c.get(config.MAIN, main_token, f"/participants?raceId={race_id}")
    still_set = [p["raceNumber"] for p in cleared if p.get("durationMs") is not None or p.get("penalty") is not None]
    assert not still_set, f"{name}: Ergebnisse nicht vollstaendig geleert, raceNumbers={still_set}"

    # 4) restore purely via the RESULTS-ONLY import (matched by raceNumber, never touches identity).
    status, resp = c.post_multipart(
        config.MAIN, main_token, f"/participants/import-results-mapped/{race_id}",
        {"timeFormat": "CLOCK"},
        {"file": (os.path.basename(fname), body, "text/csv")},
    )
    print(f"{name}: reimport status={status} updated={resp.get('updatedCount')} errors={resp.get('errorCount')}")
    if resp.get("errors"):
        print("   errors:", resp["errors"])
    assert status == 200, (status, resp)
    assert resp.get("errorCount", 0) == 0, resp["errors"]

    # 5) compare against the pre-clear snapshot.
    _, after = c.get(config.MAIN, main_token, f"/participants?raceId={race_id}")
    after_by_rn = {p["raceNumber"]: {f: p.get(f) for f in RESULT_FIELDS} for p in after}
    assert set(before_by_rn) == set(after_by_rn), f"{name}: raceNumber-Menge hat sich veraendert!"

    mismatches = [
        (rn, before_by_rn[rn], after_by_rn[rn])
        for rn in before_by_rn
        if before_by_rn[rn] != after_by_rn[rn]
    ]
    print(f"{name}: {len(before_by_rn)} Teilnehmer verglichen, {len(mismatches)} Abweichungen")
    for rn, bv, av in mismatches:
        print(f"   MISMATCH raceNumber={rn}: vorher={bv} nachher={av}")
    total_mismatches += len(mismatches)

print()
print(f"TOTAL ABWEICHUNGEN NACH EXPORT/LEEREN/REIMPORT: {total_mismatches}")
assert total_mismatches == 0, "Ergebnis-Backup/Restore hat Daten veraendert!"
