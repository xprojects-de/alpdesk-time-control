package x.timecontrol.services;

import jakarta.inject.Singleton;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.multipdf.PDFMergerUtility;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.font.Standard14Fonts.FontName;
import x.timecontrol.dto.GaudiDnsEntryResponse;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.dto.GaudiTeamMemberResponse;
import x.timecontrol.entities.AppSettings;
import x.timecontrol.entities.Category;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.Gender;
import x.timecontrol.dto.GaudiRankingLegResponse;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Race;

import java.awt.Color;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.*;
import java.util.function.BiFunction;
import java.util.function.Function;

@Singleton
public class PdfExportService {

    private static final Logger LOG = LoggerFactory.getLogger(PdfExportService.class);

    private static final float MARGIN = 50;
    private static final float PAGE_BREAK_THRESHOLD = 50;
    private static final PDFont FONT_REGULAR = new PDType1Font(FontName.HELVETICA);
    private static final PDFont FONT_BOLD = new PDType1Font(FontName.HELVETICA_BOLD);

    private final CategoryService categoryService;
    private final RankingViewService rankingViewService;
    private final SettingsService settingsService;

    public PdfExportService(CategoryService categoryService, RankingViewService rankingViewService,
                            SettingsService settingsService) {
        this.categoryService = categoryService;
        this.rankingViewService = rankingViewService;
        this.settingsService = settingsService;
    }

    private record PdfColumn<T>(String header, float weight, Function<T, String> valueFn) {
    }

    private static final List<PdfColumn<RankingViewService.DnsRow>> DNS_COLUMNS = List.of(
            new PdfColumn<>("Position", 0.6f, e -> String.valueOf(e.position())),
            new PdfColumn<>("StNr.", 0.5f, RankingViewService.DnsRow::raceNumber),
            new PdfColumn<>("Name Vorname", 2.0f, e -> truncate(e.name(), 30)),
            new PdfColumn<>("Jg.", 0.5f, RankingViewService.DnsRow::birthYear),
            new PdfColumn<>("ID", 1.0f, e -> externalIdOrDash(e.externalId())),
            new PdfColumn<>("Alterskl.", 1.2f, e -> truncate(e.ageGroup(), 16)),
            new PdfColumn<>("Team", 1.5f, e -> truncate(e.team(), 20)),
            new PdfColumn<>("Status", 0.8f, RankingViewService.DnsRow::status)
    );

    /**
     * Drops the "ID" column when no DNS row has an externalId set, and "StNr."/"Jg." unless
     * requested, mirroring {@link #rankingColumns}.
     */
    private List<PdfColumn<RankingViewService.DnsRow>> dnsColumns(List<RankingViewService.DnsRow> rows,
                                                                   PersonColumns personColumns) {
        List<PdfColumn<RankingViewService.DnsRow>> columns = personColumns.apply(DNS_COLUMNS);
        if (rows.stream().noneMatch(r -> hasExternalId(r.externalId()))) {
            columns = columns.stream().filter(c -> !c.header().equals("ID")).toList();
        }
        return columns;
    }

    /**
     * Which of the optional per-person columns "StNr." (race number) and "Jg." (birth year) a
     * document prints - the operator's two switches in {@code AppSettings}, or {@link #NONE} for
     * the Gaudi-Modus exports, whose rows combine several races, where one race number would be
     * misleading.
     */
    private record PersonColumns(boolean raceNumber, boolean birthYear) {
        static final PersonColumns NONE = new PersonColumns(false, false);

        <T> List<PdfColumn<T>> apply(List<PdfColumn<T>> columns) {
            return columns.stream()
                    .filter(c -> raceNumber || !c.header().equals("StNr."))
                    .filter(c -> birthYear || !c.header().equals("Jg."))
                    .toList();
        }
    }

    /**
     * Read once per document, so every section of it has the same layout even if the operator
     * flips a switch while the export is running.
     */
    private PersonColumns personColumns() {
        AppSettings settings = settingsService.getSettings();
        return new PersonColumns(settings.pdfShowRaceNumber(), settings.pdfShowBirthYear());
    }

    /**
     * "Nicht gewertet" columns for Los-Modus, whose rows are whole pairs (see
     * LosModeCalculator#computeDnsEntries) - no single person's ID or age group to show, and the pair
     * label needs the extra width instead.
     */
    private static final List<PdfColumn<RankingViewService.DnsRow>> LOS_DNS_COLUMNS = List.of(
            new PdfColumn<>("Position", 0.6f, e -> String.valueOf(e.position())),
            new PdfColumn<>("Paarung", 3.2f, e -> truncate(e.name(), 48)),
            new PdfColumn<>("Team", 1.5f, e -> truncate(e.team(), 20)),
            new PdfColumn<>("Status", 0.8f, RankingViewService.DnsRow::status)
    );

    private static final List<PdfColumn<RankingViewService.RankingEntry>> RANKING_COLUMNS = List.of(
            new PdfColumn<>("Platz", 0.4f, e -> String.valueOf(e.place())),
            new PdfColumn<>("StNr.", 0.5f, RankingViewService.RankingEntry::raceNumber),
            new PdfColumn<>("Name Vorname", 1.8f, e -> truncate(e.name(), 30)),
            new PdfColumn<>("Jg.", 0.5f, RankingViewService.RankingEntry::birthYear),
            new PdfColumn<>("ID", 1.0f, e -> externalIdOrDash(e.externalId())),
            new PdfColumn<>("Alterskl.", 1.2f, e -> truncate(e.ageGroup(), 16)),
            new PdfColumn<>("Team", 1.3f, e -> truncate(e.team(), 18)),
            new PdfColumn<>("Wert", 1.1f, RankingViewService.RankingEntry::valueFormatted),
            new PdfColumn<>("Strafe", 0.9f, RankingViewService.RankingEntry::penaltyFormatted),
            new PdfColumn<>("Gesamt", 1.1f, RankingViewService.RankingEntry::totalFormatted),
            new PdfColumn<>("Diff", 1.0f, RankingViewService.RankingEntry::diffFormatted)
    );

    private static final List<PdfColumn<RankingViewService.StartListEntry>> START_LIST_COLUMNS = List.of(
            new PdfColumn<>("StNr.", 0.5f, RankingViewService.StartListEntry::raceNumber),
            new PdfColumn<>("Name Vorname", 2.2f, e -> truncate(e.name(), 35)),
            new PdfColumn<>("Jg.", 0.5f, RankingViewService.StartListEntry::birthYear),
            new PdfColumn<>("Geschl.", 0.7f, RankingViewService.StartListEntry::gender),
            new PdfColumn<>("Alterskl.", 1.5f, e -> truncate(e.ageGroup(), 20)),
            new PdfColumn<>("Team", 1.5f, e -> truncate(e.team(), 20)),
            new PdfColumn<>("Kategorie", 1.3f, e -> truncate(e.category(), 20)),
            new PdfColumn<>("Gruppe", 1.1f, e -> truncate(e.startGroupLabel(), 16)),
            new PdfColumn<>("Zeitversatz", 1.0f, RankingViewService.StartListEntry::startGroupOffset)
    );

