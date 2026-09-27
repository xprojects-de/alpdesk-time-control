"""Worked example for /time-control-einzelwertung-verify: recompute the results of ONE race
(Einzelwertung) from the race's participant export, independently of the app's Java code, and diff
it against the app's own result PDF.

Shape to copy, not values: everything in CONFIG below is one past run's answers. Replace each one
with what THIS run's user actually provided - never carry them over unasked.
"""
import csv
import json
import math
import re
import sys
import unicodedata

# ----------------------------------------------------------------------------------------------
# CONFIG - replace every value with this run's actual answers
# ----------------------------------------------------------------------------------------------
# GET /participants/export/csv/{raceId} - the roster export with raw durationMs/penalty in ms,
# birthDate, gender and category (header lastName;firstName;birthDate;gender;ageGroup;team;
# category;externalId;raceNumber;durationMs;penalty;measuredAt;comment;status).
ROSTER_CSV = "rennergebnisse.csv"
# `pdftotext -layout` output of the result PDF to check.
REFERENCE_PDF_TEXT = "wertung.txt"
# Which PDF it is - decides the sections and how the "Nicht gewertet" list is scoped:
#   ("all",)                          GET /export/pdf/all/{raceId}                 Gesamtwertung
#   ("gender", "MALE")                GET /export/pdf/gender/MALE/{raceId}
#   ("agegroup", "U14", "FEMALE")     GET /export/pdf/agegroup/U14/gender/FEMALE/{raceId}
#   ("agegroups",)                    GET /export/pdf/agegroups/all/{raceId}
#   ("category", "E-BIKE")            GET /export/pdf/category/{categoryId}/{raceId}
#   ("categories",)                   GET /export/pdf/all/categories/{raceId}
#   ("gender-categories", "FEMALE")   GET /export/pdf/gender/FEMALE/categories/{raceId}
#   ("agegroups-categories",)         GET /export/pdf/agegroups/all/categories/{raceId}
EXPORT = ("all",)
RESULT_UNIT = "TIME"                 # "TIME" (ms) or "POINTS" (stored as hundredths)
SORT_DIRECTION = "ASC"               # "ASC" lower is better, "DESC" higher is better
RESULT_UNIT_LABEL = ""               # POINTS only: the race's unit label, e.g. "Pkt."
# GET /age-groups?season=<race season>&variant=<race variant> - the JSON list, in the order the
# endpoint returns it (the first matching group wins). None when no age-group section is checked.
AGE_GROUPS_JSON = None
# raceNumber -> start-group Zeitversatz in seconds (startlist CSV, `startGroupOffset` m:ss).
# Empty when the race had no start groups with an offset. TIME races only.
START_GROUP_OFFSET_SECONDS = {}

DELIMITER = ";"
UNKNOWN_AGE_GROUP = "Unbekannt"
NO_CATEGORY = "Ohne Kategorie"
GENDER_LABEL = {"MALE": "männlich", "FEMALE": "weiblich"}


# ----------------------------------------------------------------------------------------------
# Values and the app's rounding/formatting
# ----------------------------------------------------------------------------------------------
def round_to_hundredth(ms):
    """RankingService#roundToTensOfMs: Java Math.round is half-up, Python round() is not."""
    return int(math.floor(ms / 10.0 + 0.5)) * 10


def round_for_display(value):
    return round_to_hundredth(value) if RESULT_UNIT == "TIME" else value


def fmt(value):
    """RankingViewService#formatValue."""
    if value is None:
        return "-"
    if RESULT_UNIT == "POINTS":
        label = f" {RESULT_UNIT_LABEL}" if RESULT_UNIT_LABEL.strip() else ""
        return f"{value / 100:.2f}{label}"
    r = round_to_hundredth(value)
    return f"{r // 60000}:{(r // 1000) % 60:02d}.{(r % 1000) // 10:02d}"


def fmt_penalty(penalty):
    """RankingViewService#formatPenalty: a 0 penalty prints as '-' like no penalty."""
    return fmt(None if not penalty else penalty)


