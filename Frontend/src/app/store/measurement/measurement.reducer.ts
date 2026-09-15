import {createReducer, on} from '@ngrx/store';
import {AutoAssignStatus, Measurement} from '../../models/measurement.model';
import {MeasurementImportResponse} from '../../models/measurement-import.model';
import * as MeasurementActions from './measurement.actions';

export interface MeasurementState {
    measurements: Measurement[];
    selectedMeasurementId: number | null;
    // Number of in-flight async flows (every user-triggered create/update/delete/reset/archive/...
    // below) rather than a single boolean: with ~13 independent flows sharing one loading
    // indicator, a plain boolean lets whichever response (e.g. a fast mutation) arrives first flip
    // it back to false while a slower one is still in flight. The selector below only reports
    // "not loading" once every flow that started has also finished.
    //
    // loadMeasurements is deliberately NOT part of this counter: its effect uses switchMap (see
    // measurement.effects.ts), so a poll tick firing while a previous loadMeasurements is still in
    // flight cancels that previous request outright - its success/failure action never arrives, so
    // an increment/decrement counter would leak an unmatched +1 and get stuck "loading" forever
    // after enough overlaps. switchMap guarantees at most one loadMeasurements in flight at a time,
    // so a plain boolean (idempotently reset to true on every dispatch) is both correct and immune
    // to that cancellation.
    loadingCount: number;
    measurementsLoading: boolean;
    error: string | null;
    continuousModeEnabled: boolean;
    scheduledImportEnabled: boolean;
    deviceStatus: string | null;
    deviceConnected: boolean | null;
    isPollingDeviceConnection: boolean;
    autoAssignStatus: AutoAssignStatus;
    importLoading: boolean;
    importResult: MeasurementImportResponse | null;
}

export const initialState: MeasurementState = {
    measurements: [],
    selectedMeasurementId: null,
    loadingCount: 0,
    measurementsLoading: false,
    error: null,
    continuousModeEnabled: false,
    scheduledImportEnabled: false,
    deviceStatus: null,
    deviceConnected: null,
    isPollingDeviceConnection: false,
    autoAssignStatus: {raceId: null, active: false, nextRaceNumber: null},
    importLoading: false,
    importResult: null
};

const startLoading = (state: MeasurementState) => ({
    ...state,
    loadingCount: state.loadingCount + 1,
    error: null
});

// Floored at 0 defensively; every startLoading() has exactly one matching success/failure action,
// so this should never go negative in practice.
const endLoading = (state: MeasurementState) => Math.max(0, state.loadingCount - 1);

