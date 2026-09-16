"""Step 2: fetch Race 1's public live results (the same RankingViewService.createRankingEntriesFromParticipants
output PdfExportService and RaceLiveController both render from) and verify, bib by bib:
  - two runners 2ms apart that print the same time (bib3/bib4) share a place, and the next distinct
    time (bib5) is NOT skipped an extra place because of it
  - the printed "Rueckstand" always equals the difference of the two printed totals, not an
    independently-rounded raw gap - see config.py for the exact by-hand numbers
"""
import re, sys, json
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.BASE)
state = json.load(open(c.results_path("state.json")))
race1_id = state["race1_id"]

bib_by_lastname = {last: rn for rn, (first, last, birth_year) in config.PARTICIPANTS.items()}

print("=== Live-Token ermitteln ===")
status, links = c.get(config.BASE, token, f"/races/{race1_id}/live-links")
assert status == 200 and links, links
# Every link embeds the same liveToken regardless of which view it points at (they're all
# "results-html?view=..." index-page links) - extract it from any one and build our own JSON path.
live_token = re.search(r"/public/races/([^/]+)/", links[0]["path"]).group(1)
print("liveToken =", live_token)

print("\n=== Live-Ergebnisse (OVERALL) abrufen ===")
status, results = c.get(config.BASE, None, f"/public/races/{live_token}/results?view=OVERALL")
assert status == 200, results
entries = results["sections"][0]["entries"]
not_ranked = results["notRanked"]
print(f"{len(entries)} gewertet, {len(not_ranked)} nicht gewertet")

problems = []

actual_places, actual_diffs = {}, {}
for e in entries:
    lastname = e["name"].split(" ")[0]
    rn = bib_by_lastname.get(lastname)
    if rn is None:
        problems.append(("UNBEKANNTER NAME IN RANKING", e))
        continue
    actual_places[rn] = e["place"]
    actual_diffs[rn] = e["diffFormatted"]

for rn, expected_place in config.EXPECTED_PLACES.items():
    actual_place = actual_places.get(rn)
    if actual_place != expected_place:
        problems.append((f"bib{rn} Platz", f"erwartet {expected_place}", f"tatsaechlich {actual_place}"))

for rn, expected_diff in config.EXPECTED_DIFF_FORMATTED.items():
    actual_diff = actual_diffs.get(rn)
    if actual_diff != expected_diff:
        problems.append((f"bib{rn} Rueckstand", f"erwartet {expected_diff}", f"tatsaechlich {actual_diff}"))

not_ranked_lastnames = {row["name"].split(" ")[0] for row in not_ranked}
expected_dns_lastname = config.PARTICIPANTS[config.DNS_BIB][1]
if expected_dns_lastname not in not_ranked_lastnames:
    problems.append((f"bib{config.DNS_BIB} sollte 'nicht gewertet' sein", not_ranked_lastnames))

print(f"\nAbweichungen: {len(problems)}")
for p in problems:
    print("  ", p)

print("\n=== Endergebnis-PDF exportieren (Checkpoint-Artefakt) ===")
status, pdf = c.get_raw(config.BASE, token, f"/participants/export/pdf/all/{race1_id}")
assert status == 200
with open(c.results_path("lauf1_endergebnis.pdf"), "wb") as f:
    f.write(pdf)
print(f"PDF generiert ({len(pdf)} bytes)")

if problems:
    print("\nRUNDUNG E2E-TEST (Lauf 1): ABWEICHUNGEN GEFUNDEN")
    sys.exit(1)
print("\nRUNDUNG E2E-TEST (Lauf 1): KORREKT")
