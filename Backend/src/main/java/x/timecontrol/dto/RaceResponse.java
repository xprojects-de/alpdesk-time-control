package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.Race;

import java.time.LocalDate;

@Serdeable
@Schema(description = "Response object containing race information")
public record RaceResponse(
        @Schema(description = "Unique identifier of the race", example = "1")
        Long id,

        @Schema(description = "Name of the race", example = "Wintercup 2026")
        String name,

        @Schema(description = "Date of the race", example = "2026-01-15")
        LocalDate date
) {
    public static RaceResponse from(Race race) {
        return new RaceResponse(
                race.id(),
                race.name(),
                race.date()
        );
    }
}

