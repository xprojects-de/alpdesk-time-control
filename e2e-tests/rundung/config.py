"""Central config for the Rundung E2E test - see README.md for the full scenario story.

Everything here is deliberately explicit/hardcoded (no randomness) because the whole point of this
scenario is to reproduce, byte-for-byte, the exact rounding-consistency bugs fixed in
RankingService/RankingViewService/TimeCombinationModeCalculator/LosModeCalculator/PdfExportService:
values were chosen so that "round the raw gap once at the end" and "difference of the two already-
rounded printed values" provably disagree - see the comments next to each value below.
"""
import os

APP_PORT = int(os.environ.get("RUNDUNG_APP_PORT", 18400))
BASE = f"http://localhost:{APP_PORT}"

APP_USERNAME = os.environ.get("RUNDUNG_APP_USERNAME", "e2e_admin")
APP_PASSWORD = os.environ.get("RUNDUNG_APP_PASSWORD", "e2eTestPass123")

RACE1_NAME = "Praezision Einzel"
RACE2_NAME = "Praezision Lauf 2"

# Age groups are configured per season, and a race is assigned to a season by its date (default
# boundary: 1 January, so a 2026-02-01 race is season 2026). This has to match RACE_SEASON below,
# or the participants resolve to no age group at all.
RACE_SEASON = 2026
HERREN = {"name": "Herren", "seasonYear": RACE_SEASON, "birthYearFrom": 1950, "birthYearTo": 2015, "gender": "MALE"}
REVERSE_TOP_COUNT = 3

# bib -> (firstName, lastName, birthYear). All entered in both Race 1 and Race 2 (Race 2 gets no
# results of its own - only its derived start order is checked).
PARTICIPANTS = {
    1: ("Anton", "Reiser", 1995),
    2: ("Boris", "Lechner", 1996),
    3: ("Clemens", "Auer", 1997),
    4: ("Dennis", "Kofler", 1998),
    5: ("Elias", "Brunner", 1999),
    6: ("Felix", "Ganter", 2000),
}

# Race 1 finish times (ms). Chosen to reproduce the exact reported bug (two runners 2ms apart that
# print as the same 0:xx.xx time) plus a clean "distinct next place" and a DNS:
#   bib1 4083ms   -> prints 0:04.08 (leader)
#   bib2 33525ms  -> prints 0:33.53
#   bib3 36430ms  -> prints 0:36.43   \_ 2ms apart, BOTH print 0:36.43 -> must share a place
#   bib4 36432ms  -> prints 0:36.43   /  (old code: different raw ms -> different places, the bug)
#   bib5 36460ms  -> prints 0:36.46   -> distinct from bib3/bib4, confirms the tie doesn't over-merge
#   bib6           -> no result -> DNS, excluded from the ranking entirely
#
# Rueckstand (gap to bib1) the OLD code would have printed vs. what's correct now:
#   bib2: raw gap 33525-4083=29442ms -> round once -> 29440ms ("+0:29.44", OLD/WRONG)
#         vs. printed-minus-printed: 33530-4080=29450ms ("+0:29.45", NEW/correct) - THE regression.
RACE1_TIMES_MS = {1: 4083, 2: 33525, 3: 36430, 4: 36432, 5: 36460}
DNS_BIB = 6

# Expected Race-1 places under the FIXED algorithm (ties detected on the value rounded to the
# printed hundredth, not the raw millisecond).
EXPECTED_PLACES = {1: 1, 2: 2, 3: 3, 4: 3, 5: 5}
# Expected "Rueckstand" (diffFormatted) per bib, computed from the two already-rounded totals - see
# verify_lauf1.py for the by-hand derivation of each value.
EXPECTED_DIFF_FORMATTED = {
    1: "-",
    2: "+0:29.45",
    3: "+0:32.35",
    4: "+0:32.35",  # same as bib3 - they're tied, so their gap must print identically too
    5: "+0:32.38",
}

