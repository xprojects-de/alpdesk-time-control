package x.timecontrol.entities;

import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

import java.time.LocalDate;

@MappedEntity
public record Participant(

        @Id
        @GeneratedValue
        Long id,

        String firstName,
        String lastName,
        LocalDate birthDate,
        Integer raceNumber,
        String association
) {
}
