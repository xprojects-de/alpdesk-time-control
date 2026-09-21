"""Phase 13 (guardrail, run after phase11/12): keepDns/Dnf/DsqInRanking are only ever consumed by
PointsCombinationModeCalculator - TimeCombinationModeCalculator/TeamModeCalculator/LosModeCalculator
never look at them, so setting them on a non-POINTS_COMBINATION Gaudi-Modus is accepted by the API
but must have ZERO effect on the computed ranking. Creates two TIME_COMBINATION instances over the
exact same races/data - one with all three flags true, one with all three false. GaudiModeService
.validate() only lets a TIME_COMBINATION combine races that share the same resultUnit AND
sortDirection (not necessarily TIME ones), so this picks the largest group of stations that do.
If the ranking output differs, a future change to TimeCombinationModeCalculator has accidentally
started consuming these flags without a corresponding backend test catching it.
"""
import sys, json
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.MAIN)
race_ids = json.load(open(c.results_path("state.json")))["race_ids"]

groups = {}
for name, unit, _, direction, *_ in config.RACES:
    groups.setdefault((unit, direction), []).append(name)
(unit, direction), COMBINABLE_RACE_NAMES = max(groups.items(), key=lambda kv: len(kv[1]))
assert len(COMBINABLE_RACE_NAMES) >= 2, (
    "braucht mindestens 2 Rennen mit gleicher Einheit+Sortierrichtung fuer eine TIME_COMBINATION, "
    f"gefunden: { {k: len(v) for k, v in groups.items()} }")
print(f"Zeit-Kombination ueber {len(COMBINABLE_RACE_NAMES)} Rennen mit {unit}/{direction}: "
      f"{COMBINABLE_RACE_NAMES}")
races_body = [{"raceId": race_ids[n]} for n in COMBINABLE_RACE_NAMES]

variants = {}
for key, flags in [("flags_true", True), ("flags_false", False)]:
    status, gm = c.post(config.MAIN, token, "/gaudi-modes", {
        "races": races_body, "type": "TIME_COMBINATION", "name": f"Guardrail Zeit-Kombination ({key})",
        "keepDnsInRanking": flags, "keepDnfInRanking": flags, "keepDsqInRanking": flags,
    })
    assert status == 201, gm
    status, ranking = c.get(config.MAIN, token, f"/gaudi-modes/{gm['id']}/ranking")
    assert status == 200, ranking
    variants[key] = ranking
    print(f"{key}: {len(ranking)} gewertete Eintraege (keepDns/Dnf/Dsq alle auf {flags} gesetzt)")

# Compare ignoring nothing race-specific - TIME_COMBINATION entries carry no gaudiMode-identifying
# field, so the two lists (same races, same participant data) must be byte-for-byte identical.
identical = variants["flags_true"] == variants["flags_false"]
print()
print("GUARDRAIL keepDns/Dnf/DsqInRanking ohne Effekt auf TIME_COMBINATION: " + ("KORREKT" if identical else "ABWEICHUNG GEFUNDEN"))
if not identical:
    for i, (a, b) in enumerate(zip(variants["flags_true"], variants["flags_false"])):
        if a != b:
            print(f"  Eintrag {i} unterscheidet sich:")
            print(f"    flags_true : {a}")
            print(f"    flags_false: {b}")
assert identical, "keepDns/Dnf/DsqInRanking beeinflusst TIME_COMBINATION - sollte es nicht (siehe Docstring)"
