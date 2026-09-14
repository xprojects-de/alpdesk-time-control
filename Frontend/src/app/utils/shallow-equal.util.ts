/**
 * Compares two arrays of flat, plain-field objects (only top-level primitive/string/null
 * properties, no nested objects/arrays) for value equality.
 *
 * Used in `distinctUntilChanged` on data that is re-derived on every polling tick (e.g. via
 * `combineLatest` + `map`), where a `JSON.stringify` comparison would otherwise re-serialize the
 * full array on every emission just to decide whether anything actually changed - wasted CPU on
 * the exact hot path this check exists to protect.
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
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
