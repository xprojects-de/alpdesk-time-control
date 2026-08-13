package x.timecontrol.dto;

import x.timecontrol.entities.Participant;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDate;

@Serdeable
@Schema(description = "Response object containing participant information")
public record ParticipantResponse(
        @Schema(description = "Unique identifier of the participant", example = "1")
        Long id,

        @Schema(description = "First name of the participant", example = "John")
        String firstName,

        @Schema(description = "Last name of the participant", example = "Doe")
        String lastName,

        @Schema(description = "Birth date of the participant", example = "1990-01-15")
        LocalDate birthDate,

        @Schema(description = "Race number of the participant", example = "42")
        Integer raceNumber,

        @Schema(description = "Association of the participant", example = "Marathon Club")
        String association
) {
    public static ParticipantResponse from(Participant participant) {
        return new ParticipantResponse(
                participant.id(),
                participant.firstName(),
                participant.lastName(),
                participant.birthDate(),
                participant.raceNumber(),
                participant.association()
        );
    }
}

