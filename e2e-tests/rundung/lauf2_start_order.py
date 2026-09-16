"""Step 3: derive Race 2's start order from Race 1's ranking (REVERSE_TOP_N=3) and verify bib3/bib4
- tied for place 3 purely because of the rounding fix - move together into the reversed top block,
instead of being split across the reversed/normal boundary the way the old, unfixed place logic
would have (see config.py's EXPECTED_START_SEQUENCE for the by-hand derivation of both outcomes)."""
import sys, json
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.BASE)
state = json.load(open(c.results_path("state.json")))
race2_id = state["race2_id"]

print("=== Startreihenfolge aus Lauf 1 ableiten ===")
status, updated = c.post(config.BASE, token, f"/participants/race/{race2_id}/apply-start-order-from-previous-race", {})
assert status == 200, updated

status, participants = c.get(config.BASE, token, f"/participants?raceId={race2_id}")
assert status == 200, participants
by_bib = {p["raceNumber"]: p for p in participants}

problems = []
for rn, expected_seq in config.EXPECTED_START_SEQUENCE.items():
    actual_seq = by_bib[rn].get("startSequence")
    if actual_seq != expected_seq:
        problems.append((f"bib{rn} startSequence", f"erwartet {expected_seq}", f"tatsaechlich {actual_seq}"))

print(f"\nAbweichungen: {len(problems)}")
for p in problems:
    print("  ", p)

if problems:
    print("\nRUNDUNG E2E-TEST (Lauf 2 Startreihenfolge): ABWEICHUNGEN GEFUNDEN")
    sys.exit(1)
print("\nRUNDUNG E2E-TEST (Lauf 2 Startreihenfolge): KORREKT - bib3/bib4 sind gemeinsam gewandert")
