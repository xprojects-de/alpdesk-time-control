import {describe, expect, it} from "vitest";
import {AgeGroup, STANDARD_VARIANT} from "../../models/age-group.model";
import {Gender} from "../../models/gender.model";
import * as AgeGroupActions from "./age-group.actions";
import {AgeGroupState, ageGroupReducer, initialState} from "./age-group.reducer";

const KIDS = "Kinder";

const gruppe = (id: number, seasonYear: number, variant: string): AgeGroup => ({
    id,
    name: `Gruppe ${id}`,
    seasonYear,
    variant,
    birthYearFrom: 2016,
    birthYearTo: 2016,
    gender: Gender.BOTH,
});

const loaded = (ageGroups: AgeGroup[], season: number, variant: string) =>
    AgeGroupActions.loadAgeGroupsSuccess({ageGroups, season, variant});

describe("ageGroupReducer - stale age-group loads", () => {
    it("drops the answer for a variant that was switched away from before it arrived", () => {
        let state: AgeGroupState = {...initialState, selectedSeason: 2026};

        // Standard -> Kinder -> Standard: the Kinder request answers last.
        state = ageGroupReducer(state, AgeGroupActions.selectVariant({variant: KIDS}));
        state = ageGroupReducer(state, AgeGroupActions.selectVariant({variant: STANDARD_VARIANT}));
        state = ageGroupReducer(state, loaded([gruppe(1, 2026, STANDARD_VARIANT)], 2026, STANDARD_VARIANT));
        state = ageGroupReducer(state, loaded([gruppe(2, 2026, KIDS)], 2026, KIDS));

        expect(state.ageGroups.map(a => a.id)).toEqual([1]);
    });

    it("drops the answer for a season that was switched away from before it arrived", () => {
        let state: AgeGroupState = {...initialState, selectedSeason: 2026};

        state = ageGroupReducer(state, AgeGroupActions.selectSeason({season: 2027}));
        state = ageGroupReducer(state, loaded([gruppe(3, 2027, STANDARD_VARIANT)], 2027, STANDARD_VARIANT));
        state = ageGroupReducer(state, loaded([gruppe(1, 2026, STANDARD_VARIANT)], 2026, STANDARD_VARIANT));

        expect(state.ageGroups.map(a => a.id)).toEqual([3]);
    });

    it("takes over the answer for the season and variant on screen", () => {
        let state: AgeGroupState = {...initialState, selectedSeason: 2026};

        state = ageGroupReducer(state, AgeGroupActions.selectVariant({variant: KIDS}));
        state = ageGroupReducer(state, AgeGroupActions.loadAgeGroups({season: 2026, variant: KIDS}));
        state = ageGroupReducer(state, loaded([gruppe(2, 2026, KIDS)], 2026, KIDS));

        expect(state.ageGroups.map(a => a.id)).toEqual([2]);
        expect(state.loading).toBe(false);
    });

    it("takes over an unscoped load of every season as before", () => {
        const state = ageGroupReducer(
            {...initialState, selectedSeason: 2026},
            AgeGroupActions.loadAgeGroupsSuccess({ageGroups: [gruppe(1, 2025, STANDARD_VARIANT)]}),
        );

        expect(state.ageGroups.map(a => a.id)).toEqual([1]);
    });
});
