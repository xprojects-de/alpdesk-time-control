package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.Gender;

import java.time.LocalDate;

@Serdeable
@Schema(description = "Request object for creating or updating a person")
public record PersonRequest(
        @Schema(description = "First name of the person", example = "John", requiredMode = Schema.RequiredMode.REQUIRED)
        String firstName,

        @Schema(description = "Last name of the person", example = "Doe", requiredMode = Schema.RequiredMode.REQUIRED)
        String lastName,

        @Schema(description = "Birth date of the person", example = "1990-01-15", requiredMode = Schema.RequiredMode.REQUIRED)
        LocalDate birthDate,

        @Schema(description = "Gender of the person", example = "MALE", requiredMode = Schema.RequiredMode.REQUIRED)
        Gender gender,

        @Nullable
        @Schema(description = "External association/license ID used to identify this person across imports", example = "58078", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        String externalId
) {
}
