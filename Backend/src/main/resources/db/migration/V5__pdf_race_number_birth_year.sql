-- Whether each participant's race number ("StNr.") and birth year ("Jg.") are shown: in every
-- result PDF of a single race, in every Gaudi-Modus export and in the public live view. The start
-- list, printed and live, follows only the birth year switch - it always shows the race number.
-- Two independent switches, since a club may well want one without the other. Both on by
-- default, so existing installations get the new columns without having to find the switches
-- first; an operator who prefers the old, narrower layout turns them off under Settings. Stored as
-- 0/1 like gaudi_mode's keep_*_in_ranking flags.
ALTER TABLE app_settings
    ADD COLUMN pdf_show_race_number INTEGER NOT NULL DEFAULT 1;
ALTER TABLE app_settings
    ADD COLUMN pdf_show_birth_year INTEGER NOT NULL DEFAULT 1;
