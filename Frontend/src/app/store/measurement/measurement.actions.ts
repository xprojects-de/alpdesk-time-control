import {createAction, props} from '@ngrx/store';
import {AutoAssignEnableRequest, AutoAssignStatus, Measurement, MeasurementRequest} from '../../models/measurement.model';

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


// Reset all measurements
export const resetMeasurements = createAction(
    '[Measurement] Reset Measurements',
    props<{ resetDevice: boolean }>()
);
export const resetMeasurementsSuccess = createAction(
    '[Measurement] Reset Measurements Success',
    props<{ message: string }>()
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

// Archive measurements into a race, optionally clearing the measurement table
export const archiveMeasurements = createAction(
    '[Measurement] Archive Measurements',
    props<{ raceId: number; resetDevice: boolean; clearAfterArchive: boolean }>()
);
export const archiveMeasurementsSuccess = createAction(
    '[Measurement] Archive Measurements Success',
    props<{ clearAfterArchive: boolean; message: string }>()
);
export const archiveMeasurementsFailure = createAction(
    '[Measurement] Archive Measurements Failure',
    props<{ error: string }>()
);

// Get device status
export const loadDeviceStatus = createAction(
    '[Measurement] Load Device Status'
);
export const loadDeviceStatusSuccess = createAction(
    '[Measurement] Load Device Status Success',
    props<{ status: string }>()
);
export const loadDeviceStatusFailure = createAction(
    '[Measurement] Load Device Status Failure',
    props<{ error: string }>()
);

// Discard oldest start
export const discardOldestStart = createAction(
    '[Measurement] Discard Oldest Start'
);
export const discardOldestStartSuccess = createAction(
    '[Measurement] Discard Oldest Start Success',
    props<{ message: string }>()
);
export const discardOldestStartFailure = createAction(
    '[Measurement] Discard Oldest Start Failure',
    props<{ error: string }>()
);

// Export measurements as JSON
export const exportMeasurements = createAction(
    '[Measurement] Export Measurements'
);
export const exportMeasurementsSuccess = createAction(
    '[Measurement] Export Measurements Success'
);
export const exportMeasurementsFailure = createAction(
    '[Measurement] Export Measurements Failure',
    props<{ error: string }>()
);

// Import measurements from JSON
export const importMeasurementsFromJson = createAction(
    '[Measurement] Import Measurements From Json',
    props<{ measurements: { participantId: number | null; durationMs: number; measuredAt: string }[] }>()
);
export const importMeasurementsFromJsonSuccess = createAction(
    '[Measurement] Import Measurements From Json Success',
    props<{ count: number }>()
);
export const importMeasurementsFromJsonFailure = createAction(
    '[Measurement] Import Measurements From Json Failure',
    props<{ error: string }>()
);

// Device connection polling
export const startDeviceConnectionPolling = createAction(
    '[Measurement] Start Device Connection Polling'
);
export const stopDeviceConnectionPolling = createAction(
    '[Measurement] Stop Device Connection Polling'
);
export const checkDeviceConnection = createAction(
    '[Measurement] Check Device Connection'
);
export const checkDeviceConnectionSuccess = createAction(
    '[Measurement] Check Device Connection Success',
    props<{ connected: boolean }>()
);
export const checkDeviceConnectionFailure = createAction(
    '[Measurement] Check Device Connection Failure',
    props<{ error: string }>()
);

// Live auto-assign mode: matches incoming device measurements to participants by race number
// while a race is selected for it. Nothing is archived here - see archiveMeasurements above for that.
export const loadAutoAssignStatus = createAction(
    '[Measurement] Load Auto-Assign Status'
);
export const loadAutoAssignStatusSuccess = createAction(
    '[Measurement] Load Auto-Assign Status Success',
    props<{ status: AutoAssignStatus }>()
);
export const loadAutoAssignStatusFailure = createAction(
    '[Measurement] Load Auto-Assign Status Failure',
    props<{ error: string }>()
);

export const enableAutoAssign = createAction(
    '[Measurement] Enable Auto-Assign',
    props<{ request: AutoAssignEnableRequest }>()
);
export const enableAutoAssignSuccess = createAction(
    '[Measurement] Enable Auto-Assign Success',
    props<{ status: AutoAssignStatus }>()
);
export const enableAutoAssignFailure = createAction(
    '[Measurement] Enable Auto-Assign Failure',
    props<{ error: string }>()
);

export const disableAutoAssign = createAction(
    '[Measurement] Disable Auto-Assign'
);
export const disableAutoAssignSuccess = createAction(
    '[Measurement] Disable Auto-Assign Success',
    props<{ status: AutoAssignStatus }>()
);
export const disableAutoAssignFailure = createAction(
    '[Measurement] Disable Auto-Assign Failure',
    props<{ error: string }>()
);

export const skipAutoAssign = createAction(
    '[Measurement] Skip Auto-Assign'
);
export const skipAutoAssignSuccess = createAction(
    '[Measurement] Skip Auto-Assign Success',
    props<{ status: AutoAssignStatus }>()
);
export const skipAutoAssignFailure = createAction(
    '[Measurement] Skip Auto-Assign Failure',
    props<{ error: string }>()
);

export const setNextAutoAssignRaceNumber = createAction(
    '[Measurement] Set Next Auto-Assign Race Number',
    props<{ raceNumber: number | null }>()
);
export const setNextAutoAssignRaceNumberSuccess = createAction(
    '[Measurement] Set Next Auto-Assign Race Number Success',
    props<{ status: AutoAssignStatus }>()
);
export const setNextAutoAssignRaceNumberFailure = createAction(
    '[Measurement] Set Next Auto-Assign Race Number Failure',
    props<{ error: string }>()
);

