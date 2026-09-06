import {Gender} from './gender.model';
import {AgeGroup} from './age-group.model';
import {Race} from './race.model';
import {Team} from './team.model';
import {Category} from './category.model';

export interface Participant {
    id: number;
    race?: Race;
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: Gender;
    raceNumber: number;
    team?: Team;
    category?: Category;
    ageGroup?: AgeGroup;
    durationMs?: number;
    measuredAt?: string;
}

export interface ParticipantRequest {
    raceId: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: Gender;
    raceNumber: number;
    teamId?: number;
    categoryId?: number;
}

