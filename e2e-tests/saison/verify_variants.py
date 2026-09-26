#!/usr/bin/env python3
"""Step 6: two races of one season, grouping the same birth years differently.

Season 2026's standard variant has U14 (2013-2014) and U16 (2011-2012). A kids' race of the same
season picks the variant "Jahrgangsweise" - one class per birth year - without touching the
standard classes the January race is scored with. Checked through participant list, live view,
PDF export, the mapped import (which creates missing classes in the race's variant) and the
guards around it: a race cannot pick a variant its season does not have, and a variant in use
cannot be deleted.
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

def require(label, status, expected, body):
    if status != expected:
        sys.exit(f"FAIL {label}: {status} {body}")

token = c.login(config.BASE, config.APP_USERNAME, config.APP_PASSWORD)
with open(c.results_path("state.json")) as f:
    state = json.load(f)

VARIANT = config.KIDS_VARIANT
SEASON = config.CONFIGURED_SEASON

# --- 1. Variante anlegen: Standard kopieren, dann jahrgangsweise umschneiden ----------------------
status, copies = c.post(config.BASE, token, "/age-groups/copy-season",
                        {"fromSeason": SEASON, "fromVariant": "", "toSeason": SEASON, "toVariant": VARIANT})
require("Variante aus Standard kopieren", status, 201, copies)
check("Kopie innerhalb der Saison verschiebt keine Jahrgänge",
      sorted((ag["name"], ag["birthYearFrom"], ag["birthYearTo"], ag["variant"]) for ag in copies),
      [("U14", 2013, 2014, VARIANT), ("U16", 2011, 2012, VARIANT)])

for ag in copies:
    year = ag["birthYearFrom"]
    status, body = c.put(config.BASE, token, f"/age-groups/{ag['id']}", {
        "name": f"Jahrgang {year}", "seasonYear": SEASON, "variant": VARIANT,
        "birthYearFrom": year, "birthYearTo": year, "gender": "BOTH",
    })
    require(f"Variante: {ag['name']} auf Jahrgang {year} schneiden", status, 200, body)
status, body = c.post(config.BASE, token, "/age-groups", {
    "name": "Jahrgang 2012", "seasonYear": SEASON, "variant": VARIANT,
    "birthYearFrom": 2012, "birthYearTo": 2012, "gender": "BOTH",
})
require("Variante: Jahrgang 2012 anlegen", status, 201, body)

_, standard = c.get(config.BASE, token, f"/age-groups?season={SEASON}")
check("Standard-Variante unverändert",
      sorted((ag["name"], ag["birthYearFrom"], ag["birthYearTo"]) for ag in standard),
      [("U14", 2013, 2014), ("U16", 2011, 2012)])

status, body = c.post(config.BASE, token, "/age-groups", {
    "name": "Doppelt", "seasonYear": SEASON, "variant": VARIANT,
    "birthYearFrom": 2012, "birthYearTo": 2013, "gender": "BOTH",
})
check("Überschneidung innerhalb der Variante -> 409", status, 409)
status, body = c.post(config.BASE, token, "/age-groups", {
    "name": "X", "seasonYear": SEASON, "variant": "Standard",
    "birthYearFrom": 1990, "birthYearTo": 1990, "gender": "BOTH",
})
check("Variantenname 'Standard' -> 400", status, 400)

# --- 2. Rennen wählt die Variante -----------------------------------------------------------------
status, body = c.post(config.BASE, token, "/races", {
    "name": "Saison Tippfehler", "date": config.RACE_KIDS_DATE, "resultUnit": "TIME", "sortDirection": "ASC",
    "ageGroupVariant": "Gibt es nicht",
})
check("Rennen mit unbekannter Variante -> 400", status, 400)

status, kids_race = c.post(config.BASE, token, "/races", {
    "name": config.RACE_KIDS_NAME, "date": config.RACE_KIDS_DATE, "resultUnit": "TIME", "sortDirection": "ASC",
    "ageGroupVariant": VARIANT,
})
require("Kinderrennen anlegen", status, 201, kids_race)
check("Kinderrennen-Variante", kids_race["ageGroupVariant"], VARIANT)
check("Kinderrennen-Saison", kids_race["seasonYear"], SEASON)

moved = dict(kids_race, date="2025-02-01")
status, body = c.put(config.BASE, token, f"/races/{kids_race['id']}", moved)
check("Datum in eine Saison ohne diese Variante -> 400", status, 400)

for person_key, number, ms in [("anna", 1, 50000), ("bene", 2, 55000)]:
    status, body = c.post(config.BASE, token, "/participants", {
        "raceId": kids_race["id"], "personId": state[f"person_{person_key}"], "raceNumber": number, "durationMs": ms,
    })
    require(f"{person_key} im Kinderrennen", status, 201, body)

_, participants = c.get(config.BASE, token, "/participants")

def age_group_of(race_id, person_key):
    for p in participants:
        if p.get("race") and p["race"]["id"] == race_id and p["person"]["id"] == state[f"person_{person_key}"]:
            return (p.get("ageGroup") or {}).get("name")
    return "<nicht gefunden>"

check("Anna im Kinderrennen", age_group_of(kids_race["id"], "anna"), "Jahrgang 2013")
check("Bene im Kinderrennen", age_group_of(kids_race["id"], "bene"), "Jahrgang 2012")
check("Anna im Januar-Rennen (Standard) unverändert", age_group_of(state["race_jan"], "anna"), "U14")

# --- 3. Live-Ansicht und PDF ----------------------------------------------------------------------
def live_html(race_id):
    _, links = c.get(config.BASE, token, f"/races/{race_id}/live-links")
    path = next(l["path"] for l in links if l["path"].endswith("view=ALL_AGEGROUPS"))
    _, html = c.get_raw(config.BASE, None, path)
    return html.decode(errors="replace")

kids_html = live_html(kids_race["id"])
jan_html = live_html(state["race_jan"])
check("Live Kinderrennen zeigt Jahrgang 2013", "Wertung Jahrgang 2013" in kids_html, True)
check("Live Kinderrennen zeigt keine U14", "Wertung U14" in kids_html, False)
check("Live Januar-Rennen bleibt bei U14", "Wertung U14" in jan_html, True)

status, pdf = c.get_raw(config.BASE, token, f"/participants/export/pdf/agegroups/all/{kids_race['id']}")
check("PDF Kinderrennen HTTP", status, 200)
check("PDF Kinderrennen ist ein PDF", pdf[:4], b"%PDF")
with open(c.results_path("kinderrennen_altersklassen.pdf"), "wb") as f:
    f.write(pdf)

# --- 4. Import legt fehlende Klassen in der Variante des Rennens an --------------------------------
csv = ("Nachname;Vorname;Jahrgang;Geschlecht;Klasse\n"
       "Klein;Carla;2015;W;Jahrgang 2015\n").encode()
mapping = {"lastName": "Nachname", "firstName": "Vorname", "birthDate": "Jahrgang",
           "gender": "Geschlecht", "ageGroup": "Klasse"}
status, result = c.post_multipart(config.BASE, token, f"/participants/import-mapped/{kids_race['id']}",
                                  {"format": "CSV", "delimiter": ";", "mapping": json.dumps(mapping)},
                                  {"file": ("kinder.csv", csv, "text/csv")})
require("Import ins Kinderrennen", status, 200, result)
# An empty error list is left out of the JSON altogether.
check("Import ohne Zeilenfehler", result.get("errors", []), [])
check("eine Zeile importiert", result.get("importedCount"), 1)
_, variant_groups = c.get(config.BASE, token, f"/age-groups?season={SEASON}&variant={VARIANT}")
check("Import hat JAHRGANG 2015 in der Variante angelegt",
      [(ag["birthYearFrom"], ag["birthYearTo"]) for ag in variant_groups if ag["name"] == "JAHRGANG 2015"],
      [(2015, 2015)])
_, standard_after = c.get(config.BASE, token, f"/age-groups?season={SEASON}")
check("Standard-Variante vom Import unberührt", len(standard_after), 2)

# --- 5. Übersicht und Schutz ----------------------------------------------------------------------
_, variants = c.get(config.BASE, token, f"/age-groups/variants?season={SEASON}")
check("Varianten der Saison, Standard zuerst", [v["variant"] for v in variants["variants"]], ["", VARIANT])
check("Kinderrennen nutzt die Variante",
      next(v["raceNames"] for v in variants["variants"] if v["variant"] == VARIANT), [config.RACE_KIDS_NAME])

_, by_date = c.get(config.BASE, token, f"/age-groups/variants?date={config.RACE_KIDS_DATE}")
check("Varianten per Datum: Saison", by_date["seasonYear"], SEASON)

status, body = c.delete(config.BASE, token, f"/age-groups/variants?season={SEASON}&variant={VARIANT.replace(' ', '%20')}")
check("benutzte Variante löschen -> 409", status, 409)
status, body = c.delete(config.BASE, token, f"/age-groups/variants?season={SEASON}&variant=")
check("Standard-Variante löschen -> 400", status, 400)

# --- 6. Variante in die nächste Saison übernehmen -------------------------------------------------
status, next_season = c.post(config.BASE, token, "/age-groups/copy-season",
                             {"fromSeason": SEASON, "fromVariant": VARIANT, "toSeason": SEASON + 1, "toVariant": VARIANT})
require("Variante in die nächste Saison kopieren", status, 201, next_season)
check("Jahrgänge um ein Jahr verschoben",
      sorted(ag["birthYearFrom"] for ag in next_season), sorted(ag["birthYearFrom"] + 1 for ag in variant_groups))
status, body = c.delete(config.BASE, token,
                        f"/age-groups/variants?season={SEASON + 1}&variant={VARIANT.replace(' ', '%20')}")
check("unbenutzte Variante löschen -> 204", status, 204)
_, gone = c.get(config.BASE, token, f"/age-groups?season={SEASON + 1}&variant={VARIANT.replace(' ', '%20')}")
check("gelöschte Variante ist leer", gone, [])

print()
if failures:
    sys.exit(f"{len(failures)} Prüfung(en) fehlgeschlagen: {', '.join(failures)}")
print("Altersklassen-Varianten: zwei Einteilungen in einer Saison, sauber getrennt.")
