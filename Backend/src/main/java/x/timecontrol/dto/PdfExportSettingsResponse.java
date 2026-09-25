package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "The result PDF layout settings")
public record PdfExportSettingsResponse(
        @Schema(description = "Whether a single race's result PDFs print race number (\"StNr.\") and birth year (\"Jg.\"). The start list always shows both, the Gaudi-Modus exports never do.", example = "true")
        boolean showRaceNumberAndBirthYear
) {
}
