package x.timecontrol.entities;

import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

@MappedEntity
public record GaudiModeRace(

        @Id
        @GeneratedValue
        Long id,

        Long gaudiModeId,
        Long raceId,
        Integer sortOrder,
        Double weight
) {
}
