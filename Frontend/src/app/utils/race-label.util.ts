import {Race} from "../models/race.model";

/** An ISO date the way German-speaking race officials read it; the input unchanged if unparseable. */
export function formatRaceDate(dateString: string | null | undefined): string {
    const parts = dateString?.split("-") ?? [];
    return parts.length === 3 ? `${parts[2]}.${parts[1]}.${parts[0]}` : (dateString ?? "");
}

/**
 * How a race is labelled wherever it has to be told apart from another one. The same race names
 * come back every season ("Station - Schnelligkeit"), so the name on its own is ambiguous as soon
 * as a club has more than one season in its database - the date is what disambiguates them.
 */
export function raceLabel(race: Race): string {
    const date = formatRaceDate(race.date);
    return date ? `${race.name} · ${date}` : race.name;
}
