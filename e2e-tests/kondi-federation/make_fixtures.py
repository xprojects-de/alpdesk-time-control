"""Generates the synthetic demo data this suite runs on: one CSV per station, in exactly the
format Time Control's own race export produces. Names, clubs and ids are invented, so the result
is safe to keep in a public repository.

    python3 make_fixtures.py            # (re)write fixtures/
    python3 make_fixtures.py --check    # exit 1 if fixtures/ differs from a fresh run

The output is deterministic (fixed seed, no clock), so a diff in fixtures/ always means this
generator changed - never a flaky run.

The field mirrors the shape of a real Konditionswettkampf, because that shape is what makes the
suite a useful test:

  * 83 participants in 4 classes (U14/U16 x weiblich/maennlich), each entered in all 4 stations
    under the same raceNumber and externalId,
  * one station scored in time (fastest wins, with time penalties) and three scored in a value
    where the largest wins - metres for Gleichgewicht and Rumpf & Kraft (the latter with penalties
    in metres), points for the Gelaendelauf,
  * 7 participants who never started (DNS in every station - must stay out of the Gesamtwertung
    no matter how the keep-in-ranking flags are set), plus single-station DNS/DNF/DSQ cases that
    must stay IN it with 0 points for that leg,
  * a different start order in the Gelaendelauf than at the other stations.

On top of that, ties are planted deliberately, because shared places are where a ranking
implementation goes wrong. In the time station:

  * an exact tie (identical duration and penalty),
  * two results 8 ms apart that both print as 31,23 s - the display rounds them together, so they
    must share a place,
  * two results 2 ms apart that print as 31,24 s and 31,25 s - they must NOT share one,
  * a tie that only exists once the penalty is applied (30,00 s + 1,00 s vs 31,00 s + none).

In the metre/point stations equal values are common anyway (the measurement steps are coarse), so
those produce shared places without any help.

This generator deliberately does NOT compute the expected ranking. Phases 5-9 recompute every
ranking level independently in Python, and phase 10 compares the run against
fixtures/reference_gesamtwertung.pdf - a Gesamtwertung that Time Control itself exported from this
data, frozen as a regression guard. Regenerate that reference with:

    ./start_instances.sh /path/to/time-control.jar /tmp/kondi-ref && ./run_all.sh
    cp results/gaudi_agegroups_all.pdf fixtures/reference_gesamtwertung.pdf
"""
import csv
import io
import os
import random
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
FIXTURES_DIR = os.path.join(HERE, "fixtures")
SEED = 20260919
MEASURED_AT = "2026-09-19T11:52:54.945"

# (class name, CSV gender, birth years with head count, first raceNumber)
GROUPS = [
    ("U14 weiblich", "FEMALE", {2013: 13, 2014: 4}, 1),
    ("U14 maennlich", "MALE", {2013: 20, 2014: 9}, 18),
    ("U16 weiblich", "FEMALE", {2012: 14, 2011: 6}, 47),
    ("U16 maennlich", "MALE", {2012: 11, 2011: 6}, 67),
]

GIRLS = ["Anna", "Lena", "Mia", "Emma", "Hanna", "Lea", "Sophie", "Marie", "Laura", "Julia", "Clara", "Ella",
         "Nele", "Paula", "Johanna", "Amelie", "Greta", "Frieda", "Mathilda", "Ida", "Lotta", "Emilia",
         "Charlotte", "Luisa", "Klara", "Theresa", "Franziska", "Katharina", "Magdalena", "Verena", "Helena",
         "Elisa", "Romy", "Nora", "Fiona", "Jana", "Selina", "Valerie", "Rosa", "Pia"]
BOYS = ["Jonas", "Luca", "Felix", "Paul", "Leon", "Noah", "Elias", "Ben", "Finn", "Max", "Tim", "Jakob",
        "Moritz", "Lukas", "Simon", "Tobias", "David", "Florian", "Matthias", "Fabian", "Niklas", "Anton",
        "Emil", "Theo", "Henri", "Valentin", "Sebastian", "Korbinian", "Vinzenz", "Benedikt", "Samuel",
        "Jaro", "Linus", "Mats", "Nepomuk", "Quirin", "Raphael", "Silas", "Till", "Ulrich"]
SURNAMES = ["ADLER", "AICHER", "ALTMANN", "BAUMGART", "BECKER", "BIRKNER", "BRANDL", "BUCHER", "DANNER",
            "DIETRICH", "DOBLER", "EBERLE", "EGGER", "ENGEL", "FALKNER", "FEHLE", "FINK", "FREY", "FUCHS",
            "GAISER", "GEBHARD", "GRAF", "GRUBER", "HAAS", "HAGER", "HARTMANN", "HEIM", "HERZOG", "HIRSCH",
            "HOLLER", "JAEGER", "KAISER", "KELLER", "KIRCHER", "KOCH", "KRAUS", "KUEHN", "LANG", "LEITNER",
            "LORENZ", "MAURER", "MEISTER", "MERKLE", "MOSER", "NAGEL", "NEUMANN", "OBERMAIER", "ORTNER",
            "PFEIFER", "PROBST", "RAAB", "RIEDER", "ROTH", "SAILER", "SCHNEIDER", "SEIDL", "SPIEGEL", "STARK",
            "STOLL", "TAUBER", "THALER", "UNGER", "VOGEL", "WAGNER", "WALTER", "WEISS", "WERNER", "WINKLER",
            "ZAHN", "ZELLER", "ZIMMER", "ZORN"]
