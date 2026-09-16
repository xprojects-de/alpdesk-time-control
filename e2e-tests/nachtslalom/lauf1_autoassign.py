"""Step 2: Lauf 1 - the full AutoAssignService combination/error-case tour, live against the real
device-import path (fake_device.py) and the real 5s scheduler tick.

Covers (see README.md for the narrative):
  - enable() defaulting to the lowest raceNumber (no startSequence exists yet in Lauf 1)
  - normal device-driven auto-assign (bib 1-3)
  - a manual after-the-fact correction of two auto-assigned measurements (bib2/bib3 swapped),
    and that the correction SURVIVES the device re-reporting the same (unchanged) data on the next
    tick - regression for MeasurementService#update preserving deviceMeasurementId (fix #1)
  - a participant marked DNF/DNS/DSQ while the auto-assign cursor is sitting exactly on them,
    both via explicit skip() (bib 4) and via discardOldestStart() (bib 5) - regression for
    AutoAssignService.firstAfter no longer freezing on an excluded cursor (fix #2)
  - a manual set-next() override that skips two participants ahead (bib 7/8), plus the invalid-
    raceNumber error case
  - queue exhaustion (nextRaceNumber becomes null once everyone has been matched)
  - disable()
"""
import sys, json, time, urllib.request
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.BASE)
state = json.load(open("state.json"))
race1_id = state["race1_id"]
pid = {int(rn): part_id for rn, part_id in state["participants_by_race"][str(race1_id)].items()}


def set_device_lines(lines):
    body = json.dumps({"lines": lines}).encode()
    req = urllib.request.Request(config.DEVICE + "/admin/set_lines", data=body,
                                  headers={"Content-Type": "application/json"}, method="POST")
    urllib.request.urlopen(req)


def wait_for_tick(first=False):
    """The scheduler ticks every 5s with a 10s initial delay - the first wait after enabling needs
    to cover that initial delay, subsequent waits just need to cover one more 5s cycle."""
    time.sleep(16 if first else 8)


def measurements_by_participant():
    status, ms = c.get(config.BASE, token, "/measurements")
    assert status == 200, ms
    return ms


def auto_assign_status():
    status, resp = c.get(config.BASE, token, "/measurements/auto-assign/status")
    assert status == 200, resp
    return resp


print("=== Zeitmessgeraet konfigurieren (Fake-Geraet) ===")
status, resp = c.put(config.BASE, token, "/settings/timing-provider", {
    "type": "ALPDESK_TIMECONTROL", "config": {"baseUrl": config.DEVICE},
})
assert status == 200, resp
status, _ = c.get(config.BASE, token, "/measurements/device-connection")
assert status == 200, "Fake-Geraet nicht erreichbar - laeuft fake_device.py?"

print("\n=== Auto-Assign fuer Lauf 1 aktivieren (kein startRaceNumber -> default) ===")
status, resp = c.post(config.BASE, token, "/measurements/auto-assign/enable", {"raceId": race1_id})
print(status, resp)
assert status == 200, resp
assert resp.get("nextRaceNumber") == 1, "Erwartet: bib 1 (niedrigste raceNumber, noch keine startSequence in Lauf 1)"

print("\n=== Kontinuierlichen Import aktivieren ===")
status, resp = c.put(config.BASE, token, "/measurements/scheduled-import?enable=true", None)
assert status == 200, resp

print("\n=== Bib 1-3 melden sich beim Geraet (in Ankunftsreihenfolge 1,2,3) ===")
lines = [f"{i},{config.RAW_DEVICE_TIMES_MS[bib]}.0" for i, bib in enumerate([1, 2, 3], start=1)]
set_device_lines(lines)
wait_for_tick(first=True)

ms = measurements_by_participant()
assigned = {m["participantId"]: m for m in ms if m.get("participantId") is not None}
assert len(ms) == 3, ms
for bib in (1, 2, 3):
    assert pid[bib] in assigned, f"bib {bib} wurde nicht zugeordnet: {ms}"
    assert assigned[pid[bib]]["durationMs"] == config.RAW_DEVICE_TIMES_MS[bib]
