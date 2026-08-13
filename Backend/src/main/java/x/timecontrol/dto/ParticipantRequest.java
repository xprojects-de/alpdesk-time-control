package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDate;

@Serdeable
@Schema(description = "Request object for creating or updating a participant")
public record ParticipantRequest(
        @Schema(description = "First name of the participant", example = "John", requiredMode = Schema.RequiredMode.REQUIRED)
        String firstName,

        @Schema(description = "Last name of the participant", example = "Doe", requiredMode = Schema.RequiredMode.REQUIRED)
        String lastName,

        @Schema(description = "Birth date of the participant", example = "1990-01-15", requiredMode = Schema.RequiredMode.REQUIRED)
        LocalDate birthDate,

        @Schema(description = "Race number of the participant", example = "42", requiredMode = Schema.RequiredMode.REQUIRED)
        Integer raceNumber,

        @Nullable
        @Schema(description = "Association of the participant", example = "Marathon Club", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        String association
) {
}

