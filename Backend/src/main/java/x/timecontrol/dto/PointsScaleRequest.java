package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Serdeable
@Schema(description = "Request object for creating or updating a points scale (place -> points lookup table)")
public record PointsScaleRequest(
        @Schema(description = "Name of the points scale", example = "FIS-Schema", requiredMode = Schema.RequiredMode.REQUIRED)
        String name,

        @Schema(description = "Points awarded per place, starting at 1st place", example = "[100, 80, 60, 50, 45]", requiredMode = Schema.RequiredMode.REQUIRED)
        List<Integer> points
) {
}
