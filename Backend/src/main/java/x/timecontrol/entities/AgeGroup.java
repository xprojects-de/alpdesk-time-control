package x.timecontrol.entities;

import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

@MappedEntity(value = "age_group")
public record AgeGroup(

        @Id
        @GeneratedValue
        Long id,

        String name,

        // The season this configuration is valid for, e.g. 2026, unique together with name. Age
        // classes roll over every year ("U14" is 2012-2013 in season 2025 and 2013-2014 in season
        // 2026), and an age group is never stored on the participant - it is recomputed from birth
        // date/gender on every read - so without this, re-cutting the ranges for a new season would
        // silently re-categorise every past race too. Which season a race belongs to is derived
        // from its date by SeasonService, never from the current wall-clock year.
        Integer seasonYear,

        // Which grouping of that season this class belongs to - two races of one season may cut the
        // same birth years differently (two-year classes for the club championship, single birth
        // years for a kids' race). STANDARD_VARIANT is the season's default grouping; a race picks
        // its variant in Race#ageGroupVariant. Name uniqueness and the no-overlap rule hold per
        // season and variant.
        String variant,

        Integer birthYearFrom,
        Integer birthYearTo,
        Gender gender
) {
    /** The variant every season has and every race uses unless it picks another one. */
    public static final String STANDARD_VARIANT = "";

    /**
     * Legacy constructor predating variants, kept so the many call sites (mostly tests) that build
     * an age group of the standard variant don't all need touching.
     */
    public AgeGroup(Long id, String name, Integer seasonYear, Integer birthYearFrom, Integer birthYearTo, Gender gender) {
        this(id, name, seasonYear, STANDARD_VARIANT, birthYearFrom, birthYearTo, gender);
    }
}