def truncate(text, max_length):
    """PdfExportService#truncate."""
    text = text or ""
    return text[:max_length - 3] + "..." if len(text) > max_length else text


def pdf_text(text):
    """PdfExportService#sanitizeForPdf, roughly: letters outside Latin-1 lose their diacritics."""
    out = []
    for ch in (text or "").replace("ł", "l").replace("Ł", "L").replace("đ", "d").replace("Đ", "D"):
        if ord(ch) <= 0xFF:
            out.append(ch)
            continue
        folded = "".join(c for c in unicodedata.normalize("NFKD", ch) if not unicodedata.combining(c))
        out.append(folded if folded and all(ord(c) <= 0xFF for c in folded) else "?")
    return "".join(out)


def normalize_value(cell):
    """A PDF value cell compared loosely on the decimal separator: String.format("%.2f") of a
    POINTS value follows the JVM's default locale, so a German machine prints "12,50"."""
    return cell.replace(",", ".")


# ----------------------------------------------------------------------------------------------
# Step 1 - participants and the value that counts (RankingService#adjustedValue)
# ----------------------------------------------------------------------------------------------
def load_age_groups():
    if AGE_GROUPS_JSON is None:
        return None
    with open(AGE_GROUPS_JSON, encoding="utf-8") as f:
        return json.load(f)


def age_group_of(birth_date, gender, age_groups):
    """AgeGroupService#calculateAgeGroupName: year in range and gender matching (BOTH counts for
    either), first one in the list wins; no birth date or no match -> 'Unbekannt'."""
    if age_groups is None:
        return None
    if not birth_date:
        return UNKNOWN_AGE_GROUP
    year = int(birth_date[:4])
    for g in age_groups:
        if g["birthYearFrom"] <= year <= g["birthYearTo"] and g["gender"] in (gender, "BOTH"):
            return g["name"]
    return UNKNOWN_AGE_GROUP


def int_or_none(raw):
    raw = (raw or "").strip()
    return int(raw) if raw else None


def load_participants(age_groups):
    participants = []
    with open(ROSTER_CSV, newline="", encoding="utf-8-sig") as f:
        for row in csv.DictReader(f, delimiter=DELIMITER):
            race_number = int_or_none(row["raceNumber"])
            duration = int_or_none(row["durationMs"])
            penalty = int_or_none(row["penalty"])
            status = (row["status"] or "NONE").strip().upper()
            net = None
            adjusted = None
            if duration is not None:
                offset_ms = int(START_GROUP_OFFSET_SECONDS.get(race_number, 0) * 1000) if RESULT_UNIT == "TIME" else 0
                net = max(0, duration - offset_ms)
            if net is not None and status == "NONE":
                p = penalty or 0
                adjusted = max(0, net - p if SORT_DIRECTION == "DESC" else net + p)
            participants.append({
                "last": row["lastName"].strip(), "first": row["firstName"].strip(),
                "name": f"{row['lastName'].strip()} {row['firstName'].strip()}".strip(),
                "gender": row["gender"].strip(), "birth": row["birthDate"].strip(),
                "team": row["team"].strip() or "-", "category": row["category"].strip() or None,
                "external_id": row["externalId"].strip(), "race_number": race_number,
                "penalty": penalty, "status": status, "net": net, "adjusted": adjusted,
                "age_group": age_group_of(row["birthDate"].strip(), row["gender"].strip(), age_groups),
            })
    return participants


# ----------------------------------------------------------------------------------------------
# Steps 2-4 - one ranked section (RankingViewService#createRankingEntriesFromParticipants)
# ----------------------------------------------------------------------------------------------
def matches(p, gender=None, age_group=None, category=None):
    """RankingViewService#matchesCategoryFilters."""
    if gender and p["gender"] != gender:
        return False
    if age_group and (p["age_group"] or "").lower() != age_group.lower():
        return False
    if category == NO_CATEGORY and p["category"] is not None:
        return False
    if category and category != NO_CATEGORY and p["category"] != category:
        return False
    return True


