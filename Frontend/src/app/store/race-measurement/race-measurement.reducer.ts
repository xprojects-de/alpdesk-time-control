import {createReducer, on} from "@ngrx/store";
import {RaceMeasurement} from "../../models/race-measurement.model";
import * as RaceMeasurementActions from "./race-measurement.actions";

export interface RaceMeasurementState {
    raceMeasurements: RaceMeasurement[];
    loading: boolean;
    error: string | null;
}

export const initialState: RaceMeasurementState = {
    raceMeasurements: [],
    loading: false,
    error: null,
};

export const raceMeasurementReducer = createReducer(
    initialState,

    // Load race measurements
    on(RaceMeasurementActions.loadRaceMeasurements, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(RaceMeasurementActions.loadRaceMeasurementsSuccess, (state, {raceMeasurements}) => ({
        ...state,
        raceMeasurements,
        loading: false,
    })),
    on(RaceMeasurementActions.loadRaceMeasurementsFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    // Update race measurement
    on(RaceMeasurementActions.updateRaceMeasurement, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(RaceMeasurementActions.updateRaceMeasurementSuccess, (state, {raceMeasurement}) => ({
        ...state,
        raceMeasurements: state.raceMeasurements.map(m => (m.id === raceMeasurement.id ? raceMeasurement : m)),
        loading: false,
    })),
    on(RaceMeasurementActions.updateRaceMeasurementFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    // Delete race measurement
    on(RaceMeasurementActions.deleteRaceMeasurement, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(RaceMeasurementActions.deleteRaceMeasurementSuccess, (state, {id}) => ({
        ...state,
        raceMeasurements: state.raceMeasurements.filter(m => m.id !== id),
        loading: false,
    })),
    on(RaceMeasurementActions.deleteRaceMeasurementFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    // Sync race measurements to participants
    on(RaceMeasurementActions.syncRaceMeasurementsToParticipants, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(RaceMeasurementActions.syncRaceMeasurementsToParticipantsSuccess, state => ({
        ...state,
        loading: false,
    })),
    on(RaceMeasurementActions.syncRaceMeasurementsToParticipantsFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),
);
