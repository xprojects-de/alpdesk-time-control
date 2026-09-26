-- Switches the race-number ("StNr.") and birth-year ("Jg.") columns introduced by V5 off.
--
-- V5 added both switches turned on, so an upgraded installation printed the new columns in every
-- result PDF and on the public live view without anyone having asked for them. The public live view
-- is reachable without a login and its participants are mostly under age, so showing their birth
-- years there has to be a deliberate choice of the operator, not a side effect of an update. Off
-- also reproduces the result lists of the last release (app.version 1.4), which had neither column.
--
-- app_settings has exactly one row, seeded by V1, so this sets the effective value for every
-- installation - a fresh one and an upgraded one alike. An installation that already ran V5 and had
-- switched the columns on deliberately has to switch them on again under Settings; the columns'
-- DEFAULT 1 from V5 is left alone, since SQLite cannot change a default without rebuilding the table
-- and no row is ever inserted after V1.
UPDATE app_settings
SET pdf_show_race_number = 0,
    pdf_show_birth_year  = 0;
