"""Step 2 (manual-assign variant): point the ALPDESK_TIMECONTROL provider at the fake device and
let the REAL 5s scheduled poll pull the finish times in - with auto-assign explicitly OFF, so
every measurement lands unassigned, exactly like a race run without live assignment.

The fake device reports its own running finish counter as the line ID (1,2,3... in finish order),
NOT the bib number - that is what a real device does, and it's why the assignment further down
has to be done by hand."""
import sys, json, time, urllib.request
sys.path.insert(0, '.')
import common as c
import manual_config as cfg

token = c.login(cfg.BASE)
state = json.load(open(c.results_path(cfg.STATE_FILE)))
race_id = state["race_id"]
roster = state["roster"]

print("=== Timing-Provider auf ALPDESK_TIMECONTROL (Fake-Geraet) ===")
status, resp = c.put(cfg.BASE, token, "/settings/timing-provider",
                     {"type": "ALPDESK_TIMECONTROL", "config": {"baseUrl": cfg.DEVICE}})
assert status == 200, resp
status, _ = c.get(cfg.BASE, token, "/measurements/device-connection")
assert status == 200, "Fake-Geraet nicht erreichbar - laeuft fake_device.py?"

status, auto = c.get(cfg.BASE, token, "/measurements/auto-assign/status")
print(f"Auto-Assign-Status vor dem Rennen: {auto}")
assert not auto.get("active"), "Auto-Assign darf fuer diesen Ablauf NICHT aktiv sein"

# Finish order = fastest first, which is what a hill sprint's finish beam sees for a mass start;
# device line IDs are 1..N in that order.
finishers = sorted([r for r in roster if r["durationMs"] is not None], key=lambda r: r["durationMs"])
device_lines = [(i + 1, r["raceNumber"], r["durationMs"]) for i, r in enumerate(finishers)]
print(f"{len(device_lines)} Zieldurchfahrten werden das Geraet durchlaufen")

print("=== 'Kontinuierlicher Import' (Polling) einschalten ===")
status, resp = c.put(cfg.BASE, token, "/measurements/scheduled-import?enable=true", None)
assert status == 200, resp

# Times trickle in over 3 waves, each followed by enough wall clock for the 5s poll to pick them
# up (first tick only after the 10s initial delay).
waves = [device_lines[:10], device_lines[:20], device_lines]
for i, wave in enumerate(waves, 1):
    lines = [f"{dev_id},{ms}.0" for dev_id, _rn, ms in wave]
    req = urllib.request.Request(cfg.DEVICE + "/admin/set_lines",
                                 data=json.dumps({"lines": lines}).encode(),
                                 headers={"Content-Type": "application/json"}, method="POST")
    urllib.request.urlopen(req)
    wait = 14 if i == 1 else 7
    print(f"Welle {i}: Geraet meldet jetzt {len(wave)} Zeiten - warte {wait}s auf den Poll-Tick...")
    time.sleep(wait)
    status, measurements = c.get(cfg.BASE, token, "/measurements")
    print(f"  -> Messungen in der DB: {len(measurements)}")

print("=== Polling wieder ausschalten ===")
status, resp = c.put(cfg.BASE, token, "/measurements/scheduled-import?enable=false", None)
assert status == 200, resp

status, measurements = c.get(cfg.BASE, token, "/measurements")
assigned = [m for m in measurements if m.get("participantId") is not None]
print(f"\nMessungen gesamt: {len(measurements)} (erwartet {len(device_lines)})")
print(f"davon zugeordnet: {len(assigned)} (erwartet 0 - ohne Auto-Assign)")

problems = []
if len(measurements) != len(device_lines):
    problems.append(f"Anzahl Messungen {len(measurements)} != {len(device_lines)}")
if assigned:
    problems.append(f"{len(assigned)} Messungen wurden unerwartet zugeordnet")

# MeasurementResponse deliberately carries no deviceMeasurementId (unlike
# RaceMeasurementResponse), so the live rows are matched on the duration itself here - the
# device id is checked once the rows are archived (manual_assign_and_sync.py).
stored = sorted(m["durationMs"] for m in measurements)
expected_durations = sorted(ms for _d, _rn, ms in device_lines)
if stored != expected_durations:
    only_device = [x for x in expected_durations if x not in stored]
    only_db = [x for x in stored if x not in expected_durations]
    problems.append(f"Zeiten weichen ab - nur im Geraet: {only_device}, nur in der DB: {only_db}")

print(f"Abweichungen: {len(problems)}")
for p in problems[:20]:
    print("  ", p)

with open(c.results_path("manual_device_lines.json"), "w") as f:
    json.dump([{"deviceId": d, "raceNumber": rn, "durationMs": ms} for d, rn, ms in device_lines], f, indent=2)
print("\nSCHRITT 2: " + ("OK" if not problems else "ABWEICHUNGEN"))
sys.exit(1 if problems else 0)