print(f"bib 1-3 korrekt zugeordnet ({len(ms)} Messungen).")
status_resp = auto_assign_status()
assert status_resp.get("nextRaceNumber") == 4, status_resp
print("naechste erwartete Startnummer:", status_resp.get("nextRaceNumber"))

print("\n=== Zielrichter-Korrektur: bib 2 und bib 3 wurden vom Geraet vertauscht erfasst ===")
bib2, bib3 = config.SWAP_BIBS
m_for_bib2 = next(m for m in ms if m.get("participantId") == pid[bib2])
m_for_bib3 = next(m for m in ms if m.get("participantId") == pid[bib3])
for m, new_participant_id in [(m_for_bib2, pid[bib3]), (m_for_bib3, pid[bib2])]:
    status, resp = c.put(config.BASE, token, f"/measurements/{m['id']}", {
        "participantId": new_participant_id, "durationMs": m["durationMs"], "measuredAt": m["measuredAt"],
    })
    assert status == 200, resp
print(f"Messung {m_for_bib2['id']} -> Teilnehmer bib{bib3}, Messung {m_for_bib3['id']} -> Teilnehmer bib{bib2}")

print("\n=== Geraet meldet unveraendert dieselben Daten erneut (naechster Tick) ===")
wait_for_tick()
ms = measurements_by_participant()
assert len(ms) == 3, f"Korrektur haette KEINE neue/doppelte Messung erzeugen duerfen: {ms}"
by_id = {m["id"]: m for m in ms}
assert by_id[m_for_bib2["id"]]["participantId"] == pid[bib3], "Korrektur wurde vom Re-Poll rueckgaengig gemacht!"
assert by_id[m_for_bib3["id"]]["participantId"] == pid[bib2], "Korrektur wurde vom Re-Poll rueckgaengig gemacht!"
print("Korrektur hat den erneuten Import ueberlebt, keine Duplikate entstanden. (Regression Fix #1)")

print(f"\n=== Bib {config.DNF_BIB} stuerzt genau, waehrend der Auto-Assign-Cursor auf ihm steht (DNF) ===")
status_resp = auto_assign_status()
assert status_resp.get("nextRaceNumber") == config.DNF_BIB, status_resp
status, part = c.get(config.BASE, token, f"/participants/{pid[config.DNF_BIB]}")
status, resp = c.put(config.BASE, token, f"/participants/{pid[config.DNF_BIB]}", {
    "raceId": race1_id, "personId": part["person"]["id"], "raceNumber": config.DNF_BIB,
    "status": "DNF", "comment": "Sturz im Steilhang",
})
assert status == 200, resp
status, resp = c.post(config.BASE, token, "/measurements/auto-assign/skip", {})
assert status == 200, resp
assert resp.get("nextRaceNumber") == config.DNF_BIB + 1, \
    f"Cursor haette zu bib {config.DNF_BIB + 1} weiterspringen muessen, blieb aber bei {resp.get('nextRaceNumber')} (Regression Fix #2)"
print("Cursor korrekt weitergesprungen auf bib", resp.get("nextRaceNumber"), "(Regression Fix #2)")

print(f"\n=== Bib {config.DISCARD_BIB} ist ein Fehlstart - Geraet verwirft den Trigger ===")
status, part = c.get(config.BASE, token, f"/participants/{pid[config.DISCARD_BIB]}")
status, resp = c.put(config.BASE, token, f"/participants/{pid[config.DISCARD_BIB]}", {
    "raceId": race1_id, "personId": part["person"]["id"], "raceNumber": config.DISCARD_BIB,
    "status": "DNS", "comment": "Fehlstart, nicht angetreten",
})
assert status == 200, resp

# Toggle scheduled-import off for this maneuver so a scheduler tick can't race with set_lines()+
# discard() and accidentally import the bogus trigger before it gets discarded.
status, _ = c.put(config.BASE, token, "/measurements/scheduled-import?enable=false", None)
assert status == 200
set_device_lines(["9999,1000.0"] + lines)  # bogus trigger prepended = oldest = what /discard pops
status, resp = c.post(config.BASE, token, "/measurements/discard", {})
print("discardOldestStart():", status, resp)
assert status == 200, resp
set_device_lines(lines)  # device back to its real, already-imported lines
status_resp = auto_assign_status()
assert status_resp.get("nextRaceNumber") == config.DISCARD_BIB + 1, \
    f"discardOldestStart() haette den Auto-Assign-Cursor mitschieben muessen: {status_resp}"
