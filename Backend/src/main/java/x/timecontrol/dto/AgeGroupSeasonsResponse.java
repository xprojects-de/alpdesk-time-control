package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Serdeable
@Schema(description = "The seasons the age-group configuration UI offers, and the season today falls into")
public record AgeGroupSeasonsResponse(
        @Schema(description = "Seasons that have age groups configured, newest first - the only ones a rollover can copy from", example = "[2026, 2025]")
        List<Integer> seasons,

        @Schema(description = "Seasons that have at least one race, newest first. Offered as well because a season with races but no age groups is exactly the one whose results come out \"ohne Altersklasse\" and therefore the one that needs configuring - it is not in \"seasons\" yet.", example = "[2026, 2025]")
        List<Integer> seasonsWithRaces,

        @Schema(description = "The season today falls into with the configured season boundary - what a new configuration defaults to", example = "2026")
        Integer currentSeason
) {
}