    /**
     * Prepends a race's/Gaudi-Modus's uploaded cover page (see {@code Race#coverPagePdf}/
     * {@code GaudiMode#coverPagePdf}) to a generated PDF via {@link PDFMergerUtility}, rather than
     * drawing it as part of the page-by-page rendering - it's an arbitrary, already-laid-out PDF
     * with no relation to our own page-drawing code. Called from {@link #renderDocument} only, so
     * every export automatically carries its cover page with no controller involvement. Returns
     * {@code contentPdf} unchanged when there is no cover page (the common case) and also - rather
     * than failing the whole export - when the stored cover page turns out not to be mergeable
     * (e.g. corrupted bytes); upload-time validation already rejects invalid PDFs, but the export
     * itself must never break because of a bad cover page.
     */
    private byte[] withCoverPage(byte[] coverPagePdf, byte[] contentPdf) {
        if (coverPagePdf == null) {
            return contentPdf;
        }
        try (PDDocument cover = Loader.loadPDF(coverPagePdf);
             PDDocument content = Loader.loadPDF(contentPdf)) {
            new PDFMergerUtility().appendDocument(cover, content);
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            cover.save(out);
            return out.toByteArray();
        } catch (Exception e) {
            LOG.warn("Could not prepend cover page, exporting without it: {}", e.getMessage());
            return contentPdf;
        }
    }

    /**
     * No cover page on the start list - only on the rankings/results exports below, which
     * {@link #renderDocument(Race, boolean, PdfBody)} prepends it to automatically.
     */
    public byte[] generateStartList(Iterable<Participant> participants, Race race) throws IOException {
        List<RankingViewService.StartListEntry> entries = rankingViewService.createStartListEntries(participants, race);
        boolean anyStartGroup = entries.stream().anyMatch(RankingViewService.StartListEntry::hasStartGroup);
        Function<RankingViewService.StartListEntry, Color> rowColorFn = anyStartGroup
                ? e -> e.startGroupColor() != null ? parseHexColor(e.startGroupColor()) : null
                : null;
        return renderDocument(race, race.name(), null, false,
                ctx -> drawSection(ctx, startListColumns(entries), "Startliste", entries, true, rowColorFn));
    }

    /**
     * Drops the "Kategorie" column when none of the entries have an assigned category, and the
     * "Gruppe"/"Zeitversatz" pair when none have a start group, instead of always reserving space
     * for columns that would otherwise show "-" for every row. With start groups, "Zeitversatz" is
     * always shown alongside "Gruppe" ("-" for a group without one).
     */
    private List<PdfColumn<RankingViewService.StartListEntry>> startListColumns(List<RankingViewService.StartListEntry> entries) {
        List<PdfColumn<RankingViewService.StartListEntry>> columns = START_LIST_COLUMNS;
        if (entries.stream().noneMatch(RankingViewService.StartListEntry::hasCategory)) {
            columns = columns.stream().filter(c -> !c.header().equals("Kategorie")).toList();
        }
        if (entries.stream().noneMatch(RankingViewService.StartListEntry::hasStartGroup)) {
            columns = columns.stream().filter(c -> !c.header().equals("Gruppe") && !c.header().equals("Zeitversatz")).toList();
        }
        return columns;
    }

    /**
     * Parses a "#rrggbb" start-group color (see StartGroupTemplate#color) into an AWT Color for the
     * start list's per-row group marker; falls back to null (no marker drawn) for anything that
     * isn't a well-formed hex color, rather than failing the whole PDF export over a bad value.
     */
    private static Color parseHexColor(String hex) {
        try {
            return Color.decode(hex);
        } catch (NumberFormatException e) {
            return null;
        }
    }

    /**
     * Drops the "Strafe" and "Gesamt" columns when none of the entries actually have a penalty,
     * instead of always reserving space for columns that would otherwise show "-"/zero for every
     * row, or duplicate "Wert" verbatim since Gesamt == Wert when there is no penalty to add. Also
     * drops "ID" when no entry has one set, per {@link #hasExternalId}, and "StNr."/"Jg." when the
     * operator switched them off (see {@link #personColumns()}).
     */
    private List<PdfColumn<RankingViewService.RankingEntry>> rankingColumns(List<RankingViewService.RankingEntry> entries,
                                                                           PersonColumns personColumns) {
        List<PdfColumn<RankingViewService.RankingEntry>> columns = personColumns.apply(RANKING_COLUMNS);
        if (entries.stream().noneMatch(RankingViewService.RankingEntry::hasPenalty)) {
            columns = columns.stream()
                    .filter(c -> !c.header().equals("Strafe") && !c.header().equals("Gesamt"))
                    .toList();
        }
        if (entries.stream().noneMatch(e -> hasExternalId(e.externalId()))) {
            columns = columns.stream().filter(c -> !c.header().equals("ID")).toList();
        }
        return columns;
    }

    /**
     * Whether a Person's externalId is actually set - used to hide the "ID" column in a
     * ranking/results PDF export when nobody in it has one, instead of always reserving space for
     * a column that would otherwise show "-" for every row.
     */
    private static boolean hasExternalId(String externalId) {
        return externalId != null && !externalId.isBlank();
    }

    private static String externalIdOrDash(String externalId) {
        return hasExternalId(externalId) ? externalId : "-";
    }

    /**
     * Formats a "Rückstand" (gap-to-leader) with an explicit sign rather than always prefixing "+":
     * a DESC-sorted (higher-is-better) Zeit-Kombination - explicitly supported, see
     * {@code TimeCombinationModeCalculator} - has a negative {@code diffMs} for every non-leader
     * entry, which an unconditional "+" plus {@code formatValue()}'s negative-number handling would
     * otherwise render as a garbled string (e.g. "+0:-05.-00") instead of "-0:05.00".
     */
    private static String formatSignedDiff(Race race, Integer diffMs) {
        if (diffMs == null) {
            return "-";
        }
        return (diffMs >= 0 ? "+" : "-") + RankingViewService.formatValue(race, Math.abs(diffMs));
    }

    /**
     * Sorted by each participant's {@link Participant#effectiveStartOrder()} - their derived
     * start position when this race has one (e.g. a slalom run 2 whose order was built from run
     * 1's results, so bib 30 can be printed above bib 5), otherwise plain race-number order. A
     * participant excluded from the start order entirely (DSQ/DNF/DNS with no derived position)
     * doesn't print here - they're not starting.
     */
    public byte[] generateOverallRanking(Iterable<Participant> participants, Race race) throws IOException {
        PersonColumns personColumns = personColumns();
        RankingViewService.PersonTeamLookup lookup = rankingViewService.loadPersonTeamLookup(participants);
        List<RankingViewService.RankingEntry> entries = rankingViewService.createRankingEntriesFromParticipants(participants, race, null, null, null, lookup);
        List<RankingViewService.DnsRow> dns = rankingViewService.createDnsRows(participants, race, lookup);
        return renderDocument(race, true, ctx -> {
            drawSection(ctx, rankingColumns(entries, personColumns), "Gesamtwertung", entries, true);
            drawDnsSection(ctx, dns, personColumns);
        });
    }

