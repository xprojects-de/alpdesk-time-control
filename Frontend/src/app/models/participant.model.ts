import {AgeGroup} from './age-group.model';
import {Race} from './race.model';
import {Team} from './team.model';
import {Category} from './category.model';
import {Person} from './person.model';

/** Mirrors the backend's DisqualificationStatus enum. NONE = normal, rankable result. */
export type DisqualificationStatus = 'NONE' | 'DNS' | 'DNF' | 'DSQ';

export interface Participant {
    id: number;
    race?: Race;
    person: Person | null;
    raceNumber?: number;
    team?: Team;
    category?: Category;
    ageGroup?: AgeGroup;
    durationMs?: number;
    penalty?: number;
    measuredAt?: string;
    comment?: string;
    status?: DisqualificationStatus;
}

export interface ParticipantRequest {
    raceId: number;
    personId: number;
    raceNumber?: number;
    teamId?: number;
    categoryId?: number;
    durationMs?: number;
    penalty?: number;
    measuredAt?: string;
    comment?: string;
    status?: DisqualificationStatus;
}
