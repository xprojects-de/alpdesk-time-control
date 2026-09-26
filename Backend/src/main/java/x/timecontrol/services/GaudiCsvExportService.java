package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Gender;
import x.timecontrol.entities.Person;
import x.timecontrol.entities.Race;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.function.BiFunction;
import java.util.stream.Collectors;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

/**
 * Flat CSV counterpart to the Zeit-Kombination / Punkte-Mischwertung PDF exports: one row per
 * ranked person (Platz, Name, Vorname, Team, Altersklasse, Externe ID, Wert) in ranking order,
 * without the PDF's per-race breakdown or "nicht gewertet" list. Like {@link PdfExportService},
 * the header row and "Wert" formatting are German output meant for race officials opening the
 * file in Excel - hence ';' as delimiter. Plain UTF-8 without BOM, like the app's other CSV exports.
 */
@Singleton
public class GaudiCsvExportService {

    private static final char DELIMITER = ';';
    private static final List<String> HEADER =
            List.of("Platz", "Name", "Vorname", "Team", "Altersklasse", "Externe ID", "Wert");

    private final PersonService personService;
    private final AgeGroupService ageGroupService;
    private final RankingViewService rankingViewService;

    public GaudiCsvExportService(PersonService personService,
                                 AgeGroupService ageGroupService,
                                 RankingViewService rankingViewService) {
        this.personService = personService;
        this.ageGroupService = ageGroupService;
        this.rankingViewService = rankingViewService;
    }

    /**
     * {@code entries} is used as-is (already ranked, and already scoped to a gender/age group where
     * applicable). {@code headerRace} only supplies the result unit for formatting a
     * Zeit-Kombination's total - all combined races share one (enforced by GaudiModeService.validate()).
     */
    public byte[] generateRanking(GaudiModeType type, List<GaudiRankingEntryResponse> entries, Race headerRace) {
        return buildCsv(type, entries, headerRace).getBytes(StandardCharsets.UTF_8);
    }

    /**
     * Punkte-Mischwertung split into one CSV per age group x gender (youngest first, female before
     * male - same sections as {@link PdfExportService#generatePointsCombinationAllAgeGroupsRanking}),
     * bundled as a ZIP. Empty categories are left out.
     */
    public byte[] generateAllAgeGroupsZip(GaudiModeType type, Race headerRace,
                                          BiFunction<Gender, String, List<GaudiRankingEntryResponse>> categoryFetcher) throws IOException {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        try (ZipOutputStream zip = new ZipOutputStream(out, StandardCharsets.UTF_8)) {
            for (String ageGroupName : rankingViewService.uniqueAgeGroupNamesYoungestFirst(headerRace)) {
                for (Gender gender : List.of(Gender.FEMALE, Gender.MALE)) {
                    List<GaudiRankingEntryResponse> entries = categoryFetcher.apply(gender, ageGroupName);
                    if (entries.isEmpty()) {
                        continue;
                    }
                    String fileName = safeFileName(rankingViewService.ageGroupSectionLabel(ageGroupName)
                            + "_" + rankingViewService.genderLabel(gender)) + ".csv";
                    zip.putNextEntry(new ZipEntry(fileName));
                    zip.write(generateRanking(type, entries, headerRace));
                    zip.closeEntry();
                }
            }
        }
        return out.toByteArray();
    }

    private String buildCsv(GaudiModeType type, List<GaudiRankingEntryResponse> entries, Race headerRace) {
        Set<Long> personIds = entries.stream()
                .map(GaudiRankingEntryResponse::personId)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());
        Map<Long, Person> personsById = personService.findByIds(personIds);
        // The header race is the Gaudi-Modus' first race, which is exactly the one
        // {@link AgeGroupService#findForScoring} resolves the calculators' season and variant from -
        // so a combination spanning two seasons or variants prints the same classes here as the
        // ranking it accompanies, rather than each side picking its own.
        List<AgeGroup> ageGroups = ageGroupService.findForScoring(List.of(headerRace));

        StringBuilder csv = new StringBuilder();
        csv.append(String.join(String.valueOf(DELIMITER), HEADER)).append('\n');
        for (GaudiRankingEntryResponse entry : entries) {
            Person person = entry.personId() != null ? personsById.get(entry.personId()) : null;
            String ageGroup = person != null
                    ? ageGroupService.calculateAgeGroupName(person.birthDate(), person.gender(), ageGroups)
                    : null;
            List<String> values = List.of(
                    String.valueOf(entry.place()),
                    // Falls back to the whole display label in "Name" if the person can't be resolved.
                    sanitize(person != null ? person.lastName() : entry.label()),
                    sanitize(person != null ? person.firstName() : null),
                    sanitize(entry.team()),
                    sanitize(AgeGroupService.UNKNOWN_AGE_GROUP.equals(ageGroup) ? null : ageGroup),
                    sanitize(entry.externalId()),
                    formatValue(type, entry, headerRace)
            );
            csv.append(String.join(String.valueOf(DELIMITER), values)).append('\n');
        }
        return csv.toString();
    }

    private static String formatValue(GaudiModeType type, GaudiRankingEntryResponse entry, Race headerRace) {
        if (type == GaudiModeType.POINTS_COMBINATION) {
            return entry.totalPoints() != null ? String.valueOf(entry.totalPoints()) : "";
        }
        return entry.valueMs() != null ? RankingViewService.formatValue(headerRace, entry.valueMs()) : "";
    }

    private static String sanitize(String value) {
        if (value == null) {
            return "";
        }
        return value.replace(String.valueOf(DELIMITER), " ").replace("\n", " ").replace("\r", " ");
    }

    /** ASCII-only, since not every unzip tool honors the ZIP's UTF-8 filename flag. */
    private static String safeFileName(String name) {
        return name.replace("ä", "ae").replace("ö", "oe").replace("ü", "ue")
                .replace("Ä", "Ae").replace("Ö", "Oe").replace("Ü", "Ue").replace("ß", "ss")
                .replaceAll("[^A-Za-z0-9_-]+", "_");
    }
}
