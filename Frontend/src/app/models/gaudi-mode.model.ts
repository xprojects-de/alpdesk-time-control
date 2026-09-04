export enum GaudiModeType {
    LOS = 'LOS',
    TEAM = 'TEAM',
}

export const GaudiModeTypeLabels: Record<GaudiModeType, string> = {
    [GaudiModeType.LOS]: 'Los-Modus',
    [GaudiModeType.TEAM]: 'Mannschaftswertung',
};

export interface GaudiMode {
    id: number;
    raceId: number;
    type: GaudiModeType;
    name: string;
    teamSize?: number;
    createdAt: string;
}

export interface GaudiModeRequest {
    raceId: number;
    type: GaudiModeType;
    name: string;
    teamSize?: number;
}

export interface GaudiLosPairing {
    id: number;
    participant1Id: number;
    participant1Name: string;
    participant2Id?: number;
    participant2Name?: string;
}

export interface GaudiRankingEntry {
    place: number;
    label: string;
    time1Ms?: number;
    time2Ms?: number;
    valueMs?: number;
    referenceMs?: number;
    diffMs?: number;
}