print("Cursor korrekt weitergesprungen auf bib", status_resp.get("nextRaceNumber"), "(discardOldestStart() advances auto-assign too)")
status, _ = c.put(config.BASE, token, "/measurements/scheduled-import?enable=true", None)
assert status == 200

print("\n=== Bib 6 meldet sich beim Geraet ===")
lines.append(f"4,{config.RAW_DEVICE_TIMES_MS[6]}.0")
set_device_lines(lines)
wait_for_tick()
ms = measurements_by_participant()
assigned = {m["participantId"]: m for m in ms if m.get("participantId") is not None}
assert pid[6] in assigned and assigned[pid[6]]["durationMs"] == config.RAW_DEVICE_TIMES_MS[6]
status_resp = auto_assign_status()
assert status_resp.get("nextRaceNumber") == 7, status_resp
print("bib 6 korrekt zugeordnet, Cursor jetzt bei bib 7 (erste Dame).")

print(f"\n=== Bib {config.SKIP_AHEAD_BIBS} sind gemeinsam zurueckgezogen - Trainer meldet es vorab ===")
for bib in config.SKIP_AHEAD_BIBS:
    status, part = c.get(config.BASE, token, f"/participants/{pid[bib]}")
    status, resp = c.put(config.BASE, token, f"/participants/{pid[bib]}", {
        "raceId": race1_id, "personId": part["person"]["id"], "raceNumber": bib,
        "status": "DNS", "comment": "Gemeinsam zurueckgezogen",
    })
    assert status == 200, resp

status, resp = c.post(config.BASE, token, "/measurements/auto-assign/set-next", {"raceNumber": config.SKIP_AHEAD_TO_BIB})
print("set-next (gueltig):", status, resp)
assert status == 200 and resp.get("nextRaceNumber") == config.SKIP_AHEAD_TO_BIB, resp

print("\n=== Fehlerfall: set-next mit unbekannter Startnummer ===")
status, resp = c.post(config.BASE, token, "/measurements/auto-assign/set-next", {"raceNumber": config.BOGUS_RACE_NUMBER})
print("set-next (ungueltig):", status, resp)
assert status == 400, resp
status_resp = auto_assign_status()
assert status_resp.get("nextRaceNumber") == config.SKIP_AHEAD_TO_BIB, \
    "ein fehlgeschlagener set-next darf den Cursor nicht veraendert haben"

print("\n=== Bib 9-12 melden sich beim Geraet ===")
for i, bib in enumerate([9, 10, 11, 12], start=5):
    lines.append(f"{i},{config.RAW_DEVICE_TIMES_MS[bib]}.0")
set_device_lines(lines)
wait_for_tick()
ms = measurements_by_participant()
assigned = {m["participantId"]: m for m in ms if m.get("participantId") is not None}
for bib in (9, 10, 11, 12):
    assert pid[bib] in assigned and assigned[pid[bib]]["durationMs"] == config.RAW_DEVICE_TIMES_MS[bib], \
        f"bib {bib} falsch oder nicht zugeordnet"
print(f"bib 9-12 korrekt zugeordnet. Insgesamt {len(ms)} Messungen in Lauf 1.")

status_resp = auto_assign_status()
assert status_resp["active"] is True
assert status_resp.get("nextRaceNumber") is None, \
    f"Warteschlange sollte erschoepft sein (alle Startnummern durch), ist aber noch bei {status_resp.get('nextRaceNumber')}"
print("Warteschlange erschoepft (nextRaceNumber == null), wie erwartet.")

print("\n=== Kontinuierlichen Import + Auto-Assign deaktivieren ===")
status, _ = c.put(config.BASE, token, "/measurements/scheduled-import?enable=false", None)
assert status == 200
status, resp = c.post(config.BASE, token, "/measurements/auto-assign/disable", {})
assert status == 200 and resp["active"] is False, resp
print("Auto-Assign deaktiviert.")

with open("lauf1_lines.json", "w") as f:
    json.dump(lines, f)
print("\nLauf 1 Auto-Assign-Tour abgeschlossen (alle Kombinationen + Fehlerfaelle OK).")
