package x.timecontrol.services;

import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import x.timecontrol.entities.Measurement;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Supplier;

/**
 * The single write path from a timing device into the measurement table, shared by both
 * transports: a {@link PollingTimingImporter} hands over the batch it just fetched, a
 * {@link StreamingTimingImporter} hands over one event per pushed message, from its own thread.
 * <p>
 * Keeping this out of the providers is what makes a second provider cheap: dedup against what is
 * already stored, the device-id rules from {@link TimingEvent}, the pause window around a device
 * reset and the duration sanity check are decided once, here, instead of being re-implemented (and
 * eventually re-implemented differently) per device.
 */
@Singleton
public class TimingEventSink {

    private static final Logger LOG = LoggerFactory.getLogger(TimingEventSink.class);

    private final MeasurementService measurementService;
    private final MeasurementTableLock measurementTableLock;
    private final DeviceImportGate importGate;

    public TimingEventSink(MeasurementService measurementService,
                           MeasurementTableLock measurementTableLock,
                           DeviceImportGate importGate) {
        this.measurementService = measurementService;
        this.measurementTableLock = measurementTableLock;
        this.importGate = importGate;
    }

    /**
     * Accepts a single measurement a device delivered <b>unasked</b> - the push entry point, used
     * by a {@link StreamingTimingImporter} from its connection's thread.
     * <p>
     * Unasked is what makes this different from {@link #acceptBatch}: nobody in this application
     * decided that now is a good moment for this measurement, so the operator's controls apply to
     * it. It is dropped while a device reset/archive is clearing the table, and while the operator
     * has automatic import switched off - that switch means "don't take device data", and a
     * streaming device cannot be told to stop sending.
     *
     * @return the stored row, or empty if the event was rejected (invalid duration, import off or
     * paused, or the write failed) - all of which are logged here, since a streaming provider's
     * callback thread has nowhere useful to report them to
     */
    public Optional<Measurement> accept(TimingEvent event) {
        Long deviceId = event.deviceMeasurementId();
        // One indexed lookup, not the whole table: a streaming provider calls this once per pushed
        // measurement, so reading every stored row here would turn a race into one full scan per
        // finish - under the measurement table lock, on a WAL database. The batch path below reads
        // everything precisely because it has a whole poll response to match at once.
        List<Measurement> accepted = accept(List.of(event), true, () -> {
            Map<Long, Measurement> stored = new HashMap<>(2);
            if (deviceId != null) {
                measurementService.findByDeviceMeasurementId(deviceId)
                        .ifPresent(existing -> stored.put(deviceId, existing));
            }
            return stored;
        });
        return accepted.isEmpty() ? Optional.empty() : Optional.of(accepted.getFirst());
    }

    /**
     * Accepts everything one poll of a device returned, in one go - the pull entry point, used by a
     * {@link PollingTimingImporter} after it asked the device.
     * <p>
     * Deliberately NOT subject to the pause or to the automatic-import switch, unlike
     * {@link #accept}: somebody in this application asked for this data on purpose, and every one
     * of those callers has a reason that outranks both flags. {@link DataImportScheduler} checks
     * the switch itself before it polls; the manual import endpoint is an operator pressing a
     * button; and the safety pull in {@code MeasurementController#resetAll} /
     * {@code RaceController#archiveMeasurements} runs <i>inside</i> the pause on purpose - it
     * exists to rescue what the device recorded since the last poll, moments before that device is
     * wiped. Dropping those would lose a racer's finish time at exactly the point where it can
     * never be recovered.
     *
     * @return the stored row per accepted event, including rows that already matched and were
     * therefore not written again; rejected events are left out
     */
    public List<Measurement> acceptBatch(List<TimingEvent> events) {
        if (events == null || events.isEmpty()) {
            return List.of();
        }
        return accept(events, false, () -> loadStoredByDeviceId(events));
    }

