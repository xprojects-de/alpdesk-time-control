package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Serdeable
@Schema(description = "Result of a participant CSV import")
public record ParticipantImportResponse(
        @Schema(description = "Number of participants successfully imported", example = "42")
        int importedCount,

        @Schema(description = "Number of rows that were skipped", example = "2")
        int skippedCount,

        @Schema(description = "Successfully imported participants")
        List<ParticipantResponse> imported,

        @Schema(description = "Rows that were skipped, with the reason")
        List<ParticipantImportRowError> errors
) {
}
