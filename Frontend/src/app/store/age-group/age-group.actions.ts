import {createAction, props} from '@ngrx/store';
import {AgeGroup, AgeGroupRequest} from '../../models/age-group.model';

// Load all age groups
export const loadAgeGroups = createAction('[AgeGroup] Load AgeGroups');
export const loadAgeGroupsSuccess = createAction(
    '[AgeGroup] Load AgeGroups Success',
    props<{ ageGroups: AgeGroup[] }>()
);
export const loadAgeGroupsFailure = createAction(
    '[AgeGroup] Load AgeGroups Failure',
    props<{ error: string }>()
);

// Create age group
export const createAgeGroup = createAction(
    '[AgeGroup] Create AgeGroup',
    props<{ ageGroup: AgeGroupRequest }>()
);
export const createAgeGroupSuccess = createAction(
    '[AgeGroup] Create AgeGroup Success',
    props<{ ageGroup: AgeGroup }>()
);
export const createAgeGroupFailure = createAction(
    '[AgeGroup] Create AgeGroup Failure',
    props<{ error: string }>()
);

// Update age group
export const updateAgeGroup = createAction(
    '[AgeGroup] Update AgeGroup',
    props<{ id: number; ageGroup: AgeGroupRequest }>()
);
export const updateAgeGroupSuccess = createAction(
    '[AgeGroup] Update AgeGroup Success',
    props<{ ageGroup: AgeGroup }>()
);
export const updateAgeGroupFailure = createAction(
    '[AgeGroup] Update AgeGroup Failure',
    props<{ error: string }>()
);

// Delete age group
export const deleteAgeGroup = createAction(
    '[AgeGroup] Delete AgeGroup',
    props<{ id: number }>()
);
export const deleteAgeGroupSuccess = createAction(
    '[AgeGroup] Delete AgeGroup Success',
    props<{ id: number }>()
);
export const deleteAgeGroupFailure = createAction(
    '[AgeGroup] Delete AgeGroup Failure',
    props<{ error: string }>()
);

