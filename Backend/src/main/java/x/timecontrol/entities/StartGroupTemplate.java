package x.timecontrol.entities;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

/**
 * A reusable, race-independent start-group definition (label/color/position/offset) - see
 * {@link Participant#startGroupId()}. Applying a template to a race only writes a participant's
 * {@code startGroupId}; the template itself is never race-scoped and can be reused across any
 * number of races/events.
 */
@MappedEntity
public record StartGroupTemplate(

        @Id
        @GeneratedValue
        Long id,

        String label,

        String color,

        int position,

        @Nullable
        Integer offsetSeconds
) {
}
