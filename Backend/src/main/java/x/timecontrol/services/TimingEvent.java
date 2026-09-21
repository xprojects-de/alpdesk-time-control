package x.timecontrol.services;

import java.time.LocalDateTime;

/**
 * One measurement as a device reported it, on its way into {@link TimingEventSink} - the common
 * currency between a polling provider's parsed response line and a streaming provider's pushed
 * message.
 *
 * @param deviceMeasurementId the device's own identifier for this measurement <b>event</b>, or
 *                            null if it has none. Pass a value here only when it identifies a
 *                            single physical measurement and stays stable if the same event is
 *                            reported again (the Alpdesk controller's line-local counter, an
 *                            Alpenhunde event index): the sink upserts on it, so re-reporting is
 *                            harmless. A value that identifies a <b>participant</b> rather than an
 *                            event - e.g. a chip/transponder system delivering the athlete's bib
 *                            per crossing - must NOT be passed here: the same participant can
 *                            cross multiple times, and upserting on it would silently overwrite an
 *                            earlier crossing instead of recording a new one. Such a provider
 *                            passes null and resolves {@code participantId} itself.
 * @param durationMs          the measured duration in milliseconds; a negative value is rejected
 *                            by the sink (it would floor to 0 in
 *                            {@link RankingService#adjustedValue} and rank that participant first)
 * @param measuredAt          when it was measured, or null to stamp it with the time the sink
 *                            processes it. Ignored for a device id that is already stored: the
 *                            stored row's timestamp is kept, so a re-reported measurement does not
 *                            wander forward in time on every poll.
 * @param participantId       the participant this measurement belongs to, if the provider already
 *                            knows it (see above), otherwise null - auto-assign fills it in later.
 *                            Ignored for a device id that is already stored, for the same reason
 *                            as {@code measuredAt}: a poll response must not undo a manual
 *                            correction the operator made in the meantime.
 */
public record TimingEvent(Long deviceMeasurementId, int durationMs, LocalDateTime measuredAt, Long participantId) {

    /** A measurement carrying the device's own event id, timestamped by the sink. */
    public static TimingEvent fromDevice(long deviceMeasurementId, int durationMs) {
        return new TimingEvent(deviceMeasurementId, durationMs, null, null);
    }

    /** A measurement from a device that has no stable per-event id of its own. */
    public static TimingEvent withoutDeviceId(int durationMs, LocalDateTime measuredAt, Long participantId) {
        return new TimingEvent(null, durationMs, measuredAt, participantId);
    }
}
