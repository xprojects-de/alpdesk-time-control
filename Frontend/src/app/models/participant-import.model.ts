import {Participant} from './participant.model';

export interface ParticipantImportRowError {
    lineNumber: number;
    rawLine: string;
    reason: string;
}

export interface ParticipantImportResponse {
    importedCount: number;
    skippedCount: number;
    // The backend omits empty array fields from the JSON response entirely,
    // so these can be missing when there was nothing to report.
    imported?: Participant[];
    errors?: ParticipantImportRowError[];
}

// Flexible import (CSV with any delimiter, or DSV-Wettkampfdatei XML) with a user-defined
// column/field mapping - see Backend ParticipantImportParsers / ParticipantController import-preview
// and import-mapped endpoints.
export type ParticipantImportFileFormat = 'CSV' | 'DSV_XML';

export interface ParticipantImportTargetField {
    key: string;
    label: string;
    required: boolean;
}

// Our participant fields the user can map a source column/element onto. Order here is the order
// shown in the mapping UI.
// "ageGroup" (e.g. "U14m") isn't a field stored on the participant - it just ensures a matching
// AgeGroup exists (created or widened as needed); actual assignment happens automatically from
// birth date + gender. "category" is a separate, genuinely free-text field.
// durationMs/penalty/measuredAt are the participant's *result* - only relevant for a full race
// export/import (see ParticipantController#exportCsv), not a plain start-list import.
export const PARTICIPANT_IMPORT_TARGET_FIELDS: ParticipantImportTargetField[] = [
    {key: 'lastName', label: 'Nachname', required: true},
    {key: 'firstName', label: 'Vorname', required: true},
    {key: 'birthDate', label: 'Geburtsdatum / Jahrgang', required: true},
    {key: 'gender', label: 'Geschlecht', required: true},
    {key: 'ageGroup', label: 'Altersgruppe (z.B. U14m)', required: false},
    {key: 'team', label: 'Verein / Team', required: false},
    {key: 'category', label: 'Kategorie', required: false},
    {key: 'externalId', label: 'Externe ID (z.B. DSV-Code)', required: false},
    {key: 'raceNumber', label: 'Startnummer', required: false},
    {key: 'durationMs', label: 'Zeit (ms)', required: false},
    {key: 'penalty', label: 'Strafe (ms)', required: false},
    {key: 'measuredAt', label: 'Gemessen am', required: false},
];

export interface ParticipantImportPreviewResponse {
    availableFields: string[];
    suggestedMapping: Record<string, string>;
    sampleRows: Record<string, string>[];
}
