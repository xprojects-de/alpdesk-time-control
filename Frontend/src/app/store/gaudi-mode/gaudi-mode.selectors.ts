import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GaudiModeState} from './gaudi-mode.reducer';

export const selectGaudiModeState = createFeatureSelector<GaudiModeState>('gaudiMode');

export const selectAllGaudiModes = createSelector(
    selectGaudiModeState,
    state => state.gaudiModes
);

export const selectGaudiModeLoading = createSelector(
    selectGaudiModeState,
    state => state.loading
);

export const selectGaudiModePdfExportLoading = createSelector(
    selectGaudiModeState,
    state => state.pdfExportLoading
);

export const selectGaudiModeError = createSelector(
    selectGaudiModeState,
    state => state.error
);

export const selectSelectedGaudiModeId = createSelector(
    selectGaudiModeState,
    state => state.selectedGaudiModeId
);

export const selectSelectedGaudiMode = createSelector(
    selectAllGaudiModes,
    selectSelectedGaudiModeId,
    (gaudiModes, selectedId) =>
        selectedId ? gaudiModes.find(g => g.id === selectedId) ?? null : null
);

export const selectGaudiModesByRace = (raceId: number | null) => createSelector(
    selectAllGaudiModes,
    gaudiModes => raceId ? gaudiModes.filter(g => g.races.some(r => r.raceId === raceId)) : gaudiModes
);

export const selectPairing = createSelector(
    selectGaudiModeState,
    state => state.pairing
);

export const selectRanking = createSelector(
    selectGaudiModeState,
    state => state.ranking
);

export const selectNotRanked = createSelector(
    selectGaudiModeState,
    state => state.notRanked
);
