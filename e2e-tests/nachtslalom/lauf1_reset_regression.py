"""Step 3: finish Lauf 1 - back up, archive+sync results onto the participants, then the two
reset-time regressions this whole scenario exists to pin down:

  - archive-measurements refusing to touch the DB when the safety pull can't reach the device
    (fix #6) - simulated by pointing the timing provider at a port nothing listens on.
  - a manually entered measurement surviving a device measurement reusing the same low id right
    after a reset (fix #1) - both the app's own sequence and the device's own counter restart at 1
    together whenever an operator resets/archives-and-clears, which is exactly the historical bug
    this test pins down.
"""
import sys, json, urllib.request
sys.path.insert(0, '.')
import common as c
import config


def set_device_lines(lines):
    body = json.dumps({"lines": lines}).encode()
    req = urllib.request.Request(config.DEVICE + "/admin/set_lines", data=body,
                                  headers={"Content-Type": "application/json"}, method="POST")
    urllib.request.urlopen(req)

token = c.login(config.BASE)
state = json.load(open("state.json"))
race1_id = state["race1_id"]
pid = {int(rn): part_id for rn, part_id in state["participants_by_race"][str(race1_id)].items()}

print("=== Messungen Lauf 1 als CSV sichern ===")
status, body = c.get_raw(config.BASE, token, "/measurements/export/csv")
assert status == 200
with open("lauf1_measurements_backup.csv", "wb") as f:
    f.write(body)
print(f"Backup exportiert: {len(body)} bytes")

print("\n=== Regression Fix #6: Geraet beim Archivieren+Reset nicht erreichbar ===")
status, resp = c.put(config.BASE, token, "/settings/timing-provider", {
    "type": "ALPDESK_TIMECONTROL", "config": {"baseUrl": config.UNREACHABLE_DEVICE},
})
assert status == 200, resp

expected_measurement_count = len(config.RAW_DEVICE_TIMES_MS)  # bib4/5/7/8 never got a device time

status, before = c.get(config.BASE, token, "/measurements")
assert len(before) == expected_measurement_count, before

status, resp = c.post(config.BASE, token, f"/races/{race1_id}/archive-measurements", {})
print("archive-measurements (Geraet nicht erreichbar):", status, resp)
assert status == 500, f"Erwartet: Fehler statt stillschweigend fortzufahren - bekam {status}: {resp}"

status, after = c.get(config.BASE, token, "/measurements")
assert len(after) == expected_measurement_count, f"Messungen wurden trotz fehlgeschlagenem Pull geloescht! {after}"
status, race_measurements = c.get(config.BASE, token, f"/race-measurements/race/{race1_id}")
assert len(race_measurements) == 0, "Es wurde trotz Fehler archiviert!"
print("Nichts geloescht/archiviert, wie erwartet. (Regression Fix #6)")

print("\n=== Geraet wieder korrekt konfigurieren ===")
status, resp = c.put(config.BASE, token, "/settings/timing-provider", {
    "type": "ALPDESK_TIMECONTROL", "config": {"baseUrl": config.DEVICE},
})
assert status == 200, resp
status, _ = c.get(config.BASE, token, "/measurements/device-connection")
assert status == 200, "Fake-Geraet nicht erreichbar?"

print("\n=== Lauf 1 archivieren + Messtabelle + Geraet leeren ===")
status, resp = c.post(config.BASE, token, f"/races/{race1_id}/archive-measurements", {})
print(status, resp)
assert status == 200, resp
status, remaining = c.get(config.BASE, token, "/measurements")
assert len(remaining) == 0, remaining
status, race_measurements = c.get(config.BASE, token, f"/race-measurements/race/{race1_id}")
assert len(race_measurements) == expected_measurement_count, race_measurements
print(f"{len(race_measurements)} Messungen archiviert, Messtabelle geleert.")

print("\n=== Archivierte Messungen den Teilnehmern zuweisen (Sync) ===")
status, resp = c.post(config.BASE, token, f"/race-measurements/race/{race1_id}/sync-to-participants", {})
assert status == 200, resp

status, participants = c.get(config.BASE, token, f"/participants?raceId={race1_id}")
by_bib = {p["raceNumber"]: p for p in participants}

bib2, bib3 = config.SWAP_BIBS
expected_after_swap = dict(config.RAW_DEVICE_TIMES_MS)
expected_after_swap[bib2], expected_after_swap[bib3] = expected_after_swap[bib3], expected_after_swap[bib2]

mismatches = []
for bib in range(1, 13):
    p = by_bib[bib]
    if bib in (config.DNF_BIB, config.DISCARD_BIB) or bib in config.SKIP_AHEAD_BIBS:
        if p.get("durationMs") is not None or p["status"] == "NONE":
            mismatches.append((bib, "sollte ohne Zeit und mit Status ungleich NONE sein", p))
        continue
    if p.get("durationMs") != expected_after_swap[bib]:
        mismatches.append((bib, expected_after_swap[bib], p.get("durationMs")))
print(f"Sync-Abweichungen: {len(mismatches)}")
for m in mismatches:
    print("  ", m)
assert not mismatches, mismatches
print("Alle Zeiten (inkl. bib2/bib3-Korrektur) korrekt auf die Teilnehmer synchronisiert.")

print("\n=== Regression Fix #1: manuelle Messung + Geraet-ID-Kollision direkt nach dem Reset ===")
status, manual = c.post(config.BASE, token, "/measurements", {
    "participantId": None, "durationMs": 45_000, "measuredAt": "2026-01-24T21:15:00",
})
assert status == 201, manual
print("manuelle Sicherungs-Messung angelegt: id =", manual["id"], "(Zaehler wurde gerade zurueckgesetzt)")

set_device_lines(["1,45000.0"])

status, imported = c.post(config.BASE, token, "/measurements/import", {})
assert status == 201, imported
print("Geraet meldet zeitgleich seine eigene Messung mit Geraete-ID 1:", imported)

status, all_measurements = c.get(config.BASE, token, "/measurements")
assert len(all_measurements) == 2, \
    f"Erwartet 2 unabhaengige Messungen (manuell + Geraet), bekam {len(all_measurements)}: {all_measurements}"
manual_still_there = next((m for m in all_measurements if m["id"] == manual["id"]), None)
assert manual_still_there is not None, "Die manuelle Messung wurde von der Geraete-Messung ueberschrieben!"
assert manual_still_there["durationMs"] == 45_000 and manual_still_there.get("participantId") is None, \
    f"Die manuelle Messung wurde veraendert: {manual_still_there}"
print("Manuelle Messung unveraendert erhalten, Geraete-Messung als eigene Zeile angelegt. (Regression Fix #1)")

print("\n=== Aufraeumen fuer Lauf 2: Messtabelle + Geraet zuruecksetzen ===")
status, resp = c.delete(config.BASE, token, "/measurements/reset?resetDevice=true")
assert status == 200, resp
status, remaining = c.get(config.BASE, token, "/measurements")
assert len(remaining) == 0, remaining
print("Bereit fuer Lauf 2.")
