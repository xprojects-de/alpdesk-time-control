import {createAction, props} from "@ngrx/store";
import {
    RaceMeasurement,
    RaceMeasurementDeleteResponse,
    RaceMeasurementImportResponse,
    RaceMeasurementRequest,
    SyncMeasurementsResponse,
} from "../../models/race-measurement.model";

// Load race measurements for a race
export const loadRaceMeasurements = createAction("[RaceMeasurement] Load Race Measurements", props<{raceId: number}>());
export const loadRaceMeasurementsSuccess = createAction(
    "[RaceMeasurement] Load Race Measurements Success",
    props<{raceMeasurements: RaceMeasurement[]}>(),
);
export const loadRaceMeasurementsFailure = createAction(
    "[RaceMeasurement] Load Race Measurements Failure",
    props<{error: string}>(),
);

// Update race measurement (e.g. assign a participant)
export const updateRaceMeasurement = createAction(
    "[RaceMeasurement] Update Race Measurement",
    props<{id: number; raceMeasurement: RaceMeasurementRequest}>(),
);
export const updateRaceMeasurementSuccess = createAction(
    "[RaceMeasurement] Update Race Measurement Success",
    props<{raceMeasurement: RaceMeasurement}>(),
);
export const updateRaceMeasurementFailure = createAction(
    "[RaceMeasurement] Update Race Measurement Failure",
    props<{error: string}>(),
);

// Delete race measurement
export const deleteRaceMeasurement = createAction("[RaceMeasurement] Delete Race Measurement", props<{id: number}>());
export const deleteRaceMeasurementSuccess = createAction(
    "[RaceMeasurement] Delete Race Measurement Success",
    props<{id: number}>(),
);
export const deleteRaceMeasurementFailure = createAction(
    "[RaceMeasurement] Delete Race Measurement Failure",
    props<{error: string}>(),
);

// Sync race measurements to participants
export const syncRaceMeasurementsToParticipants = createAction(
    "[RaceMeasurement] Sync Race Measurements To Participants",
    props<{raceId: number}>(),
);
export const syncRaceMeasurementsToParticipantsSuccess = createAction(
    "[RaceMeasurement] Sync Race Measurements To Participants Success",
    props<{response: SyncMeasurementsResponse}>(),
);
export const syncRaceMeasurementsToParticipantsFailure = createAction(
    "[RaceMeasurement] Sync Race Measurements To Participants Failure",
    props<{error: string}>(),
);

// Delete all archived measurements of a race
export const deleteAllRaceMeasurements = createAction(
    "[RaceMeasurement] Delete All Race Measurements",
    props<{raceId: number}>(),
);
export const deleteAllRaceMeasurementsSuccess = createAction(
    "[RaceMeasurement] Delete All Race Measurements Success",
    props<{raceId: number; response: RaceMeasurementDeleteResponse}>(),
);
export const deleteAllRaceMeasurementsFailure = createAction(
    "[RaceMeasurement] Delete All Race Measurements Failure",
    props<{error: string}>(),
);

// Export a race's archived measurements as CSV (backup)
export const exportRaceMeasurementsCsv = createAction(
    "[RaceMeasurement] Export Race Measurements CSV",
    props<{raceId: number}>(),
);
export const exportRaceMeasurementsCsvSuccess = createAction(
    "[RaceMeasurement] Export Race Measurements CSV Success",
    props<{blob: Blob; filename: string}>(),
);
export const exportRaceMeasurementsCsvFailure = createAction(
    "[RaceMeasurement] Export Race Measurements CSV Failure",
    props<{error: string}>(),
);

// Replace a race's archived measurements with a CSV, read through a column mapping
export const importRaceMeasurementsCsv = createAction(
    "[RaceMeasurement] Import Race Measurements CSV",
    props<{raceId: number; file: File; delimiter?: string; mapping: Record<string, string>}>(),
);
export const importRaceMeasurementsCsvSuccess = createAction(
    "[RaceMeasurement] Import Race Measurements CSV Success",
    props<{raceId: number; response: RaceMeasurementImportResponse}>(),
);
export const importRaceMeasurementsCsvFailure = createAction(
    "[RaceMeasurement] Import Race Measurements CSV Failure",
    props<{error: string}>(),
);
