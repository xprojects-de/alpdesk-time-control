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

    private record RankingEntry(int place, String name, String ageGroup, String valueFormatted,
                                 String penaltyFormatted, String totalFormatted, String diffFormatted) {
    }

    private record StartListEntry(String raceNumber, String name, String birthYear, String gender,
                                   String ageGroup, String team, String category) {
    }

    private record PdfColumn<T>(String header, float weight, Function<T, String> valueFn) {
    }

    private static final List<PdfColumn<RankingEntry>> RANKING_COLUMNS = List.of(
            new PdfColumn<>("Platz", 0.4f, e -> String.valueOf(e.place())),
            new PdfColumn<>("Name Vorname", 2.0f, e -> truncate(e.name(), 35)),
            new PdfColumn<>("Altersgruppe", 1.4f, e -> truncate(e.ageGroup(), 20)),
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
                ctx -> drawSection(ctx, START_LIST_COLUMNS, "Startliste", entries, "Teilnehmer", true));
    }

    private List<StartListEntry> createStartListEntries(Iterable<Participant> participants) {
        List<Participant> sorted = StreamSupport.stream(participants.spliterator(), false)
                .sorted(Comparator.comparing(Participant::raceNumber, Comparator.nullsLast(Comparator.naturalOrder())))
                .toList();

        List<StartListEntry> entries = new ArrayList<>();
        for (Participant p : sorted) {
            Person person = personService.findById(p.personId()).orElse(null);
            String raceNumber = p.raceNumber() != null ? String.valueOf(p.raceNumber()) : "-";
            String name = formatName(person);
            String birthYear = person != null && person.birthDate() != null ? String.valueOf(person.birthDate().getYear()) : "-";
            String gender = person != null ? genderLabel(person.gender()) : "-";
            String ageGroup = person != null ? calculateAgeGroup(person.birthDate()) : "Unbekannt";
            String team = p.teamId() != null
                    ? teamService.findById(p.teamId()).map(Team::name).orElse("-")
                    : "-";
            String category = p.categoryId() != null
                    ? categoryService.findById(p.categoryId()).map(Category::name).orElse("-")
                    : "-";

            entries.add(new StartListEntry(raceNumber, name, birthYear, gender, ageGroup, team, category));
        }
        return entries;
    }

    public byte[] generateOverallRanking(Iterable<Participant> participants, Race race) throws IOException {
        List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, null, null, null);
        return renderDocument(race, false,
                ctx -> drawSection(ctx, RANKING_COLUMNS, "Gesamtwertung", entries, "Teilnehmer", true));
    }

    public byte[] generateGenderRanking(Iterable<Participant> participants, String genderStr, Race race) throws IOException {
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, gender, null, null);
        String title = "Wertung " + genderLabel(gender);
        return renderDocument(race, false,
                ctx -> drawSection(ctx, RANKING_COLUMNS, title, entries, "Teilnehmer", true));
    }

    public byte[] generateAgeGroupGenderRanking(Iterable<Participant> participants,
                                                 String ageGroup, String genderStr, Race race) throws IOException {
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, gender, ageGroup, null);
        String title = "Wertung " + ageGroup + " " + genderLabel(gender);
        return renderDocument(race, false,
                ctx -> drawSection(ctx, RANKING_COLUMNS, title, entries, "Teilnehmer", true));
    }

    public byte[] generateAllAgeGroupsRanking(Iterable<Participant> participants, Race race) throws IOException {
        // Load age groups from the database, sorted by birthYearTo descending (youngest first)
        List<String> uniqueAgeGroupNames = StreamSupport.stream(ageGroupService.findAll().spliterator(), false)
                .sorted(Comparator.comparing(AgeGroup::birthYearTo).reversed())
                .map(AgeGroup::name)
                .distinct()
                .toList();

        return renderDocument(race, false, ctx -> {
            for (String ageGroupName : uniqueAgeGroupNames) {
                for (Gender gender : List.of(Gender.MALE, Gender.FEMALE)) {
                    List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, gender, ageGroupName, null);
                    if (!entries.isEmpty()) {
                        String title = "Wertung " + ageGroupName + " " + genderLabel(gender);
                        drawSection(ctx, RANKING_COLUMNS, title, entries, "Teilnehmer", false);
                    }
                }
            }
        });
    }

    public byte[] generateCategoryRanking(Iterable<Participant> participants, Long categoryId, Race race) throws IOException {
        String categoryName = categoryService.findById(categoryId)
                .map(Category::name)
                .orElse("Unbekannt");
        List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, null, null, categoryId);
        String title = "Wertung " + categoryName;
        return renderDocument(race, false,
                ctx -> drawSection(ctx, RANKING_COLUMNS, title, entries, "Teilnehmer", true));
    }

    public byte[] generateOverallByCategoryRanking(Iterable<Participant> participants, Race race) throws IOException {
        List<Category> categories = sortedCategoriesWithNoCategory();

        return renderDocument(race, false, ctx -> {
            for (Category category : categories) {
                List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, null, null, category.id());
                if (!entries.isEmpty()) {
                    String title = "Wertung " + category.name();
                    drawSection(ctx, RANKING_COLUMNS, title, entries, "Teilnehmer", false);
                }
            }
        });
    }

    public byte[] generateGenderByCategoryRanking(Iterable<Participant> participants, String genderStr, Race race) throws IOException {
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        List<Category> categories = sortedCategoriesWithNoCategory();

        return renderDocument(race, false, ctx -> {
            for (Category category : categories) {
                List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, gender, null, category.id());
                if (!entries.isEmpty()) {
                    String title = "Wertung " + category.name() + " " + genderLabel(gender);
                    drawSection(ctx, RANKING_COLUMNS, title, entries, "Teilnehmer", false);
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

        return renderDocument(race, false, ctx -> {
            for (String ageGroupName : uniqueAgeGroupNames) {
                for (Gender gender : List.of(Gender.MALE, Gender.FEMALE)) {
                    for (Category category : categories) {
                        List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, race, gender, ageGroupName, category.id());
                        if (!entries.isEmpty()) {
                            String title = "Wertung " + ageGroupName + " " + genderLabel(gender) + " " + category.name();
                            drawSection(ctx, RANKING_COLUMNS, title, entries, "Teilnehmer", false);
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
                new PdfColumn<>("Paarung", 2.5f, e -> truncate(e.label(), 40)),
                new PdfColumn<>("Wert 1", 1f, e -> formatValue(race, e.time1Ms())),
                new PdfColumn<>("Wert 2", 1f, e -> formatValue(race, e.time2Ms())),
                new PdfColumn<>("Ø-Wert Paar", 1f, e -> formatValue(race, e.valueMs())),
                new PdfColumn<>("Ø-Wert Gesamt", 1f, e -> formatValue(race, e.referenceMs())),
                new PdfColumn<>("Abweichung", 1f, e -> formatValue(race, e.diffMs()))
        );
        return renderDocument(race, true,
                ctx -> drawSection(ctx, columns, title, entries, "Paare", true));
    }

    public byte[] generateTeamModeRanking(String title, List<GaudiRankingEntryResponse> entries, Race race) throws IOException {
        List<PdfColumn<GaudiRankingEntryResponse>> columns = List.of(
                new PdfColumn<>("Platz", 0.6f, e -> String.valueOf(e.place())),
                new PdfColumn<>("Mannschaft", 2.5f, e -> truncate(e.label(), 40)),
                new PdfColumn<>("Gesamtwert", 1f, e -> formatValue(race, e.valueMs()))
        );
        return renderDocument(race, false,
                ctx -> drawSection(ctx, columns, title, entries, "Mannschaften", true));
    }

    /**
     * Zeit-Kombination: one Zeit/Strafe column pair per referenced race plus a Gesamt/Rückstand
     * column, analogous to an alpine combination result sheet. {@code headerRace} only supplies
     * the PDF's header/info block (organisation, weather, ...); the ranking itself covers all
     * {@code legRaces}.
     */
    public byte[] generateTimeCombinationRanking(String title, List<GaudiRankingEntryResponse> entries,
                                                  List<Race> legRaces, Race headerRace) throws IOException {
        List<PdfColumn<GaudiRankingEntryResponse>> columns = new ArrayList<>();
        columns.add(new PdfColumn<>("Platz", 0.5f, e -> String.valueOf(e.place())));
        columns.add(new PdfColumn<>("Name Vorname", 2.0f, e -> truncate(e.label(), 30)));
        for (int i = 0; i < legRaces.size(); i++) {
            int idx = i;
            Race legRace = legRaces.get(i);
            String raceLabel = truncate(legRace.name(), 14);
            columns.add(new PdfColumn<>(raceLabel + " Zeit", 1.1f, e -> formatValue(legRace, legValue(e, idx, GaudiRankingLegResponse::rawValue))));
            columns.add(new PdfColumn<>(raceLabel + " Strafe", 0.9f, e -> formatValue(legRace, legValue(e, idx, GaudiRankingLegResponse::penalty))));
        }
        // All legRaces share one ResultUnit (enforced by GaudiModeService.validate()), so the
        // aggregate columns can be formatted using any one of them - headerRace is one of the legs.
        columns.add(new PdfColumn<>("Gesamt", 1.2f, e -> formatValue(headerRace, e.valueMs())));
        columns.add(new PdfColumn<>("Rückstand", 1.1f, e -> e.diffMs() != null ? "+" + formatValue(headerRace, e.diffMs()) : "-"));

        return renderDocument(headerRace, true,
                ctx -> drawSection(ctx, columns, title, entries, "Teilnehmer", true));
    }

    /**
     * Punkte-Mischwertung: one Wert/Platz/Punkte column group per referenced race plus a Gesamt
     * (Punkte) column, analogous to the Kondiwettkampf-style result sheet.
     */
    public byte[] generatePointsCombinationRanking(String title, List<GaudiRankingEntryResponse> entries,
                                                    List<Race> legRaces, Race headerRace) throws IOException {
        List<PdfColumn<GaudiRankingEntryResponse>> columns = new ArrayList<>();
        columns.add(new PdfColumn<>("Platz", 0.5f, e -> String.valueOf(e.place())));
        columns.add(new PdfColumn<>("Name Vorname", 2.0f, e -> truncate(e.label(), 30)));
        for (int i = 0; i < legRaces.size(); i++) {
            int idx = i;
            Race legRace = legRaces.get(i);
            String raceLabel = truncate(legRace.name(), 12);
            columns.add(new PdfColumn<>(raceLabel + " Wert", 1.0f, e -> formatValue(legRace, legValue(e, idx, GaudiRankingLegResponse::rawValue))));
            columns.add(new PdfColumn<>(raceLabel + " Platz", 0.6f, e -> legValueString(e, idx, GaudiRankingLegResponse::place)));
            columns.add(new PdfColumn<>(raceLabel + " Pkt.", 0.7f, e -> legValueString(e, idx, GaudiRankingLegResponse::points)));
        }
        columns.add(new PdfColumn<>("Gesamt", 1.0f, e -> e.totalPoints() != null ? String.valueOf(e.totalPoints()) : "-"));

        return renderDocument(headerRace, true,
                ctx -> drawSection(ctx, columns, title, entries, "Teilnehmer", true));
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

    private record ParticipantWithPerson(Participant participant, Person person) {
    }

    private List<RankingEntry> createRankingEntriesFromParticipants(Iterable<Participant> participants,
                                                                     Race race,
                                                                     Gender filterGender,
                                                                     String filterAgeGroup,
                                                                     Long filterCategoryId) {
        // Only keep participants that have a measured result, resolving each one's Person once
        List<ParticipantWithPerson> validParticipants = StreamSupport.stream(participants.spliterator(), false)
                .filter(p -> rankingService.adjustedValue(race, p) != null)
                .map(p -> new ParticipantWithPerson(p, personService.findById(p.personId()).orElse(null)))
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
                            String ageGroup = person != null ? calculateAgeGroup(person.birthDate()) : "Unbekannt";
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
        Integer leaderValue = sortedParticipants.isEmpty() ? null : rankingService.adjustedValue(race, sortedParticipants.get(0).participant());

        for (int i = 0; i < sortedParticipants.size(); i++) {
            Participant p = sortedParticipants.get(i).participant();
            Person person = sortedParticipants.get(i).person();

            String name = formatName(person);
            String ageGroup = person != null ? calculateAgeGroup(person.birthDate()) : "Unbekannt";
            Integer adjustedValue = rankingService.adjustedValue(race, p);
            Integer diff = (i > 0) ? Math.abs(adjustedValue - leaderValue) : null;

            entries.add(new RankingEntry(
                    places.get(p.id()),
                    name,
                    ageGroup,
                    formatValue(race, p.durationMs()),
                    formatValue(race, p.penalty()),
                    formatValue(race, adjustedValue),
                    diff != null ? "+" + formatValue(race, diff) : "-"
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

    private String calculateAgeGroup(LocalDate birthDate) {
        if (birthDate == null) {
            return "Unbekannt";
        }

        int birthYear = birthDate.getYear();

        List<AgeGroup> ageGroups = StreamSupport.stream(ageGroupService.findAll().spliterator(), false)
                .toList();

        for (AgeGroup ageGroup : ageGroups) {
            if (birthYear >= ageGroup.birthYearFrom() && birthYear <= ageGroup.birthYearTo()) {
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
        int millis = timeMs % 1000;

        return String.format("%d:%02d.%03d", minutes, seconds, millis);
    }

    /**
     * Formats a raw/adjusted result value according to the race's unit: time (mm:ss.SSS) or a
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
        stream.showText(text);
        stream.endText();
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
