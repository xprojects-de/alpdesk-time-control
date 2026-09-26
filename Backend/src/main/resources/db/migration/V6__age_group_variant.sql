-- Age groups get a variant within their season: two races of the same season may want the same
-- birth years grouped differently (a club championship in two-year classes, a kids' race in
-- single birth years). Until now a season could hold exactly one grouping - UNIQUE(name,
-- season_year) plus the no-overlap rule in AgeGroupService - so the only way to run the second race
-- was to re-cut the season's classes, which re-categorises every race already run under them.
--
-- The empty string is the season's standard variant, the one every existing age group and every
-- existing race belongs to, so nothing changes for an upgraded database. It is '' rather than NULL
-- on purpose: SQLite treats NULLs as distinct in a UNIQUE constraint, so UNIQUE(name, season_year,
-- variant) would stop protecting the standard variant altogether.
--
-- The UNIQUE constraint can only be changed by rebuilding the table, done exactly like in V4 and
-- safe for the same reasons: no table references age_group (race.age_group_variant below is plain
-- text, not a foreign key), it has no triggers or views, and ids are copied explicitly so the
-- AUTOINCREMENT high-water mark carries over. One thing differs from V4: V4 left an index of its own
-- behind, idx_age_group_season_year. It moves with the table on RENAME and is dropped with
-- age_group_v4, so it is recreated below - on (season_year, variant), the pair every lookup now
-- filters by.
ALTER TABLE age_group
    RENAME TO age_group_v4;

CREATE TABLE age_group
(
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    name            TEXT    NOT NULL,
    season_year     INTEGER NOT NULL,
    variant         TEXT    NOT NULL DEFAULT '',
    birth_year_from INTEGER NOT NULL,
    birth_year_to   INTEGER NOT NULL,
    gender          TEXT    NOT NULL DEFAULT 'BOTH' CHECK (gender IN ('MALE', 'FEMALE', 'BOTH')),
    UNIQUE (name, season_year, variant)
);

INSERT INTO age_group (id, name, season_year, variant, birth_year_from, birth_year_to, gender)
SELECT id, name, season_year, '', birth_year_from, birth_year_to, gender
FROM age_group_v4;

DROP TABLE age_group_v4;

CREATE INDEX idx_age_group_season_year_variant ON age_group (season_year, variant);

-- Which variant of its season a race is categorised with. The season itself still comes from the
-- race's date (SeasonService); only the variant is chosen per race, '' meaning the standard one.
ALTER TABLE race
    ADD COLUMN age_group_variant TEXT NOT NULL DEFAULT '';
