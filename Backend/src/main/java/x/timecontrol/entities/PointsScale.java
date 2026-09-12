package x.timecontrol.entities;

import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

/**
 * A place-to-points lookup table for Punkte-Mischwertung, stored as a comma-separated list
 * ("100,80,60,...") where index 0 is the points for 1st place. Places beyond the list length
 * score 0 points.
 */
@MappedEntity
public record PointsScale(

        @Id
        @GeneratedValue
        Long id,

        String name,
        String pointsCsv
) {
}
