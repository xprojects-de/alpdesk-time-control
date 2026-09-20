package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.StartGroupTemplate;

@Serdeable
@Schema(description = "Response object containing start-group template information")
public record StartGroupTemplateResponse(
        @Schema(description = "Unique identifier of the start-group template", example = "1")
        Long id,

        @Schema(description = "Label of the start group", example = "Grün")
        String label,

        @Schema(description = "Hex color of the start group", example = "#92D050")
        String color,

        @Schema(description = "Display/default order of this template relative to other templates", example = "0")
        int position,

        @Nullable
        @Schema(description = "Block-start time offset in seconds relative to the group's start signal", example = "300", nullable = true)
        Integer offsetSeconds
) {
    public static StartGroupTemplateResponse from(StartGroupTemplate template) {
        return new StartGroupTemplateResponse(template.id(), template.label(), template.color(), template.position(), template.offsetSeconds());
    }
}
