"""Central config for the Nachtslalom E2E test - see README.md for the full scenario story.

Everything here is deliberately explicit/hardcoded (no randomness) because the whole point of this
scenario is to exercise very specific AutoAssignService/measurement-editing code paths in a very
specific order - the exact finish times below were chosen so that:
  - bib2/bib3 (Herren) end up needing a manual swap-correction after the device auto-assigns them.
  - the top-REVERSE_TOP_COUNT of each gender's Lauf 1 result is unambiguous (no ties), so Lauf 2's
    derived start order is 100% deterministic.
  - Lauf 2's derived start order does NOT coincide with ascending raceNumber order for either
    gender - otherwise the "auto-assign follows startSequence, not raceNumber" checks would pass
    even with the old, unfixed AutoAssignService.firstAfter().
"""
import os

APP_PORT = int(os.environ.get("NACHTSLALOM_APP_PORT", 18300))
DEVICE_PORT = int(os.environ.get("NACHTSLALOM_DEVICE_PORT", 19300))
# Used only for the "timing device unreachable mid-reset" regression (fix #6) - nothing listens
# here on purpose.
UNREACHABLE_DEVICE_PORT = int(os.environ.get("NACHTSLALOM_UNREACHABLE_DEVICE_PORT", 19301))

BASE = f"http://localhost:{APP_PORT}"
DEVICE = f"http://localhost:{DEVICE_PORT}"
UNREACHABLE_DEVICE = f"http://localhost:{UNREACHABLE_DEVICE_PORT}"

APP_USERNAME = os.environ.get("NACHTSLALOM_APP_USERNAME", "e2e_admin")
APP_PASSWORD = os.environ.get("NACHTSLALOM_APP_PASSWORD", "e2eTestPass123")

RACE1_NAME = "Nachtslalom Lauf 1"
RACE2_NAME = "Nachtslalom Lauf 2"

# Two age groups covering everyone, split only by gender. Damen's birthYearTo is deliberately one
# year higher than Herren's so groupByAgeGroup() (sorted by birthYearTo descending) always
# processes Damen first - that makes applyStartOrderFromPreviousRace's *global* startSequence
# numbering deterministic (Damen block gets the lower sequence numbers) instead of depending on
# unspecified tie-break/insertion-order behavior between two equal-birthYearTo groups.
DAMEN = {"name": "Damen", "birthYearFrom": 1950, "birthYearTo": 2015, "gender": "FEMALE"}
HERREN = {"name": "Herren", "birthYearFrom": 1950, "birthYearTo": 2014, "gender": "MALE"}

REVERSE_TOP_COUNT = 3

# raceNumber -> (firstName, lastName, gender, birthYear). Same person/raceNumber is entered in
# both Lauf 1 and Lauf 2. Herren = 1-6, Damen = 7-12.
PARTICIPANTS = {
    1: ("Anton", "Berger", "MALE", 1998),
    2: ("Bernd", "Huber", "MALE", 1995),
    3: ("Carl", "Maier", "MALE", 2001),
    4: ("David", "Wolf", "MALE", 1990),
    5: ("Erik", "Fischer", "MALE", 2003),
    6: ("Felix", "Schuster", "MALE", 1988),
    7: ("Anna", "Bauer", "FEMALE", 1999),
    8: ("Bea", "Steiner", "FEMALE", 1996),
    9: ("Clara", "Klein", "FEMALE", 2002),
    10: ("Doris", "Wagner", "FEMALE", 1993),
    11: ("Erika", "Schmid", "FEMALE", 1989),
    12: ("Franzi", "Weber", "FEMALE", 2000),
}

# Herren: bib 4 falls (DNF) exactly while the auto-assign cursor is sitting on them (regression for
# the AutoAssignService.firstAfter fix); bib 5 is a false start that gets discarded at the device
# and marked DNS. Both have no Lauf-1 device time at all.
DNF_BIB = 4
DISCARD_BIB = 5

# Raw device-reported finish times (ms) BEFORE the manual bib2/bib3 swap-correction. bib2 and bib3
# are deliberately close together (arrive 2nd/3rd) to make a manual after-the-fact swap plausible.
RAW_DEVICE_TIMES_MS = {
    1: 52_300,
    2: 55_100,
    3: 48_900,
    6: 58_400,
    9: 61_200,
    10: 59_800,
    11: 63_500,
    12: 57_000,
}
# After the operator swaps bib2's and bib3's measurement->participant link (see lauf1_autoassign.py):
#   bib2 ends up with 48_900 ms, bib3 ends up with 55_100 ms.
SWAP_BIBS = (2, 3)

# Damen: bib 7/8 are skipped ahead of (via a manual set-next override) instead of waiting for the
# device/skip() - simulates the official knowing in advance that both scratched together - and
# marked DNS. No Lauf-1 device time.
SKIP_AHEAD_BIBS = (7, 8)
SKIP_AHEAD_TO_BIB = 9

BOGUS_RACE_ID = 999_999
BOGUS_RACE_NUMBER = 999_999
