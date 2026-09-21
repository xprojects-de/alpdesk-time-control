#!/usr/bin/env python3
"""Step 1: two races of one winter, season 2026's age groups, and the participants.

Deliberately configures *only* season 2026 - the December race is left without any age groups on
purpose. That is the state a real database is in right after the upgrade (migration V4 stamps the
existing groups with the year the upgrade ran in), and every later step checks what that does.
"""
import json
import sys

import common as c
import config

token = c.login(config.BASE, config.APP_USERNAME, config.APP_PASSWORD)

state = {}

for key, name, date in [
    ("dez", config.RACE_DEZ_NAME, config.RACE_DEZ_DATE),
    ("jan", config.RACE_JAN_NAME, config.RACE_JAN_DATE),
]:
    status, resp = c.post(config.BASE, token, "/races", {
        "name": name, "date": date, "resultUnit": "TIME", "sortDirection": "ASC",
    })
    if status != 201:
        sys.exit(f"FAIL race {name}: {status} {resp}")
    state[f"race_{key}"] = resp["id"]
    print(f"race {name} ({date}) -> id {resp['id']}, seasonYear {resp['seasonYear']}")

for ag in [config.U14_2026, config.U16_2026]:
    status, resp = c.post(config.BASE, token, "/age-groups", ag)
    if status != 201:
        sys.exit(f"FAIL age-group {ag['name']}: {status} {resp}")
    print(f"age-group {ag['name']} season {ag['seasonYear']}: {ag['birthYearFrom']}-{ag['birthYearTo']}")

for key, person in [("anna", config.ANNA), ("bene", config.BENE)]:
    status, resp = c.post(config.BASE, token, "/persons", person)
    if status != 201:
        sys.exit(f"FAIL person {person['lastName']}: {status} {resp}")
    state[f"person_{key}"] = resp["id"]
    print(f"person {person['lastName']} ({person['birthDate']}) -> id {resp['id']}")

# Anna runs both legs, Bene only the December one - so he ends up on the Gaudi-Modus'
# "nicht gewertet" list, which is what makes it resolve age classes at all.
entries = [
    ("dez", "anna", 1, config.ANNA_DEZ_MS),
    ("dez", "bene", 2, config.BENE_DEZ_MS),
    ("jan", "anna", 1, config.ANNA_JAN_MS),
]
for race_key, person_key, bib, duration in entries:
    status, resp = c.post(config.BASE, token, "/participants", {
        "raceId": state[f"race_{race_key}"],
        "personId": state[f"person_{person_key}"],
        "raceNumber": bib,
        "durationMs": duration,
    })
    if status != 201:
        sys.exit(f"FAIL participant {person_key}/{race_key}: {status} {resp}")
    print(f"participant {person_key} in {race_key}: {duration} ms")

with open(c.results_path("state.json"), "w") as f:
    json.dump(state, f, indent=2)
print("\nstate written to results/state.json")
