package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.entities.AppSettings;
import x.timecontrol.entities.TimingProviderType;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
     * Resolves the currently selected importer and re-applies its saved config. Config is
     * re-applied on every call rather than cached, since this is only called a few times a
     * second (scheduler tick, or a manual controller action) and it keeps a settings change
     * effective immediately without needing separate cache-invalidation logic.
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
        importer.configure(settingsService.getProviderConfig(settings));
        return Optional.of(importer);
    }
}
