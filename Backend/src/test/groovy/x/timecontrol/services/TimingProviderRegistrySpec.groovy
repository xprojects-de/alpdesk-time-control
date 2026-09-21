package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.Measurement
import x.timecontrol.entities.TimingProviderType

/**
 * Which provider the rest of the app gets, and - the part that is easy to get wrong once a second
 * transport exists - when its config is (re-)applied.
 */
class TimingProviderRegistrySpec extends Specification {

    SettingsService settingsService = Mock()

    static class FakePolling implements PollingTimingImporter {
        int configureCount = 0

        @Override
        TimingProviderType type() { TimingProviderType.ALPDESK_TIMECONTROL }

        @Override
        void configure(Map<String, String> config) { configureCount++ }

        @Override
        Set<DeviceCapability> capabilities() { Set.of(DeviceCapability.RESET) }

        @Override
        List<Measurement> importDataFromDevice() { [] }

        @Override
        String getDeviceStatus() { "normal" }

        @Override
        boolean isDeviceConnected() { true }
    }

    static class FakeStreaming implements StreamingTimingImporter {
        int configureCount = 0

        @Override
        TimingProviderType type() { TimingProviderType.ALPDESK_TIMECONTROL }

        @Override
        void configure(Map<String, String> config) { configureCount++ }

        @Override
        void start(TimingEventSink sink) {}

        @Override
        void stop() {}

        @Override
        String getDeviceStatus() { "connected" }

        @Override
        boolean isDeviceConnected() { true }
    }

    /** A device that pushes live AND can be asked to hand over everything after a connection drop. */
    static class FakeHybrid implements StreamingTimingImporter, PollingTimingImporter {
        int configureCount = 0

        @Override
        TimingProviderType type() { TimingProviderType.ALPDESK_TIMECONTROL }

        @Override
        void configure(Map<String, String> config) { configureCount++ }

        @Override
        void start(TimingEventSink sink) {}

        @Override
        void stop() {}

        @Override
        List<Measurement> importDataFromDevice() { [] }

        @Override
        String getDeviceStatus() { "connected" }

        @Override
        boolean isDeviceConnected() { true }
    }

    private TimingProviderRegistry registryFor(TimingDataImporter importer, TimingProviderType selected) {
        AppSettings settings = new AppSettings(1L, selected, null, 7, 1)
        settingsService.getSettings() >> settings
        settingsService.getProviderConfig(_) >> [host: "10.0.0.5"]
        new TimingProviderRegistry([importer], settingsService)
    }

    def "a polling provider is re-configured on every resolution, so a settings change lands on the next poll"() {
        given:
        def polling = new FakePolling()
        def registry = registryFor(polling, TimingProviderType.ALPDESK_TIMECONTROL)

        when:
        registry.getActiveImporter()
        registry.getActiveImporter()

        then:
        polling.configureCount == 2
    }

    def "a streaming provider is never re-configured underneath its open connection"() {
        given:
        def streaming = new FakeStreaming()
        def registry = registryFor(streaming, TimingProviderType.ALPDESK_TIMECONTROL)

        when: "anything resolves the active provider while a race is running - a status poll, say"
        registry.getActiveImporter()
        registry.getActiveImporter()

        then: "config is applied by TimingProviderLifecycle before start(), and only there"
        streaming.configureCount == 0
    }

    def "only a polling provider answers getActivePollingImporter"() {
        expect:
        registryFor(new FakePolling(), TimingProviderType.ALPDESK_TIMECONTROL).getActivePollingImporter().present
        !registryFor(new FakeStreaming(), TimingProviderType.ALPDESK_TIMECONTROL).getActivePollingImporter().present
    }

    def "NONE resolves to no provider, no capabilities and no manual import"() {
        given:
        def registry = registryFor(new FakePolling(), TimingProviderType.NONE)

        expect:
        registry.getActiveImporter().empty
        registry.activeCapabilities().isEmpty()
        !registry.activeSupportsManualImport()
    }

    def "a device that pushes AND can be asked is not re-configured under its open connection"() {
        given:
        def hybrid = new FakeHybrid()
        def registry = registryFor(hybrid, TimingProviderType.ALPDESK_TIMECONTROL)

        when:
        registry.getActiveImporter()

        then: "it is a stream first - config belongs to TimingProviderLifecycle, before start()"
        hybrid.configureCount == 0
    }

    def "a device that pushes AND can be asked stays available for a deliberate pull"() {
        given:
        def registry = registryFor(new FakeHybrid(), TimingProviderType.ALPDESK_TIMECONTROL)

        expect: "an operator's manual import and the safety pull before a reset can still use it"
        registry.getActivePollingImporter().present
        registry.activeSupportsManualImport()

        and: "but the 5s background poll leaves it alone - it already delivers live"
        registry.getActiveScheduledPollImporter().empty
    }

    def "a pull-only device is driven by the background poll"() {
        given:
        def registry = registryFor(new FakePolling(), TimingProviderType.ALPDESK_TIMECONTROL)

        expect:
        registry.getActiveScheduledPollImporter().present
    }

    def "capabilities come from the active provider"() {
        expect:
        registryFor(new FakePolling(), TimingProviderType.ALPDESK_TIMECONTROL).activeCapabilities() == Set.of(DeviceCapability.RESET)
    }

    def "a selection this build has no bean for leaves the settings page usable"() {
        given: "app_settings names a provider whose bean is missing - e.g. an unmet @Requires"
        AppSettings settings = new AppSettings(1L, TimingProviderType.ALPDESK_TIMECONTROL, null, 7, 1)
        settingsService.getSettings() >> settings
        settingsService.getProviderConfig(_) >> [:]
        def registry = new TimingProviderRegistry([], settingsService)

        when: "the settings endpoint builds its response"
        def capabilities = registry.activeCapabilities()
        def manualImport = registry.activeSupportsManualImport()

        then: "no exception: a 500 here would take away the only page where the operator can"
        // switch back to NONE - i.e. the only way out of exactly this state
        capabilities.isEmpty()
        !manualImport

        when: "the provider is actually used, rather than just described"
        registry.getActiveImporter()

        then: "that still fails loudly - it is a real misconfiguration"
        thrown(IllegalStateException)
    }

    def "describing capabilities does not re-configure the provider"() {
        given:
        def polling = new FakePolling()
        def registry = registryFor(polling, TimingProviderType.ALPDESK_TIMECONTROL)

        when: "the settings page is opened - a pure question about what the device can do"
        registry.activeCapabilities()
        registry.activeSupportsManualImport()

        then: "no side effect on the device's configuration"
        polling.configureCount == 0
    }

    def "a declared capability with no implementation fails loudly instead of reporting a device error"() {
        given: "FakePolling declares RESET but never overrides resetDevice()"
        def polling = new FakePolling()

        when:
        polling.resetDevice()

        then: "not a silent false, which the operator would read as 'the device refused'"
        def e = thrown(UnsupportedOperationException)
        e.message.contains("declares RESET")
    }
}
