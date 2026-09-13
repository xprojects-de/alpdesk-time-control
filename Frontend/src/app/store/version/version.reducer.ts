import {createReducer, on} from '@ngrx/store';
import {VersionInfo} from '../../models/version.model';
import * as VersionActions from './version.actions';

export interface VersionState {
    version: VersionInfo | null;
    loading: boolean;
    error: string | null;
}

export const initialState: VersionState = {
    version: null,
    loading: false,
    error: null
};

export const versionReducer = createReducer(
    initialState,

    on(VersionActions.loadVersion, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(VersionActions.loadVersionSuccess, (state, {version}) => ({
        ...state,
        version,
        loading: false
    })),
    on(VersionActions.loadVersionFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    }))
);
