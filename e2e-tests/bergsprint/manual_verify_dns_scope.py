"""Step 6 (manual-assign variant): the "nicht gewertet" list must describe exactly the people the
ranking above it describes.

A document scoped to one gender/age group/category must not list someone the ranking never
considered (a woman under "nicht gewertet" on a men's sheet), while a document covering the whole
field - in one section or in sections that together cover everyone - must keep the complete list.
Checked for every PDF export variant AND every live-results view, against an expectation computed
from the scenario alone."""
import sys, json, re, subprocess
sys.path.insert(0, '.')
import common as c
import manual_config as cfg

token = c.login(cfg.BASE)
state = json.load(open(c.results_path(cfg.STATE_FILE)))
race_id = state["race_id"]
roster = state["roster"]
cat_ids = state["categories"]

problems = []

status, race = c.get(cfg.BASE, token, f"/races/{race_id}")
season = race.get("seasonYear")

# RaceResponse deliberately does not expose the live token (see RaceLiveController's javadoc);
# it is only reachable through the race's own live-links list, which is also exactly what the
# "Live-Links" dialog hands out - so this checks the very URLs that get shared at the venue.
status, links = c.get(cfg.BASE, token, f"/races/{race_id}/live-links")
live_token = None
if status == 200 and links:
    m = re.search(r"/public/races/([^/]+)/", links[0]["path"])
    live_token = m.group(1) if m else None
print(f"Rennen {race_id}: Saison {season}, liveToken {'vorhanden' if live_token else 'FEHLT'}")

# --- Altersklassen, damit die AK-Exporte ueberhaupt etwas zu filtern haben -------------------
# Grenze 1980, damit die drei Ausfaelle auf zwei verschiedene Klassen fallen und eine dritte
# Klasse gewertete Teilnehmer, aber KEINEN Ausfall hat.
AGE_GROUPS = [
    ("Senioren m", "MALE", 1900, 1980),
    ("Aktive m", "MALE", 1981, 2100),
    ("Senioren w", "FEMALE", 1900, 1980),
    ("Aktive w", "FEMALE", 1981, 2100),
]
for name, gender, y_from, y_to in AGE_GROUPS:
    st, resp = c.post(cfg.BASE, token, "/age-groups", {
        "name": name, "seasonYear": season, "birthYearFrom": y_from, "birthYearTo": y_to, "gender": gender,
    })
    if st not in (200, 201):
        problems.append(f"Altersklasse {name} konnte nicht angelegt werden: {st} {resp}")
print(f"{len(AGE_GROUPS)} Altersklassen fuer Saison {season} angelegt")

def age_group_of(r):
    year = cfg.BIRTH_YEARS[r["raceNumber"]]
    for name, gender, y_from, y_to in AGE_GROUPS:
        if r["gender"] == gender and y_from <= year <= y_to:
            return name
    return "Unbekannt"

def name_of(r):
    return f"{r['lastName']} {r['firstName']}"

# Everyone without a countable result - exactly what "nicht gewertet" lists.
not_scored = [r for r in roster if r["durationMs"] is None or r["status"] is not None]
print("\nAusfaelle im Szenario:")
for r in sorted(not_scored, key=lambda x: x["lastName"].lower()):
    print(f"   StNr {r['raceNumber']:>2}  {name_of(r):<16} {r['gender']:<6} {r['category']:<9} "
          f"{age_group_of(r):<11} {r['status'] or 'DNS (ohne Zeit)'}")

def expected(gender=None, age_group=None, category=None):
    """The scenario's own answer to 'who belongs under nicht gewertet here'."""
    out = not_scored
    if gender:
        out = [r for r in out if r["gender"] == gender]
    if age_group:
        out = [r for r in out if age_group_of(r) == age_group]
    if category:
        out = [r for r in out if r["category"] == category]
    return sorted(name_of(r) for r in out)

# Position, the optional "StNr." column (a setting), then the name.
DNS_ROW = re.compile(r"^\s*\d+\s+(?:(?:\d+|-)\s+)?(\S+\s+\S+)\s+.*?\b(DNF|DSQ|DNS)\s*$")

