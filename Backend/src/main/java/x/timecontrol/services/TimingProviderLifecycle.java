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
import java.util.concurrent.locks.ReentrantLock;

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

    // An explicit lock rather than this instance's monitor, because shutdown() has to be able to
    // give up waiting for it: a provider hanging in start() holds it for as long as its connect
    // timeout lasts, and a monitor cannot be acquired with a timeout. The switcher above already
    // serializes the switches themselves; this additionally covers runningProviderType(), read
    // from request threads while a switch is in flight.
    private final ReentrantLock switchLock = new ReentrantLock();

    // running/runningType are volatile so shutdown() can still close the device when it gave up on
    // the lock, and so runningProviderType() can answer without taking it at all - a caller asking
    // "what is running?" must not be able to hang behind a provider that is stuck connecting.
    private volatile StreamingTimingImporter running;
    private volatile TimingProviderType runningType;
    // Set while configure()/start() are in flight, so shutdown() can close a provider that has
    // already opened its port but is not in `running` yet - which is exactly the state a switch
    // stuck in start() leaves behind.
    private volatile StreamingTimingImporter starting;
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

    private void applySettings() {
        switchLock.lock();
        try {
            applySettingsLocked();
        } finally {
            switchLock.unlock();
        }
    }

    private void applySettingsLocked() {
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

        starting = selected;
        try {
            selected.configure(config);
            selected.start(sink);
            running = selected;
            runningType = type;
            runningConfig = Map.copyOf(config);
            LOG.info("Started streaming timing provider {}", type);
        } catch (Exception e) {
            LOG.error("Could not start streaming timing provider {}: {}", type, e.getMessage(), e);
            // start() may well have opened the serial port / socket / reader thread before it threw.
            // Without this the provider would keep that resource - and keep feeding the sink - with
            // nothing left holding a reference to stop it: the next switch sees running == null and
            // stops nothing, and the next start() of the same device fails with "already in use".
            stopQuietly(selected, type);
            // Left as not-running on purpose: the next syncWithSettings() (another settings change,
            // or a restart) retries from a known state instead of from a half-started provider.
            running = null;
            runningType = null;
            runningConfig = null;
        } finally {
            starting = null;
        }
    }

    /**
     * Closes the running provider on the way down, and - this is the point - never waits
     * indefinitely to do it. A provider hanging in {@code start()} (device off, connect timeout
     * running) holds {@link #switchLock}, so both the wait for the switcher thread and the wait for
     * the lock are bounded. Whatever is still open then is closed without the lock and, failing
     * that, released by the exiting process; an application that will not quit is the worse
     * outcome, and this runs on the way out anyway.
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

        boolean locked = false;
        try {
            locked = switchLock.tryLock(2, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        if (locked) {
            try {
                stopRunning();
            } finally {
                switchLock.unlock();
            }
            return;
        }

        // A switch is still in flight and will not let go. Best effort on the volatile references -
        // stop() is required to tolerate being called on a provider that is already stopped, so
        // closing both costs nothing if one of them is already down. `starting` is the important one
        // here: a switch stuck in start() has already cleared `running`, so without it this branch
        // would close nothing at all while claiming otherwise.
        StreamingTimingImporter inFlight = starting;
        StreamingTimingImporter current = running;
        if (inFlight == null && current == null) {
            LOG.warn("Timing provider switch did not finish - no device left open to close");
            return;
        }
        LOG.warn("Timing provider switch did not finish - closing the device without the switch lock");
        if (inFlight != null) {
            stopQuietly(inFlight, runningType);
        }
        if (current != null && current != inFlight) {
            stopQuietly(current, runningType);
        }
    }

    private void stopRunning() {
        if (running == null) {
            return;
        }
        try {
            stopQuietly(running, runningType);
        } finally {
            running = null;
            runningType = null;
            runningConfig = null;
        }
    }

    /**
     * Stops a provider without letting its failure propagate: every caller is either discarding it
     * anyway (before starting the next one, after a failed start) or on the shutdown path, and in
     * none of those may an exception from a provider being thrown away stop what comes next.
     */
    private void stopQuietly(StreamingTimingImporter importer, TimingProviderType type) {
        try {
            importer.stop();
            LOG.info("Stopped streaming timing provider {}", type);
        } catch (Exception e) {
            LOG.warn("Error stopping streaming timing provider {}: {}", type, e.getMessage());
        }
    }

    /** @return the currently running streaming provider's type, or empty if none is running */
    public Optional<TimingProviderType> runningProviderType() {
        // No lock: both fields it reports on are volatile, and a caller asking what is running must
        // not be able to block behind a provider that is stuck in start() - the same reason
        // shutdown() bounds its own wait.
        return Optional.ofNullable(running == null ? null : runningType);
    }
}
