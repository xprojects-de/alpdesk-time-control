/**
 * Compares two arrays of flat, plain-field objects for value equality.
 *
 * Used in `distinctUntilChanged` on data that is re-derived on every polling tick (e.g. via
 * `combineLatest` + `map`), where a `JSON.stringify` comparison would otherwise re-serialize the
 * full array on every emission just to decide whether anything actually changed - wasted CPU on
 * the exact hot path this check exists to protect.
 *
 * WARNING - top-level fields only, compared with `Object.is`: a nested object/array field is
 * compared by reference, so two objects that differ only inside a nested field will be reported
 * equal (a silent miss, not a crash) if that field happens to keep the same reference, and will
 * always compare unequal if it doesn't (defeating the optimization but not causing a bug). Only
 * use this on object shapes whose own properties are all primitives/strings/null/undefined - e.g.
 * a spread of a flat model interface plus a couple of derived primitive fields, as in
 * `MeasurementWithParticipant`/`RaceMeasurementWithParticipant`. Do not reuse it for an entity
 * with nested objects (e.g. `Participant`, which nests `person`/`race`/`team`) without checking
 * this precondition still holds.
 */
export function shallowArrayEqual<T extends object>(prev: readonly T[], curr: readonly T[]): boolean {
    if (prev === curr) {
        return true;
    }
    if (prev.length !== curr.length) {
        return false;
    }
    for (let i = 0; i < prev.length; i++) {
        if (!shallowObjectEqual(prev[i], curr[i])) {
            return false;
        }
    }
    return true;
}

function shallowObjectEqual<T extends object>(a: T, b: T): boolean {
    if (a === b) {
        return true;
    }
    const keysA = Object.keys(a) as (keyof T)[];
    const keysB = Object.keys(b) as (keyof T)[];
    if (keysA.length !== keysB.length) {
        return false;
    }
    for (const key of keysA) {
        // hasOwnProperty guards against same key *count* but different key *names* (e.g. a
        // conditional spread) comparing as equal just because both sides have N keys. Object.is
        // (rather than !==) makes NaN fields (e.g. a malformed durationMs) compare equal to
        // themselves instead of permanently defeating the optimization on every tick.
        if (!Object.prototype.hasOwnProperty.call(b, key) || !Object.is(a[key], b[key])) {
            return false;
        }
    }
    return true;
}
