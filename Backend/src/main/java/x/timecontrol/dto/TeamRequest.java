package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Request object for creating or updating a team")
public record TeamRequest(
        @Schema(description = "Name of the team", example = "SC Musterhausen", requiredMode = Schema.RequiredMode.REQUIRED)
        String name
) {
}
