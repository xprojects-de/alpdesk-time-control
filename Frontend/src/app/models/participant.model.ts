export interface Participant {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    raceNumber: number;
    association?: string;
}

export interface ParticipantRequest {
    firstName: string;
    lastName: string;
    birthDate: string;
    raceNumber: number;
    association?: string;
}

