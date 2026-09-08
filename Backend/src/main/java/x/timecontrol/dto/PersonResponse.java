package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.Gender;
import x.timecontrol.entities.Person;

import java.time.LocalDate;

@Serdeable
@Schema(description = "Response object containing person information")
public record PersonResponse(
        @Schema(description = "Unique identifier of the person", example = "1")
        Long id,

        @Schema(description = "First name of the person", example = "John")
        String firstName,

        @Schema(description = "Last name of the person", example = "Doe")
        String lastName,

        @Schema(description = "Birth date of the person", example = "1990-01-15")
        LocalDate birthDate,

        @Schema(description = "Gender of the person", example = "MALE")
        Gender gender,

        @Nullable
        @Schema(description = "External association/license ID used to identify this person across imports", example = "58078", nullable = true)
        String externalId
) {
    public static PersonResponse from(Person person) {
        return new PersonResponse(
                person.id(),
                person.firstName(),
                person.lastName(),
                person.birthDate(),
                person.gender(),
                person.externalId()
        );
    }
}
