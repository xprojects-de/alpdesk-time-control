package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Applies to a single race's result PDFs only: the start list always shows race number and birth
 * year, the Gaudi-Modus exports never do.
 */
@Serdeable
@Schema(description = "The result PDF layout settings")
public record PdfExportSettingsResponse(
        @Schema(description = "Whether a single race's result PDFs print the race number (\"StNr.\")", example = "true")
        boolean showRaceNumber,

        @Schema(description = "Whether a single race's result PDFs print the birth year (\"Jg.\")", example = "true")
        boolean showBirthYear
) {
}
