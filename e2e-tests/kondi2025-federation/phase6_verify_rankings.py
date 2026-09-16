"""Phase 6: independently recompute each race's overall ranking in Python (same standard-
competition-ranking algorithm as RankingService.computePlaces) from the live participant data,
and cross-check it against the actual "Gesamt" PDF export by extracting (externalId -> place)
pairs from the rendered text. Also importable by phase7/8/9 for the same helper functions."""
import sys, json, re, subprocess
sys.path.insert(0, '.')
import common as c
import config

RACE_DIRECTIONS = {name: direction for name, _, _, direction, _, _ in config.RACES}

def adjusted_value(direction, duration_ms, penalty, status):
    if duration_ms is None or (status is not None and status != "NONE"):
        return None
    penalty = penalty or 0
    if direction == "DESC":
        return max(0, duration_ms - penalty)
    return max(0, duration_ms + penalty)

def tie_value(value_ms, result_unit):
    """Mirrors RankingService.placeTieValue: a TIME race's value is rounded to the nearest 10ms
    (hundredth of a second, the display precision) before comparing for ties, so two results that
    print identically share a place. Uses integer round-half-up (matching Java's Math.round on a
    non-negative double) rather than Python's round-half-to-even, and rather than float division,
    to avoid disagreeing with the server at exact .5 boundaries."""
    if value_ms is None or result_unit != "TIME":
        return value_ms
    return (value_ms + 5) // 10 * 10

def compute_expected_places(participants, direction):
    """Standard competition ranking (1,2,2,4,...). Returns dict externalId -> place.
    Sorted by the raw adjusted value (the exact order the server sorts by), but a participant
    only gets a new place when its *tie value* (see tie_value) differs from the previous one -
    matching RankingService.computePlaces, which ranks by the raw value but only bumps the place
    counter on a change in the rounded-for-display value."""
    result_unit = participants[0]["race"]["resultUnit"] if participants else None
    scored = []
    for p in participants:
        av = adjusted_value(direction, p.get("durationMs"), p.get("penalty"), p.get("status"))
        if av is not None:
            scored.append((av, p))
    if direction == "DESC":
        scored.sort(key=lambda t: -t[0])
    else:
        scored.sort(key=lambda t: t[0])

    places = {}
    prev_tie = None
    place = 0
    for i, (av, p) in enumerate(scored):
        tie = tie_value(av, result_unit)
        if prev_tie is None or tie != prev_tie:
            place = i + 1
        places[p["person"]["externalId"]] = place
        prev_tie = tie
    return places, scored

def parse_pdf_places(pdf_bytes, tmp_name):
    tmp_name = c.results_path(tmp_name)
    with open(tmp_name, "wb") as f:
        f.write(pdf_bytes)
    text = subprocess.run(["pdftotext", "-layout", tmp_name, "-"], capture_output=True, text=True).stdout
    places = {}
    dns_ids = set()
    in_dns = False
    for line in text.splitlines():
        if line.strip().startswith("Nicht gewertet"):
            in_dns = True
            continue
        m = re.match(r"^\s*(\d+)\s+.*?\b(\d{4,6})\b", line)
        if not m:
            continue
        num, ext_id = m.group(1), m.group(2)
        if in_dns:
            dns_ids.add(ext_id)
        else:
            places[ext_id] = int(num)
    return places, dns_ids

if __name__ == "__main__":
    token = c.login(config.MAIN)
    race_ids = json.load(open(c.results_path("state.json")))["race_ids"]

    print("=" * 70)
    print("GESAMT-Auswertung: automatischer Abgleich Python-Berechnung vs. PDF")
    print("=" * 70)

    all_ok = True
    for race_name, direction in RACE_DIRECTIONS.items():
        race_id = race_ids[race_name]
        _, participants = c.get(config.MAIN, token, f"/participants?raceId={race_id}")
        expected_places, scored = compute_expected_places(participants, direction)

        status, pdf_bytes = c.get_raw(config.MAIN, token, f"/participants/export/pdf/all/{race_id}")
        assert status == 200
        pdf_places, pdf_dns = parse_pdf_places(pdf_bytes, f"verify_{race_name}.pdf")

        expected_dns = {p["person"]["externalId"] for p in participants
                         if adjusted_value(direction, p.get("durationMs"), p.get("penalty"), p.get("status")) is None}

        mismatches = [(e, exp, pdf_places.get(e)) for e, exp in expected_places.items() if pdf_places.get(e) != exp]
        missing = set(expected_places) - set(pdf_places)
        extra = set(pdf_places) - set(expected_places)
        dns_mismatch = expected_dns.symmetric_difference(pdf_dns)

        ok = not mismatches and not missing and not extra and not dns_mismatch
        all_ok = all_ok and ok
        print(f"\n{race_name} (direction={direction}): {len(expected_places)} ranked, {len(expected_dns)} nicht gewertet")
        print(f"  place mismatches: {len(mismatches)}")
        for m in mismatches[:10]:
            print(f"    externalId={m[0]} expected_place={m[1]} pdf_place={m[2]}")
        if missing:
            print(f"  MISSING from PDF ranking: {missing}")
        if extra:
            print(f"  EXTRA in PDF ranking (not expected): {extra}")
        if dns_mismatch:
            print(f"  DNS-list mismatch: {dns_mismatch}")
        print(f"  => {'OK' if ok else 'MISMATCH FOUND'}")

    print()
    print("ALLES KORREKT" if all_ok else "ES GIBT ABWEICHUNGEN - siehe oben")