def rank(participants, **filters):
    scored = [p for p in participants if p["adjusted"] is not None and matches(p, **filters)]
    scored.sort(key=lambda p: p["adjusted"], reverse=SORT_DIRECTION == "DESC")
    rows = []
    place, previous = 0, None
    leader = round_for_display(scored[0]["adjusted"]) if scored else None
    for i, p in enumerate(scored):
        # Places tie on the PRINTED value (RankingService#placeTieValue), not the raw ms.
        tie_value = round_for_display(p["adjusted"])
        if previous is None or tie_value != previous:
            place = i + 1
        previous = tie_value
        # Rückstand from the already-rounded values, sign from the difference itself.
        diff = "-" if i == 0 else ("+" if tie_value - leader >= 0 else "-") + fmt(abs(tie_value - leader))
        rows.append({"place": place, "p": p, "Wert": fmt(p["net"]), "Strafe": fmt_penalty(p["penalty"]),
                     "Gesamt": fmt(p["adjusted"]), "Diff": diff, "shares_lead": tie_value == leader})
    return rows


def not_ranked(participants, **filters):
    """RankingViewService#createDnsRows: no valid result, sorted by last then first name,
    case-insensitively; status is the recorded one, 'DNS' when none was recorded."""
    rows = [p for p in participants if p["adjusted"] is None and matches(p, **filters)]
    rows.sort(key=lambda p: (p["last"].lower(), p["first"].lower()))
    return [{"position": i + 1, "p": p, "Status": p["status"] if p["status"] != "NONE" else "DNS"}
            for i, p in enumerate(rows)]


# ----------------------------------------------------------------------------------------------
# Step 5 - the sections of the chosen export (PdfExportService#generate*Ranking)
# ----------------------------------------------------------------------------------------------
def age_group_names_youngest_first(age_groups):
    """RankingViewService#uniqueAgeGroupNamesYoungestFirst - birthYearTo descending, female before
    male (enum order FEMALE, MALE, BOTH), distinct, 'Unbekannt' last."""
    if age_groups is None:
        raise SystemExit("This export has age-group sections - AGE_GROUPS_JSON is required.")
    order = {"FEMALE": 0, "MALE": 1, "BOTH": 2}
    names = []
    for g in sorted(age_groups, key=lambda g: (-g["birthYearTo"], order[g["gender"]])):
        if g["name"] not in names:
            names.append(g["name"])
    if not any(n.lower() == UNKNOWN_AGE_GROUP.lower() for n in names):
        names.append(UNKNOWN_AGE_GROUP)
    return names


def age_group_label(name):
    return "ohne Altersklasse" if name == UNKNOWN_AGE_GROUP else name


def categories_by_name(participants):
    """CategoryService#sortedByName (case-sensitive, like String#compareTo) plus 'Ohne Kategorie'.
    Categories nobody in the race has only give empty sections, which are skipped anyway."""
    return sorted({p["category"] for p in participants if p["category"]}) + [NO_CATEGORY]


def expected_document(participants, age_groups):
    """[(title, rows)] in print order, plus the one 'Nicht gewertet' list of the document."""
    kind, *args = EXPORT
    sections = []

    def add(title, **filters):
        rows = rank(participants, **filters)
        if rows:  # empty sections are skipped - except a single-section document, which prints its title anyway
            sections.append((title, rows))

    if kind == "all":
        sections.append(("Gesamtwertung", rank(participants)))
        dns = not_ranked(participants)
    elif kind == "gender":
        sections.append((f"Wertung {GENDER_LABEL[args[0]]}", rank(participants, gender=args[0])))
        dns = not_ranked(participants, gender=args[0])
    elif kind == "agegroup":
        ag, g = args
        sections.append((f"Wertung {ag} {GENDER_LABEL[g]}", rank(participants, gender=g, age_group=ag)))
        dns = not_ranked(participants, gender=g, age_group=ag)
    elif kind == "category":
        sections.append((f"Wertung {args[0]}", rank(participants, category=args[0])))
        dns = not_ranked(participants, category=args[0])
    elif kind == "agegroups":
        for ag in age_group_names_youngest_first(age_groups):
            for g in ("FEMALE", "MALE"):
                add(f"Wertung {age_group_label(ag)} {GENDER_LABEL[g]}", gender=g, age_group=ag)
        dns = not_ranked(participants)
    elif kind == "categories":
        for cat in categories_by_name(participants):
            add(f"Wertung {cat}", category=cat)
        dns = not_ranked(participants)
    elif kind == "gender-categories":
        g = args[0]
        for cat in categories_by_name(participants):
            add(f"Wertung {cat} {GENDER_LABEL[g]}", gender=g, category=cat)
        dns = not_ranked(participants, gender=g)
    elif kind == "agegroups-categories":
        for ag in age_group_names_youngest_first(age_groups):
            for g in ("FEMALE", "MALE"):
                for cat in categories_by_name(participants):
                    add(f"Wertung {age_group_label(ag)} {GENDER_LABEL[g]} {cat}", gender=g, age_group=ag, category=cat)
        dns = not_ranked(participants)
    else:
        raise SystemExit(f"unknown EXPORT {EXPORT!r}")
    return sections, dns


