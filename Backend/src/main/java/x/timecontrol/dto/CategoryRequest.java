package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Request object for creating or updating a category")
public record CategoryRequest(
        @Schema(description = "Name of the category", example = "E-Bike", requiredMode = Schema.RequiredMode.REQUIRED)
        String name
) {
}
