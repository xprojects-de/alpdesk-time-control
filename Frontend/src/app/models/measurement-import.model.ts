import {Measurement} from "./measurement.model";

export interface MeasurementImportRowError {
    lineNumber: number;
    rawLine: string;
    reason: string;
}

export interface MeasurementImportResponse {
    importedCount: number;
    skippedCount: number;
    // The backend omits empty array fields from the JSON response entirely,
    // so these can be missing when there was nothing to report.
    imported?: Measurement[];
    errors?: MeasurementImportRowError[];
}

export interface MeasurementImportTargetField {
    key: string;
    label: string;
    required: boolean;
}

// Our measurement fields the user can map a source CSV column onto - matches the backend's
// MeasurementImportParsers.TARGET_FIELDS (and therefore the header row of our own CSV export).
// Geräte-Nr. is included so a CSV backup restores the device's own numbering instead of silently
// turning every restored row into a "-" one.
export const MEASUREMENT_IMPORT_TARGET_FIELDS: MeasurementImportTargetField[] = [
    {key: "deviceMeasurementId", label: "Geräte-Nr.", required: false},
    {key: "participantId", label: "Teilnehmer-ID", required: false},
    {key: "durationMs", label: "Dauer (ms)", required: true},
    {key: "measuredAt", label: "Gemessen am", required: false},
];

export interface MeasurementImportPreviewResponse {
    availableFields: string[];
    suggestedMapping: Record<string, string>;
    sampleRows: Record<string, string>[];
}
