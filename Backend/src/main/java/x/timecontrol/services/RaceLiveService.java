package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.RaceLiveRankingSection;
import x.timecontrol.dto.RaceLiveResponse;
import x.timecontrol.dto.RaceLiveViewType;
import x.timecontrol.entities.Category;
import x.timecontrol.entities.Gender;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Race;

import java.util.ArrayList;
import java.util.List;

/**
 * Builds a race's live results for the public (unauthenticated) live results page - one method per
 * {@link RaceLiveViewType}, each a straight port of the matching {@code PdfExportService.generate*}
 * method's filter/section logic (minus the PDF drawing), built on the same
 * {@link RankingViewService} both use so the two can never drift apart on who counts in which view.
 * Resolving a race (by its {@code liveToken}, not the numeric id) is the caller's job -
 * {@code RaceLiveController} does that lookup itself so a 404 for an unknown token never even
 * reaches this class.
 */
@Singleton
public class RaceLiveService {

    private final ParticipantService participantService;
    private final CategoryService categoryService;
    private final RankingViewService rankingViewService;

    public RaceLiveService(ParticipantService participantService,
                            CategoryService categoryService, RankingViewService rankingViewService) {
        this.participantService = participantService;
        this.categoryService = categoryService;
        this.rankingViewService = rankingViewService;
    }

