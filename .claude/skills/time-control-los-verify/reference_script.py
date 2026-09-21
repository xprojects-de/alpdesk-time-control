"""Worked example for /time-control-los-verify: recompute a Gaudi-Modus Los-Verfahren result from
the race's results CSV plus the drawn pairing, independently of the app's Java code.

Shape to copy, not values: everything in CONFIG below is one past run's answers. Replace each one
with what THIS run's user actually provided - never carry them over unasked.

Derived from the suite's own independent recomputations (e2e-tests/bergsprint/manual_verify_los.py
and e2e-tests/rundung/gaudi_los.py), which check the same maths against a live instance.
"""
import csv
import json
import math
import re
import sys
from collections import Counter

# ----------------------------------------------------------------------------------------------
# CONFIG - replace every value with this run's actual answers
# ----------------------------------------------------------------------------------------------
RESULTS_CSV = "results-csv.csv"      # GET /participants/export/results-csv/{raceId}
PAIRING_JSON = "pairing.json"        # GET /gaudi-modes/{id}/pairing  (or build the list by hand
                                     # from the PDF's "Paarung" column - see PAIRS_FALLBACK below)
RESULT_UNIT = "TIME"                 # "TIME" (m:ss.SSS, ascending) or "POINTS" (decimal, descending)
SORT_DIRECTION = "ASC"               # "ASC" for TIME, "DESC" for a higher-is-better POINTS race
# externalId (or "Nachname Vorname") -> start-group Zeitversatz in seconds. Empty when the race
# used no start groups, or none of them had an offset. TIME races only.
START_GROUP_OFFSET_SECONDS = {}
# Fallback when there is no pairing JSON: list of (name1, name2_or_None) read off the PDF.
PAIRS_FALLBACK = None

DELIMITER = ";"


# ----------------------------------------------------------------------------------------------
# Value parsing and the app's rounding
# ----------------------------------------------------------------------------------------------
def parse_value(raw):
    """The results CSV's `time/value` column: 'm:ss.SSS' for TIME, a plain decimal for POINTS
    (stored as hundredths). Returns an int in ms (TIME) or hundredths (POINTS), or None."""
    raw = (raw or "").strip()
    if not raw:
        return None
    if RESULT_UNIT == "POINTS":
        return int(round(float(raw.replace(",", ".")) * 100))
    m = re.fullmatch(r"(?:(\d+):)?(\d+)[.,](\d{1,3})", raw)
    if not m:
        raise ValueError(f"unparsable time: {raw!r}")
    minutes = int(m.group(1) or 0)
    seconds = int(m.group(2))
    frac = m.group(3).ljust(3, "0")
    return minutes * 60_000 + seconds * 1000 + int(frac)


def round_for_display(value):
    """RankingService#roundForDisplay(Race, double): ONE rounding, straight to the printed
    precision - nearest 10ms for TIME, nearest stored unit for POINTS. Java's Math.round is
    half-up on non-negative values, which is NOT Python's round() (half-to-even)."""
    if RESULT_UNIT != "TIME":
        return int(math.floor(value + 0.5))
    return int(math.floor(value / 10.0 + 0.5)) * 10


def fmt(value):
    if value is None:
        return "-"
    if RESULT_UNIT != "TIME":
        return f"{value / 100:.2f}"
    r = round_for_display(value)
    return f"{r // 60000}:{(r // 1000) % 60:02d}.{(r % 1000) // 10:02d}"


# ----------------------------------------------------------------------------------------------
# Step 1 - the value that counts per participant
# ----------------------------------------------------------------------------------------------
def load_results(path):
    """key -> {name, value, penalty, status, adjusted}; key is externalId when present, else
    'Nachname Vorname' (which is also how the pairing names people)."""
    out = {}
    with open(path, newline="", encoding="utf-8") as f:
        for row in csv.DictReader(f, delimiter=DELIMITER):
            name = f"{row['lastName'].strip()} {row['firstName'].strip()}".strip()
            key = (row.get("externalId") or "").strip() or name
            value = parse_value(row.get("time/value"))
            penalty = parse_value(row.get("penalty")) or 0
            status = (row.get("status") or "").strip().upper() or None

            if value is None or (status and status != "NONE"):
                adjusted = None  # RankingService#adjustedValue: excluded from everything
            else:
                offset_ms = int(START_GROUP_OFFSET_SECONDS.get(key, 0) * 1000)
                net = max(0, value - offset_ms)
                adjusted = max(0, net - penalty if SORT_DIRECTION == "DESC" else net + penalty)

            out[key] = {"name": name, "value": value, "penalty": penalty,
                        "status": status, "adjusted": adjusted}
    return out


def load_pairs(results):
    """[(key1, key2_or_None)] - from the pairing JSON, or from PAIRS_FALLBACK."""
    by_name = {v["name"]: k for k, v in results.items()}

    def resolve(name):
        if name is None:
            return None
        name = name.strip()
        if name in by_name:
            return by_name[name]
        raise KeyError(f"pairing names someone the results CSV does not: {name!r}")

    if PAIRS_FALLBACK is not None:
        return [(resolve(a), resolve(b)) for a, b in PAIRS_FALLBACK]
    with open(PAIRING_JSON, encoding="utf-8") as f:
        return [(resolve(p["participant1Name"]), resolve(p.get("participant2Name")))
                for p in json.load(f)]


