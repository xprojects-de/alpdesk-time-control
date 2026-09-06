import {createAction, props} from '@ngrx/store';
import {Participant, ParticipantRequest} from '../../models/participant.model';
import {ParticipantImportResponse} from '../../models/participant-import.model';

// Load all participants
export const loadParticipants = createAction('[Participant] Load Participants');
export const loadParticipantsSuccess = createAction(
    '[Participant] Load Participants Success',
    props<{ participants: Participant[] }>()
);
export const loadParticipantsFailure = createAction(
    '[Participant] Load Participants Failure',
    props<{ error: string }>()
);

// Load single participant
export const loadParticipant = createAction(
    '[Participant] Load Participant',
    props<{ id: number }>()
);
export const loadParticipantSuccess = createAction(
    '[Participant] Load Participant Success',
    props<{ participant: Participant }>()
);
export const loadParticipantFailure = createAction(
    '[Participant] Load Participant Failure',
    props<{ error: string }>()
);

// Create participant
export const createParticipant = createAction(
    '[Participant] Create Participant',
    props<{ participant: ParticipantRequest }>()
);
export const createParticipantSuccess = createAction(
    '[Participant] Create Participant Success',
    props<{ participant: Participant }>()
);
export const createParticipantFailure = createAction(
    '[Participant] Create Participant Failure',
    props<{ error: string }>()
);

// Update participant
export const updateParticipant = createAction(
    '[Participant] Update Participant',
    props<{ id: number; participant: ParticipantRequest }>()
);
export const updateParticipantSuccess = createAction(
    '[Participant] Update Participant Success',
    props<{ participant: Participant }>()
);
export const updateParticipantFailure = createAction(
    '[Participant] Update Participant Failure',
    props<{ error: string }>()
);

// Delete participant
export const deleteParticipant = createAction(
    '[Participant] Delete Participant',
    props<{ id: number }>()
);
export const deleteParticipantSuccess = createAction(
    '[Participant] Delete Participant Success',
    props<{ id: number }>()
);
export const deleteParticipantFailure = createAction(
    '[Participant] Delete Participant Failure',
    props<{ error: string }>()
);

// Delete participants by race
export const deleteParticipantsByRaceId = createAction(
    '[Participant] Delete Participants By Race Id',
    props<{ raceId: number }>()
);
export const deleteParticipantsByRaceIdSuccess = createAction(
    '[Participant] Delete Participants By Race Id Success',
    props<{ raceId: number }>()
);
export const deleteParticipantsByRaceIdFailure = createAction(
    '[Participant] Delete Participants By Race Id Failure',
    props<{ error: string }>()
);

// Select participant
export const selectParticipant = createAction(
    '[Participant] Select Participant',
    props<{ id: number | null }>()
);

// Assign race numbers
export const assignRaceNumbers = createAction(
    '[Participant] Assign Race Numbers',
    props<{ raceId: number }>()
);
export const assignRaceNumbersSuccess = createAction(
    '[Participant] Assign Race Numbers Success',
    props<{ participants: Participant[] }>()
);
export const assignRaceNumbersFailure = createAction(
    '[Participant] Assign Race Numbers Failure',
    props<{ error: string }>()
);

// Import participants from CSV
export const importParticipantsCsv = createAction(
    '[Participant] Import Participants CSV',
    props<{ raceId: number; file: File }>()
);
export const importParticipantsCsvSuccess = createAction(
    '[Participant] Import Participants CSV Success',
    props<{ result: ParticipantImportResponse }>()
);
export const importParticipantsCsvFailure = createAction(
    '[Participant] Import Participants CSV Failure',
    props<{ error: string }>()
);

// PDF Export - Start list (Startliste)
export const exportStartListPdf = createAction(
    '[Participant] Export Start List PDF',
    props<{ raceId: number }>()
);
export const exportStartListPdfSuccess = createAction(
    '[Participant] Export Start List PDF Success',
    props<{ blob: Blob; filename: string }>()
);
export const exportStartListPdfFailure = createAction(
    '[Participant] Export Start List PDF Failure',
    props<{ error: string }>()
);

// PDF Export - All (Gesamtwertung)
export const exportAllPdf = createAction(
    '[Participant] Export All PDF',
    props<{ raceId: number }>()
);
export const exportAllPdfSuccess = createAction(
    '[Participant] Export All PDF Success',
    props<{ blob: Blob; filename: string }>()
);
export const exportAllPdfFailure = createAction(
    '[Participant] Export All PDF Failure',
    props<{ error: string }>()
);

// PDF Export - By Gender (Herren oder Damen)
export const exportByGenderPdf = createAction(
    '[Participant] Export By Gender PDF',
    props<{ gender: string; raceId: number }>()
);
export const exportByGenderPdfSuccess = createAction(
    '[Participant] Export By Gender PDF Success',
    props<{ blob: Blob; filename: string }>()
);
export const exportByGenderPdfFailure = createAction(
    '[Participant] Export By Gender PDF Failure',
    props<{ error: string }>()
);

// PDF Export - All Age Groups (Nach Altersklassen aufgeteilt)
export const exportAllAgeGroupsPdf = createAction(
    '[Participant] Export All Age Groups PDF',
    props<{ raceId: number }>()
);
export const exportAllAgeGroupsPdfSuccess = createAction(
    '[Participant] Export All Age Groups PDF Success',
    props<{ blob: Blob; filename: string }>()
);
export const exportAllAgeGroupsPdfFailure = createAction(
    '[Participant] Export All Age Groups PDF Failure',
    props<{ error: string }>()
);

// PDF Export - All by Category (Gesamtwertung (Alle) nach Kategorie)
export const exportAllByCategoryPdf = createAction(
    '[Participant] Export All By Category PDF',
    props<{ raceId: number }>()
);
export const exportAllByCategoryPdfSuccess = createAction(
    '[Participant] Export All By Category PDF Success',
    props<{ blob: Blob; filename: string }>()
);
export const exportAllByCategoryPdfFailure = createAction(
    '[Participant] Export All By Category PDF Failure',
    props<{ error: string }>()
);

// PDF Export - By Gender and Category (Alle Herren/Damen nach Kategorie)
export const exportByGenderByCategoryPdf = createAction(
    '[Participant] Export By Gender By Category PDF',
    props<{ gender: string; raceId: number }>()
);
export const exportByGenderByCategoryPdfSuccess = createAction(
    '[Participant] Export By Gender By Category PDF Success',
    props<{ blob: Blob; filename: string }>()
);
export const exportByGenderByCategoryPdfFailure = createAction(
    '[Participant] Export By Gender By Category PDF Failure',
    props<{ error: string }>()
);

// PDF Export - All Age Groups by Category (Nach Altersklassen aufgeteilt nach Kategorie)
export const exportAllAgeGroupsByCategoryPdf = createAction(
    '[Participant] Export All Age Groups By Category PDF',
    props<{ raceId: number }>()
);
export const exportAllAgeGroupsByCategoryPdfSuccess = createAction(
    '[Participant] Export All Age Groups By Category PDF Success',
    props<{ blob: Blob; filename: string }>()
);
export const exportAllAgeGroupsByCategoryPdfFailure = createAction(
    '[Participant] Export All Age Groups By Category PDF Failure',
    props<{ error: string }>()
);

