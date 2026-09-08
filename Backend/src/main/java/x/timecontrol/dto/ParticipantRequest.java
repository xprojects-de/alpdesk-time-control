package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDateTime;

@Serdeable
@Schema(description = "Request object for creating or updating a participant")
public record ParticipantRequest(
        @Schema(description = "ID of the race", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
        Long raceId,

        @Schema(description = "ID of the person taking part", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
        Long personId,

        @Nullable
        @Schema(description = "Race number of the participant", example = "42", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Integer raceNumber,

        @Nullable
        @Schema(description = "ID of the team the participant belongs to", example = "1", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Long teamId,

        @Nullable
        @Schema(description = "ID of the category the participant belongs to", example = "1", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Long categoryId,

        @Nullable
        @Schema(description = "Duration of the race in milliseconds", example = "125000", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Integer durationMs,

        @Nullable
        @Schema(description = "Timestamp when the measurement was taken", example = "2026-08-18T10:30:00", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        LocalDateTime measuredAt
) {
}

