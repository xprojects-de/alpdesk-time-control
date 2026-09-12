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

    @Property(name = "data-import.reset-url", defaultValue = "http://192.168.4.1/reset")
    String resetUrl;

    @Property(name = "data-import.enable-continuous-mode", defaultValue = "http://192.168.4.1/enableContinuousMode")
    String enableContinuousModeUrl;

    @Property(name = "data-import.disable-continuous-mode", defaultValue = "http://192.168.4.1/disableContinuousMode")
    String disableContinuousModeUrl;

    @Property(name = "data-import.status-url", defaultValue = "http://192.168.4.1/status")
    String statusUrl;

    @Property(name = "data-import.ping-url", defaultValue = "http://192.168.4.1/ping")
    String pingUrl;

    @Property(name = "data-import.discard-url", defaultValue = "http://192.168.4.1/discard")
    String discardUrl;

    @Inject
    @Client("/")
    HttpClient httpClient;

    @Inject
    MeasurementService measurementService;

    @Inject
    MeasurementTableLock measurementTableLock;

    public List<Measurement> importDataFromDevice() {
        List<Measurement> createdMeasurements = new ArrayList<>();

        try {

            LOG.info("Fetching data from {}", dataUrl);

            String response = httpClient.toBlocking().retrieve(HttpRequest.GET(dataUrl));

            if (response.trim().isEmpty()) {
                LOG.debug("No data received from device");
                return createdMeasurements;
            }

            String[] lines = response.split("\\r?\\n");
            LocalDateTime now = LocalDateTime.now();

            // Locked so a concurrent archive/reset can't observe or clear the measurement table
            // mid-import; the device HTTP call above stays outside the lock so a slow/unreachable
            // device can't block archive/reset operations.
            measurementTableLock.run(() -> {
                for (String line : lines) {

                    String trimmedLine = line.trim();
                    if (trimmedLine.isEmpty()) {
                        continue;
                    }

                    try {

                        String[] parts = trimmedLine.split(",");
                        if (parts.length != 2) {
                            LOG.warn("Invalid line format (expected ID,time): {}", trimmedLine);
                            continue;
                        }

                        long id = Long.parseLong(parts[0].trim());
                        double timeValue = Double.parseDouble(parts[1].trim());
                        int durationMs = (int) Math.round(timeValue);

                        if (durationMs < 0) {
                            LOG.warn("Ignoring negative duration from device for ID {}: {} ms", id, durationMs);
                            continue;
                        }

                        var existingMeasurement = measurementService.findById(id);
                        Long existingParticipantId = existingMeasurement
                                .map(Measurement::participantId)
                                .orElse(null);
                        LocalDateTime timestamp = existingMeasurement
                                .map(Measurement::measuredAt)
                                .orElse(now);

                        Measurement saved = measurementService.upsertWithId(id, existingParticipantId, durationMs, timestamp);
                        createdMeasurements.add(saved);
                        LOG.debug("Upserted measurement ID {}: {} ms", id, durationMs);

                    } catch (NumberFormatException e) {
                        LOG.warn("Could not parse line: {}", trimmedLine);
                    } catch (Exception e) {
                        LOG.warn("Error processing line '{}': {}", trimmedLine, e.getMessage());
                    }
                }
            });

            LOG.info("Successfully imported {} measurements", createdMeasurements.size());

        } catch (HttpClientException e) {
            LOG.debug("Could not connect to device at {}: {}", dataUrl, e.getMessage());
        } catch (Exception e) {
            LOG.warn("Error importing data from device: {}", e.getMessage());
        }

        return createdMeasurements;
    }

    public boolean resetDevice() {

        try {

            LOG.info("Resetting device at {}", resetUrl);
            httpClient.toBlocking().retrieve(HttpRequest.GET(resetUrl));
            LOG.info("Successfully reset device");

            return true;

        } catch (HttpClientException e) {

            LOG.warn("Could not connect to device at {}: {}", resetUrl, e.getMessage());
            return false;

        } catch (Exception e) {

            LOG.warn("Error resetting device: {}", e.getMessage());
            return false;

        }

    }

    public boolean continuousMode(boolean enableContinuousMode) {

        try {

            LOG.info("set continuousMode: {}", enableContinuousMode);

            if (enableContinuousMode) {
                httpClient.toBlocking().exchange(HttpRequest.GET(enableContinuousModeUrl));
            } else {
                httpClient.toBlocking().exchange(HttpRequest.GET(disableContinuousModeUrl));
            }

            LOG.info("Successfully set continuousMode");

            return true;

        } catch (HttpClientException e) {

            LOG.warn("Could not connect to device {}", e.getMessage());
            return false;

        } catch (Exception e) {

            LOG.warn("Error set continuousMode on device: {}", e.getMessage());
            return false;

        }
    }

    public String getDeviceStatus() {

        try {

            LOG.info("Getting device status from {}", statusUrl);
            String response = httpClient.toBlocking().retrieve(HttpRequest.GET(statusUrl));
            LOG.info("Device status: {}", response);

            return response.trim();

        } catch (HttpClientException e) {

            LOG.warn("Could not connect to device at {}: {}", statusUrl, e.getMessage());
            return null;

        } catch (Exception e) {

            LOG.warn("Error getting device status: {}", e.getMessage());
            return null;

        }
    }

    public boolean discardOldestStart() {

        try {

            LOG.info("Discarding oldest start at {}", discardUrl);
            httpClient.toBlocking().retrieve(HttpRequest.GET(discardUrl));
            LOG.info("Successfully discarded oldest start");

            return true;

        } catch (HttpClientException e) {

            LOG.warn("Could not connect to device at {}: {}", discardUrl, e.getMessage());
            return false;

        } catch (Exception e) {

            LOG.warn("Error discarding oldest start: {}", e.getMessage());
            return false;

        }
    }

    public boolean isDeviceConnected() {

        try {

            LOG.debug("Checking device connection at {}", pingUrl);
            httpClient.toBlocking().retrieve(HttpRequest.GET(pingUrl));
            LOG.debug("Device is connected");

            return true;

        } catch (HttpClientException e) {

            LOG.debug("Could not connect to device at {}: {}", pingUrl, e.getMessage());
            return false;

        } catch (Exception e) {

            LOG.debug("Error checking device connection: {}", e.getMessage());
            return false;

        }
    }
}




