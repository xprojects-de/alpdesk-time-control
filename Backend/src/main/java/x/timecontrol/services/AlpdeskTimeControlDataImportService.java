package x.timecontrol.services;

import io.micronaut.http.HttpRequest;
import io.micronaut.http.client.HttpClient;
import io.micronaut.http.client.annotation.Client;
import io.micronaut.http.client.exceptions.HttpClientException;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import x.timecontrol.entities.Measurement;
import x.timecontrol.entities.TimingProviderType;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Singleton
public class AlpdeskTimeControlDataImportService implements TimingDataImporter {

    private static final Logger LOG = LoggerFactory.getLogger(AlpdeskTimeControlDataImportService.class);

    private static final String DEFAULT_BASE_URL = "http://192.168.4.1";

    private static final String DATA_PATH = "/data";
    private static final String RESET_PATH = "/reset";
    private static final String STATUS_PATH = "/status";
    private static final String PING_PATH = "/ping";
    private static final String DISCARD_PATH = "/discard";
    private static final String ENABLE_CONTINUOUS_MODE_PATH = "/enableContinuousMode";
    private static final String DISABLE_CONTINUOUS_MODE_PATH = "/disableContinuousMode";

    @Inject
    @Client("/")
    HttpClient httpClient;

    @Inject
    MeasurementService measurementService;

    @Inject
    MeasurementTableLock measurementTableLock;

    // A plain instance field here would be a shared-mutable-state race: TimingProviderRegistry
    // calls configure() then immediately hands the (single, singleton) importer back to the caller
    // for one action call, all on the caller's own thread - but two callers (e.g. the scheduler tick
    // and a manual controller request) can interleave their configure()+action pairs, so a request
    // could fire against whatever baseUrl the OTHER caller most recently configured instead of its
    // own. A ThreadLocal scopes the configured value to the calling thread's own configure()+action
    // sequence, which is always synchronous and same-thread (see every getActiveImporter() call
    // site), so concurrent callers on different threads can no longer clobber each other.
    private final ThreadLocal<String> baseUrl = ThreadLocal.withInitial(() -> DEFAULT_BASE_URL);

    @Override
    public TimingProviderType type() {
        return TimingProviderType.ALPDESK_TIMECONTROL;
    }

    @Override
    public void configure(Map<String, String> config) {
        String configured = config != null ? config.get("baseUrl") : null;
        if (configured != null && !configured.isBlank()) {
            // Strip trailing slash(es) so baseUrl + "/data" never ends up with a double slash
            // regardless of whether the saved value has one.
            this.baseUrl.set(configured.trim().replaceAll("/+$", ""));
        } else {
            this.baseUrl.set(DEFAULT_BASE_URL);
        }
    }

    private String dataUrl() {
        return baseUrl.get() + DATA_PATH;
    }

    private String resetUrl() {
        return baseUrl.get() + RESET_PATH;
    }

    private String statusUrl() {
        return baseUrl.get() + STATUS_PATH;
    }

    private String pingUrl() {
        return baseUrl.get() + PING_PATH;
    }

    private String discardUrl() {
        return baseUrl.get() + DISCARD_PATH;
    }

    private String enableContinuousModeUrl() {
        return baseUrl.get() + ENABLE_CONTINUOUS_MODE_PATH;
    }

    private String disableContinuousModeUrl() {
        return baseUrl.get() + DISABLE_CONTINUOUS_MODE_PATH;
    }

