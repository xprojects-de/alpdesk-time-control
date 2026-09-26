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

    /**
     * The single settings row, cached after the first read and refreshed by every write below.
     * <p>
     * This table is a one-row, rarely-written configuration, but it is now on a hot read path:
     * {@link SeasonService#seasonStart} consults it to resolve a race's season, and the
     * by-age-group/by-category ranking views resolve a season once per printed section - hundreds
     * of times for one page of the public live view, which spectators' browsers poll. Without this,
     * each of those is a round trip to SQLite for a row that cannot have changed in between.
     * <p>
     * Safe to cache because this service is the only writer: {@link AppSettingsRepository} is
     * injected nowhere else, and the app is a single process owning its own database file (see
     * README). Volatile rather than synchronized - a racing reader either sees the old row and
     * re-reads it on the next call, or the null that forces a fresh read; neither can hand out a
     * row that was never in the database.
     */
    private volatile AppSettings cached;

    public SettingsService(AppSettingsRepository repository, ObjectMapper objectMapper) {
        this.repository = repository;
        this.objectMapper = objectMapper;
    }

    public AppSettings getSettings() {
        AppSettings settings = cached;
        if (settings == null) {
            settings = repository.findById(SETTINGS_ID)
                    .orElseThrow(() -> new IllegalStateException("app_settings row is missing - migration V1 should have seeded it"));
            cached = settings;
        }
        return settings;
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
        AppSettings updated = new AppSettings(SETTINGS_ID, type, json, current.seasonStartMonth(), current.seasonStartDay(),
                current.pdfShowRaceNumber(), current.pdfShowBirthYear());
        return store(updated);
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
                current.timingProviderConfig(), seasonStart.getMonthValue(), seasonStart.getDayOfMonth(),
                current.pdfShowRaceNumber(), current.pdfShowBirthYear());
        return store(updated);
    }

    /**
     * Switches the race number ("StNr.") and birth year ("Jg.") columns on or off, each on its own:
     * in the result PDFs (a single race's and the Gaudi-Modus ones, see {@link PdfExportService})
     * and in the public live view ({@link RaceLiveService}). Takes effect with the next export or
     * live request.
     */
    public AppSettings updatePdfExport(boolean showRaceNumber, boolean showBirthYear) {
        AppSettings current = getSettings();
        AppSettings updated = new AppSettings(SETTINGS_ID, current.timingProviderType(), current.timingProviderConfig(),
                current.seasonStartMonth(), current.seasonStartDay(), showRaceNumber, showBirthYear);
        return store(updated);
    }

    /**
     * The one place the settings row is written, so it is also the one place {@link #cached} has to
     * be kept in step. Every mutator goes through here rather than calling the repository directly -
     * a write that forgot to update the cache would serve the old boundary until the next restart,
     * and the operator would see their season change simply not take effect.
     */
    private AppSettings store(AppSettings settings) {
        AppSettings persisted = repository.update(settings);
        cached = persisted;
        return persisted;
    }
}