    public byte[] generateGenderRanking(Iterable<Participant> participants, String genderStr, Race race) throws IOException {
        PersonColumns personColumns = personColumns();
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        RankingViewService.PersonTeamLookup lookup = rankingViewService.loadPersonTeamLookup(participants);
        List<RankingViewService.RankingEntry> entries = rankingViewService.createRankingEntriesFromParticipants(participants, race, gender, null, null, lookup);
        List<RankingViewService.DnsRow> dns = rankingViewService.createDnsRows(participants, race, gender, null, null, lookup);
        String title = "Wertung " + rankingViewService.genderLabel(gender);
        return renderDocument(race, true, ctx -> {
            drawSection(ctx, rankingColumns(entries, personColumns), title, entries, true);
            drawDnsSection(ctx, dns, personColumns);
        });
    }

    public byte[] generateAgeGroupGenderRanking(Iterable<Participant> participants,
                                                 String ageGroup, String genderStr, Race race) throws IOException {
        PersonColumns personColumns = personColumns();
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        RankingViewService.PersonTeamLookup lookup = rankingViewService.loadPersonTeamLookup(participants);
        List<RankingViewService.RankingEntry> entries = rankingViewService.createRankingEntriesFromParticipants(participants, race, gender, ageGroup, null, lookup);
        List<RankingViewService.DnsRow> dns = rankingViewService.createDnsRows(participants, race, gender, ageGroup, null, lookup);
        String title = "Wertung " + ageGroup + " " + rankingViewService.genderLabel(gender);
        return renderDocument(race, true, ctx -> {
            drawSection(ctx, rankingColumns(entries, personColumns), title, entries, true);
            drawDnsSection(ctx, dns, personColumns);
        });
    }

    public byte[] generateAllAgeGroupsRanking(Iterable<Participant> participants, Race race) throws IOException {
        PersonColumns personColumns = personColumns();
        List<String> uniqueAgeGroupNames = rankingViewService.uniqueAgeGroupNamesYoungestFirst(race);
        RankingViewService.PersonTeamLookup lookup = rankingViewService.loadPersonTeamLookup(participants);
        List<RankingViewService.DnsRow> dns = rankingViewService.createDnsRows(participants, race, lookup);

        return renderDocument(race, true, ctx -> {
            for (String ageGroupName : uniqueAgeGroupNames) {
                for (Gender gender : List.of(Gender.FEMALE, Gender.MALE)) {
                    List<RankingViewService.RankingEntry> entries = rankingViewService.createRankingEntriesFromParticipants(participants, race, gender, ageGroupName, null, lookup);
                    if (!entries.isEmpty()) {
                        String title = "Wertung " + rankingViewService.ageGroupSectionLabel(ageGroupName) + " " + rankingViewService.genderLabel(gender);
                        drawSection(ctx, rankingColumns(entries, personColumns), title, entries, false);
                    }
                }
            }
            drawDnsSection(ctx, dns, personColumns);
        });
    }

    public byte[] generateCategoryRanking(Iterable<Participant> participants, Long categoryId, Race race) throws IOException {
        PersonColumns personColumns = personColumns();
        String categoryName = categoryService.findById(categoryId)
                .map(Category::name)
                .orElse("Unbekannt");
        RankingViewService.PersonTeamLookup lookup = rankingViewService.loadPersonTeamLookup(participants);
        List<RankingViewService.RankingEntry> entries = rankingViewService.createRankingEntriesFromParticipants(participants, race, null, null, categoryId, lookup);
        List<RankingViewService.DnsRow> dns = rankingViewService.createDnsRows(participants, race, null, null, categoryId, lookup);
        String title = "Wertung " + categoryName;
        return renderDocument(race, true, ctx -> {
            drawSection(ctx, rankingColumns(entries, personColumns), title, entries, true);
            drawDnsSection(ctx, dns, personColumns);
        });
    }

    public byte[] generateOverallByCategoryRanking(Iterable<Participant> participants, Race race) throws IOException {
        PersonColumns personColumns = personColumns();
        List<Category> categories = rankingViewService.sortedCategoriesWithNoCategory();
        RankingViewService.PersonTeamLookup lookup = rankingViewService.loadPersonTeamLookup(participants);
        List<RankingViewService.DnsRow> dns = rankingViewService.createDnsRows(participants, race, lookup);

        return renderDocument(race, true, ctx -> {
            for (Category category : categories) {
                List<RankingViewService.RankingEntry> entries = rankingViewService.createRankingEntriesFromParticipants(participants, race, null, null, category.id(), lookup);
                if (!entries.isEmpty()) {
                    String title = "Wertung " + category.name();
                    drawSection(ctx, rankingColumns(entries, personColumns), title, entries, false);
                }
            }
            drawDnsSection(ctx, dns, personColumns);
        });
    }

    public byte[] generateGenderByCategoryRanking(Iterable<Participant> participants, String genderStr, Race race) throws IOException {
        PersonColumns personColumns = personColumns();
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        List<Category> categories = rankingViewService.sortedCategoriesWithNoCategory();
        RankingViewService.PersonTeamLookup lookup = rankingViewService.loadPersonTeamLookup(participants);
        // Scoped to this gender but split across every category, so only the gender dimension is
        // filtered here - the category dimension stays open, the sections below cover them all.
        List<RankingViewService.DnsRow> dns = rankingViewService.createDnsRows(participants, race, gender, null, null, lookup);

        return renderDocument(race, true, ctx -> {
            for (Category category : categories) {
                List<RankingViewService.RankingEntry> entries = rankingViewService.createRankingEntriesFromParticipants(participants, race, gender, null, category.id(), lookup);
                if (!entries.isEmpty()) {
                    String title = "Wertung " + category.name() + " " + rankingViewService.genderLabel(gender);
                    drawSection(ctx, rankingColumns(entries, personColumns), title, entries, false);
                }
            }
            drawDnsSection(ctx, dns, personColumns);
        });
    }

    public byte[] generateAllAgeGroupsByCategoryRanking(Iterable<Participant> participants, Race race) throws IOException {
        PersonColumns personColumns = personColumns();
        List<String> uniqueAgeGroupNames = rankingViewService.uniqueAgeGroupNamesYoungestFirst(race);
        List<Category> categories = rankingViewService.sortedCategoriesWithNoCategory();
        RankingViewService.PersonTeamLookup lookup = rankingViewService.loadPersonTeamLookup(participants);
        List<RankingViewService.DnsRow> dns = rankingViewService.createDnsRows(participants, race, lookup);

        return renderDocument(race, true, ctx -> {
            for (String ageGroupName : uniqueAgeGroupNames) {
                for (Gender gender : List.of(Gender.FEMALE, Gender.MALE)) {
                    for (Category category : categories) {
                        List<RankingViewService.RankingEntry> entries = rankingViewService.createRankingEntriesFromParticipants(participants, race, gender, ageGroupName, category.id(), lookup);
                        if (!entries.isEmpty()) {
                            String title = "Wertung " + rankingViewService.ageGroupSectionLabel(ageGroupName) + " " + rankingViewService.genderLabel(gender) + " " + category.name();
                            drawSection(ctx, rankingColumns(entries, personColumns), title, entries, false);
                        }
                    }
                }
            }
            drawDnsSection(ctx, dns, personColumns);
        });
    }

