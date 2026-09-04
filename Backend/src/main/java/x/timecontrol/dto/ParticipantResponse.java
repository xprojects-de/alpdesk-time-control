package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import x.timecontrol.entities.Gender;
import x.timecontrol.entities.Participant;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDate;
import java.time.LocalDateTime;

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
        @Schema(description = "Team the participant belongs to", nullable = true)
        TeamResponse team,

        @Nullable
        @Schema(description = "Age group of the participant based on birth date", nullable = true)
        AgeGroupResponse ageGroup,

        @Nullable
        @Schema(description = "Duration of the race in milliseconds", example = "125000", nullable = true)
        Integer durationMs,

        @Nullable
        @Schema(description = "Timestamp when the measurement was taken", example = "2026-08-18T10:30:00", nullable = true)
        LocalDateTime measuredAt
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
                null,
                null,
                participant.durationMs(),
                participant.measuredAt()
        );
    }

    public static ParticipantResponse from(Participant participant, RaceResponse race, TeamResponse team, AgeGroupResponse ageGroup) {
        return new ParticipantResponse(
                participant.id(),
                race,
                participant.firstName(),
                participant.lastName(),
                participant.birthDate(),
                participant.gender(),
                participant.raceNumber(),
                team,
                ageGroup,
                participant.durationMs(),
                participant.measuredAt()
        );
    }
}

