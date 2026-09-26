#!/usr/bin/env python3
"""What migration V4 must have done to a database that already held age groups and race history.

The table is rebuilt, not altered (SQLite cannot drop V1's UNIQUE(name)), so this checks the three
things a rebuild silently gets wrong: rows dropped, ids renumbered, and the AUTOINCREMENT
high-water mark reset so the next insert reuses a freed id. Then the consequence the README's
upgrade section promises: a race from a past season comes out "ohne Altersklasse" and is fixable
from the UI without touching the database.
"""
import datetime
import sqlite3
import sys

import common as c
import config

failures = []

def check(label, actual, expected):
    ok = actual == expected
    print(f"{'OK  ' if ok else 'FAIL'} {label}: {actual!r}" + ("" if ok else f" (erwartet {expected!r})"))
    if not ok:
        failures.append(label)

db_path = sys.argv[1] if len(sys.argv) > 1 else None
token = c.login(config.BASE, config.APP_USERNAME, config.APP_PASSWORD)

_, season_settings = c.get(config.BASE, token, "/settings/season")
upgrade_season = season_settings["currentSeason"]
check("Saisongrenze steht nach dem Upgrade auf dem 1.1.",
      [season_settings["seasonStartMonth"], season_settings["seasonStartDay"]], [1, 1])

# --- 1. Kein Bestand verloren, keine ID vergeben ------------------------------------------------
_, groups = c.get(config.BASE, token, "/age-groups")
by_id = {ag["id"]: ag for ag in groups}
check("alle Altersgruppen noch da", sorted(by_id), sorted(ag["id"] for ag in config.PRE_V4_AGE_GROUPS))
for expected in config.PRE_V4_AGE_GROUPS:
    actual = by_id.get(expected["id"])
    if actual is None:
        continue
    check(f"Gruppe {expected['id']} unverändert",
          [actual["name"], actual["birthYearFrom"], actual["birthYearTo"], actual["gender"]],
          [expected["name"], expected["birthYearFrom"], expected["birthYearTo"], expected["gender"]])
    check(f"Gruppe {expected['id']} auf die Upgrade-Saison gestempelt", actual["seasonYear"], upgrade_season)
    check(f"Gruppe {expected['id']} in der Standard-Variante (V6)", actual["variant"], "")

# --- 2. AUTOINCREMENT: die nächste ID darf keine alte wiederverwenden ----------------------------
status, created = c.post(config.BASE, token, "/age-groups", {
    "name": "U18", "seasonYear": upgrade_season,
    "birthYearFrom": 2009, "birthYearTo": 2010, "gender": "BOTH",
})
check("neue Altersgruppe anlegbar", status, 201)
if status == 201:
    check("neue ID setzt hinter der höchsten alten fort", created["id"] > config.HIGHEST_PRE_V4_ID, True)
    c.delete(config.BASE, token, f"/age-groups/{created['id']}")

# --- 3. Der eigentliche Zweck des Rebuilds: UNIQUE(name) ist weg ---------------------------------
status, other_season = c.post(config.BASE, token, "/age-groups", {
    "name": config.PRE_V4_AGE_GROUPS[0]["name"], "seasonYear": upgrade_season + 1,
    "birthYearFrom": config.PRE_V4_AGE_GROUPS[0]["birthYearFrom"] + 1,
    "birthYearTo": config.PRE_V4_AGE_GROUPS[0]["birthYearTo"] + 1,
    "gender": config.PRE_V4_AGE_GROUPS[0]["gender"],
})
check("derselbe Name in einer zweiten Saison anlegbar", status, 201)
if status == 201:
    status, conflict = c.post(config.BASE, token, "/age-groups", {
        "name": config.PRE_V4_AGE_GROUPS[0]["name"], "seasonYear": upgrade_season + 1,
        "birthYearFrom": 1990, "birthYearTo": 1991, "gender": "BOTH",
    })
    check("derselbe Name zweimal in derselben Saison -> 409", status, 409)
    c.delete(config.BASE, token, f"/age-groups/{other_season['id']}")

# --- 3b. Zweck von V6: derselbe Name und dieselben Jahrgänge in einer anderen Variante ------------
status, in_variant = c.post(config.BASE, token, "/age-groups", {
    "name": config.PRE_V4_AGE_GROUPS[0]["name"], "seasonYear": upgrade_season, "variant": "Upgrade-Test",
    "birthYearFrom": config.PRE_V4_AGE_GROUPS[0]["birthYearFrom"],
    "birthYearTo": config.PRE_V4_AGE_GROUPS[0]["birthYearTo"],
    "gender": config.PRE_V4_AGE_GROUPS[0]["gender"],
})
check("derselbe Name/Jahrgang in einer zweiten Variante derselben Saison anlegbar", status, 201)
if status == 201:
    c.delete(config.BASE, token, f"/age-groups/{in_variant['id']}")

# --- 4. Die Folge für alte Rennen, und dass sie aus der Oberfläche behebbar ist -------------------
today = datetime.date.today()
# Der 29. Februar hat im Vorjahr kein Gegenstück, deshalb der Tag gekappt - das Jahr ist das
# Einzige, worauf es hier ankommt.
last_year = datetime.date(today.year - 1, today.month, min(today.day, 28))
races = {}
for key, name, date in [
    ("current", config.RACE_THIS_SEASON_NAME, today),
    ("previous", config.RACE_LAST_SEASON_NAME, last_year),
]:
    status, race = c.post(config.BASE, token, "/races", {
        "name": name, "date": date.isoformat(), "resultUnit": "TIME", "sortDirection": "ASC",
    })
    if status != 201:
        sys.exit(f"FAIL race {name}: {status} {race}")
    races[key] = race

