import {Participant} from "../models/participant.model";
import {ResultUnit} from "../models/race.model";

/**
 * A start group whose Zeitversatz is at least as large as a time it is supposed to be netted from -
 * i.e. a participant crossed the line before their own group's head start had elapsed, which cannot
 * happen against a shared race clock. Either the offset or the measurement is wrong.
 */
export interface ImplausibleStartGroupOffset {
    label: string;
    offsetSeconds: number;
    /** Fastest raw (un-netted) time in this group - the one the offset is hardest to reconcile with. */
    fastestMs: number;
    /** How many of the group's ranked participants lose their entire result to the offset. */
    affected: number;
}

/** Ranked at all: has a measured result and is not DNS/DNF/DSQ - matches RankingService#adjustedValue. */
function isRanked(participant: Participant): boolean {
    return participant.durationMs != null && (participant.status == null || participant.status === "NONE");
}

/**
 * Finds the start groups of one race whose Zeitversatz swallows at least one participant's whole
 * result.
 *
 * The backend floors a netted result at 0 rather than letting it go negative (RankingService
 * #netDurationMs), which keeps the printed time from turning into garbage - but it also turns a
 * mis-set offset into a plausible-looking ranking in which everyone affected shares place 1 at
 * 0:00.00. Nothing about that page says anything is wrong, so this is what the warning above the
 * list is derived from.
 *
 * Only TIME races have a notion of a start-time offset at all; for a POINTS race the backend
 * ignores it, so it is not reported here either. A group with no offset cannot swallow anything
 * and is skipped, so a 0 ms measurement is not blamed on an offset that is not there.
 *
 * @param participants one race's participants, as the list already holds them
 * @return one entry per affected group, worst (most participants affected) first
 */
export function findImplausibleStartGroupOffsets(participants: Participant[]): ImplausibleStartGroupOffset[] {
    const byGroupId = new Map<number, {label: string; offsetSeconds: number; fastestMs: number; affected: number}>();

    for (const participant of participants) {
        const group = participant.startGroup;
        const offsetSeconds = group?.offsetSeconds;
        if (
            !group ||
            offsetSeconds == null ||
            offsetSeconds <= 0 ||
            participant.race?.resultUnit !== ResultUnit.TIME ||
            !isRanked(participant)
        ) {
            continue;
        }
        const durationMs = participant.durationMs as number;
        const entry = byGroupId.get(group.id) ?? {
            label: group.label,
            offsetSeconds,
            fastestMs: durationMs,
            affected: 0,
        };
        entry.fastestMs = Math.min(entry.fastestMs, durationMs);
        if (offsetSeconds * 1000 >= durationMs) {
            entry.affected++;
        }
        byGroupId.set(group.id, entry);
    }

    return [...byGroupId.values()]
        .filter(entry => entry.affected > 0)
        .sort((a, b) => b.affected - a.affected || a.label.localeCompare(b.label));
}

/**
 * A Zeitversatz the way the start-group screens print it ("2 min 0 s" / "5 s"), shared so the
 * warning above a result list and the template table cannot drift apart.
 */
export function formatStartGroupOffset(offsetSeconds: number | null | undefined): string {
    if (offsetSeconds == null) {
        return "-";
    }
    const minutes = Math.floor(offsetSeconds / 60);
    const seconds = offsetSeconds % 60;
    return minutes > 0 ? `${minutes} min ${seconds} s` : `${seconds} s`;
}
