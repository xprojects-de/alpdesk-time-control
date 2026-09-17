package x.timecontrol.services;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import jakarta.inject.Singleton;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Category;
import x.timecontrol.entities.Gender;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Person;
import x.timecontrol.entities.Race;
import x.timecontrol.entities.ResultUnit;
import x.timecontrol.entities.StartGroupTemplate;
import x.timecontrol.entities.Team;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * PDF-agnostic ranking/results data building shared by {@link PdfExportService} and
 * {@code RaceLiveService}: filters participants by gender/age-group/category, ranks them via
 * {@link RankingService}, and formats the result into display-ready rows. Kept as the single place
 * both callers filter/format a race's results so a PDF export and the live results page can never
 * silently drift apart on who counts in which view.
 */
@Singleton
public class RankingViewService {

    /**
     * Pseudo category id used to group participants without an assigned category into their own
     * "Ohne Kategorie" section in by-category views, instead of silently dropping them.
     */
    public static final long NO_CATEGORY_ID = -1L;
    public static final Category NO_CATEGORY = new Category(NO_CATEGORY_ID, "Ohne Kategorie");

    private final AgeGroupService ageGroupService;
    private final CategoryService categoryService;
    private final TeamService teamService;
    private final PersonService personService;
    private final RankingService rankingService;
    private final StartGroupTemplateService startGroupTemplateService;

    public RankingViewService(AgeGroupService ageGroupService, CategoryService categoryService, TeamService teamService, PersonService personService, RankingService rankingService, StartGroupTemplateService startGroupTemplateService) {
        this.ageGroupService = ageGroupService;
        this.categoryService = categoryService;
        this.teamService = teamService;
        this.personService = personService;
        this.rankingService = rankingService;
        this.startGroupTemplateService = startGroupTemplateService;
    }

    @Serdeable
    public record RankingEntry(int place, String name, String externalId, String ageGroup, String team,
                                String valueFormatted, String penaltyFormatted, String totalFormatted,
                                String diffFormatted, boolean hasPenalty) {
    }

    @Serdeable
    public record StartListEntry(String raceNumber, String name, String birthYear, String gender,
                                  String ageGroup, String team, String category, boolean hasCategory,
                                  String startGroupLabel, @Nullable String startGroupColor, boolean hasStartGroup) {
    }

    /**
     * One row of the "nicht gewertet" list - participants/persons excluded from a ranking for
     * lacking a valid result. {@code position} is this row's position within the list itself, not
     * a race number. {@code status} is the actual reason ("DSQ"/"DNF"/"DNS" - see
     * {@link RankingService#dnsStatusLabel(Participant)}), not always literally "DNS".
     */
    @Serdeable
    public record DnsRow(int position, String name, String externalId, String ageGroup, String team, String status) {
    }

    public record PersonTeamLookup(Map<Long, Person> personsById, Map<Long, Team> teamsById) {
    }

    private record ParticipantWithPerson(Participant participant, Person person) {
    }

    public PersonTeamLookup loadPersonTeamLookup(Iterable<Participant> participants) {
        List<Participant> list = StreamSupport.stream(participants.spliterator(), false).toList();
        return new PersonTeamLookup(loadPersonsByIds(list, Participant::personId), loadTeamsByIds(list, Participant::teamId));
    }

    /**
     * Batch-loads the {@link Person}s referenced by a list of participants in a single query,
     * instead of one {@code personService.findById()} per participant - see the equivalent pattern
     * already used by {@code ParticipantService.toResponses()}.
     */
    public Map<Long, Person> loadPersonsByIds(List<Participant> participants, Function<Participant, Long> idFn) {
        Set<Long> ids = participants.stream().map(idFn).filter(Objects::nonNull).collect(Collectors.toSet());
        return personService.findByIds(ids);
    }

    public Map<Long, Team> loadTeamsByIds(List<Participant> participants, Function<Participant, Long> idFn) {
        Set<Long> ids = participants.stream().map(idFn).filter(Objects::nonNull).collect(Collectors.toSet());
        return teamService.findByIds(ids);
    }

    public Map<Long, Category> loadCategoriesByIds(List<Participant> participants, Function<Participant, Long> idFn) {
        Set<Long> ids = participants.stream().map(idFn).filter(Objects::nonNull).collect(Collectors.toSet());
        return categoryService.findByIds(ids);
    }