# ----------------------------------------------------------------------------------------------
# The app's PDF, read back (`pdftotext -layout`)
# ----------------------------------------------------------------------------------------------
_TITLE = re.compile(r"^(Gesamtwertung|Wertung .+)$")


def cells_by_header(line, header):
    """Assigns each cell of a row to the header column it starts nearest to. Cells are separated by
    2+ spaces; a column left empty (no team) simply gets no cell, so position counting would
    shift every later value - locating by the header's x-position does not."""
    cells = {}
    for m in re.finditer(r"\S+(?: \S+)*", line):
        col = min(header, key=lambda h: abs(h[1] - m.start()))[0]
        cells[col] = (cells.get(col, "") + " " + m.group()).strip()
    return cells


def parse_reference_pdf(path):
    """{"sections": [(title, [row cells])], "dns": [row cells]} in print order. Header lines repeat
    after a page break; only the latest header of a table is used for its rows."""
    sections, dns = [], []
    target, header = None, None
    for line in open(path, encoding="utf-8").read().splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("powered by"):
            continue
        if stripped == "Nicht gewertet":
            target, header = dns, None
            continue
        if _TITLE.match(stripped) and target is not dns:
            sections.append((stripped, []))
            target, header = sections[-1][1], None
            continue
        if stripped.startswith("Platz ") or stripped.startswith("Position "):
            header = [(m.group(), m.start()) for m in re.finditer(r"\S+(?: \S+)*", line)]
            continue
        if header is None or target is None or not re.match(r"^\s*\d+\s", line):
            continue
        target.append(cells_by_header(line, header))
    return {"sections": sections, "dns": dns}


# ----------------------------------------------------------------------------------------------
# Compare
# ----------------------------------------------------------------------------------------------
def printed_name(p, width):
    return truncate(pdf_text(p["name"]), width)


def row_key(ref_row):
    """How a PDF row is matched to a participant: race number when the PDF prints it, otherwise
    the printed name. Matching by position instead would report a false mismatch for two people
    with the very same raw time, whose order the app leaves to the database."""
    if "StNr." in ref_row:
        return ref_row["StNr."]
    return ref_row["Name Vorname"]


def expected_key(p, with_race_number):
    if with_race_number:
        return str(p["race_number"]) if p["race_number"] is not None else "-"
    return printed_name(p, 30)


def printed_order_is_ranked(ref_rows):
    places = [int(r["Platz"]) for r in ref_rows if r.get("Platz", "").isdigit()]
    return places == sorted(places)


