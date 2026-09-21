"""Central port/URL config for the Kondi2025 5-instance federation E2E test.
Override any of these via environment variables if the defaults clash with something
else already running on your machine.
"""
import os

# Where the 4 race CSVs (and, optionally, the reference result) are read from. Defaults to the
# synthetic fixtures under fixtures/ (regenerate with make_fixtures.py); point KONDI_DATA_DIR at a
# directory holding your own real data to run against that instead - keep it OUTSIDE version
# control (local-data/ is gitignored for exactly that). See README.md.
DATA_DIR = os.path.abspath(
    os.environ.get("KONDI_DATA_DIR") or os.path.join(os.path.dirname(os.path.abspath(__file__)), "fixtures")
)

MAIN_PORT = int(os.environ.get("KONDI_MAIN_PORT", 18100))
STATION_PORTS = {
    "station1": int(os.environ.get("KONDI_STATION1_PORT", 18101)),
    "station2": int(os.environ.get("KONDI_STATION2_PORT", 18102)),
    "station3": int(os.environ.get("KONDI_STATION3_PORT", 18103)),
    "station4": int(os.environ.get("KONDI_STATION4_PORT", 18104)),
}

MAIN = f"http://localhost:{MAIN_PORT}"
STATION_BASES = {k: f"http://localhost:{v}" for k, v in STATION_PORTS.items()}

APP_USERNAME = os.environ.get("KONDI_APP_USERNAME", "e2e_admin")
APP_PASSWORD = os.environ.get("KONDI_APP_PASSWORD", "e2eTestPass123")

# Which race each station manages, plus the resultUnit/sortDirection for each of the 4 stations.
# This mirrors the real Konditionswettkampf setup: one station measured in time (fastest wins) and
# three measured in a value where the largest wins (metres for Gleichgewicht/Rumpf & Kraft, points
# for the Gelaendelauf). The CSVs are looked up in DATA_DIR - see README.md for their format.
RACES = [
    # (name, resultUnit, resultUnitLabel, sortDirection, csv_path, station_key)
    ("Station - Schnelligkeit", "TIME", None, "ASC",
     os.path.join(DATA_DIR, "race1_schnelligkeit.csv"), "station1"),
    ("Station - Gleichgewicht", "POINTS", "m", "DESC",
     os.path.join(DATA_DIR, "race2_gleichgewicht.csv"), "station2"),
    ("Station - Rumpf & Kraft", "POINTS", "m", "DESC",
     os.path.join(DATA_DIR, "race3_rumpf_kraft.csv"), "station3"),
    ("Station - Geländelauf", "POINTS", "Pkt.", "DESC",
     os.path.join(DATA_DIR, "race4_gelaendelauf.csv"), "station4"),
]

# The event's date decides which season the races fall into (1 January boundary), and the age
# groups are configured for exactly that season - the roster import resolves a participant's
# class against the target race's own season only.
RACE_DATE = os.environ.get("KONDI_RACE_DATE", "2026-09-19")
SEASON_YEAR = int(RACE_DATE[:4])

# Pre-created before the roster import, so the import reuses these instead of auto-creating one
# gender-split group per (class label x gender) it finds in the CSV.
AGE_GROUPS = [
    {"name": "U14", "seasonYear": SEASON_YEAR, "birthYearFrom": 2013, "birthYearTo": 2014, "gender": "BOTH"},
    {"name": "U16", "seasonYear": SEASON_YEAR, "birthYearFrom": 2011, "birthYearTo": 2012, "gender": "BOTH"},
]

# The CSVs carry their own "status" column (NONE/DNS/DNF/DSQ), which phase 3 enters as-is - a row
# with no durationMs and no explicit status is treated as DNS. This map additionally overrides
# specific raceNumbers at a station (raceNumber -> (status, comment)), for exercising a status the
# fixture data does not happen to contain. Leave a station's entry as {} to just use the CSV.
INJECTED_STATUS = {
    "station1": {},  # e.g. {61: ("DSQ", "Regelverstoss")}
    "station2": {},
    "station3": {},  # e.g. {93: ("DNF", "Abbruch wegen Schulterschmerzen")}
    "station4": {},
}

# How the Gesamtwertung (Punkte-Mischwertung over all 4 stations) treats a participant who has no
# valid result in one station. With a flag set, that leg scores 0 points but the participant stays
# in the ranking; without it, they drop out of the Gesamtwertung entirely. Somebody with no valid
# result in ANY station is always excluded, whatever the flags say. These defaults mirror how the
# real Konditionswettkampf is scored - phases 11-13 test all flag combinations explicitly.
GAUDI_FLAGS = {
    "keepDnsInRanking": True,
    "keepDnfInRanking": True,
    "keepDsqInRanking": True,
}

# Optional reference result for the final cross-check (phase 10): a Gesamtwertung PDF exported by
# Time Control itself, frozen as the expected output. fixtures/ ships one generated from the demo
# data; pointing KONDI_DATA_DIR at a real event's directory compares against that event's own
# printed result instead. Missing file -> phase 10 skips itself rather than failing.
REFERENCE_RESULT = os.path.join(DATA_DIR, "reference_gesamtwertung.pdf")
