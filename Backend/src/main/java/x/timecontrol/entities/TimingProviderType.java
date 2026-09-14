package x.timecontrol.entities;

/**
 * Add a new value here plus a {@link x.timecontrol.services.TimingDataImporter} implementation
 * that returns it from {@code type()} to plug in a new timing device - no other code needs to
 * change. Also add the value to the CHECK constraint on app_settings.timing_provider_type in a new
 * migration.
 */
public enum TimingProviderType {
    /**
     * No timing device configured - the app is used for evaluation/results only. Not backed by a
     * {@link x.timecontrol.services.TimingDataImporter} bean; handled explicitly in
     * {@link x.timecontrol.services.TimingProviderRegistry#getActiveImporter()}.
     */
    NONE,
    ALPDESK_TIMECONTROL
}
