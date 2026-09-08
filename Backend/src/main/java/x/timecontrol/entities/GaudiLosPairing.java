package x.timecontrol.entities;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

@MappedEntity
public record GaudiLosPairing(

        @Id
        @GeneratedValue
        Long id,

        Long gaudiModeId,
        Long participant1Id,

        @Nullable
        Long participant2Id
) {
}