def compare(expected_sections, expected_dns, reference):
    mismatches = []
    ref_titles = [t for t, _ in reference["sections"]]
    exp_titles = [t for t, _ in expected_sections]
    if ref_titles != exp_titles:
        mismatches.append(("Abschnitte", {"berechnet": exp_titles, "PDF": ref_titles}))

    ref_by_title = dict(reference["sections"])
    for title, rows in expected_sections:
        ref_rows = ref_by_title.get(title)
        if ref_rows is None:
            continue
        if len(ref_rows) != len(rows):
            mismatches.append((title, {"Anzahl Zeilen": (len(rows), len(ref_rows))}))
        if not printed_order_is_ranked(ref_rows):
            mismatches.append((title, "Zeilen stehen nicht in Platz-Reihenfolge"))
        has_penalty = any(r["p"]["penalty"] for r in rows)
        with_race_number = bool(ref_rows) and "StNr." in ref_rows[0]
        ref_by_key = {row_key(r): r for r in ref_rows}
        for exp in rows:
            p = exp["p"]
            ref = ref_by_key.get(expected_key(p, with_race_number))
            if ref is None:
                mismatches.append((f"{title}: {p['name']}", "berechnet, aber nicht im PDF"))
                continue
            calc = {"Platz": str(exp["place"]), "Name Vorname": printed_name(p, 30),
                    "Team": truncate(pdf_text(p["team"]), 18), "Wert": exp["Wert"], "Diff": exp["Diff"]}
            if "Jg." in ref:
                calc["Jg."] = p["birth"][:4] if p["birth"] else "-"
            if "Alterskl." in ref and p["age_group"] is not None:
                calc["Alterskl."] = truncate(p["age_group"], 16)
            if has_penalty:
                calc["Strafe"], calc["Gesamt"] = exp["Strafe"], exp["Gesamt"]
            elif "Strafe" in ref or "Gesamt" in ref:
                mismatches.append((f"{title}: {p['name']}", "Strafe/Gesamt gedruckt, obwohl niemand im Abschnitt eine Strafe hat"))
            if exp["shares_lead"] and ref.get("Diff") in ("-", "+" + fmt(0)):
                # Several on exactly the leader's value: which of them prints "-" is up to the
                # order the database returns them in.
                calc["Diff"] = ref["Diff"]
            diffs = {k: (v, ref.get(k, "")) for k, v in calc.items()
                     if normalize_value(v) != normalize_value(ref.get(k, ""))}
            if diffs:
                mismatches.append((f"{title}: {p['name']}", diffs))

    if len(reference["dns"]) != len(expected_dns):
        mismatches.append(("Nicht gewertet", {"Anzahl": (len(expected_dns), len(reference["dns"]))}))
    for exp, ref in zip(expected_dns, reference["dns"]):
        calc = {"Position": str(exp["position"]), "Name Vorname": printed_name(exp["p"], 30), "Status": exp["Status"]}
        diffs = {k: (v, ref.get(k, "")) for k, v in calc.items() if v != ref.get(k, "")}
        if diffs:
            mismatches.append((f"Nicht gewertet {exp['p']['name']}", diffs))
    return mismatches


def main():
    age_groups = load_age_groups()
    participants = load_participants(age_groups)
    sections, dns = expected_document(participants, age_groups)

    scored = sum(1 for p in participants if p["adjusted"] is not None)
    print(f"Teilnehmer: {len(participants)}, gewertet: {scored}, nicht gewertet: {len(participants) - scored}")
    for title, rows in sections:
        print(f"\n{title}")
        for r in rows:
            p = r["p"]
            extra = f" {r['Strafe']:>9} {r['Gesamt']:>10}" if any(x["p"]["penalty"] for x in rows) else ""
            print(f"  {r['place']:>3}. {str(p['race_number'] or '-'):>4} {p['name']:<30} {r['Wert']:>10}{extra} {r['Diff']:>11}")
    if dns:
        print("\nNicht gewertet")
        for r in dns:
            print(f"  {r['position']:>3}. {r['p']['name']:<30} {r['Status']}")

    if REFERENCE_PDF_TEXT:
        mismatches = compare(sections, dns, parse_reference_pdf(REFERENCE_PDF_TEXT))
        print(f"\nVergleich mit dem PDF: {len(mismatches)} Abweichungen")
        for where, what in mismatches:
            print(f"   {where}: {what}")
        return 1 if mismatches else 0
    return 0


if __name__ == "__main__":
    sys.exit(main())
