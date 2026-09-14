package x.timecontrol.services;

import x.timecontrol.entities.Measurement;
import x.timecontrol.entities.TimingProviderType;

import java.util.List;
import java.util.Map;

/**
 * One implementation per supported timing device/provider. {@link TimingProviderRegistry} picks
 * the active one based on the persisted app_settings selection and delegates every call to it, so
 * {@link DataImportScheduler} and the measurement/race controllers never depend on a concrete
 * provider directly.
 */
public interface TimingDataImporter {

    /**
     * Shared message for the 409 controllers return when {@link TimingProviderRegistry#getActiveImporter()}
     * is empty (no timing device configured) - one place so it can't drift between endpoints/controllers.
     */
    String NOT_CONFIGURED_MESSAGE = "Keine Zeitmessung konfiguriert";

    TimingProviderType type();

    /**
     * Applies the provider-specific config saved for this provider in app_settings (device
     * URL/COM-port/baud rate/...), overlaid on top of this importer's built-in defaults. Called
     * before every use, so a config change takes effect on the next poll/action without a restart.
     *
     * @param config provider-specific key/value overrides; never null, empty if none are set
     */
    default void configure(Map<String, String> config) {
        // no-op for providers without configurable overrides
    }

    List<Measurement> importDataFromDevice();

    boolean resetDevice();

    boolean continuousMode(boolean enableContinuousMode);

    String getDeviceStatus();

    boolean discardOldestStart();

    boolean isDeviceConnected();
}
