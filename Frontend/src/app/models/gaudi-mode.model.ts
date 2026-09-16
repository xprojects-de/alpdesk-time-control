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
    /** POINTS_COMBINATION only: each independently keeps a person with at least one valid combined-race result in the ranking despite a leg of that specific status (0 points, status marked in the PDF sub-table) instead of excluding them as "nicht gewertet". A person with no valid result anywhere is still excluded either way. */
    keepDnsInRanking: boolean;
    keepDnfInRanking: boolean;
    keepDsqInRanking: boolean;
    createdAt: string;
    /** Whether a cover page PDF is set for this Gaudi-Modus instance - the PDF content itself is never included here. */
    hasCoverPage: boolean;
}

export interface GaudiModeRequest {
    races: GaudiModeRaceEntry[];
    type: GaudiModeType;
    name: string;
    teamSize?: number;
    pointsScaleId?: number;
    /** POINTS_COMBINATION only: each independently keeps a person with at least one valid combined-race result in the ranking despite a leg of that specific status (0 points, status marked in the PDF sub-table) instead of excluding them as "nicht gewertet". A person with no valid result anywhere is still excluded either way. */
    keepDnsInRanking?: boolean;
    keepDnfInRanking?: boolean;
    keepDsqInRanking?: boolean;
    /** Base64-encoded PDF content (prepended to every PDF generated for this instance). Omit to leave the current cover page (if any) unchanged. */
    coverPagePdf?: string;
    /** Removes the current cover page (if any); takes precedence over coverPagePdf. */
    removeCoverPage?: boolean;
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
    /** The participant's explicit DSQ/DNF/DNS status in this race, if any. */
    status?: string;
}

export interface GaudiTeamMember {
    label: string;
    valueMs?: number;
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
