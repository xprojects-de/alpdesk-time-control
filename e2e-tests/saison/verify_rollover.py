#!/usr/bin/env python3
"""Step 3: filling in a season by rolling another one's configuration over - here backwards.

After the upgrade only the upgrade year has age groups, so the *past* season with races has to be
filled from a later one. copySeason shifts the birth years by the difference either way, and the
result is the assertion that matters: Bene is U16 in 2026 but U14 in 2025, in the same database,
at the same moment - purely because his two races belong to different seasons.
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

# Quelle == Ziel ist ein Eingabefehler (400), keine Kollision mit gespeicherten Daten (409).
status, resp = c.post(config.BASE, token, "/age-groups/copy-season", {"fromSeason": 2026, "toSeason": 2026})
check("Übernahme in dieselbe Saison -> 400", status, 400)

status, resp = c.post(config.BASE, token, "/age-groups/copy-season", {"fromSeason": 2019, "toSeason": 2020})
check("Übernahme aus leerer Saison -> 409", status, 409)

status, created = c.post(config.BASE, token, "/age-groups/copy-season", {"fromSeason": 2026, "toSeason": 2025})
check("Rückwärts-Übernahme 2026 -> 2025", status, 201)
if status == 201:
    by_name = {ag["name"]: ag for ag in created}
    check("U14 2025 verschoben", [by_name["U14"]["birthYearFrom"], by_name["U14"]["birthYearTo"]], [2012, 2013])
    check("U16 2025 verschoben", [by_name["U16"]["birthYearFrom"], by_name["U16"]["birthYearTo"]], [2010, 2011])

status, resp = c.post(config.BASE, token, "/age-groups/copy-season", {"fromSeason": 2026, "toSeason": 2025})
check("zweite Übernahme in belegte Saison -> 409", status, 409)

_, groups_2025 = c.get(config.BASE, token, "/age-groups?season=2025")
check("Saison 2025 hat jetzt zwei Gruppen", len(groups_2025), 2)
_, groups_2026 = c.get(config.BASE, token, "/age-groups?season=2026")
check("Saison 2026 unverändert", sorted([g["birthYearFrom"] for g in groups_2026]), [2011, 2013])

_, seasons = c.get(config.BASE, token, "/age-groups/seasons")
check("konfigurierte Saisons nach Übernahme", seasons["seasons"], [2026, 2025])

_, participants = c.get(config.BASE, token, "/participants")

def age_group_of(race_key, person_key):
    for p in participants:
        if p.get("race") and p["race"]["id"] == state[f"race_{race_key}"] and p["person"]["id"] == state[f"person_{person_key}"]:
            return (p.get("ageGroup") or {}).get("name")
    return "<nicht gefunden>"

check("Anna im Dezember-Rennen (Saison 2025)", age_group_of("dez", "anna"), "U14")
check("Bene im Dezember-Rennen (Saison 2025)", age_group_of("dez", "bene"), "U14")
check("Anna im Januar-Rennen (Saison 2026) unverändert", age_group_of("jan", "anna"), "U14")

# Und die Gegenprobe: derselbe Jahrgang 2012 ist in 2026 eine Klasse höher. Dass beides gleichzeitig
# gilt, ist genau der Zweck der saisonbezogenen Altersklassen.
status, resp = c.post(config.BASE, token, "/participants", {
    "raceId": state["race_jan"], "personId": state["person_bene"], "raceNumber": 9, "durationMs": 99000,
})
check("Bene nachträglich im Januar-Rennen angelegt", status, 201)
if status == 201:
    check("Bene im Januar-Rennen (Saison 2026)", (resp.get("ageGroup") or {}).get("name"), "U16")
    c.delete(config.BASE, token, f"/participants/{resp['id']}")

print()
if failures:
    sys.exit(f"{len(failures)} Prüfung(en) fehlgeschlagen: {', '.join(failures)}")
print("Saison-Übernahme und saisonabhängige Klassenzuordnung korrekt.")
