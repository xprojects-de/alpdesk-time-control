package x.timecontrol.services;

import io.micronaut.context.annotation.Property;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.client.HttpClient;
import io.micronaut.http.client.annotation.Client;
import io.micronaut.http.client.exceptions.HttpClientException;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import x.timecontrol.entities.Measurement;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Singleton
public class DataImportService {

    private static final Logger LOG = LoggerFactory.getLogger(DataImportService.class);

    @Property(name = "data-import.url", defaultValue = "http://192.168.4.1/data")
    String dataUrl;

    @Inject
    @Client("/")
    HttpClient httpClient;

    @Inject
    MeasurementService measurementService;

    public List<Measurement> importDataFromDevice() {
        List<Measurement> createdMeasurements = new ArrayList<>();

        try {

            LOG.debug("Fetching data from {}", dataUrl);

            String response = httpClient.toBlocking().retrieve(HttpRequest.GET(dataUrl));

            if (response.trim().isEmpty()) {
                LOG.debug("No data received from device");
                return createdMeasurements;
            }

            String[] lines = response.split("\\r?\\n");
            LocalDateTime now = LocalDateTime.now();

            for (String line : lines) {

                line = line.trim();
                if (line.isEmpty()) {
                    continue;
                }

                try {

                    String[] parts = line.split(",");
                    if (parts.length != 2) {
                        LOG.warn("Invalid line format (expected ID,time): {}", line);
                        continue;
                    }

                    long id = Long.parseLong(parts[0].trim());
                    double timeValue = Double.parseDouble(parts[1].trim());
                    int durationMs = (int) Math.round(timeValue);

                    Long existingParticipantId = measurementService.findById(id)
                            .map(Measurement::participantId)
                            .orElse(null);

                    Measurement saved = measurementService.upsertWithId(id, existingParticipantId, durationMs, now);
                    createdMeasurements.add(saved);
                    LOG.debug("Upserted measurement ID {}: {} ms", id, durationMs);

                } catch (NumberFormatException e) {
                    LOG.warn("Could not parse line: {}", line);
                } catch (Exception e) {
                    LOG.warn("Error processing line '{}': {}", line, e.getMessage());
                }
            }

            LOG.info("Successfully imported {} measurements", createdMeasurements.size());

        } catch (HttpClientException e) {
            LOG.debug("Could not connect to device at {}: {}", dataUrl, e.getMessage());
        } catch (Exception e) {
            LOG.warn("Error importing data from device: {}", e.getMessage());
        }

        return createdMeasurements;
    }
}




