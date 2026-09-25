package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Applies to the result PDFs of a single race and of every Gaudi-Modus; the start list always
 * shows race number and birth year.
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
