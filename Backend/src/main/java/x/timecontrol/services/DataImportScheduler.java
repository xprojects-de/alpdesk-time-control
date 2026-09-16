package x.timecontrol.services;

import io.micronaut.context.annotation.Property;
import io.micronaut.context.annotation.Requires;
import io.micronaut.scheduling.annotation.Scheduled;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import x.timecontrol.entities.Measurement;

import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;

@Singleton
@Requires(property = "data-import.enabled", value = "true", defaultValue = "true")
public class DataImportScheduler {

    private static final Logger LOG = LoggerFactory.getLogger(DataImportScheduler.class);

    @Inject
    TimingProviderRegistry timingProviderRegistry;

    @Inject
    AutoAssignService autoAssignService;

    @Property(name = "data-import.enabled", defaultValue = "true")
    boolean enabled;

    private final Object pauseLock = new Object();
    private volatile boolean scheduledImportActive = false;
    // Guarded by pauseLock. pauseDepth counts concurrently in-flight pauseDuring() calls (e.g. two
    // overlapping device-reset/archive requests); pausedTargetActive is the value scheduledImportActive
    // should take once the *last* one finishes. Only the outermost call captures/restores it, so one
    // reset finishing early can never re-enable scheduled import while another is still in flight.
    private int pauseDepth = 0;
    private boolean pausedTargetActive = false;

    // Only touched from the single scheduler thread invoking importDataPeriodically() - tracks
    // whether the last cycle failed, so a failure is logged at WARN once (not swallowed at a level
    // nobody sees in production) without spamming the log every 5s for as long as the failure
    // persists (e.g. device unplugged for the rest of the race).
    private boolean lastImportSucceeded = true;

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
     * Runs {@code action} with the scheduled background import paused for its duration, restoring
     * whatever state it was in before. Pausing closes most of the window where a scheduled fetch,
     * already in flight when a device reset happens, would otherwise write stale pre-reset data
     * into the measurement table right after it was cleared - shared by every device-reset/archive
     * endpoint that needs this (previously duplicated verbatim in RaceController and
     * MeasurementController). Safe under concurrent callers (e.g. two nearly-simultaneous resets):
     * see pauseDepth/pausedTargetActive above.
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

    @Scheduled(fixedDelay = "5s", initialDelay = "10s")
    public void importDataPeriodically() {

        if (!enabled) {
            LOG.trace("Data import is disabled, skipping scheduled import");
            return;
        }

        if (!scheduledImportActive) {
            LOG.trace("Scheduled import is not active, skipping");
            return;
        }

        boolean deviceImportSucceeded = true;
        try {
            Optional<TimingDataImporter> importer = timingProviderRegistry.getActiveImporter();
            if (importer.isPresent()) {
                LOG.debug("Starting scheduled data import...");

                List<Measurement> imported = importer.get().importDataFromDevice();

                if (!imported.isEmpty()) {
                    LOG.info("Scheduled import completed: {} measurements imported", imported.size());
                } else {
                    LOG.debug("Scheduled import completed: no new measurements");
                }
            } else {
                LOG.trace("No timing provider configured, skipping device import");
            }
        } catch (Exception e) {
            deviceImportSucceeded = false;
            if (lastImportSucceeded) {
                LOG.warn("Scheduled data import failed (will keep retrying every 5s): {}", e.getMessage());
            } else {
                LOG.debug("Scheduled data import still failing: {}", e.getMessage());
            }
        }

        // Runs every cycle regardless of whether a device is configured, or whether the device
        // import above succeeded, failed, or was skipped: processNewMeasurements() matches ANY
        // still-unassigned measurement row (manually entered, JSON-imported, or device-imported)
        // purely by querying the measurement table - it has nothing to do with polling a device.
        // A device import failure (e.g. network drop) must not silently disable auto-assign for
        // manually-entered times in evaluation-only (NONE) mode, which is exactly the use case
        // NONE exists to support. Only updates participantId on still-unassigned raw measurements
        // - no-ops immediately if no race currently has auto-assign mode active, and never touches
        // race_measurement itself.
        boolean autoAssignSucceeded = true;
        try {
            autoAssignService.processNewMeasurements();
        } catch (Exception e) {
            autoAssignSucceeded = false;
            LOG.warn("Scheduled auto-assign failed: {}", e.getMessage());
        }

        boolean cycleSucceeded = deviceImportSucceeded && autoAssignSucceeded;
        if (cycleSucceeded && !lastImportSucceeded) {
            LOG.info("Scheduled data import recovered");
        }
        lastImportSucceeded = cycleSucceeded;
    }
}


