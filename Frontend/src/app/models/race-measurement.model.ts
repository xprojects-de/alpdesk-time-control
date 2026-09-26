import {MeasurementImportRowError, MeasurementImportTargetField} from "./measurement-import.model";

export interface RaceMeasurement {
    id: number;
    raceId: number;
    deviceMeasurementId: number;
    participantId: number | null;
    durationMs: number;
    measuredAt: string;
}

export interface RaceMeasurementRequest {
    participantId?: number | null;
    durationMs: number;
    measuredAt: string;
}

export interface SyncMeasurementsResponse {
    syncedCount: number;
    skippedCount: number;
    totalCount: number;
    message: string;
}

export interface RaceMeasurementDeleteResponse {
    deletedCount: number;
}

export interface RaceMeasurementImportResponse {
    importedCount: number;
    withoutParticipantCount: number;
    /** Omitted by the backend's serializer when empty. */
    warnings?: MeasurementImportRowError[];
}

// Our fields a column of an archived-measurements CSV can be mapped onto - matches the backend's
// RaceMeasurementCsvService.TARGET_FIELDS and therefore the header of our own export, which maps
// itself. The race number, not an internal id, assigns a row to its participant.
export const RACE_MEASUREMENT_IMPORT_TARGET_FIELDS: MeasurementImportTargetField[] = [
    {key: "deviceMeasurementId", label: "Geräte-Nr.", required: false},
    {key: "raceNumber", label: "Startnummer", required: false},
    {key: "durationMs", label: "Dauer (ms)", required: true},
    {key: "measuredAt", label: "Gemessen am", required: false},
];
