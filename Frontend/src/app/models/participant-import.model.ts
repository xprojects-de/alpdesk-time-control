import {Participant} from './participant.model';

export interface ParticipantImportRowError {
    lineNumber: number;
    rawLine: string;
    reason: string;
}

export interface ParticipantImportResponse {
    importedCount: number;
    skippedCount: number;
    imported: Participant[];
    errors: ParticipantImportRowError[];
}
