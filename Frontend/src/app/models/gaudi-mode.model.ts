export enum GaudiModeType {
    LOS = 'LOS',
    TEAM = 'TEAM',
    TIME_COMBINATION = 'TIME_COMBINATION',
    POINTS_COMBINATION = 'POINTS_COMBINATION',
}

export const GaudiModeTypeLabels: Record<GaudiModeType, string> = {
    [GaudiModeType.LOS]: 'Los-Modus',
    [GaudiModeType.TEAM]: 'Mannschaftswertung',
    [GaudiModeType.TIME_COMBINATION]: 'Zeit-Kombination',
    [GaudiModeType.POINTS_COMBINATION]: 'Punkte-Mischwertung',
};

export interface GaudiModeRaceEntry {
    raceId: number;
    weight?: number;
}

export interface GaudiModeRace {
    raceId: number;
    raceName: string;
    weight: number;
    sortOrder: number;
}

export interface GaudiMode {
    id: number;
    races: GaudiModeRace[];
    type: GaudiModeType;
    name: string;
    teamSize?: number;
    pointsScaleId?: number;
    createdAt: string;
}

export interface GaudiModeRequest {
    races: GaudiModeRaceEntry[];
    type: GaudiModeType;
    name: string;
    teamSize?: number;
    pointsScaleId?: number;
}

export interface GaudiLosPairing {
    id: number;
    participant1Id: number;
    participant1Name: string;
    participant2Id?: number;
    participant2Name?: string;
}

export interface GaudiRankingLeg {
    raceId: number;
    raceName: string;
    rawValue?: number;
    penalty?: number;
    adjustedValue?: number;
    place?: number;
    points?: number;
}

export interface GaudiTeamMember {
    label: string;
    valueMs?: number;
    counted: boolean;
}

export interface GaudiRankingEntry {
    place: number;
    label: string;
    time1Ms?: number;
    time2Ms?: number;
    valueMs?: number;
    referenceMs?: number;
    diffMs?: number;
    totalPoints?: number;
    legs?: GaudiRankingLeg[];
    team?: string;
    members?: GaudiTeamMember[];
    personId?: number;
}
