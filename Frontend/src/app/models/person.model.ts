import {Gender} from "./gender.model";

export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: Gender;
    externalId?: string;
}

export interface PersonRequest {
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: Gender;
    externalId?: string;
}
