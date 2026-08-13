package x.timecontrol.entities;

import io.micronaut.core.annotation.Nullable;
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
        Gender gender,
        Integer raceNumber,
        @Nullable
        String association
) {
}
