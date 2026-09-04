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
}
