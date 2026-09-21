package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.TimingProviderType

/**
 * A streaming provider holds a real connection, so the question this answers is when that
 * connection is opened and closed: at startup, on a provider switch, on a config change (which is
 * the only way a running stream picks up a new hostname/port), and never twice.
 */
class TimingProviderLifecycleSpec extends Specification {

    SettingsService settingsService = Mock()
    TimingProviderRegistry registry = Mock()
    TimingEventSink sink = Mock()

    // Switches run on the calling thread here, so each feature can assert right after the call.
    // In production they run on the lifecycle's own single thread - see its constructor.
    TimingProviderLifecycle lifecycle = new TimingProviderLifecycle(registry, settingsService, sink, { it.run() })

    /** Stand-in for a future WebSocket/serial provider - Phase 0 ships no real one yet. */
    static class FakeStreamingImporter implements StreamingTimingImporter {
        Map<String, String> configuredWith
        int startCount = 0
        int stopCount = 0
        boolean failOnStart = false
        boolean resourceOpen = false

        @Override
        TimingProviderType type() { TimingProviderType.ALPDESK_TIMECONTROL }

        @Override
        void configure(Map<String, String> config) { configuredWith = config }

        @Override
        void start(TimingEventSink sink) {
            if (failOnStart) {
                // wie ein echter Provider, der den Port/Socket schon offen hat, wenn er scheitert
                resourceOpen = true
                throw new IllegalStateException("device unreachable")
            }
            resourceOpen = true
            startCount++
        }

        @Override
        void stop() {
            stopCount++
            resourceOpen = false
        }

        @Override
        String getDeviceStatus() { "connected" }

        @Override
        boolean isDeviceConnected() { true }
    }

    FakeStreamingImporter streaming = new FakeStreamingImporter()

    // What app_settings currently says. Read through closures below rather than re-stubbed per
    // selection: a feature that changes the selection mid-test (switch provider, change config)
    // would otherwise keep seeing the first stubbed answer, since Spock matches the earliest
    // declared interaction.
    TimingProviderType selectedType = TimingProviderType.NONE
    Map<String, String> selectedConfig = [:]
    TimingDataImporter selectedImporter = null

    def setup() {
        settingsService.getSettings() >> { new AppSettings(1L, selectedType, null, 7, 1) }
        settingsService.getProviderConfig(_) >> { selectedConfig }
        registry.findByType(_) >> { TimingProviderType type ->
            Optional.ofNullable(type == TimingProviderType.NONE ? null : selectedImporter)
        }
    }

    private void settingsSelect(TimingProviderType type, Map<String, String> config, TimingDataImporter importer) {
        selectedType = type
        selectedConfig = config
        selectedImporter = importer
    }

    def "the selected streaming provider is configured and started"() {
        given:
        settingsSelect(TimingProviderType.ALPDESK_TIMECONTROL, [host: "10.0.0.5"], streaming)

        when:
        lifecycle.syncWithSettings()

        then:
        streaming.configuredWith == [host: "10.0.0.5"]
        streaming.startCount == 1
        lifecycle.runningProviderType().get() == TimingProviderType.ALPDESK_TIMECONTROL
    }

    def "syncing again with unchanged settings does not reconnect"() {
        given:
        settingsSelect(TimingProviderType.ALPDESK_TIMECONTROL, [host: "10.0.0.5"], streaming)
        lifecycle.syncWithSettings()

        when: "e.g. the operator saves the settings dialog again without changing anything"
        lifecycle.syncWithSettings()

        then: "a race is running over this connection - it must not be torn down for nothing"
        streaming.startCount == 1
        streaming.stopCount == 0
    }

    def "a changed config restarts the provider, since configure() is only honoured before start()"() {
        given:
        settingsSelect(TimingProviderType.ALPDESK_TIMECONTROL, [host: "10.0.0.5"], streaming)
        lifecycle.syncWithSettings()

        when:
        settingsSelect(TimingProviderType.ALPDESK_TIMECONTROL, [host: "10.0.0.9"], streaming)
        lifecycle.syncWithSettings()

        then:
        streaming.stopCount == 1
        streaming.startCount == 2
        streaming.configuredWith == [host: "10.0.0.9"]
    }

