package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.Gender;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Serdeable
@Schema(description = "Request object for creating or updating a participant")
public record ParticipantRequest(
        @Schema(description = "ID of the race", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
        Long raceId,

        @Schema(description = "First name of the participant", example = "John", requiredMode = Schema.RequiredMode.REQUIRED)
        String firstName,

        @Schema(description = "Last name of the participant", example = "Doe", requiredMode = Schema.RequiredMode.REQUIRED)
        String lastName,

        @Schema(description = "Birth date of the participant", example = "1990-01-15", requiredMode = Schema.RequiredMode.REQUIRED)
        LocalDate birthDate,

        @Schema(description = "Gender of the participant", example = "MALE", requiredMode = Schema.RequiredMode.REQUIRED)
        Gender gender,

        @Schema(description = "Race number of the participant", example = "42", requiredMode = Schema.RequiredMode.REQUIRED)
        Integer raceNumber,

        @Nullable
        @Schema(description = "ID of the team the participant belongs to", example = "1", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Long teamId,

        @Nullable
        @Schema(description = "Duration of the race in milliseconds", example = "125000", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Integer durationMs,

        @Nullable
        @Schema(description = "Timestamp when the measurement was taken", example = "2026-08-18T10:30:00", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        LocalDateTime measuredAt
) {
}

