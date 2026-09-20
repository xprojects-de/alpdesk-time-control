import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AgeGroupState} from "./age-group.reducer";

export const selectAgeGroupState = createFeatureSelector<AgeGroupState>("ageGroup");

export const selectAllAgeGroups = createSelector(selectAgeGroupState, state => state.ageGroups);

export const selectAgeGroupLoading = createSelector(selectAgeGroupState, state => state.loading);

export const selectAgeGroupError = createSelector(selectAgeGroupState, state => state.error);

export const selectAgeGroupSeasons = createSelector(selectAgeGroupState, state => state.seasons);

export const selectCurrentSeason = createSelector(selectAgeGroupState, state => state.currentSeason);

export const selectSelectedSeason = createSelector(selectAgeGroupState, state => state.selectedSeason);

/**
 * The season offered as the source of a rollover: the newest configured season below the selected
 * one, or null when there is nothing earlier to copy from.
 */
export const selectPreviousConfiguredSeason = createSelector(
    selectAgeGroupSeasons,
    selectSelectedSeason,
    (seasons, selected) => (selected == null ? null : (seasons.filter(s => s < selected)[0] ?? null)),
);