# Invented places, so no club in the fixtures can be mistaken for a real one.
CLUB_PLACES = ["MUSTERBACH", "TESTHAUSEN", "BEISPIELAU", "PROBENBERG", "DEMOSTEIN", "NULLINGEN", "DUMMERAU",
               "PLATZHALTEN", "ATTRAPPEN", "KULISSENBERG", "MODELLAU", "EXEMPELSTADT", "PROBSRIED",
               "BEISPIELRIED", "TESTWANG", "MUSTERWANG", "DEMOTAL", "SCHEINBACH", "FIKTIVAU", "ERDACHTAL",
               "BEISPIELSEE", "MUSTERSTEIN", "TESTENRIED", "DEMOBERG", "KUNSTWIESEN", "PHANTOMRIED",
               "LOREMHAUSEN", "ATTRAPPACH", "STICHPROBING", "OHNEGEWAEHR"]
CLUB_PREFIXES = ["SC", "TSV", "SV", "SSV", "RG", "SKC", "WSV"]

# (filename, station name, direction, base value per class, spread, step, lowest, highest, penalties)
# The station names must match config.RACES.
STATIONS = [
    dict(file="race1_schnelligkeit.csv", name="Station - Schnelligkeit", direction="ASC",
         base={"U14 weiblich": 35500, "U14 maennlich": 34000, "U16 weiblich": 33000, "U16 maennlich": 30500},
         spread=0.10, step=10, lo=26400, hi=56100, penalties=[1000, 2000], penalty_rate=0.22),
    dict(file="race2_gleichgewicht.csv", name="Station - Gleichgewicht", direction="DESC",
         base={"U14 weiblich": 2300, "U14 maennlich": 2500, "U16 weiblich": 2600, "U16 maennlich": 2700},
         spread=0.30, step=50, lo=1100, hi=4050, penalties=[], penalty_rate=0),
    dict(file="race3_rumpf_kraft.csv", name="Station - Rumpf & Kraft", direction="DESC",
         base={"U14 weiblich": 6000, "U14 maennlich": 6400, "U16 weiblich": 6600, "U16 maennlich": 7000},
         spread=0.22, step=100, lo=3300, hi=8200, penalties=[100], penalty_rate=0.15),
    dict(file="race4_gelaendelauf.csv", name="Station - Geländelauf", direction="DESC",
         base={"U14 weiblich": 9200, "U14 maennlich": 9300, "U16 weiblich": 9400, "U16 maennlich": 9500},
         spread=0.05, step=100, lo=7400, hi=10000, penalties=[], penalty_rate=0),
]

CSV_HEADER = ["lastName", "firstName", "birthDate", "gender", "ageGroup", "team", "category", "externalId",
              "raceNumber", "durationMs", "penalty", "measuredAt", "comment", "status"]

# Participants who never showed up: DNS at every station, and therefore out of the Gesamtwertung
# however the keep-in-ranking flags are set.
NEVER_STARTED = {7, 12, 33, 48, 50, 61, 63}
# Single-station drop-outs: these must STAY in the Gesamtwertung with 0 points for that one leg.
# raceNumber -> (station name, status, comment)
SINGLE_STATION_STATUS = {
    1: ("Station - Schnelligkeit", "DSQ", "Erste Stange vergessen"),
    36: ("Station - Schnelligkeit", "DSQ", "Seitlich gelaufen"),
    74: ("Station - Schnelligkeit", "DSQ", "Vorwaerts zurueck gelaufen"),
    72: ("Station - Geländelauf", "DNS", "Nicht angetreten"),
    55: ("Station - Rumpf & Kraft", "DNF", "Abbruch wegen Schulterschmerzen"),
}
PENALTY_COMMENTS = ["Stange Slalom gefallen", "Latte Hochsprung", "Reifen", "Rueckwaertslauf obere Linie",
                    "Stange Hochsprung"]


