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
    age_groups = c.age_groups_of_race(config.MAIN, token, participants[0]["race"])
    all_ranked, _ = compute_expected_places(participants, direction)

    status, pdf_bytes = c.get_raw(config.MAIN, token, f"/participants/export/pdf/agegroups/all/{race_id}")
    assert status == 200
    fname = c.results_path(f"verify_{race_name}_agegroups.pdf")
    with open(fname, "wb") as f:
        f.write(pdf_bytes)
    text = subprocess.run(["pdftotext", "-layout", fname, "-"], capture_output=True, text=True).stdout

    total_pdf_ranked = section_mismatches = 0
    for ag_name, gender_en, body in c.age_group_sections(text):
        known = ag_name == c.UNKNOWN_AGE_GROUP_SECTION or any(a["name"].lower() == ag_name.lower() for a in age_groups)
        if not known:
            section_mismatches += 1
            print(f"  {race_name}: section 'Wertung {ag_name}' names no age group of the race's season/variant")
            continue

        subset = [p for p in participants if c.in_age_group_section(p["person"], ag_name, gender_en, age_groups)]
        expected_places, _ = compute_expected_places(subset, direction)

        pdf_places = {}
        for line in body.split("Nicht gewertet")[0].splitlines():
            row = c.pdf_row_place_and_id(line)
            if row:
                pdf_places[row[1]] = row[0]
        total_pdf_ranked += len(pdf_places)

        mismatches = [(e, exp, pdf_places.get(e)) for e, exp in expected_places.items() if pdf_places.get(e) != exp]
        missing = set(expected_places) - set(pdf_places)
        extra = set(pdf_places) - set(expected_places)
        if mismatches or missing or extra:
            section_mismatches += 1
            print(f"  {race_name}/{ag_name}/{gender_en}: expected={len(expected_places)} pdf={len(pdf_places)} "
                  f"mismatches={mismatches[:5]} missing={missing} extra={extra}")

    # Every ranked participant lands in exactly one age group x gender section - a section the
    # parser could not see, or one the PDF left out, shows up here.
    ok = section_mismatches == 0 and total_pdf_ranked == len(all_ranked)
    all_ok = all_ok and ok
    print(f"{race_name}: ranked in race={len(all_ranked)}, ranked in PDF sections={total_pdf_ranked}, "
          f"sections_with_mismatch={section_mismatches} => {'OK' if ok else 'MISMATCH'}")

print()
print("ALLES KORREKT (Gender+Altersklassen)" if all_ok else "ES GIBT ABWEICHUNGEN (Gender+Altersklassen) - siehe oben")
sys.exit(0 if all_ok else 1)
