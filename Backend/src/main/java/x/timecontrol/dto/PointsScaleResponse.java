package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.PointsScale;

import java.util.Arrays;
import java.util.List;

@Serdeable
@Schema(description = "Response object containing a points scale (place -> points lookup table)")
public record PointsScaleResponse(
        @Schema(description = "Unique identifier of the points scale", example = "1")
        Long id,

        @Schema(description = "Name of the points scale", example = "FIS-Schema")
        String name,

        @Schema(description = "Points awarded per place, starting at 1st place", example = "[100, 80, 60, 50, 45]")
        List<Integer> points
) {
    public static PointsScaleResponse from(PointsScale pointsScale) {
        List<Integer> points = Arrays.stream(pointsScale.pointsCsv().split(","))
                .map(String::trim)
                .map(Integer::parseInt)
                .toList();
        return new PointsScaleResponse(pointsScale.id(), pointsScale.name(), points);
    }
}
