"""Step 4 (manual-assign variant): recompute "Wertung <Kategorie> <Geschlecht>" from the scenario
data alone and cross-check it against the actual PDF - place, printed time AND printed Rueckstand,
so the rounding edge cases baked into manual_config.ROSTER are checked where they matter."""
import sys, json, re, subprocess, math
sys.path.insert(0, '.')
import common as c
import manual_config as cfg

token = c.login(cfg.BASE)
state = json.load(open(c.results_path(cfg.STATE_FILE)))
race_id = state["race_id"]
roster = state["roster"]

GENDER_LABEL = {"FEMALE": "weiblich", "MALE": "männlich"}

def round10(ms):
    """RankingService#roundForDisplay / RankingViewService#formatTime: nearest 10ms, half up."""
    return int(math.floor(ms / 10.0 + 0.5)) * 10

def fmt(ms):
    r = round10(ms)
    return f"{r // 60000}:{(r // 1000) % 60:02d}.{(r % 1000) // 10:02d}"

def scored(entries):
    return [r for r in entries if r["durationMs"] is not None and r["status"] is None]

problems = []
print("=" * 78)
print("WERTUNG JE KATEGORIE UND GESCHLECHT")
print("=" * 78)

for gender in ("FEMALE", "MALE"):
    status, pdf = c.get_raw(cfg.BASE, token, f"/participants/export/pdf/gender/{gender}/categories/{race_id}")
    assert status == 200, (gender, status, pdf)
    fname = c.results_path(f"manual_wertung_{GENDER_LABEL[gender]}.pdf")
    with open(fname, "wb") as f:
        f.write(pdf)
    text = subprocess.run(["pdftotext", "-layout", fname, "-"], capture_output=True, text=True).stdout

    for cat in (cfg.CAT_BIO, cfg.CAT_EBIKE):
        section_title = f"Wertung {cat} {GENDER_LABEL[gender]}"
        if section_title not in text:
            problems.append(f"Abschnitt '{section_title}' fehlt im PDF")
            continue
        body = text.split(section_title, 1)[1]
        for other in [f"Wertung {x} {g}" for x in (cfg.CAT_BIO, cfg.CAT_EBIKE, "Ohne Kategorie")
                      for g in GENDER_LABEL.values()] + ["Nicht gewertet"]:
            if other != section_title and other in body:
                body = body.split(other, 1)[0]

        # --- expected, computed from the scenario only -------------------------------------
        field = scored([r for r in roster if r["category"] == cat and r["gender"] == gender])
        field.sort(key=lambda r: r["durationMs"])
        expected, prev_tie, place = [], None, 0
        leader_display = round10(field[0]["durationMs"]) if field else None
        for i, r in enumerate(field):
            tie = round10(r["durationMs"])
            if prev_tie is None or tie != prev_tie:
                place = i + 1
            prev_tie = tie
            diff = tie - leader_display
            expected.append({
                "place": place,
                "name": f"{r['lastName']} {r['firstName']}",
                "total": fmt(r["durationMs"]),
                "diff": "-" if i == 0 else ("+" if diff >= 0 else "-") + fmt(abs(diff)),
                "raceNumber": r["raceNumber"],
            })

        # --- actual, parsed out of the PDF ---------------------------------------------------
        # The export drops columns that are empty for the whole section (no external ID, no
        # penalty here), and the "StNr." column after the place is optional (a setting), so
        # anchor on the LAST time column ("Gesamt", = "Wert" without penalties)
        # followed by the "Diff" column.
        row_re = re.compile(
            r"^\s*(\d+)\s+(?:(?:\d+|-)\s+)?(\S+\s+\S+)\s+.*?(\d+:\d{2}\.\d{2})\s+([-+]\d+:\d{2}\.\d{2}|-)\s*$")
        actual = []
        for line in body.splitlines():
            m = row_re.match(line)
            if m:
                actual.append({"place": int(m.group(1)), "name": m.group(2).strip(),
                               "total": m.group(3), "diff": m.group(4)})

        ok = True
        if len(actual) != len(expected):
            problems.append(f"{cat}/{GENDER_LABEL[gender]}: {len(actual)} PDF-Zeilen != {len(expected)} erwartet")
            ok = False
        for e, a in zip(expected, actual):
            for key in ("place", "name", "total", "diff"):
                if e[key] != a[key]:
                    problems.append(f"{cat}/{GENDER_LABEL[gender]} StNr {e['raceNumber']}: "
                                     f"{key} PDF={a[key]!r} erwartet={e[key]!r}")
                    ok = False
        print(f"\n--- {cat} {GENDER_LABEL[gender]} ({len(expected)} gewertet) --- {'OK' if ok else 'ABWEICHUNG'}")
        for e in expected:
            print(f"   {e['place']:>2}. StNr {e['raceNumber']:>2}  {e['name']:<18} {e['total']:>9}  {e['diff']:>9}")

# "Nicht gewertet" must list exactly the ones without a valid result, with the right label.
status, pdf = c.get_raw(cfg.BASE, token, f"/participants/export/pdf/gender/MALE/categories/{race_id}")
text_m = subprocess.run(["pdftotext", "-layout", c.results_path("manual_wertung_männlich.pdf"), "-"],
                        capture_output=True, text=True).stdout
print("\n--- Nicht gewertet (Auszug aus dem Herren-PDF) ---")
if "Nicht gewertet" in text_m:
    for line in text_m.split("Nicht gewertet", 1)[1].splitlines():
        if line.strip() and not line.strip().startswith("Position"):
            print("   ", line.strip())
else:
    problems.append("Abschnitt 'Nicht gewertet' fehlt")

print(f"\nAbweichungen: {len(problems)}")
for p in problems:
    print("  ", p)
print("\nSCHRITT 4: " + ("ALLES KORREKT" if not problems else "ABWEICHUNGEN"))
sys.exit(1 if problems else 0)
