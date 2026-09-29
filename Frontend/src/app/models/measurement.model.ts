export interface Measurement {
    id: number;
    /** The timing device's own counter; negative for a manually entered or CSV-imported row. */
    deviceMeasurementId: number | null;
    participantId: number | null;
    durationMs: number;
    measuredAt: string;
    /** Set by the operator: the timing device and auto-assign no longer change this row. */
    locked: boolean;
    /** The backend omits a missing comment from the JSON entirely. */
    comment?: string | null;
}

export interface MeasurementRequest {
    participantId?: number | null;
    durationMs: number;
    measuredAt: string;
    locked: boolean;
    comment: string | null;
}

/** Mirrors MeasurementService.COMMENT_MAX_LENGTH in the backend. */
export const MEASUREMENT_COMMENT_MAX_LENGTH = 500;

export interface AutoAssignStatus {
    raceId: number | null;
    active: boolean;
    nextRaceNumber: number | null;
}

export interface AutoAssignEnableRequest {
    raceId: number;
    startRaceNumber?: number | null;
}
