package x.timecontrol.entities;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

import java.time.LocalDateTime;

@MappedEntity
public record GaudiMode(

        @Id
        @GeneratedValue
        Long id,

        GaudiModeType type,
        String name,

        @Nullable
        Integer teamSize,

        @Nullable
        Long pointsScaleId,

        LocalDateTime createdAt
) {
}