    /**
     * Loads all age groups once per view so per-participant age-group lookups (potentially
     * thousands for a large by-age-group/category view) don't each hit the database.
     */
    public List<AgeGroup> loadAgeGroups() {
        return StreamSupport.stream(ageGroupService.findAll().spliterator(), false).toList();
    }

    public List<Category> sortedCategories() {
        return categoryService.sortedByName();
    }

    /**
     * Sorted categories plus a synthetic "Ohne Kategorie" entry for participants without an
     * assigned category, so they get their own section instead of being silently omitted from
     * by-category views.
     */
    public List<Category> sortedCategoriesWithNoCategory() {
        List<Category> categories = new ArrayList<>(sortedCategories());
        categories.add(NO_CATEGORY);
        return categories;
    }

    /**
     * Age group names, sorted youngest-first (by birthYearTo descending) - the order every
     * by-age-group view iterates sections in. Age groups sharing the same birthYearTo (e.g. a
     * same-Jahrgang "U14m"/"U14w" pair) are tie-broken by gender, female before male, matching
     * {@link ParticipantService#groupByAgeGroup} and the female-before-male convention used
     * throughout {@link PdfExportService} - without this, two same-year different-gender age
     * groups would print in whatever order {@code ageGroupService.findAll()} happens to return.
     */
    public List<String> uniqueAgeGroupNamesYoungestFirst() {
        return StreamSupport.stream(ageGroupService.findAll().spliterator(), false)
                .sorted(Comparator.comparing(AgeGroup::birthYearTo).reversed()
                        .thenComparing(AgeGroup::gender))
                .map(AgeGroup::name)
                .distinct()
                .toList();
    }

    public String formatName(Person person) {
        if (person == null) {
            return "Unbekannt";
        }
        return personService.displayName(person);
    }

    public String genderLabel(Gender gender) {
        return gender == Gender.MALE ? "männlich" : "weiblich";
    }

    public String calculateAgeGroup(LocalDate birthDate, Gender gender, List<AgeGroup> ageGroups) {
        return ageGroupService.calculateAgeGroupName(birthDate, gender, ageGroups);
    }

    /**
     * Sorted by each participant's {@link Participant#effectiveStartOrder()} - their derived start
     * position when the race has one (e.g. a slalom run 2 whose order was built from run 1's
     * results, so bib 30 can be listed above bib 5), otherwise plain race-number order. A
     * participant excluded from the start order entirely (DSQ/DNF/DNS with no derived position)
     * isn't listed - they're not starting.
     */
    public List<StartListEntry> createStartListEntries(Iterable<Participant> participants) {
        List<Participant> sorted = StreamSupport.stream(participants.spliterator(), false)
                .filter(p -> p.effectiveStartOrder() != null)
                // requireNonNull: just filtered for this, but the comparator calls the @Nullable
                // method again independently, so state the invariant explicitly.
                .sorted(Comparator.comparing(p -> Objects.requireNonNull(p.effectiveStartOrder())))
                .toList();
        List<AgeGroup> ageGroups = loadAgeGroups();
        Map<Long, Person> personsById = loadPersonsByIds(sorted, Participant::personId);
        Map<Long, Team> teamsById = loadTeamsByIds(sorted, Participant::teamId);
        Map<Long, Category> categoriesById = loadCategoriesByIds(sorted, Participant::categoryId);
        Set<Long> startGroupIds = sorted.stream().map(Participant::startGroupId).filter(Objects::nonNull).collect(Collectors.toSet());
        Map<Long, StartGroupTemplate> startGroupsById = startGroupTemplateService.findByIds(startGroupIds);

        List<StartListEntry> entries = new ArrayList<>();
        for (Participant p : sorted) {
            Person person = personsById.get(p.personId());
            String raceNumber = p.raceNumber() != null ? String.valueOf(p.raceNumber()) : "-";
            String name = formatName(person);
            String birthYear = person != null && person.birthDate() != null ? String.valueOf(person.birthDate().getYear()) : "-";
            String gender = person != null ? genderLabel(person.gender()) : "-";
            String ageGroup = person != null ? calculateAgeGroup(person.birthDate(), person.gender(), ageGroups) : "Unbekannt";
            String team = p.teamId() != null
                    ? Optional.ofNullable(teamsById.get(p.teamId())).map(Team::name).orElse("-")
                    : "-";
            String category = p.categoryId() != null
                    ? Optional.ofNullable(categoriesById.get(p.categoryId())).map(Category::name).orElse("-")
                    : "-";
            StartGroupTemplate startGroup = p.startGroupId() != null ? startGroupsById.get(p.startGroupId()) : null;
            String startGroupLabel = startGroup != null ? startGroup.label() : "-";
            String startGroupColor = startGroup != null ? startGroup.color() : null;

            entries.add(new StartListEntry(raceNumber, name, birthYear, gender, ageGroup, team, category, p.categoryId() != null,
                    startGroupLabel, startGroupColor, startGroup != null));
        }
        return entries;
    }

