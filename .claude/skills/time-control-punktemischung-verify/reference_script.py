"""
Reference template for a Punkte-Kombination verification run (see SKILL.md).

This is a worked example of the correct SHAPE of the recomputation, distilled from a real
verification run - not a drop-in tool. Every run has different files, a different number of
stations, and different answers to the questions SKILL.md says must always be asked. Copy this
into the scratchpad, then edit the CONFIG block below from what the user actually answered - do
not reuse another event's CONFIG values (flags, weights, gender source) as defaults.

Before adapting this, reread the three source files SKILL.md points to - this template mirrors
their logic as of when it was written, but the code is the source of truth if they've since
changed.
"""

import csv
from decimal import Decimal, ROUND_HALF_UP

BASE = "/path/to/exported/csvs/"  # TODO: set to this run's export directory

# TODO: one entry per leg race, in the order the Gaudi-Modus instance references them.
# "weight" MUST come from asking the user (SKILL.md Inputs #1) - never leave at 1.0 without
# having asked and been told that's correct for every race.
FILES = {
    1: {"file": "station1.csv", "kind": "TIME", "weight": 1.0},
    2: {"file": "station2.csv", "kind": "POINTS", "weight": 1.0},
}

# TODO: the points scale actually configured for this Gaudi-Modus instance. Defaults to this
# club's fixed "FIS-Schema" per SKILL.md - only change this if the user says a different scale
# was configured.
SCALE = [100, 80, 60, 50, 45, 40, 36, 32, 29, 26, 24, 22, 20, 18, 16, 15, 14, 13, 12, 11,
         10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

# TODO: MUST come from explicitly asking the user (SKILL.md Inputs #3) - never assume False (or
# any other value) without having asked this run's question and gotten an answer.
KEEP_DNS_IN_RANKING = False
KEEP_DNF_IN_RANKING = False
KEEP_DSQ_IN_RANKING = False

# TODO: start-group Zeitversatz per TIME leg race, in SECONDS, keyed by externalId (SKILL.md
# Inputs #6) - built from that race's Startlisten-CSV (externalId + startGroupOffset "m:ss", empty =
# no offset). MUST come from asking; leave a race out (or the dict empty) only once the user said no
# start group with an offset was used there. POINTS races are never netted, even if listed here.
# The results CSV value is the RAW clock time.
START_GROUP_OFFSET_SECONDS = {
    # 1: {"12345": 30, "23456": 60},
}

# TODO: (ageGroup, gender)-keyed groups, only needed if the reference output is category-split
# (SKILL.md "Category-split rankings"). Populate this from whichever source the user picked -
# the roster CSV export (preferred, independent of the PDF) or the reference PDF's own section
# headers (accepted fallback, but then category assignment itself isn't independently checked).
# Leave as {"ALL": None} for a single flat ranking with no category split.
CATEGORY_GROUPS = {
    "ALL": None,  # None = no filtering, i.e. the whole field
}


def points_for_place(place):
    if place is None:
        return 0
    idx = place - 1
    return SCALE[idx] if idx < len(SCALE) else 0


def parse_time_or_float(s):
    s = (s or "").strip()
    if not s:
        return None
    if ":" in s:
        m, sec = s.split(":")
        return float(m) * 60 + float(sec)
    return float(s)


def round_to_hundredths(v):
    # Equivalent to RankingService.roundToTensOfMs when the value is expressed in seconds.
    return float(Decimal(str(v)).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP))


def load_station(num):
    cfg = FILES[num]
    rows = []
    with open(BASE + cfg["file"], encoding="utf-8-sig") as f:
        reader = csv.DictReader(f, delimiter=";")
        for row in reader:
            if row.get("externalId"):
                rows.append(row)
    return rows, cfg["kind"]


def status_of(row):
    return (row.get("status") or "").strip().upper() or None


def tolerated(status):
    return {
        "DNS": KEEP_DNS_IN_RANKING,
        "DNF": KEEP_DNF_IN_RANKING,
        "DSQ": KEEP_DSQ_IN_RANKING,
    }.get(status, False)


def std_places(sorted_keys, value_of):
    places = {}
    for i, k in enumerate(sorted_keys):
        if i > 0 and value_of(k) == value_of(sorted_keys[i - 1]):
            places[k] = places[sorted_keys[i - 1]]
        else:
            places[k] = i + 1
    return places