# Race 2's start order, derived from Race 1 via REVERSE_TOP_N=3: bib3/bib4 are tied for place 3
# under the fix, so BOTH must move into the reversed top block together (ParticipantService's
# "cut by place value, not raw index"). Under the OLD (unfixed) place logic, bib3/bib4 would have
# had DISTINCT places 3/4, so only bib3 would land in the reversed top-3 and bib4 would stay behind
# it in normal order - a materially different, wrong start order. See lauf2_start_order.py.
EXPECTED_START_SEQUENCE = {4: 1, 3: 2, 2: 3, 1: 4, 5: 5, 6: 6}

# --- Gaudi-Modus: Zeit-Kombination ---------------------------------------------------------------
# Reuses bib1 (Anton) and bib2 (Boris) as two more participants in two tiny leg races, so the
# combined totals reproduce the exact same 4083/33525-style gap as Race 1 (Bein B just adds the
# same 1000ms to both legs, which cancels out of the gap and lets the by-hand numbers above be
# reused directly): Anton totals 5083ms, Boris totals 34525ms.
KOMBI_BEIN_A_NAME = "Kombi Bein A"
KOMBI_BEIN_B_NAME = "Kombi Bein B"
KOMBI_BEIN_A_TIMES_MS = {"Anton": 4083, "Boris": 33525}
KOMBI_BEIN_B_TIMES_MS = {"Anton": 1000, "Boris": 1000}
# Expected combined Rueckstand (Boris behind Anton, ASC=lower wins): printed-minus-printed
# 34530-5080=29450ms, NOT the raw-gap-rounded-once 34525-5083=29442->29440ms.
KOMBI_ASC_EXPECTED_DIFF_MS = 29450

# Same two legs again, but DESC (higher-is-better) this time - explicitly supported by
# TimeCombinationModeCalculator - so Boris (higher total) leads and Anton's Rueckstand is NEGATIVE.
# This is the regression case for the PdfExportService "+" prefix bug: the PDF must print
# "-0:29.45", never "+0:-29.-45"/similar garbage.
KOMBI_BEIN_C_NAME = "Kombi Bein C DESC"
KOMBI_BEIN_D_NAME = "Kombi Bein D DESC"
KOMBI_DESC_EXPECTED_DIFF_MS = -29450
KOMBI_DESC_EXPECTED_PDF_TEXT = "-0:29.45"

# --- Gaudi-Modus: Los-Modus -----------------------------------------------------------------------
# A dedicated 4-person race so the pair-average-vs-overall-average math is self-contained. Values
# mirror the earlier RankingServiceSpec/LosModeCalculatorSpec unit tests. Whichever way the random
# draw pairs them, the fixed formula (round each side to its printed precision, THEN subtract) must
# match exactly - the old code (subtract raw, round once) is provably wrong whenever a
# 4083/4083-vs-33525/33527 pairing occurs.
#
# The last value is 33527 and not 33525 on purpose, and it is the only thing in this suite that
# catches the SECOND rounding fix - rounding once from the raw average straight to the printed
# hundredth, instead of to a whole millisecond first:
#
#   overall average = 75218 / 4 = 18804.5ms
#     once  (fixed): round(1880.45) * 10          = 18800ms -> prints 0:18.80
#     twice (old):   round(18804.5) = 18805ms,
#                    then round(1880.5) * 10      = 18810ms -> prints 0:18.81
#
# With four equal-summing values (4 x ...525, average 18804.0) both formulas agree, so the suite
# would pass either way and the fix would be covered by the unit test alone. No pair average is
# affected by the change, so the random draw cannot hide it: the discriminating value is the
# overall average, which every pairing reports as referenceMs.
LOS_RACE_NAME = "Praezision Los"
LOS_PARTICIPANTS = {
    1: ("Gerda", "Wimmer", 1994, 4083),
    2: ("Hannes", "Fellner", 1993, 4083),
    3: ("Ines", "Schranz", 1992, 33525),
    4: ("Jonas", "Petzold", 1991, 33527),
}
