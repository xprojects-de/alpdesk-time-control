import {createReducer, on} from "@ngrx/store";
import {RaceMeasurement} from "../../models/race-measurement.model";
import * as RaceMeasurementActions from "./race-measurement.actions";

export interface RaceMeasurementState {
    raceMeasurements: RaceMeasurement[];
    /** Race the rows in `raceMeasurements` belong to - see the loadRaceMeasurements handler. */
    loadedRaceId: number | null;
    loading: boolean;
    error: string | null;
}

export const initialState: RaceMeasurementState = {
    raceMeasurements: [],
    loadedRaceId: null,
    loading: false,
    error: null,
};

export const raceMeasurementReducer = createReducer(
    initialState,

    // Load race measurements
    // Switching races drops the old rows right away: the table stays interactive while the
    // request is in flight, so leaving them would let an operator delete or reassign a
    // measurement of the race they just navigated away from. A refresh of the same race keeps
    // its rows so the table doesn't flicker.
    on(RaceMeasurementActions.loadRaceMeasurements, (state, {raceId}) => ({
        ...state,
        raceMeasurements: state.loadedRaceId === raceId ? state.raceMeasurements : [],
        loadedRaceId: raceId,
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

    // Delete all / CSV import: the list is reloaded afterwards (see reloadAfterBulkChange$)
    on(RaceMeasurementActions.deleteAllRaceMeasurements, RaceMeasurementActions.importRaceMeasurementsCsv, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(
        RaceMeasurementActions.deleteAllRaceMeasurementsFailure,
        RaceMeasurementActions.importRaceMeasurementsCsvFailure,
        (state, {error}) => ({
            ...state,
            loading: false,
            error,
        }),
    ),
);
