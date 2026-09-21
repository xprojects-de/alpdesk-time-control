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

/**
 * Drives every {@link PollingTimingImporter}: asks the selected one for data every 5s, then runs
 * auto-assign. A {@link StreamingTimingImporter} is not driven from here at all - it delivers on
 * its own connection (see {@link TimingProviderLifecycle}) - but still benefits from the
 * auto-assign half of this cycle, which is why that runs unconditionally.
 */
@Singleton
@Requires(property = "data-import.enabled", value = "true", defaultValue = "true")
public class DataImportScheduler {

    private static final Logger LOG = LoggerFactory.getLogger(DataImportScheduler.class);

    @Inject
    TimingProviderRegistry timingProviderRegistry;

    @Inject
    AutoAssignService autoAssignService;

    @Inject
    DeviceImportGate importGate;

    @Property(name = "data-import.enabled", defaultValue = "true")
    boolean enabled;

    // Only touched from the single scheduler thread invoking importDataPeriodically() - tracks
    // whether the last cycle failed, so a failure is logged at WARN once (not swallowed at a level
    // nobody sees in production) without spamming the log every 5s for as long as the failure
    // persists (e.g. device unplugged for the rest of the race).
    private boolean lastImportSucceeded = true;

    @Scheduled(fixedDelay = "5s", initialDelay = "10s")
    public void importDataPeriodically() {

        if (!enabled) {
            LOG.trace("Data import is disabled, skipping scheduled import");
            return;
        }

        if (!importGate.isScheduledImportActive()) {
            LOG.trace("Scheduled import is not active, skipping");
            return;
        }

        boolean deviceImportSucceeded = true;
        try {
            // Only a device that delivers on request alone has anything to do here. For one that
            // pushes this is empty, and that is not an error condition: its measurements arrive over
            // its own connection and are written by TimingEventSink long before this tick would have
            // asked for them.
            Optional<PollingTimingImporter> importer = timingProviderRegistry.getActiveScheduledPollImporter();
            if (importer.isPresent()) {
                LOG.debug("Starting scheduled data import...");

                List<Measurement> imported = importer.get().importDataFromDevice();

                if (!imported.isEmpty()) {
                    LOG.info("Scheduled import completed: {} measurements imported", imported.size());
                } else {
                    LOG.debug("Scheduled import completed: no new measurements");
                }
            } else {
                LOG.trace("No polling timing provider configured, skipping device import");
            }
        } catch (Exception e) {
            deviceImportSucceeded = false;
            if (lastImportSucceeded) {
                LOG.warn("Scheduled data import failed (will keep retrying every 5s): {}", e.getMessage());
            } else {
                LOG.debug("Scheduled data import still failing: {}", e.getMessage());
            }
        }

        // Runs every cycle regardless of whether a device is configured, of its transport, and of
        // whether the device import above succeeded, failed, or was skipped: processNewMeasurements()
        // matches ANY still-unassigned measurement row (manually entered, JSON-imported, polled, or
        // pushed by a streaming provider) purely by querying the measurement table - it has nothing
        // to do with polling a device. A device import failure (e.g. network drop) must not silently
        // disable auto-assign for manually-entered times in evaluation-only (NONE) mode, which is
        // exactly the use case NONE exists to support. Only updates participantId on still-unassigned
        // raw measurements - no-ops immediately if no race currently has auto-assign mode active, and
        // never touches race_measurement itself.
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
