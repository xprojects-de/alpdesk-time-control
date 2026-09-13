package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.DisqualificationStatus;

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
        @Schema(description = "Penalty added to the raw result (same unit/granularity as the race's result, e.g. ms for a TIME race), makes the result worse", example = "2000", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Integer penalty,

        @Nullable
        @Schema(description = "Timestamp when the measurement was taken", example = "2026-08-18T10:30:00", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        LocalDateTime measuredAt,

        @Nullable
        @Schema(description = "Free-text comment/info about the participant", example = "Ski gebrochen", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        String comment,

        @Nullable
        @Schema(description = "Disqualification/no-result status; omitted or NONE means a normal, rankable result. Left unset on update, an existing status is preserved.", example = "NONE", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        DisqualificationStatus status
) {
}

