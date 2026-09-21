package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.entities.AppSettings;
import x.timecontrol.entities.TimingProviderType;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

@Singleton
public class TimingProviderRegistry {

    private final Map<TimingProviderType, TimingDataImporter> importersByType;
    private final SettingsService settingsService;

    public TimingProviderRegistry(List<TimingDataImporter> importers, SettingsService settingsService) {
        this.importersByType = importers.stream()
                .collect(java.util.stream.Collectors.toMap(TimingDataImporter::type, i -> i));
        this.settingsService = settingsService;
    }

    /**
     * @return every selectable provider type: {@link TimingProviderType#NONE} (always selectable,
     * not backed by a bean) plus every {@link TimingProviderType} with a registered
     * {@link TimingDataImporter} bean.
     */
    public List<TimingProviderType> availableTypes() {
        List<TimingProviderType> types = new ArrayList<>();
        types.add(TimingProviderType.NONE);
        types.addAll(importersByType.keySet());
        return types;
    }

    /**
     * Looks a provider up without touching its config or the active selection.
     * {@link TimingProviderLifecycle} uses this to reach the selected streaming provider, which
     * must NOT be re-configured per call the way {@link #getActiveImporter()} does it.
     *
     * @return empty for {@link TimingProviderType#NONE}, for null, and for a type with no
     * registered bean - callers of this one are expected to cope rather than fail
     */
    public Optional<TimingDataImporter> findByType(TimingProviderType type) {
        if (type == null || type == TimingProviderType.NONE) {
            return Optional.empty();
        }
        return Optional.ofNullable(importersByType.get(type));
    }

    /**
     * @return the optional device commands the selected provider offers; empty for NONE, so
     * callers can gate a command without special-casing "no device" separately
     */
    public Set<DeviceCapability> activeCapabilities() {
        return selectedImporter().map(TimingDataImporter::capabilities).orElse(Set.of());
    }

    /**
     * @return whether the selected provider can be asked for data on demand - false for no device
     * and for one that pushes, in both of which cases the UI's "fetch from device" action has
     * nothing to do
     */
    public boolean activeSupportsManualImport() {
        return selectedImporter().filter(PollingTimingImporter.class::isInstance).isPresent();
    }

    /**
     * The selected provider for a pure question about what it <i>can</i> do, as opposed to actually
     * using it. Two deliberate differences from {@link #getActiveImporter()}:
     * <ul>
     *   <li>it does not apply config - describing a device's capabilities must not have the side
     *       effect of re-configuring it, and these are read on every settings request;</li>
     *   <li>it answers "nothing" instead of throwing when app_settings names a provider this build
     *       has no bean for. That answer is what keeps the settings page loading in exactly the
     *       situation where the operator needs it: it is the only place they can select a different
     *       provider and get out of that state again.</li>
     * </ul>
     */
    private Optional<TimingDataImporter> selectedImporter() {
        return findByType(settingsService.getSettings().timingProviderType());
    }

    /**
     * Resolves the currently selected importer and, for a polling provider, re-applies its saved
     * config. Config is re-applied on every call rather than cached, since this is only called a
     * few times a second (scheduler tick, or a manual controller action) and it keeps a settings
     * change effective immediately without needing separate cache-invalidation logic.
     * <p>
     * A {@link StreamingTimingImporter} is deliberately NOT re-configured here: it is configured
     * once by {@link TimingProviderLifecycle} before its connection is opened, and re-applying
     * config underneath a live connection would either do nothing or tear it down mid-race. A
     * config change for a streaming provider takes effect by restarting it - see
     * {@link TimingProviderLifecycle#syncWithSettings()}.
     *
     * @return empty if no timing device is configured ({@link TimingProviderType#NONE})
     * @throws IllegalStateException if app_settings selects a provider type other than NONE with
     *                                no matching {@link TimingDataImporter} bean (should not
     *                                happen in practice: {@link SettingsService} only accepts
     *                                types present in {@link #availableTypes()} - this indicates a
     *                                provider was added without registering its importer bean)
     */
    public Optional<TimingDataImporter> getActiveImporter() {
        AppSettings settings = settingsService.getSettings();
        TimingProviderType type = settings.timingProviderType();
        if (type == TimingProviderType.NONE) {
            return Optional.empty();
        }
        TimingDataImporter importer = importersByType.get(type);
        if (importer == null) {
            throw new IllegalStateException("No TimingDataImporter registered for provider type " + type);
        }
        // Asking "is it NOT a stream" rather than "is it a poller": a provider may be both - a
        // device that pushes live and can also be asked for its whole list after a connection drop.
        // Such a provider still has an open connection that was configured once by
        // TimingProviderLifecycle, and re-applying config underneath it per call would tear it down
        // mid-race.
        if (!(importer instanceof StreamingTimingImporter)) {
            importer.configure(settingsService.getProviderConfig(settings));
        }
        return Optional.of(importer);
    }

    /**
     * The selected importer, if it can be asked for data at all. Used by every caller that pulls
     * on purpose: the manual import endpoint and the safety pull before a device reset/archive.
     * <p>
     * A provider that both pushes and can be asked (live stream plus a "give me everything you
     * have" call, the usual way a device lets a client catch up after a connection drop) is
     * included here - being asked is exactly what that second half is for.
     *
     * @return empty if no device is configured, or if the configured one cannot be asked
     */
    public Optional<PollingTimingImporter> getActivePollingImporter() {
        return getActiveImporter()
                .filter(PollingTimingImporter.class::isInstance)
                .map(PollingTimingImporter.class::cast);
    }

    /**
     * The selected importer, but only if the 5s background poll should actually drive it - i.e. a
     * device that delivers <i>only</i> when asked.
     * <p>
     * A provider that also pushes is deliberately left out: it already delivers everything live, so
     * polling it on a timer would add a periodic full re-read of the device for no new data. Its
     * catch-up call stays available to {@link #getActivePollingImporter()}, where an operator or a
     * reset can trigger it deliberately.
     */
    public Optional<PollingTimingImporter> getActiveScheduledPollImporter() {
        return getActivePollingImporter()
                .filter(importer -> !(importer instanceof StreamingTimingImporter));
    }
}
