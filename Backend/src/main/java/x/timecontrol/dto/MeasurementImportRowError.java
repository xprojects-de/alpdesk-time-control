package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Describes a CSV row that could not be imported")
public record MeasurementImportRowError(
        @Schema(description = "Line number in the CSV file (1-based, including header)", example = "3")
        int lineNumber,

        @Schema(description = "Raw content of the skipped line")
        String rawLine,

        @Schema(description = "Reason why the row was skipped")
        String reason
) {
}
