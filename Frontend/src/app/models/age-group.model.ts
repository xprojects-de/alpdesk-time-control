import { Gender } from './gender.model';

export interface AgeGroup {
    id: number;
    name: string;
    birthYearFrom: number;
    birthYearTo: number;
    gender: Gender;
}

export interface AgeGroupRequest {
    name: string;
    birthYearFrom: number;
    birthYearTo: number;
    gender: Gender;
}

