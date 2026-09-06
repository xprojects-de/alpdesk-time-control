package x.timecontrol.entities;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

import java.time.LocalDate;
import java.time.LocalDateTime;

@MappedEntity
public record Participant(

        @Id
        @GeneratedValue
        Long id,

        Long raceId,

        String firstName,
        String lastName,
        LocalDate birthDate,
        Gender gender,
        @Nullable
        Integer raceNumber,
        @Nullable
        Long teamId,
        @Nullable
        Long categoryId,
        @Nullable
        Integer durationMs,
        @Nullable
        LocalDateTime measuredAt
) {
}
