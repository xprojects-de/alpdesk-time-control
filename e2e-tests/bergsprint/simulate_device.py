"""Step 2: configure the ALPDESK_TIMECONTROL timing provider to point at the fake device
(fake_device.py, must already be running), enable live auto-assign, and simulate the device
accumulating finish times over several polls (each via the real POST /measurements/import path).

Note: auto-assign only actually links measurements to participants once the 5s scheduled-import
tick runs (see enable_scheduled_and_wait.py) - the manual /measurements/import trigger creates
the raw measurements but does NOT run auto-assign by itself."""
import sys, json, random, urllib.request
sys.path.insert(0, '.')
import common as c
import config

random.seed(7)
token = c.login(config.BASE)

print("=== Timing-Provider auf ALPDESK_TIMECONTROL (Fake-Geraet) konfigurieren ===")
status, resp = c.put(config.BASE, token, "/settings/timing-provider", {
    "type": "ALPDESK_TIMECONTROL",
    "config": {"baseUrl": config.DEVICE},
})
print(status, resp)
assert status == 200

status, _ = c.get(config.BASE, token, "/measurements/device-connection")
assert status == 200, "Fake-Geraet nicht erreichbar - laeuft fake_device.py?"

state = json.load(open("state.json"))
race_id = state["race_id"]

print("=== Auto-Assign aktivieren (raceNumber 1 als Start) ===")
status, resp = c.post(config.BASE, token, "/measurements/auto-assign/enable", {"raceId": race_id, "startRaceNumber": 1})
print(status, resp)
assert status == 200

times_ms = {}
for rn in range(1, config.NUM_WITH_DEVICE_TIME + 1):
    minutes = random.uniform(config.MIN_MINUTES, config.MAX_MINUTES)
    times_ms[rn] = int(round(minutes * 60 * 1000))

# Simulates the device accumulating readings over the course of the race - 4 "ticks", each
# fetched via POST /measurements/import (the real HTTP path through TimingDataImporter).
n = config.NUM_WITH_DEVICE_TIME
batches = [range(1, n // 4 + 1), range(1, n // 2 + 1), range(1, 3 * n // 4 + 1), range(1, n + 1)]
for i, batch in enumerate(batches, 1):
    lines = [f"{rn},{times_ms[rn]}.0" for rn in batch]
    body = json.dumps({"lines": lines}).encode()
    req = urllib.request.Request(config.DEVICE + "/admin/set_lines", data=body,
                                  headers={"Content-Type": "application/json"}, method="POST")
    urllib.request.urlopen(req)

    status, resp = c.post(config.BASE, token, "/measurements/import", {})
    print(f"tick {i}: device now reports {len(batch)} lines -> import status={status}, count={len(resp) if isinstance(resp, list) else resp}")
    assert status == 201, resp

status, measurements = c.get(config.BASE, token, "/measurements")
print(f"\nGesamt Messungen in der DB: {len(measurements)}")
print(f"davon zugeordnet: {len([m for m in measurements if m.get('participantId') is not None])} "
      "(erwartungsgemaess 0, solange 'Kontinuierlicher Import' noch nicht lief - siehe naechsten Schritt)")

with open("times_ms.json", "w") as f:
    json.dump(times_ms, f)
print("\ndone")
