package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Serdeable
@Schema(description = "Result of a measurement CSV import")
public record MeasurementImportResponse(
        @Schema(description = "Number of measurements successfully imported", example = "42")
        int importedCount,

        @Schema(description = "Number of rows that were skipped", example = "2")
        int skippedCount,

        @Schema(description = "Successfully imported measurements")
        List<MeasurementResponse> imported,

        @Schema(description = "Rows that were skipped, with the reason")
        List<MeasurementImportRowError> errors
) {
}
