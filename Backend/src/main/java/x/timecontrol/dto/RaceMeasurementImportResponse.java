package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Serdeable
@Schema(description = "Result of restoring a race's archived measurements from CSV")
public record RaceMeasurementImportResponse(
        @Schema(description = "Number of archived measurements the race now has", example = "42")
        int importedCount,

        @Schema(description = "How many of them have no participant (empty or unknown race number)", example = "1")
        int withoutParticipantCount,

        @Schema(description = "Rows whose race number matches nobody in the race; imported without participant")
        List<MeasurementImportRowError> warnings
) {
}