def pdf_not_ranked(path, label):
    st, pdf = c.get_raw(cfg.BASE, token, path)
    if st != 200:
        problems.append(f"{label}: HTTP {st}")
        return None
    fname = c.results_path("dns_" + re.sub(r"[^\w]+", "_", label).strip("_") + ".pdf")
    with open(fname, "wb") as f:
        f.write(pdf)
    text = subprocess.run(["pdftotext", "-layout", fname, "-"], capture_output=True, text=True).stdout
    if "Nicht gewertet" not in text:
        return []
    body = text.split("Nicht gewertet", 1)[1]
    return sorted(m.group(1).strip() for line in body.splitlines() for m in [DNS_ROW.match(line)] if m)

def live_not_ranked(query, label):
    # No token: the live views are public on purpose (venue screen, spectators' phones).
    st, resp = c.get(cfg.BASE, None, f"/public/races/{live_token}/results?{query}")
    if st != 200:
        problems.append(f"{label}: HTTP {st} {resp}")
        return None
    return sorted(e["name"] for e in (resp.get("notRanked") or []))

def live_html_not_ranked(query, label):
    """The same view as an HTML page - what a spectator actually opens (results-html), as opposed
    to the JSON the check above reads. Both go through RaceLiveService#buildResponse, so this
    guards against the rendering path drifting away from it."""
    st, body = c.get_raw(cfg.BASE, None, f"/public/races/{live_token}/results-html?{query}")
    if st != 200:
        problems.append(f"{label} (HTML): HTTP {st}")
        return None
    html = body.decode("utf-8", errors="replace")
    if "Nicht gewertet" not in html:
        return []
    section = html.split("Nicht gewertet", 1)[1]
    # renderDnsTable: <tr><td>pos</td><td>Name Vorname</td>...<td>Status</td></tr>
    return sorted(m.group(1).strip()
                  for m in re.finditer(r"<tr><td>\d+</td><td>([^<]+)</td>", section))

def check(label, actual, want):
    if actual is None:
        return
    ok = actual == want
    mark = "OK" if ok else "ABWEICHUNG"
    print(f"   {label:<46} erwartet {len(want)}, erhalten {len(actual)}  {mark}")
    if not ok:
        problems.append(f"{label}: erwartet {want}, erhalten {actual}")
        print(f"      erwartet: {want}")
        print(f"      erhalten: {actual}")

bio, ebike = cfg.CAT_BIO, cfg.CAT_EBIKE
print("\n=== PDF-Exporte ===")
check("Gesamtwertung (ohne Filter)",
      pdf_not_ranked(f"/participants/export/pdf/all/{race_id}", "gesamt"), expected())
check("Wertung maennlich",
      pdf_not_ranked(f"/participants/export/pdf/gender/MALE/{race_id}", "herren"), expected(gender="MALE"))
check("Wertung weiblich",
      pdf_not_ranked(f"/participants/export/pdf/gender/FEMALE/{race_id}", "damen"), expected(gender="FEMALE"))
check("Wertung maennlich je Kategorie",
      pdf_not_ranked(f"/participants/export/pdf/gender/MALE/categories/{race_id}", "herren kat"), expected(gender="MALE"))
check("Wertung weiblich je Kategorie",
      pdf_not_ranked(f"/participants/export/pdf/gender/FEMALE/categories/{race_id}", "damen kat"), expected(gender="FEMALE"))
check("Gesamt je Kategorie (ohne Filter)",
      pdf_not_ranked(f"/participants/export/pdf/all/categories/{race_id}", "gesamt kat"), expected())
check(f"Wertung Kategorie {bio}",
      pdf_not_ranked(f"/participants/export/pdf/category/{cat_ids[bio]}/{race_id}", "kat bio"), expected(category=bio))
check(f"Wertung Kategorie {ebike}",
      pdf_not_ranked(f"/participants/export/pdf/category/{cat_ids[ebike]}/{race_id}", "kat ebike"), expected(category=ebike))
check("Wertung Aktive m / maennlich",
      pdf_not_ranked(f"/participants/export/pdf/agegroup/Aktive%20m/gender/MALE/{race_id}", "ak aktive m"),
      expected(gender="MALE", age_group="Aktive m"))
