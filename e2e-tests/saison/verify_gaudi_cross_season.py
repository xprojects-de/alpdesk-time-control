#!/usr/bin/env python3
"""Step 5: eine Gaudi-Wertung über zwei Saisons liefert Ergebnisse statt Fehlern.

Eine Vereinsmeisterschaft über ein Dezember- und ein Januar-Rennen spannt bei der Standardgrenze
zwei Saisons. Das ist mehrdeutig - ein Teilnehmer wechselt dazwischen die Klasse - aber kein Grund,
mitten im Rennbetrieb den ganzen Export scheitern zu lassen: gewertet wird nach der Saison des
ersten Rennens, und die Oberfläche weist darauf hin.

Geprüft wird hier beides: dass jeder Endpunkt antwortet (nicht 500), und dass er nach der *richtigen*
Saison wertet - erkennbar daran, dass Bene (Jahrgang 2012) als U14 erscheint, wie es Saison 2025
vorsieht, und als U16, sobald das Januar-Rennen als erstes Rennen konfiguriert ist.
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

def create_mode(name, race_keys):
    status, resp = c.post(config.BASE, token, "/gaudi-modes", {
        "name": name,
        "type": "TIME_COMBINATION",
        "races": [{"raceId": state[f"race_{k}"], "weight": 1} for k in race_keys],
    })
    if status != 201:
        sys.exit(f"FAIL Gaudi-Modus {name}: {status} {resp}")
    return resp["id"]

# Dezember zuerst -> gewertet nach Saison 2025.
dez_first = create_mode("Vereinsmeisterschaft Dez-Jan", ["dez", "jan"])
# Januar zuerst -> gewertet nach Saison 2026. Dieselben Rennen, dieselben Personen.
jan_first = create_mode("Vereinsmeisterschaft Jan-Dez", ["jan", "dez"])

for label, mode_id in [("Dez zuerst", dez_first), ("Jan zuerst", jan_first)]:
    status, ranking = c.get(config.BASE, token, f"/gaudi-modes/{mode_id}/ranking")
    check(f"{label}: Wertung", status, 200)

    # Genau der Endpunkt, der bei strikter Ablehnung nur ein nacktes 500 lieferte.
    status, not_ranked = c.get(config.BASE, token, f"/gaudi-modes/{mode_id}/not-ranked")
    check(f"{label}: nicht-gewertet-Liste", status, 200)

    status, pdf = c.get_raw(config.BASE, token, f"/gaudi-modes/{mode_id}/export/pdf")
    check(f"{label}: PDF-Export", status, 200)
    check(f"{label}: PDF ist ein PDF", pdf[:4], b"%PDF")

    status, csv = c.get_raw(config.BASE, token, f"/gaudi-modes/{mode_id}/export/csv")
    check(f"{label}: CSV-Export", status, 200)

# Bene hat im Januar-Rennen kein Ergebnis, steht also auf der nicht-gewertet-Liste - mit der Klasse,
# die die gewertete Saison für ihn vorsieht. Genau hier zeigt sich, welche Saison gewonnen hat.
for label, mode_id, expected_class in [
    ("Dez zuerst (Saison 2025)", dez_first, "U14"),
    ("Jan zuerst (Saison 2026)", jan_first, "U16"),
]:
    _, not_ranked = c.get(config.BASE, token, f"/gaudi-modes/{mode_id}/not-ranked")
    bene = next((e for e in not_ranked if e["lastName"] == config.BENE["lastName"]), None)
    check(f"{label}: Bene ist nicht gewertet", bene is not None, True)
    if bene:
        check(f"{label}: Klasse von Bene", bene["ageGroup"], expected_class)

for mode_id in (dez_first, jan_first):
    c.delete(config.BASE, token, f"/gaudi-modes/{mode_id}")

print()
if failures:
    sys.exit(f"{len(failures)} Prüfung(en) fehlgeschlagen: {', '.join(failures)}")
print("Saisonübergreifende Gaudi-Wertung liefert Ergebnisse und wertet nach dem ersten Rennen.")
