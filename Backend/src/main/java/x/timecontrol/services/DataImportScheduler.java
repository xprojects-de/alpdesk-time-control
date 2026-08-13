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

@Singleton
@Requires(property = "data-import.enabled", value = "true", defaultValue = "true")
public class DataImportScheduler {

    private static final Logger LOG = LoggerFactory.getLogger(DataImportScheduler.class);

    @Inject
    DataImportService dataImportService;

    @Property(name = "data-import.enabled", defaultValue = "true")
    boolean enabled;

    @Scheduled(fixedDelay = "5s", initialDelay = "10s")
    public void importDataPeriodically() {

        if (!enabled) {
            LOG.trace("Data import is disabled, skipping scheduled import");
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

        } catch (Exception e) {
            LOG.error("Scheduled data import failed: {}", e.getMessage());
            LOG.debug("Full error details:", e);
        }
    }
}


