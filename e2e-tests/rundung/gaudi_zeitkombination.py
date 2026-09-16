"""Step 4: Gaudi-Modus Zeit-Kombination over two tiny leg races, twice - once ASC (normal, lower
wins) and once DESC (higher wins, explicitly supported by TimeCombinationModeCalculator). Verifies:
  - the combined "Rueckstand" (diffMs) equals the difference of the two already-rounded totals, not
    an independently-rounded raw gap (same class of fix as Race 1's single-race Rueckstand)
  - for the DESC combo, the trailing participant's diffMs is negative, and the PDF actually prints a
    proper "-0:29.45" instead of the old unconditional "+" prefix producing garbage like "+0:-29..."
"""
import subprocess, sys, json
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.BASE)
state = json.load(open("state.json"))
anton_person_id = state["persons"]["1"]
boris_person_id = state["persons"]["2"]

problems = []

def make_leg_race(name, sort_direction, times_ms):
    status, race = c.post(config.BASE, token, "/races", {
        "name": name, "date": "2026-02-01", "resultUnit": "TIME", "sortDirection": sort_direction,
    })
    assert status == 201, race
    race_id = race["id"]
    for label, person_id in (("Anton", anton_person_id), ("Boris", boris_person_id)):
        status, part = c.post(config.BASE, token, "/participants", {
            "raceId": race_id, "personId": person_id, "raceNumber": 1 if label == "Anton" else 2,
            "durationMs": times_ms[label],
        })
        assert status == 201, (name, label, part)
    return race_id

def make_time_combination(name, race_ids):
    status, gm = c.post(config.BASE, token, "/gaudi-modes", {
        "races": [{"raceId": rid} for rid in race_ids], "type": "TIME_COMBINATION", "name": name,
    })
    assert status == 201, gm
    status, ranking = c.get(config.BASE, token, f"/gaudi-modes/{gm['id']}/ranking")
    assert status == 200, ranking
    by_label = {e["label"]: e for e in ranking}
    return gm["id"], by_label

print("=== ASC-Kombination (Anton fuehrt, Boris liegt zurueck) ===")
asc_a = make_leg_race(config.KOMBI_BEIN_A_NAME, "ASC", config.KOMBI_BEIN_A_TIMES_MS)
asc_b = make_leg_race(config.KOMBI_BEIN_B_NAME, "ASC", config.KOMBI_BEIN_B_TIMES_MS)
asc_gm_id, asc_by_label = make_time_combination("Kombi ASC", [asc_a, asc_b])

anton_asc = asc_by_label.get("Reiser Anton")
boris_asc = asc_by_label.get("Lechner Boris")
if anton_asc is None or boris_asc is None:
    problems.append(("ASC-Kombination: Eintraege fehlen", asc_by_label.keys()))
else:
    if anton_asc["valueMs"] != 5083:
        problems.append(("ASC Anton valueMs", "erwartet 5083", anton_asc["valueMs"]))
    if boris_asc["valueMs"] != 34525:
        problems.append(("ASC Boris valueMs", "erwartet 34525", boris_asc["valueMs"]))
    if anton_asc.get("diffMs") is not None:
        problems.append(("ASC Anton diffMs (Leader)", "erwartet fehlend/null", anton_asc.get("diffMs")))
    if boris_asc.get("diffMs") != config.KOMBI_ASC_EXPECTED_DIFF_MS:
        problems.append(("ASC Boris diffMs", f"erwartet {config.KOMBI_ASC_EXPECTED_DIFF_MS}", boris_asc.get("diffMs")))

print("=== DESC-Kombination (Boris fuehrt, Anton liegt zurueck -> negatives diffMs) ===")
desc_c = make_leg_race(config.KOMBI_BEIN_C_NAME, "DESC", config.KOMBI_BEIN_A_TIMES_MS)
desc_d = make_leg_race(config.KOMBI_BEIN_D_NAME, "DESC", config.KOMBI_BEIN_B_TIMES_MS)
desc_gm_id, desc_by_label = make_time_combination("Kombi DESC", [desc_c, desc_d])

anton_desc = desc_by_label.get("Reiser Anton")
boris_desc = desc_by_label.get("Lechner Boris")
if anton_desc is None or boris_desc is None:
    problems.append(("DESC-Kombination: Eintraege fehlen", desc_by_label.keys()))
else:
    if boris_desc.get("diffMs") is not None:
        problems.append(("DESC Boris diffMs (Leader)", "erwartet fehlend/null", boris_desc.get("diffMs")))
    if anton_desc.get("diffMs") != config.KOMBI_DESC_EXPECTED_DIFF_MS:
        problems.append(("DESC Anton diffMs", f"erwartet {config.KOMBI_DESC_EXPECTED_DIFF_MS}", anton_desc.get("diffMs")))

print("\n=== DESC-PDF exportieren und Vorzeichen im gedruckten Text pruefen ===")
status, pdf_bytes = c.get_raw(config.BASE, token, f"/gaudi-modes/{desc_gm_id}/export/pdf")
assert status == 200
with open("kombi_desc.pdf", "wb") as f:
    f.write(pdf_bytes)
text = subprocess.run(["pdftotext", "-layout", "kombi_desc.pdf", "-"], capture_output=True, text=True).stdout
if config.KOMBI_DESC_EXPECTED_PDF_TEXT not in text:
    problems.append(("DESC-PDF Rueckstand-Text", f"'{config.KOMBI_DESC_EXPECTED_PDF_TEXT}' nicht gefunden im PDF-Text"))
# The old bug always prefixed "+", so a negative diff rendered as "+0:-29..." - explicitly rule that
# garbled pattern out rather than only checking the correct string is present somewhere.
if "+0:-" in text or "+-" in text:
    problems.append(("DESC-PDF Rueckstand-Text", "verstuemmelter '+'-Praefix-Text gefunden", text))

print(f"\nAbweichungen: {len(problems)}")
for p in problems:
    print("  ", p)

if problems:
    print("\nRUNDUNG E2E-TEST (Zeit-Kombination): ABWEICHUNGEN GEFUNDEN")
    sys.exit(1)
print("\nRUNDUNG E2E-TEST (Zeit-Kombination): KORREKT")
