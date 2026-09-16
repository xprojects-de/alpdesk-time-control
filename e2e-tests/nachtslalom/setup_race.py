"""Step 1: create Lauf 1 + Lauf 2 (Lauf 2 linked to Lauf 1 via previousRaceId/REVERSE_TOP_N),
2 age groups (Damen/Herren), and 12 participants entered in BOTH races under the same raceNumber.
Also exercises the auto-assign error cases that don't need any race data set up yet (unknown race,
skip/set-next while inactive)."""
import sys, json
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.BASE)

print("=== Vorab-Fehlerfaelle: Auto-Assign ohne aktives Rennen ===")
status, resp = c.post(config.BASE, token, "/measurements/auto-assign/enable", {"raceId": config.BOGUS_RACE_ID})
print("enable(unbekanntes Rennen):", status, resp)
assert status == 400, resp

status, resp = c.post(config.BASE, token, "/measurements/auto-assign/skip", {})
print("skip() ohne aktives Auto-Assign:", status, resp)
assert status == 400, resp

status, resp = c.post(config.BASE, token, "/measurements/auto-assign/set-next", {"raceNumber": 1})
print("set-next() ohne aktives Auto-Assign:", status, resp)
assert status == 400, resp

print("\n=== Laeufe anlegen ===")
status, race1 = c.post(config.BASE, token, "/races", {
    "name": config.RACE1_NAME, "date": "2026-01-24", "resultUnit": "TIME", "sortDirection": "ASC",
})
assert status == 201, race1
race1_id = race1["id"]
print(f"{config.RACE1_NAME}: id =", race1_id)

status, race2 = c.post(config.BASE, token, "/races", {
    "name": config.RACE2_NAME, "date": "2026-01-24", "resultUnit": "TIME", "sortDirection": "ASC",
    "previousRaceId": race1_id, "startOrderMode": "REVERSE_TOP_N",
    "startOrderReverseTopCount": config.REVERSE_TOP_COUNT,
})
assert status == 201, race2
race2_id = race2["id"]
print(f"{config.RACE2_NAME}: id =", race2_id, "(previousRaceId =", race1_id, ")")

print("\n=== Altersgruppen (Damen/Herren) ===")
status, damen = c.post(config.BASE, token, "/age-groups", config.DAMEN)
assert status == 201, damen
status, herren = c.post(config.BASE, token, "/age-groups", config.HERREN)
assert status == 201, herren
print("Damen =", damen["id"], "Herren =", herren["id"])

print(f"\n=== {len(config.PARTICIPANTS)} Personen + Teilnehmer (in beiden Laeufen) ===")
persons = {}
participants_by_race = {str(race1_id): {}, str(race2_id): {}}
for rn, (first, last, gender, birth_year) in config.PARTICIPANTS.items():
    status, p = c.post(config.BASE, token, "/persons", {
        "firstName": first, "lastName": last, "birthDate": f"{birth_year}-05-10", "gender": gender,
    })
    assert status == 201, p
    persons[rn] = p["id"]

    for race_id in (race1_id, race2_id):
        status, part = c.post(config.BASE, token, "/participants", {
            "raceId": race_id, "personId": p["id"], "raceNumber": rn,
        })
        assert status == 201, (race_id, rn, part)
        participants_by_race[str(race_id)][str(rn)] = part["id"]

print("Teilnehmer angelegt: Herren 1-6, Damen 7-12 (jeweils in Lauf 1 und Lauf 2).")

print("\n=== Startliste Lauf 1 (Checkpoint) ===")
status, pdf = c.get_raw(config.BASE, token, f"/participants/export/pdf/startlist/{race1_id}")
assert status == 200
with open("startliste_lauf1.pdf", "wb") as f:
    f.write(pdf)
print(f"Startliste generiert ({len(pdf)} bytes)")

print("\n=== Vorab-Fehlerfall: unbekannte startRaceNumber ===")
status, resp = c.post(config.BASE, token, "/measurements/auto-assign/enable",
                       {"raceId": race1_id, "startRaceNumber": config.BOGUS_RACE_NUMBER})
print("enable(unbekannte startRaceNumber):", status, resp)
assert status == 400, resp
status, resp = c.get(config.BASE, token, "/measurements/auto-assign/status")
assert resp["active"] is False, resp

with open("state.json", "w") as f:
    json.dump({
        "race1_id": race1_id, "race2_id": race2_id, "persons": persons,
        "participants_by_race": participants_by_race,
    }, f, indent=2)
print("\nSetup fertig, state.json gespeichert.")