    /**
     * @throws IllegalArgumentException if a view-specific required parameter is missing, or a
     *                                   gender string doesn't match {@link Gender#valueOf}
     */
    public RaceLiveResponse buildResponse(Race race, RaceLiveViewType view, String genderStr,
                                           String ageGroup, Long categoryId) {
        Iterable<Participant> participants = participantService.findByRaceId(race.id());
        RankingViewService.PersonTeamLookup lookup = rankingViewService.loadPersonTeamLookup(participants);

        List<RaceLiveRankingSection> sections = new ArrayList<>();
        List<RankingViewService.DnsRow> notRanked = List.of();
        List<RankingViewService.StartListEntry> startList = List.of();
        String viewLabel;

        switch (view) {
            case STARTLIST -> {
                startList = rankingViewService.createStartListEntries(participants);
                viewLabel = "Startliste";
            }
            case OVERALL -> {
                viewLabel = "Gesamtwertung";
                sections.add(new RaceLiveRankingSection(viewLabel,
                        rankingViewService.createRankingEntriesFromParticipants(participants, race, null, null, null, lookup)));
                notRanked = rankingViewService.createDnsRows(participants, race, lookup);
            }
            case GENDER -> {
                Gender gender = requireGender(genderStr);
                viewLabel = "Wertung " + rankingViewService.genderLabel(gender);
                sections.add(new RaceLiveRankingSection(viewLabel,
                        rankingViewService.createRankingEntriesFromParticipants(participants, race, gender, null, null, lookup)));
                notRanked = rankingViewService.createDnsRows(participants, race, lookup);
            }
            case AGEGROUP_GENDER -> {
                if (ageGroup == null || ageGroup.isBlank()) {
                    throw new IllegalArgumentException("ageGroup is required for view AGEGROUP_GENDER");
                }
                Gender gender = requireGender(genderStr);
                viewLabel = "Wertung " + ageGroup + " " + rankingViewService.genderLabel(gender);
                sections.add(new RaceLiveRankingSection(viewLabel,
                        rankingViewService.createRankingEntriesFromParticipants(participants, race, gender, ageGroup, null, lookup)));
                notRanked = rankingViewService.createDnsRows(participants, race, lookup);
            }
            case ALL_AGEGROUPS -> {
                viewLabel = "Alle Altersklassen";
                for (String ageGroupName : rankingViewService.uniqueAgeGroupNamesYoungestFirst()) {
                    for (Gender gender : List.of(Gender.FEMALE, Gender.MALE)) {
                        List<RankingViewService.RankingEntry> entries = rankingViewService.createRankingEntriesFromParticipants(
                                participants, race, gender, ageGroupName, null, lookup);
                        if (!entries.isEmpty()) {
                            sections.add(new RaceLiveRankingSection(
                                    "Wertung " + rankingViewService.ageGroupSectionLabel(ageGroupName) + " " + rankingViewService.genderLabel(gender), entries));
                        }
                    }
                }
                notRanked = rankingViewService.createDnsRows(participants, race, lookup);
            }
            case OVERALL_BY_CATEGORY -> {
                viewLabel = "Gesamtwertung nach Kategorie";
                for (Category category : rankingViewService.sortedCategoriesWithNoCategory()) {
                    List<RankingViewService.RankingEntry> entries = rankingViewService.createRankingEntriesFromParticipants(
                            participants, race, null, null, category.id(), lookup);
                    if (!entries.isEmpty()) {
                        sections.add(new RaceLiveRankingSection("Wertung " + category.name(), entries));
                    }
                }
                notRanked = rankingViewService.createDnsRows(participants, race, lookup);
            }
            case GENDER_BY_CATEGORY -> {
                Gender gender = requireGender(genderStr);
                viewLabel = "Wertung " + rankingViewService.genderLabel(gender) + " nach Kategorie";
                for (Category category : rankingViewService.sortedCategoriesWithNoCategory()) {
                    List<RankingViewService.RankingEntry> entries = rankingViewService.createRankingEntriesFromParticipants(
                            participants, race, gender, null, category.id(), lookup);
                    if (!entries.isEmpty()) {
                        sections.add(new RaceLiveRankingSection(
                                "Wertung " + category.name() + " " + rankingViewService.genderLabel(gender), entries));
                    }
                }
                notRanked = rankingViewService.createDnsRows(participants, race, lookup);
            }
            case ALL_AGEGROUPS_BY_CATEGORY -> {
                viewLabel = "Alle Altersklassen nach Kategorie";
                List<Category> categories = rankingViewService.sortedCategoriesWithNoCategory();
                for (String ageGroupName : rankingViewService.uniqueAgeGroupNamesYoungestFirst()) {
                    for (Gender gender : List.of(Gender.FEMALE, Gender.MALE)) {
                        for (Category category : categories) {
                            List<RankingViewService.RankingEntry> entries = rankingViewService.createRankingEntriesFromParticipants(
                                    participants, race, gender, ageGroupName, category.id(), lookup);
                            if (!entries.isEmpty()) {
                                sections.add(new RaceLiveRankingSection(
                                        "Wertung " + rankingViewService.ageGroupSectionLabel(ageGroupName) + " " + rankingViewService.genderLabel(gender) + " " + category.name(),
                                        entries));
                            }
                        }
                    }
                }
                notRanked = rankingViewService.createDnsRows(participants, race, lookup);
            }
            case CATEGORY -> {
                if (categoryId == null) {
                    throw new IllegalArgumentException("categoryId is required for view CATEGORY");
                }
                String categoryName = categoryService.findById(categoryId).map(Category::name).orElse("Unbekannt");
                viewLabel = "Wertung " + categoryName;
                sections.add(new RaceLiveRankingSection(viewLabel,
                        rankingViewService.createRankingEntriesFromParticipants(participants, race, null, null, categoryId, lookup)));
                notRanked = rankingViewService.createDnsRows(participants, race, lookup);
            }
            default -> throw new IllegalArgumentException("Unsupported view: " + view);
        }

        return new RaceLiveResponse(race.id(), race.name(),
                race.date() != null ? race.date().toString() : null, race.resultUnitLabel(),
                view, viewLabel, sections, notRanked, startList);
    }

