import {createReducer, on} from '@ngrx/store';
import {AgeGroup} from '../../models/age-group.model';
import * as AgeGroupActions from './age-group.actions';

export interface AgeGroupState {
    ageGroups: AgeGroup[];
    selectedAgeGroupId: number | null;
    loading: boolean;
    error: string | null;
}

export const initialState: AgeGroupState = {
    ageGroups: [],
    selectedAgeGroupId: null,
    loading: false,
    error: null
};

export const ageGroupReducer = createReducer(
    initialState,

    // Load all age groups
    on(AgeGroupActions.loadAgeGroups, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(AgeGroupActions.loadAgeGroupsSuccess, (state, {ageGroups}) => ({
        ...state,
        ageGroups,
        loading: false
    })),
    on(AgeGroupActions.loadAgeGroupsFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Load single age group
    on(AgeGroupActions.loadAgeGroup, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(AgeGroupActions.loadAgeGroupSuccess, (state, {ageGroup}) => ({
        ...state,
        ageGroups: state.ageGroups.some(a => a.id === ageGroup.id)
            ? state.ageGroups.map(a => a.id === ageGroup.id ? ageGroup : a)
            : [...state.ageGroups, ageGroup],
        loading: false
    })),
    on(AgeGroupActions.loadAgeGroupFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Create age group
    on(AgeGroupActions.createAgeGroup, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(AgeGroupActions.createAgeGroupSuccess, (state, {ageGroup}) => ({
        ...state,
        ageGroups: [...state.ageGroups, ageGroup],
        loading: false
    })),
    on(AgeGroupActions.createAgeGroupFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Update age group
    on(AgeGroupActions.updateAgeGroup, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(AgeGroupActions.updateAgeGroupSuccess, (state, {ageGroup}) => ({
        ...state,
        ageGroups: state.ageGroups.map(a => a.id === ageGroup.id ? ageGroup : a),
        loading: false
    })),
    on(AgeGroupActions.updateAgeGroupFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Delete age group
    on(AgeGroupActions.deleteAgeGroup, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(AgeGroupActions.deleteAgeGroupSuccess, (state, {id}) => ({
        ...state,
        ageGroups: state.ageGroups.filter(a => a.id !== id),
        selectedAgeGroupId: state.selectedAgeGroupId === id ? null : state.selectedAgeGroupId,
        loading: false
    })),
    on(AgeGroupActions.deleteAgeGroupFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Select age group
    on(AgeGroupActions.selectAgeGroup, (state, {id}) => ({
        ...state,
        selectedAgeGroupId: id
    }))
);

