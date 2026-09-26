package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Applies to the result PDFs of a single race and of every Gaudi-Modus, and to the public live
 * view; the start list follows
 * the birth year switch only and always shows the race number.
 */
@Serdeable
@Schema(description = "The result PDF layout settings")
public record PdfExportSettingsResponse(
        @Schema(description = "Whether the result PDFs (single race and Gaudi-Modus) print the race number (\"StNr.\")", example = "true")
        boolean showRaceNumber,

        @Schema(description = "Whether the result PDFs (single race and Gaudi-Modus) print the birth year (\"Jg.\")", example = "true")
        boolean showBirthYear
) {
}
