package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDate;

@Serdeable
@Schema(description = "Request object for creating or updating a race")
public record RaceRequest(
        @Schema(description = "Name of the race", example = "Wintercup 2026", requiredMode = Schema.RequiredMode.REQUIRED)
        String name,

        @Schema(description = "Date of the race", example = "2026-01-15", requiredMode = Schema.RequiredMode.REQUIRED)
        LocalDate date
) {
}

