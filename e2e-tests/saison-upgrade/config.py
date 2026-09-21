"""Central config for the Saison-Upgrade E2E test - see README.md for the full scenario story.

This suite exists for the one part of the season feature that is destructive and irreversible:
migration V4 rebuilds the age_group table (SQLite cannot drop V1's UNIQUE(name), so the table is
renamed aside, recreated and copied). It runs exactly once per installation, on a database holding
real race history, and there is no second chance if it drops or renumbers a row.
"""
import os

APP_PORT = int(os.environ.get("SAISON_UPGRADE_APP_PORT", 18600))
BASE = f"http://localhost:{APP_PORT}"

APP_USERNAME = os.environ.get("SAISON_UPGRADE_APP_USERNAME", "e2e_admin")
APP_PASSWORD = os.environ.get("SAISON_UPGRADE_APP_PASSWORD", "e2eTestPass123")

# The age groups the pre-V4 database already holds. The ids are deliberately non-contiguous and do
# not start at 1: a rebuild that renumbers rows (INSERT without the explicit id) would silently
# produce 1 and 2 here and still look plausible, so a gap is what makes the check meaningful.
# Bookmarked UI state and any external reference to /age-groups/{id} depend on them surviving.
PRE_V4_AGE_GROUPS = [
    {"id": 7, "name": "U14", "birthYearFrom": 2013, "birthYearTo": 2014, "gender": "BOTH"},
    {"id": 9, "name": "U16", "birthYearFrom": 2011, "birthYearTo": 2012, "gender": "BOTH"},
]
HIGHEST_PRE_V4_ID = max(ag["id"] for ag in PRE_V4_AGE_GROUPS)

# Two races written after the upgrade, standing in for a club's race history. Only the older one is
# affected: its season has no age groups, because migration V4 stamped them all with the year the
# upgrade ran in. Which year that is, is read from the server at runtime rather than hardcoded -
# the whole point of V4's stamp is that it follows the upgrade date.
#
# The dates are derived in verify_upgrade.py: today for the current season (any offset could fall
# into the previous year when the suite runs in early January) and the same day one year back for
# the previous one.
RACE_THIS_SEASON_NAME = "Rennen laufende Saison"
RACE_LAST_SEASON_NAME = "Rennen Vorsaison"

# Born 2013: U14 under the ranges above, so the current-season race categorises them and the
# previous-season race cannot - which is exactly the state the README's upgrade section describes.
PERSON = {"firstName": "Lena", "lastName": "Vorjahr", "birthDate": "2013-04-01", "gender": "FEMALE"}
