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
