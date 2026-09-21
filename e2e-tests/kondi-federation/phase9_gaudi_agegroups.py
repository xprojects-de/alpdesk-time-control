"""Phase 9: verify the Gaudi-Modus's age-group-filtered PDF export (Punkte-Mischwertung, split by
age group x gender - each leg's place recomputed strictly within that subset, per
GaudiModeService#computeRankingForCategory)."""
import sys, json, re, subprocess
sys.path.insert(0, '.')
import common as c
import config
from phase6_verify_rankings import (compute_expected_places, combination_totals, RACE_DIRECTIONS)

token = c.login(config.MAIN)
race_ids = json.load(open(c.results_path("state.json")))["race_ids"]
gaudi_id = json.load(open(c.results_path("gaudi_state.json")))["gm_id"]

_, age_groups = c.get(config.MAIN, token, "/age-groups")
print("age groups:", [(a["name"], a["gender"]) for a in age_groups])

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

status, pdf_bytes = c.get_raw(config.MAIN, token, f"/gaudi-modes/{gaudi_id}/export/pdf/agegroups/all")
print("Gaudi agegroups/all PDF status:", status)
assert status == 200, pdf_bytes
with open(c.results_path("gaudi_agegroups_all.pdf"), "wb") as f:
    f.write(pdf_bytes)
text = subprocess.run(["pdftotext", "-layout", c.results_path("gaudi_agegroups_all.pdf"), "-"], capture_output=True, text=True).stdout

sections = re.split(r"\nWertung ([\w ]+?) (weiblich|männlich)\n", "\n" + text)
all_ok, seen_sections, i = True, 0, 1
while i < len(sections) - 1:
    ag_name, gender_de = sections[i], sections[i + 1]
    body = sections[i + 2]
    i += 3
    seen_sections += 1
    gender_en = "FEMALE" if gender_de == "weiblich" else "MALE"

    ag = next((a for a in age_groups if a["name"].lower() == ag_name.strip().lower()), None)
    assert ag is not None, f"age group {ag_name} not found"

    subset_ids = {p["person"]["id"] for p in all_participants
                  if p["person"]["gender"] == gender_en
                  and ag["birthYearFrom"] <= int(p["person"]["birthDate"][:4]) <= ag["birthYearTo"]}
    expected = expected_totals_for_subset(subset_ids)

    pdf_totals = {}
    for line in body.splitlines():
        m = re.match(r"^\s*(\d+)\s+\S.*?\b(\d{4,6})\b.*?(\d+)\s*$", line)
        if m:
            pdf_totals[m.group(2)] = int(m.group(3))

    person_by_id = {p["person"]["id"]: p["person"] for p in all_participants}
    expected_by_ext = {person_by_id[pid]["externalId"]: total for pid, total in expected.items()}

    mismatches = [(ext, exp, pdf_totals.get(ext)) for ext, exp in expected_by_ext.items() if pdf_totals.get(ext) != exp]
    missing = set(expected_by_ext) - set(pdf_totals)
    ok = not mismatches and not missing
    all_ok = all_ok and ok
    print(f"{ag_name}/{gender_de}: expected_scored={len(expected_by_ext)} pdf_rows={len(pdf_totals)} mismatches={len(mismatches)} missing={len(missing)} => {'OK' if ok else 'MISMATCH'}")
    if mismatches:
        print("   ", mismatches[:10])

print(f"\nsections parsed: {seen_sections}")
print("GAUDI ALTERSKLASSEN: " + ("ALLES KORREKT" if all_ok else "ABWEICHUNGEN"))
