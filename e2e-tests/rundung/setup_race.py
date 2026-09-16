"""Step 1: create Race 1 + Race 2 (Race 2 linked to Race 1 via previousRaceId/REVERSE_TOP_N), one
age group covering everyone, 6 participants entered in BOTH races under the same raceNumber, and
Race 1's results (see config.py for why these exact times)."""
import sys, json
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.BASE)

print("=== Laeufe anlegen ===")
status, race1 = c.post(config.BASE, token, "/races", {
    "name": config.RACE1_NAME, "date": "2026-02-01", "resultUnit": "TIME", "sortDirection": "ASC",
})
assert status == 201, race1
race1_id = race1["id"]
print(f"{config.RACE1_NAME}: id =", race1_id)

status, race2 = c.post(config.BASE, token, "/races", {
    "name": config.RACE2_NAME, "date": "2026-02-01", "resultUnit": "TIME", "sortDirection": "ASC",
    "previousRaceId": race1_id, "startOrderMode": "REVERSE_TOP_N",
    "startOrderReverseTopCount": config.REVERSE_TOP_COUNT,
})
assert status == 201, race2
race2_id = race2["id"]
print(f"{config.RACE2_NAME}: id =", race2_id, "(previousRaceId =", race1_id, ")")

print("\n=== Altersgruppe (Herren, deckt alle ab) ===")
status, herren = c.post(config.BASE, token, "/age-groups", config.HERREN)
assert status == 201, herren
print("Herren =", herren["id"])

print(f"\n=== {len(config.PARTICIPANTS)} Personen + Teilnehmer (in beiden Laeufen) ===")
persons = {}
participants_by_race = {str(race1_id): {}, str(race2_id): {}}
for rn, (first, last, birth_year) in config.PARTICIPANTS.items():
    status, p = c.post(config.BASE, token, "/persons", {
        "firstName": first, "lastName": last, "birthDate": f"{birth_year}-05-10", "gender": "MALE",
    })
    assert status == 201, p
    persons[rn] = p["id"]

    for race_id in (race1_id, race2_id):
        status, part = c.post(config.BASE, token, "/participants", {
            "raceId": race_id, "personId": p["id"], "raceNumber": rn,
        })
        assert status == 201, (race_id, rn, part)
        participants_by_race[str(race_id)][str(rn)] = part["id"]

print("Teilnehmer angelegt: bib 1-6 in Lauf 1 und Lauf 2.")

print(f"\n=== Race-1-Ergebnisse eintragen ({len(config.RACE1_TIMES_MS)} Zeiten, bib {config.DNS_BIB} bleibt ohne Ergebnis = DNS) ===")
for rn, duration_ms in config.RACE1_TIMES_MS.items():
    part_id = participants_by_race[str(race1_id)][str(rn)]
    status, updated = c.put(config.BASE, token, f"/participants/{part_id}", {
        "raceId": race1_id, "personId": persons[rn], "raceNumber": rn, "durationMs": duration_ms,
    })
    assert status == 200, (rn, updated)
    print(f"  bib{rn}: {duration_ms}ms")

with open("state.json", "w") as f:
    json.dump({
        "race1_id": race1_id, "race2_id": race2_id, "persons": persons,
        "participants_by_race": participants_by_race,
    }, f, indent=2)
print("\nSetup fertig, state.json gespeichert.")
