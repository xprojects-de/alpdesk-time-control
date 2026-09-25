-- Whether the race result PDFs (every ranking/results export of a single race, the start list
-- and the Gaudi-Modus exports and also the live mode) print each participant's race number ("StNr.") and birth year
-- ("Jg."). Two independent switches, since a club may well want one without the other. Both on by
-- default, so existing installations get the new columns without having to find the switches
-- first; an operator who prefers the old, narrower layout turns them off under Settings. Stored as
-- 0/1 like gaudi_mode's keep_*_in_ranking flags.
ALTER TABLE app_settings
    ADD COLUMN pdf_show_race_number INTEGER NOT NULL DEFAULT 1;
ALTER TABLE app_settings
    ADD COLUMN pdf_show_birth_year INTEGER NOT NULL DEFAULT 1;
