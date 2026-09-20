import {createFeatureSelector, createSelector} from "@ngrx/store";
import {SettingsState} from "./settings.reducer";

export const selectSettingsState = createFeatureSelector<SettingsState>("settings");

export const selectTimingProviderSettings = createSelector(selectSettingsState, state => state.timingProvider);

export const selectSettingsLoading = createSelector(selectSettingsState, state => state.loading);

export const selectSettingsSaving = createSelector(selectSettingsState, state => state.saving);

export const selectSettingsError = createSelector(selectSettingsState, state => state.error);

// Whether a timing device is configured (type !== NONE). null while settings are still loading -
// consumers should wait for a real value rather than guessing, so a NONE provider never causes a
// spurious device request before the real answer arrives. Only falls back to true (poll/show
// device UI) once loading has actually failed, matching the pre-NONE behavior instead of silently
// disabling device features forever on a transient error.
export const selectTimingProviderActive = createSelector(
    selectTimingProviderSettings,
    selectSettingsError,
    (settings, error): boolean | null => {
        if (settings) {
            return settings.type !== "NONE";
        }
        return error ? true : null;
    },
);
