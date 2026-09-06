import {createReducer, on} from '@ngrx/store';
import {Participant} from '../../models/participant.model';
import {ParticipantImportResponse} from '../../models/participant-import.model';
import * as ParticipantActions from './participant.actions';

export interface ParticipantState {
    participants: Participant[];
    selectedParticipantId: number | null;
    loading: boolean;
    pdfExportLoading: boolean;
    importLoading: boolean;
    importResult: ParticipantImportResponse | null;
    error: string | null;
}

export const initialState: ParticipantState = {
    participants: [],
    selectedParticipantId: null,
    loading: false,
    pdfExportLoading: false,
    importLoading: false,
    importResult: null,
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

    // Delete participants by race
    on(ParticipantActions.deleteParticipantsByRaceId, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(ParticipantActions.deleteParticipantsByRaceIdSuccess, (state, {raceId}) => ({
        ...state,
        participants: state.participants.filter(p => p.race?.id !== raceId),
        loading: false
    })),
    on(ParticipantActions.deleteParticipantsByRaceIdFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Select participant
    on(ParticipantActions.selectParticipant, (state, {id}) => ({
        ...state,
        selectedParticipantId: id
    })),

    // Assign race numbers
    on(ParticipantActions.assignRaceNumbers, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(ParticipantActions.assignRaceNumbersSuccess, (state, {participants}) => ({
        ...state,
        participants: state.participants.map(p => participants.find(u => u.id === p.id) || p),
        loading: false
    })),
    on(ParticipantActions.assignRaceNumbersFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Import participants from CSV
    on(ParticipantActions.importParticipantsCsv, state => ({
        ...state,
        importLoading: true,
        importResult: null,
        error: null
    })),
    on(ParticipantActions.importParticipantsCsvSuccess, (state, {result}) => ({
        ...state,
        participants: [...state.participants, ...result.imported],
        importLoading: false,
        importResult: result
    })),
    on(ParticipantActions.importParticipantsCsvFailure, (state, {error}) => ({
        ...state,
        importLoading: false,
        error
    })),

    // PDF Export
    on(
        ParticipantActions.exportAllPdf,
        ParticipantActions.exportByGenderPdf,
        ParticipantActions.exportAllAgeGroupsPdf,
        ParticipantActions.exportAllByCategoryPdf,
        ParticipantActions.exportByGenderByCategoryPdf,
        ParticipantActions.exportAllAgeGroupsByCategoryPdf,
        ParticipantActions.exportStartListPdf,
        state => ({
            ...state,
            pdfExportLoading: true,
            error: null
        })
    ),
    on(
        ParticipantActions.exportAllPdfSuccess,
        ParticipantActions.exportByGenderPdfSuccess,
        ParticipantActions.exportAllAgeGroupsPdfSuccess,
        ParticipantActions.exportAllByCategoryPdfSuccess,
        ParticipantActions.exportByGenderByCategoryPdfSuccess,
        ParticipantActions.exportAllAgeGroupsByCategoryPdfSuccess,
        ParticipantActions.exportStartListPdfSuccess,
        state => ({
            ...state,
            pdfExportLoading: false
        })
    ),
    on(
        ParticipantActions.exportAllPdfFailure,
        ParticipantActions.exportByGenderPdfFailure,
        ParticipantActions.exportAllAgeGroupsPdfFailure,
        ParticipantActions.exportAllByCategoryPdfFailure,
        ParticipantActions.exportByGenderByCategoryPdfFailure,
        ParticipantActions.exportAllAgeGroupsByCategoryPdfFailure,
        ParticipantActions.exportStartListPdfFailure,
        (state, {error}) => ({
            ...state,
            pdfExportLoading: false,
            error
        })
    )
);