check("Rennen der laufenden Saison", races["current"]["seasonYear"], upgrade_season)
check("neues Rennen ohne Angabe in der Standard-Variante", races["current"]["ageGroupVariant"], "")
check("Rennen der Vorsaison", races["previous"]["seasonYear"], upgrade_season - 1)

status, person = c.post(config.BASE, token, "/persons", config.PERSON)
if status != 201:
    sys.exit(f"FAIL person: {status} {person}")

def age_group_in(race_key):
    status, participant = c.post(config.BASE, token, "/participants", {
        "raceId": races[race_key]["id"], "personId": person["id"], "raceNumber": 1, "durationMs": 60000,
    })
    if status != 201:
        sys.exit(f"FAIL participant in {race_key}: {status} {participant}")
    return (participant.get("ageGroup") or {}).get("name")

check("laufende Saison wertet nach U14", age_group_in("current"), config.PRE_V4_AGE_GROUPS[0]["name"])
check("Vorsaison hat nach dem Upgrade keine Altersklassen", age_group_in("previous"), None)

# Genau der Weg, den README und Doku dem Bediener nennen: die Vorsaison steht zur Auswahl, obwohl
# für sie nichts konfiguriert ist, und wird rückwärts aus der Upgrade-Saison aufgefüllt.
_, seasons = c.get(config.BASE, token, "/age-groups/seasons")
check("Vorsaison ist auswählbar, obwohl unkonfiguriert",
      upgrade_season - 1 in seasons["seasonsWithRaces"], True)
check("Vorsaison hat noch keine Altersgruppen", upgrade_season - 1 in seasons["seasons"], False)

status, copied = c.post(config.BASE, token, "/age-groups/copy-season",
                        {"fromSeason": upgrade_season, "toSeason": upgrade_season - 1})
check("Rückwärts-Übernahme in die Vorsaison", status, 201)
if status == 201:
    u14 = next(ag for ag in copied if ag["name"] == config.PRE_V4_AGE_GROUPS[0]["name"])
    check("Jahrgänge um ein Jahr zurück",
          [u14["birthYearFrom"], u14["birthYearTo"]],
          [config.PRE_V4_AGE_GROUPS[0]["birthYearFrom"] - 1, config.PRE_V4_AGE_GROUPS[0]["birthYearTo"] - 1])

_, participants = c.get(config.BASE, token, "/participants")
previous = next((p for p in participants if p.get("race") and p["race"]["id"] == races["previous"]["id"]), None)
check("Vorsaison wertet nach der Übernahme wieder",
      (previous.get("ageGroup") or {}).get("name") if previous else "<nicht gefunden>",
      config.PRE_V4_AGE_GROUPS[0]["name"])

# --- 5. Was die API nicht zeigt: Tabellenzustand ---------------------------------------------------
if db_path:
    conn = sqlite3.connect(f"file:{db_path}?mode=ro", uri=True)
    try:
        # Bewusst auf die konkrete Rest-Tabelle geprüft und nicht auf "age_group ist die einzige
        # Tabelle mit diesem Präfix": Letzteres würde an einer künftigen, völlig legitimen Tabelle
        # scheitern, die zufällig so anfängt.
        tables = [row[0] for row in conn.execute(
            "SELECT name FROM sqlite_master WHERE type = 'table'")]
        check("Zwischentabelle des Rebuilds entfernt", "age_group_v1" in tables, False)
        check("Zwischentabelle des V6-Rebuilds entfernt", "age_group_v4" in tables, False)
        check("age_group existiert", "age_group" in tables, True)
        indexes = [row[0] for row in conn.execute(
            "SELECT name FROM sqlite_master WHERE type = 'index' AND tbl_name = 'age_group'"
            " AND name NOT LIKE 'sqlite_autoindex%'")]
        # V4 legte idx_age_group_season_year an; der Rebuild in V6 verliert ihn mit der alten
        # Tabelle und legt ihn auf (season_year, variant) neu an.
        check("Saison-/Varianten-Index angelegt", indexes, ["idx_age_group_season_year_variant"])
        race_columns = [row[1] for row in conn.execute("PRAGMA table_info(race)")]
        check("race.age_group_variant angelegt", "age_group_variant" in race_columns, True)
        # Auf "V4 wurde erfolgreich angewendet" geprüft, nicht auf "4 ist der neueste Stand" -
        # sonst wird dieser Test von der nächsten Migration rot, ohne dass an V4 etwas falsch wäre.
        applied = conn.execute(
            "SELECT success FROM flyway_schema_history WHERE version = '4'").fetchone()
        check("Migration V4 erfolgreich angewendet", applied[0] if applied else None, 1)
        applied_v6 = conn.execute(
            "SELECT success FROM flyway_schema_history WHERE version = '6'").fetchone()
        check("Migration V6 erfolgreich angewendet", applied_v6[0] if applied_v6 else None, 1)
    finally:
        conn.close()
else:
    print("HINWEIS: ohne DB-Pfad übersprungen - Rest-Tabelle, Index und Schema-Version")

print()
if failures:
    sys.exit(f"{len(failures)} Prüfung(en) fehlgeschlagen: {', '.join(failures)}")
print("Upgrade auf saisonbezogene Altersklassen erhält den Bestand und ist aus der Oberfläche vervollständigbar.")
