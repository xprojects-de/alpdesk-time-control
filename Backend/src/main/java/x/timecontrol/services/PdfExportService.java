package x.timecontrol.services;

import jakarta.inject.Singleton;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.font.Standard14Fonts.FontName;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Gender;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Race;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.StreamSupport;

@Singleton
public class PdfExportService {

    private final AgeGroupService ageGroupService;

    public PdfExportService(AgeGroupService ageGroupService) {
        this.ageGroupService = ageGroupService;
    }

    private static class RankingEntry {
        int place;
        String name;
        String ageGroup;
        Integer timeMs;
        Integer diffMs;

        RankingEntry(int place, String name, String ageGroup, Integer timeMs, Integer diffMs) {
            this.place = place;
            this.name = name;
            this.ageGroup = ageGroup;
            this.timeMs = timeMs;
            this.diffMs = diffMs;
        }
    }

    public byte[] generateOverallRanking(Iterable<Participant> participants, Race race) throws IOException {
        List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, null, null);
        String title = race.name() + " - Gesamtwertung";
        return generatePdf(title, entries);
    }

    public byte[] generateGenderRanking(Iterable<Participant> participants, String genderStr, Race race) throws IOException {
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, gender, null);
        String genderLabel = gender == Gender.MALE ? "Männer" : "Frauen";
        String title = race.name() + " - Wertung " + genderLabel;
        return generatePdf(title, entries);
    }

    public byte[] generateAgeGroupGenderRanking(Iterable<Participant> participants,
                                                 String ageGroup, String genderStr, Race race) throws IOException {
        Gender gender = Gender.valueOf(genderStr.toUpperCase());
        List<RankingEntry> entries = createRankingEntriesFromParticipants(participants, gender, ageGroup);
        String genderLabel = gender == Gender.MALE ? "Männer" : "Frauen";
        String title = race.name() + " - Wertung " + ageGroup + " " + genderLabel;
        return generatePdf(title, entries);
    }

    public byte[] generateAllAgeGroupsRanking(Iterable<Participant> participants, Race race) throws IOException {

        // Load age groups from database and sort by birthYearTo descending (youngest first)
        List<AgeGroup> ageGroups = StreamSupport.stream(ageGroupService.findAll().spliterator(), false)
                .sorted(Comparator.comparing(AgeGroup::birthYearTo).reversed())
                .toList();

        // Get unique age group names in order
        List<String> uniqueAgeGroupNames = ageGroups.stream()
                .map(AgeGroup::name)
                .distinct()
                .toList();

        try (PDDocument document = new PDDocument()) {
            PDPage page = null;
            PDPageContentStream contentStream = null;
            float yPosition = 0;
            float margin = 50;

            // Define fixed column positions for better alignment
            float colPlatz = margin;
            float colName = margin + 40;
            float colAgeGroup = margin + 200;
            float colTime = margin + 320;
            float colDiff = margin + 420;

            for (String ageGroupName : uniqueAgeGroupNames) {
                // Male ranking for this age group
                List<RankingEntry> maleEntries = createRankingEntriesFromParticipants(participants, Gender.MALE, ageGroupName);

                if (!maleEntries.isEmpty()) {
                    // Check if we need a new page
                    if (page == null || yPosition < 100) {
                        if (contentStream != null) {
                            contentStream.close();
                        }
                        page = new PDPage(PDRectangle.A4);
                        document.addPage(page);
                        contentStream = new PDPageContentStream(document, page);
                        yPosition = 800;
                    }

                    // Add some spacing between rankings
                    yPosition -= 15;

                    // Title with race name
                    contentStream.setFont(new PDType1Font(FontName.HELVETICA_BOLD), 11);
                    contentStream.beginText();
                    contentStream.newLineAtOffset(margin, yPosition);
                    contentStream.showText(race.name() + " - Wertung " + ageGroupName + " Männer");
                    contentStream.endText();
                    yPosition -= 25;

                    // Table headers
                    contentStream.setFont(new PDType1Font(FontName.HELVETICA_BOLD), 8);
                    contentStream.beginText();
                    contentStream.newLineAtOffset(colPlatz, yPosition);
                    contentStream.showText("Platz");
                    contentStream.endText();

                    contentStream.beginText();
                    contentStream.newLineAtOffset(colName, yPosition);
                    contentStream.showText("Name Vorname");
                    contentStream.endText();

                    contentStream.beginText();
                    contentStream.newLineAtOffset(colAgeGroup, yPosition);
                    contentStream.showText("Altersgruppe");
                    contentStream.endText();

                    contentStream.beginText();
                    contentStream.newLineAtOffset(colTime, yPosition);
                    contentStream.showText("Absolutzeit");
                    contentStream.endText();

                    contentStream.beginText();
                    contentStream.newLineAtOffset(colDiff, yPosition);
                    contentStream.showText("Diffzeit");
                    contentStream.endText();

                    // Draw header line
                    yPosition -= 12;
                    contentStream.moveTo(margin, yPosition);
                    contentStream.lineTo(page.getMediaBox().getWidth() - margin, yPosition);
                    contentStream.stroke();

                    // Table data
                    contentStream.setFont(new PDType1Font(FontName.HELVETICA), 8);
                    yPosition -= 14;

                    for (RankingEntry entry : maleEntries) {
                        if (yPosition < 50) {
                            // Close current page and create new one
                            contentStream.close();
                            page = new PDPage(PDRectangle.A4);
                            document.addPage(page);
                            contentStream = new PDPageContentStream(document, page);
                            yPosition = 800;
                            contentStream.setFont(new PDType1Font(FontName.HELVETICA), 8);
                        }

                        String diffStr = entry.diffMs != null ? ("+" + formatTime(entry.diffMs)) : "-";

                        contentStream.beginText();
                        contentStream.newLineAtOffset(colPlatz, yPosition);
                        contentStream.showText(String.valueOf(entry.place));
                        contentStream.endText();

                        contentStream.beginText();
                        contentStream.newLineAtOffset(colName, yPosition);
                        contentStream.showText(truncate(entry.name, 35));
                        contentStream.endText();

                        contentStream.beginText();
                        contentStream.newLineAtOffset(colAgeGroup, yPosition);
                        contentStream.showText(truncate(entry.ageGroup, 20));
                        contentStream.endText();

                        contentStream.beginText();
                        contentStream.newLineAtOffset(colTime, yPosition);
                        contentStream.showText(formatTime(entry.timeMs));
                        contentStream.endText();

                        contentStream.beginText();
                        contentStream.newLineAtOffset(colDiff, yPosition);
                        contentStream.showText(diffStr);
                        contentStream.endText();

                        yPosition -= 12;
                    }

                    // Summary
                    yPosition -= 10;
                    contentStream.setFont(new PDType1Font(FontName.HELVETICA_BOLD), 8);
                    contentStream.beginText();
                    contentStream.newLineAtOffset(margin, yPosition);
                    contentStream.showText("Gesamt: " + maleEntries.size() + " Teilnehmer");
                    contentStream.endText();
                    yPosition -= 15;
                }

                // Female ranking for this age group
                List<RankingEntry> femaleEntries = createRankingEntriesFromParticipants(participants, Gender.FEMALE, ageGroupName);

                if (!femaleEntries.isEmpty()) {
                    // Check if we need a new page
                    if (page == null || yPosition < 100) {
                        if (contentStream != null) {
                            contentStream.close();
                        }
                        page = new PDPage(PDRectangle.A4);
                        document.addPage(page);
                        contentStream = new PDPageContentStream(document, page);
                        yPosition = 800;
                    }

                    // Add some spacing between rankings
                    yPosition -= 15;

                    contentStream.setFont(new PDType1Font(FontName.HELVETICA_BOLD), 11);
                    contentStream.beginText();
                    contentStream.newLineAtOffset(margin, yPosition);
                    contentStream.showText(race.name() + " - Wertung " + ageGroupName + " Frauen");
                    contentStream.endText();
                    yPosition -= 25;

                    // Table headers
                    contentStream.setFont(new PDType1Font(FontName.HELVETICA_BOLD), 8);
                    contentStream.beginText();
                    contentStream.newLineAtOffset(colPlatz, yPosition);
                    contentStream.showText("Platz");
                    contentStream.endText();

                    contentStream.beginText();
                    contentStream.newLineAtOffset(colName, yPosition);
                    contentStream.showText("Name Vorname");
                    contentStream.endText();

                    contentStream.beginText();
                    contentStream.newLineAtOffset(colAgeGroup, yPosition);
                    contentStream.showText("Altersgruppe");
                    contentStream.endText();

                    contentStream.beginText();
                    contentStream.newLineAtOffset(colTime, yPosition);
                    contentStream.showText("Absolutzeit");
                    contentStream.endText();

                    contentStream.beginText();
                    contentStream.newLineAtOffset(colDiff, yPosition);
                    contentStream.showText("Diffzeit");
                    contentStream.endText();

                    // Draw header line
                    yPosition -= 12;
                    contentStream.moveTo(margin, yPosition);
                    contentStream.lineTo(page.getMediaBox().getWidth() - margin, yPosition);
                    contentStream.stroke();

                    // Table data
                    contentStream.setFont(new PDType1Font(FontName.HELVETICA), 8);
                    yPosition -= 14;

                    for (RankingEntry entry : femaleEntries) {
                        if (yPosition < 50) {
                            // Close current page and create new one
                            contentStream.close();
                            page = new PDPage(PDRectangle.A4);
                            document.addPage(page);
                            contentStream = new PDPageContentStream(document, page);
                            yPosition = 800;
                            contentStream.setFont(new PDType1Font(FontName.HELVETICA), 8);
                        }

                        String diffStr = entry.diffMs != null ? ("+" + formatTime(entry.diffMs)) : "-";

                        contentStream.beginText();
                        contentStream.newLineAtOffset(colPlatz, yPosition);
                        contentStream.showText(String.valueOf(entry.place));
                        contentStream.endText();

                        contentStream.beginText();
                        contentStream.newLineAtOffset(colName, yPosition);
                        contentStream.showText(truncate(entry.name, 35));
                        contentStream.endText();

                        contentStream.beginText();
                        contentStream.newLineAtOffset(colAgeGroup, yPosition);
                        contentStream.showText(truncate(entry.ageGroup, 20));
                        contentStream.endText();

                        contentStream.beginText();
                        contentStream.newLineAtOffset(colTime, yPosition);
                        contentStream.showText(formatTime(entry.timeMs));
                        contentStream.endText();

                        contentStream.beginText();
                        contentStream.newLineAtOffset(colDiff, yPosition);
                        contentStream.showText(diffStr);
                        contentStream.endText();

                        yPosition -= 12;
                    }

                    // Summary
                    yPosition -= 10;
                    contentStream.setFont(new PDType1Font(FontName.HELVETICA_BOLD), 8);
                    contentStream.beginText();
                    contentStream.newLineAtOffset(margin, yPosition);
                    contentStream.showText("Gesamt: " + femaleEntries.size() + " Teilnehmer");
                    contentStream.endText();
                    yPosition -= 15;
                }
            }

            if (contentStream != null) {
                contentStream.close();
            }

            // Convert to byte array
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            document.save(outputStream);
            return outputStream.toByteArray();
        }
    }

    private List<RankingEntry> createRankingEntriesFromParticipants(Iterable<Participant> participants,
                                                                     Gender filterGender,
                                                                     String filterAgeGroup) {
        // Filter participants: only those with durationMs not null
        List<Participant> validParticipants = StreamSupport.stream(participants.spliterator(), false)
                .filter(p -> p.durationMs() != null)
                .toList();

        // Apply gender and age group filters
        if (filterGender != null || filterAgeGroup != null) {
            validParticipants = validParticipants.stream()
                    .filter(p -> {
                        if (filterGender != null && p.gender() != filterGender) {
                            return false;
                        }

                        if (filterAgeGroup != null) {
                            String ageGroup = calculateAgeGroup(p.birthDate());
                            return filterAgeGroup.equalsIgnoreCase(ageGroup);
                        }

                        return true;
                    })
                    .toList();
        }

        // Sort by time ascending (fastest first)
        List<Participant> sortedParticipants = validParticipants.stream()
                .sorted(Comparator.comparing(Participant::durationMs))
                .toList();

        // Create ranking entries with place and time difference
        List<RankingEntry> entries = new ArrayList<>();

        for (int i = 0; i < sortedParticipants.size(); i++) {
            Participant p = sortedParticipants.get(i);

            String name = formatName(p);
            String ageGroup = calculateAgeGroup(p.birthDate());
            Integer timeMs = p.durationMs();
            Integer diffMs = (i > 0) ? timeMs - sortedParticipants.get(i - 1).durationMs() : null;

            entries.add(new RankingEntry(i + 1, name, ageGroup, timeMs, diffMs));
        }

        return entries;
    }

    private String formatName(Participant p) {
        String firstName = p.firstName() != null ? p.firstName() : "";
        String lastName = p.lastName() != null ? p.lastName() : "";
        return (lastName + " " + firstName).trim();
    }

    private String calculateAgeGroup(LocalDate birthDate) {
        if (birthDate == null) {
            return "Unbekannt";
        }

        int birthYear = birthDate.getYear();

        // Load all age groups from database
        List<AgeGroup> ageGroups = StreamSupport.stream(ageGroupService.findAll().spliterator(), false)
                .toList();

        // Find matching age group
        for (AgeGroup ageGroup : ageGroups) {
            if (birthYear >= ageGroup.birthYearFrom() && birthYear <= ageGroup.birthYearTo()) {
                return ageGroup.name();
            }
        }

        return "Unbekannt";
    }

    private String formatTime(Integer timeMs) {
        if (timeMs == null) return "-";

        int totalSeconds = timeMs / 1000;
        int minutes = totalSeconds / 60;
        int seconds = totalSeconds % 60;
        int millis = timeMs % 1000;

        return String.format("%d:%02d.%03d", minutes, seconds, millis);
    }

    private byte[] generatePdf(String title, List<RankingEntry> entries) throws IOException {
        try (PDDocument document = new PDDocument()) {
            PDPage page = new PDPage(PDRectangle.A4);
            document.addPage(page);

            PDPageContentStream contentStream = new PDPageContentStream(document, page);

            // Title - smaller font
            contentStream.setFont(new PDType1Font(FontName.HELVETICA_BOLD), 14);
            contentStream.beginText();
            contentStream.newLineAtOffset(50, 800);
            contentStream.showText(title);
            contentStream.endText();

            // Table headers
            float yPosition = 770;
            float margin = 50;

            // Define fixed column positions for better alignment
            float colPlatz = margin;
            float colName = margin + 40;
            float colAgeGroup = margin + 200;
            float colTime = margin + 320;
            float colDiff = margin + 420;

            contentStream.setFont(new PDType1Font(FontName.HELVETICA_BOLD), 8);
            contentStream.beginText();
            contentStream.newLineAtOffset(colPlatz, yPosition);
            contentStream.showText("Platz");
            contentStream.endText();

            contentStream.beginText();
            contentStream.newLineAtOffset(colName, yPosition);
            contentStream.showText("Name Vorname");
            contentStream.endText();

            contentStream.beginText();
            contentStream.newLineAtOffset(colAgeGroup, yPosition);
            contentStream.showText("Altersgruppe");
            contentStream.endText();

            contentStream.beginText();
            contentStream.newLineAtOffset(colTime, yPosition);
            contentStream.showText("Absolutzeit");
            contentStream.endText();

            contentStream.beginText();
            contentStream.newLineAtOffset(colDiff, yPosition);
            contentStream.showText("Diffzeit");
            contentStream.endText();

            // Draw header line
            yPosition -= 12;
            contentStream.moveTo(margin, yPosition);
            contentStream.lineTo(page.getMediaBox().getWidth() - margin, yPosition);
            contentStream.stroke();

            // Table data - smaller font
            contentStream.setFont(new PDType1Font(FontName.HELVETICA), 8);
            yPosition -= 14;

            for (RankingEntry entry : entries) {
                if (yPosition < 50) {
                    // Close current page and create new one
                    contentStream.close();
                    page = new PDPage(PDRectangle.A4);
                    document.addPage(page);
                    contentStream = new PDPageContentStream(document, page);
                    yPosition = 800;
                    contentStream.setFont(new PDType1Font(FontName.HELVETICA), 8);
                }

                String diffStr = entry.diffMs != null ? ("+" + formatTime(entry.diffMs)) : "-";

                contentStream.beginText();
                contentStream.newLineAtOffset(colPlatz, yPosition);
                contentStream.showText(String.valueOf(entry.place));
                contentStream.endText();

                contentStream.beginText();
                contentStream.newLineAtOffset(colName, yPosition);
                contentStream.showText(truncate(entry.name, 35));
                contentStream.endText();

                contentStream.beginText();
                contentStream.newLineAtOffset(colAgeGroup, yPosition);
                contentStream.showText(truncate(entry.ageGroup, 20));
                contentStream.endText();

                contentStream.beginText();
                contentStream.newLineAtOffset(colTime, yPosition);
                contentStream.showText(formatTime(entry.timeMs));
                contentStream.endText();

                contentStream.beginText();
                contentStream.newLineAtOffset(colDiff, yPosition);
                contentStream.showText(diffStr);
                contentStream.endText();

                yPosition -= 12;
            }

            // Summary at the bottom
            yPosition -= 10;
            if (yPosition < 50) {
                contentStream.close();
                page = new PDPage(PDRectangle.A4);
                document.addPage(page);
                contentStream = new PDPageContentStream(document, page);
                yPosition = 800;
            }

            contentStream.setFont(new PDType1Font(FontName.HELVETICA_BOLD), 8);
            contentStream.beginText();
            contentStream.newLineAtOffset(margin, yPosition);
            contentStream.showText("Gesamt: " + entries.size() + " Teilnehmer");
            contentStream.endText();

            contentStream.close();

            // Convert to byte array
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            document.save(outputStream);
            return outputStream.toByteArray();
        }
    }


    private String truncate(String str, int maxLength) {
        if (str == null) return "";
        return str.length() > maxLength ? str.substring(0, maxLength - 3) + "..." : str;
    }
}



