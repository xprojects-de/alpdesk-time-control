import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ParticipantState} from './participant.reducer';

export const selectParticipantState = createFeatureSelector<ParticipantState>('participant');

export const selectAllParticipants = createSelector(
    selectParticipantState,
    state => state.participants
);

export const selectParticipantLoading = createSelector(
    selectParticipantState,
    state => state.loading
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

