"""Phase 11 (run on MAIN once everything else - phase1-10 - has been verified): hand-picks 5
raceNumbers that currently have a normal (status NONE, valid duration) result in ALL 4 races, then
deliberately overwrites their status in specific races to build fixed DNS/DNF/DSQ scenarios for
phase12's Gaudi-Modus keep-in-ranking tests:

  X1: DNS only in Kraft (NONE everywhere else)
  X2: DNF only in Kraft (NONE everywhere else)
  X3: DSQ only in Kraft (NONE everywhere else)
  X4: DNF in Kraft AND DSQ in Lauf (two different bad legs/statuses - tests flag independence:
      keepDnfInRanking alone or keepDsqInRanking alone must NOT be enough to keep X4 ranked, both
      are needed simultaneously)
  X5: DNS in ALL 4 races (must always stay excluded, regardless of flags - PointsCombination-
      ModeCalculator#isEligibleForRanking requires at least one valid leg before the flags are even
      considered)

Only status is overwritten (never durationMs/penalty) - matching how config.INJECTED_STATUS already
works elsewhere in this suite. RankingService/PointsCombinationModeCalculator treat any non-NONE
status as "no valid place" regardless of whether a duration is still on the row, so this is
sufficient and keeps the change minimal/auditable.

The chosen raceNumbers and the exact status layout are written to results/status_scenarios.json so
phase12 doesn't have to re-derive them.
"""
import sys, json
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.MAIN)
race_ids = json.load(open(c.results_path("state.json")))["race_ids"]

RACE_NAMES = [name for name, *_ in config.RACES]

# raceNumber -> participant, per race
by_race = {}
for name in RACE_NAMES:
    _, participants = c.get(config.MAIN, token, f"/participants?raceId={race_ids[name]}")
    by_race[name] = {p["raceNumber"]: p for p in participants}

clean_race_numbers = sorted(
    rn for rn in by_race[RACE_NAMES[0]]
    if all(
        rn in by_race[n]
        and by_race[n][rn].get("status") in (None, "NONE")
        and by_race[n][rn].get("durationMs") is not None
        for n in RACE_NAMES
    )
)
assert len(clean_race_numbers) >= 5, f"nicht genug durchgehend saubere Teilnehmer gefunden: {len(clean_race_numbers)}"
x1, x2, x3, x4, x5 = clean_race_numbers[:5]
print(f"gewaehlte raceNumbers: X1={x1} X2={x2} X3={x3} X4={x4} X5={x5}")


def set_status(race_name, rn, status, comment):
    p = by_race[race_name][rn]
    body = {
        "raceId": race_ids[race_name],
        "personId": p["person"]["id"],
        "raceNumber": rn,
        "teamId": p["team"]["id"] if p.get("team") else None,
        "categoryId": p["category"]["id"] if p.get("category") else None,
        "status": status,
        "comment": comment,
    }
    st, resp = c.put(config.MAIN, token, f"/participants/{p['id']}", body)
    assert st == 200, (race_name, rn, status, st, resp)


# X1-X3 each get one bad leg in the same race; X4 gets two bad legs of DIFFERENT statuses in two
# DIFFERENT races (which of them is irrelevant - only that they are two), so phase12 can prove the
# keep-flags are evaluated per leg rather than "any flag on tolerates everything".
BAD_RACE, SECOND_BAD_RACE = RACE_NAMES[2], RACE_NAMES[3]

set_status(BAD_RACE, x1, "DNS", f"Szenario X1: DNS nur in {BAD_RACE}")
set_status(BAD_RACE, x2, "DNF", f"Szenario X2: DNF nur in {BAD_RACE}")
set_status(BAD_RACE, x3, "DSQ", f"Szenario X3: DSQ nur in {BAD_RACE}")
set_status(BAD_RACE, x4, "DNF", f"Szenario X4: DNF in {BAD_RACE}")
set_status(SECOND_BAD_RACE, x4, "DSQ", f"Szenario X4: DSQ in {SECOND_BAD_RACE}")
for name in RACE_NAMES:
    set_status(name, x5, "DNS", "Szenario X5: DNS in allen Rennen")

scenarios = {
    "x1_dns_only": {"raceNumber": x1, "bad_legs": {BAD_RACE: "DNS"}},
    "x2_dnf_only": {"raceNumber": x2, "bad_legs": {BAD_RACE: "DNF"}},
    "x3_dsq_only": {"raceNumber": x3, "bad_legs": {BAD_RACE: "DSQ"}},
    "x4_dnf_and_dsq": {"raceNumber": x4, "bad_legs": {BAD_RACE: "DNF", SECOND_BAD_RACE: "DSQ"}},
    "x5_dns_everywhere": {"raceNumber": x5, "bad_legs": {n: "DNS" for n in RACE_NAMES}},
}
with open(c.results_path("status_scenarios.json"), "w") as f:
    json.dump(scenarios, f, indent=2)
print("Szenarien gespeichert -> results/status_scenarios.json")
for key, s in scenarios.items():
    print(f"  {key}: raceNumber={s['raceNumber']} bad_legs={s['bad_legs']}")
