"""Step 5: independently recompute each gender x category subset's ranking and cross-check it
against the actual gender+category PDF export."""
import sys, json, re, subprocess
sys.path.insert(0, '.')
import common as c
import config

token = c.login(config.BASE)
state = json.load(open(c.results_path("state.json")))
race_id = state["race_id"]

def adjusted_value(p):
    if p.get("durationMs") is None or (p.get("status") not in (None, "NONE")):
        return None
    return p["durationMs"]  # ASC race, no penalties in this scenario

def compute_expected_places(participants):
    scored = [(adjusted_value(p), p) for p in participants]
    scored = [(v, p) for v, p in scored if v is not None]
    scored.sort(key=lambda t: t[0])
    places, prev, place = {}, None, 0
    for i, (v, p) in enumerate(scored):
        if prev is None or v != prev:
            place = i + 1
        places[p["raceNumber"]] = place
        prev = v
    return places

status, all_participants = c.get(config.BASE, token, f"/participants?raceId={race_id}")

print("=" * 70)
print("DAMEN und HERREN je Kategorie")
print("=" * 70)
all_ok = True
for gender_en, gender_de in [("FEMALE", "weiblich"), ("MALE", "maennlich")]:
    status, pdf_bytes = c.get_raw(config.BASE, token, f"/participants/export/pdf/gender/{gender_en}/categories/{race_id}")
    assert status == 200, (gender_en, status, pdf_bytes)
    fname = c.results_path(f"verify_{gender_de}_categories.pdf")
    with open(fname, "wb") as f:
        f.write(pdf_bytes)
    full_text = subprocess.run(["pdftotext", "-layout", fname, "-"], capture_output=True, text=True).stdout

    sections = re.split(r"\nWertung ([\w\- ]+?) (weiblich|männlich)\n", "\n" + full_text)
    i = 1
    while i < len(sections) - 1:
        cat_name = sections[i].strip()
        body = sections[i + 2]
        i += 3
        subset = [p for p in all_participants
                  if p["person"]["gender"] == gender_en
                  and ((p.get("category") or {}).get("name") == cat_name
                       or (cat_name == "Ohne Kategorie" and not p.get("category")))]
        expected_places = compute_expected_places(subset)

        body_ranked = body.split("Nicht gewertet")[0]
        pdf_places = {}
        for line in body_ranked.splitlines():
            m = re.match(r"^\s*(\d+)\s+\S+?(\d+)\s", line)
            if m:
                pdf_places[int(m.group(2))] = int(m.group(1))

        mismatches = [(rn, exp, pdf_places.get(rn)) for rn, exp in expected_places.items() if pdf_places.get(rn) != exp]
        missing = set(expected_places) - set(pdf_places)
        extra = set(pdf_places) - set(expected_places)
        ok = not mismatches and not missing and not extra
        all_ok = all_ok and ok
        print(f"{gender_de}/{cat_name}: erwartet={len(expected_places)} pdf={len(pdf_places)} mismatches={len(mismatches)} => {'OK' if ok else 'MISMATCH'}")
        if mismatches:
            print("   ", mismatches[:10])

print()
print("GESCHLECHT x KATEGORIE: " + ("ALLES KORREKT" if all_ok else "ABWEICHUNGEN"))
