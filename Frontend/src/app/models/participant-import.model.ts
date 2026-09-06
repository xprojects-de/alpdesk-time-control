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
