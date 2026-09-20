import {Participant} from "./participant.model";

export interface ParticipantResultImportRowError {
    lineNumber: number;
    rawLine: string;
    reason: string;
}

export interface ParticipantResultImportResponse {
    updatedCount: number;
    skippedCount: number;
    // The backend omits empty array fields from the JSON response entirely,
    // so these can be missing when there was nothing to report.
    updated?: Participant[];
    errors?: ParticipantResultImportRowError[];
}

// How the mapped "time" column is encoded - different timing providers export differently, so this
// is picked explicitly in the dialog rather than guessed. Mirrors backend ResultTimeFormat.
export type ResultTimeFormat = "MILLISECONDS" | "SECONDS" | "CLOCK";

export const RESULT_TIME_FORMAT_OPTIONS: {value: ResultTimeFormat; label: string}[] = [
    {value: "CLOCK", label: "Uhrzeit-Format ([hh:]mm:ss[.,xx], z.B. 1:23,68)"},
    {value: "SECONDS", label: "Sekunden (z.B. 83.68)"},
    {value: "MILLISECONDS", label: "Millisekunden (z.B. 83680)"},
];

export interface ParticipantResultImportTargetField {
    key: string;
    label: string;
    required: boolean;
}

// This import never creates a participant - every row is matched onto an *existing* one via
// raceNumber (Startnummer). Only these result fields are ever written; identity data (name, team,
// category, ...) is left untouched. Labels are deliberately generic ("Zeit/Wert" rather than
// "Zeit" or "Punkte") since this dialog never knows the race's resultUnit - the backend decides
// whether a TIME or POINTS race is being imported into. There's no "measuredAt" field to map;
// the backend stamps it with the import's own timestamp instead. See Backend
// ParticipantResultImportParsers / ParticipantController import-results-preview and
// import-results-mapped endpoints.
export const PARTICIPANT_RESULT_IMPORT_TARGET_FIELDS: ParticipantResultImportTargetField[] = [
    {key: "raceNumber", label: "Startnummer", required: true},
    {key: "time", label: "Zeit/Wert", required: true},
    {key: "penalty", label: "Strafe Zeit/Wert", required: false},
    {key: "status", label: "Status (DSQ/DNF/DNS)", required: false},
    {key: "comment", label: "Kommentar", required: false},
];

export interface ParticipantResultImportPreviewResponse {
    availableFields: string[];
    suggestedMapping: Record<string, string>;
    sampleRows: Record<string, string>[];
}
