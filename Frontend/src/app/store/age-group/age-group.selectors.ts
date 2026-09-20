import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AgeGroupState} from "./age-group.reducer";

export const selectAgeGroupState = createFeatureSelector<AgeGroupState>("ageGroup");

export const selectAllAgeGroups = createSelector(selectAgeGroupState, state => state.ageGroups);

export const selectAgeGroupLoading = createSelector(selectAgeGroupState, state => state.loading);

export const selectAgeGroupError = createSelector(selectAgeGroupState, state => state.error);
