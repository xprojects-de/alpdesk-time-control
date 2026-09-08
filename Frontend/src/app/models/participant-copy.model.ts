export interface ParticipantCopyRequest {
    sourceRaceId: number;
    targetRaceIds: number[];
}

export interface ParticipantCopyResponse {
    copiedCount: number;
    skippedCount: number;
}
