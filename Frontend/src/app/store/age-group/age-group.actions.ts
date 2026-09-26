import {createAction, props} from "@ngrx/store";
import {AgeGroup, AgeGroupRequest, AgeGroupVariant, AgeGroupVariants} from "../../models/age-group.model";

// Load all age groups
// A season of undefined means "every season" - what anything outside the configuration UI wants.
// With a season, only the given variant's groups (the standard one if omitted).
export const loadAgeGroups = createAction("[AgeGroup] Load AgeGroups", props<{season?: number; variant?: string}>());
// Carries the season and variant it was asked for, so the reducer can tell a late answer for a
// selection that is no longer on screen.
export const loadAgeGroupsSuccess = createAction(
    "[AgeGroup] Load AgeGroups Success",
    props<{ageGroups: AgeGroup[]; season?: number; variant?: string}>(),
);
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

// Copies one variant's groups to another season and/or variant, shifting the birth years by the
// difference between the seasons: rolls a season over, or starts a new variant from an existing one.
export const copySeason = createAction(
    "[AgeGroup] Copy Season",
    props<{fromSeason: number; fromVariant: string; toSeason: number; toVariant: string}>(),
);
export const copySeasonSuccess = createAction(
    "[AgeGroup] Copy Season Success",
    props<{toSeason: number; toVariant: string; ageGroups: AgeGroup[]}>(),
);
export const copySeasonFailure = createAction("[AgeGroup] Copy Season Failure", props<{error: string}>());

// Which variant of the selected season the configuration UI is showing. A variant that has no age
// groups yet (just named via "Neue Variante") exists only here until its first group is saved.
export const selectVariant = createAction("[AgeGroup] Select Variant", props<{variant: string}>());

export const loadVariants = createAction("[AgeGroup] Load Variants", props<{season: number}>());
export const loadVariantsSuccess = createAction(
    "[AgeGroup] Load Variants Success",
    props<{season: number; variants: AgeGroupVariant[]}>(),
);
export const loadVariantsFailure = createAction("[AgeGroup] Load Variants Failure", props<{error: string}>());

export const deleteVariant = createAction("[AgeGroup] Delete Variant", props<{season: number; variant: string}>());
export const deleteVariantSuccess = createAction(
    "[AgeGroup] Delete Variant Success",
    props<{season: number; variant: string}>(),
);
export const deleteVariantFailure = createAction("[AgeGroup] Delete Variant Failure", props<{error: string}>());

// The variants the race dialog offers: those of the season the race's date falls into.
export const loadVariantsForDate = createAction("[AgeGroup] Load Variants For Date", props<{date: string}>());
export const loadVariantsForDateSuccess = createAction(
    "[AgeGroup] Load Variants For Date Success",
    props<{date: string; variants: AgeGroupVariants}>(),
);
export const loadVariantsForDateFailure = createAction(
    "[AgeGroup] Load Variants For Date Failure",
    props<{error: string}>(),
);
