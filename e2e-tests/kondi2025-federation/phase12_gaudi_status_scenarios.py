"""Phase 12 (run after phase11 has injected the X1-X5 DNS/DNF/DSQ scenarios): creates SIX
POINTS_COMBINATION Gaudi-Modus instances over all 4 races, one per keepDns/Dnf/DsqInRanking flag
combination, and for each one independently verifies (in Python, mirroring
PointsCombinationModeCalculator#isEligibleForRanking/isTolerated) that:

  - every person's total points/place in the /ranking JSON match a from-scratch Python
    recomputation that applies the SAME per-leg tolerance rule the backend uses (a leg without a
    valid place is tolerated - 0 points, status shown - only if ITS OWN status's flag is set; a
    person with zero valid legs anywhere is always excluded, regardless of flags),
  - X1-X5's specific `legs[]` entries show the expected 0-points/null-place/status marking when
    tolerated, and X1-X5 are entirely absent from the ranking when not tolerated,
  - the PDF's "Nicht gewertet" section matches the same expected-excluded set (checked for ALL SIX
    scenarios, not just one, since this is the first e2e coverage of these flags reaching the PDF).

The 6 flag combinations were chosen so X1-X5 each land in ranked vs. excluded differently across
them - notably X4 (bad in two different legs, DNF+DSQ) only stays ranked when BOTH matching flags
are set simultaneously (proves the flags are evaluated independently per leg, not just "any flag
on tolerates everything"), and X5 (bad in every leg) stays excluded in all six regardless.
"""
import sys, json
sys.path.insert(0, '.')
import common as c
import config
from phase6_verify_rankings import compute_expected_places, parse_pdf_places, RACE_DIRECTIONS

RACE_NAMES = list(RACE_DIRECTIONS.keys())

token = c.login(config.MAIN)
race_ids = json.load(open(c.results_path("state.json")))["race_ids"]
scenarios_meta = json.load(open(c.results_path("status_scenarios.json")))

