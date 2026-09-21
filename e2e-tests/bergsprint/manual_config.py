"""Scenario for the "manual assignment" Bergsprint variant: same race/device setup as the
auto-assign run, but every measurement is assigned to its participant by hand on the already
archived race measurements - and the finish times deliberately contain rounding edge cases.

Fields per row: (raceNumber, firstName, lastName, gender, category, durationMs, status, comment)
durationMs None = the device never recorded a time for them.
"""
import os

APP_PORT = int(os.environ.get("BERGSPRINT_APP_PORT", 18200))
DEVICE_PORT = int(os.environ.get("BERGSPRINT_DEVICE_PORT", 19200))
BASE = f"http://localhost:{APP_PORT}"
DEVICE = f"http://localhost:{DEVICE_PORT}"

RACE_NAME = "Bergsprint 2026"
RACE_DATE = "2026-09-26"
CAT_BIO = "Bio-Bike"
CAT_EBIKE = "E-Bike"

# Rounding edge cases deliberately built in (TIME races print hundredths, i.e. round to 10ms):
#  * 552434 / 552432  -> both print 9:12.43  => must SHARE a place, and 552440 (9:12.44) must
#                        then be two places further down, not one.
#  * 598760 / 598764  -> same, in the women's Bio field.
#  * 515670 / 515672  -> same, in the women's E-Bike field.
#  * 600005, 615995, 470005 -> exact .xx5 ms values: half-up rounding (Math.round) must push
#                        them UP (10:00.01 / 10:16.00 / 7:50.01), never down.
#  * 540083 (leader) vs 569525 -> printed gap 9:29.53 - 9:00.08 = 0:29.45, while the raw gap
#                        29442ms would round to 0:29.44 on its own: the PDF's "Rückstand" must
#                        be the difference of the PRINTED times.
#  * bib 27 has a device time but is DSQ -> must never appear in a ranking.
#  * bib 17 DNF and bib 16 DNS -> no device time at all.
ROSTER = [
    # Bio-Bike Herren
    (1,  "Anton",  "Berger",  "MALE",   CAT_BIO,   553120, None,  None),
    (3,  "Carl",   "Maier",   "MALE",   CAT_BIO,   552434, None,  None),
    (5,  "Erik",   "Fischer", "MALE",   CAT_BIO,   552432, None,  None),
    (7,  "Georg",  "Bauer",   "MALE",   CAT_BIO,   552440, None,  None),
    (9,  "Ivo",    "Steiner", "MALE",   CAT_BIO,   600005, None,  None),
    (11, "Klaus",  "Wolf",    "MALE",   CAT_BIO,   540083, None,  None),
    (13, "Manuel", "Wagner",  "MALE",   CAT_BIO,   569525, None,  None),
    (15, "Otto",   "Schmid",  "MALE",   CAT_BIO,   588300, None,  None),
    (17, "Quirin", "Huber",   "MALE",   CAT_BIO,   None,   "DNF", "Aufgabe nach Sturz"),
    # Bio-Bike Damen
    (2,  "Anna",   "Huber",   "FEMALE", CAT_BIO,   612340, None,  None),
    (4,  "Bea",    "Klein",   "FEMALE", CAT_BIO,   598760, None,  None),
    (6,  "Clara",  "Vogel",   "FEMALE", CAT_BIO,   598764, None,  None),
    (8,  "Doris",  "Sturm",   "FEMALE", CAT_BIO,   640110, None,  None),
    (10, "Erika",  "Winter",  "FEMALE", CAT_BIO,   587001, None,  None),
    (12, "Franzi", "Sommer",  "FEMALE", CAT_BIO,   615995, None,  None),
    (14, "Greta",  "Frost",   "FEMALE", CAT_BIO,   660500, None,  None),
    (16, "Hanna",  "Stein",   "FEMALE", CAT_BIO,   None,   None,  None),  # nie gestartet, kein Status
    (18, "Ines",   "Wald",    "FEMALE", CAT_BIO,   705900, None,  None),
    # E-Bike Herren
    (19, "Jakob",  "Berg",    "MALE",   CAT_EBIKE, 480250, None,  None),
    (21, "Lars",   "Fels",    "MALE",   CAT_EBIKE, 492110, None,  None),
    (23, "Niko",   "Moos",    "MALE",   CAT_EBIKE, 470005, None,  None),
    (25, "Paul",   "Reiter",  "MALE",   CAT_EBIKE, 505440, None,  None),
    (27, "Rico",   "Jaeger",  "MALE",   CAT_EBIKE, 488000, "DSQ", "Abkuerzung gefahren"),
    (29, "Stefan", "Schwarz", "MALE",   CAT_EBIKE, 521330, None,  None),
    # E-Bike Damen
    (20, "Julia",  "Weiss",   "FEMALE", CAT_EBIKE, 530120, None,  None),
    (22, "Karin",  "Gruen",   "FEMALE", CAT_EBIKE, 515670, None,  None),
    (24, "Lena",   "Blau",    "FEMALE", CAT_EBIKE, 515672, None,  None),
    (26, "Maria",  "Rot",     "FEMALE", CAT_EBIKE, 548900, None,  None),
    (28, "Nina",   "Silber",  "FEMALE", CAT_EBIKE, 502340, None,  None),
    (30, "Olga",   "Gold",    "FEMALE", CAT_EBIKE, 560780, None,  None),
]

BIRTH_YEARS = {rn: 1970 + (rn * 7) % 35 for rn, *_ in ROSTER}

STATE_FILE = "manual_state.json"
