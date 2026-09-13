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
export const PARTICIPANT_IMPORT_TARGET_FIELDS: ParticipantImportTargetField[] = [
    {key: 'lastName', label: 'Nachname', required: true},
    {key: 'firstName', label: 'Vorname', required: true},
    {key: 'birthDate', label: 'Geburtsdatum / Jahrgang', required: true},
    {key: 'gender', label: 'Geschlecht', required: true},
    {key: 'team', label: 'Verein / Team', required: false},
    {key: 'category', label: 'Kategorie / Klasse', required: false},
    {key: 'externalId', label: 'Externe ID (z.B. DSV-Code)', required: false},
    {key: 'raceNumber', label: 'Startnummer', required: false},
];

export interface ParticipantImportPreviewResponse {
    availableFields: string[];
    suggestedMapping: Record<string, string>;
    sampleRows: Record<string, string>[];
}
