import {createAction, props} from '@ngrx/store';
import {Measurement, MeasurementRequest} from '../../models/measurement.model';

// Load all measurements
export const loadMeasurements = createAction('[Measurement] Load Measurements');
export const loadMeasurementsSuccess = createAction(
    '[Measurement] Load Measurements Success',
    props<{ measurements: Measurement[] }>()
);
export const loadMeasurementsFailure = createAction(
    '[Measurement] Load Measurements Failure',
    props<{ error: string }>()
);

// Load measurements by participant
export const loadMeasurementsByParticipant = createAction(
    '[Measurement] Load Measurements By Participant',
    props<{ participantId: number }>()
);
export const loadMeasurementsByParticipantSuccess = createAction(
    '[Measurement] Load Measurements By Participant Success',
    props<{ measurements: Measurement[] }>()
);
export const loadMeasurementsByParticipantFailure = createAction(
    '[Measurement] Load Measurements By Participant Failure',
    props<{ error: string }>()
);

// Load single measurement
export const loadMeasurement = createAction(
    '[Measurement] Load Measurement',
    props<{ id: number }>()
);
export const loadMeasurementSuccess = createAction(
    '[Measurement] Load Measurement Success',
    props<{ measurement: Measurement }>()
);
export const loadMeasurementFailure = createAction(
    '[Measurement] Load Measurement Failure',
    props<{ error: string }>()
);

// Create measurement
export const createMeasurement = createAction(
    '[Measurement] Create Measurement',
    props<{ measurement: MeasurementRequest }>()
);
export const createMeasurementSuccess = createAction(
    '[Measurement] Create Measurement Success',
    props<{ measurement: Measurement }>()
);
export const createMeasurementFailure = createAction(
    '[Measurement] Create Measurement Failure',
    props<{ error: string }>()
);

// Update measurement
export const updateMeasurement = createAction(
    '[Measurement] Update Measurement',
    props<{ id: number; measurement: MeasurementRequest }>()
);
export const updateMeasurementSuccess = createAction(
    '[Measurement] Update Measurement Success',
    props<{ measurement: Measurement }>()
);
export const updateMeasurementFailure = createAction(
    '[Measurement] Update Measurement Failure',
    props<{ error: string }>()
);

// Delete measurement
export const deleteMeasurement = createAction(
    '[Measurement] Delete Measurement',
    props<{ id: number }>()
);
export const deleteMeasurementSuccess = createAction(
    '[Measurement] Delete Measurement Success',
    props<{ id: number }>()
);
export const deleteMeasurementFailure = createAction(
    '[Measurement] Delete Measurement Failure',
    props<{ error: string }>()
);

// Select measurement
export const selectMeasurement = createAction(
    '[Measurement] Select Measurement',
    props<{ id: number | null }>()
);

// PDF Export - All (Gesamtwertung)
export const exportAllPdf = createAction(
    '[Measurement] Export All PDF',
    props<{ raceId: number }>()
);
export const exportAllPdfSuccess = createAction(
    '[Measurement] Export All PDF Success',
    props<{ blob: Blob; filename: string }>()
);
export const exportAllPdfFailure = createAction(
    '[Measurement] Export All PDF Failure',
    props<{ error: string }>()
);

// PDF Export - By Gender (Herren oder Damen)
export const exportByGenderPdf = createAction(
    '[Measurement] Export By Gender PDF',
    props<{ gender: string; raceId: number }>()
);
export const exportByGenderPdfSuccess = createAction(
    '[Measurement] Export By Gender PDF Success',
    props<{ blob: Blob; filename: string }>()
);
export const exportByGenderPdfFailure = createAction(
    '[Measurement] Export By Gender PDF Failure',
    props<{ error: string }>()
);

// PDF Export - All Age Groups (Nach Altersklassen aufgeteilt)
export const exportAllAgeGroupsPdf = createAction(
    '[Measurement] Export All Age Groups PDF',
    props<{ raceId: number }>()
);
export const exportAllAgeGroupsPdfSuccess = createAction(
    '[Measurement] Export All Age Groups PDF Success',
    props<{ blob: Blob; filename: string }>()
);
export const exportAllAgeGroupsPdfFailure = createAction(
    '[Measurement] Export All Age Groups PDF Failure',
    props<{ error: string }>()
);

// Reset all measurements
export const resetMeasurements = createAction(
    '[Measurement] Reset Measurements',
    props<{ resetDevice: boolean }>()
);
export const resetMeasurementsSuccess = createAction(
    '[Measurement] Reset Measurements Success'
);
export const resetMeasurementsFailure = createAction(
    '[Measurement] Reset Measurements Failure',
    props<{ error: string }>()
);

// Set continuous mode
export const setContinuousMode = createAction(
    '[Measurement] Set Continuous Mode',
    props<{ enable: boolean }>()
);
export const setContinuousModeSuccess = createAction(
    '[Measurement] Set Continuous Mode Success',
    props<{ enabled: boolean }>()
);
export const setContinuousModeFailure = createAction(
    '[Measurement] Set Continuous Mode Failure',
    props<{ error: string }>()
);

// Set scheduled import
export const setScheduledImport = createAction(
    '[Measurement] Set Scheduled Import',
    props<{ enable: boolean }>()
);
export const setScheduledImportSuccess = createAction(
    '[Measurement] Set Scheduled Import Success',
    props<{ enabled: boolean }>()
);
export const setScheduledImportFailure = createAction(
    '[Measurement] Set Scheduled Import Failure',
    props<{ error: string }>()
);

// Load scheduled import status
export const loadScheduledImportStatus = createAction(
    '[Measurement] Load Scheduled Import Status'
);
export const loadScheduledImportStatusSuccess = createAction(
    '[Measurement] Load Scheduled Import Status Success',
    props<{ enabled: boolean }>()
);
export const loadScheduledImportStatusFailure = createAction(
    '[Measurement] Load Scheduled Import Status Failure',
    props<{ error: string }>()
);

// Sync measurements to participants
export const syncMeasurementsToParticipants = createAction(
    '[Measurement] Sync Measurements To Participants'
);
export const syncMeasurementsToParticipantsSuccess = createAction(
    '[Measurement] Sync Measurements To Participants Success',
    props<{ message: string }>()
);
export const syncMeasurementsToParticipantsFailure = createAction(
    '[Measurement] Sync Measurements To Participants Failure',
    props<{ error: string }>()
);

