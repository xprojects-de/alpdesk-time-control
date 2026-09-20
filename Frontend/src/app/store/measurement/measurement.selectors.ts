import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MeasurementState} from "./measurement.reducer";
import * as RaceSelectors from "../race/race.selectors";
import * as ParticipantSelectors from "../participant/participant.selectors";

export const selectMeasurementState = createFeatureSelector<MeasurementState>("measurement");

export const selectAllMeasurements = createSelector(selectMeasurementState, state => state.measurements);

export const selectMeasurementLoading = createSelector(
    selectMeasurementState,
    state => state.loadingCount > 0 || state.measurementsLoading,
);

export const selectMeasurementError = createSelector(selectMeasurementState, state => state.error);

export const selectSelectedMeasurementId = createSelector(selectMeasurementState, state => state.selectedMeasurementId);

export const selectSelectedMeasurement = createSelector(
    selectAllMeasurements,
    selectSelectedMeasurementId,
    (measurements, selectedId) => (selectedId ? measurements.find(m => m.id === selectedId) : null),
);

export const selectMeasurementById = (id: number) =>
    createSelector(selectAllMeasurements, measurements => measurements.find(m => m.id === id));

export const selectMeasurementsByParticipantId = (participantId: number) =>
    createSelector(selectAllMeasurements, measurements => measurements.filter(m => m.participantId === participantId));

export const selectFilteredMeasurements = createSelector(
    selectAllMeasurements,
    ParticipantSelectors.selectAllParticipants,
    RaceSelectors.selectSelectedRaceId,
    (measurements, participants, selectedRaceId) => {
        if (!selectedRaceId) {
            return measurements;
        }

        const participantIdsInRace = participants.filter(p => p.race?.id === selectedRaceId).map(p => p.id);
        return measurements.filter(m => m.participantId && participantIdsInRace.includes(m.participantId));
    },
);

export const selectContinuousModeEnabled = createSelector(selectMeasurementState, state => state.continuousModeEnabled);

export const selectScheduledImportEnabled = createSelector(
    selectMeasurementState,
    state => state.scheduledImportEnabled,
);

export const selectDeviceStatus = createSelector(selectMeasurementState, state => state.deviceStatus);

export const selectDeviceConnected = createSelector(selectMeasurementState, state => state.deviceConnected);

export const selectIsPollingDeviceConnection = createSelector(
    selectMeasurementState,
    state => state.isPollingDeviceConnection,
);

export const selectAutoAssignStatus = createSelector(selectMeasurementState, state => state.autoAssignStatus);

export const selectImportLoading = createSelector(selectMeasurementState, state => state.importLoading);

export const selectImportResult = createSelector(selectMeasurementState, state => state.importResult);
