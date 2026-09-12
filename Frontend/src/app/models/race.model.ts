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
}