def build_field(rng):
    """The 83 participants, each with the ability that drives their values at every station."""
    external_ids = iter(rng.sample(range(50000, 62000), 83))
    clubs = [f"{rng.choice(CLUB_PREFIXES)} {place}" for place in CLUB_PLACES]
    people, used_names = [], set()
    for group, gender, years, first_number in GROUPS:
        pool = GIRLS if gender == "FEMALE" else BOYS
        number = first_number
        for year, count in years.items():
            for _ in range(count):
                while True:
                    name = (rng.choice(SURNAMES), rng.choice(pool))
                    if name not in used_names:
                        used_names.add(name)
                        break
                people.append(dict(last=name[0], first=name[1], year=year, gender=gender, group=group,
                                   team=rng.choice(clubs), ext=str(next(external_ids)), number=number,
                                   ability=rng.gauss(0, 1)))
                number += 1
    return people


def make_results(rng, people):
    """station name -> {raceNumber: dict(value, penalty, status, comment)}."""
    results = {}
    for station in STATIONS:
        per_station = {}
        for person in people:
            if person["number"] in NEVER_STARTED:
                per_station[person["number"]] = dict(value=None, penalty=None, status="DNS", comment="")
                continue
            single = SINGLE_STATION_STATUS.get(person["number"])
            if single and single[0] == station["name"]:
                per_station[person["number"]] = dict(value=None, penalty=None, status=single[1],
                                                     comment=single[2])
                continue
            spread = 0.7 * person["ability"] + 0.7 * rng.gauss(0, 1)
            # A higher ability means a larger value where the largest wins, a smaller one otherwise.
            sign = 1 if station["direction"] == "DESC" else -1
            value = station["base"][person["group"]] * (1 + sign * station["spread"] * spread)
            value = int(round(value / station["step"])) * station["step"]
            value = max(station["lo"], min(station["hi"], value))
            penalty, comment = None, ""
            if station["penalties"] and rng.random() < station["penalty_rate"]:
                penalty = rng.choice(station["penalties"])
                comment = rng.choice(PENALTY_COMMENTS) if station["direction"] == "ASC" else ""
            per_station[person["number"]] = dict(value=value, penalty=penalty, status="NONE",
                                                 comment=comment)
        results[station["name"]] = per_station
    return results


def plant_ties(people, results):
    """Overwrite a few time-station results to force the tie situations described in the docstring.
    All of them sit inside U14 maennlich, the largest class, among participants who did start."""
    starters = [p["number"] for p in people
                if p["group"] == "U14 maennlich" and p["number"] not in NEVER_STARTED
                and p["number"] not in SINGLE_STATION_STATUS]
    a, b, c, d, e, f, g, h = starters[2:10]
    times = results["Station - Schnelligkeit"]
    for number, value, penalty in [
        (a, 31240, None), (b, 31240, None),     # identical -> must share a place
        (c, 31234, None), (d, 31226, None),     # both print 31,23 s -> must share a place
        (e, 31244, None), (f, 31246, None),     # 31,24 s vs 31,25 s -> must NOT share one
        (g, 30000, 1000), (h, 31000, None),     # equal only once the penalty is applied
    ]:
        times[number] = dict(value=value, penalty=penalty, status="NONE",
                             comment="Stange Slalom gefallen" if penalty else "")


def csv_text(people, station, results, order):
    buffer = io.StringIO(newline="")
    writer = csv.writer(buffer, delimiter=";", lineterminator="\n")
    writer.writerow(CSV_HEADER)
    for person in order:
        result = results[station["name"]][person["number"]]
        writer.writerow([
            person["last"], person["first"], f"{person['year']}-01-01", person["gender"], "",
            person["team"], "", person["ext"], person["number"],
            "" if result["value"] is None else result["value"],
            "" if result["penalty"] is None else result["penalty"],
            MEASURED_AT, result["comment"], result["status"],
        ])
    return buffer.getvalue()


def build_all():
    rng = random.Random(SEED)
    people = build_field(rng)
    results = make_results(rng, people)
    plant_ties(people, results)

    by_number = sorted(people, key=lambda p: p["number"])
    # The Gelaendelauf is started in waves rather than by bib, so its CSV arrives in a different
    # order than the other three - the suite must not depend on a single shared row order.
    wave_order = sorted(people, key=lambda p: (p["gender"], p["group"], p["ext"]))

    files = {}
    for station in STATIONS:
        order = wave_order if station["name"] == "Station - Geländelauf" else by_number
        files[os.path.join("fixtures", station["file"])] = csv_text(people, station, results, order)
    return files


def main():
    files = build_all()
    if "--check" in sys.argv:
        stale = [name for name, text in files.items()
                 if not os.path.exists(os.path.join(HERE, name))
                 or open(os.path.join(HERE, name), encoding="utf-8", newline="").read() != text]
        if stale:
            sys.exit("fixtures sind nicht mehr aktuell, make_fixtures.py neu laufen lassen: "
                     + ", ".join(stale))
        print("fixtures sind aktuell")
        return
    os.makedirs(FIXTURES_DIR, exist_ok=True)
    for name, text in files.items():
        with open(os.path.join(HERE, name), "w", encoding="utf-8", newline="") as f:
            f.write(text)
        print("geschrieben:", name)


if __name__ == "__main__":
    main()
