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
import java.util.function.Supplier;

@Singleton
@Requires(property = "data-import.enabled", value = "true", defaultValue = "true")
public class DataImportScheduler {

    private static final Logger LOG = LoggerFactory.getLogger(DataImportScheduler.class);

    @Inject
    DataImportService dataImportService;

    @Inject
    AutoAssignService autoAssignService;

    @Property(name = "data-import.enabled", defaultValue = "true")
    boolean enabled;

    private volatile boolean scheduledImportActive = false;

    public boolean isScheduledImportActive() {
        return scheduledImportActive;
    }

    public void setScheduledImportActive(boolean active) {
        this.scheduledImportActive = active;
        LOG.info("Scheduled data import has been {} by user", active ? "enabled" : "disabled");
    }

    /**
     * Runs {@code action} with the scheduled background import paused for its duration, restoring
     * whatever state it was in before. Pausing closes most of the window where a scheduled fetch,
     * already in flight when a device reset happens, would otherwise write stale pre-reset data
     * into the measurement table right after it was cleared - shared by every device-reset/archive
     * endpoint that needs this (previously duplicated verbatim in RaceController and
     * MeasurementController).
     */
    public <T> T pauseDuring(Supplier<T> action) {
        boolean wasActive = isScheduledImportActive();
        if (wasActive) {
            setScheduledImportActive(false);
        }
        try {
            return action.get();
        } finally {
            if (wasActive) {
                setScheduledImportActive(true);
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

        LOG.debug("Starting scheduled data import...");

        try {
            List<Measurement> imported = dataImportService.importDataFromDevice();

            if (!imported.isEmpty()) {
                LOG.info("Scheduled import completed: {} measurements imported", imported.size());
            } else {
                LOG.debug("Scheduled import completed: no new measurements");
            }

            // Runs every cycle regardless of whether this cycle imported anything new, so a race
            // stays caught up even if a previous cycle's measurements weren't matched yet. Only
            // updates participantId on still-unassigned raw measurements - no-ops immediately if no
            // race currently has auto-assign mode active, and never touches race_measurement itself.
            autoAssignService.processNewMeasurements();

        } catch (Exception e) {
            LOG.debug("Scheduled data import failed (will retry in 5s): {}", e.getMessage());
        }
    }
}


