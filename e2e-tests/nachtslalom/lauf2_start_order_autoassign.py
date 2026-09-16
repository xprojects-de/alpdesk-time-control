"""Step 4: Lauf 2 - derive its start order from Lauf 1's results (top-3 reversed per gender, see
config.REVERSE_TOP_COUNT), then run the SAME AutoAssignService through that derived order instead
of raceNumber order. This is the other half of AutoAssignService's documented behavior that Lauf 1
didn't exercise: enable() defaulting to the lowest *startSequence* (not the lowest raceNumber), and
processNewMeasurements() matching in that same order.

The derived order is fetched from the API rather than hand-predicted here, but
`expected_order_race_numbers != sorted(expected_order_race_numbers)` is asserted below as a guard:
if that ever became false the rest of this script would still pass even against the old,
unfixed AutoAssignService (which happened to work whenever start order = ascending raceNumber).
"""
import sys, json, time, urllib.request
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.BASE)
state = json.load(open(c.results_path("state.json")))
race2_id = state["race2_id"]
pid = {int(rn): part_id for rn, part_id in state["participants_by_race"][str(race2_id)].items()}
rn_by_pid = {v: k for k, v in pid.items()}


def set_device_lines(lines):
    body = json.dumps({"lines": lines}).encode()
    req = urllib.request.Request(config.DEVICE + "/admin/set_lines", data=body,
                                  headers={"Content-Type": "application/json"}, method="POST")
    urllib.request.urlopen(req)


def wait_for_tick(first=False):
    time.sleep(16 if first else 8)


def auto_assign_status():
    status, resp = c.get(config.BASE, token, "/measurements/auto-assign/status")
    assert status == 200, resp
    return resp


print("=== Startreihenfolge Lauf 2 aus Lauf 1 ableiten (Top-3 je Geschlecht umgekehrt) ===")
status, updated = c.post(
    config.BASE, token, f"/participants/race/{race2_id}/apply-start-order-from-previous-race?includeUnranked=true", {})
assert status == 200, updated
print(f"{len(updated)} Teilnehmer mit startSequence versehen.")

status, participants = c.get(config.BASE, token, f"/participants?raceId={race2_id}")
for p in participants:
    assert p.get("startSequence") is not None, f"bib {p['raceNumber']} hat keine startSequence bekommen: {p}"
expected_order = sorted(participants, key=lambda p: p["startSequence"])
expected_rns = [p["raceNumber"] for p in expected_order]
print("Abgeleitete Startreihenfolge (raceNumber):", expected_rns)
assert expected_rns != sorted(expected_rns), \
    "Startreihenfolge entspricht zufaellig der aufsteigenden Startnummernreihenfolge - Testszenario waere nicht aussagekraeftig"

print("\n=== Zeitmessgeraet fuer Lauf 2 konfigurieren ===")
status, resp = c.put(config.BASE, token, "/settings/timing-provider", {
    "type": "ALPDESK_TIMECONTROL", "config": {"baseUrl": config.DEVICE},
})
assert status == 200, resp

print("\n=== Auto-Assign fuer Lauf 2 aktivieren (kein startRaceNumber -> default folgt startSequence) ===")
status, resp = c.post(config.BASE, token, "/measurements/auto-assign/enable", {"raceId": race2_id})
print(status, resp)
assert status == 200, resp
assert resp.get("nextRaceNumber") == expected_rns[0], \
    f"Erwartet bib {expected_rns[0]} (niedrigste startSequence), bekam {resp.get('nextRaceNumber')} - " \
    "folgt der Cursor faelschlicherweise der Startnummer statt der startSequence?"
print(f"Cursor startet korrekt bei bib {expected_rns[0]} (niedrigste startSequence, NICHT niedrigste Startnummer).")

status, resp = c.put(config.BASE, token, "/measurements/scheduled-import?enable=true", None)
assert status == 200, resp

print("\n=== Die ersten 8 Laeufer (in Start-Reihenfolge) melden sich beim Geraet ===")
first_wave = expected_order[:8]
expected_durations = {}
lines = []
for i, p in enumerate(first_wave, start=1):
    duration = 50_000 + i * 1_000
    lines.append(f"{i},{duration}.0")
    expected_durations[p["raceNumber"]] = duration
