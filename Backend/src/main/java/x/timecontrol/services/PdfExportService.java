package x.timecontrol.services;

import jakarta.inject.Singleton;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.font.Standard14Fonts.FontName;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.dto.GaudiTeamMemberResponse;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Category;
import x.timecontrol.entities.Gender;
import x.timecontrol.dto.GaudiRankingLegResponse;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Person;
import x.timecontrol.entities.Race;
import x.timecontrol.entities.ResultUnit;
import x.timecontrol.entities.Team;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Singleton
public class PdfExportService {

    private static final float MARGIN = 50;
    private static final float PAGE_BREAK_THRESHOLD = 50;
    private static final PDFont FONT_REGULAR = new PDType1Font(FontName.HELVETICA);
    private static final PDFont FONT_BOLD = new PDType1Font(FontName.HELVETICA_BOLD);

    /**
     * Pseudo category id used to group participants without an assigned category into
     * their own "Ohne Kategorie" section in the by-category PDF exports, instead of
     * silently dropping them.
     */
    private static final long NO_CATEGORY_ID = -1L;
    private static final Category NO_CATEGORY = new Category(NO_CATEGORY_ID, "Ohne Kategorie");

    private final AgeGroupService ageGroupService;
    private final CategoryService categoryService;
    private final TeamService teamService;
    private final PersonService personService;
    private final RankingService rankingService;

    public PdfExportService(AgeGroupService ageGroupService, CategoryService categoryService, TeamService teamService, PersonService personService, RankingService rankingService) {
        this.ageGroupService = ageGroupService;
        this.categoryService = categoryService;
        this.teamService = teamService;
        this.personService = personService;
        this.rankingService = rankingService;
    }

    private record RankingEntry(int place, String name, String ageGroup, String team, String valueFormatted,
                                 String penaltyFormatted, String totalFormatted, String diffFormatted,
                                 boolean hasPenalty) {
    }

    private record StartListEntry(String raceNumber, String name, String birthYear, String gender,
                                   String ageGroup, String team, String category, boolean hasCategory) {
    }

    private record PdfColumn<T>(String header, float weight, Function<T, String> valueFn) {
    }

    private static final List<PdfColumn<RankingEntry>> RANKING_COLUMNS = List.of(
            new PdfColumn<>("Platz", 0.4f, e -> String.valueOf(e.place())),
            new PdfColumn<>("Name Vorname", 1.8f, e -> truncate(e.name(), 30)),
            new PdfColumn<>("Altersgr.", 1.2f, e -> truncate(e.ageGroup(), 16)),
            new PdfColumn<>("Team", 1.3f, e -> truncate(e.team(), 18)),
            new PdfColumn<>("Wert", 1.1f, RankingEntry::valueFormatted),
            new PdfColumn<>("Strafe", 0.9f, RankingEntry::penaltyFormatted),
            new PdfColumn<>("Gesamt", 1.1f, RankingEntry::totalFormatted),
            new PdfColumn<>("Diff", 1.0f, RankingEntry::diffFormatted)
    );

    private static final List<PdfColumn<StartListEntry>> START_LIST_COLUMNS = List.of(
            new PdfColumn<>("StNr.", 0.5f, StartListEntry::raceNumber),
            new PdfColumn<>("Name Vorname", 2.2f, e -> truncate(e.name(), 35)),
            new PdfColumn<>("Jg.", 0.5f, StartListEntry::birthYear),
            new PdfColumn<>("Geschl.", 0.7f, StartListEntry::gender),
            new PdfColumn<>("Altersgruppe", 1.5f, e -> truncate(e.ageGroup(), 20)),
            new PdfColumn<>("Team", 1.5f, e -> truncate(e.team(), 20)),
            new PdfColumn<>("Kategorie", 1.3f, e -> truncate(e.category(), 20))
    );

    public byte[] generateStartList(Iterable<Participant> participants, Race race) throws IOException {
        List<StartListEntry> entries = createStartListEntries(participants);
        return renderDocument(race, false,
                ctx -> drawSection(ctx, startListColumns(entries), "Startliste", entries, "Teilnehmer", true));
    }

    /**
     * Drops the "Kategorie" column when none of the entries have an assigned category, instead of
     * always reserving space for a column that would otherwise show "-" for every row.
     */
    private List<PdfColumn<StartListEntry>> startListColumns(List<StartListEntry> entries) {
        if (entries.stream().anyMatch(StartListEntry::hasCategory)) {
            return START_LIST_COLUMNS;
        }
        return START_LIST_COLUMNS.stream().filter(c -> !c.header().equals("Kategorie")).toList();
    }

    /**
     * Drops the "Strafe" and "Gesamt" columns when none of the entries actually have a penalty,
     * instead of always reserving space for columns that would otherwise show "-"/zero for every
     * row, or duplicate "Wert" verbatim since Gesamt == Wert when there is no penalty to add.
     */
    private List<PdfColumn<RankingEntry>> rankingColumns(List<RankingEntry> entries) {
        if (entries.stream().anyMatch(RankingEntry::hasPenalty)) {
            return RANKING_COLUMNS;
        }
        return RANKING_COLUMNS.stream()
                .filter(c -> !c.header().equals("Strafe") && !c.header().equals("Gesamt"))
                .toList();
    }

