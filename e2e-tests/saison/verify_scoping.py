#!/usr/bin/env python3
"""Step 2: the season a race is scored in comes from its date, and decides its age classes.

With the default 1 January boundary the two races of this one winter fall into different seasons,
and only 2026 has age groups. So the January race categorises normally while the December race -
same participants, same birth years - comes out "ohne Altersklasse" everywhere.
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

_, races = c.get(config.BASE, token, "/races")
by_id = {r["id"]: r for r in races}
check("Dezember-Rennen Saison", by_id[state["race_dez"]]["seasonYear"], config.RACE_DEZ_SEASON_DEFAULT)
check("Januar-Rennen Saison", by_id[state["race_jan"]]["seasonYear"], config.RACE_JAN_SEASON_DEFAULT)

_, participants = c.get(config.BASE, token, "/participants")

def age_group_of(race_key, person_key):
    for p in participants:
        if p.get("race") and p["race"]["id"] == state[f"race_{race_key}"] and p["person"]["id"] == state[f"person_{person_key}"]:
            return (p.get("ageGroup") or {}).get("name")
    return "<nicht gefunden>"

check("Anna im Januar-Rennen (Saison 2026)", age_group_of("jan", "anna"), "U14")
check("Bene im Dezember-Rennen (Saison 2025, unkonfiguriert)", age_group_of("dez", "bene"), None)
check("Anna im Dezember-Rennen (Saison 2025, unkonfiguriert)", age_group_of("dez", "anna"), None)

# Der Saison-Auswähler muss die Saison 2025 anbieten, obwohl für sie nichts konfiguriert ist -
# sonst wäre ausgerechnet die Saison, die repariert werden muss, nicht erreichbar.
_, seasons = c.get(config.BASE, token, "/age-groups/seasons")
check("konfigurierte Saisons", seasons["seasons"], [config.CONFIGURED_SEASON])
check("Saisons mit Rennen", seasons["seasonsWithRaces"], [2026, 2025])

# Eine Saison ohne Altersgruppen darf den Export nicht sprengen - sie fällt in den
# "ohne Altersklasse"-Sammeltopf, damit niemand aus der Wertung verschwindet.
for race_key in ("dez", "jan"):
    status, pdf = c.get_raw(config.BASE, token, f"/participants/export/pdf/agegroups/all/{state[f'race_{race_key}']}")
    check(f"PDF {race_key} HTTP", status, 200)
    check(f"PDF {race_key} ist ein PDF", pdf[:4], b"%PDF")

# Was in den Abschnitten steht, wird über die öffentliche Live-Ansicht geprüft statt über das PDF:
# dieselben Sektionen, dieselbe Auflösung (RankingViewService), aber als HTML - so braucht der Test
# kein PDF-Werkzeug.
def live_html(race_key, view):
    _, links = c.get(config.BASE, token, f"/races/{state[f'race_{race_key}']}/live-links")
    path = next(l["path"] for l in links if l["path"].endswith(f"view={view}"))
    _, html = c.get_raw(config.BASE, None, path)
    return html.decode(errors="replace")

dez_html = live_html("dez", "ALL_AGEGROUPS")
jan_html = live_html("jan", "ALL_AGEGROUPS")
check("Dezember-Live-Ansicht sammelt ohne Altersklasse", "ohne Altersklasse" in dez_html, True)
check("Dezember-Live-Ansicht zeigt keine U14-Sektion", "Wertung U14" in dez_html, False)
check("Januar-Live-Ansicht wertet nach U14", "Wertung U14" in jan_html, True)

print()
if failures:
    sys.exit(f"{len(failures)} Prüfung(en) fehlgeschlagen: {', '.join(failures)}")
print("Saison-Zuordnung und Altersklassen-Auflösung korrekt.")
