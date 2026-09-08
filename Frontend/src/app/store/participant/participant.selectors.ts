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

export const selectFilteredParticipants = createSelector(
    selectAllParticipants,
    RaceSelectors.selectSelectedRaceId,
    (participants, selectedRaceId) => {
        if (!selectedRaceId) {
            return participants;
        }
        return participants.filter(p => p.race?.id === selectedRaceId);
    }
);

