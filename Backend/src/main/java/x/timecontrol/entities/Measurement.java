package x.timecontrol.entities;

import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;
import io.micronaut.data.annotation.Relation;

import java.time.LocalDateTime;

@MappedEntity
public record Measurement(

        @Id
        @GeneratedValue
        Long id,

        Long participantId,

        Integer durationMs,

        LocalDateTime measuredAt
) {
}

