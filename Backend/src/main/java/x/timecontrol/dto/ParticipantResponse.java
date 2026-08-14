package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import x.timecontrol.entities.Gender;
import x.timecontrol.entities.Participant;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDate;

@Serdeable
@Schema(description = "Response object containing participant information")
public record ParticipantResponse(
        @Schema(description = "Unique identifier of the participant", example = "1")
        Long id,

        @Nullable
        @Schema(description = "Race information", nullable = true)
        RaceResponse race,

        @Schema(description = "First name of the participant", example = "John")
        String firstName,

        @Schema(description = "Last name of the participant", example = "Doe")
        String lastName,

        @Schema(description = "Birth date of the participant", example = "1990-01-15")
        LocalDate birthDate,

        @Schema(description = "Gender of the participant", example = "MALE")
        Gender gender,

        @Schema(description = "Race number of the participant", example = "42")
        Integer raceNumber,

        @Nullable
        @Schema(description = "Association of the participant", example = "Marathon Club")
        String association,

        @Nullable
        @Schema(description = "Age group of the participant based on birth date", nullable = true)
        AgeGroupResponse ageGroup
) {
    public static ParticipantResponse from(Participant participant) {
        return new ParticipantResponse(
                participant.id(),
                null,
                participant.firstName(),
                participant.lastName(),
                participant.birthDate(),
                participant.gender(),
                participant.raceNumber(),
                participant.association(),
                null
        );
    }

    public static ParticipantResponse from(Participant participant, RaceResponse race, AgeGroupResponse ageGroup) {
        return new ParticipantResponse(
                participant.id(),
                race,
                participant.firstName(),
                participant.lastName(),
                participant.birthDate(),
                participant.gender(),
                participant.raceNumber(),
                participant.association(),
                ageGroup
        );
    }
}