    public List<RankingEntry> createRankingEntriesFromParticipants(Iterable<Participant> participants,
                                                                     Race race,
                                                                     Gender filterGender,
                                                                     String filterAgeGroup,
                                                                     Long filterCategoryId,
                                                                     PersonTeamLookup lookup) {
        List<AgeGroup> ageGroups = loadAgeGroups();

        // Only keep participants that have a measured result, resolving each one's Person from
        // the pre-loaded lookup instead of a per-participant query
        List<ParticipantWithPerson> validParticipants = StreamSupport.stream(participants.spliterator(), false)
                .filter(p -> rankingService.adjustedValue(race, p) != null)
                .map(p -> new ParticipantWithPerson(p, lookup.personsById().get(p.personId())))
                .toList();

        // Apply gender, age group and category filters
        if (filterGender != null || filterAgeGroup != null || filterCategoryId != null) {
            validParticipants = validParticipants.stream()
                    .filter(pwp -> matchesCategoryFilters(pwp, filterGender, filterAgeGroup, filterCategoryId, ageGroups))
                    .toList();
        }

        // Sort by the race's result (fastest/best first, respecting sort direction + penalty)
        List<ParticipantWithPerson> sortedParticipants = validParticipants.stream()
                .sorted(Comparator.comparing(pwp -> pwp.participant(), rankingService.comparator(race)))
                .toList();

        // Standard competition ranking (1224): tied participants share a place and the next
        // distinct value's place is skipped accordingly, matching the app's other rankings.
        Map<Long, Integer> places = rankingService.computePlaces(race,
                validParticipants.stream().map(ParticipantWithPerson::participant).toList());

        // Create ranking entries with place and difference to the leader of this ranking
        List<RankingEntry> entries = new ArrayList<>();
        Integer leaderDisplayValue = sortedParticipants.isEmpty() ? null
                : rankingService.roundForDisplay(race, rankingService.adjustedValue(race, sortedParticipants.getFirst().participant()));

        for (int i = 0; i < sortedParticipants.size(); i++) {
            Participant p = sortedParticipants.get(i).participant();
            Person person = sortedParticipants.get(i).person();

            String name = formatName(person);
            String ageGroup = person != null ? calculateAgeGroup(person.birthDate(), person.gender(), ageGroups) : "Unbekannt";
            String team = p.teamId() != null
                    ? Optional.ofNullable(lookup.teamsById().get(p.teamId())).map(Team::name).orElse("-")
                    : "-";
            Integer adjustedValue = rankingService.adjustedValue(race, p);
            // Diffed from the already-rounded display value (not the raw one) so "Rückstand" always
            // equals the difference of the two printed totals - see RankingService#roundForDisplay.
            Integer diff = (i > 0) ? rankingService.roundForDisplay(race, adjustedValue) - leaderDisplayValue : null;

            entries.add(new RankingEntry(
                    places.get(p.id()),
                    name,
                    person != null ? person.externalId() : null,
                    ageGroup,
                    team,
                    formatValue(race, p.durationMs()),
                    formatValue(race, p.penalty()),
                    formatValue(race, adjustedValue),
                    diff != null ? (diff >= 0 ? "+" : "-") + formatValue(race, Math.abs(diff)) : "-",
                    p.penalty() != null && p.penalty() != 0
            ));
        }

        return entries;
    }

