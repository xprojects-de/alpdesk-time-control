-- Age groups become season-scoped: "U14" means birth years 2012-2013 in season 2025 and 2013-2014
-- in season 2026, so the same class name has to exist once per season with different ranges.
--
-- An age group is never stored on the participant - it is recomputed from person.birth_date/gender
-- on every read (see ParticipantService#findMatchingAgeGroup) - so without this column, re-cutting
-- the ranges for a new season silently re-categorises every *past* race too, in its result PDF,
-- live view and Gaudi-Modus scoring alike. season_year is what pins a finished race to the ranges
-- it was actually run under.
--
-- V1 declared name as a column-level UNIQUE, and SQLite's ALTER TABLE cannot drop a constraint -
-- only RENAME/ADD COLUMN/DROP COLUMN/RENAME COLUMN. As long as UNIQUE(name) stands, "U14" can only
-- exist once in the whole database, which is exactly what this feature needs to allow. So the table
-- is rebuilt the way SQLite documents it: rename the old one aside, create the real table, copy,
-- drop. Flyway runs the whole migration in one transaction.
--
-- Three things a table rebuild normally has to worry about, and why none of them bite here:
--  * Foreign keys: no table references age_group. That matters more than it sounds - since SQLite
--    3.25 a RENAME TO also rewrites other tables' REFERENCES clauses to follow the new name, so a
--    referencing table would end up pointing at age_group_v1 and be left dangling by the DROP.
--    (Switching foreign keys off would not help either: PRAGMA foreign_keys is a no-op inside a
--    transaction, which is exactly where Flyway runs this.)
--  * Indexes/triggers/views: age_group has none of its own - only the implicit index behind V1's
--    UNIQUE(name), which the new UNIQUE(name, season_year) replaces. Nothing to recreate.
--  * AUTOINCREMENT: ids are carried over explicitly, so sqlite_sequence for the new table ends up
--    at the same high-water mark and the next insert continues after it rather than reusing an id.
--    Stable ids also keep any bookmarked UI state valid.
ALTER TABLE age_group
    RENAME TO age_group_v1;

CREATE TABLE age_group
(
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    name            TEXT    NOT NULL,
    -- The season this configuration is valid for, e.g. 2026. Which season a race belongs to is
    -- derived from race.date by SeasonService, using the season boundary configured below - never
    -- from the current wall-clock year, or a re-export of last year's race would use this year's
    -- ranges.
    season_year     INTEGER NOT NULL,
    birth_year_from INTEGER NOT NULL,
    birth_year_to   INTEGER NOT NULL,
    gender          TEXT    NOT NULL DEFAULT 'BOTH' CHECK (gender IN ('MALE', 'FEMALE', 'BOTH')),
    UNIQUE (name, season_year)
);

-- Existing rows are stamped with the season this database is being upgraded in. Before this
-- migration there was only ever one set of age groups, and it was necessarily the set the club is
-- racing with right now - so whichever year the upgrade happens in is the year those ranges are
-- correct for. An installation upgrading in 2026 gets 2026, one upgrading in 2027 (whose ranges
-- were hand-edited for 2027 by then, since there was no other way to move them) gets 2027. A fixed
-- literal would mis-stamp the latter.
--
-- The season boundary is not consulted here, and does not need to be: it is created by this very
-- migration and therefore still at its 1 January default, where the season year and the calendar
-- year are the same thing.
INSERT INTO age_group (id, name, season_year, birth_year_from, birth_year_to, gender)
SELECT id, name, CAST(strftime('%Y', 'now') AS INTEGER), birth_year_from, birth_year_to, gender
FROM age_group_v1;

DROP TABLE age_group_v1;

CREATE INDEX idx_age_group_season_year ON age_group (season_year);

-- Start of the season year as month/day. The default 1/1 makes a season exactly a calendar year,
-- i.e. how age groups behaved before this migration. A club whose season spans the turn of the year
-- (a ski winter, where December and January belong together) can move it to e.g. 1 July; a race
-- before that date then counts towards the previous season year - see SeasonService#seasonOf.
-- Two plain integers rather than a date, since only month/day are meaningful here: the year is the
-- thing being computed.
ALTER TABLE app_settings
    ADD COLUMN season_start_month INTEGER NOT NULL DEFAULT 1;
ALTER TABLE app_settings
    ADD COLUMN season_start_day INTEGER NOT NULL DEFAULT 1;
