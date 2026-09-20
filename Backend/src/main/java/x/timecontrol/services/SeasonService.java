package x.timecontrol.services;

import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import x.timecontrol.entities.AppSettings;
import x.timecontrol.entities.Race;

import java.time.LocalDate;
import java.time.MonthDay;
import java.util.Collection;
import java.util.SortedSet;
import java.util.TreeSet;
import java.util.stream.Collectors;

/**
 * Decides which season a date - and with it a race - belongs to.
 * <p>
 * Age groups are configured per season ({@link x.timecontrol.entities.AgeGroup#seasonYear}), because
 * an age class rolls over every year: "U14" covers birth years 2012-2013 in season 2025 and
 * 2013-2014 in season 2026. Since an age group is never stored on the participant but recomputed
 * from birth date/gender on every read, the season always has to come from the race being looked at
 * - never from the current wall-clock year. Otherwise re-exporting last season's result PDF after
 * the rollover would print this season's classes.
 * <p>
 * By default a season is a plain calendar year. A club whose season spans the turn of the year - a
 * ski winter, where a December and a January race belong to the same season - can move the boundary
 * (e.g. to 1 July) in the settings; a race before the boundary then counts towards the previous
 * season year, so 2025-12-14 and 2026-01-11 both resolve to season 2025.
 */
@Singleton
public class SeasonService {

    private static final Logger LOG = LoggerFactory.getLogger(SeasonService.class);

    /** Season boundary a fresh installation starts with: a season is exactly the calendar year. */
    public static final MonthDay DEFAULT_SEASON_START = MonthDay.of(1, 1);

    private final SettingsService settingsService;

    public SeasonService(SettingsService settingsService) {
        this.settingsService = settingsService;
    }

    /**
     * The configured season boundary, falling back to {@link #DEFAULT_SEASON_START} if the stored
     * month/day are not a valid combination (e.g. 31 June). The settings endpoint rejects those, so
     * this is the guard for a hand-edited database rather than a reachable path from the UI.
     * 29 February is accepted and resolves to 28 February in a non-leap year - {@link MonthDay}
     * handles that itself in {@link MonthDay#atYear}.
     */
    public MonthDay seasonStart() {
        AppSettings settings = settingsService.getSettings();
        return toMonthDay(settings.seasonStartMonth(), settings.seasonStartDay());
    }

    /**
     * @return the season year {@code date} falls into: its own year when it is on or after the
     *         season boundary, the year before otherwise. With the default 1 January boundary this
     *         is always {@code date.getYear()}.
     */
    public int seasonOf(LocalDate date) {
        return seasonOf(date, seasonStart());
    }

    /**
     * {@link #seasonOf(LocalDate)} against an already-resolved boundary - for callers resolving
     * many dates at once (a Gaudi-Modus spanning several races), so the settings row is read once
     * instead of once per date.
     */
    public int seasonOf(LocalDate date, MonthDay seasonStart) {
        LocalDate boundary = seasonStart.atYear(date.getYear());
        return date.isBefore(boundary) ? date.getYear() - 1 : date.getYear();
    }

    /**
     * The season a race's results are to be categorised in - the value every age-group lookup for
     * that race is scoped to.
     */
    public int seasonOf(Race race) {
        return seasonOf(race.date());
    }

    /**
     * The one season a set of races belongs to - for Gaudi-Modus, which combines results across
     * several races and therefore has no single race to take the season from.
     * <p>
     * Deliberately strict: a combination spanning two seasons is genuinely ambiguous, because a
     * participant moves up a class between them (someone in U14 in season 2025 is in U16 in 2026),
     * so there is no correct answer to which class to score them in. Rather than silently picking
     * one and producing a subtly wrong combined ranking, this refuses - in practice a Gaudi-Modus
     * never spans seasons, so hitting this means the races were linked by mistake.
     *
     * @throws IllegalStateException if the races fall into more than one season, or the collection
     *                               is empty
     */
    public int seasonOfAll(Collection<Race> races) {
        MonthDay seasonStart = seasonStart();
        SortedSet<Integer> seasons = races.stream()
                .map(race -> seasonOf(race.date(), seasonStart))
                .collect(Collectors.toCollection(TreeSet::new));
        if (seasons.isEmpty()) {
            throw new IllegalStateException("Cannot determine a season without any races");
        }
        if (seasons.size() > 1) {
            throw new IllegalStateException("These races span several seasons ("
                    + seasons.stream().map(String::valueOf).collect(Collectors.joining(", "))
                    + "). Age classes are configured per season and a participant changes class between them, "
                    + "so a combined ranking across seasons has no defined age group.");
        }
        return seasons.first();
    }

    /** The season today falls into - the default preselected when configuring age groups. */
    public int currentSeason() {
        return seasonOf(LocalDate.now());
    }

    /**
     * The inclusive date range a season year covers, for displaying what a season actually means
     * with the configured boundary (e.g. season 2025 = 2025-07-01 - 2026-06-30).
     */
    public LocalDate seasonStartDate(int seasonYear) {
        return seasonStart().atYear(seasonYear);
    }

    public LocalDate seasonEndDate(int seasonYear) {
        return seasonStartDate(seasonYear + 1).minusDays(1);
    }

    private MonthDay toMonthDay(Integer month, Integer day) {
        if (month == null || day == null) {
            return DEFAULT_SEASON_START;
        }
        try {
            return MonthDay.of(month, day);
        } catch (RuntimeException e) {
            LOG.warn("Stored season start {}-{} is not a valid month/day, falling back to {}",
                    month, day, DEFAULT_SEASON_START);
            return DEFAULT_SEASON_START;
        }
    }
}
