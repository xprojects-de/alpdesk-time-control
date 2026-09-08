package x.timecontrol.entities;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

import java.time.LocalDateTime;

@MappedEntity
public record Participant(

        @Id
        @GeneratedValue
        Long id,

        Long raceId,

        Long personId,

        @Nullable
        Integer raceNumber,
        @Nullable
        Long teamId,
        @Nullable
        Long categoryId,
        @Nullable
        Integer durationMs,
        @Nullable
        Integer penalty,
        @Nullable
        LocalDateTime measuredAt
) {
}
