import {AgeGroup} from "./age-group.model";
import {Race} from "./race.model";
import {Team} from "./team.model";
import {Category} from "./category.model";
import {Person} from "./person.model";
import {StartGroupTemplate} from "./start-group.model";

/** Mirrors the backend's DisqualificationStatus enum. NONE = normal, rankable result. */
export type DisqualificationStatus = "NONE" | "DNS" | "DNF" | "DSQ";

export interface Participant {
    id: number;
    race?: Race;
    person: Person | null;
    /** The participant's fixed bib/start number - never changed by "Startreihenfolge übernehmen". */
    raceNumber?: number;
    team?: Team;
    category?: Category;
    ageGroup?: AgeGroup;
    durationMs?: number;
    penalty?: number;
    measuredAt?: string;
    comment?: string;
    status?: DisqualificationStatus;
    /**
     * Position in this race's actual start order, when it differs from raceNumber (e.g. derived
     * via "Startreihenfolge übernehmen" from a linked previous race's results - bib 30 can start
     * before bib 5). Undefined/null means this participant starts in raceNumber order.
     */
    startSequence?: number | null;
    /** Start group this participant is assigned to in this race, if any - see StartGroupTemplate. */
    startGroup?: StartGroupTemplate | null;
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
