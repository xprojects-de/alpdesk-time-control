/**
 * The timing device's own measurement counter as the measurement screens print it.
 *
 * A row that never came from a device - a manually entered time or a CSV import - still carries a
 * device id, because the column is NOT NULL; the backend generates a synthetic, always negative one
 * so it can never collide with a real (always positive) device counter (see
 * `MeasurementService#nextSyntheticDeviceMeasurementId`). That internal value means nothing to an
 * operator comparing the list against the device's display, so it prints as "-" rather than as
 * "-1".
 *
 * Shared by the live Messungen list and the archived Zuordnung list so the two cannot drift apart.
 */
export function formatDeviceMeasurementId(deviceMeasurementId: number | null | undefined): string {
    if (deviceMeasurementId == null || deviceMeasurementId < 0) {
        return "-";
    }
    return String(deviceMeasurementId);
}

/**
 * Whether this row was recorded without a timing device (manual entry or CSV import) and therefore
 * only carries a synthetic id - what {@link formatDeviceMeasurementId} prints as "-".
 */
export function isSyntheticDeviceMeasurementId(deviceMeasurementId: number | null | undefined): boolean {
    return deviceMeasurementId != null && deviceMeasurementId < 0;
}