# The FIS-Schema seeded by Flyway migration V1 (31 places; anything beyond that scores 0) - same
# table phase8_gaudi_combo.py uses, duplicated here rather than shared (matches this suite's
# existing per-phase-script convention).
FIS_SCHEMA = [100, 80, 60, 50, 45, 40, 36, 32, 29, 26, 24, 22, 20, 18, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
def points_for_place(place):
    idx = place - 1
    return FIS_SCHEMA[idx] if 0 <= idx < len(FIS_SCHEMA) else 0

# Snapshot every race's participants + places ONCE - phase11's status injections are already
# applied and don't change between scenarios (only the Gaudi-Modus flags do).
per_race = {}
for race_name in RACE_NAMES:
    _, participants = c.get(config.MAIN, token, f"/participants?raceId={race_ids[race_name]}")
    direction = RACE_DIRECTIONS[race_name]
    places_by_ext, _ = compute_expected_places(participants, direction)
    by_person = {p["person"]["id"]: p for p in participants}
    places_by_person = {p["person"]["id"]: places_by_ext[p["person"]["externalId"]]
                         for p in participants if p["person"]["externalId"] in places_by_ext}
    per_race[race_name] = {"participants_by_person": by_person, "places_by_person": places_by_person}

all_person_ids = set()
for race_name in RACE_NAMES:
    all_person_ids |= set(per_race[race_name]["participants_by_person"].keys())

# raceNumber -> personId, for pointing X1-X5 at the right ranking entries below.
rn_to_pid = {p["raceNumber"]: pid for pid, p in per_race[RACE_NAMES[0]]["participants_by_person"].items()}


def compute_expected(dns_flag, dnf_flag, dsq_flag):
    """Mirrors PointsCombinationModeCalculator#isEligibleForRanking/isTolerated exactly."""
    tolerated = {"DNS": dns_flag, "DNF": dnf_flag, "DSQ": dsq_flag}
    totals = {}
    for pid in all_person_ids:
        any_valid, ok, total = False, True, 0
        for race_name in RACE_NAMES:
            place = per_race[race_name]["places_by_person"].get(pid)
            if place is not None:
                any_valid = True
                total += points_for_place(place)
                continue
            status = per_race[race_name]["participants_by_person"][pid].get("status") or "NONE"
            if status == "NONE":
                # status NONE but no valid place means no duration at all - effectiveStatus() falls
                # back to generic DNS for tolerance purposes in that case too.
                status = "DNS"
            if not tolerated.get(status, False):
                ok = False
        if any_valid and ok:
            totals[pid] = total
    return totals


def expected_places_from_totals(totals):
    sorted_pairs = sorted(totals.items(), key=lambda kv: -kv[1])
    places, prev, place = {}, None, 0
    for i, (pid, tot) in enumerate(sorted_pairs):
        if prev is None or tot != prev:
            place = i + 1
        places[pid] = place
        prev = tot
    return places


# (key, label, keepDns, keepDnf, keepDsq)
FLAG_SCENARIOS = [
    ("alle_aus", "Alle Flags aus (Baseline)", False, False, False),
    ("nur_dns", "Nur keepDnsInRanking", True, False, False),
    ("nur_dnf", "Nur keepDnfInRanking", False, True, False),
    ("nur_dsq", "Nur keepDsqInRanking", False, False, True),
    ("alle_an", "Alle drei Flags an", True, True, True),
    ("dns_dnf_ohne_dsq", "DNS+DNF an, DSQ aus (Unabhaengigkeits-Check)", True, True, False),
]

races_body = [{"raceId": race_ids[n], "weight": 1.0} for n in RACE_NAMES]
overall_ok = True

for key, label, dns_flag, dnf_flag, dsq_flag in FLAG_SCENARIOS:
    print()
    print("=" * 70)
    print(f"Szenario '{key}': {label} (DNS={dns_flag} DNF={dnf_flag} DSQ={dsq_flag})")
    print("=" * 70)

    status, gm = c.post(config.MAIN, token, "/gaudi-modes", {
        "races": races_body, "type": "POINTS_COMBINATION", "name": f"Status-Test {label}",
        "keepDnsInRanking": dns_flag, "keepDnfInRanking": dnf_flag, "keepDsqInRanking": dsq_flag,
    })
    assert status == 201, gm
    gm_id = gm["id"]
    assert gm["keepDnsInRanking"] == dns_flag and gm["keepDnfInRanking"] == dnf_flag and gm["keepDsqInRanking"] == dsq_flag, \
        f"Flags kamen nicht wie gesendet zurueck: {gm}"

    expected_totals = compute_expected(dns_flag, dnf_flag, dsq_flag)
    expected_places = expected_places_from_totals(expected_totals)
    expected_excluded_pids = all_person_ids - set(expected_totals)

    status, ranking = c.get(config.MAIN, token, f"/gaudi-modes/{gm_id}/ranking")
    assert status == 200, ranking
    actual_totals = {e["personId"]: e["totalPoints"] for e in ranking}
    actual_places = {e["personId"]: e["place"] for e in ranking}
    by_pid = {e["personId"]: e for e in ranking}

    total_mismatches = [(pid, exp, actual_totals.get(pid)) for pid, exp in expected_totals.items() if actual_totals.get(pid) != exp]
    place_mismatches = [(pid, expected_places[pid], actual_places.get(pid)) for pid in expected_places if actual_places.get(pid) != expected_places[pid]]
    missing = set(expected_totals) - set(actual_totals)
    extra = set(actual_totals) - set(expected_totals)

    print(f"erwartet gewertet: {len(expected_totals)} von {len(all_person_ids)}, tatsaechlich: {len(ranking)}")
    print(f"  total-point mismatches: {len(total_mismatches)}")
    for m in total_mismatches[:10]:
        print("   ", m)
    print(f"  place mismatches: {len(place_mismatches)}")
    for m in place_mismatches[:10]:
        print("   ", m)
    if missing:
        print(f"  MISSING from actual ranking: {missing}")
    if extra:
        print(f"  EXTRA in actual ranking (should be excluded): {extra}")

    # X1-X5: verify presence/absence and, when present, the exact leg breakdown for their bad leg(s).
    RACE_INDEX = {n: i for i, n in enumerate(RACE_NAMES)}
    scenario_ok = not total_mismatches and not place_mismatches and not missing and not extra
    for sc_key, sc in scenarios_meta.items():
        pid = rn_to_pid[sc["raceNumber"]]
        should_be_ranked = pid in expected_totals
        is_ranked = pid in by_pid
        if should_be_ranked != is_ranked:
            print(f"  ABWEICHUNG {sc_key} (raceNumber={sc['raceNumber']}): erwartet ranked={should_be_ranked}, tatsaechlich={is_ranked}")
            scenario_ok = False
            continue
        if is_ranked:
            for race_name, expected_status in sc["bad_legs"].items():
                leg = by_pid[pid]["legs"][RACE_INDEX[race_name]]
                tolerated_here = {"DNS": dns_flag, "DNF": dnf_flag, "DSQ": dsq_flag}[expected_status]
                if tolerated_here:
                    # Null fields (place here) are omitted entirely from the JSON rather than sent
                    # as null - .get() rather than [] is required to read them.
                    ok_leg = leg.get("status") == expected_status and leg.get("points") == 0 and leg.get("place") is None
                    if not ok_leg:
                        print(f"  ABWEICHUNG {sc_key} Bein {race_name}: erwartet status={expected_status} points=0 place=null, tatsaechlich={leg}")
                        scenario_ok = False
    print(f"  X1-X5 Detailpruefung: {'OK' if scenario_ok else 'ABWEICHUNGEN'}")

    # PDF: "Nicht gewertet" must match the same expected-excluded set, by externalId.
    status, pdf_bytes = c.get_raw(config.MAIN, token, f"/gaudi-modes/{gm_id}/export/pdf")
    assert status == 200
    _, pdf_dns = parse_pdf_places(pdf_bytes, f"status_scenario_{key}.pdf")
    expected_excluded_ext_ids = {per_race[RACE_NAMES[0]]["participants_by_person"][pid]["person"]["externalId"] for pid in expected_excluded_pids}
    dns_mismatch = expected_excluded_ext_ids.symmetric_difference(pdf_dns)
    if dns_mismatch:
        print(f"  PDF 'Nicht gewertet'-Abweichung: {dns_mismatch}")
        scenario_ok = False
    else:
        print(f"  PDF 'Nicht gewertet': {len(pdf_dns)} Eintraege, stimmt mit Erwartung ueberein")

    overall_ok = overall_ok and scenario_ok
    print(f"  Szenario '{key}': {'KORREKT' if scenario_ok else 'ABWEICHUNGEN GEFUNDEN'}")

print()
print("=" * 70)
print("GAUDI STATUS-SZENARIEN: " + ("ALLE KORREKT" if overall_ok else "ES GIBT ABWEICHUNGEN - siehe oben"))
print("=" * 70)
assert overall_ok, "Mindestens ein Status-Szenario wich von der erwarteten Wertung ab"
