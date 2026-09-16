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

        // Set only for device-imported rows, to the device's own line-local measurement counter -
        // null for manually entered/CSV-imported rows. Kept separate from `id` (a plain
        // autoincrement) so the device's counter and this table's own PK can never collide/overwrite
        // each other after a reset restarts both at 1 - see V1__create_participant.sql.
        @Nullable
        Long deviceMeasurementId,

        @Nullable
        Long participantId,

        Integer durationMs,

        LocalDateTime measuredAt
) {
}

