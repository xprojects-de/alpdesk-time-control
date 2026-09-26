"""Step 3 (manual-assign variant): CSV backup -> archive the raw measurements onto the race
(clearing the live table and resetting the device) -> assign every archived race measurement to
its participant BY HAND (incl. one wrong assignment that gets corrected and one duplicate that
must be refused) -> record DNF/DSQ -> sync the archived measurements onto the participants.

Mirrors what the "Zuordnung & Sync" screen does: PUT /race-measurements/{id} with
participantId + durationMs + measuredAt, exactly like race-measurement-dialog.component.ts."""
import sys, json
sys.path.insert(0, '.')
import common as c
import manual_config as cfg

token = c.login(cfg.BASE)
state = json.load(open(c.results_path(cfg.STATE_FILE)))
race_id = state["race_id"]
roster = state["roster"]
by_rn = {r["raceNumber"]: r for r in roster}
device_lines = json.load(open(c.results_path("manual_device_lines.json")))
rn_by_device_id = {d["deviceId"]: d["raceNumber"] for d in device_lines}

problems = []

print("=== Messungen als CSV sichern ===")
status, body = c.get_raw(cfg.BASE, token, "/measurements/export/csv")
assert status == 200
with open(c.results_path("manual_measurements_backup.csv"), "wb") as f:
    f.write(body)
print(f"Backup: {len(body)} bytes")
if body[:3] == b"\xef\xbb\xbf":
    problems.append("CSV-Export enthaelt ein BOM")

print("=== Messungen ins Rennen archivieren (Live-Tabelle leeren, Geraet zuruecksetzen) ===")
status, resp = c.post(cfg.BASE, token, f"/races/{race_id}/archive-measurements", {})
print(status, resp)
assert status == 200, resp

status, live = c.get(cfg.BASE, token, "/measurements")
print(f"Live-Messungen nach dem Archivieren: {len(live)} (erwartet 0)")
if live:
    problems.append(f"{len(live)} Live-Messungen nach dem Archivieren uebrig")

status, race_measurements = c.get(cfg.BASE, token, f"/race-measurements/race/{race_id}")
print(f"Archivierte Rennmessungen: {len(race_measurements)} (erwartet {len(device_lines)})")
if len(race_measurements) != len(device_lines):
    problems.append(f"archiviert {len(race_measurements)} statt {len(device_lines)}")
unassigned = [m for m in race_measurements if m.get("participantId") is None]
print(f"davon noch ohne Teilnehmer: {len(unassigned)} (erwartet alle)")
if len(unassigned) != len(race_measurements):
    problems.append("einige archivierte Messungen waren schon zugeordnet")

def assign(rm, race_number):
    """PUT exactly what the Zuordnung-Dialog sends."""
    return c.put(cfg.BASE, token, f"/race-measurements/{rm['id']}", {
        "participantId": by_rn[race_number]["participantId"],
        "durationMs": rm["durationMs"],
        "measuredAt": rm["measuredAt"],
    })

print("\n=== Manuelle Zuordnung (Zieldurchfahrt -> Startnummer) ===")
rm_by_device_id = {m["deviceMeasurementId"]: m for m in race_measurements}
for dev_id in sorted(rm_by_device_id):
    rm = rm_by_device_id[dev_id]
    rn = rn_by_device_id[dev_id]
    status, resp = assign(rm, rn)
    if status != 200:
        problems.append(f"Zuordnung Messung {rm['id']} -> bib {rn} fehlgeschlagen: {status} {resp}")
print(f"{len(rm_by_device_id)} Messungen zugeordnet")

print("\n=== Fehlbedienung 1: dieselbe Startnummer ein zweites Mal zuweisen (muss 409 geben) ===")
first_two = [rm_by_device_id[d] for d in sorted(rm_by_device_id)[:2]]
dup_rn = rn_by_device_id[first_two[0]["deviceMeasurementId"]]
status, resp = assign(first_two[1], dup_rn)
print(f"  HTTP {status}: {resp}")
if status != 409:
    problems.append(f"Doppelzuordnung lieferte {status} statt 409")

