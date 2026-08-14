export interface AgeGroup {
    id: number;
    name: string;
    birthYearFrom: number;
    birthYearTo: number;
}

export interface AgeGroupRequest {
    name: string;
    birthYearFrom: number;
    birthYearTo: number;
}

