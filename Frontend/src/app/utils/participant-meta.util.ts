import {Participant} from "../models/participant.model";

/**
 * The secondary, visually smaller line shown next to a participant's name: start number, age
 * group and team, whichever of them are set. Returns "" when none are, so callers can skip the
 * line entirely instead of printing stray separators.
 *
 * `includeRaceNumber: false` is for call sites whose main line already prints the start number
 * (e.g. the autocomplete option "Hans Müller (42)"), where repeating it right next to itself
 * only adds noise.
 */
export function formatParticipantMeta(
    participant: Participant | null | undefined,
    options: {includeRaceNumber?: boolean} = {},
): string {
    if (!participant) {
        return "";
    }

    const parts: string[] = [];
    if (options.includeRaceNumber !== false && participant.raceNumber != null) {
        parts.push(`Nr. ${participant.raceNumber}`);
    }
    if (participant.ageGroup?.name) {
        parts.push(participant.ageGroup.name);
    }
    if (participant.team?.name) {
        parts.push(participant.team.name);
    }
    return parts.join(" · ");
}
