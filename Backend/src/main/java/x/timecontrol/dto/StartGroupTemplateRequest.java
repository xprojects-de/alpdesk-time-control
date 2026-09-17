package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Request object for creating or updating a start-group template")
public record StartGroupTemplateRequest(
        @Schema(description = "Label of the start group", example = "Grün", requiredMode = Schema.RequiredMode.REQUIRED)
        String label,

        @Schema(description = "Hex color of the start group", example = "#92D050", requiredMode = Schema.RequiredMode.REQUIRED)
        String color,

        @Schema(description = "Display/default order of this template relative to other templates", example = "0")
        int position,

        @Nullable
        @Schema(description = "Block-start time offset in seconds relative to the group's start signal", example = "300", nullable = true)
        Integer offsetSeconds
) {
}
