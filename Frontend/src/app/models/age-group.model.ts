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
    /**
     * Which grouping of that season the class belongs to: two races of one season may cut the same
     * birth years differently. STANDARD_VARIANT is the season's default grouping; a race picks its
     * variant in the race dialog.
     */
    variant: string;
    birthYearFrom: number;
    birthYearTo: number;
    gender: Gender;
}

/** The variant every season has and every race uses unless it picks another one. */
export const STANDARD_VARIANT = "";

/** How a variant is shown - the standard one has an empty name. */
export function variantLabel(variant: string): string {
    return variant === STANDARD_VARIANT ? "Standard" : variant;
}

export interface AgeGroupRequest {
    name: string;
    seasonYear: number;
    variant: string;
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
    fromVariant: string;
    toSeason: number;
    toVariant: string;
}

/** One variant of a season, its number of age groups and the races of that season categorised with it. */
export interface AgeGroupVariant {
    variant: string;
    /** 0 with races means its last group was deleted - those races come out "ohne Altersklasse". */
    ageGroupCount: number;
    raceNames: string[];
}

export interface AgeGroupVariants {
    seasonYear: number;
    /** The standard variant first. */
    variants: AgeGroupVariant[];
}
