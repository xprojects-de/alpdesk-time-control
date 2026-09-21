import {Gender} from "./gender.model";

export interface AgeGroup {
    id: number;
    name: string;
    /**
     * Season this configuration is valid for, e.g. 2026. An age class rolls over every year - "U14"
     * covers birth years 2013-2014 in season 2026 and 2014-2015 in 2027 - so the same name exists
     * once per season. Which season a race belongs to is derived from its date by the backend.
     */
    seasonYear: number;
    birthYearFrom: number;
    birthYearTo: number;
    gender: Gender;
}

export interface AgeGroupRequest {
    name: string;
    seasonYear: number;
    birthYearFrom: number;
    birthYearTo: number;
    gender: Gender;
}

/** What the season selector offers, newest first, plus the season we are in today. */
export interface AgeGroupSeasons {
    /** Seasons that have age groups configured - the only ones a rollover can copy from. */
    seasons: number[];
    /**
     * Seasons that have at least one race. Offered as well because a season with races but no age
     * groups is exactly the one whose results come out "ohne Altersklasse" and therefore the one
     * that needs configuring - it is not in `seasons` yet.
     */
    seasonsWithRaces: number[];
    currentSeason: number;
}

export interface CopySeasonRequest {
    fromSeason: number;
    toSeason: number;
}
