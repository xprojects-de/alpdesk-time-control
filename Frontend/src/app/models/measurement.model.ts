export interface Measurement {
    id: number;
    participantId: number | null;
    durationMs: number;
    measuredAt: string;
}

export interface MeasurementRequest {
    participantId?: number | null;
    durationMs: number;
    measuredAt: string;
}

export interface AutoAssignStatus {
    raceId: number | null;
    active: boolean;
    nextRaceNumber: number | null;
}

export interface AutoAssignEnableRequest {
    raceId: number;
    startRaceNumber?: number | null;
}