    public byte[] generateLosModeRanking(GaudiMode gaudiMode, List<GaudiRankingEntryResponse> entries, Race race,
                                         List<GaudiDnsEntryResponse> dnsEntries) throws IOException {
        List<PdfColumn<GaudiRankingEntryResponse>> columns = List.of(
                new PdfColumn<>("Platz", 0.6f, e -> String.valueOf(e.place())),
                new PdfColumn<>("Paarung", 2.2f, e -> truncate(e.label(), 40)),
                new PdfColumn<>("Team", 1.5f, e -> truncate(e.team(), 20)),
                new PdfColumn<>("Wert 1", 1f, e -> RankingViewService.formatValue(race, e.time1Ms())),
                new PdfColumn<>("Wert 2", 1f, e -> RankingViewService.formatValue(race, e.time2Ms())),
                new PdfColumn<>("Ø-Wert Paar", 1f, e -> RankingViewService.formatValue(race, e.valueMs())),
                new PdfColumn<>("Ø-Wert Gesamt", 1f, e -> RankingViewService.formatValue(race, e.referenceMs())),
                new PdfColumn<>("Abweichung", 1f, e -> RankingViewService.formatValue(race, e.diffMs()))
        );
        return renderDocument(race, gaudiMode, true, ctx -> {
            drawSection(ctx, columns, gaudiMode.name(), entries, true);
            drawDnsSection(ctx, toDnsRows(dnsEntries), LOS_DNS_COLUMNS);
        });
    }

    /**
     * Mannschaftswertung: a fixed summary row (Platz, Mannschaft, Gesamtwert) per team, with each
     * team's individual members and their adjusted times drawn as wrapped detail line(s) below it -
     * only the counted teamSize best members of each qualifying team, never an excluded extra
     * member or a DSQ/DNF/DNS teammate (see {@link x.timecontrol.services.gaudi.TeamModeCalculator}).
     */
    public byte[] generateTeamModeRanking(GaudiMode gaudiMode, List<GaudiRankingEntryResponse> entries, Race race) throws IOException {
        List<PdfColumn<GaudiRankingEntryResponse>> columns = List.of(
                new PdfColumn<>("Platz", 0.6f, e -> String.valueOf(e.place())),
                new PdfColumn<>("Mannschaft", 2.5f, e -> truncate(e.label(), 40)),
                new PdfColumn<>("Gesamtwert", 1f, e -> RankingViewService.formatValue(race, e.valueMs()))
        );
        return renderDocument(race, gaudiMode, false,
                ctx -> drawSectionWithDetails(ctx, columns, gaudiMode.name(), entries, true,
                        e -> teamMemberDetailBlocks(e, race)));
    }