    /**
     * Gender/age-group/category filter used to scope the scored ranking entries in
     * {@link #createRankingEntriesFromParticipants}. Not used for the "nicht gewertet" (DNS) rows in
     * {@link #createDnsRows} - that list is deliberately unfiltered, see its own doc comment.
     */
    private boolean matchesCategoryFilters(ParticipantWithPerson pwp, Gender filterGender, String filterAgeGroup,
                                            Long filterCategoryId, List<AgeGroup> ageGroups) {
        Participant p = pwp.participant();
        Person person = pwp.person();

        if (filterGender != null && (person == null || person.gender() != filterGender)) {
            return false;
        }

        if (filterAgeGroup != null) {
            String ageGroup = person != null ? calculateAgeGroup(person.birthDate(), person.gender(), ageGroups) : "Unbekannt";
            if (!filterAgeGroup.equalsIgnoreCase(ageGroup)) {
                return false;
            }
        }

        if (filterCategoryId != null) {
            if (filterCategoryId == NO_CATEGORY_ID) {
                if (p.categoryId() != null) {
                    return false;
                }
            } else if (!filterCategoryId.equals(p.categoryId())) {
                return false;
            }
        }

        return true;
    }

    /**
     * The complement of {@link #createRankingEntriesFromParticipants}'s "has a measured result"
     * filter: every participant of the race without a valid result, listed as "nicht gewertet" (DNS).
     * Deliberately not scoped by gender/age-group/category the way the ranking above it is - one DNS
     * list per race, shown as-is regardless of which category is being viewed.
     */
    public List<DnsRow> createDnsRows(Iterable<Participant> participants, Race race, PersonTeamLookup lookup) {
        List<AgeGroup> ageGroups = loadAgeGroups();

        List<ParticipantWithPerson> notScored = StreamSupport.stream(participants.spliterator(), false)
                .filter(p -> rankingService.adjustedValue(race, p) == null)
                .map(p -> new ParticipantWithPerson(p, lookup.personsById().get(p.personId())))
                .toList();

        notScored = notScored.stream()
                .sorted(Comparator.<ParticipantWithPerson, String>comparing(pwp -> pwp.person() != null ? pwp.person().lastName() : "", String.CASE_INSENSITIVE_ORDER)
                        .thenComparing(pwp -> pwp.person() != null ? pwp.person().firstName() : "", String.CASE_INSENSITIVE_ORDER))
                .toList();

        List<DnsRow> rows = new ArrayList<>();
        for (int i = 0; i < notScored.size(); i++) {
            Participant p = notScored.get(i).participant();
            Person person = notScored.get(i).person();
            String team = p.teamId() != null
                    ? Optional.ofNullable(lookup.teamsById().get(p.teamId())).map(Team::name).orElse("-")
                    : "-";
            String ageGroup = person != null ? calculateAgeGroup(person.birthDate(), person.gender(), ageGroups) : "Unbekannt";
            rows.add(new DnsRow(i + 1, formatName(person), person != null ? person.externalId() : null, ageGroup, team,
                    rankingService.dnsStatusLabel(p)));
        }
        return rows;
    }

    public static String formatTime(Integer timeMs) {
        if (timeMs == null) return "-";

        // Round to the nearest 10ms (hundredth of a second) before splitting into
        // minutes/seconds/hundredths, rather than truncating - a thousandths digit >= 5 rounds the
        // hundredths up, otherwise down, and a carry (e.g. 0:00.996 -> 0:01.00) falls out correctly
        // since it's applied to the total milliseconds first.
        int roundedMs = Math.round(timeMs / 10.0f) * 10;
        int totalSeconds = roundedMs / 1000;
        int minutes = totalSeconds / 60;
        int seconds = totalSeconds % 60;
        int hundredths = (roundedMs % 1000) / 10;

        return String.format("%d:%02d.%02d", minutes, seconds, hundredths);
    }

    /**
     * Formats a raw/adjusted result value according to the race's unit: time (mm:ss.SS) or a
     * generic decimal value with the race's unit label (e.g. "30.00 m"), stored as hundredths.
     */
    public static String formatValue(Race race, Integer value) {
        if (value == null) {
            return "-";
        }
        if (race.resultUnit() == ResultUnit.POINTS) {
            String label = race.resultUnitLabel() != null && !race.resultUnitLabel().isBlank()
                    ? " " + race.resultUnitLabel()
                    : "";
            return String.format("%.2f%s", value / 100.0, label);
        }
        return formatTime(value);
    }
}
