import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AgeGroupState} from "./age-group.reducer";

export const selectAgeGroupState = createFeatureSelector<AgeGroupState>("ageGroup");

export const selectAllAgeGroups = createSelector(selectAgeGroupState, state => state.ageGroups);

export const selectAgeGroupLoading = createSelector(selectAgeGroupState, state => state.loading);

export const selectAgeGroupError = createSelector(selectAgeGroupState, state => state.error);

export const selectAgeGroupSeasons = createSelector(selectAgeGroupState, state => state.seasons);

export const selectSeasonsWithRaces = createSelector(selectAgeGroupState, state => state.seasonsWithRaces);

export const selectCurrentSeason = createSelector(selectAgeGroupState, state => state.currentSeason);

export const selectSelectedSeason = createSelector(selectAgeGroupState, state => state.selectedSeason);

export const selectSelectedVariant = createSelector(selectAgeGroupState, state => state.selectedVariant);

export const selectVariants = createSelector(selectAgeGroupState, state => state.variants);

/**
 * The season and variant the table shows, as one value: switching seasons also resets the variant,
 * and two separate selectors would report that as two changes - loading the new season's groups
 * for the old variant first.
 */
export const selectShownSeasonVariant = createSelector(
    selectSelectedSeason,
    selectSelectedVariant,
    (season, variant) => ({
        season,
        variant,
    }),
);

export const selectRaceDialogVariants = createSelector(selectAgeGroupState, state => state.raceDialogVariants);

/**
 * The season offered as the source of a rollover: the configured season closest to the selected
 * one, preferring an earlier one (the normal case - roll last season forward). An earlier season
 * is not always available: after upgrading to season-scoped age groups, only the upgrade year has
 * groups, so filling in a *past* season with races means copying backwards. `copySeason` shifts by
 * the difference either way, so that works the same. null when nothing is configured to copy from.
 */
export const selectRolloverSourceSeason = createSelector(
    selectAgeGroupSeasons,
    selectSelectedSeason,
    (seasons, selected) => {
        if (selected == null) {
            return null;
        }
        const earlier = seasons.filter(s => s < selected);
        if (earlier.length > 0) {
            // seasons is newest-first, so the first earlier one is the closest.
            return earlier[0];
        }
        const later = seasons.filter(s => s > selected);
        return later.length > 0 ? later[later.length - 1] : null;
    },
);
