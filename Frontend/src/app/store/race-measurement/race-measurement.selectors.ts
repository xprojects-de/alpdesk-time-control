import {createFeatureSelector, createSelector} from "@ngrx/store";
import {RaceMeasurementState} from "./race-measurement.reducer";

export const selectRaceMeasurementState = createFeatureSelector<RaceMeasurementState>("raceMeasurement");

export const selectAllRaceMeasurements = createSelector(selectRaceMeasurementState, state => state.raceMeasurements);

export const selectRaceMeasurementLoading = createSelector(selectRaceMeasurementState, state => state.loading);

export const selectRaceMeasurementError = createSelector(selectRaceMeasurementState, state => state.error);