    private List<String> teamMemberDetailBlocks(GaudiRankingEntryResponse entry, Race race) {
        if (entry.members() == null) {
            return List.of();
        }
        List<String> blocks = new ArrayList<>();
        for (GaudiTeamMemberResponse member : entry.members()) {
            String value = RankingViewService.formatValue(race, member.valueMs());
            blocks.add(truncate(member.label(), 25) + ": " + value);
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
    public byte[] generateTimeCombinationRanking(GaudiMode gaudiMode, List<GaudiRankingEntryResponse> entries,
                                                  List<Race> legRaces, Race headerRace,
                                                  List<GaudiDnsEntryResponse> dnsEntries) throws IOException {
        List<PdfColumn<GaudiRankingEntryResponse>> summaryColumns = new ArrayList<>(List.of(
                new PdfColumn<>("Platz", 0.5f, e -> String.valueOf(e.place())),
                new PdfColumn<>("Name Vorname", 2.3f, e -> truncate(e.label(), 32))
        ));
        if (anyHasExternalId(entries)) {
            summaryColumns.add(new PdfColumn<>("ID", 1.0f, e -> externalIdOrDash(e.externalId())));
        }
        summaryColumns.addAll(List.of(
                new PdfColumn<>("Team", 1.6f, e -> truncate(e.team(), 20)),
                // All legRaces share one ResultUnit (enforced by GaudiModeService.validate()), so the
                // aggregate columns can be formatted using any one of them - headerRace is one of the legs.
                new PdfColumn<>("Gesamt", 1.2f, e -> RankingViewService.formatValue(headerRace, e.valueMs())),
                new PdfColumn<>("Rückstand", 1.1f, e -> formatSignedDiff(headerRace, e.diffMs()))
        ));

        return renderDocument(headerRace, gaudiMode, true, ctx -> {
            drawSectionWithDetails(ctx, summaryColumns, gaudiMode.name(), entries, true, e -> timeCombinationDetailBlocks(e, legRaces));
            drawDnsSection(ctx, toDnsRows(dnsEntries));
        });
    }

    private List<String> timeCombinationDetailBlocks(GaudiRankingEntryResponse entry, List<Race> legRaces) {
        List<String> blocks = new ArrayList<>();
        for (int i = 0; i < legRaces.size(); i++) {
            Race legRace = legRaces.get(i);
            String raceLabel = truncate(legRace.name(), 16);
            String zeit = RankingViewService.formatValue(legRace, legValue(entry, i, PdfExportService::netLegValue));
            String strafe = RankingViewService.formatPenalty(legRace, legValue(entry, i, GaudiRankingLegResponse::penalty));
            blocks.add(raceLabel + ": Zeit " + zeit + ", Strafe " + strafe);
        }
        return blocks;
    }

    /**
     * Punkte-Mischwertung: a fixed summary row (Platz, Name, Team, Gesamt) per participant, with the
     * per-race Wert/Platz/Pkt. breakdown drawn as a small indented sub-table below it instead of one
     * column group per race - see {@link #generateTimeCombinationRanking} for why not the latter.
     */
    public byte[] generatePointsCombinationRanking(GaudiMode gaudiMode, List<GaudiRankingEntryResponse> entries,
                                                    List<Race> legRaces, Race headerRace,
                                                    List<GaudiDnsEntryResponse> dnsEntries) throws IOException {
        boolean showStrafe = anyLegHasPenalty(entries);
        return renderDocument(headerRace, gaudiMode, true, ctx -> {
            drawSectionWithDetailTable(ctx, pointsCombinationColumns(anyHasExternalId(entries)), gaudiMode.name(), entries, true,
                    pointsCombinationDetailColumns(showStrafe), e -> pointsCombinationDetailRows(e, legRaces));
            drawDnsSection(ctx, toDnsRows(dnsEntries));
        });
    }

    /**
     * Punkte-Mischwertung for one gender, analogous to {@link #generateGenderRanking} for normal
     * participant rankings. Unlike that method, there's nothing to filter here: {@code entries} is
     * expected to already be the result of {@code GaudiModeService.computeRankingForCategory}, i.e.
     * a ranking recomputed from scratch using only that gender's participants in each leg race - so
     * "Platz" and the per-leg breakdown are relative to that gender, not the whole field.
     */
    public byte[] generatePointsCombinationGenderRanking(GaudiMode gaudiMode, List<GaudiRankingEntryResponse> entries,
                                                          List<Race> legRaces, Race headerRace, String genderStr,
                                                          List<GaudiDnsEntryResponse> dnsEntries) throws IOException {
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        String fullTitle = "Wertung " + rankingViewService.genderLabel(gender);
        boolean showStrafe = anyLegHasPenalty(entries);

        return renderDocument(headerRace, gaudiMode, true, ctx -> {
            drawSectionWithDetailTable(ctx, pointsCombinationColumns(anyHasExternalId(entries)), fullTitle, entries, true,
                    pointsCombinationDetailColumns(showStrafe), e -> pointsCombinationDetailRows(e, legRaces));
            drawDnsSection(ctx, toDnsRows(dnsEntries));
        });
    }

    /**
     * Punkte-Mischwertung for one age group x gender, analogous to
     * {@link #generateAgeGroupGenderRanking} for normal participant rankings. As with
     * {@link #generatePointsCombinationGenderRanking}, {@code entries} is expected to already be
     * scoped to that category via {@code GaudiModeService.computeRankingForCategory}.
     */
    public byte[] generatePointsCombinationAgeGroupGenderRanking(GaudiMode gaudiMode, List<GaudiRankingEntryResponse> entries,
                                                                  List<Race> legRaces, Race headerRace,
                                                                  String ageGroup, String genderStr,
                                                                  List<GaudiDnsEntryResponse> dnsEntries) throws IOException {
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        String fullTitle = "Wertung " + ageGroup + " " + rankingViewService.genderLabel(gender);
        boolean showStrafe = anyLegHasPenalty(entries);

        return renderDocument(headerRace, gaudiMode, true, ctx -> {
            drawSectionWithDetailTable(ctx, pointsCombinationColumns(anyHasExternalId(entries)), fullTitle, entries, true,
                    pointsCombinationDetailColumns(showStrafe), e -> pointsCombinationDetailRows(e, legRaces));
            drawDnsSection(ctx, toDnsRows(dnsEntries));
        });
    }

    /**
     * Punkte-Mischwertung split into one section per age group x gender, youngest first, analogous
     * to {@link #generateAllAgeGroupsRanking} for normal participant rankings. Each section's ranking
     * is fetched on demand via {@code categoryFetcher} (backed by
     * {@code GaudiModeService.computeRankingForCategory}) rather than filtered from one flat list,
     * so every section is a from-scratch recompute scoped to just that age group and gender.
     */
    public byte[] generatePointsCombinationAllAgeGroupsRanking(
            GaudiMode gaudiMode, List<Race> legRaces, Race headerRace,
            BiFunction<Gender, String, List<GaudiRankingEntryResponse>> categoryFetcher,
            List<GaudiDnsEntryResponse> dnsEntries) throws IOException {
        List<String> uniqueAgeGroupNames = rankingViewService.uniqueAgeGroupNamesYoungestFirst(headerRace);

        return renderDocument(headerRace, gaudiMode, true, ctx -> {
            for (String ageGroupName : uniqueAgeGroupNames) {
                for (Gender gender : List.of(Gender.FEMALE, Gender.MALE)) {
                    List<GaudiRankingEntryResponse> entries = categoryFetcher.apply(gender, ageGroupName);
                    if (!entries.isEmpty()) {
                        String sectionTitle = "Wertung " + rankingViewService.ageGroupSectionLabel(ageGroupName) + " " + rankingViewService.genderLabel(gender);
                        drawSectionWithDetailTable(ctx, pointsCombinationColumns(anyHasExternalId(entries)), sectionTitle, entries, false,
                                pointsCombinationDetailColumns(anyLegHasPenalty(entries)), e -> pointsCombinationDetailRows(e, legRaces));
                    }
                }
            }
            drawDnsSection(ctx, toDnsRows(dnsEntries));
        });
    }

    /**
     * Drops the "ID" column when no entry in this section's ranking has a Person externalId
     * set, mirroring how {@link #pointsCombinationDetailColumns} hides "Strafe".
     */
    private static List<PdfColumn<GaudiRankingEntryResponse>> pointsCombinationColumns(boolean showExternalId) {
        List<PdfColumn<GaudiRankingEntryResponse>> columns = new ArrayList<>(List.of(
                new PdfColumn<>("Platz", 0.5f, e -> String.valueOf(e.place())),
                new PdfColumn<>("Name Vorname", 2.5f, e -> truncate(e.label(), 35))
        ));
        if (showExternalId) {
            columns.add(new PdfColumn<>("ID", 1.0f, e -> externalIdOrDash(e.externalId())));
        }
        columns.add(new PdfColumn<>("Team", 1.8f, e -> truncate(e.team(), 22)));
        columns.add(new PdfColumn<>("Gesamt", 1.0f, e -> e.totalPoints() != null ? String.valueOf(e.totalPoints()) : "-"));
        return columns;
    }

    private record PointsCombinationLegRow(String raceName, String wert, String strafe, String gesamt, String platz,
                                            String pkt) {
    }

    /**
     * Drops the "Strafe" and "Gesamt" columns when none of the legs across any entry actually carry
     * a penalty, mirroring how {@link #rankingColumns} hides the same pair for the normal ranking
     * table: without a penalty "Gesamt" would repeat "Wert" verbatim for every row.
     */
    private static List<PdfColumn<PointsCombinationLegRow>> pointsCombinationDetailColumns(boolean showStrafe) {
        List<PdfColumn<PointsCombinationLegRow>> columns = new ArrayList<>();
        columns.add(new PdfColumn<>("Rennen", 2.4f, PointsCombinationLegRow::raceName));
        columns.add(new PdfColumn<>("Wert", 1.0f, PointsCombinationLegRow::wert));
        if (showStrafe) {
            columns.add(new PdfColumn<>("Strafe", 0.8f, PointsCombinationLegRow::strafe));
            columns.add(new PdfColumn<>("Gesamt", 1.0f, PointsCombinationLegRow::gesamt));
        }
        columns.add(new PdfColumn<>("Platz", 0.7f, PointsCombinationLegRow::platz));
        columns.add(new PdfColumn<>("Pkt.", 0.7f, PointsCombinationLegRow::pkt));
        return columns;
    }

    private static boolean anyLegHasPenalty(List<GaudiRankingEntryResponse> entries) {
        return entries.stream()
                .filter(e -> e.legs() != null)
                .flatMap(e -> e.legs().stream())
                .anyMatch(leg -> leg.penalty() != null && leg.penalty() != 0);
    }

    /**
     * Whether any entry carries a Person externalId - used to hide the "ID" column in the
     * Zeit-Kombination / Punkte-Mischwertung PDF exports when nobody in the ranking has one.
     */
    private static boolean anyHasExternalId(List<GaudiRankingEntryResponse> entries) {
        return entries.stream().anyMatch(e -> hasExternalId(e.externalId()));
    }

    /**
     * Converts the DNS entries computed by {@code GaudiModeService} (Zeit-Kombination /
     * Punkte-Mischwertung only - see {@link x.timecontrol.dto.GaudiDnsEntryResponse}) into the
     * numbered {@link RankingViewService.DnsRow}s {@link #drawDnsSection} draws.
     */
    private static List<RankingViewService.DnsRow> toDnsRows(List<GaudiDnsEntryResponse> entries) {
        List<RankingViewService.DnsRow> rows = new ArrayList<>();
        for (int i = 0; i < entries.size(); i++) {
            GaudiDnsEntryResponse e = entries.get(i);
            String name = (e.lastName() + " " + e.firstName()).trim();
            rows.add(new RankingViewService.DnsRow(i + 1, name, e.externalId(), e.ageGroup(), e.team() != null ? e.team() : "-", e.status(),
                    null, null));
        }
        return rows;
    }

    private List<PointsCombinationLegRow> pointsCombinationDetailRows(GaudiRankingEntryResponse entry, List<Race> legRaces) {
        List<PointsCombinationLegRow> rows = new ArrayList<>();
        for (int i = 0; i < legRaces.size(); i++) {
            Race legRace = legRaces.get(i);
            String raceLabel = truncate(legRace.name(), 40);
            String legStatus = entry.legs() != null && i < entry.legs().size() ? entry.legs().get(i).status() : null;
            String wert = legStatus != null ? legStatus
                    : RankingViewService.formatValue(legRace, legValue(entry, i, PdfExportService::netLegValue));
            String strafe = RankingViewService.formatPenalty(legRace, legValue(entry, i, GaudiRankingLegResponse::penalty));
            // The leg's adjustedValue is what RankingService#adjustedValue produced for that single
            // race, formatted through the very same formatValue() the single-race ranking uses for
            // its own "Gesamt" column - so the number printed here is identical (rounding included)
            // to the one in that race's own evaluation, rather than re-derived from Wert + Strafe.
            String gesamt = RankingViewService.formatValue(legRace, legValue(entry, i, GaudiRankingLegResponse::adjustedValue));
            String platz = legValueString(entry, i, GaudiRankingLegResponse::place);
            String pkt = legValueString(entry, i, GaudiRankingLegResponse::points);
            rows.add(new PointsCombinationLegRow(raceLabel, wert, strafe, gesamt, platz, pkt));
        }
        return rows;
    }

    private Integer legValue(GaudiRankingEntryResponse entry, int idx, Function<GaudiRankingLegResponse, Integer> getter) {
        if (entry.legs() == null || idx >= entry.legs().size()) {
            return null;
        }
        GaudiRankingLegResponse leg = entry.legs().get(idx);
        return leg != null ? getter.apply(leg) : null;
    }

    /**
     * A leg's raw value netted of its start-group offset (see RankingService#netDurationMs), so a
     * leg's printed Zeit + Strafe adds up to the value that actually counted.
     */
    private static Integer netLegValue(GaudiRankingLegResponse leg) {
        if (leg.rawValue() == null || leg.startGroupOffsetMs() == null) {
            return leg.rawValue();
        }
        return Math.max(0, leg.rawValue() - leg.startGroupOffsetMs());
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
        private final String headerName;
        private final PDRectangle pageSize;
        private PDPage page;
        private PDPageContentStream stream;
        private float y;
        private boolean firstPage = true;

        PdfContext(PDDocument document, Race race, String headerName, PDRectangle pageSize) throws IOException {
            this.document = document;
            this.race = race;
            this.headerName = headerName;
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
            y = drawPageHeader(stream, race, headerName, page.getMediaBox().getWidth(), page.getMediaBox().getHeight());
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
            hLine(y, MARGIN, page.getMediaBox().getWidth() - MARGIN);
        }

        void hLine(float y, float xStart, float xEnd) throws IOException {
            stream.moveTo(xStart, y);
            stream.lineTo(xEnd, y);
            stream.stroke();
        }

        /**
         * Fills a background rectangle - {@code yBottom} is its lower edge, growing upward by
         * {@code height}, matching PDF's bottom-up coordinate system. Resets the fill color back to
         * black afterward so it never leaks into unrelated text drawn later via {@link #text}, which
         * doesn't set its own color.
         */
        void fillRect(float x, float yBottom, float width, float height, Color color) throws IOException {
            stream.setNonStrokingColor(color);
            stream.addRect(x, yBottom, width, height);
            stream.fill();
            stream.setNonStrokingColor(Color.BLACK);
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

    /**
     * Plain race exports (start list, all rankings): the race's own cover page (if any) is
     * prepended automatically - see {@link #withCoverPage}.
     */
    private byte[] renderDocument(Race race, boolean landscape, PdfBody body) throws IOException {
        return renderDocument(race, race.name(), race.coverPagePdf(), landscape, body);
    }

    /**
     * Gaudi-Modus exports: {@code headerRace} supplies only the page header's info block
     * (organisation, weather, ...) - the cover page prepended automatically is the Gaudi-Modus
     * instance's own, never {@code headerRace}'s, since that's just one arbitrary combined leg and
     * its personal cover page has nothing to do with the combined ranking. See {@link #withCoverPage}.
     */
    private byte[] renderDocument(Race headerRace, GaudiMode gaudiMode, boolean landscape, PdfBody body) throws IOException {
        return renderDocument(headerRace, gaudiMode.name(), gaudiMode.coverPagePdf(), landscape, body);
    }

    /**
     * @param headerName the title drawn in the page header - normally {@code race.name()}, but for
     *                    Gaudi-Modus exports the Gaudi-Modus's own name so the header doesn't show
     *                    one arbitrary underlying leg race's name instead.
     */
    private byte[] renderDocument(Race race, String headerName, byte[] coverPagePdf, boolean landscape, PdfBody body) throws IOException {
        PDRectangle pageSize = landscape
                ? new PDRectangle(PDRectangle.A4.getHeight(), PDRectangle.A4.getWidth())
                : PDRectangle.A4;

        try (PDDocument document = new PDDocument()) {
            PdfContext ctx = new PdfContext(document, race, headerName, pageSize);
            try {
                body.write(ctx);
                ctx.close();
            } finally {
                ctx.closeQuietly();
            }

            drawPageNumbers(document);

            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            document.save(outputStream);
            return withCoverPage(coverPagePdf, outputStream.toByteArray());
        }
    }

    /**
     * Stamps "Seite N von M" into the footer of every page, bottom-right, once the document is
     * complete - the total page count M isn't known while pages are still being drawn one at a
     * time in {@link PdfContext}, so this runs as a second pass over the finished document instead,
     * appending to each page's existing content stream rather than redrawing it.
     */
    private void drawPageNumbers(PDDocument document) throws IOException {
        int totalPages = document.getNumberOfPages();
        float fontSize = 7;
        for (int i = 0; i < totalPages; i++) {
            PDPage page = document.getPage(i);
            String text = "Seite " + (i + 1) + " von " + totalPages;
            float textWidth = FONT_REGULAR.getStringWidth(sanitizeForPdf(text)) / 1000 * fontSize;
            float x = page.getMediaBox().getWidth() - MARGIN - textWidth;
            try (PDPageContentStream stream = new PDPageContentStream(document, page, PDPageContentStream.AppendMode.APPEND, true, true)) {
                drawText(stream, FONT_REGULAR, fontSize, x, 20, text);
            }
        }
    }

    /**
     * Draws a titled ranking table (title, column headers and rows), breaking to new pages as
     * needed. {@code mainTitle} selects the larger title style used for single-ranking PDFs vs.
     * the smaller subtitle style used for the multi-section "all age groups" PDF.
     */
    private <T> void drawSection(PdfContext ctx, List<PdfColumn<T>> columns, String title,
                                  List<T> entries, boolean mainTitle) throws IOException {
        drawSection(ctx, columns, title, entries, mainTitle, null);
    }

    /**
     * Same as the 5-arg overload, plus an optional {@code rowColorFn} that draws a small colored
     * marker to the left of each row whose entry maps to a non-null {@link Color} - used by the
     * start list to visualize each participant's start-group color (see
     * {@link #generateStartList}). {@code null} (the 5-arg overload's default) draws no marker at
     * all, so every other export (rankings, DNS list) is unaffected.
     */
    private <T> void drawSection(PdfContext ctx, List<PdfColumn<T>> columns, String title,
                                  List<T> entries, boolean mainTitle, Function<T, Color> rowColorFn) throws IOException {
        ctx.ensureSpace(mainTitle ? 90 : 100);

        ctx.y -= mainTitle ? 10 : 15;
        ctx.text(FONT_BOLD, mainTitle ? 14 : 11, MARGIN, ctx.y, title);
        ctx.y -= mainTitle ? 30 : 25;

        float[] colX = computeColumnX(columns, ctx.page.getMediaBox().getWidth());
        drawTableHeader(ctx, columns, colX);
        drawRows(ctx, columns, colX, entries, rowColorFn);

        ctx.y -= 10;
    }

    /**
     * Draws the "nicht gewertet" (DNS) list once at the end of a PDF - a no-op when there's nobody
     * to list, so a PDF with no non-starters doesn't grow an empty section. Always drawn as a
     * document-level closing section (one list per race/Gaudi-Modus, not per ranking sub-section -
     * see createDnsRows, so unlike {@link #drawSection} it has only one title size.
     * <p>
     * This overload is the Gaudi-Modus variant: never with "StNr."/"Jg.", whose rows carry neither
     * - see {@link #toDnsRows}.
     */
    private void drawDnsSection(PdfContext ctx, List<RankingViewService.DnsRow> rows) throws IOException {
        drawDnsSection(ctx, rows, PersonColumns.NONE);
    }

    private void drawDnsSection(PdfContext ctx, List<RankingViewService.DnsRow> rows,
                                PersonColumns personColumns) throws IOException {
        drawDnsSection(ctx, rows, dnsColumns(rows, personColumns));
    }

    private void drawDnsSection(PdfContext ctx, List<RankingViewService.DnsRow> rows,
                                List<PdfColumn<RankingViewService.DnsRow>> columns) throws IOException {
        if (rows.isEmpty()) {
            return;
        }
        ctx.ensureSpace(60);

        ctx.y -= 8;
        ctx.text(FONT_BOLD, 12, MARGIN, ctx.y, "Nicht gewertet");
        ctx.y -= 22;

        float[] colX = computeColumnX(columns, ctx.page.getMediaBox().getWidth());
        drawTableHeader(ctx, columns, colX);
        drawRows(ctx, columns, colX, rows);

        ctx.y -= 10;
    }

    private <T> float[] computeColumnX(List<PdfColumn<T>> columns, float pageWidth) {
        return computeColumnX(columns, MARGIN, pageWidth - MARGIN * 2);
    }

    private <T> float[] computeColumnX(List<PdfColumn<T>> columns, float startX, float usableWidth) {
        float totalWeight = (float) columns.stream().mapToDouble(PdfColumn::weight).sum();
        float[] colX = new float[columns.size()];
        float x = startX;
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
        drawRows(ctx, columns, colX, entries, null);
    }

    private <T> void drawRows(PdfContext ctx, List<PdfColumn<T>> columns, float[] colX, List<T> entries, Function<T, Color> rowColorFn) throws IOException {
        for (T entry : entries) {
            if (ctx.y < PAGE_BREAK_THRESHOLD) {
                ctx.newPage();
                drawTableHeader(ctx, columns, colX);
            }
            if (rowColorFn != null) {
                Color color = rowColorFn.apply(entry);
                if (color != null) {
                    ctx.fillRect(MARGIN - 12, ctx.y - 2, 7, 7, color);
                }
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
                                             List<T> entries, boolean mainTitle,
                                             Function<T, List<String>> detailBlocksFn) throws IOException {
        ctx.ensureSpace(mainTitle ? 90 : 100);

        ctx.y -= mainTitle ? 10 : 15;
        ctx.text(FONT_BOLD, mainTitle ? 14 : 11, MARGIN, ctx.y, title);
        ctx.y -= mainTitle ? 30 : 25;

        float[] colX = computeColumnX(columns, ctx.page.getMediaBox().getWidth());
        drawTableHeader(ctx, columns, colX);
        drawRowsWithDetails(ctx, columns, colX, entries, detailBlocksFn);

        ctx.y -= 10;
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
     * Like {@link #drawSectionWithDetails}, but the per-entry breakdown is drawn as a small,
     * column-aligned sub-table (one row per race) instead of wrapped "Rennen: Wert X, Platz Y"
     * text - used by Punkte-Mischwertung so the per-race breakdown reads as a table, not a
     * comma-separated string.
     */
    private <T, D> void drawSectionWithDetailTable(PdfContext ctx, List<PdfColumn<T>> columns, String title,
                                                    List<T> entries, boolean mainTitle,
                                                    List<PdfColumn<D>> detailColumns, Function<T, List<D>> detailRowsFn) throws IOException {
        ctx.ensureSpace(mainTitle ? 90 : 100);

        ctx.y -= mainTitle ? 10 : 15;
        ctx.text(FONT_BOLD, mainTitle ? 14 : 11, MARGIN, ctx.y, title);
        ctx.y -= mainTitle ? 30 : 25;

        float[] colX = computeColumnX(columns, ctx.page.getMediaBox().getWidth());
        drawTableHeader(ctx, columns, colX);
        drawRowsWithDetailTable(ctx, columns, colX, entries, detailColumns, detailRowsFn);

        ctx.y -= 10;
    }

    // DETAIL_BOX_* controls the shaded background behind each participant's per-race breakdown.
    // The box's first row sits at the same baseline a normal next table row would (no separate gap
    // added above it), with TOP_INSET as the box's own padding extending upward from that baseline -
    // so the box hugs the summary row above instead of floating in the middle of the whitespace
    // before the next participant. WIDTH_FRACTION narrows the box (and its columns) to about two
    // thirds of the row width instead of spanning it edge to edge - wide enough to leave the
    // "Rennen" column (which carries a full race name) room to breathe.
    private static final float DETAIL_TABLE_ROW_HEIGHT = 9;
    private static final float DETAIL_BOX_TOP_INSET = 7;
    private static final float DETAIL_BOX_BOTTOM_INSET = 3;
    private static final float DETAIL_TABLE_GROUP_GAP = 10;
    /**
     * Width (pt) one unit of {@link PdfColumn#weight()} gets in a detail sub-table, so a column
     * keeps the same width no matter how many optional columns ("Strafe"/"Gesamt") are shown next
     * to it - unlike the main tables, which always spread their columns across the full page width.
     * The value is the one the previously fixed 65%-of-usable-width box produced for the
     * Punkte-Mischwertung breakdown, so its layout is unchanged by the addition of "Gesamt".
     */
    private static final float DETAIL_COLUMN_WIDTH_UNIT = 84.4f;
    private static final Color DETAIL_TABLE_BOX_COLOR = new Color(0.93f, 0.93f, 0.93f);

    private <T, D> void drawRowsWithDetailTable(PdfContext ctx, List<PdfColumn<T>> columns, float[] colX, List<T> entries,
                                                 List<PdfColumn<D>> detailColumns, Function<T, List<D>> detailRowsFn) throws IOException {
        float availableWidth = ctx.page.getMediaBox().getWidth() - MARGIN * 2 - DETAIL_INDENT;
        float totalWeight = (float) detailColumns.stream().mapToDouble(PdfColumn::weight).sum();
        // Capped at the available width so an unusually wide set of detail columns still stays
        // inside the page instead of running off its right edge.
        float detailWidth = Math.min(availableWidth, totalWeight * DETAIL_COLUMN_WIDTH_UNIT);
        float[] detailColX = computeColumnX(detailColumns, MARGIN + DETAIL_INDENT, detailWidth);

        for (T entry : entries) {
            List<D> detailRows = detailRowsFn.apply(entry);
            float boxHeight = detailRows.isEmpty() ? 0
                    : DETAIL_BOX_TOP_INSET + Math.max(0, detailRows.size() - 1) * DETAIL_TABLE_ROW_HEIGHT + DETAIL_BOX_BOTTOM_INSET;
            float needed = 12 + (detailRows.isEmpty() ? 0 : boxHeight) + DETAIL_TABLE_GROUP_GAP;

            if (ctx.y - needed < PAGE_BREAK_THRESHOLD) {
                ctx.newPage();
                drawTableHeader(ctx, columns, colX);
            }

            for (int i = 0; i < columns.size(); i++) {
                ctx.text(FONT_REGULAR, 8, colX[i], ctx.y, columns.get(i).valueFn().apply(entry));
            }
            ctx.y -= 12;

            if (!detailRows.isEmpty()) {
                float firstRowBaseline = ctx.y;
                float boxTop = firstRowBaseline + DETAIL_BOX_TOP_INSET;
                float boxBottom = boxTop - boxHeight;
                ctx.fillRect(MARGIN + DETAIL_INDENT, boxBottom, detailWidth, boxHeight, DETAIL_TABLE_BOX_COLOR);

                for (D row : detailRows) {
                    for (int i = 0; i < detailColumns.size(); i++) {
                        ctx.text(FONT_REGULAR, 7, detailColX[i], ctx.y, detailColumns.get(i).valueFn().apply(row));
                    }
                    ctx.y -= DETAIL_TABLE_ROW_HEIGHT;
                }
                ctx.y = boxBottom;
            }
            ctx.y -= DETAIL_TABLE_GROUP_GAP;
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

    private static String truncate(String str, int maxLength) {
        if (str == null) return "";
        return str.length() > maxLength ? str.substring(0, maxLength - 3) + "..." : str;
    }

    /**
     * Truncates by actual rendered text width rather than a fixed character count - unlike the
     * table columns elsewhere in this file (which use {@link #truncate(String, int)} with a
     * character count hand-tuned to roughly fit each column's computed pixel width), a value here
     * has no such per-caller tuning, so a value long enough to exceed maxWidth at this font/size
     * must be measured directly instead of guessing a character count that may not match the
     * available space (portrait vs. landscape, or a future column-width change).
     */
    private static String truncateToWidth(PDFont font, float fontSize, String str, float maxWidth) throws IOException {
        if (str == null) {
            return "";
        }
        if (stringWidth(font, fontSize, str) <= maxWidth) {
            return str;
        }
        String ellipsis = "...";
        // stringWidth() is monotonic in the substring length, so the longest fitting prefix can be
        // found with a binary search instead of shrinking one character at a time - O(log n)
        // measurements instead of O(n) (each of which itself scans every remaining character).
        int lo = 0;
        int hi = str.length();
        while (lo < hi) {
            int mid = (lo + hi + 1) / 2;
            if (stringWidth(font, fontSize, str.substring(0, mid) + ellipsis) <= maxWidth) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo > 0 ? str.substring(0, lo) + ellipsis : ellipsis;
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
        StringBuilder result = new StringBuilder(withKnownSubstitutions.length());
        withKnownSubstitutions.codePoints().forEach(cp -> {
            // C0/C1 control characters (e.g. a stray tab/newline pasted from an Excel cell) have no
            // glyph in the standard-14 fonts either, despite being <= 0xFF - showText() throws for
            // these exactly like it does for the out-of-range case below, so they must be filtered
            // here too rather than falling through the Latin-1 fast path.
            if (Character.isISOControl(cp)) {
                result.append(' ');
                return;
            }
            // Already within WinAnsi/Latin-1 (e.g. ä, ö, ü, ß, é, ñ, ç) - keep as-is. NFKD would
            // canonically decompose these into a base letter + combining mark same as it does for
            // out-of-range characters below, which would incorrectly strip umlauts/accents that the
            // font can render natively (e.g. turning "Westallgäu" into "Westallgau").
            if (cp <= 0xFF) {
                result.append((char) cp);
                return;
            }
            // Outside Latin-1 (e.g. Slovenian/Croatian š, ž, č or Polish ń): fold off the diacritic via
            // NFKD decomposition and keep the base letter if that lands back in Latin-1, otherwise give
            // up and use '?' so PDF export can never fail on a name it can't render exactly.
            String decomposed = java.text.Normalizer.normalize(new String(Character.toChars(cp)), java.text.Normalizer.Form.NFKD);
            Character base = null;
            boolean unmappable = false;
            for (int i = 0; i < decomposed.length(); i++) {
                char d = decomposed.charAt(i);
                if (Character.getType(d) == Character.NON_SPACING_MARK) {
                    continue;
                }
                if (base != null || d > 0xFF) {
                    unmappable = true;
                    break;
                }
                base = d;
            }
            result.append(!unmappable && base != null ? base : '?');
        });
        return result.toString();
    }

    /**
     * Draws a header with the race name and date at the top of the page.
     * @return the Y position after the header
     */
    private float drawPageHeader(PDPageContentStream contentStream, Race race, String headerName, float pageWidth, float pageHeight) throws IOException {
        float headerY = pageHeight - 22;

        String formattedDate = "";
        if (race.date() != null) {
            formattedDate = String.format("%02d.%02d.%04d",
                race.date().getDayOfMonth(),
                race.date().getMonthValue(),
                race.date().getYear());
        }

        String headerText = headerName;
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
                // Available width is this column's own width minus the label, not a hardcoded
                // character count - a fixed count either overflows into the next column (long
                // portrait values) or truncates too early (landscape, where columns are wider).
                float availableWidth = colWidth - labelWidth;
                String value = truncateToWidth(FONT_REGULAR, fontSize, field[1], availableWidth);
                drawText(contentStream, FONT_REGULAR, fontSize, x + labelWidth, rowY, value);
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
