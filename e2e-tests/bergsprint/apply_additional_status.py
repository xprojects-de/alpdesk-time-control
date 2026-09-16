"""Optional step: apply config.ADDITIONAL_STATUS_OVERRIDES on top of already-synced results -
useful for re-testing DNF/DNS handling on previously-valid results (e.g. removing the current
leader of a category) without redoing the whole device-import workflow."""
import sys, json
sys.path.insert(0, '.')
import common as c
import config

if not config.ADDITIONAL_STATUS_OVERRIDES:
    print("config.ADDITIONAL_STATUS_OVERRIDES is empty - nothing to do. Edit config.py to add some.")
    sys.exit(0)

token = c.login(config.BASE)
state = json.load(open("state.json"))
race_id = state["race_id"]

status, participants = c.get(config.BASE, token, f"/participants?raceId={race_id}")
by_rn = {p["raceNumber"]: p for p in participants}

for rn, (status_val, comment) in config.ADDITIONAL_STATUS_OVERRIDES.items():
    p = by_rn[rn]
    body = {
        "raceId": race_id, "personId": p["person"]["id"], "raceNumber": rn,
        "categoryId": p.get("category", {}).get("id") if p.get("category") else None,
        "status": status_val, "comment": comment,
    }
    if status_val == "DNF" and p.get("durationMs") is not None:
        body["durationMs"] = p["durationMs"]
    st, resp = c.put(config.BASE, token, f"/participants/{p['id']}", body)
    print(rn, status_val, st, resp.get("status"), resp.get("durationMs"))
