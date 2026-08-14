package x.timecontrol.entities;

import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

import java.time.LocalDate;

@MappedEntity(value = "race")
public record Race(

        @Id
        @GeneratedValue
        Long id,

        String name,
        LocalDate date
) {
}

