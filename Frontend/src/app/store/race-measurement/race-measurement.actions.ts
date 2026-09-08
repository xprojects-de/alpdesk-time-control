import {createAction, props} from '@ngrx/store';
import {RaceMeasurement, RaceMeasurementRequest} from '../../models/race-measurement.model';

// Load race measurements for a race
export const loadRaceMeasurements = createAction(
    '[RaceMeasurement] Load Race Measurements',
    props<{ raceId: number }>()
);
export const loadRaceMeasurementsSuccess = createAction(
    '[RaceMeasurement] Load Race Measurements Success',
    props<{ raceMeasurements: RaceMeasurement[] }>()
);
export const loadRaceMeasurementsFailure = createAction(
    '[RaceMeasurement] Load Race Measurements Failure',
    props<{ error: string }>()
);

// Update race measurement (e.g. assign a participant)
export const updateRaceMeasurement = createAction(
    '[RaceMeasurement] Update Race Measurement',
    props<{ id: number; raceMeasurement: RaceMeasurementRequest }>()
);
export const updateRaceMeasurementSuccess = createAction(
    '[RaceMeasurement] Update Race Measurement Success',
    props<{ raceMeasurement: RaceMeasurement }>()
);
export const updateRaceMeasurementFailure = createAction(
    '[RaceMeasurement] Update Race Measurement Failure',
    props<{ error: string }>()
);

// Delete race measurement
export const deleteRaceMeasurement = createAction(
    '[RaceMeasurement] Delete Race Measurement',
    props<{ id: number }>()
);
export const deleteRaceMeasurementSuccess = createAction(
    '[RaceMeasurement] Delete Race Measurement Success',
    props<{ id: number }>()
);
export const deleteRaceMeasurementFailure = createAction(
    '[RaceMeasurement] Delete Race Measurement Failure',
    props<{ error: string }>()
);

// Sync race measurements to participants
export const syncRaceMeasurementsToParticipants = createAction(
    '[RaceMeasurement] Sync Race Measurements To Participants',
    props<{ raceId: number }>()
);
export const syncRaceMeasurementsToParticipantsSuccess = createAction(
    '[RaceMeasurement] Sync Race Measurements To Participants Success',
    props<{ message: string }>()
);
export const syncRaceMeasurementsToParticipantsFailure = createAction(
    '[RaceMeasurement] Sync Race Measurements To Participants Failure',
    props<{ error: string }>()
);