    def "switching to NONE stops the running stream"() {
        given:
        settingsSelect(TimingProviderType.ALPDESK_TIMECONTROL, [host: "10.0.0.5"], streaming)
        lifecycle.syncWithSettings()

        when:
        settingsSelect(TimingProviderType.NONE, [:], null)
        lifecycle.syncWithSettings()

        then:
        streaming.stopCount == 1
        lifecycle.runningProviderType().empty
    }

    def "a polling provider is left alone - it has no connection to open"() {
        given:
        def polling = Stub(PollingTimingImporter) { type() >> TimingProviderType.ALPDESK_TIMECONTROL }
        settingsSelect(TimingProviderType.ALPDESK_TIMECONTROL, [:], polling)

        when:
        lifecycle.syncWithSettings()

        then:
        lifecycle.runningProviderType().empty
    }

    def "a provider that cannot connect leaves the app running and nothing half-started"() {
        given:
        streaming.failOnStart = true
        settingsSelect(TimingProviderType.ALPDESK_TIMECONTROL, [host: "10.0.0.5"], streaming)

        when: "the device is off/unplugged while the operator saves the settings"
        lifecycle.syncWithSettings()

        then: "no exception reaches the settings request, and the next sync starts from scratch"
        noExceptionThrown()
        lifecycle.runningProviderType().empty
    }

    def "a switch is queued, not run on the caller's thread"() {
        given: "a provider whose start() blocks, as a device that is off would"
        def blocking = new FakeStreamingImporter()
        def gate = new java.util.concurrent.CountDownLatch(1)
        blocking.metaClass.start = { TimingEventSink s -> gate.await(2, java.util.concurrent.TimeUnit.SECONDS) }
        def executor = java.util.concurrent.Executors.newSingleThreadExecutor()
        def async = new TimingProviderLifecycle(registry, settingsService, sink, executor)
        settingsSelect(TimingProviderType.ALPDESK_TIMECONTROL, [host: "10.0.0.5"], blocking)

        when: "the settings request triggers the switch"
        def start = System.nanoTime()
        async.syncWithSettings()
        def elapsedMs = (System.nanoTime() - start) / 1_000_000

        then: "it returns immediately instead of waiting for the device"
        elapsedMs < 500

        cleanup:
        gate.countDown()
        executor.shutdownNow()
    }

    def "a provider that throws after opening its port is closed again"() {
        given: "start() opens the serial port, then fails - the port must not stay open"
        streaming.failOnStart = true
        settingsSelect(TimingProviderType.ALPDESK_TIMECONTROL, [host: "10.0.0.5"], streaming)

        when:
        lifecycle.syncWithSettings()

        then: "otherwise nothing holds a reference to stop it and the next start() hits 'port in use'"
        streaming.stopCount == 1
        !streaming.resourceOpen
        lifecycle.runningProviderType().empty
    }

    def "shutdown does not hang on a switch that is stuck in start()"() {
        given: "a device that is off: start() blocks for the length of its connect timeout"
        def stuck = new FakeStreamingImporter()
        def released = new java.util.concurrent.CountDownLatch(1)
        def entered = new java.util.concurrent.CountDownLatch(1)
        stuck.metaClass.start = { TimingEventSink s ->
            entered.countDown()
            released.await(30, java.util.concurrent.TimeUnit.SECONDS)
        }
        def executor = java.util.concurrent.Executors.newSingleThreadExecutor()
        def async = new TimingProviderLifecycle(registry, settingsService, sink, executor)
        settingsSelect(TimingProviderType.ALPDESK_TIMECONTROL, [host: "10.0.0.5"], stuck)
        async.syncWithSettings()
        entered.await(5, java.util.concurrent.TimeUnit.SECONDS)

        when: "the operator quits the desktop app while the switch is stuck"
        def start = System.nanoTime()
        async.shutdown()
        def elapsedSec = (System.nanoTime() - start) / 1_000_000_000

        then: "it gives up on the lock instead of waiting for the hung switch forever"
        elapsedSec < 4

        cleanup:
        released.countDown()
        executor.shutdownNow()
    }

    def "shutdown closes the connection"() {
        given:
        settingsSelect(TimingProviderType.ALPDESK_TIMECONTROL, [host: "10.0.0.5"], streaming)
        lifecycle.syncWithSettings()

        when:
        lifecycle.shutdown()

        then:
        streaming.stopCount == 1
    }
}
