"""Phase 10: cross-check this run's Gesamtwertung against a frozen reference result.

The reference (config.REFERENCE_RESULT, by default `reference_gesamtwertung.pdf` next to the race
CSVs) is a Gesamtwertung PDF that Time Control itself exported earlier - fixtures/ ships one
generated from the demo data, and pointing KONDI_DATA_DIR at a real event's directory compares
against that event's own printed result instead. Both sides are parsed with the same parser and
compared per participant: the place inside their class, every station's (place, points), and the
total. This is the suite's regression guard: phases 5-9 prove the rankings are *mathematically*
right by recomputing them in Python, this phase proves the whole pipeline still produces the exact
result it produced before.

The file is optional - if it is missing, this phase skips itself instead of failing, so a checkout
without one (or a real event you have no printed result for) still runs everything else.

    python3 phase10_verify_reference.py [path/to/reference.pdf|.txt]

A plain .txt file produced by `pdftotext -layout` works in place of the PDF.

Comparing against a REAL event's result additionally requires that the Gaudi-Modus settings match
what that event was scored with - above all config.GAUDI_FLAGS, which decide whether somebody who
is DNS/DNF/DSQ in a single station stays in the Gesamtwertung with 0 points for that leg or drops
out of it entirely. With the flags set differently than the event used, every total still matches
but the ranked field differs, which shows up here as missing people plus a one-place shift for
everybody below them. Deliberate differences (a status you injected on purpose, a known fixture
artifact) go into KNOWN_INTENTIONAL_DEVIATIONS below, keyed by externalId.
"""
import os
import re
import subprocess
import sys

sys.path.insert(0, '.')
import common as c
import config

# externalId -> why this person is allowed to differ from the reference.
KNOWN_INTENTIONAL_DEVIATIONS = {
    # "60379": "DSQ injected by us in Schnelligkeit (reference has a normal result)",
}

STATIONS = [race[0] for race in config.RACES]
OUR_RESULT = c.results_path("gaudi_agegroups_all.pdf")


def to_text(path):
    if path.lower().endswith(".pdf"):
        return subprocess.run(["pdftotext", "-layout", path, "-"], capture_output=True, text=True).stdout
    with open(path, encoding="utf-8") as f:
        return f.read()


def parse(path):
    """externalId -> {place inside the class, total points, per-station (place, points)}.

    Both files are Time Control's own age-group Gesamtwertung export, where each participant is a
    line ending in their total, followed by one indented line per station ending in that station's
    place and points. A station line whose result is DNS/DNF/DSQ carries "-" for the place and 0
    points; it is recorded as None so a tolerated leg compares equal on both sides.
    """
    people, current = {}, None
    for line in to_text(path).splitlines():
        stripped = line.strip()
        station = next((name for name in STATIONS if stripped.startswith(name)), None)
        if station is not None:
            if current is not None:
                tail = stripped[len(station):].strip()
                matched = re.match(r"^.*?(\d+)\s+(\d+)$", tail)
                people[current]["stations"][station] = (
                    (int(matched.group(1)), int(matched.group(2))) if matched else None
                )
            continue
        # A participant line: place, then their name/id/team, ending in the total - with or
        # without the optional race number and birth year columns (see pdf_row_place_and_id).
        row = c.pdf_row_place_and_id(line)
        total = re.search(r"(\d+)\s*$", line)
        if row and total:
            current = row[1]
            people[current] = {"place": row[0], "total": int(total.group(1)), "stations": {}}
    return people


def main():
    reference_path = sys.argv[1] if len(sys.argv) > 1 else config.REFERENCE_RESULT
    if not os.path.exists(reference_path):
        print(f"Referenzergebnis '{reference_path}' nicht vorhanden - Phase 10 uebersprungen.")
        return 0
    if not os.path.exists(OUR_RESULT):
        sys.exit(f"'{OUR_RESULT}' fehlt - Phase 9 muss vor dieser Phase gelaufen sein.")

    ours, reference = parse(OUR_RESULT), parse(reference_path)
    print(f"parsed {len(ours)} Personen aus unserem Lauf, {len(reference)} aus '{reference_path}'")

    common_ids = set(ours) & set(reference)
    missing = set(reference) - set(ours)
    extra = set(ours) - set(reference)
    print(f"vergleichbar: {len(common_ids)}")

    # A comparison of nothing is not a pass: an empty side (a moved artifact, a failed export, a
    # parser that no longer matches the PDF layout) must fail loudly rather than report a match.
    if not common_ids:
        sys.exit("PHASE 10: NICHTS ZU VERGLEICHEN - das ist ein Fehler dieses Tests, kein Match.")

    differences = []
    for ext_id in sorted(common_ids, key=int):
        if ext_id in KNOWN_INTENTIONAL_DEVIATIONS:
            continue
        mine, theirs = ours[ext_id], reference[ext_id]
        if (mine["place"], mine["total"]) != (theirs["place"], theirs["total"]):
            differences.append((ext_id, "PLATZ/GESAMT", (theirs["place"], theirs["total"]),
                                (mine["place"], mine["total"])))
        for station in STATIONS:
            if mine["stations"].get(station) != theirs["stations"].get(station):
                differences.append((ext_id, station, theirs["stations"].get(station),
                                    mine["stations"].get(station)))

    unexplained_missing = sorted(missing - set(KNOWN_INTENTIONAL_DEVIATIONS), key=int)
    unexplained_extra = sorted(extra - set(KNOWN_INTENTIONAL_DEVIATIONS), key=int)
    if unexplained_missing:
        print(f"in der Referenz, aber nicht in unserem Lauf: {unexplained_missing}")
    if unexplained_extra:
        print(f"in unserem Lauf, aber nicht in der Referenz: {unexplained_extra}")
    print(f"Abweichungen (Referenz -> unser Lauf): {len(differences)}")
    for difference in differences[:30]:
        print("  ", difference)

    ok = not differences and not unexplained_missing and not unexplained_extra
    print()
    print("PHASE 10 REFERENZABGLEICH: " + ("MATCH" if ok else "ABWEICHUNGEN GEFUNDEN"))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
