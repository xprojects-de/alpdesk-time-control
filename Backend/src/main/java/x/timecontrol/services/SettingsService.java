package x.timecontrol.services;

import io.micronaut.core.type.Argument;
import io.micronaut.serde.ObjectMapper;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import x.timecontrol.entities.AppSettings;
import x.timecontrol.entities.TimingProviderType;
import x.timecontrol.repositories.AppSettingsRepository;

import java.time.MonthDay;
import java.util.Map;

@Singleton
public class SettingsService {

    private static final Logger LOG = LoggerFactory.getLogger(SettingsService.class);

    // app_settings is a single-row table (seeded by migration V1); this is that row's fixed id.
    private static final Long SETTINGS_ID = 1L;

    private static final Argument<Map<String, String>> STRING_MAP = Argument.mapOf(String.class, String.class);

    private final AppSettingsRepository repository;
    private final ObjectMapper objectMapper;

    public SettingsService(AppSettingsRepository repository, ObjectMapper objectMapper) {
        this.repository = repository;
        this.objectMapper = objectMapper;
    }

    public AppSettings getSettings() {
        return repository.findById(SETTINGS_ID)
                .orElseThrow(() -> new IllegalStateException("app_settings row is missing - migration V1 should have seeded it"));
    }

    public Map<String, String> getProviderConfig(AppSettings settings) {
        String json = settings.timingProviderConfig();
        if (json == null || json.isBlank()) {
            return Map.of();
        }
        try {
            // Typed Argument (not a raw Map.class) so a non-string value in the stored JSON fails
            // right here, inside this try/catch, instead of surfacing later as an unchecked-cast
            // ClassCastException wherever a caller reads a value back out as a String.
            Map<String, String> config = objectMapper.readValue(json, STRING_MAP);
            return config != null ? config : Map.of();
        } catch (Exception e) {
            LOG.warn("Could not parse stored timing provider config, ignoring it: {}", e.getMessage());
            return Map.of();
        }
    }

    public AppSettings updateTimingProvider(TimingProviderType type, Map<String, String> config) {
        String json;
        try {
            json = objectMapper.writeValueAsString(config != null ? config : Map.of());
        } catch (Exception e) {
            throw new IllegalArgumentException("Could not serialize timing provider config: " + e.getMessage(), e);
        }
        AppSettings current = getSettings();
        AppSettings updated = new AppSettings(SETTINGS_ID, type, json, current.seasonStartMonth(), current.seasonStartDay());
        return repository.update(updated);
    }

    /**
     * Moves the season boundary - which date a season year starts on, and with it which age groups
     * apply to a race (see {@link SeasonService}). Changing it re-assigns existing races to
     * different seasons, so callers are expected to have the operator confirm first.
     *
     * @throws IllegalArgumentException if month/day are not a valid combination, e.g. 31 June -
     *                                  such a boundary would not exist in any year
     */
    public AppSettings updateSeasonStart(MonthDay seasonStart) {
        if (seasonStart == null) {
            throw new IllegalArgumentException("Season start is required");
        }
        AppSettings current = getSettings();
        AppSettings updated = new AppSettings(SETTINGS_ID, current.timingProviderType(),
                current.timingProviderConfig(), seasonStart.getMonthValue(), seasonStart.getDayOfMonth());
        return repository.update(updated);
    }
}
