package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import x.timecontrol.entities.Participant;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDateTime;

@Serdeable
@Schema(description = "Response object containing participant information")
public record ParticipantResponse(
        @Schema(description = "Unique identifier of the participant", example = "1")
        Long id,

        @Nullable
        @Schema(description = "Race information", nullable = true)
        RaceResponse race,

        @Nullable
        @Schema(description = "Person taking part", nullable = true)
        PersonResponse person,

        @Nullable
        @Schema(description = "Race number of the participant", example = "42", nullable = true)
        Integer raceNumber,

        @Nullable
        @Schema(description = "Team the participant belongs to", nullable = true)
        TeamResponse team,

        @Nullable
        @Schema(description = "Category the participant belongs to", nullable = true)
        CategoryResponse category,

        @Nullable
        @Schema(description = "Age group of the participant based on birth date", nullable = true)
        AgeGroupResponse ageGroup,

        @Nullable
        @Schema(description = "Duration of the race in milliseconds", example = "125000", nullable = true)
        Integer durationMs,

        @Nullable
        @Schema(description = "Penalty added to the raw result, makes the result worse", example = "2000", nullable = true)
        Integer penalty,

        @Nullable
        @Schema(description = "Timestamp when the measurement was taken", example = "2026-08-18T10:30:00", nullable = true)
        LocalDateTime measuredAt,

        @Nullable
        @Schema(description = "Free-text comment/info about the participant", example = "Ski gebrochen", nullable = true)
        String comment
) {
    public static ParticipantResponse from(Participant participant, PersonResponse person, RaceResponse race, TeamResponse team, CategoryResponse category, AgeGroupResponse ageGroup) {
        return new ParticipantResponse(
                participant.id(),
                race,
                person,
                participant.raceNumber(),
                team,
                category,
                ageGroup,
                participant.durationMs(),
                participant.penalty(),
                participant.measuredAt(),
                participant.comment()
        );
    }
}
