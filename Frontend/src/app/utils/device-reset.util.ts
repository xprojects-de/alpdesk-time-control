// Contract with the backend: MeasurementController#resetAll() and RaceController#archiveMeasurements()
// only include the phrase "device reset" (case-insensitive) in their HttpResponse<String> success
// message when a timing device was actually reset - never when it was skipped (no provider
// configured) or left untouched. If either backend message is ever reworded, it must keep
// containing this phrase, or this check (and this comment) must be updated to match.
const DEVICE_RESET_MARKER = 'device reset';

export function deviceWasResetFromMessage(message: string): boolean {
    return message.toLowerCase().includes(DEVICE_RESET_MARKER);
}
