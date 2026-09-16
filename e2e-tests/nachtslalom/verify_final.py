"""Step 5: archive Lauf 2's measurements + sync them onto the participants (same as Lauf 1), then
independently cross-check every result against what was actually fed to the device, and print a
final pass/fail summary for the whole scenario."""
import sys, json
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.BASE)
state = json.load(open(c.results_path("state.json")))
lauf2_expected = json.load(open(c.results_path("lauf2_expected.json")))
race2_id = state["race2_id"]

print("=== Lauf 2 archivieren + synchronisieren ===")
status, resp = c.post(config.BASE, token, f"/races/{race2_id}/archive-measurements", {})
assert status == 200, resp
status, resp = c.post(config.BASE, token, f"/race-measurements/race/{race2_id}/sync-to-participants", {})
assert status == 200, resp

status, participants = c.get(config.BASE, token, f"/participants?raceId={race2_id}")
by_bib = {p["raceNumber"]: p for p in participants}

problems = []
expected_durations = {int(rn): ms for rn, ms in lauf2_expected["expected_durations_by_rn"].items()}
dns_rn = lauf2_expected["dns_rn"]

for rn in range(1, 13):
    p = by_bib[rn]
    if rn == dns_rn:
        if p.get("durationMs") is not None or p["status"] == "NONE":
            problems.append((rn, "DNS-Teilnehmer sollte keine Zeit und Status != NONE haben", p))
        continue
    expected = expected_durations.get(rn)
    actual = p.get("durationMs")
    if expected != actual:
        problems.append((rn, f"erwartet {expected}", f"tatsaechlich {actual}"))

print(f"\nAbweichungen: {len(problems)}")
for p in problems:
    print("  ", p)

print("\n=== Endergebnis-PDF exportieren (Abschluss-Artefakt) ===")
status, pdf = c.get_raw(config.BASE, token, f"/participants/export/pdf/all/{race2_id}")
assert status == 200
with open(c.results_path("endergebnis_lauf2.pdf"), "wb") as f:
    f.write(pdf)
print(f"Endergebnis-PDF generiert ({len(pdf)} bytes)")

print("\n" + "=" * 70)
if problems:
    print(f"NACHTSLALOM E2E-TEST: {len(problems)} ABWEICHUNG(EN) GEFUNDEN")
    print("=" * 70)
    sys.exit(1)
else:
    print("NACHTSLALOM E2E-TEST: ALLES KORREKT")
    print("=" * 70)
