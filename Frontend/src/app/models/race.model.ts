export enum ResultUnit {
    TIME = 'TIME',
    POINTS = 'POINTS',
}

export const ResultUnitLabels: Record<ResultUnit, string> = {
    [ResultUnit.TIME]: 'Zeit',
    [ResultUnit.POINTS]: 'Punkte/Sonstiges',
};

export enum SortDirection {
    ASC = 'ASC',
    DESC = 'DESC',
}

export const SortDirectionLabels: Record<SortDirection, string> = {
    [SortDirection.ASC]: 'Niedriger ist besser',
    [SortDirection.DESC]: 'Höher ist besser',
};

/** How a race's start order is derived from its linked previousRaceId race - only one mode exists today. */
export enum StartOrderMode {
    REVERSE_TOP_N = 'REVERSE_TOP_N',
}

export interface Race {
    id: number;
    name: string;
    date: string;
    organisation?: string;
    referee?: string;
    raceDirector?: string;
    timeControl?: string;
    routeName?: string;
    elevationDifference?: string;
    routeLength?: string;
    courseSetter?: string;
    weather?: string;
    resultUnit: ResultUnit;
    resultUnitLabel?: string;
    sortDirection: SortDirection;
    /** Whether a cover page PDF is set for this race - the PDF content itself is never included here. */
    hasCoverPage: boolean;
    /** Id of an earlier race (e.g. run 1 of a two-run slalom) this race derives its start order from, if linked. */
    previousRaceId?: number;
    /** How the start order is derived from previousRaceId, if linked. */
    startOrderMode?: StartOrderMode;
    /** Number of top-placed previousRaceId finishers (per category) started in reverse order, if startOrderMode is REVERSE_TOP_N. */
    startOrderReverseTopCount?: number;
}

export interface RaceRequest {
    name: string;
    date: string;
    organisation?: string;
    referee?: string;
    raceDirector?: string;
    timeControl?: string;
    routeName?: string;
    elevationDifference?: string;
    routeLength?: string;
    courseSetter?: string;
    weather?: string;
    resultUnit?: ResultUnit;
    resultUnitLabel?: string;
    sortDirection?: SortDirection;
    /** Base64-encoded PDF content (prepended to every ranking/results PDF, not the start list). Omit to leave the current cover page (if any) unchanged. */
    coverPagePdf?: string;
    /** Removes the current cover page (if any); takes precedence over coverPagePdf. */
    removeCoverPage?: boolean;
    /** Id of an earlier race this race derives its start order from. Omit/null means no link. */
    previousRaceId?: number | null;
    /** How the start order is derived from previousRaceId; only relevant when previousRaceId is set. */
    startOrderMode?: StartOrderMode;
    /** Number of top-placed previousRaceId finishers (per category) to start in reverse order when startOrderMode is REVERSE_TOP_N. */
    startOrderReverseTopCount?: number;
}
