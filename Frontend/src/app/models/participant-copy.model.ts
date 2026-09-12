export interface ParticipantCopyRequest {
    sourceRaceId: number;
    targetRaceIds: number[];
    carryStartNumber: boolean;
}

export interface ParticipantCopyResponse {
    copiedCount: number;
    skippedCount: number;
}
