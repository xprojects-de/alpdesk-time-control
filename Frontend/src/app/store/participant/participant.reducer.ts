import {createReducer, on} from '@ngrx/store';
import {Participant} from '../../models/participant.model';
import {ParticipantImportResponse} from '../../models/participant-import.model';
import {ParticipantResultImportResponse} from '../../models/participant-result-import.model';
import {ParticipantCopyResponse} from '../../models/participant-copy.model';
import * as ParticipantActions from './participant.actions';

export interface ParticipantState {
    participants: Participant[];
    selectedParticipantId: number | null;
    // Count of in-flight load/create/update/delete/assignRaceNumbers requests rather than a plain
    // boolean: with 7 independent mergeMap-driven flows sharing one loading indicator, a boolean
    // lets whichever response arrives first flip it back to false while another is still pending
    // (e.g. an edit save landing while a bulk delete is still in flight). None of these effects use
    // switchMap, so - unlike measurement.reducer.ts's poll-driven loadMeasurements - every
    // increment here is guaranteed a matching decrement; no separate carve-out is needed.
    loadingCount: number;
    pdfExportLoading: boolean;
    importLoading: boolean;
    importResult: ParticipantImportResponse | null;
    resultImportLoading: boolean;
    resultImportResult: ParticipantResultImportResponse | null;
    copyLoading: boolean;
    copyResult: ParticipantCopyResponse | null;
    error: string | null;
}

export const initialState: ParticipantState = {
    participants: [],
    selectedParticipantId: null,
    loadingCount: 0,
    pdfExportLoading: false,
    importLoading: false,
    importResult: null,
    resultImportLoading: false,
    resultImportResult: null,
    copyLoading: false,
    copyResult: null,
    error: null
};

const mergeById = (existing: Participant[], updated: Participant[]): Participant[] => {
    const updatedById = new Map(updated.map(u => [u.id, u]));
    return existing.map(p => updatedById.get(p.id) ?? p);
};

const startLoading = (state: ParticipantState) => ({
    ...state,
    loadingCount: state.loadingCount + 1,
    error: null
});

const endLoading = (state: ParticipantState) => Math.max(0, state.loadingCount - 1);

