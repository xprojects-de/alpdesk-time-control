"""Phase 9: verify the Gaudi-Modus's age-group-filtered PDF export (Punkte-Mischwertung, split by
age group x gender - each leg's place recomputed strictly within that subset, per
GaudiModeService#computeRankingForCategory)."""
import sys, json, re, subprocess
sys.path.insert(0, '.')
import common as c
import config
from phase6_verify_rankings import (compute_expected_places, combination_totals, places_from_totals, RACE_DIRECTIONS)

token = c.login(config.MAIN)
race_ids = json.load(open(c.results_path("state.json")))["race_ids"]
gaudi_id = json.load(open(c.results_path("gaudi_state.json")))["gm_id"]

per_race = {}
for race_name, direction in RACE_DIRECTIONS.items():
    race_id = race_ids[race_name]
    _, participants = c.get(config.MAIN, token, f"/participants?raceId={race_id}")
    per_race[race_name] = {"participants": participants, "direction": direction}

def expected_totals_for_subset(person_ids_subset):
    """The per-class Gesamtwertung: each leg's place is recomputed strictly within this age
    group x gender subset (per GaudiModeService#computeRankingForCategory), then the same
    tolerance rules as the overall ranking decide who is scored at all."""
    places_by_race, participants_by_race = {}, {}
    for race_name, data in per_race.items():
        subset_participants = [p for p in data["participants"] if p["person"]["id"] in person_ids_subset]
        places_by_ext, _ = compute_expected_places(subset_participants, data["direction"])
        participants_by_race[race_name] = {p["person"]["id"]: p for p in subset_participants}
        places_by_race[race_name] = {p["person"]["id"]: places_by_ext[p["person"]["externalId"]]
                                     for p in subset_participants
                                     if p["person"]["externalId"] in places_by_ext}
    return combination_totals(person_ids_subset, places_by_race, participants_by_race, config.GAUDI_FLAGS)


all_participants = next(iter(per_race.values()))["participants"]
# A Gaudi-Modus is scored against the first race's season and variant (E09).
age_groups = c.age_groups_of_race(config.MAIN, token, all_participants[0]["race"])
print("age groups:", [(a["name"], a["gender"]) for a in age_groups])

status, pdf_bytes = c.get_raw(config.MAIN, token, f"/gaudi-modes/{gaudi_id}/export/pdf/agegroups/all")
print("Gaudi agegroups/all PDF status:", status)
assert status == 200, pdf_bytes
with open(c.results_path("gaudi_agegroups_all.pdf"), "wb") as f:
    f.write(pdf_bytes)
text = subprocess.run(["pdftotext", "-layout", c.results_path("gaudi_agegroups_all.pdf"), "-"], capture_output=True, text=True).stdout

all_ok, seen_sections = True, 0
for ag_name, gender_en, body in c.age_group_sections(text):
    seen_sections += 1
    known = ag_name == c.UNKNOWN_AGE_GROUP_SECTION or any(a["name"].lower() == ag_name.lower() for a in age_groups)
    if not known:
        all_ok = False
        print(f"{ag_name}/{gender_en}: section names no age group of the scoring season/variant => MISMATCH")
        continue

    subset_ids = {p["person"]["id"] for p in all_participants
                  if c.in_age_group_section(p["person"], ag_name, gender_en, age_groups)}
    expected = expected_totals_for_subset(subset_ids)

    pdf_totals, pdf_places = {}, {}
    for line in body.split("Nicht gewertet")[0].splitlines():
        # A participant line ends in their total; the per-station lines below it don't start
        # with a number.
        row = c.pdf_row_place_and_id(line)
        total = re.search(r"(\d+)\s*$", line)
        if row and total:
            pdf_places[row[1]] = row[0]
            pdf_totals[row[1]] = int(total.group(1))

    person_by_id = {p["person"]["id"]: p["person"] for p in all_participants}
    expected_by_ext = {person_by_id[pid]["externalId"]: total for pid, total in expected.items()}
    expected_places = places_from_totals(expected_by_ext)

    mismatches = [(ext, exp, pdf_totals.get(ext)) for ext, exp in expected_by_ext.items() if pdf_totals.get(ext) != exp]
    place_mismatches = [(ext, exp, pdf_places.get(ext)) for ext, exp in expected_places.items()
                        if ext in pdf_places and pdf_places[ext] != exp]
    missing = set(expected_by_ext) - set(pdf_totals)
    extra = set(pdf_totals) - set(expected_by_ext)
    ok = not mismatches and not place_mismatches and not missing and not extra
    all_ok = all_ok and ok
    print(f"{ag_name}/{gender_en}: expected_scored={len(expected_by_ext)} pdf_rows={len(pdf_totals)} mismatches={len(mismatches)} "
          f"place_mismatches={len(place_mismatches)} missing={len(missing)} extra={len(extra)} => {'OK' if ok else 'MISMATCH'}")
    if mismatches or place_mismatches or extra:
        print("   ", mismatches[:10], place_mismatches[:10], sorted(extra)[:10])

print(f"\nsections parsed: {seen_sections}")
print("GAUDI ALTERSKLASSEN: " + ("ALLES KORREKT" if all_ok else "ABWEICHUNGEN"))
sys.exit(0 if all_ok else 1)