export const measurementReducer = createReducer(
    initialState,

    // Load all measurements (switchMap-driven poll - see measurementsLoading's doc comment above)
    on(MeasurementActions.loadMeasurements, state => ({
        ...state,
        measurementsLoading: true,
        error: null
    })),
    on(MeasurementActions.loadMeasurementsSuccess, (state, {measurements}) => ({
        ...state,
        measurements,
        measurementsLoading: false
    })),
    on(MeasurementActions.loadMeasurementsFailure, (state, {error}) => ({
        ...state,
        measurementsLoading: false,
        error
    })),

    // Load measurements by participant
    on(MeasurementActions.loadMeasurementsByParticipant, startLoading),
    on(MeasurementActions.loadMeasurementsByParticipantSuccess, (state, {measurements}) => ({
        ...state,
        measurements,
        loadingCount: endLoading(state)
    })),
    on(MeasurementActions.loadMeasurementsByParticipantFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Load single measurement
    on(MeasurementActions.loadMeasurement, startLoading),
    on(MeasurementActions.loadMeasurementSuccess, (state, {measurement}) => ({
        ...state,
        measurements: state.measurements.some(m => m.id === measurement.id)
            ? state.measurements.map(m => m.id === measurement.id ? measurement : m)
            : [...state.measurements, measurement],
        loadingCount: endLoading(state)
    })),
    on(MeasurementActions.loadMeasurementFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Create measurement
    on(MeasurementActions.createMeasurement, startLoading),
    on(MeasurementActions.createMeasurementSuccess, (state, {measurement}) => ({
        ...state,
        measurements: [...state.measurements, measurement],
        loadingCount: endLoading(state)
    })),
    on(MeasurementActions.createMeasurementFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Update measurement
    on(MeasurementActions.updateMeasurement, startLoading),
    on(MeasurementActions.updateMeasurementSuccess, (state, {measurement}) => ({
        ...state,
        measurements: state.measurements.map(m => m.id === measurement.id ? measurement : m),
        loadingCount: endLoading(state)
    })),
    on(MeasurementActions.updateMeasurementFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Delete measurement
    on(MeasurementActions.deleteMeasurement, startLoading),
    on(MeasurementActions.deleteMeasurementSuccess, (state, {id}) => ({
        ...state,
        measurements: state.measurements.filter(m => m.id !== id),
        selectedMeasurementId: state.selectedMeasurementId === id ? null : state.selectedMeasurementId,
        loadingCount: endLoading(state)
    })),
    on(MeasurementActions.deleteMeasurementFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Select measurement
    on(MeasurementActions.selectMeasurement, (state, {id}) => ({
        ...state,
        selectedMeasurementId: id
    })),

    // Reset measurements
    on(MeasurementActions.resetMeasurements, startLoading),
    on(MeasurementActions.resetMeasurementsSuccess, state => ({
        ...state,
        measurements: [],
        selectedMeasurementId: null,
        loadingCount: endLoading(state)
    })),
    on(MeasurementActions.resetMeasurementsFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Archive measurements
    on(MeasurementActions.archiveMeasurements, startLoading),
    on(MeasurementActions.archiveMeasurementsSuccess, (state, {clearAfterArchive}) => ({
        ...state,
        measurements: clearAfterArchive ? [] : state.measurements,
        selectedMeasurementId: clearAfterArchive ? null : state.selectedMeasurementId,
        loadingCount: endLoading(state)
    })),
    on(MeasurementActions.archiveMeasurementsFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Continuous mode
    on(MeasurementActions.setContinuousMode, startLoading),
    on(MeasurementActions.setContinuousModeSuccess, (state, {enabled}) => ({
        ...state,
        continuousModeEnabled: enabled,
        loadingCount: endLoading(state)
    })),
    on(MeasurementActions.setContinuousModeFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Scheduled import
    on(MeasurementActions.setScheduledImport, startLoading),
    on(MeasurementActions.setScheduledImportSuccess, (state, {enabled}) => ({
        ...state,
        scheduledImportEnabled: enabled,
        loadingCount: endLoading(state)
    })),
    on(MeasurementActions.setScheduledImportFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Load scheduled import status
    on(MeasurementActions.loadScheduledImportStatus, startLoading),
    on(MeasurementActions.loadScheduledImportStatusSuccess, (state, {enabled}) => ({
        ...state,
        scheduledImportEnabled: enabled,
        loadingCount: endLoading(state)
    })),
    on(MeasurementActions.loadScheduledImportStatusFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Load device status
    on(MeasurementActions.loadDeviceStatus, startLoading),
    on(MeasurementActions.loadDeviceStatusSuccess, (state, {status}) => ({
        ...state,
        deviceStatus: status,
        continuousModeEnabled: status === 'continuous',
        loadingCount: endLoading(state)
    })),
    on(MeasurementActions.loadDeviceStatusFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Discard oldest start
    on(MeasurementActions.discardOldestStart, startLoading),
    on(MeasurementActions.discardOldestStartSuccess, state => ({
        ...state,
        loadingCount: endLoading(state)
    })),
    on(MeasurementActions.discardOldestStartFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Export measurements as CSV
    on(MeasurementActions.exportMeasurementsCsv, startLoading),
    on(MeasurementActions.exportMeasurementsCsvSuccess, state => ({
        ...state,
        loadingCount: endLoading(state)
    })),
    on(MeasurementActions.exportMeasurementsCsvFailure, (state, {error}) => ({
        ...state,
        loadingCount: endLoading(state),
        error
    })),

    // Import measurements from CSV with a column mapping
    on(MeasurementActions.importMeasurementsMapped, state => ({
        ...state,
        importLoading: true,
        importResult: null,
        error: null
    })),
    on(MeasurementActions.importMeasurementsMappedSuccess, (state, {result}) => {
        // The backend omits empty array fields from the JSON response entirely, so
        // "imported"/"errors" can be undefined when there was nothing to report.
        const imported = result.imported ?? [];
        const errors = result.errors ?? [];
        return {
            ...state,
            measurements: [...state.measurements, ...imported],
            importLoading: false,
            importResult: {...result, imported, errors}
        };
    }),
    on(MeasurementActions.importMeasurementsMappedFailure, (state, {error}) => ({
        ...state,
        importLoading: false,
        error
    })),

    // Device connection polling
    on(MeasurementActions.startDeviceConnectionPolling, state => ({
        ...state,
        isPollingDeviceConnection: true
    })),
    on(MeasurementActions.stopDeviceConnectionPolling, state => ({
        ...state,
        isPollingDeviceConnection: false
    })),
    on(MeasurementActions.checkDeviceConnectionSuccess, (state, {connected}) => ({
        ...state,
        deviceConnected: connected
    })),
    on(MeasurementActions.checkDeviceConnectionFailure, (state, {error}) => ({
        ...state,
        deviceConnected: false,
        error
    })),

    // Live auto-assign mode
    on(MeasurementActions.loadAutoAssignStatus, state => ({
        ...state,
        error: null
    })),
    on(
        MeasurementActions.loadAutoAssignStatusSuccess,
        MeasurementActions.enableAutoAssignSuccess,
        MeasurementActions.disableAutoAssignSuccess,
        MeasurementActions.skipAutoAssignSuccess,
        MeasurementActions.setNextAutoAssignRaceNumberSuccess,
        (state, {status}) => ({
            ...state,
            autoAssignStatus: status
        })
    ),
    on(
        MeasurementActions.loadAutoAssignStatusFailure,
        MeasurementActions.enableAutoAssignFailure,
        MeasurementActions.disableAutoAssignFailure,
        MeasurementActions.skipAutoAssignFailure,
        MeasurementActions.setNextAutoAssignRaceNumberFailure,
        (state, {error}) => ({
            ...state,
            error
        })
    )
);
