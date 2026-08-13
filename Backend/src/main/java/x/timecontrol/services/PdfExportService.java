package x.timecontrol.services;

import jakarta.inject.Singleton;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.font.Standard14Fonts.FontName;
import x.timecontrol.entities.Measurement;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@Singleton
public class PdfExportService {

    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");

    public byte[] generateMeasurementsPdf(List<Measurement> measurements, Map<Long, String> participantNames) throws IOException {
        try (PDDocument document = new PDDocument()) {
            PDPage page = new PDPage(PDRectangle.A4);
            document.addPage(page);

            PDPageContentStream contentStream = new PDPageContentStream(document, page);

            // Title
            contentStream.setFont(new PDType1Font(FontName.HELVETICA_BOLD), 18);
            contentStream.beginText();
            contentStream.newLineAtOffset(50, 800);
            contentStream.showText("Messungen - Zeitmessung");
            contentStream.endText();

            // Table headers
            float yPosition = 760;
            float margin = 50;

            contentStream.setFont(new PDType1Font(FontName.HELVETICA_BOLD), 11);
            contentStream.beginText();
            contentStream.newLineAtOffset(margin, yPosition);
            contentStream.showText(String.format("%-10s %-20s %-20s %s", "ID", "Teilnehmer-ID", "Dauer (ms)", "Zeitpunkt"));
            contentStream.endText();

            // Draw header line
            yPosition -= 15;
            contentStream.moveTo(margin, yPosition);
            contentStream.lineTo(page.getMediaBox().getWidth() - margin, yPosition);
            contentStream.stroke();

            // Table data
            contentStream.setFont(new PDType1Font(FontName.HELVETICA), 10);
            yPosition -= 20;

            for (Measurement measurement : measurements) {
                if (yPosition < 50) {
                    // Close current page and create new one
                    contentStream.close();
                    page = new PDPage(PDRectangle.A4);
                    document.addPage(page);
                    contentStream = new PDPageContentStream(document, page);
                    yPosition = 800;
                    contentStream.setFont(new PDType1Font(FontName.HELVETICA), 10);
                }

                String participantName = participantNames.getOrDefault(measurement.participantId(), "Unbekannt (ID: " + measurement.participantId() + ")");
                // Handle empty names
                if (participantName == null || participantName.trim().isEmpty()) {
                    participantName = "Unbekannt (ID: " + measurement.participantId() + ")";
                }
                String rowText = String.format("%-10d %-30s %-20.2f %s",
                    measurement.id(),
                    participantName,
                    (double) measurement.durationMs(),
                    measurement.measuredAt().format(DATE_FORMATTER)
                );

                contentStream.beginText();
                contentStream.newLineAtOffset(margin, yPosition);
                contentStream.showText(rowText);
                contentStream.endText();

                yPosition -= 20;
            }

            // Summary at the bottom
            yPosition -= 30;
            if (yPosition < 50) {
                contentStream.close();
                page = new PDPage(PDRectangle.A4);
                document.addPage(page);
                contentStream = new PDPageContentStream(document, page);
                yPosition = 800;
            }

            contentStream.setFont(new PDType1Font(FontName.HELVETICA_BOLD), 10);
            contentStream.beginText();
            contentStream.newLineAtOffset(margin, yPosition);
            contentStream.showText("Gesamt: " + measurements.size() + " Messungen");
            contentStream.endText();

            contentStream.close();

            // Convert to byte array
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            document.save(outputStream);
            return outputStream.toByteArray();
        }
    }
}



