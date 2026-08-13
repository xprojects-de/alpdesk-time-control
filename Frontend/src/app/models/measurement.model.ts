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

