import {createReducer, on} from "@ngrx/store";
import {TimingProviderSettings} from "../../models/timing-provider.model";
import {SeasonSettings} from "../../models/season-settings.model";
import * as SettingsActions from "./settings.actions";

export interface SettingsState {
    timingProvider: TimingProviderSettings | null;
    season: SeasonSettings | null;
    loading: boolean;
    saving: boolean;
    seasonSaving: boolean;
    error: string | null;
}

export const initialState: SettingsState = {
    timingProvider: null,
    season: null,
    loading: false,
    saving: false,
    seasonSaving: false,
    error: null,
};

export const settingsReducer = createReducer(
    initialState,

    on(SettingsActions.loadTimingProvider, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(SettingsActions.loadTimingProviderSuccess, (state, {settings}) => ({
        ...state,
        timingProvider: settings,
        loading: false,
    })),
    on(SettingsActions.loadTimingProviderFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    on(SettingsActions.updateTimingProvider, state => ({
        ...state,
        saving: true,
        error: null,
    })),
    on(SettingsActions.updateTimingProviderSuccess, (state, {settings}) => ({
        ...state,
        timingProvider: settings,
        saving: false,
    })),
    on(SettingsActions.updateTimingProviderFailure, (state, {error}) => ({
        ...state,
        saving: false,
        error,
    })),

    on(SettingsActions.loadSeasonSuccess, (state, {season}) => ({
        ...state,
        season,
    })),
    on(SettingsActions.updateSeason, state => ({
        ...state,
        seasonSaving: true,
    })),
    on(SettingsActions.updateSeasonSuccess, (state, {season}) => ({
        ...state,
        season,
        seasonSaving: false,
    })),
    on(SettingsActions.updateSeasonFailure, state => ({
        ...state,
        seasonSaving: false,
    })),
);
