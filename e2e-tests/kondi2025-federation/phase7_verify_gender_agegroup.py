"""Phase 7: same idea as phase 6, but for the gender-filtered and age-group-filtered PDF exports -
each subset's ranking is recomputed independently (place 1 within that subset, not the global
rank) and cross-checked against the actual PDF."""
import sys, json, re, subprocess
sys.path.insert(0, '.')
import common as c
import config
from phase6_verify_rankings import adjusted_value, compute_expected_places, parse_pdf_places, RACE_DIRECTIONS

token = c.login(config.MAIN)
race_ids = json.load(open(c.results_path("state.json")))["race_ids"]
all_ok = True

print("=" * 70)
print("GESCHLECHTS-Auswertung (Damen/Herren) fuer alle Rennen")
print("=" * 70)
for race_name, direction in RACE_DIRECTIONS.items():
    race_id = race_ids[race_name]
    _, participants = c.get(config.MAIN, token, f"/participants?raceId={race_id}")
    for gender_de, gender_en in [("weiblich", "FEMALE"), ("maennlich", "MALE")]:
        subset = [p for p in participants if p["person"]["gender"] == gender_en]
        expected_places, _ = compute_expected_places(subset, direction)

        status, pdf_bytes = c.get_raw(config.MAIN, token, f"/participants/export/pdf/gender/{gender_en}/{race_id}")
        assert status == 200, (race_name, gender_en, status)
        pdf_places, pdf_dns = parse_pdf_places(pdf_bytes, f"verify_{race_name}_{gender_en}.pdf")

        mismatches = [(e, exp, pdf_places.get(e)) for e, exp in expected_places.items() if pdf_places.get(e) != exp]
        missing = set(expected_places) - set(pdf_places)
        extra = set(pdf_places) - set(expected_places)
        ok = not mismatches and not missing and not extra
        all_ok = all_ok and ok
        print(f"{race_name}/{gender_de}: {len(expected_places)} ranked, mismatches={len(mismatches)}, missing={len(missing)}, extra={len(extra)} => {'OK' if ok else 'MISMATCH'}")
        if mismatches:
            print("   ", mismatches[:10])

print()
print("=" * 70)
print("ALTERSKLASSEN-Auswertung (alle Kombinationen) fuer alle Rennen")
print("=" * 70)
for race_name, direction in RACE_DIRECTIONS.items():
    race_id = race_ids[race_name]
    _, participants = c.get(config.MAIN, token, f"/participants?raceId={race_id}")
    _, age_groups = c.get(config.MAIN, token, "/age-groups")

    status, pdf_bytes = c.get_raw(config.MAIN, token, f"/participants/export/pdf/agegroups/all/{race_id}")
    assert status == 200
    fname = c.results_path(f"verify_{race_name}_agegroups.pdf")
    with open(fname, "wb") as f:
        f.write(pdf_bytes)
    text = subprocess.run(["pdftotext", "-layout", fname, "-"], capture_output=True, text=True).stdout

    sections = re.split(r"\nWertung ([\w ]+?) (weiblich|männlich)\n", "\n" + text)
    total_expected_ranked = total_pdf_ranked = section_mismatches = 0
    i = 1
    while i < len(sections) - 1:
        ag_name, gender_de = sections[i], sections[i + 1]
        body = sections[i + 2]
        i += 3
        gender_en = "FEMALE" if gender_de == "weiblich" else "MALE"

        ag = next((a for a in age_groups if a["name"].lower() == ag_name.strip().lower()), None)
        if ag is None:
            print(f"  WARNING: age group '{ag_name}' from PDF not found via API")
            continue

        subset = [p for p in participants
                  if p["person"]["gender"] == gender_en
                  and ag["birthYearFrom"] <= int(p["person"]["birthDate"][:4]) <= ag["birthYearTo"]]
        expected_places, _ = compute_expected_places(subset, direction)
        total_expected_ranked += len(expected_places)

        body_ranked_part = body.split("Nicht gewertet")[0]
        pdf_places = {}
        for line in body_ranked_part.splitlines():
            m = re.match(r"^\s*(\d+)\s+.*?\b(\d{4,6})\b", line)
            if m:
                pdf_places[m.group(2)] = int(m.group(1))
        total_pdf_ranked += len(pdf_places)

        mismatches = [(e, exp, pdf_places.get(e)) for e, exp in expected_places.items() if pdf_places.get(e) != exp]
        missing = set(expected_places) - set(pdf_places)
        if mismatches or missing:
            section_mismatches += 1
            print(f"  {race_name}/{ag_name}/{gender_de}: expected={len(expected_places)} pdf={len(pdf_places)} mismatches={mismatches[:5]} missing={missing}")

    ok = section_mismatches == 0
    all_ok = all_ok and ok
    print(f"{race_name}: total expected ranked={total_expected_ranked}, total in PDF={total_pdf_ranked}, sections_with_mismatch={section_mismatches} => {'OK' if ok else 'MISMATCH'}")

print()
print("ALLES KORREKT (Gender+Altersklassen)" if all_ok else "ES GIBT ABWEICHUNGEN (Gender+Altersklassen) - siehe oben")
