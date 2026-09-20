import {createAction, props} from "@ngrx/store";
import {AgeGroup, AgeGroupRequest} from "../../models/age-group.model";

// Load all age groups
// A season of undefined means "every season" - what anything outside the configuration UI wants.
export const loadAgeGroups = createAction("[AgeGroup] Load AgeGroups", props<{season?: number}>());
export const loadAgeGroupsSuccess = createAction("[AgeGroup] Load AgeGroups Success", props<{ageGroups: AgeGroup[]}>());
export const loadAgeGroupsFailure = createAction("[AgeGroup] Load AgeGroups Failure", props<{error: string}>());

// Create age group
export const createAgeGroup = createAction("[AgeGroup] Create AgeGroup", props<{ageGroup: AgeGroupRequest}>());
export const createAgeGroupSuccess = createAction("[AgeGroup] Create AgeGroup Success", props<{ageGroup: AgeGroup}>());
export const createAgeGroupFailure = createAction("[AgeGroup] Create AgeGroup Failure", props<{error: string}>());

// Update age group
export const updateAgeGroup = createAction(
    "[AgeGroup] Update AgeGroup",
    props<{id: number; ageGroup: AgeGroupRequest}>(),
);
export const updateAgeGroupSuccess = createAction("[AgeGroup] Update AgeGroup Success", props<{ageGroup: AgeGroup}>());
export const updateAgeGroupFailure = createAction("[AgeGroup] Update AgeGroup Failure", props<{error: string}>());

// Delete age group
export const deleteAgeGroup = createAction("[AgeGroup] Delete AgeGroup", props<{id: number}>());
export const deleteAgeGroupSuccess = createAction("[AgeGroup] Delete AgeGroup Success", props<{id: number}>());
export const deleteAgeGroupFailure = createAction("[AgeGroup] Delete AgeGroup Failure", props<{error: string}>());

// Which season the configuration UI is currently showing/editing. Purely a UI concern - the season
// a race is scored in is always derived from its date by the backend, never from this.
export const selectSeason = createAction("[AgeGroup] Select Season", props<{season: number}>());

export const loadSeasons = createAction("[AgeGroup] Load Seasons");
export const loadSeasonsSuccess = createAction(
    "[AgeGroup] Load Seasons Success",
    props<{seasons: number[]; seasonsWithRaces: number[]; currentSeason: number}>(),
);
export const loadSeasonsFailure = createAction("[AgeGroup] Load Seasons Failure", props<{error: string}>());

// Rolls a season's configuration over to the next one, shifting the birth years by the difference.
export const copySeason = createAction("[AgeGroup] Copy Season", props<{fromSeason: number; toSeason: number}>());
export const copySeasonSuccess = createAction(
    "[AgeGroup] Copy Season Success",
    props<{toSeason: number; ageGroups: AgeGroup[]}>(),
);
export const copySeasonFailure = createAction("[AgeGroup] Copy Season Failure", props<{error: string}>());
