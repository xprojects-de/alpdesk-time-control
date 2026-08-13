package x.timecontrol.entities;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

import java.time.LocalDateTime;

@MappedEntity
public record Measurement(

        @Id
        @GeneratedValue
        Long id,

        @Nullable
        Long participantId,

        Integer durationMs,

        LocalDateTime measuredAt
) {
}

