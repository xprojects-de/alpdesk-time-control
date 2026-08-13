import { Gender } from './gender.model';

export interface Participant {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: Gender;
    raceNumber: number;
    association?: string;
}

export interface ParticipantRequest {
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: Gender;
    raceNumber: number;
    association?: string;
}

