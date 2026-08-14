import { Gender } from './gender.model';
import { AgeGroup } from './age-group.model';

export interface Participant {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: Gender;
    raceNumber: number;
    association?: string;
    ageGroup?: AgeGroup;
}

export interface ParticipantRequest {
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: Gender;
    raceNumber: number;
    association?: string;
}

