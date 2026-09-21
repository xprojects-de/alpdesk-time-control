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

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Singleton
public class AlpdeskTimeControlDataImportService implements PollingTimingImporter {

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
    TimingEventSink timingEventSink;

    @Inject
    DeviceImportGate importGate;

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
    public Set<DeviceCapability> capabilities() {
        // This controller offers all of them - it holds the measurements itself, can be switched
        // between continuous and manual triggering, and keeps a start queue.
        return EnumSet.allOf(DeviceCapability.class);
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
        String dataUrl = dataUrl();

        // Read BEFORE the device is asked, not after the answer arrives: if a reset/archive starts
        // while this request is in flight, everything below describes the race that was just
        // archived. Handing the epoch to the sink is what lets it tell that apart from a poll
        // issued after the reset - see DeviceImportGate#currentImportEpoch().
        long requestedAtEpoch = importGate.currentImportEpoch();

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
            return List.of();
        }

        List<TimingEvent> events = parseEvents(response);

        // Everything about what this does to the measurement table - dedup against what is stored,
        // skipping rows that did not change, the pause window around a device reset - lives in the
        // sink, shared with every other provider. This service only speaks the device's protocol.
        List<Measurement> imported = timingEventSink.acceptBatch(events, requestedAtEpoch);

        LOG.info("Successfully imported {} measurements", imported.size());
        return imported;
    }

    /**
     * Parses the device's response body - one {@code <deviceId>,<durationMs>} line per measurement,
     * the device's whole list on every poll, not just what is new. A line that cannot be read is
     * skipped with a warning rather than failing the poll: one garbled line (serial noise, firmware
     * glitch) must not cost the rest of the field's times.
     */
    private List<TimingEvent> parseEvents(String response) {
        List<TimingEvent> events = new ArrayList<>();

        for (String line : response.split("\\r?\\n")) {

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
                // around, possibly landing on a small, plausible-looking positive number that the
                // sink's negative-duration check would never catch.
                if (roundedDurationMs < 0 || roundedDurationMs > Integer.MAX_VALUE) {
                    LOG.warn("Ignoring out-of-range duration from device for ID {}: {} ms", deviceId, roundedDurationMs);
                    continue;
                }

                events.add(TimingEvent.fromDevice(deviceId, (int) roundedDurationMs));

            } catch (NumberFormatException e) {
                LOG.warn("Could not parse line: {}", trimmedLine);
            } catch (Exception e) {
                LOG.warn("Error processing line '{}': {}", trimmedLine, e.getMessage());
            }
        }

        return events;
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
