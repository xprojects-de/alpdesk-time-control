import {createReducer, on} from '@ngrx/store';
import {Participant} from '../../models/participant.model';
import * as ParticipantActions from './participant.actions';

export interface ParticipantState {
    participants: Participant[];
    selectedParticipantId: number | null;
    loading: boolean;
    error: string | null;
}

export const initialState: ParticipantState = {
    participants: [],
    selectedParticipantId: null,
    loading: false,
    error: null
};

export const participantReducer = createReducer(
    initialState,

    // Load all participants
    on(ParticipantActions.loadParticipants, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(ParticipantActions.loadParticipantsSuccess, (state, {participants}) => ({
        ...state,
        participants,
        loading: false
    })),
    on(ParticipantActions.loadParticipantsFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Load single participant
    on(ParticipantActions.loadParticipant, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(ParticipantActions.loadParticipantSuccess, (state, {participant}) => ({
        ...state,
        participants: state.participants.some(p => p.id === participant.id)
            ? state.participants.map(p => p.id === participant.id ? participant : p)
            : [...state.participants, participant],
        loading: false
    })),
    on(ParticipantActions.loadParticipantFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Create participant
    on(ParticipantActions.createParticipant, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(ParticipantActions.createParticipantSuccess, (state, {participant}) => ({
        ...state,
        participants: [...state.participants, participant],
        loading: false
    })),
    on(ParticipantActions.createParticipantFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Update participant
    on(ParticipantActions.updateParticipant, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(ParticipantActions.updateParticipantSuccess, (state, {participant}) => ({
        ...state,
        participants: state.participants.map(p => p.id === participant.id ? participant : p),
        loading: false
    })),
    on(ParticipantActions.updateParticipantFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Delete participant
    on(ParticipantActions.deleteParticipant, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(ParticipantActions.deleteParticipantSuccess, (state, {id}) => ({
        ...state,
        participants: state.participants.filter(p => p.id !== id),
        selectedParticipantId: state.selectedParticipantId === id ? null : state.selectedParticipantId,
        loading: false
    })),
    on(ParticipantActions.deleteParticipantFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Select participant
    on(ParticipantActions.selectParticipant, (state, {id}) => ({
        ...state,
        selectedParticipantId: id
    }))
);

