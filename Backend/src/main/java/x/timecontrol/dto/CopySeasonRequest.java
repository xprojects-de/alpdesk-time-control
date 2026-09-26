package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Request object for copying one variant's age groups to another season and/or variant - rolling a season over, or starting a new variant from an existing one")
public record CopySeasonRequest(
        @Schema(description = "Season to copy the age groups from", example = "2025", requiredMode = Schema.RequiredMode.REQUIRED)
        Integer fromSeason,

        @Schema(description = "Season to copy them to. Birth years are shifted by the difference between the two seasons, so \"U14\" 2012-2013 in 2025 becomes 2013-2014 in 2026.", example = "2026", requiredMode = Schema.RequiredMode.REQUIRED)
        Integer toSeason,

        @Nullable
        @Schema(description = "Variant to copy from; omitted or empty means the season's standard variant", example = "", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        String fromVariant,

        @Nullable
        @Schema(description = "Variant to copy to; omitted or empty means the season's standard variant", example = "Kinderrennen jahrgangsweise", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        String toVariant
) {
}
