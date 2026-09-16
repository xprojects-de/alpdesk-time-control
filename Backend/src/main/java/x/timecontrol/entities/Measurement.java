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

        // For device-imported rows, the device's own line-local measurement counter. Null is only
        // ever legitimate as an *input* to MeasurementService#create - a signal "generate one for
        // me" for rows with no real device id - which fills it in before the insert; once persisted
        // it is never null (device_measurement_id NOT NULL in V1__create_participant.sql). Generated
        // ids are always negative so they can't collide with a real (always positive) device
        // counter. Kept separate from `id` (a plain autoincrement) so the device's counter and this
        // table's own PK can never collide/overwrite each other after a reset restarts both at 1.
        @Nullable
        Long deviceMeasurementId,

        @Nullable
        Long participantId,

        Integer durationMs,

        LocalDateTime measuredAt
) {
}

