package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Error response body")
public record ErrorResponse(
        @Schema(description = "Human-readable error message", example = "Race number 42 is already assigned in this race")
        String message
) {
}
