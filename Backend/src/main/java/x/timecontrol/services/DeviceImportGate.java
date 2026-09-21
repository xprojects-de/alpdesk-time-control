package x.timecontrol.services;

import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.function.Supplier;

/**
 * Shared on/off and pause state for everything that writes device data into the measurement table.
 * <p>
 * This used to live in {@link DataImportScheduler}, which was the only producer back when every
 * provider was polled. A {@link StreamingTimingImporter} is a second producer that the scheduler
 * does not drive at all, so the state moved here, where both can see it - and where it exists even
 * when the scheduler bean is switched off entirely via {@code data-import.enabled=false}.
 */
@Singleton
public class DeviceImportGate {

    private static final Logger LOG = LoggerFactory.getLogger(DeviceImportGate.class);

    private final Object pauseLock = new Object();
    private volatile boolean scheduledImportActive = false;
    // Guarded by pauseLock. pauseDepth counts concurrently in-flight pauseDuring() calls (e.g. two
    // overlapping device-reset/archive requests); pausedTargetActive is the value scheduledImportActive
    // should take once the *last* one finishes. Only the outermost call captures/restores it, so one
    // reset finishing early can never re-enable scheduled import while another is still in flight.
    private int pauseDepth = 0;
    private boolean pausedTargetActive = false;

    public boolean isScheduledImportActive() {
        return scheduledImportActive;
    }

    public void setScheduledImportActive(boolean active) {
        synchronized (pauseLock) {
            if (pauseDepth > 0) {
                // A reset/archive is currently pausing import; remember the requested state and apply
                // it once that finishes instead of flipping the live flag mid-reset.
                pausedTargetActive = active;
            } else {
                scheduledImportActive = active;
            }
        }
        LOG.info("Scheduled data import has been {} by user", active ? "enabled" : "disabled");
    }

    /**
     * The state the <b>operator</b> put the switch in, with a pause looked through rather than at:
     * {@link #pauseDuring} forces {@link #isScheduledImportActive()} to false for its duration, and
     * a caller that must not treat that as "the operator turned imports off" asks here instead.
     * <p>
     * {@link TimingEventSink} is that caller. A pushed measurement arriving mid-reset must be
     * written, not discarded - it is a single event that will never be delivered again, and the
     * table lock already keeps it out of the middle of an archive. Reading the effective flag here
     * would have thrown it away anyway, through the pause's side effect rather than the operator's
     * intent.
     */
    public boolean isImportEnabledByOperator() {
        synchronized (pauseLock) {
            return pauseDepth > 0 ? pausedTargetActive : scheduledImportActive;
        }
    }

    /**
     * Runs {@code action} with device import paused for its duration, restoring whatever state it
     * was in before. Pausing closes most of the window where a scheduled fetch, already in flight
     * when a device reset happens, would otherwise write stale pre-reset data into the measurement
     * table right after it was cleared - shared by every device-reset/archive endpoint that needs
     * this (previously duplicated verbatim in RaceController and MeasurementController). Safe under
     * concurrent callers (e.g. two nearly-simultaneous resets): see pauseDepth/pausedTargetActive
     * above.
     */
    public <T> T pauseDuring(Supplier<T> action) {
        synchronized (pauseLock) {
            if (pauseDepth == 0) {
                pausedTargetActive = scheduledImportActive;
                scheduledImportActive = false;
            }
            pauseDepth++;
        }
        try {
            return action.get();
        } finally {
            synchronized (pauseLock) {
                pauseDepth--;
                if (pauseDepth == 0) {
                    scheduledImportActive = pausedTargetActive;
                }
            }
        }
    }
}