check("Wertung Senioren m / maennlich (ohne Ausfall)",
      pdf_not_ranked(f"/participants/export/pdf/agegroup/Senioren%20m/gender/MALE/{race_id}", "ak senioren m"),
      expected(gender="MALE", age_group="Senioren m"))
check("Wertung Senioren w / weiblich",
      pdf_not_ranked(f"/participants/export/pdf/agegroup/Senioren%20w/gender/FEMALE/{race_id}", "ak senioren w"),
      expected(gender="FEMALE", age_group="Senioren w"))
check("Alle Altersklassen (ohne Filter)",
      pdf_not_ranked(f"/participants/export/pdf/agegroups/all/{race_id}", "ak alle"), expected())
check("Alle Altersklassen je Kategorie (ohne Filter)",
      pdf_not_ranked(f"/participants/export/pdf/agegroups/all/categories/{race_id}", "ak alle kat"), expected())

if live_token:
    print("\n=== Live-Ansicht (JSON, was die Zuschauer sehen) ===")
    check("live OVERALL (ohne Filter)", live_not_ranked("view=OVERALL", "live overall"), expected())
    check("live GENDER maennlich", live_not_ranked("view=GENDER&gender=MALE", "live herren"), expected(gender="MALE"))
    check("live GENDER weiblich", live_not_ranked("view=GENDER&gender=FEMALE", "live damen"), expected(gender="FEMALE"))
    check("live AGEGROUP_GENDER Aktive m",
          live_not_ranked("view=AGEGROUP_GENDER&gender=MALE&ageGroup=Aktive%20m", "live ak"),
          expected(gender="MALE", age_group="Aktive m"))
    check("live GENDER_BY_CATEGORY maennlich",
          live_not_ranked("view=GENDER_BY_CATEGORY&gender=MALE", "live herren kat"), expected(gender="MALE"))
    check(f"live CATEGORY {bio}",
          live_not_ranked(f"view=CATEGORY&categoryId={cat_ids[bio]}", "live kat bio"), expected(category=bio))
    check("live ALL_AGEGROUPS (ohne Filter)", live_not_ranked("view=ALL_AGEGROUPS", "live ak alle"), expected())
    check("live OVERALL_BY_CATEGORY (ohne Filter)",
          live_not_ranked("view=OVERALL_BY_CATEGORY", "live gesamt kat"), expected())
    check("live ALL_AGEGROUPS_BY_CATEGORY (ohne Filter)",
          live_not_ranked("view=ALL_AGEGROUPS_BY_CATEGORY", "live ak alle kat"), expected())

    print("\n=== Live-Ansicht als HTML-Seite (results-html - das oeffnen die Zuschauer) ===")
    check("HTML OVERALL (ohne Filter)", live_html_not_ranked("view=OVERALL", "html overall"), expected())
    check("HTML GENDER maennlich",
          live_html_not_ranked("view=GENDER&gender=MALE", "html herren"), expected(gender="MALE"))
    check("HTML GENDER weiblich",
          live_html_not_ranked("view=GENDER&gender=FEMALE", "html damen"), expected(gender="FEMALE"))
    check("HTML AGEGROUP_GENDER Aktive m",
          live_html_not_ranked("view=AGEGROUP_GENDER&gender=MALE&ageGroup=Aktive%20m", "html ak"),
          expected(gender="MALE", age_group="Aktive m"))
    check("HTML GENDER_BY_CATEGORY maennlich",
          live_html_not_ranked("view=GENDER_BY_CATEGORY&gender=MALE", "html herren kat"), expected(gender="MALE"))
    check(f"HTML CATEGORY {bio}",
          live_html_not_ranked(f"view=CATEGORY&categoryId={cat_ids[bio]}", "html kat bio"), expected(category=bio))
    check("HTML ALL_AGEGROUPS (ohne Filter)",
          live_html_not_ranked("view=ALL_AGEGROUPS", "html ak alle"), expected())
else:
    problems.append("Rennen hat keinen liveToken - Live-Ansicht ungeprueft")

print(f"\nAbweichungen: {len(problems)}")
for p in problems:
    print("  ", p)
print("\nSCHRITT 6: " + ("ALLES KORREKT" if not problems else "ABWEICHUNGEN"))