    private static Gender requireGender(String genderStr) {
        if (genderStr == null || genderStr.isBlank()) {
            throw new IllegalArgumentException("gender is required for this view");
        }
        try {
            return Gender.valueOf(genderStr.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid gender: " + genderStr, e);
        }
    }

    private static final String FONT_STACK =
            "-apple-system,system-ui,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif";
    private static final String ACCENT_COLOR = "#49732a";

    /**
     * Renders a self-contained results page (inline CSS, no external assets/scripts) for
     * {@code response} - auto-refreshing every 10s via a meta tag rather than JS, so it works on
     * any browser/display device with no script execution needed.
     */
    public String renderHtml(RaceLiveResponse response) {
        StringBuilder body = new StringBuilder();
        body.append("<h1>").append(escapeHtml(response.raceName())).append("</h1>");
        body.append("<p class=\"subtitle\">").append(escapeHtml(response.viewLabel()));
        if (response.date() != null) {
            body.append(" &middot; ").append(escapeHtml(response.date()));
        }
        body.append("</p>");

        if (response.view() == RaceLiveViewType.STARTLIST) {
            body.append(renderStartListTable(response.startList()));
        } else {
            for (RaceLiveRankingSection section : response.sections()) {
                body.append("<h2>").append(escapeHtml(section.title())).append("</h2>");
                body.append(renderRankingTable(section.entries()));
            }
            if (!response.notRanked().isEmpty()) {
                body.append("<h2>Nicht gewertet</h2>");
                body.append(renderDnsTable(response.notRanked()));
            }
        }

        return htmlPage(escapeHtml(response.raceName()) + " &ndash; " + escapeHtml(response.viewLabel()), body.toString());
    }

    /**
     * One discoverable live-results view: a display label plus the path (relative to this
     * backend's own origin) to reach it. Shared by {@link #renderIndexHtml} (the public HTML menu
     * page) and {@code RaceController}'s authenticated {@code /races/{id}/live-links} endpoint
     * (feeding the Angular "copy a live link" dialog) - one definition of which views exist and
     * how their URLs are built, so the two can't silently drift apart.
     */
    public record LiveLink(String label, String path) {
    }

    /**
     * Every discoverable view for {@code race}: the menu page itself, each fixed top-level view,
     * and one entry per existing category - the live-page equivalent of the PDF export button
     * list. AGEGROUP_GENDER isn't included here since it needs picking one specific age group out
     * of however many the club has configured - it's still reachable directly via its query
     * parameters, just not pre-listed.
     */
    public List<LiveLink> liveLinks(Race race, List<Category> categories) {
        List<LiveLink> links = new ArrayList<>();
        links.add(new LiveLink("Alle Ansichten (Live-Menü)", menuPath(race.liveToken())));
        links.add(new LiveLink("Startliste", resultsHtmlPath(race.liveToken(), RaceLiveViewType.STARTLIST, null, null, null)));
        links.add(new LiveLink("Gesamtwertung", resultsHtmlPath(race.liveToken(), RaceLiveViewType.OVERALL, null, null, null)));
        links.add(new LiveLink("Gesamtwertung nach Kategorie", resultsHtmlPath(race.liveToken(), RaceLiveViewType.OVERALL_BY_CATEGORY, null, null, null)));
        links.add(new LiveLink("Herren", resultsHtmlPath(race.liveToken(), RaceLiveViewType.GENDER, "MALE", null, null)));
        links.add(new LiveLink("Herren nach Kategorie", resultsHtmlPath(race.liveToken(), RaceLiveViewType.GENDER_BY_CATEGORY, "MALE", null, null)));
        links.add(new LiveLink("Damen", resultsHtmlPath(race.liveToken(), RaceLiveViewType.GENDER, "FEMALE", null, null)));
        links.add(new LiveLink("Damen nach Kategorie", resultsHtmlPath(race.liveToken(), RaceLiveViewType.GENDER_BY_CATEGORY, "FEMALE", null, null)));
        links.add(new LiveLink("Alle Altersklassen", resultsHtmlPath(race.liveToken(), RaceLiveViewType.ALL_AGEGROUPS, null, null, null)));
        links.add(new LiveLink("Alle Altersklassen nach Kategorie", resultsHtmlPath(race.liveToken(), RaceLiveViewType.ALL_AGEGROUPS_BY_CATEGORY, null, null, null)));
        for (Category category : categories) {
            links.add(new LiveLink(category.name(), resultsHtmlPath(race.liveToken(), RaceLiveViewType.CATEGORY, null, null, category.id())));
        }
        return links;
    }

    public String renderIndexHtml(Race race, List<Category> categories) {
        StringBuilder body = new StringBuilder();
        body.append("<h1>").append(escapeHtml(race.name())).append("</h1>");
        body.append("<p class=\"subtitle\">Live-Ergebnisse</p>");
        body.append("<ul class=\"menu\">");
        List<LiveLink> links = liveLinks(race, categories);
        // Skip the menu-page entry itself (index 0) - this HTML *is* that page, linking to itself
        // would be pointless. RaceController's JSON /live-links endpoint includes it, see liveLinks().
        for (LiveLink link : links.subList(1, links.size())) {
            body.append("<li><a href=\"").append(link.path()).append("\">").append(escapeHtml(link.label())).append("</a></li>");
        }
        body.append("</ul>");

        return htmlPage(escapeHtml(race.name()) + " &ndash; Live-Ergebnisse", body.toString());
    }

    private static String menuPath(String liveToken) {
        return "/public/races/" + liveToken + "/live";
    }

    private static String resultsHtmlPath(String liveToken, RaceLiveViewType view, String gender, String ageGroup, Long categoryId) {
        StringBuilder href = new StringBuilder("/public/races/").append(liveToken).append("/results-html?view=").append(view);
        if (gender != null) href.append("&gender=").append(gender);
        if (ageGroup != null) href.append("&ageGroup=").append(java.net.URLEncoder.encode(ageGroup, java.nio.charset.StandardCharsets.UTF_8));
        if (categoryId != null) href.append("&categoryId=").append(categoryId);
        return href.toString();
    }

    private String renderRankingTable(List<RankingViewService.RankingEntry> entries) {
        if (entries.isEmpty()) {
            return "<p class=\"empty\">Keine Ergebnisse.</p>";
        }
        boolean showId = entries.stream().anyMatch(e -> e.externalId() != null && !e.externalId().isBlank());
        boolean showPenalty = entries.stream().anyMatch(RankingViewService.RankingEntry::hasPenalty);

        StringBuilder html = new StringBuilder("<table><thead><tr>");
        html.append("<th>Platz</th><th>Name Vorname</th>");
        if (showId) html.append("<th>ID</th>");
        html.append("<th>Alterskl.</th><th>Team</th><th>Wert</th>");
        if (showPenalty) html.append("<th>Strafe</th><th>Gesamt</th>");
        html.append("<th>Diff</th></tr></thead><tbody>");

        for (RankingViewService.RankingEntry e : entries) {
            html.append("<tr><td>").append(e.place()).append("</td><td>").append(escapeHtml(e.name())).append("</td>");
            if (showId) html.append("<td>").append(escapeHtml(dashIfBlank(e.externalId()))).append("</td>");
            html.append("<td>").append(escapeHtml(e.ageGroup())).append("</td>");
            html.append("<td>").append(escapeHtml(e.team())).append("</td>");
            html.append("<td>").append(escapeHtml(e.valueFormatted())).append("</td>");
            if (showPenalty) {
                html.append("<td>").append(escapeHtml(e.penaltyFormatted())).append("</td>");
                html.append("<td>").append(escapeHtml(e.totalFormatted())).append("</td>");
            }
            html.append("<td>").append(escapeHtml(e.diffFormatted())).append("</td></tr>");
        }
        html.append("</tbody></table>");
        return "<div class=\"table-scroll\">" + html + "</div>";
    }

    private String renderDnsTable(List<RankingViewService.DnsRow> rows) {
        boolean showId = rows.stream().anyMatch(r -> r.externalId() != null && !r.externalId().isBlank());

        StringBuilder html = new StringBuilder("<table><thead><tr>");
        html.append("<th>Position</th><th>Name Vorname</th>");
        if (showId) html.append("<th>ID</th>");
        html.append("<th>Alterskl.</th><th>Team</th><th>Status</th></tr></thead><tbody>");

        for (RankingViewService.DnsRow r : rows) {
            html.append("<tr><td>").append(r.position()).append("</td><td>").append(escapeHtml(r.name())).append("</td>");
            if (showId) html.append("<td>").append(escapeHtml(dashIfBlank(r.externalId()))).append("</td>");
            html.append("<td>").append(escapeHtml(r.ageGroup())).append("</td>");
            html.append("<td>").append(escapeHtml(r.team())).append("</td>");
            html.append("<td>").append(escapeHtml(r.status())).append("</td></tr>");
        }
        html.append("</tbody></table>");
        return "<div class=\"table-scroll\">" + html + "</div>";
    }

    private String renderStartListTable(List<RankingViewService.StartListEntry> entries) {
        if (entries.isEmpty()) {
            return "<p class=\"empty\">Keine Startliste.</p>";
        }
        boolean showCategory = entries.stream().anyMatch(RankingViewService.StartListEntry::hasCategory);

        StringBuilder html = new StringBuilder("<table><thead><tr>");
        html.append("<th>StNr.</th><th>Name Vorname</th><th>Jg.</th><th>Geschl.</th><th>Alterskl.</th><th>Team</th>");
        if (showCategory) html.append("<th>Kategorie</th>");
        html.append("</tr></thead><tbody>");

        for (RankingViewService.StartListEntry e : entries) {
            html.append("<tr><td>").append(escapeHtml(e.raceNumber())).append("</td>");
            html.append("<td>").append(escapeHtml(e.name())).append("</td>");
            html.append("<td>").append(escapeHtml(e.birthYear())).append("</td>");
            html.append("<td>").append(escapeHtml(e.gender())).append("</td>");
            html.append("<td>").append(escapeHtml(e.ageGroup())).append("</td>");
            html.append("<td>").append(escapeHtml(e.team())).append("</td>");
            if (showCategory) html.append("<td>").append(escapeHtml(e.category())).append("</td>");
            html.append("</tr>");
        }
        html.append("</tbody></table>");
        return "<div class=\"table-scroll\">" + html + "</div>";
    }

    private static String dashIfBlank(String value) {
        return value == null || value.isBlank() ? "-" : value;
    }

    private String htmlPage(String title, String bodyHtml) {
        return """
                <!DOCTYPE html>
                <html lang="de">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta http-equiv="refresh" content="10">
                <title>%s</title>
                <style>
                  :root { color-scheme: light; }
                  * { box-sizing: border-box; }
                  body {
                    font-family: %s;
                    margin: 0;
                    padding: 1.5rem;
                    background: #f5f5f0;
                    color: #1a1a1a;
                  }
                  h1 { color: %s; margin: 0 0 0.25rem; font-size: 1.6rem; }
                  h2 { color: %s; margin: 2rem 0 0.5rem; font-size: 1.15rem; border-bottom: 2px solid %s; padding-bottom: 0.25rem; }
                  .subtitle { margin: 0 0 1.5rem; color: #555; }
                  .empty { color: #777; font-style: italic; }
                  .table-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; margin-bottom: 1rem; }
                  table { border-collapse: collapse; width: 100%%; min-width: 100%%; background: #fff; }
                  th, td { text-align: left; padding: 0.4rem 0.6rem; border-bottom: 1px solid #ddd; font-size: 0.95rem; white-space: nowrap; }
                  th { background: %s; color: #fff; font-weight: 600; }
                  tbody tr:nth-child(even) { background: #fafaf7; }
                  ul.menu { list-style: none; padding: 0; }
                  ul.menu li { margin-bottom: 0.5rem; }
                  ul.menu a {
                    display: inline-block;
                    padding: 0.6rem 1rem;
                    background: #fff;
                    border: 1px solid #ddd;
                    border-left: 4px solid %s;
                    border-radius: 4px;
                    color: #1a1a1a;
                    text-decoration: none;
                  }
                  ul.menu a:hover { background: #f0f0e8; }
                  @media (max-width: 600px) {
                    body { padding: 0.75rem; }
                    h1 { font-size: 1.3rem; }
                    h2 { font-size: 1rem; margin: 1.5rem 0 0.5rem; }
                    th, td { padding: 0.35rem 0.5rem; font-size: 0.85rem; }
                    .table-scroll { margin-left: -0.75rem; margin-right: -0.75rem; padding: 0 0.75rem; }
                  }
                </style>
                </head>
                <body>
                %s
                </body>
                </html>
                """.formatted(title, FONT_STACK, ACCENT_COLOR, ACCENT_COLOR, ACCENT_COLOR, ACCENT_COLOR, ACCENT_COLOR, bodyHtml);
    }

    /**
     * Minimal HTML-entity escaping for user-entered text (person/team/category names) embedded
     * into a hand-built, publicly served (unauthenticated) HTML page - without this, a name
     * containing e.g. "&lt;script&gt;" would execute in every visitor's browser instead of
     * displaying as text.
     */
    public static String escapeHtml(String value) {
        if (value == null) {
            return "";
        }
        return value
                .replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;")
                .replace("'", "&#39;");
    }
}
