package x.timecontrol.services;

import io.micronaut.context.event.ApplicationEventListener;
import io.micronaut.core.annotation.NonNull;
import io.micronaut.runtime.server.event.ServerStartupEvent;
import jakarta.annotation.PreDestroy;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import x.timecontrol.entities.AppSettings;
import x.timecontrol.entities.TimingProviderType;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

/**
 * Owns the connection of the selected {@link StreamingTimingImporter}: started when the app comes
 * up, restarted when the operator picks a different provider or changes its config, stopped on
 * shutdown.
 * <p>
 * A polling provider needs none of this - {@link DataImportScheduler} simply asks it every 5s, and
 * a config change is picked up on the next poll. A streaming provider holds a real connection, so
 * somebody has to decide when it is opened and closed; doing that per request (the way
 * {@link TimingProviderRegistry} re-applies config on every call) would mean reconnecting a
 * WebSocket or reopening a serial port several times a second.
 * <p>
 * It lives here rather than in {@code listener/} because the startup event is only one of its two
 * triggers - the other is {@link SettingsController} after a provider switch - and the state being
 * triggered belongs to this service either way.
 */
@Singleton
public class TimingProviderLifecycle implements ApplicationEventListener<ServerStartupEvent> {

    private static final Logger LOG = LoggerFactory.getLogger(TimingProviderLifecycle.class);

    private final TimingProviderRegistry registry;
    private final SettingsService settingsService;
    private final TimingEventSink sink;

    // Every provider switch runs here, on one thread, in order. Two things fall out of that: the
    // request that triggered a switch returns immediately instead of waiting for a device to
    // connect (a timing box that is off would otherwise hang the settings dialog for as long as its
    // connect timeout), and two switches can never interleave, however they were triggered. That
    // makes "start() must return promptly" a property of this class rather than a promise every
    // future provider has to keep.
    private final Executor switcher;
    private final ExecutorService ownedSwitcher;

    // Guarded by this instance's monitor. The switcher above already serializes the switches
    // themselves; the monitor additionally covers runningProviderType(), which is read from
    // request threads while a switch is in flight.
    private StreamingTimingImporter running;
    private TimingProviderType runningType;
    private Map<String, String> runningConfig;

    @Inject
    public TimingProviderLifecycle(TimingProviderRegistry registry,
                                   SettingsService settingsService,
                                   TimingEventSink sink) {
        this.registry = registry;
        this.settingsService = settingsService;
        this.sink = sink;
        this.ownedSwitcher = Executors.newSingleThreadExecutor(runnable -> {
            Thread thread = new Thread(runnable, "timing-provider-lifecycle");
            thread.setDaemon(true);
            return thread;
        });
        this.switcher = ownedSwitcher;
    }

    /** For tests: runs switches on the calling thread, so a spec can assert right after the call. */
    TimingProviderLifecycle(TimingProviderRegistry registry,
                            SettingsService settingsService,
                            TimingEventSink sink,
                            Executor switcher) {
        this.registry = registry;
        this.settingsService = settingsService;
        this.sink = sink;
        this.ownedSwitcher = null;
        this.switcher = switcher;
    }

    @Override
    public void onApplicationEvent(@NonNull ServerStartupEvent event) {
        syncWithSettings();
    }

    /**
     * Brings the running stream in line with what app_settings currently selects: stops it if the
     * selected provider is NONE, a polling one, or a different streaming one; starts the selected
     * streaming provider if it isn't running yet; restarts it if only its config changed (device
     * hostname, COM port, ...), since {@link TimingDataImporter#configure} on a streaming provider
     * is only honoured before {@link StreamingTimingImporter#start}.
     * <p>
     * Idempotent: called again with unchanged settings it does nothing, so callers don't have to
     * work out whether a change was relevant. Returns as soon as the switch is queued - it happens
     * on this class's own thread (see {@code switcher}), so a provider that fails or is slow to
     * start affects neither the settings request nor application startup; the operator sees such a
     * failure through the device-connection endpoint, which is where they look anyway.
     */
    public void syncWithSettings() {
        switcher.execute(this::applySettings);
    }

    private synchronized void applySettings() {
        AppSettings settings = settingsService.getSettings();
        TimingProviderType type = settings.timingProviderType();
        Map<String, String> config = settingsService.getProviderConfig(settings);

        StreamingTimingImporter selected = registry.findByType(type)
                .filter(StreamingTimingImporter.class::isInstance)
                .map(StreamingTimingImporter.class::cast)
                .orElse(null);

        if (selected == null) {
            stopRunning();
            return;
        }

        if (selected == running && type == runningType && config.equals(runningConfig)) {
            LOG.debug("Timing provider {} already running with unchanged config", type);
            return;
        }

        stopRunning();

        try {
            selected.configure(config);
            selected.start(sink);
            running = selected;
            runningType = type;
            runningConfig = Map.copyOf(config);
            LOG.info("Started streaming timing provider {}", type);
        } catch (Exception e) {
            // Left as not-running on purpose: the next syncWithSettings() (another settings change,
            // or a restart) retries from a known state instead of from a half-started provider.
            running = null;
            runningType = null;
            runningConfig = null;
            LOG.error("Could not start streaming timing provider {}: {}", type, e.getMessage(), e);
        }
    }

    /**
     * Not {@code synchronized}: it waits for an in-flight switch to finish, and that switch holds
     * this instance's monitor - taking it here first would deadlock the shutdown against the very
     * thread it is waiting for.
     */
    @PreDestroy
    public void shutdown() {
        if (ownedSwitcher != null) {
            ownedSwitcher.shutdown();
            try {
                if (!ownedSwitcher.awaitTermination(5, TimeUnit.SECONDS)) {
                    LOG.warn("Timing provider switch still running at shutdown - stopping the device anyway");
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        stopRunningLocked();
    }

    private synchronized void stopRunningLocked() {
        stopRunning();
    }

    private void stopRunning() {
        if (running == null) {
            return;
        }
        TimingProviderType stoppedType = runningType;
        try {
            running.stop();
            LOG.info("Stopped streaming timing provider {}", stoppedType);
        } catch (Exception e) {
            // Swallowed deliberately: this runs right before starting the next provider, and an
            // exception from a provider that is being discarded anyway must not stop that.
            LOG.warn("Error stopping streaming timing provider {}: {}", stoppedType, e.getMessage());
        } finally {
            running = null;
            runningType = null;
            runningConfig = null;
        }
    }

    /** @return the currently running streaming provider's type, or empty if none is running */
    public synchronized Optional<TimingProviderType> runningProviderType() {
        return Optional.ofNullable(runningType);
    }
}
