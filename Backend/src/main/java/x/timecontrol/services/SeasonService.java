package x.timecontrol.services;

import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import x.timecontrol.entities.AppSettings;
import x.timecontrol.entities.Race;

import java.time.LocalDate;
import java.time.MonthDay;
import java.util.Comparator;
import java.util.List;
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
    private final RaceService raceService;

    public SeasonService(SettingsService settingsService, RaceService raceService) {
        this.settingsService = settingsService;
        this.raceService = raceService;
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
     * Which season's age classes a set of races is scored against - for Gaudi-Modus, which combines
     * results across several races and therefore has no single race to take the season from.
     * <p>
     * A combination spanning two seasons is genuinely ambiguous, because a participant moves up a
     * class between them (someone in U14 in season 2025 is in U16 in 2026). It is not, however,
     * something to refuse over: such a combination is a real thing a club does (a ski winter's
     * club championship over a December and a January race with the default 1 January boundary),
     * and failing the whole export mid-event is worse than scoring it against one season. So the
     * first race's season wins - the same race whose name and date already head the exported
     * document, so ranking and export cannot disagree.
     * <p>
     * That the races span seasons at all is surfaced to the operator by the Gaudi-Modus view, which
     * derives it from the races' own {@code seasonYear}; it is not returned here, because no
     * server-side caller acts on it.
     *
     * @param races the Gaudi-Modus' races <em>in their configured order</em>; the first one decides
     * @return the season every age-group lookup for these races is scoped to. An empty set of races
     *         resolves to the current season - there is nothing to categorise, and callers treat it
     *         as "no age groups apply".
     */
    public int scoringSeasonOf(List<Race> races) {
        if (races.isEmpty()) {
            return currentSeason();
        }
        MonthDay seasonStart = seasonStart();
        int resolved = seasonOf(races.getFirst().date(), seasonStart);
        // Debug, not warn: a by-age-group export calls this once per printed section, so a warning
        // here would be dozens of identical lines for one click, and the operator already sees the
        // span in the Gaudi-Modus view. This line is only for reading a log after the fact.
        if (LOG.isDebugEnabled()) {
            SortedSet<Integer> seasons = races.stream()
                    .map(race -> seasonOf(race.date(), seasonStart))
                    .collect(Collectors.toCollection(TreeSet::new));
            if (seasons.size() > 1) {
                LOG.debug("These races span several seasons ({}); age classes are configured per season and a "
                                + "participant changes class between them, so they are scored against season {} "
                                + "(the first race's). Move the season boundary if they should count as one season.",
                        seasons.stream().map(String::valueOf).collect(Collectors.joining(", ")), resolved);
            }
        }
        return resolved;
    }

    /** The season today falls into - the default preselected when configuring age groups. */
    public int currentSeason() {
        return seasonOf(LocalDate.now());
    }

    /**
     * Every season that has at least one race, newest first.
     * <p>
     * Offered alongside the seasons that have age groups configured, because the two differ exactly
     * where it matters: a season with races but no age groups is the one whose results come out
     * "ohne Altersklasse", and it is the one the operator needs to be able to select in order to
     * fix that - it would otherwise not appear in the configuration UI at all. This is also the
     * state every database upgraded to season-scoped age groups starts in for its past seasons
     * (see migration V4).
     */
    public List<Integer> seasonsWithRaces() {
        MonthDay seasonStart = seasonStart();
        return raceService.findDistinctRaceDates().stream()
                .map(date -> seasonOf(date, seasonStart))
                .distinct()
                .sorted(Comparator.reverseOrder())
                .toList();
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
