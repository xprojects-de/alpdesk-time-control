"""Central port/URL config for the Kondi2025 5-instance federation E2E test.
Override any of these via environment variables if the defaults clash with something
else already running on your machine.
"""
import os

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

# Path to MAIN's own SQLite file - only needed by phase4b_results_backup_restore.py, which has to
# clear participant results directly in the database (see that script's docstring for why the API
# can't do this). Set by run_phased_results.sh from the work dir it's given; leave unset for any
# other phase/script, none of which touch the database directly.
MAIN_DB_PATH = os.environ.get("KONDI_MAIN_DB_PATH")

# Which race each station manages, and the resultUnit/sortDirection for each of the 4 races.
# Adjust RACE_CSV_FILES to point at your own race data (see README.md for the expected CSV
# format: lastName;firstName;birthDate;gender;ageGroup;team;category;externalId;raceNumber;
# durationMs;penalty;measuredAt).
RACES = [
    # (name, resultUnit, resultUnitLabel, sortDirection, csv_filename, station_key)
    ("Schnelligkeit", "TIME", None, "ASC", "race1_schnelligkeit_import.csv", "station1"),
    ("Gleichgewicht", "POINTS", "m", "DESC", "race2_gleichgewicht_import.csv", "station2"),
    ("Kraft", "TIME", None, "ASC", "race3_kraft_import.csv", "station3"),
    ("Lauf", "TIME", None, "ASC", "race4_lauf_import.csv", "station4"),
]

# Optional: for exercising DNS/DNF/DSQ handling, have phase3 override specific raceNumbers with
# an explicit status instead of whatever the CSV says (raceNumber -> (status, comment)). Leave a
# station's entry as {} to just use the CSV as-is. A raceNumber with an empty/missing durationMs
# in the CSV is automatically treated as DNS regardless of this map (see phase3).
INJECTED_STATUS = {
    "station1": {},  # e.g. {61: ("DSQ", "Regelverstoss")}
    "station2": {},
    "station3": {},  # e.g. {93: ("DNF", "Abbruch wegen Schulterschmerzen")}
    "station4": {},
}
