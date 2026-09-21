package x.timecontrol.services;

import x.timecontrol.entities.TimingProviderType;

import java.util.Map;
import java.util.Set;

/**
 * One implementation per supported timing device/provider. {@link TimingProviderRegistry} picks
 * the active one based on the persisted app_settings selection and delegates every call to it, so
 * {@link DataImportScheduler} and the measurement/race controllers never depend on a concrete
 * provider directly.
 * <p>
 * This interface only covers what every provider has: identity, config, and the optional device
 * commands. How measurements actually arrive is the one sub-interface a provider must also
 * implement: {@link PollingTimingImporter} (this backend asks) or {@link StreamingTimingImporter}
 * (the device pushes).
 */
public interface TimingDataImporter {

    /**
     * Shared message for the 409 controllers return when {@link TimingProviderRegistry#getActiveImporter()}
     * is empty (no timing device configured) - one place so it can't drift between endpoints/controllers.
     */
    String NOT_CONFIGURED_MESSAGE = "Keine Zeitmessung konfiguriert";

    /**
     * Counterpart of {@link #NOT_CONFIGURED_MESSAGE} for a device that IS configured but does not
     * offer the requested command (see {@link DeviceCapability}). German like its sibling: both
     * are rendered verbatim in the same operator-facing dialogs.
     */
    String NOT_SUPPORTED_MESSAGE = "Aktion wird von der konfigurierten Zeitmessung nicht unterstützt";

    TimingProviderType type();

    /**
     * Which optional device commands below this provider actually implements. Anything not listed
     * here is treated by the controllers as "not applicable to this device" rather than as a
     * device error, and the frontend hides the corresponding control.
     */
    default Set<DeviceCapability> capabilities() {
        return Set.of();
    }

    /**
     * Applies the provider-specific config saved for this provider in app_settings (device
     * URL/COM-port/baud rate/...), overlaid on top of this importer's built-in defaults.
     * <p>
     * When it is called differs by transport, and a provider may rely on that:
     * <ul>
     *   <li>{@link PollingTimingImporter}: before every use, so a config change takes effect on the
     *       next poll/action without a restart (see {@link TimingProviderRegistry#getActiveImporter()}).
     *       Since two callers can interleave their configure()+action pairs on different threads, a
     *       polling provider must not keep the configured value in a plain instance field - see
     *       {@link AlpdeskTimeControlDataImportService}.</li>
     *   <li>{@link StreamingTimingImporter}: once, by {@link TimingProviderLifecycle}, immediately
     *       before {@link StreamingTimingImporter#start}, and never while the connection is up - a
     *       changed config is applied by stopping and restarting the provider instead. A plain
     *       field is therefore fine (and a ThreadLocal would be wrong: the value would not be
     *       visible on the provider's own reader/callback thread).</li>
     * </ul>
     *
     * @param config provider-specific key/value overrides; never null, empty if none are set
     */
    default void configure(Map<String, String> config) {
        // no-op for providers without configurable overrides
    }

    /**
     * Human-readable device state for the operator's UI. Providers are free to define their own
     * vocabulary (the Alpdesk controller answers "continuous"/"normal"); null means the device
     * could not be reached.
     */
    String getDeviceStatus();

    boolean isDeviceConnected();

    /**
     * Clears the device's own measurement memory. Only called when this provider declares
     * {@link DeviceCapability#RESET}; the default exists so providers without that capability
     * don't have to stub it.
     *
     * @return false if the device was asked and refused/could not be reached
     * @throws UnsupportedOperationException if this provider declares the capability but forgot to
     *                                       implement the command - see {@link #unsupported}
     */
    default boolean resetDevice() {
        throw unsupported(DeviceCapability.RESET, "resetDevice()");
    }

    /** @see DeviceCapability#CONTINUOUS_MODE */
    default boolean continuousMode(boolean enableContinuousMode) {
        throw unsupported(DeviceCapability.CONTINUOUS_MODE, "continuousMode(boolean)");
    }

    /** @see DeviceCapability#DISCARD_OLDEST_START */
    default boolean discardOldestStart() {
        throw unsupported(DeviceCapability.DISCARD_OLDEST_START, "discardOldestStart()");
    }

    /**
     * Reaching one of the defaults above means a provider declared a capability in
     * {@link #capabilities()} without implementing it - controllers check the capability first, so
     * a provider that doesn't declare it never gets here.
     * <p>
     * Deliberately louder than returning {@code false}: false is this interface's word for "the
     * device was asked and said no", which would surface to the operator as "Failed to reset
     * device. Database was not modified." for a device that was never asked at all - a wrong
     * message they can do nothing about, in the middle of a race. An exception names the bug and
     * the provider instead.
     */
    private UnsupportedOperationException unsupported(DeviceCapability capability, String method) {
        return new UnsupportedOperationException(
                type() + " declares " + capability + " but does not implement " + method);
    }
}
