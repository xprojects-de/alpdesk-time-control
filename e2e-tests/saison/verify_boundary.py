#!/usr/bin/env python3
"""Step 4: moving the season boundary re-assigns existing races - and is reversible.

The whole reason the boundary is configurable: a ski winter's December and January race belong
together. With 1 July they do. The step puts the boundary back at 1 January afterwards, because
the Gaudi-Modus step after it needs the two races to be in *different* seasons.
"""
import json
import sys

import common as c
import config

failures = []

def check(label, actual, expected):
    ok = actual == expected
    print(f"{'OK  ' if ok else 'FAIL'} {label}: {actual!r}" + ("" if ok else f" (erwartet {expected!r})"))
    if not ok:
        failures.append(label)

token = c.login(config.BASE, config.APP_USERNAME, config.APP_PASSWORD)
with open(c.results_path("state.json")) as f:
    state = json.load(f)

def season_of_races():
    _, races = c.get(config.BASE, token, "/races")
    by_id = {r["id"]: r for r in races}
    return by_id[state["race_dez"]]["seasonYear"], by_id[state["race_jan"]]["seasonYear"]

# Ein Datum, das es in keinem Jahr gibt, darf nicht gespeichert werden - es wäre eine Grenze, die
# nie erreicht wird.
status, resp = c.put(config.BASE, token, "/settings/season", {"seasonStartMonth": 6, "seasonStartDay": 31})
check("31. Juni als Saisonstart -> 400", status, 400)

status, resp = c.put(config.BASE, token, "/settings/season", config.SEASON_START_WINTER)
check("Saisonstart 1. Juli", status, 200)
if status == 200:
    check("Saisonstart gespeichert", [resp["seasonStartMonth"], resp["seasonStartDay"]], [7, 1])
    check("Saison läuft über den Jahreswechsel",
          [resp["currentSeasonStart"][5:], resp["currentSeasonEnd"][5:]], ["07-01", "06-30"])

check("Dezember und Januar liegen jetzt in derselben Saison", season_of_races(), (2025, 2025))

# Beide Rennen werden jetzt nach den 2025er Klassen gewertet - Bene also auch im Januar-Rennen als
# U14 statt U16. Das ist die eigentliche Auswirkung der verschobenen Grenze.
_, participants = c.get(config.BASE, token, "/participants")
jan_anna = next((p for p in participants
                 if p.get("race") and p["race"]["id"] == state["race_jan"]
                 and p["person"]["id"] == state["person_anna"]), None)
check("Januar-Rennen wird nach Saison 2025 gewertet", jan_anna["race"]["seasonYear"], 2025)
check("Anna bleibt U14", (jan_anna.get("ageGroup") or {}).get("name"), "U14")

status, resp = c.put(config.BASE, token, "/settings/season", config.SEASON_START_DEFAULT)
check("Saisonstart zurück auf 1. Januar", status, 200)
check("Rennen wieder in getrennten Saisons", season_of_races(),
      (config.RACE_DEZ_SEASON_DEFAULT, config.RACE_JAN_SEASON_DEFAULT))

print()
if failures:
    sys.exit(f"{len(failures)} Prüfung(en) fehlgeschlagen: {', '.join(failures)}")
print("Saisongrenze verschiebt Rennen korrekt und ist umkehrbar.")
