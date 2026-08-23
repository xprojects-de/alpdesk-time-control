import {createReducer, on} from '@ngrx/store';
import {Measurement} from '../../models/measurement.model';
import * as MeasurementActions from './measurement.actions';

export interface MeasurementState {
    measurements: Measurement[];
    selectedMeasurementId: number | null;
    loading: boolean;
    error: string | null;
    continuousModeEnabled: boolean;
    scheduledImportEnabled: boolean;
    deviceStatus: string | null;
    deviceConnected: boolean | null;
    isPollingDeviceConnection: boolean;
}

export const initialState: MeasurementState = {
    measurements: [],
    selectedMeasurementId: null,
    loading: false,
    error: null,
    continuousModeEnabled: false,
    scheduledImportEnabled: false,
    deviceStatus: null,
    deviceConnected: null,
    isPollingDeviceConnection: false
};

export const measurementReducer = createReducer(
    initialState,

    // Load all measurements
    on(MeasurementActions.loadMeasurements, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MeasurementActions.loadMeasurementsSuccess, (state, {measurements}) => ({
        ...state,
        measurements,
        loading: false
    })),
    on(MeasurementActions.loadMeasurementsFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Load measurements by participant
    on(MeasurementActions.loadMeasurementsByParticipant, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MeasurementActions.loadMeasurementsByParticipantSuccess, (state, {measurements}) => ({
        ...state,
        measurements,
        loading: false
    })),
    on(MeasurementActions.loadMeasurementsByParticipantFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Load single measurement
    on(MeasurementActions.loadMeasurement, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MeasurementActions.loadMeasurementSuccess, (state, {measurement}) => ({
        ...state,
        measurements: state.measurements.some(m => m.id === measurement.id)
            ? state.measurements.map(m => m.id === measurement.id ? measurement : m)
            : [...state.measurements, measurement],
        loading: false
    })),
    on(MeasurementActions.loadMeasurementFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Create measurement
    on(MeasurementActions.createMeasurement, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MeasurementActions.createMeasurementSuccess, (state, {measurement}) => ({
        ...state,
        measurements: [...state.measurements, measurement],
        loading: false
    })),
    on(MeasurementActions.createMeasurementFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Update measurement
    on(MeasurementActions.updateMeasurement, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MeasurementActions.updateMeasurementSuccess, (state, {measurement}) => ({
        ...state,
        measurements: state.measurements.map(m => m.id === measurement.id ? measurement : m),
        loading: false
    })),
    on(MeasurementActions.updateMeasurementFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Delete measurement
    on(MeasurementActions.deleteMeasurement, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MeasurementActions.deleteMeasurementSuccess, (state, {id}) => ({
        ...state,
        measurements: state.measurements.filter(m => m.id !== id),
        selectedMeasurementId: state.selectedMeasurementId === id ? null : state.selectedMeasurementId,
        loading: false
    })),
    on(MeasurementActions.deleteMeasurementFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Select measurement
    on(MeasurementActions.selectMeasurement, (state, {id}) => ({
        ...state,
        selectedMeasurementId: id
    })),

    // Reset measurements
    on(MeasurementActions.resetMeasurements, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MeasurementActions.resetMeasurementsSuccess, state => ({
        ...state,
        measurements: [],
        selectedMeasurementId: null,
        loading: false
    })),
    on(MeasurementActions.resetMeasurementsFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Continuous mode
    on(MeasurementActions.setContinuousMode, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MeasurementActions.setContinuousModeSuccess, (state, {enabled}) => ({
        ...state,
        continuousModeEnabled: enabled,
        loading: false
    })),
    on(MeasurementActions.setContinuousModeFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Scheduled import
    on(MeasurementActions.setScheduledImport, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MeasurementActions.setScheduledImportSuccess, (state, {enabled}) => ({
        ...state,
        scheduledImportEnabled: enabled,
        loading: false
    })),
    on(MeasurementActions.setScheduledImportFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Load scheduled import status
    on(MeasurementActions.loadScheduledImportStatus, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MeasurementActions.loadScheduledImportStatusSuccess, (state, {enabled}) => ({
        ...state,
        scheduledImportEnabled: enabled,
        loading: false
    })),
    on(MeasurementActions.loadScheduledImportStatusFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Load device status
    on(MeasurementActions.loadDeviceStatus, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MeasurementActions.loadDeviceStatusSuccess, (state, {status}) => ({
        ...state,
        deviceStatus: status,
        continuousModeEnabled: status === 'continuous',
        loading: false
    })),
    on(MeasurementActions.loadDeviceStatusFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    // Discard oldest start
    on(MeasurementActions.discardOldestStart, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MeasurementActions.discardOldestStartSuccess, state => ({
        ...state,
        loading: false
    })),
    on(MeasurementActions.discardOldestStartFailure, (state, {error}) => ({
        ...state,
        loading: false,
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
    }))
);