    private List<StartListEntry> createStartListEntries(Iterable<Participant> participants) {
        List<Participant> sorted = StreamSupport.stream(participants.spliterator(), false)
                .sorted(Comparator.comparing(Participant::raceNumber, Comparator.nullsLast(Comparator.naturalOrder())))
                .toList();
        List<AgeGroup> ageGroups = loadAgeGroups();
        Map<Long, Person> personsById = loadPersonsByIds(sorted, Participant::personId);
        Map<Long, Team> teamsById = loadTeamsByIds(sorted, Participant::teamId);
        Map<Long, Category> categoriesById = loadCategoriesByIds(sorted, Participant::categoryId);

        List<StartListEntry> entries = new ArrayList<>();
        for (Participant p : sorted) {
            Person person = personsById.get(p.personId());
            String raceNumber = p.raceNumber() != null ? String.valueOf(p.raceNumber()) : "-";
            String name = formatName(person);
            String birthYear = person != null && person.birthDate() != null ? String.valueOf(person.birthDate().getYear()) : "-";
            String gender = person != null ? genderLabel(person.gender()) : "-";
            String ageGroup = person != null ? calculateAgeGroup(person.birthDate(), ageGroups) : "Unbekannt";
            String team = p.teamId() != null
                    ? Optional.ofNullable(teamsById.get(p.teamId())).map(Team::name).orElse("-")
                    : "-";
            String category = p.categoryId() != null
                    ? Optional.ofNullable(categoriesById.get(p.categoryId())).map(Category::name).orElse("-")
                    : "-";

            entries.add(new StartListEntry(raceNumber, name, birthYear, gender, ageGroup, team, category, p.categoryId() != null));
        }
        return entries;
    }

    /**
     * Batch-loads the {@link Person}s referenced by a list of participants in a single query,
     * instead of one {@code personService.findById()} per participant - see the equivalent
     * pattern already used by {@code ParticipantService.toResponses()}.
     */
    private Map<Long, Person> loadPersonsByIds(List<Participant> participants, Function<Participant, Long> idFn) {
        Set<Long> ids = participants.stream().map(idFn).filter(Objects::nonNull).collect(Collectors.toSet());
        return personService.findByIds(ids);
    }

    private Map<Long, Team> loadTeamsByIds(List<Participant> participants, Function<Participant, Long> idFn) {
        Set<Long> ids = participants.stream().map(idFn).filter(Objects::nonNull).collect(Collectors.toSet());
        return teamService.findByIds(ids);
    }

    private Map<Long, Category> loadCategoriesByIds(List<Participant> participants, Function<Participant, Long> idFn) {
        Set<Long> ids = participants.stream().map(idFn).filter(Objects::nonNull).collect(Collectors.toSet());
        return categoryService.findByIds(ids);
    }

    /**
     * Batch-loads the {@link Person}s referenced by a list of Gaudimodus ranking entries, so
     * {@link #filterAndRePlacePointsCombinationEntries} can look them up from a map instead of
     * querying per entry per age-group/gender section.
     */
    private Map<Long, Person> loadPersonsByEntryIds(List<GaudiRankingEntryResponse> entries) {
        Set<Long> ids = entries.stream().map(GaudiRankingEntryResponse::personId).filter(Objects::nonNull).collect(Collectors.toSet());
        return personService.findByIds(ids);
    }