    @Override
    public List<Measurement> importDataFromDevice() {
        List<Measurement> createdMeasurements = new ArrayList<>();
        String dataUrl = dataUrl();

        LOG.info("Fetching data from {}", dataUrl);

        // Deliberately NOT swallowed (unlike the per-line parsing below): a caller doing a
        // safety pull right before wiping the device/DB (MeasurementController#resetAll,
        // RaceController#archiveMeasurements) needs to know the pull actually reached the device
        // and completed, not just get back an empty list indistinguishable from "device had
        // nothing new". DataImportScheduler's periodic poll already wraps this whole call in its
        // own try/catch, so propagating here doesn't change its "retry every 5s" behavior, just
        // what it logs.
        String response;
        try {
            response = httpClient.toBlocking().retrieve(HttpRequest.GET(dataUrl));
        } catch (HttpClientException e) {
            throw new IllegalStateException("Could not connect to device at " + dataUrl + ": " + e.getMessage(), e);
        }

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
            // The device reports its WHOLE list on every poll, not just what is new, so most lines
            // of a 5s tick describe a row that is already stored unchanged. One read up front,
            // keyed by the device's own id, replaces the per-line lookup that used to run for each
            // of them.
            Map<Long, Measurement> storedByDeviceId = new HashMap<>();
            for (Measurement stored : measurementService.findAll()) {
                if (stored.deviceMeasurementId() != null) {
                    storedByDeviceId.put(stored.deviceMeasurementId(), stored);
                }
            }

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

                    long deviceId = Long.parseLong(parts[0].trim());
                    double timeValue = Double.parseDouble(parts[1].trim());
                    long roundedDurationMs = Math.round(timeValue);

                    // Guards against a garbled/corrupted line (serial noise, firmware glitch) whose
                    // value parses as a huge double: narrowing straight to int would silently wrap
                    // around, possibly landing on a small, plausible-looking positive number that
                    // the durationMs < 0 check below would never catch.
                    if (roundedDurationMs < 0 || roundedDurationMs > Integer.MAX_VALUE) {
                        LOG.warn("Ignoring out-of-range duration from device for ID {}: {} ms", deviceId, roundedDurationMs);
                        continue;
                    }
                    int durationMs = (int) roundedDurationMs;

                    // Keyed by the device's own id, kept in a column separate from this table's
                    // own `id` PK - see Measurement#deviceMeasurementId.
                    Measurement existing = storedByDeviceId.get(deviceId);

                    // participantId and measuredAt are carried over from the stored row, so the
                    // duration is the only thing an upsert could actually change. When it matches,
                    // the write would rewrite the row to what it already is - skipped, because on a
                    // WAL database that is a real commit per row, every 5 seconds, for every finish
                    // recorded so far. The row is still reported back: MeasurementController's
                    // manual device import returns this list to the UI, which must keep listing
                    // everything the device holds, not only what happened to need writing.
                    // duration_ms is NOT NULL (V1__create_participant.sql), so unboxing the
                    // stored value for this comparison cannot NPE.
                    if (existing != null && existing.durationMs() == durationMs) {
                        createdMeasurements.add(existing);
                        continue;
                    }

                    Long existingParticipantId = existing != null ? existing.participantId() : null;
                    LocalDateTime timestamp = existing != null ? existing.measuredAt() : now;

                    Measurement saved = measurementService.upsertByDeviceMeasurementId(deviceId, existingParticipantId, durationMs, timestamp);
                    createdMeasurements.add(saved);
                    // Keeps a second line for the same device id in this same response comparing
                    // against what was just written, exactly as the old per-line lookup did.
                    storedByDeviceId.put(deviceId, saved);
                    LOG.debug("Upserted measurement, device ID {}: {} ms", deviceId, durationMs);

                } catch (NumberFormatException e) {
                    LOG.warn("Could not parse line: {}", trimmedLine);
                } catch (Exception e) {
                    LOG.warn("Error processing line '{}': {}", trimmedLine, e.getMessage());
                }
            }
        });

        LOG.info("Successfully imported {} measurements", createdMeasurements.size());
        return createdMeasurements;
    }

    @Override
    public boolean resetDevice() {

        String resetUrl = resetUrl();

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

    @Override
    public boolean continuousMode(boolean enableContinuousMode) {

        try {

            LOG.info("set continuousMode: {}", enableContinuousMode);

            if (enableContinuousMode) {
                httpClient.toBlocking().exchange(HttpRequest.GET(enableContinuousModeUrl()));
            } else {
                httpClient.toBlocking().exchange(HttpRequest.GET(disableContinuousModeUrl()));
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

    @Override
    public String getDeviceStatus() {

        String statusUrl = statusUrl();

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

    @Override
    public boolean discardOldestStart() {

        String discardUrl = discardUrl();

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

    @Override
    public boolean isDeviceConnected() {

        String pingUrl = pingUrl();

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
