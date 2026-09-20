package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Request object for moving the season boundary")
public record SeasonSettingsRequest(
        @Schema(description = "Month the season year starts in (1-12)", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
        Integer seasonStartMonth,

        @Schema(description = "Day of that month the season year starts on", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
        Integer seasonStartDay
) {
}