    public byte[] generateOverallRanking(Iterable<Participant> participants, Race race) throws IOException {
        List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, null, null, null, loadPersonTeamLookup(participants));
        return renderDocument(race, true,
                ctx -> drawSection(ctx, rankingColumns(entries), "Gesamtwertung", entries, "Teilnehmer", true));
    }

    public byte[] generateGenderRanking(Iterable<Participant> participants, String genderStr, Race race) throws IOException {
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, gender, null, null, loadPersonTeamLookup(participants));
        String title = "Wertung " + genderLabel(gender);
        return renderDocument(race, true,
                ctx -> drawSection(ctx, rankingColumns(entries), title, entries, "Teilnehmer", true));
    }

    public byte[] generateAgeGroupGenderRanking(Iterable<Participant> participants,
                                                 String ageGroup, String genderStr, Race race) throws IOException {
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, gender, ageGroup, null, loadPersonTeamLookup(participants));
        String title = "Wertung " + ageGroup + " " + genderLabel(gender);
        return renderDocument(race, true,
                ctx -> drawSection(ctx, rankingColumns(entries), title, entries, "Teilnehmer", true));
    }

    public byte[] generateAllAgeGroupsRanking(Iterable<Participant> participants, Race race) throws IOException {
        // Load age groups from the database, sorted by birthYearTo descending (youngest first)
        List<String> uniqueAgeGroupNames = StreamSupport.stream(ageGroupService.findAll().spliterator(), false)
                .sorted(Comparator.comparing(AgeGroup::birthYearTo).reversed())
                .map(AgeGroup::name)
                .distinct()
                .toList();
        PersonTeamLookup lookup = loadPersonTeamLookup(participants);

        return renderDocument(race, true, ctx -> {
            for (String ageGroupName : uniqueAgeGroupNames) {
                for (Gender gender : List.of(Gender.MALE, Gender.FEMALE)) {
                    List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, gender, ageGroupName, null, lookup);
                    if (!entries.isEmpty()) {
                        String title = "Wertung " + ageGroupName + " " + genderLabel(gender);
                        drawSection(ctx, rankingColumns(entries), title, entries, "Teilnehmer", false);
                    }
                }
            }
        });
    }

    public byte[] generateCategoryRanking(Iterable<Participant> participants, Long categoryId, Race race) throws IOException {
        String categoryName = categoryService.findById(categoryId)
                .map(Category::name)
                .orElse("Unbekannt");
        List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, null, null, categoryId, loadPersonTeamLookup(participants));
        String title = "Wertung " + categoryName;
        return renderDocument(race, true,
                ctx -> drawSection(ctx, rankingColumns(entries), title, entries, "Teilnehmer", true));
    }

    public byte[] generateOverallByCategoryRanking(Iterable<Participant> participants, Race race) throws IOException {
        List<Category> categories = sortedCategoriesWithNoCategory();
        PersonTeamLookup lookup = loadPersonTeamLookup(participants);

        return renderDocument(race, true, ctx -> {
            for (Category category : categories) {
                List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, null, null, category.id(), lookup);
                if (!entries.isEmpty()) {
                    String title = "Wertung " + category.name();
                    drawSection(ctx, rankingColumns(entries), title, entries, "Teilnehmer", false);
                }
            }
        });
    }

    public byte[] generateGenderByCategoryRanking(Iterable<Participant> participants, String genderStr, Race race) throws IOException {
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        List<Category> categories = sortedCategoriesWithNoCategory();
        PersonTeamLookup lookup = loadPersonTeamLookup(participants);

        return renderDocument(race, true, ctx -> {
            for (Category category : categories) {
                List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, gender, null, category.id(), lookup);
                if (!entries.isEmpty()) {
                    String title = "Wertung " + category.name() + " " + genderLabel(gender);
                    drawSection(ctx, rankingColumns(entries), title, entries, "Teilnehmer", false);
                }
            }
        });
    }

    public byte[] generateAllAgeGroupsByCategoryRanking(Iterable<Participant> participants, Race race) throws IOException {
        List<String> uniqueAgeGroupNames = StreamSupport.stream(ageGroupService.findAll().spliterator(), false)
                .sorted(Comparator.comparing(AgeGroup::birthYearTo).reversed())
                .map(AgeGroup::name)
                .distinct()
                .toList();
        List<Category> categories = sortedCategoriesWithNoCategory();
        PersonTeamLookup lookup = loadPersonTeamLookup(participants);

        return renderDocument(race, true, ctx -> {
            for (String ageGroupName : uniqueAgeGroupNames) {
                for (Gender gender : List.of(Gender.MALE, Gender.FEMALE)) {
                    for (Category category : categories) {
                        List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, gender, ageGroupName, category.id(), lookup);
                        if (!entries.isEmpty()) {
                            String title = "Wertung " + ageGroupName + " " + genderLabel(gender) + " " + category.name();
                            drawSection(ctx, rankingColumns(entries), title, entries, "Teilnehmer", false);
                        }
                    }
                }
            }
        });
    }

    private List<Category> sortedCategories() {
        return StreamSupport.stream(categoryService.findAll().spliterator(), false)
                .sorted(Comparator.comparing(Category::name))
                .toList();
    }

    /**
     * Sorted categories plus a synthetic "Ohne Kategorie" entry for participants
     * without an assigned category, so they get their own section instead of being
     * silently omitted from by-category PDF exports.
     */
    private List<Category> sortedCategoriesWithNoCategory() {
        List<Category> categories = new ArrayList<>(sortedCategories());
        categories.add(NO_CATEGORY);
        return categories;
    }

    public byte[] generateLosModeRanking(String title, List<GaudiRankingEntryResponse> entries, Race race) throws IOException {
        List<PdfColumn<GaudiRankingEntryResponse>> columns = List.of(
                new PdfColumn<>("Platz", 0.6f, e -> String.valueOf(e.place())),
                new PdfColumn<>("Paarung", 2.2f, e -> truncate(e.label(), 40)),
                new PdfColumn<>("Team", 1.5f, e -> truncate(e.team(), 20)),
                new PdfColumn<>("Wert 1", 1f, e -> formatValue(race, e.time1Ms())),
                new PdfColumn<>("Wert 2", 1f, e -> formatValue(race, e.time2Ms())),
                new PdfColumn<>("Ø-Wert Paar", 1f, e -> formatValue(race, e.valueMs())),
                new PdfColumn<>("Ø-Wert Gesamt", 1f, e -> formatValue(race, e.referenceMs())),
                new PdfColumn<>("Abweichung", 1f, e -> formatValue(race, e.diffMs()))
        );
        return renderDocument(race, true,
                ctx -> drawSection(ctx, columns, title, entries, "Paare", true));
    }

    /**
     * Mannschaftswertung: a fixed summary row (Platz, Mannschaft, Gesamtwert) per team, with each
     * team's individual members and their adjusted times drawn as wrapped detail line(s) below it
     * so it's visible who is on the team - a member beyond the counted teamSize best results is
     * marked "nicht gewertet" rather than omitted.
     */
    public byte[] generateTeamModeRanking(String title, List<GaudiRankingEntryResponse> entries, Race race) throws IOException {
        List<PdfColumn<GaudiRankingEntryResponse>> columns = List.of(
                new PdfColumn<>("Platz", 0.6f, e -> String.valueOf(e.place())),
                new PdfColumn<>("Mannschaft", 2.5f, e -> truncate(e.label(), 40)),
                new PdfColumn<>("Gesamtwert", 1f, e -> formatValue(race, e.valueMs()))
        );
        return renderDocument(race, false,
                ctx -> drawSectionWithDetails(ctx, columns, title, entries, "Mannschaften", true,
                        e -> teamMemberDetailBlocks(e, race)));
    }

    private List<String> teamMemberDetailBlocks(GaudiRankingEntryResponse entry, Race race) {
        if (entry.members() == null) {
            return List.of();
        }
        List<String> blocks = new ArrayList<>();
        for (GaudiTeamMemberResponse member : entry.members()) {
            String value = formatValue(race, member.valueMs());
            String suffix = member.counted() ? "" : " (nicht gewertet)";
            blocks.add(truncate(member.label(), 25) + ": " + value + suffix);
        }
        return blocks;
    }

    /**
     * Zeit-Kombination: a fixed summary row (Platz, Name, Team, Gesamt, Rückstand) per participant,
     * with the per-race Zeit/Strafe breakdown drawn as wrapped detail line(s) below it instead of
     * one column pair per race - with many referenced races, ever-growing side-by-side columns
     * become unreadably narrow, so the breakdown grows vertically instead. {@code headerRace} only
     * supplies the PDF's header/info block (organisation, weather, ...); the ranking itself covers
     * all {@code legRaces}.
     */
    public byte[] generateTimeCombinationRanking(String title, List<GaudiRankingEntryResponse> entries,
                                                  List<Race> legRaces, Race headerRace) throws IOException {
        List<PdfColumn<GaudiRankingEntryResponse>> summaryColumns = List.of(
                new PdfColumn<>("Platz", 0.5f, e -> String.valueOf(e.place())),
                new PdfColumn<>("Name Vorname", 2.3f, e -> truncate(e.label(), 32)),
                new PdfColumn<>("Team", 1.6f, e -> truncate(e.team(), 20)),
                // All legRaces share one ResultUnit (enforced by GaudiModeService.validate()), so the
                // aggregate columns can be formatted using any one of them - headerRace is one of the legs.
                new PdfColumn<>("Gesamt", 1.2f, e -> formatValue(headerRace, e.valueMs())),
                new PdfColumn<>("Rückstand", 1.1f, e -> e.diffMs() != null ? "+" + formatValue(headerRace, e.diffMs()) : "-")
        );

        return renderDocument(headerRace, true,
                ctx -> drawSectionWithDetails(ctx, summaryColumns, title, entries, "Teilnehmer", true,
                        e -> timeCombinationDetailBlocks(e, legRaces)));
    }

    private List<String> timeCombinationDetailBlocks(GaudiRankingEntryResponse entry, List<Race> legRaces) {
        List<String> blocks = new ArrayList<>();
        for (int i = 0; i < legRaces.size(); i++) {
            Race legRace = legRaces.get(i);
            String raceLabel = truncate(legRace.name(), 16);
            String zeit = formatValue(legRace, legValue(entry, i, GaudiRankingLegResponse::rawValue));
            String strafe = formatValue(legRace, legValue(entry, i, GaudiRankingLegResponse::penalty));
            blocks.add(raceLabel + ": Zeit " + zeit + ", Strafe " + strafe);
        }
        return blocks;
    }

    /**
     * Punkte-Mischwertung: a fixed summary row (Platz, Name, Team, Gesamt) per participant, with the
     * per-race Wert/Platz/Pkt. breakdown drawn as wrapped detail line(s) below it instead of one
     * column group per race - see {@link #generateTimeCombinationRanking} for why.
     */
    public byte[] generatePointsCombinationRanking(String title, List<GaudiRankingEntryResponse> entries,
                                                    List<Race> legRaces, Race headerRace) throws IOException {
        return renderDocument(headerRace, true,
                ctx -> drawSectionWithDetails(ctx, pointsCombinationColumns(), title, entries, "Teilnehmer", true,
                        e -> pointsCombinationDetailBlocks(e, legRaces)));
    }

    /**
     * Punkte-Mischwertung gefiltert nach Geschlecht, analogous to {@link #generateGenderRanking}
     * for normal participant rankings. Places are recomputed within the filtered subset so "Platz"
     * reflects the position within that gender rather than the overall ranking.
     */
    public byte[] generatePointsCombinationGenderRanking(String title, List<GaudiRankingEntryResponse> entries,
                                                          List<Race> legRaces, Race headerRace, String genderStr) throws IOException {
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        List<GaudiRankingEntryResponse> filtered = filterAndRePlacePointsCombinationEntries(
                entries, gender, null, loadAgeGroups(), loadPersonsByEntryIds(entries));
        String fullTitle = title + " - " + genderLabel(gender);

        return renderDocument(headerRace, true,
                ctx -> drawSectionWithDetails(ctx, pointsCombinationColumns(), fullTitle, filtered, "Teilnehmer", true,
                        e -> pointsCombinationDetailBlocks(e, legRaces)));
    }

    /**
     * Punkte-Mischwertung gefiltert nach Altersklasse und Geschlecht, analogous to
     * {@link #generateAgeGroupGenderRanking} for normal participant rankings.
     */
    public byte[] generatePointsCombinationAgeGroupGenderRanking(String title, List<GaudiRankingEntryResponse> entries,
                                                                  List<Race> legRaces, Race headerRace,
                                                                  String ageGroup, String genderStr) throws IOException {
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        List<GaudiRankingEntryResponse> filtered = filterAndRePlacePointsCombinationEntries(
                entries, gender, ageGroup, loadAgeGroups(), loadPersonsByEntryIds(entries));
        String fullTitle = title + " - " + ageGroup + " " + genderLabel(gender);

        return renderDocument(headerRace, true,
                ctx -> drawSectionWithDetails(ctx, pointsCombinationColumns(), fullTitle, filtered, "Teilnehmer", true,
                        e -> pointsCombinationDetailBlocks(e, legRaces)));
    }

    /**
     * Punkte-Mischwertung split into one section per age group x gender, youngest first, analogous
     * to {@link #generateAllAgeGroupsRanking} for normal participant rankings.
     */
    public byte[] generatePointsCombinationAllAgeGroupsRanking(String title, List<GaudiRankingEntryResponse> entries,
                                                                List<Race> legRaces, Race headerRace) throws IOException {
        List<AgeGroup> ageGroups = loadAgeGroups();
        List<String> uniqueAgeGroupNames = ageGroups.stream()
                .sorted(Comparator.comparing(AgeGroup::birthYearTo).reversed())
                .map(AgeGroup::name)
                .distinct()
                .toList();
        Map<Long, Person> personsById = loadPersonsByEntryIds(entries);

        return renderDocument(headerRace, true, ctx -> {
            for (String ageGroupName : uniqueAgeGroupNames) {
                for (Gender gender : List.of(Gender.MALE, Gender.FEMALE)) {
                    List<GaudiRankingEntryResponse> filtered = filterAndRePlacePointsCombinationEntries(entries, gender, ageGroupName, ageGroups, personsById);
                    if (!filtered.isEmpty()) {
                        String sectionTitle = title + " - " + ageGroupName + " " + genderLabel(gender);
                        drawSectionWithDetails(ctx, pointsCombinationColumns(), sectionTitle, filtered, "Teilnehmer", false,
                                e -> pointsCombinationDetailBlocks(e, legRaces));
                    }
                }
            }
        });
    }

    private static List<PdfColumn<GaudiRankingEntryResponse>> pointsCombinationColumns() {
        return List.of(
                new PdfColumn<>("Platz", 0.5f, e -> String.valueOf(e.place())),
                new PdfColumn<>("Name Vorname", 2.5f, e -> truncate(e.label(), 35)),
                new PdfColumn<>("Team", 1.8f, e -> truncate(e.team(), 22)),
                new PdfColumn<>("Gesamt", 1.0f, e -> e.totalPoints() != null ? String.valueOf(e.totalPoints()) : "-")
        );
    }

    /**
     * Filters a Punkte-Mischwertung ranking by gender and/or age group (resolved per entry via its
     * {@code personId}) and recomputes "Platz" within the filtered subset, mirroring how
     * {@link #createRankingEntriesFromParticipants} filters and re-places normal participant
     * rankings. Entries without a resolvable personId (only possible for non-Punkte-Mischwertung
     * modes, which never call this) are dropped.
     */
    private List<GaudiRankingEntryResponse> filterAndRePlacePointsCombinationEntries(
            List<GaudiRankingEntryResponse> entries, Gender filterGender, String filterAgeGroup, List<AgeGroup> ageGroups,
            Map<Long, Person> personsById) {
        List<GaudiRankingEntryResponse> filtered = entries.stream()
                .filter(e -> e.personId() != null)
                .filter(e -> {
                    Person person = personsById.get(e.personId());
                    if (filterGender != null && (person == null || person.gender() != filterGender)) {
                        return false;
                    }
                    if (filterAgeGroup != null) {
                        String ageGroup = person != null ? calculateAgeGroup(person.birthDate(), ageGroups) : "Unbekannt";
                        if (!filterAgeGroup.equalsIgnoreCase(ageGroup)) {
                            return false;
                        }
                    }
                    return true;
                })
                .sorted(Comparator.comparingInt((GaudiRankingEntryResponse e) -> e.totalPoints() != null ? e.totalPoints() : Integer.MIN_VALUE).reversed())
                .toList();

        List<Integer> places = rankingService.assignStandardPlaces(
                filtered.stream().map(e -> e.totalPoints() != null ? (double) e.totalPoints() : Double.NEGATIVE_INFINITY).toList());

        List<GaudiRankingEntryResponse> result = new ArrayList<>();
        for (int i = 0; i < filtered.size(); i++) {
            result.add(withPlace(filtered.get(i), places.get(i)));
        }
        return result;
    }

    private static GaudiRankingEntryResponse withPlace(GaudiRankingEntryResponse e, int place) {
        return new GaudiRankingEntryResponse(place, e.label(), e.time1Ms(), e.time2Ms(), e.valueMs(),
                e.referenceMs(), e.diffMs(), e.totalPoints(), e.legs(), e.team(), e.members(), e.personId());
    }

    private List<String> pointsCombinationDetailBlocks(GaudiRankingEntryResponse entry, List<Race> legRaces) {
        List<String> blocks = new ArrayList<>();
        for (int i = 0; i < legRaces.size(); i++) {
            Race legRace = legRaces.get(i);
            String raceLabel = truncate(legRace.name(), 16);
            String wert = formatValue(legRace, legValue(entry, i, GaudiRankingLegResponse::rawValue));
            String platz = legValueString(entry, i, GaudiRankingLegResponse::place);
            String pkt = legValueString(entry, i, GaudiRankingLegResponse::points);
            blocks.add(raceLabel + ": Wert " + wert + ", Platz " + platz + ", Pkt. " + pkt);
        }
        return blocks;
    }

    private Integer legValue(GaudiRankingEntryResponse entry, int idx, Function<GaudiRankingLegResponse, Integer> getter) {
        if (entry.legs() == null || idx >= entry.legs().size()) {
            return null;
        }
        GaudiRankingLegResponse leg = entry.legs().get(idx);
        return leg != null ? getter.apply(leg) : null;
    }

    private String legValueString(GaudiRankingEntryResponse entry, int idx, Function<GaudiRankingLegResponse, Integer> getter) {
        Integer value = legValue(entry, idx, getter);
        return value != null ? String.valueOf(value) : "-";
    }

    // ---------------------------------------------------------------------
    // Rendering infrastructure
    // ---------------------------------------------------------------------

    @FunctionalInterface
    private interface PdfBody {
        void write(PdfContext ctx) throws IOException;
    }

    /**
     * Mutable render state for one PDF document: current page/content stream and the
     * vertical cursor. Handles page breaks and draws the header (and, on the very
     * first page, the race info block) whenever a new page is started.
     */
    private final class PdfContext {
        private final PDDocument document;
        private final Race race;
        private final PDRectangle pageSize;
        private PDPage page;
        private PDPageContentStream stream;
        private float y;
        private boolean firstPage = true;

        PdfContext(PDDocument document, Race race, PDRectangle pageSize) throws IOException {
            this.document = document;
            this.race = race;
            this.pageSize = pageSize;
            newPage();
        }

        void newPage() throws IOException {
            if (stream != null) {
                drawPageFooter(stream, page.getMediaBox().getWidth());
                stream.close();
            }
            page = new PDPage(pageSize);
            document.addPage(page);
            stream = new PDPageContentStream(document, page);
            y = drawPageHeader(stream, race, page.getMediaBox().getWidth(), page.getMediaBox().getHeight());
            if (firstPage) {
                y = drawRaceInfoBlock(stream, race, y, page.getMediaBox().getWidth());
                firstPage = false;
            }
        }

        void ensureSpace(float needed) throws IOException {
            if (y - needed < PAGE_BREAK_THRESHOLD) {
                newPage();
            }
        }

        void text(PDFont font, float size, float x, float y, String value) throws IOException {
            drawText(stream, font, size, x, y, value);
        }

        void hLine(float y) throws IOException {
            stream.moveTo(MARGIN, y);
            stream.lineTo(page.getMediaBox().getWidth() - MARGIN, y);
            stream.stroke();
        }

        void close() throws IOException {
            drawPageFooter(stream, page.getMediaBox().getWidth());
            stream.close();
            stream = null;
        }

        /**
         * Releases the current content stream without drawing a footer - used to avoid leaking an
         * open {@link PDPageContentStream} when {@code body.write(ctx)} throws partway through
         * rendering (PDFBox does not close it on document.close() by itself). A no-op once
         * {@link #close()} already ran normally.
         */
        void closeQuietly() {
            if (stream != null) {
                try {
                    stream.close();
                } catch (IOException ignored) {
                }
                stream = null;
            }
        }
    }

    private byte[] renderDocument(Race race, boolean landscape, PdfBody body) throws IOException {
        PDRectangle pageSize = landscape
                ? new PDRectangle(PDRectangle.A4.getHeight(), PDRectangle.A4.getWidth())
                : PDRectangle.A4;

        try (PDDocument document = new PDDocument()) {
            PdfContext ctx = new PdfContext(document, race, pageSize);
            try {
                body.write(ctx);
                ctx.close();
            } finally {
                ctx.closeQuietly();
            }

            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            document.save(outputStream);
            return outputStream.toByteArray();
        }
    }

    /**
     * Draws a titled ranking table (title, column headers, rows and a summary line),
     * breaking to new pages as needed. {@code mainTitle} selects the larger title
     * style used for single-ranking PDFs vs. the smaller subtitle style used for
     * the multi-section "all age groups" PDF.
     */
    private <T> void drawSection(PdfContext ctx, List<PdfColumn<T>> columns, String title,
                                  List<T> entries, String unitLabel, boolean mainTitle) throws IOException {
        ctx.ensureSpace(mainTitle ? 90 : 100);

        ctx.y -= mainTitle ? 10 : 15;
        ctx.text(FONT_BOLD, mainTitle ? 14 : 11, MARGIN, ctx.y, title);
        ctx.y -= mainTitle ? 30 : 25;

        float[] colX = computeColumnX(columns, ctx.page.getMediaBox().getWidth());
        drawTableHeader(ctx, columns, colX);
        drawRows(ctx, columns, colX, entries);

        ctx.y -= 10;
        ctx.ensureSpace(20);
        ctx.text(FONT_BOLD, 8, MARGIN, ctx.y, "Gesamt: " + entries.size() + " " + unitLabel);
        ctx.y -= 15;
    }

    private <T> float[] computeColumnX(List<PdfColumn<T>> columns, float pageWidth) {
        float usableWidth = pageWidth - MARGIN * 2;
        float totalWeight = (float) columns.stream().mapToDouble(PdfColumn::weight).sum();
        float[] colX = new float[columns.size()];
        float x = MARGIN;
        for (int i = 0; i < columns.size(); i++) {
            colX[i] = x;
            x += usableWidth * columns.get(i).weight() / totalWeight;
        }
        return colX;
    }

    private <T> void drawTableHeader(PdfContext ctx, List<PdfColumn<T>> columns, float[] colX) throws IOException {
        for (int i = 0; i < columns.size(); i++) {
            ctx.text(FONT_BOLD, 8, colX[i], ctx.y, columns.get(i).header());
        }
        ctx.y -= 12;
        ctx.hLine(ctx.y);
        ctx.y -= 14;
    }

    private <T> void drawRows(PdfContext ctx, List<PdfColumn<T>> columns, float[] colX, List<T> entries) throws IOException {
        for (T entry : entries) {
            if (ctx.y < PAGE_BREAK_THRESHOLD) {
                ctx.newPage();
                drawTableHeader(ctx, columns, colX);
            }
            for (int i = 0; i < columns.size(); i++) {
                ctx.text(FONT_REGULAR, 8, colX[i], ctx.y, columns.get(i).valueFn().apply(entry));
            }
            ctx.y -= 12;
        }
    }

    /**
     * Like {@link #drawSection}, but for tables where entries additionally carry a variable-length
     * breakdown (e.g. a per-race Wert/Platz/Punkte summary for a multi-race Gaudimodus ranking) that
     * doesn't fit as fixed side-by-side columns without becoming unreadably narrow once there are more
     * than a few races. {@code detailBlocksFn} returns that breakdown as one string per logical block
     * (e.g. one per race); blocks are drawn as wrapped, indented line(s) below the fixed summary
     * row, growing the row's height instead of shrinking column widths.
     */
    private <T> void drawSectionWithDetails(PdfContext ctx, List<PdfColumn<T>> columns, String title,
                                             List<T> entries, String unitLabel, boolean mainTitle,
                                             Function<T, List<String>> detailBlocksFn) throws IOException {
        ctx.ensureSpace(mainTitle ? 90 : 100);

        ctx.y -= mainTitle ? 10 : 15;
        ctx.text(FONT_BOLD, mainTitle ? 14 : 11, MARGIN, ctx.y, title);
        ctx.y -= mainTitle ? 30 : 25;

        float[] colX = computeColumnX(columns, ctx.page.getMediaBox().getWidth());
        drawTableHeader(ctx, columns, colX);
        drawRowsWithDetails(ctx, columns, colX, entries, detailBlocksFn);

        ctx.y -= 10;
        ctx.ensureSpace(20);
        ctx.text(FONT_BOLD, 8, MARGIN, ctx.y, "Gesamt: " + entries.size() + " " + unitLabel);
        ctx.y -= 15;
    }

    private static final float DETAIL_INDENT = 15;
    private static final float DETAIL_LINE_HEIGHT = 10;
    private static final float DETAIL_ROW_GAP = 6;

    private <T> void drawRowsWithDetails(PdfContext ctx, List<PdfColumn<T>> columns, float[] colX, List<T> entries,
                                          Function<T, List<String>> detailBlocksFn) throws IOException {
        float maxDetailWidth = ctx.page.getMediaBox().getWidth() - MARGIN * 2 - DETAIL_INDENT;
        for (T entry : entries) {
            List<String> detailLines = wrapBlocks(detailBlocksFn.apply(entry), FONT_REGULAR, 7, maxDetailWidth);
            float needed = 12 + detailLines.size() * DETAIL_LINE_HEIGHT + DETAIL_ROW_GAP;

            if (ctx.y - needed < PAGE_BREAK_THRESHOLD) {
                ctx.newPage();
                drawTableHeader(ctx, columns, colX);
            }

            for (int i = 0; i < columns.size(); i++) {
                ctx.text(FONT_REGULAR, 8, colX[i], ctx.y, columns.get(i).valueFn().apply(entry));
            }
            ctx.y -= 12;

            for (String line : detailLines) {
                ctx.text(FONT_REGULAR, 7, MARGIN + DETAIL_INDENT, ctx.y, line);
                ctx.y -= DETAIL_LINE_HEIGHT;
            }
            ctx.y -= DETAIL_ROW_GAP;
        }
    }

    /**
     * Wraps a sequence of logical blocks (each kept intact on one line whenever possible) into
     * lines no wider than {@code maxWidth}, joining blocks that share a line with a separator. A
     * single block that doesn't fit even on its own empty line (e.g. an unusually long name) is
     * itself wrapped word-by-word rather than left to overflow the page.
     */
    private static List<String> wrapBlocks(List<String> blocks, PDFont font, float fontSize, float maxWidth) throws IOException {
        List<String> lines = new ArrayList<>();
        StringBuilder current = new StringBuilder();
        for (String block : blocks) {
            String candidate = current.isEmpty() ? block : current + "   |   " + block;
            if (stringWidth(font, fontSize, candidate) <= maxWidth) {
                current = new StringBuilder(candidate);
                continue;
            }
            if (!current.isEmpty()) {
                lines.add(current.toString());
                current = new StringBuilder();
            }
            if (stringWidth(font, fontSize, block) <= maxWidth) {
                current = new StringBuilder(block);
            } else {
                List<String> wrapped = wrapWords(block, font, fontSize, maxWidth);
                lines.addAll(wrapped.subList(0, wrapped.size() - 1));
                current = new StringBuilder(wrapped.getLast());
            }
        }
        if (!current.isEmpty()) {
            lines.add(current.toString());
        }
        return lines;
    }

    /**
     * Word-by-word wrap for a single block too wide to fit {@code maxWidth} even alone - the
     * fallback {@link #wrapBlocks} uses instead of drawing that block past the page margin.
     */
    private static List<String> wrapWords(String text, PDFont font, float fontSize, float maxWidth) throws IOException {
        List<String> lines = new ArrayList<>();
        StringBuilder current = new StringBuilder();
        for (String word : text.split(" ")) {
            String candidate = current.isEmpty() ? word : current + " " + word;
            if (stringWidth(font, fontSize, candidate) > maxWidth && !current.isEmpty()) {
                lines.add(current.toString());
                current = new StringBuilder(word);
            } else {
                current = new StringBuilder(candidate);
            }
        }
        if (!current.isEmpty()) {
            lines.add(current.toString());
        }
        return lines;
    }

    private static float stringWidth(PDFont font, float fontSize, String text) throws IOException {
        // Sanitized for the same reason as drawText(): getStringWidth() throws for the same
        // out-of-Latin-1 characters showText() would, so wrapping/measuring must see the exact
        // text that will actually be drawn.
        return font.getStringWidth(sanitizeForPdf(text)) / 1000 * fontSize;
    }

    private record ParticipantWithPerson(Participant participant, Person person) {
    }

    /**
     * Persons and teams referenced by a participant list, batch-loaded once per PDF export so
     * that resolving them for every section of a multi-section export (by age group, by gender,
     * by category, or any combination) doesn't re-hit the database per participant per section.
     */
    private record PersonTeamLookup(Map<Long, Person> personsById, Map<Long, Team> teamsById) {
    }

    private PersonTeamLookup loadPersonTeamLookup(Iterable<Participant> participants) {
        List<Participant> list = StreamSupport.stream(participants.spliterator(), false).toList();
        return new PersonTeamLookup(loadPersonsByIds(list, Participant::personId), loadTeamsByIds(list, Participant::teamId));
    }

    private List<RankingEntry> createRankingEntriesFromParticipants(Iterable<Participant> participants,
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
                    .filter(pwp -> {
                        Participant p = pwp.participant();
                        Person person = pwp.person();

                        if (filterGender != null && (person == null || person.gender() != filterGender)) {
                            return false;
                        }

                        if (filterAgeGroup != null) {
                            String ageGroup = person != null ? calculateAgeGroup(person.birthDate(), ageGroups) : "Unbekannt";
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
                    })
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
        Integer leaderValue = sortedParticipants.isEmpty() ? null : rankingService.adjustedValue(race, sortedParticipants.getFirst().participant());

        for (int i = 0; i < sortedParticipants.size(); i++) {
            Participant p = sortedParticipants.get(i).participant();
            Person person = sortedParticipants.get(i).person();

            String name = formatName(person);
            String ageGroup = person != null ? calculateAgeGroup(person.birthDate(), ageGroups) : "Unbekannt";
            String team = p.teamId() != null
                    ? Optional.ofNullable(lookup.teamsById().get(p.teamId())).map(Team::name).orElse("-")
                    : "-";
            Integer adjustedValue = rankingService.adjustedValue(race, p);
            Integer diff = (i > 0) ? Math.abs(adjustedValue - leaderValue) : null;

            entries.add(new RankingEntry(
                    places.get(p.id()),
                    name,
                    ageGroup,
                    team,
                    formatValue(race, p.durationMs()),
                    formatValue(race, p.penalty()),
                    formatValue(race, adjustedValue),
                    diff != null ? "+" + formatValue(race, diff) : "-",
                    p.penalty() != null && p.penalty() != 0
            ));
        }

        return entries;
    }

    private String formatName(Person person) {
        if (person == null) {
            return "Unbekannt";
        }
        return personService.displayName(person);
    }

    /**
     * Loads all age groups once per PDF export so per-participant age-group lookups
     * (potentially thousands for a large by-age-group/category export) don't each hit the
     * database - see {@link #calculateAgeGroup(LocalDate, List)}.
     */
    private List<AgeGroup> loadAgeGroups() {
        return StreamSupport.stream(ageGroupService.findAll().spliterator(), false).toList();
    }

    private String calculateAgeGroup(LocalDate birthDate, List<AgeGroup> ageGroups) {
        if (birthDate == null) {
            return "Unbekannt";
        }

        int birthYear = birthDate.getYear();

        for (AgeGroup ageGroup : ageGroups) {
            if (ageGroupService.isYearInAgeGroup(ageGroup, birthYear)) {
                return ageGroup.name();
            }
        }

        return "Unbekannt";
    }

    private String genderLabel(Gender gender) {
        return gender == Gender.MALE ? "Männer" : "Frauen";
    }

    private static String formatTime(Integer timeMs) {
        if (timeMs == null) return "-";

        int totalSeconds = timeMs / 1000;
        int minutes = totalSeconds / 60;
        int seconds = totalSeconds % 60;
        int tenths = (timeMs % 1000) / 100;

        return String.format("%d:%02d.%d", minutes, seconds, tenths);
    }

    /**
     * Formats a raw/adjusted result value according to the race's unit: time (mm:ss.S) or a
     * generic decimal value with the race's unit label (e.g. "30.00 m"), stored as hundredths.
     */
    private static String formatValue(Race race, Integer value) {
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

    private static String truncate(String str, int maxLength) {
        if (str == null) return "";
        return str.length() > maxLength ? str.substring(0, maxLength - 3) + "..." : str;
    }

    private static void drawText(PDPageContentStream stream, PDFont font, float size, float x, float y, String text) throws IOException {
        stream.setFont(font, size);
        stream.beginText();
        stream.newLineAtOffset(x, y);
        stream.showText(sanitizeForPdf(text));
        stream.endText();
    }

    /**
     * The standard-14 Helvetica fonts only support WinAnsi/Latin-1 characters; showText() throws
     * for anything outside that range (e.g. Slovenian/Croatian š, ž, č, đ or Polish ł, ń - realistic
     * in participant/team names). Diacritics are folded off via NFKD decomposition, the handful of
     * common letters that don't decompose that way are mapped by hand, and anything still outside
     * Latin-1 is replaced with '?' so PDF export can never fail on a name it can't render exactly.
     */
    private static String sanitizeForPdf(String text) {
        if (text == null) {
            return "";
        }
        String withKnownSubstitutions = text
                .replace('ł', 'l').replace('Ł', 'L')
                .replace('đ', 'd').replace('Đ', 'D');
        String decomposed = java.text.Normalizer.normalize(withKnownSubstitutions, java.text.Normalizer.Form.NFKD);
        StringBuilder result = new StringBuilder(decomposed.length());
        for (int i = 0; i < decomposed.length(); i++) {
            char c = decomposed.charAt(i);
            if (Character.getType(c) == Character.NON_SPACING_MARK) {
                continue;
            }
            result.append(c <= 0xFF ? c : '?');
        }
        return result.toString();
    }

    /**
     * Draws a header with the race name and date at the top of the page.
     * @return the Y position after the header
     */
    private float drawPageHeader(PDPageContentStream contentStream, Race race, float pageWidth, float pageHeight) throws IOException {
        float headerY = pageHeight - 22;

        String formattedDate = "";
        if (race.date() != null) {
            formattedDate = String.format("%02d.%02d.%04d",
                race.date().getDayOfMonth(),
                race.date().getMonthValue(),
                race.date().getYear());
        }

        String headerText = race.name();
        if (!formattedDate.isEmpty()) {
            headerText += " - " + formattedDate;
        }

        drawText(contentStream, FONT_BOLD, 10, MARGIN, headerY, headerText);

        float lineY = headerY - 5;
        contentStream.moveTo(MARGIN, lineY);
        contentStream.lineTo(pageWidth - MARGIN, lineY);
        contentStream.stroke();

        return lineY - 15;
    }

    /**
     * Draws the optional free-text race info fields (organisation, referee, ...) below
     * the page header, as a two-column list. Only fields that are actually set are
     * rendered; if none are set, nothing is drawn and the Y position is unchanged.
     * Only called for the first page of a document, so it acts as a "cover sheet" block.
     * @return the Y position after the block (unchanged if there was nothing to draw)
     */
    private float drawRaceInfoBlock(PDPageContentStream contentStream, Race race, float y, float pageWidth) throws IOException {
        List<String[]> fields = raceInfoFields(race);
        if (fields.isEmpty()) {
            return y;
        }

        float fontSize = 9;
        float lineHeight = 13;
        float labelWidth = 90;
        float colWidth = (pageWidth - MARGIN * 2) / 2;

        y -= 8;
        int rows = (fields.size() + 1) / 2;
        for (int row = 0; row < rows; row++) {
            float rowY = y - row * lineHeight;
            for (int col = 0; col < 2; col++) {
                int idx = row * 2 + col;
                if (idx >= fields.size()) continue;
                String[] field = fields.get(idx);
                float x = MARGIN + col * colWidth;
                drawText(contentStream, FONT_BOLD, fontSize, x, rowY, field[0] + ":");
                drawText(contentStream, FONT_REGULAR, fontSize, x + labelWidth, rowY, truncate(field[1], 45));
            }
        }
        y -= rows * lineHeight + 6;

        contentStream.moveTo(MARGIN, y);
        contentStream.lineTo(pageWidth - MARGIN, y);
        contentStream.stroke();

        return y - 12;
    }

    private static final String FOOTER_TEXT = "powered by Alpdesk TimeControl";

    /**
     * Draws the small marketing footer centered at the bottom of the page.
     */
    private void drawPageFooter(PDPageContentStream contentStream, float pageWidth) throws IOException {
        float fontSize = 7;
        float textWidth = FONT_REGULAR.getStringWidth(FOOTER_TEXT) / 1000 * fontSize;
        float x = (pageWidth - textWidth) / 2;
        drawText(contentStream, FONT_REGULAR, fontSize, x, 20, FOOTER_TEXT);
    }

    /**
     * Labels are German because the generated PDFs are German-language race documents;
     * the underlying Race fields stay in English like the rest of the codebase.
     */
    private List<String[]> raceInfoFields(Race race) {
        List<String[]> fields = new ArrayList<>();
        addIfPresent(fields, "Veranstalter", race.organisation());
        addIfPresent(fields, "Schiedsrichter", race.referee());
        addIfPresent(fields, "Rennleiter", race.raceDirector());
        addIfPresent(fields, "Zeitnahme", race.timeControl());
        addIfPresent(fields, "Streckenname", race.routeName());
        addIfPresent(fields, "Höhendifferenz", race.elevationDifference());
        addIfPresent(fields, "Streckenlänge", race.routeLength());
        addIfPresent(fields, "Kurssetzer", race.courseSetter());
        addIfPresent(fields, "Wetter", race.weather());
        return fields;
    }

    private void addIfPresent(List<String[]> fields, String label, String value) {
        if (value != null && !value.isBlank()) {
            fields.add(new String[]{label, value});
        }
    }
}
