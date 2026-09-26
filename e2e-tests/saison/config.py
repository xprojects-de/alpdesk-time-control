"""Central config for the Saison E2E test - see README.md for the full scenario story.

The scenario is built around one fact that no unit test can cover: which age classes a race is
scored against is decided at request time from the race's *date* and the configured season
boundary, across four different subsystems (participant list, PDF export, Gaudi-Modus, rollover).
Every date and birth year below is chosen so that the same person lands in a *different* class
depending on the season - that is what makes a wrong season visible instead of merely untested.
"""
import os

APP_PORT = int(os.environ.get("SAISON_APP_PORT", 18500))
BASE = f"http://localhost:{APP_PORT}"

APP_USERNAME = os.environ.get("SAISON_APP_USERNAME", "e2e_admin")
APP_PASSWORD = os.environ.get("SAISON_APP_PASSWORD", "e2eTestPass123")

# Two races of one ski winter. With the default 1 January boundary they fall into *different*
# seasons (2025 and 2026) - that split is the whole point of the suite. With a 1 July boundary they
# fall into the same one (2025), which is why the boundary is configurable at all.
RACE_DEZ_NAME = "Saison Dezember"
RACE_DEZ_DATE = "2025-12-14"
RACE_DEZ_SEASON_DEFAULT = 2025

RACE_JAN_NAME = "Saison Januar"
RACE_JAN_DATE = "2026-01-11"
RACE_JAN_SEASON_DEFAULT = 2026

# Only season 2026 is configured up front - exactly the state a database is in right after the
# upgrade to season-scoped age groups (migration V4 stamps the existing groups with the upgrade
# year). Season 2025 is filled in later via the rollover, backwards.
CONFIGURED_SEASON = 2026
U14_2026 = {"name": "U14", "seasonYear": 2026, "birthYearFrom": 2013, "birthYearTo": 2014, "gender": "BOTH"}
U16_2026 = {"name": "U16", "seasonYear": 2026, "birthYearFrom": 2011, "birthYearTo": 2012, "gender": "BOTH"}

# Anna is U14 in both seasons; Bene is U16 in 2026 but U14 in 2025 - he is the assertion that
# actually distinguishes "scored against the race's season" from "scored against today's".
ANNA = {"firstName": "Anna", "lastName": "Jung", "birthDate": "2013-03-01", "gender": "FEMALE"}
BENE = {"firstName": "Bene", "lastName": "Aelter", "birthDate": "2012-03-01", "gender": "MALE"}

# Results in ms. Bene has none in the January race at all - he is the "nicht gewertet" entry that
# makes the Gaudi-Modus resolve age classes in the first place.
ANNA_DEZ_MS = 61000
ANNA_JAN_MS = 62000
BENE_DEZ_MS = 63000

SEASON_START_WINTER = {"seasonStartMonth": 7, "seasonStartDay": 1}
SEASON_START_DEFAULT = {"seasonStartMonth": 1, "seasonStartDay": 1}

# A kids' race of season 2026 that groups the same birth years one class per year, while the
# January race keeps the standard U14/U16 - see verify_variants.py.
KIDS_VARIANT = "Jahrgangsweise"
RACE_KIDS_NAME = "Saison Kinderrennen"
RACE_KIDS_DATE = "2026-02-01"
RACE_KIDS_RUN2_NAME = "Saison Kinderrennen Lauf 2"
