-- Whether the race result PDFs (every ranking/results export of a single race, not the start list
-- and not the Gaudi-Modus exports) print each participant's race number ("StNr.") and birth year
-- ("Jg.") next to the name. On by default, so existing installations get the new columns without
-- having to find the switch first; an operator who prefers the old, narrower layout turns it off
-- under Settings. Stored as 0/1 like gaudi_mode's keep_*_in_ranking flags.
ALTER TABLE app_settings
    ADD COLUMN pdf_show_race_number_and_birth_year INTEGER NOT NULL DEFAULT 1;