print("=== Fehlbedienung 2: zwei Zeiten vertauscht zugewiesen und wieder korrigiert ===")
rm_a, rm_b = first_two
rn_a, rn_b = rn_by_device_id[rm_a["deviceMeasurementId"]], rn_by_device_id[rm_b["deviceMeasurementId"]]
# Park bib A somewhere free first - a straight swap is exactly what the 409 above prevents.
status, _ = c.put(cfg.BASE, token, f"/race-measurements/{rm_a['id']}",
                  {"participantId": None, "durationMs": rm_a["durationMs"], "measuredAt": rm_a["measuredAt"]})
status_b, _ = assign(rm_b, rn_a)
status_a, _ = assign(rm_a, rn_b)
print(f"  vertauscht: {status_b}/{status_a}")
# ... and back to correct.
status, _ = c.put(cfg.BASE, token, f"/race-measurements/{rm_b['id']}",
                  {"participantId": None, "durationMs": rm_b["durationMs"], "measuredAt": rm_b["measuredAt"]})
status_a2, _ = assign(rm_a, rn_a)
status_b2, _ = assign(rm_b, rn_b)
print(f"  korrigiert: {status_a2}/{status_b2}")
if status_a2 != 200 or status_b2 != 200:
    problems.append("Korrektur der vertauschten Zuordnung fehlgeschlagen")

status, race_measurements = c.get(cfg.BASE, token, f"/race-measurements/race/{race_id}")
still_unassigned = [m for m in race_measurements if m.get("participantId") is None]
print(f"\nNoch nicht zugeordnet: {len(still_unassigned)} (erwartet 0)")
if still_unassigned:
    problems.append(f"{len(still_unassigned)} archivierte Messungen ohne Teilnehmer")

# Every archived row must still carry the exact device duration after all that editing.
pid_to_rn = {r["participantId"]: r["raceNumber"] for r in roster}
for m in race_measurements:
    rn = pid_to_rn.get(m.get("participantId"))
    expected = by_rn[rn]["durationMs"] if rn else None
    if expected != m["durationMs"]:
        problems.append(f"archivierte Messung {m['id']} (bib {rn}): {m['durationMs']} != {expected}")

print("\n=== Ausfaelle eintragen (vor dem Sync, wie am Renntag) ===")
for rn, r in sorted(by_rn.items()):
    if not r["status"]:
        continue
    status, part = c.get(cfg.BASE, token, f"/participants/{r['participantId']}")
    status, resp = c.put(cfg.BASE, token, f"/participants/{r['participantId']}", {
        "raceId": race_id, "personId": r["personId"], "raceNumber": rn,
        "categoryId": (part.get("category") or {}).get("id"),
        "status": r["status"], "comment": r["comment"],
    })
    print(f"  bib {rn}: {r['status']} ({r['comment']}) -> HTTP {status}")
    if status != 200:
        problems.append(f"Status bib {rn} konnte nicht gesetzt werden: {status} {resp}")

print("\n=== Messungen auf die Teilnehmer uebertragen (Sync) ===")
status, resp = c.post(cfg.BASE, token, f"/race-measurements/race/{race_id}/sync-to-participants", {})
print(status, resp)
assert status == 200, resp

status, participants = c.get(cfg.BASE, token, f"/participants?raceId={race_id}")
for p in participants:
    r = by_rn[p["raceNumber"]]
    if r["durationMs"] != p.get("durationMs"):
        problems.append(f"bib {p['raceNumber']}: Zeit nach Sync {p.get('durationMs')} != {r['durationMs']}")
    expected_status = r["status"]
    actual_status = p.get("status") if p.get("status") not in (None, "NONE") else None
    if expected_status != actual_status:
        problems.append(f"bib {p['raceNumber']}: Status nach Sync {actual_status} != {expected_status}")

with_time = [p for p in participants if p.get("durationMs") is not None]
print(f"\nTeilnehmer mit Zeit nach Sync: {len(with_time)} von {len(participants)}")
print(f"Abweichungen: {len(problems)}")
for p in problems[:20]:
    print("  ", p)
print("\nSCHRITT 3: " + ("OK" if not problems else "ABWEICHUNGEN"))
sys.exit(1 if problems else 0)