def same_draw(pairs_a, pairs_b):
    """Do two pair lists describe the same draw? Order of pairs, and order within a pair, are both
    irrelevant. Use this whenever BOTH the pairing JSON and the reference PDF are available:
    "Neu auslosen" replaces the pairing outright, so a pairing fetched after the PDF was exported
    can be a different draw - and then every 'mismatch' below is an artefact, not an app bug."""
    def norm(pairs):
        return sorted(tuple(sorted(k for k in pair if k is not None)) for pair in pairs)
    return norm(pairs_a) == norm(pairs_b)


# ----------------------------------------------------------------------------------------------
# Step 0 - does the draw cover everyone exactly once?
# ----------------------------------------------------------------------------------------------
def check_draw(results, pairs):
    drawn = [k for pair in pairs for k in pair if k is not None]
    counts = Counter(drawn)
    problems = []
    for key, n in counts.items():
        if n > 1:
            problems.append(f"{results[key]['name']} ist in {n} Paaren gezogen")
    for key in results:
        if key not in counts:
            problems.append(f"{results[key]['name']} ist in keinem Paar gezogen")
    expected_pairs = len(results) // 2 + (len(results) % 2)
    if len(pairs) != expected_pairs:
        problems.append(f"{len(pairs)} Paare, erwartet {expected_pairs} bei {len(results)} Teilnehmern")
    return problems


# ----------------------------------------------------------------------------------------------
# Steps 2-5 - field average, pair averages, deviation, places, nicht gewertet
# ----------------------------------------------------------------------------------------------
def compute(results, pairs):
    # Step 2: the mean is built from EVERY scored participant of the race, not only from those
    # sitting in a scorable pair.
    all_values = [r["adjusted"] for r in results.values() if r["adjusted"] is not None]
    if not all_values:
        return None, [], []
    overall_display = round_for_display(sum(all_values) / len(all_values))

    ranked, not_ranked = [], []
    for key1, key2 in pairs:
        r1 = results[key1]
        r2 = results[key2] if key2 else None
        v1 = r1["adjusted"]
        v2 = r2["adjusted"] if r2 else None
        label = f"{r1['name']} & {r2['name']}" if r2 else f"{r1['name']} (Einzel)"

        # Step 3: either member missing a result drops the whole pair.
        if v1 is None or (r2 is not None and v2 is None):
            missing = [r for r in (r1, r2) if r and r["adjusted"] is None]
            status = next((m["status"] for m in missing if m["status"]), "DNS")
            not_ranked.append({"label": label, "status": status,
                               "reason": ", ".join(f"{m['name']}: {m['status'] or 'ohne Ergebnis'}"
                                                   for m in missing)})
            continue

        pair_avg = round_for_display((v1 + v2) / 2.0 if v2 is not None else float(v1))
        ranked.append({
            "label": label, "v1": v1, "v2": v2, "avg": pair_avg,
            # Difference of the two ALREADY-rounded values - not the raw gap rounded afterwards.
            "diff": abs(pair_avg - overall_display),
        })

    # Step 4: smallest deviation first, standard competition places.
    ranked.sort(key=lambda e: e["diff"])
    prev, place = None, 0
    for i, e in enumerate(ranked):
        if prev is None or e["diff"] != prev:
            place = i + 1
        e["place"] = place
        prev = e["diff"]

    not_ranked.sort(key=lambda e: e["label"].lower())
    return overall_display, ranked, not_ranked


def main():
    results = load_results(RESULTS_CSV)
    pairs = load_pairs(results)

    # When both sources are on hand, prove they describe the same draw before trusting anything.
    if PAIRS_FALLBACK is not None:
        try:
            from_json = [(p["participant1Name"], p.get("participant2Name"))
                         for p in json.load(open(PAIRING_JSON, encoding="utf-8"))]
        except FileNotFoundError:
            from_json = None
        if from_json is not None:
            by_name = {v["name"]: k for k, v in results.items()}
            resolved = [(by_name.get(a), by_name.get(b) if b else None) for a, b in from_json]
            if not same_draw(pairs, resolved):
                print("ABBRUCH: Paarung aus JSON und PDF beschreiben verschiedene Auslosungen - "
                      "zwischen den Exporten wurde neu ausgelost. Vergleich waere sinnlos.")
                return 2

    print(f"Teilnehmer im Rennen: {len(results)}, Paare: {len(pairs)}")
    draw_problems = check_draw(results, pairs)
    print("Auslosung: " + ("jeder Teilnehmer genau einmal gezogen"
                           if not draw_problems else f"{len(draw_problems)} Probleme"))
    for p in draw_problems:
        print("   ", p)

    overall, ranked, not_ranked = compute(results, pairs)
    if overall is None:
        print("Keine gueltigen Ergebnisse - keine Wertung.")
        return 1

    scored = len([r for r in results.values() if r["adjusted"] is not None])
    print(f"\nOe-Wert Gesamt: {fmt(overall)}  (aus {scored} gueltigen Ergebnissen)")
    print(f"\n{'Pl':>3}  {'Paarung':<44} {'Wert 1':>10} {'Wert 2':>10} {'Oe Paar':>10} {'Abweichung':>11}")
    for e in ranked:
        print(f"{e['place']:>3}. {e['label']:<44} {fmt(e['v1']):>10} {fmt(e['v2']):>10} "
              f"{fmt(e['avg']):>10} {fmt(e['diff']):>11}")

    if not_ranked:
        print("\nNicht gewertet:")
        for e in not_ranked:
            print(f"   {e['label']:<44} {e['status']:<5} ({e['reason']})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