set_device_lines(lines)
wait_for_tick(first=True)

status, ms = c.get(config.BASE, token, "/measurements")
assigned_rns = {rn_by_pid[m["participantId"]] for m in ms if m.get("participantId") is not None}
expected_first_wave_rns = {p["raceNumber"] for p in first_wave}
assert assigned_rns == expected_first_wave_rns, \
    f"Erwartet {sorted(expected_first_wave_rns)}, zugeordnet wurden {sorted(assigned_rns)}"
print(f"Alle {len(first_wave)} in korrekter Start-Reihenfolge zugeordnet: {[p['raceNumber'] for p in first_wave]}")

status_resp = auto_assign_status()
assert status_resp.get("nextRaceNumber") == expected_order[8]["raceNumber"], status_resp

print(f"\n=== bib {expected_order[8]['raceNumber']} tritt kurzfristig nicht an (DNS), Cursor wird manuell weitergesetzt ===")
skipped = expected_order[8]
status, part = c.get(config.BASE, token, f"/participants/{skipped['id']}")
status, resp = c.put(config.BASE, token, f"/participants/{skipped['id']}", {
    "raceId": race2_id, "personId": part["person"]["id"], "raceNumber": skipped["raceNumber"],
    "status": "DNS", "comment": "Kurzfristig abgesagt",
})
assert status == 200, resp

next_up = expected_order[9]
status, resp = c.post(config.BASE, token, "/measurements/auto-assign/set-next", {"raceNumber": next_up["raceNumber"]})
print("set-next (gueltig):", status, resp)
assert status == 200 and resp.get("nextRaceNumber") == next_up["raceNumber"], resp

print("\n=== Fehlerfall: set-next mit unbekannter Startnummer ===")
status, resp = c.post(config.BASE, token, "/measurements/auto-assign/set-next", {"raceNumber": config.BOGUS_RACE_NUMBER})
assert status == 400, resp
status_resp = auto_assign_status()
assert status_resp.get("nextRaceNumber") == next_up["raceNumber"], "Cursor haette sich nicht veraendern duerfen"
print("abgelehnt, Cursor unveraendert.")

print("\n=== Die restlichen Laeufer melden sich beim Geraet ===")
remaining = expected_order[9:]
for i, p in enumerate(remaining, start=len(first_wave) + 1):
    duration = 50_000 + i * 1_000
    lines.append(f"{i},{duration}.0")
    expected_durations[p["raceNumber"]] = duration
set_device_lines(lines)
wait_for_tick()

status, ms = c.get(config.BASE, token, "/measurements")
assigned_rns = {rn_by_pid[m["participantId"]] for m in ms if m.get("participantId") is not None}
expected_all_but_dns = {p["raceNumber"] for p in expected_order} - {skipped["raceNumber"]}
assert assigned_rns == expected_all_but_dns, \
    f"Erwartet {sorted(expected_all_but_dns)}, zugeordnet wurden {sorted(assigned_rns)}"
print(f"Alle verbleibenden {len(remaining)} korrekt zugeordnet (bib {skipped['raceNumber']} bleibt unzugeordnet - DNS, uebersprungen).")

status_resp = auto_assign_status()
assert status_resp["active"] is True
assert status_resp.get("nextRaceNumber") is None, status_resp
print("Warteschlange erschoepft.")

print("\n=== Kontinuierlichen Import + Auto-Assign deaktivieren ===")
status, _ = c.put(config.BASE, token, "/measurements/scheduled-import?enable=false", None)
assert status == 200
status, resp = c.post(config.BASE, token, "/measurements/auto-assign/disable", {})
assert status == 200 and resp["active"] is False, resp

with open(c.results_path("lauf2_expected.json"), "w") as f:
    json.dump({
        "expected_order_rns": expected_rns,
        "dns_rn": skipped["raceNumber"],
        "expected_durations_by_rn": expected_durations,
    }, f, indent=2)
print("\nLauf 2 Start-Reihenfolge + Auto-Assign-Tour abgeschlossen.")
