import {describe, expect, it} from "vitest";
import {Measurement} from "../../models/measurement.model";
import * as MeasurementActions from "./measurement.actions";
import {initialState, measurementReducer} from "./measurement.reducer";

const messung = (id: number): Measurement => ({
    id,
    participantId: null,
    durationMs: 60000 + id,
    measuredAt: "2026-09-20T09:00:00",
});

const poll = (measurements: Measurement[], writeSeq: number) =>
    MeasurementActions.loadMeasurementsSuccess({measurements, writeSeq});

describe("measurementReducer - stale poll vs. write", () => {
    it("drops a poll response that is still travelling while a create is in flight", () => {
        const vorher = [messung(1)];
        let state = {...initialState, measurements: vorher};

        // Poll request goes out (sees writeSeq 0), operator enters a missing finish time.
        state = measurementReducer(
            state,
            MeasurementActions.createMeasurement({
                measurement: {durationMs: 60002, measuredAt: "2026-09-20T09:00:02"},
            }),
        );
        // The poll answers with the pre-create list while the POST is still open.
        state = measurementReducer(state, poll(vorher, 0));
        state = measurementReducer(state, MeasurementActions.createMeasurementSuccess({measurement: messung(2)}));

        expect(state.measurements.map(m => m.id)).toEqual([1, 2]);
    });

    it("drops a poll response that arrives AFTER the write completed", () => {
        // This is the case a simple in-flight check would miss: the POST is already done, but the
        // GET left before it and therefore answers without the new row.
        const vorher = [messung(1)];
        let state = {...initialState, measurements: vorher};

        state = measurementReducer(
            state,
            MeasurementActions.createMeasurement({
                measurement: {durationMs: 60002, measuredAt: "2026-09-20T09:00:02"},
            }),
        );
        state = measurementReducer(state, MeasurementActions.createMeasurementSuccess({measurement: messung(2)}));
        expect(state.loadingCount).toBe(0);

        state = measurementReducer(state, poll(vorher, 0));

        expect(state.measurements.map(m => m.id)).toEqual([1, 2]);
    });

    it("keeps a deleted measurement deleted", () => {
        let state = {...initialState, measurements: [messung(1), messung(2)]};

        state = measurementReducer(state, MeasurementActions.deleteMeasurement({id: 2}));
        state = measurementReducer(state, MeasurementActions.deleteMeasurementSuccess({id: 2}));
        state = measurementReducer(state, poll([messung(1), messung(2)], 0));

        expect(state.measurements.map(m => m.id)).toEqual([1]);
    });

    it("applies a poll response that started after the last write", () => {
        let state = {...initialState, measurements: [messung(1)]};

        state = measurementReducer(state, MeasurementActions.deleteMeasurement({id: 1}));
        state = measurementReducer(state, MeasurementActions.deleteMeasurementSuccess({id: 1}));
        // A request started now sees writeSeq 1 and is therefore current.
        state = measurementReducer(state, poll([messung(3)], state.writeSeq));

        expect(state.measurements.map(m => m.id)).toEqual([3]);
    });
});

describe("measurementReducer - auto-assign lock", () => {
    it("blocks further auto-assign actions until the response lands", () => {
        let state = measurementReducer(initialState, MeasurementActions.skipAutoAssign());
        expect(state.autoAssignBusy).toBe(true);

        state = measurementReducer(
            state,
            MeasurementActions.skipAutoAssignSuccess({status: {raceId: 1, active: true, nextRaceNumber: 8}}),
        );
        expect(state.autoAssignBusy).toBe(false);
        expect(state.autoAssignStatus.nextRaceNumber).toBe(8);
    });

    it("releases the lock when the request fails", () => {
        let state = measurementReducer(initialState, MeasurementActions.enableAutoAssign({request: {raceId: 1}}));
        expect(state.autoAssignBusy).toBe(true);

        state = measurementReducer(state, MeasurementActions.enableAutoAssignFailure({error: "kaputt"}));
        expect(state.autoAssignBusy).toBe(false);
    });
});
