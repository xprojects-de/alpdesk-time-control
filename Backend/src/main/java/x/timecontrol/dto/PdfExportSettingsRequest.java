package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Request object for the result PDF layout settings")
public record PdfExportSettingsRequest(
        @Schema(description = "Whether a single race's result PDFs print race number and birth year", example = "true", requiredMode = Schema.RequiredMode.REQUIRED)
        Boolean showRaceNumberAndBirthYear
) {
}
