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
export const exportAllPdf = createAction('[Measurement] Export All PDF');
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
    props<{ gender: string }>()
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
export const exportAllAgeGroupsPdf = createAction('[Measurement] Export All Age Groups PDF');
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

