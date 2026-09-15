package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;
import java.util.Map;

@Serdeable
@Schema(description = "Preview of a result-import file: detected source fields, a suggested mapping onto our fields, and a few sample rows")
public record ParticipantResultImportPreviewResponse(
        @Schema(description = "Field/column names detected in the uploaded file, in file order", example = "[\"StNr\",\"Zeit\"]")
        List<String> availableFields,

        @Schema(description = "Best-effort suggested mapping from our fields (raceNumber, time, measuredAt, comment, status) to a detected source field; never saved, purely a starting point for the user to adjust")
        Map<String, String> suggestedMapping,

        @Schema(description = "First few rows of the file, keyed by detected source field")
        List<Map<String, String>> sampleRows
) {
}