def compute_station_places(rows, kind, eligible_ids=None, offsets=None):
    """externalId -> place, among participants with a valid result, restricted to eligible_ids.
    Also returns externalId -> status for everyone WITHOUT a valid place (None if simply missing,
    i.e. effective DNS per RankingService.dnsStatusLabel), for the eligibility step to consult."""
    entries = {}
    bad_status = {}
    for row in rows:
        eid = row["externalId"]
        if eligible_ids is not None and eid not in eligible_ids:
            continue
        status = status_of(row)
        raw_val = row.get("time/value") or row.get("value") or ""
        val = parse_time_or_float(raw_val)
        if val is None or status in ("DNF", "DNS", "DSQ"):
            bad_status[eid] = status or "DNS"  # missing result with no status defaults to DNS
            continue
        if kind == "TIME" and offsets and eid in offsets:
            val = max(val - offsets[eid], 0.0)  # RankingService.netDurationMs
        penalty = parse_time_or_float(row.get("penalty")) or 0.0
        adj = val + penalty if kind == "TIME" else val - penalty
        adj = max(adj, 0.0)
        if kind == "TIME":
            adj = round_to_hundredths(adj)
        entries[eid] = adj

    sorted_keys = sorted(entries, key=lambda k: entries[k], reverse=(kind != "TIME"))
    places = std_places(sorted_keys, lambda k: entries[k])
    return places, bad_status


def compute_ranking(rows_by_station, participant_ids):
    """One full pass of Steps 1-4 restricted to participant_ids - call once per category group
    (its result carries that group's ranking AND its 'nicht gewertet' list), or once over the whole
    field when the export being verified is unfiltered."""
    station_places = {}
    station_bad_status = {}
    for num in FILES:
        rows, kind = rows_by_station[num]
        places, bad_status = compute_station_places(rows, kind, eligible_ids=participant_ids,
                                                    offsets=START_GROUP_OFFSET_SECONDS.get(num))
        station_places[num] = places
        station_bad_status[num] = bad_status

    weighted_races = [n for n in FILES if FILES[n]["weight"] != 0]

    included, excluded = {}, {}
    for eid in participant_ids:
        per_race = {}
        any_valid = False
        all_ok = True
        for num in weighted_races:
            if eid in station_places[num]:
                place = station_places[num][eid]
                pts = points_for_place(place) * FILES[num]["weight"]
                per_race[num] = (place, pts)
                any_valid = True
            else:
                status = station_bad_status[num].get(eid, "DNS")
                if tolerated(status):
                    per_race[num] = (None, 0.0)
                else:
                    all_ok = False
        if not any_valid or not all_ok:
            excluded[eid] = "keine gueltige Platzierung, oder nicht tolerierter Status"
            continue
        total = sum(pts for _, pts in per_race.values())
        included[eid] = {
            "total": int(Decimal(str(total)).quantize(Decimal("1"), rounding=ROUND_HALF_UP)),
            "per_race": per_race,
        }

    sorted_ids = sorted(included, key=lambda k: -included[k]["total"])
    final_places = std_places(sorted_ids, lambda k: included[k]["total"])
    return included, excluded, final_places, sorted_ids


def main():
    rows_by_station = {num: load_station(num) for num in FILES}

    names = {}
    all_ids = set()
    for rows, _ in rows_by_station.values():
        for row in rows:
            names[row["externalId"]] = (row["lastName"], row["firstName"], row["team"])
            all_ids.add(row["externalId"])

    for label, ids in CATEGORY_GROUPS.items():
        group_ids = ids if ids is not None else all_ids
        included, excluded, final_places, sorted_ids = compute_ranking(rows_by_station, group_ids)
        print(f"\n### {label} (gewertet={len(included)}, nicht gewertet={len(excluded)})")
        for eid in sorted_ids:
            last, first, team = names[eid]
            print(f"  {final_places[eid]:>2}  {last} {first:<15} {team:<25} {included[eid]['total']:>4}")

    # "Nicht gewertet" is scoped like the export it belongs to (GaudiModeService#computeDnsEntries
    # takes the same gender/age-group filter as computeRankingForCategory): a gender or
    # age-group+gender export lists only that group, the plain/all-age-groups exports and the
    # /{id}/not-ranked JSON list the whole field. The per-category pass above already produced each
    # group's own list; this global pass is for the unfiltered exports.
    #
    # NOTE: this changed on 2026-09-21. A reference PDF from an older build carries the global list
    # on EVERY export, filtered or not - use this global pass to compare against those.
    _, excluded_global, _, _ = compute_ranking(rows_by_station, all_ids)
    print("\n### Nicht gewertet (ungefiltert - fuer /export/pdf, agegroups/all, /not-ranked)")
    for eid, reason in excluded_global.items():
        last, first, team = names[eid]
        print(f"  {last} {first} ({team}): {reason}")


if __name__ == "__main__":
    main()
