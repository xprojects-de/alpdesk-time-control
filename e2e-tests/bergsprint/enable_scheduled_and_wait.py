"""Step 3: enable the 5s scheduled import (the only thing that actually triggers
AutoAssignService.processNewMeasurements()), wait for at least one tick, then disable it again.
Verifies auto-assign linked every device-reported measurement to the right participant by
raceNumber."""
import sys, json, time
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.BASE)
state = json.load(open("state.json"))
race_id = state["race_id"]

print("=== 'Kontinuierlicher Import' aktivieren - das treibt processNewMeasurements() an ===")
status, resp = c.put(config.BASE, token, "/measurements/scheduled-import?enable=true", None)
print(status, resp)
assert status == 200

print("warte auf mindestens einen Scheduler-Tick (alle 5s, initialDelay 10s)...")
time.sleep(16)

status, resp = c.put(config.BASE, token, "/measurements/scheduled-import?enable=false", None)
print("scheduled import deaktiviert:", status, resp)

status, measurements = c.get(config.BASE, token, "/measurements")
assigned = [m for m in measurements if m.get("participantId") is not None]
print(f"Messungen zugeordnet: {len(assigned)} von {len(measurements)}")

times_ms = {int(k): v for k, v in json.load(open("times_ms.json")).items()}
status, participants = c.get(config.BASE, token, f"/participants?raceId={race_id}")
by_participant_id = {p["id"]: p for p in participants}
mismatches = []
for m in measurements:
    pid = m.get("participantId")
    if pid is None:
        mismatches.append(("unassigned measurement", m["id"]))
        continue
    rn = by_participant_id[pid]["raceNumber"]
    if times_ms.get(rn) != m["durationMs"]:
        mismatches.append((rn, times_ms.get(rn), m["durationMs"]))
print(f"Zuordnungs-Abweichungen: {len(mismatches)}")
for m in mismatches[:20]:
    print("  ", m)
