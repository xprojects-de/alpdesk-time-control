package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Request object for rolling a season's age groups over to another season")
public record CopySeasonRequest(
        @Schema(description = "Season to copy the age groups from", example = "2025", requiredMode = Schema.RequiredMode.REQUIRED)
        Integer fromSeason,

        @Schema(description = "Season to copy them to. Birth years are shifted by the difference between the two seasons, so \"U14\" 2012-2013 in 2025 becomes 2013-2014 in 2026.", example = "2026", requiredMode = Schema.RequiredMode.REQUIRED)
        Integer toSeason
) {
}