export const participantReducer = createReducer(
    initialState,

    // Load all participants
    on(ParticipantActions.loadParticipants, startLoading),
    on(ParticipantActions.loadParticipantsSuccess, (state, {participants}) => ({
        ...state,
        participants,
        loadingCount: endLoading(state)
    })),
    on(ParticipantActions.loadParticipantsFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Load single participant
    on(ParticipantActions.loadParticipant, startLoading),
    on(ParticipantActions.loadParticipantSuccess, (state, {participant}) => ({
        ...state,
        participants: state.participants.some(p => p.id === participant.id)
            ? state.participants.map(p => p.id === participant.id ? participant : p)
            : [...state.participants, participant],
        loadingCount: endLoading(state)
    })),
    on(ParticipantActions.loadParticipantFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Create participant
    on(ParticipantActions.createParticipant, startLoading),
    on(ParticipantActions.createParticipantSuccess, (state, {participant}) => ({
        ...state,
        participants: [...state.participants, participant],
        loadingCount: endLoading(state)
    })),
    on(ParticipantActions.createParticipantFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Update participant
    on(ParticipantActions.updateParticipant, startLoading),
    on(ParticipantActions.updateParticipantSuccess, (state, {participant}) => ({
        ...state,
        participants: state.participants.map(p => p.id === participant.id ? participant : p),
        loadingCount: endLoading(state)
    })),
    on(ParticipantActions.updateParticipantFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Clear participant result
    on(ParticipantActions.clearParticipantResult, startLoading),
    on(ParticipantActions.clearParticipantResultSuccess, (state, {participant}) => ({
        ...state,
        participants: state.participants.map(p => p.id === participant.id ? participant : p),
        loadingCount: endLoading(state)
    })),
    on(ParticipantActions.clearParticipantResultFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Delete participant
    on(ParticipantActions.deleteParticipant, startLoading),
    on(ParticipantActions.deleteParticipantSuccess, (state, {id}) => ({
        ...state,
        participants: state.participants.filter(p => p.id !== id),
        selectedParticipantId: state.selectedParticipantId === id ? null : state.selectedParticipantId,
        loadingCount: endLoading(state)
    })),
    on(ParticipantActions.deleteParticipantFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Delete participants by race
    on(ParticipantActions.deleteParticipantsByRaceId, startLoading),
    on(ParticipantActions.deleteParticipantsByRaceIdSuccess, (state, {raceId}) => ({
        ...state,
        participants: state.participants.filter(p => p.race?.id !== raceId),
        loadingCount: endLoading(state)
    })),
    on(ParticipantActions.deleteParticipantsByRaceIdFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Select participant
    on(ParticipantActions.selectParticipant, (state, {id}) => ({
        ...state,
        selectedParticipantId: id
    })),

    // Assign race numbers
    on(ParticipantActions.assignRaceNumbers, startLoading),
    on(ParticipantActions.assignRaceNumbersSuccess, (state, {participants}) => ({
        ...state,
        participants: mergeById(state.participants, participants),
        loadingCount: endLoading(state)
    })),
    on(ParticipantActions.assignRaceNumbersFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Apply a start order derived from a linked previous race's results
    on(ParticipantActions.applyStartOrderFromPreviousRace, startLoading),
    on(ParticipantActions.applyStartOrderFromPreviousRaceSuccess, (state, {participants}) => ({
        ...state,
        participants: mergeById(state.participants, participants),
        loadingCount: endLoading(state)
    })),
    on(ParticipantActions.applyStartOrderFromPreviousRaceFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Apply a start-group assignment to a race's participants
    on(ParticipantActions.saveStartGroupAssignment, startLoading),
    on(ParticipantActions.saveStartGroupAssignmentSuccess, (state, {participants}) => ({
        ...state,
        participants: mergeById(state.participants, participants),
        loadingCount: endLoading(state)
    })),
    on(ParticipantActions.saveStartGroupAssignmentFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Copy a start-group assignment into other races - merges every target race's participants
    // (whether or not the copy actually touched them) so a target race being viewed right now
    // reflects the copy immediately instead of showing stale pre-copy counts until a reload.
    on(ParticipantActions.copyStartGroupAssignment, startLoading),
    on(ParticipantActions.copyStartGroupAssignmentSuccess, (state, {participants}) => ({
        ...state,
        participants: mergeById(state.participants, participants),
        loadingCount: endLoading(state)
    })),
    on(ParticipantActions.copyStartGroupAssignmentFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Assign race numbers from a race's current start-group order
    on(ParticipantActions.generateRaceNumbersFromStartGroups, startLoading),
    on(ParticipantActions.generateRaceNumbersFromStartGroupsSuccess, (state, {participants}) => ({
        ...state,
        participants: mergeById(state.participants, participants),
        loadingCount: endLoading(state)
    })),
    on(ParticipantActions.generateRaceNumbersFromStartGroupsFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Import participants from CSV, or via a mapped import (CSV any delimiter / DSV-Wettkampfdatei
    // XML) - both produce the same ParticipantImportResponse, so they share import state.
    on(ParticipantActions.importParticipantsCsv, ParticipantActions.importParticipantsMapped, state => ({
        ...state,
        importLoading: true,
        importResult: null,
        error: null
    })),
    on(ParticipantActions.importParticipantsCsvSuccess, ParticipantActions.importParticipantsMappedSuccess, (state, {result}) => {
        // The backend omits empty array fields from the JSON response entirely, so
        // "imported"/"errors" can be undefined when there was nothing to report.
        const imported = result.imported ?? [];
        const errors = result.errors ?? [];
        return {
            ...state,
            participants: [...state.participants, ...imported],
            importLoading: false,
            importResult: {...result, imported, errors}
        };
    }),
    on(ParticipantActions.importParticipantsCsvFailure, ParticipantActions.importParticipantsMappedFailure, (state, {error}) => ({
        ...state,
        importLoading: false,
        error
    })),
    on(ParticipantActions.clearImportResult, state => ({
        ...state,
        importResult: null
    })),

    // Import results (time/status) for existing participants, matched by race number - unlike the
    // roster import above this never adds participants, it merges the returned rows into the
    // existing ones by id.
    on(ParticipantActions.importParticipantResultsMapped, state => ({
        ...state,
        resultImportLoading: true,
        resultImportResult: null,
        error: null
    })),
    on(ParticipantActions.importParticipantResultsMappedSuccess, (state, {result}) => {
        // The backend omits empty array fields from the JSON response entirely, so
        // "updated"/"errors" can be undefined when there was nothing to report.
        const updated = result.updated ?? [];
        const errors = result.errors ?? [];
        return {
            ...state,
            participants: state.participants.map(p => updated.find(u => u.id === p.id) ?? p),
            resultImportLoading: false,
            resultImportResult: {...result, updated, errors}
        };
    }),
    on(ParticipantActions.importParticipantResultsMappedFailure, (state, {error}) => ({
        ...state,
        resultImportLoading: false,
        error
    })),

    // Copy participants into other races
    on(ParticipantActions.copyParticipants, state => ({
        ...state,
        copyLoading: true,
        copyResult: null,
        error: null
    })),
    on(ParticipantActions.copyParticipantsSuccess, (state, {result}) => ({
        ...state,
        copyLoading: false,
        copyResult: result
    })),
    on(ParticipantActions.clearCopyResult, state => ({
        ...state,
        copyResult: null
    })),
    on(ParticipantActions.copyParticipantsFailure, (state, {error}) => ({
        ...state,
        copyLoading: false,
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

