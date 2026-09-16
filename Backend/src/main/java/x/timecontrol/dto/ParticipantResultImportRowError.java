package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Describes a result-import row that could not be applied")
public record ParticipantResultImportRowError(
        @Schema(description = "Row number in the file (1-based, including header)", example = "3")
        int lineNumber,

        @Schema(description = "Raw content of the skipped row")
        String rawLine,

        @Schema(description = "Reason why the row was skipped", example = "No participant with raceNumber 61 found in this race")
        String reason
) {
}