    /**
     * The shared core of both entry points. {@code storedLoader} runs inside the lock and decides
     * how much of the table is read to match these events against - the only thing that differs
     * between accepting one pushed measurement and accepting a whole poll response.
     */
    private List<Measurement> accept(List<TimingEvent> events, boolean unsolicited,
                                     Supplier<Map<Long, Measurement>> storedLoader) {
        // Sorted out before the lock is taken and before anything is read: an implausible value is
        // a property of the event alone, so checking it here keeps a garbled message from costing a
        // query and from holding up an archive waiting for the table lock.
        List<TimingEvent> valid = events.stream().filter(TimingEventSink::isPlausible).toList();
        if (valid.isEmpty()) {
            return List.of();
        }

        // Locked so a concurrent archive/reset can't observe or clear the measurement table
        // mid-import. Callers do their device I/O outside this lock, so a slow/unreachable device
        // can't block archive/reset operations.
        return measurementTableLock.get(() -> {
            // Checked inside the lock, not before it: a reset takes this same lock to clear the
            // table, so a flag read outside could still be acted on after the wipe began.
            String refusal = unsolicited ? refusePush() : null;
            if (refusal != null) {
                // These are real measured times, so they go into the log at WARN with their values
                // rather than vanishing silently - an operator can still read them off there.
                LOG.warn("Discarding {} pushed measurement(s) - {}: {}", valid.size(), refusal, valid);
                return List.of();
            }

            Map<Long, Measurement> storedByDeviceId = storedLoader.get();
            LocalDateTime now = LocalDateTime.now();

            List<Measurement> accepted = new ArrayList<>();
            for (TimingEvent event : valid) {
                try {
                    Measurement stored = acceptOne(event, storedByDeviceId, now);
                    if (stored != null) {
                        accepted.add(stored);
                    }
                } catch (Exception e) {
                    // One bad event (e.g. a participant already assigned to another measurement)
                    // must not cost the rest of the batch - the same per-line tolerance the device
                    // poll had before this was extracted.
                    LOG.warn("Error processing measurement {}: {}", event, e.getMessage());
                }
            }
            return accepted;
        });
    }

    /**
     * @return why a pushed measurement must not be written right now, or null if it may be
     */
    private String refusePush() {
        if (importGate.isPaused()) {
            return "a device reset/archive is clearing the measurement table";
        }
        if (!importGate.isScheduledImportActive()) {
            return "automatic import is switched off";
        }
        return null;
    }

    /**
     * The batch strategy: one read up front, keyed by the device's own id, instead of a lookup per
     * event - a polling device reports its WHOLE list on every poll, not just what is new, so most
     * events of a 5s tick describe a row that is already stored unchanged, and matching them one
     * by one would be a query per line. Skipped entirely when no event carries a device id, since
     * nothing could match anyway.
     */
    private Map<Long, Measurement> loadStoredByDeviceId(List<TimingEvent> events) {
        boolean anyDeviceId = events.stream().anyMatch(e -> e.deviceMeasurementId() != null);
        Map<Long, Measurement> storedByDeviceId = new HashMap<>();
        if (!anyDeviceId) {
            // Mutable and empty rather than Map.of(): acceptOne() writes back into this map.
            return storedByDeviceId;
        }
        for (Measurement stored : measurementService.findAll()) {
            if (stored.deviceMeasurementId() != null) {
                storedByDeviceId.put(stored.deviceMeasurementId(), stored);
            }
        }
        return storedByDeviceId;
    }

    /**
     * Mirrors MeasurementController#validateDurationMs: a negative duration floors to 0 in
     * RankingService.adjustedValue() and would rank that participant first once synced.
     */
    private static boolean isPlausible(TimingEvent event) {
        if (event.durationMs() < 0) {
            LOG.warn("Ignoring measurement with negative duration: {}", event);
            return false;
        }
        return true;
    }

    private Measurement acceptOne(TimingEvent event, Map<Long, Measurement> storedByDeviceId, LocalDateTime now) {
        LocalDateTime measuredAt = event.measuredAt() != null ? event.measuredAt() : now;
        Long deviceId = event.deviceMeasurementId();

        if (deviceId == null) {
            // No stable per-event id to upsert against - insert, letting MeasurementService
            // generate a synthetic (negative) device id for the NOT NULL column.
            return measurementService.create(
                    new Measurement(null, null, event.participantId(), event.durationMs(), measuredAt));
        }

        // Keyed by the device's own id, kept in a column separate from this table's own `id` PK -
        // see Measurement#deviceMeasurementId.
        Measurement existing = storedByDeviceId.get(deviceId);

        // participantId and measuredAt are carried over from the stored row, so the duration is the
        // only thing an upsert could actually change. When it matches, the write would rewrite the
        // row to what it already is - skipped, because on a WAL database that is a real commit per
        // row, every 5 seconds, for every finish recorded so far. The row is still reported back:
        // MeasurementController's manual device import returns this list to the UI, which must keep
        // listing everything the device holds, not only what happened to need writing. duration_ms
        // is NOT NULL (V1__create_participant.sql), so unboxing the stored value cannot NPE.
        if (existing != null && existing.durationMs() == event.durationMs()) {
            return existing;
        }

        Long participantId = existing != null ? existing.participantId() : event.participantId();
        LocalDateTime timestamp = existing != null ? existing.measuredAt() : measuredAt;

        Measurement saved = measurementService.upsertByDeviceMeasurementId(
                deviceId, participantId, event.durationMs(), timestamp);
        // Keeps a second event for the same device id in this same batch comparing against what was
        // just written, exactly as a per-event lookup would.
        storedByDeviceId.put(deviceId, saved);
        LOG.debug("Upserted measurement, device ID {}: {} ms", deviceId, event.durationMs());
        return saved;
    }
}
