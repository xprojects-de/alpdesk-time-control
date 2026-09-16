import {createReducer, on} from '@ngrx/store';
import {PointsScale} from '../../models/points-scale.model';
import * as PointsScaleActions from './points-scale.actions';

export interface PointsScaleState {
    pointsScales: PointsScale[];
    loading: boolean;
    error: string | null;
}

export const initialState: PointsScaleState = {
    pointsScales: [],
    loading: false,
    error: null
};

export const pointsScaleReducer = createReducer(
    initialState,

    on(PointsScaleActions.loadPointsScales, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(PointsScaleActions.loadPointsScalesSuccess, (state, {pointsScales}) => ({
        ...state,
        pointsScales,
        loading: false
    })),
    on(PointsScaleActions.loadPointsScalesFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(PointsScaleActions.createPointsScale, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(PointsScaleActions.createPointsScaleSuccess, (state, {pointsScale}) => ({
        ...state,
        pointsScales: [...state.pointsScales, pointsScale],
        loading: false
    })),
    on(PointsScaleActions.createPointsScaleFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(PointsScaleActions.updatePointsScale, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(PointsScaleActions.updatePointsScaleSuccess, (state, {pointsScale}) => ({
        ...state,
        pointsScales: state.pointsScales.map(p => p.id === pointsScale.id ? pointsScale : p),
        loading: false
    })),
    on(PointsScaleActions.updatePointsScaleFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(PointsScaleActions.deletePointsScale, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(PointsScaleActions.deletePointsScaleSuccess, (state, {id}) => ({
        ...state,
        pointsScales: state.pointsScales.filter(p => p.id !== id),
        loading: false
    })),
    on(PointsScaleActions.deletePointsScaleFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),
    on(PointsScaleActions.deletePointsScaleConflict, state => ({
        ...state,
        loading: false
    }))
);
