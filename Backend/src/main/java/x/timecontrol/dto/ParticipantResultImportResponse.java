package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Serdeable
@Schema(description = "Result of a result-by-race-number import: existing participants updated in place, no new participants created")
public record ParticipantResultImportResponse(
        @Schema(description = "Number of participants successfully updated", example = "42")
        int updatedCount,

        @Schema(description = "Number of rows that were skipped", example = "2")
        int skippedCount,

        @Schema(description = "Successfully updated participants")
        List<ParticipantResponse> updated,

        @Schema(description = "Rows that were skipped, with the reason")
        List<ParticipantResultImportRowError> errors
) {
}
