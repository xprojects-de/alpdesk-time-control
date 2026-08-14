package x.timecontrol.entities;

import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

@MappedEntity(value = "age_group")
public record AgeGroup(

        @Id
        @GeneratedValue
        Long id,

        String name,
        Integer birthYearFrom,
        Integer birthYearTo,
        Gender gender
) {
}

