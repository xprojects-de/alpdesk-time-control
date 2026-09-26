package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Result of deleting all archived measurements of a race")
public record RaceMeasurementDeleteResponse(
        @Schema(description = "Number of deleted archived measurements", example = "42")
        int deletedCount
) {
}
