package x.timecontrol.entities;

import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

@MappedEntity
public record Category(

        @Id
        @GeneratedValue
        Long id,

        String name
) {
}
