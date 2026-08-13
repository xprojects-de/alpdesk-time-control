import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MeasurementState } from './measurement.reducer';

export const selectMeasurementState = createFeatureSelector<MeasurementState>('measurement');

export const selectAllMeasurements = createSelector(
  selectMeasurementState,
  state => state.measurements
);

export const selectMeasurementLoading = createSelector(
  selectMeasurementState,
  state => state.loading
);

export const selectMeasurementError = createSelector(
  selectMeasurementState,
  state => state.error
);

export const selectSelectedMeasurementId = createSelector(
  selectMeasurementState,
  state => state.selectedMeasurementId
);

export const selectSelectedMeasurement = createSelector(
  selectAllMeasurements,
  selectSelectedMeasurementId,
  (measurements, selectedId) =>
    selectedId ? measurements.find(m => m.id === selectedId) : null
);

export const selectMeasurementById = (id: number) => createSelector(
  selectAllMeasurements,
  measurements => measurements.find(m => m.id === id)
);

export const selectMeasurementsByParticipantId = (participantId: number) => createSelector(
  selectAllMeasurements,
  measurements => measurements.filter(m => m.participantId === participantId)
);

