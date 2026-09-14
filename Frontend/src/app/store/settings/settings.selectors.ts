import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SettingsState} from './settings.reducer';

export const selectSettingsState = createFeatureSelector<SettingsState>('settings');

export const selectTimingProviderSettings = createSelector(
    selectSettingsState,
    state => state.timingProvider
);

export const selectSettingsLoading = createSelector(
    selectSettingsState,
    state => state.loading
);

export const selectSettingsSaving = createSelector(
    selectSettingsState,
    state => state.saving
);

export const selectSettingsError = createSelector(
    selectSettingsState,
    state => state.error
);
