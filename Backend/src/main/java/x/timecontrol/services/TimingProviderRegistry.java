package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.entities.AppSettings;
import x.timecontrol.entities.TimingProviderType;

import java.util.List;
import java.util.Map;

@Singleton
public class TimingProviderRegistry {

    private final Map<TimingProviderType, TimingDataImporter> importersByType;
    private final SettingsService settingsService;

    public TimingProviderRegistry(List<TimingDataImporter> importers, SettingsService settingsService) {
        this.importersByType = importers.stream()
                .collect(java.util.stream.Collectors.toMap(TimingDataImporter::type, i -> i));
        this.settingsService = settingsService;
    }

    public List<TimingProviderType> availableTypes() {
        return List.copyOf(importersByType.keySet());
    }

    /**
     * Resolves the currently selected importer and re-applies its saved config. Config is
     * re-applied on every call rather than cached, since this is only called a few times a
     * second (scheduler tick, or a manual controller action) and it keeps a settings change
     * effective immediately without needing separate cache-invalidation logic.
     *
     * @throws IllegalStateException if app_settings selects a provider type with no matching
     *                                {@link TimingDataImporter} bean (should not happen in
     *                                practice: {@link SettingsService} only accepts types
     *                                present in {@link #availableTypes()})
     */
    public TimingDataImporter getActiveImporter() {
        AppSettings settings = settingsService.getSettings();
        TimingDataImporter importer = importersByType.get(settings.timingProviderType());
        if (importer == null) {
            throw new IllegalStateException("No TimingDataImporter registered for provider type " + settings.timingProviderType());
        }
        importer.configure(settingsService.getProviderConfig(settings));
        return importer;
    }
}
