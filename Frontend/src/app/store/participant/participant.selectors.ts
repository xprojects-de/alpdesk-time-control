import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ParticipantState} from './participant.reducer';
import * as RaceSelectors from '../race/race.selectors';

export const selectParticipantState = createFeatureSelector<ParticipantState>('participant');

export const selectAllParticipants = createSelector(
    selectParticipantState,
    state => state.participants
);

export const selectParticipantLoading = createSelector(
    selectParticipantState,
    state => state.loading
);

export const selectPdfExportLoading = createSelector(
    selectParticipantState,
    state => state.pdfExportLoading
);

export const selectImportLoading = createSelector(
    selectParticipantState,
    state => state.importLoading
);

export const selectImportResult = createSelector(
    selectParticipantState,
    state => state.importResult
);

export const selectCopyLoading = createSelector(
    selectParticipantState,
    state => state.copyLoading
);

export const selectCopyResult = createSelector(
    selectParticipantState,
    state => state.copyResult
);

export const selectParticipantError = createSelector(
    selectParticipantState,
    state => state.error
);

export const selectSelectedParticipantId = createSelector(
    selectParticipantState,
    state => state.selectedParticipantId
);

export const selectSelectedParticipant = createSelector(
    selectAllParticipants,
    selectSelectedParticipantId,
    (participants, selectedId) =>
        selectedId ? participants.find(p => p.id === selectedId) : null
);

export const selectParticipantById = (id: number) => createSelector(
    selectAllParticipants,
    participants => participants.find(p => p.id === id)
);

/**
 * Participants for the currently selected race, or none at all if no race is selected - showing
 * every participant across every race by default was confusing (the list didn't visibly react to
 * the "Nach Rennen filtern" control until a race was actually picked).
 */
export const selectFilteredParticipants = createSelector(
    selectAllParticipants,
    RaceSelectors.selectSelectedRaceId,
    (participants, selectedRaceId) => {
        if (!selectedRaceId) {
            return [];
        }
        return participants.filter(p => p.race?.id === selectedRaceId);
    }
);

