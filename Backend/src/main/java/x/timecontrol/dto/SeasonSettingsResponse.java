package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDate;

@Serdeable
@Schema(description = "The configured season boundary and the season today falls into")
public record SeasonSettingsResponse(
        @Schema(description = "Month the season year starts in (1-12)", example = "1")
        Integer seasonStartMonth,

        @Schema(description = "Day of that month the season year starts on", example = "1")
        Integer seasonStartDay,

        @Schema(description = "The season today's date falls into with this boundary", example = "2026")
        Integer currentSeason,

        @Schema(description = "First day of the current season - so the UI can show what a season actually spans", example = "2026-01-01")
        LocalDate currentSeasonStart,

        @Schema(description = "Last day of the current season", example = "2026-12-31")
        LocalDate currentSeasonEnd
) {
}
