import {describe, expect, it} from "vitest";
import {formatDeviceMeasurementId, isSyntheticDeviceMeasurementId} from "./device-measurement-id.util";

describe("formatDeviceMeasurementId", () => {
    it("prints a real device counter as is", () => {
        expect(formatDeviceMeasurementId(17)).toBe("17");
    });

    it("prints a synthetic (negative) id of a manual/CSV row as a dash", () => {
        expect(formatDeviceMeasurementId(-1)).toBe("-");
        expect(formatDeviceMeasurementId(-42)).toBe("-");
    });

    it("prints a missing id as a dash", () => {
        expect(formatDeviceMeasurementId(null)).toBe("-");
        expect(formatDeviceMeasurementId(undefined)).toBe("-");
    });

    it("keeps 0 - it is a valid, non-synthetic counter", () => {
        expect(formatDeviceMeasurementId(0)).toBe("0");
    });
});

describe("isSyntheticDeviceMeasurementId", () => {
    it("is true only for a generated, negative id", () => {
        expect(isSyntheticDeviceMeasurementId(-1)).toBe(true);
        expect(isSyntheticDeviceMeasurementId(17)).toBe(false);
        expect(isSyntheticDeviceMeasurementId(0)).toBe(false);
        expect(isSyntheticDeviceMeasurementId(null)).toBe(false);
        expect(isSyntheticDeviceMeasurementId(undefined)).toBe(false);
    });
});
