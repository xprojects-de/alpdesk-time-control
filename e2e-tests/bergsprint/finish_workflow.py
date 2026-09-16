"""Step 4: export a CSV backup of the live measurements, archive them into the race, mark the
configured DNF participant, delete the (now-archived) live measurements, then sync the archived
race-measurements onto the participants - and verify every synced time matches exactly what the
device reported."""
import sys, json
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.BASE)
state = json.load(open("state.json"))
race_id = state["race_id"]
persons = state["persons"]
by_rn = {p["raceNumber"]: p for p in persons}

print("=== Messungen als CSV exportieren (Sicherung) ===")
status, body = c.get_raw(config.BASE, token, "/measurements/export/csv")
with open("measurements_backup.csv", "wb") as f:
    f.write(body)
print(f"Backup exportiert: {len(body)} bytes")

print("=== Messungen ins Rennen archivieren ===")
status, resp = c.post(config.BASE, token, f"/races/{race_id}/archive-measurements", {})
print(status, resp)
assert status == 200

status, race_measurements = c.get(config.BASE, token, f"/race-measurements/race/{race_id}")
print(f"archivierte Messungen: {len(race_measurements)}")

print(f"=== Teilnehmer hat aufgegeben (DNF) - raceNumber {config.DNF_RACE_NUMBER} ===")
dnf_person = by_rn[config.DNF_RACE_NUMBER]
status, part = c.get(config.BASE, token, f"/participants/{dnf_person['participantId']}")
status, resp = c.put(config.BASE, token, f"/participants/{dnf_person['participantId']}", {
    "raceId": race_id, "personId": dnf_person["personId"], "raceNumber": config.DNF_RACE_NUMBER,
    "categoryId": part.get("category", {}).get("id") if part.get("category") else None,
    "status": "DNF", "comment": "Aufgabe nach Sturz",
})
print(status, resp)
assert status == 200

print("=== Urspruengliche (Live-)Messungen loeschen ===")
status, resp = c.delete(config.BASE, token, "/measurements/reset?resetDevice=false")
print(status, resp)
status, remaining = c.get(config.BASE, token, "/measurements")
assert len(remaining) == 0

print("=== Archivierte Rennmessungen den Teilnehmern zuweisen (Sync) ===")
status, resp = c.post(config.BASE, token, f"/race-measurements/race/{race_id}/sync-to-participants", {})
print(status, resp)
assert status == 200

status, participants = c.get(config.BASE, token, f"/participants?raceId={race_id}")
with_time = [p for p in participants if p.get("durationMs") is not None]
print(f"\nTeilnehmer mit Zeit NACH Sync: {len(with_time)} von {len(participants)}")

times_ms = {int(k): v for k, v in json.load(open("times_ms.json")).items()}
mismatches = []
for p in participants:
    rn = p["raceNumber"]
    if rn == config.DNF_RACE_NUMBER:
        continue
    if times_ms.get(rn) != p.get("durationMs"):
        mismatches.append((rn, times_ms.get(rn), p.get("durationMs")))
print(f"Sync-Abweichungen: {len(mismatches)}")
for m in mismatches[:20]:
    print("  ", m)

dnf_check = next(p for p in participants if p["raceNumber"] == config.DNF_RACE_NUMBER)
print(f"\nDNF-Teilnehmer: status={dnf_check['status']}, durationMs={dnf_check.get('durationMs')}")
print("\ndone")
