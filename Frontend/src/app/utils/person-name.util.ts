import {Person} from "../models/person.model";

export function formatPersonName(person: Person | null | undefined, fallback: string = ""): string {
    return person ? `${person.lastName} ${person.firstName}` : fallback;
}
