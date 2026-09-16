package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.GaudiModeType;

import java.util.List;

@Serdeable
@Schema(description = "Request object for creating or updating a Gaudi-Modus instance")
public record GaudiModeRequest(
        @Schema(description = "Races this Gaudi-Modus combines. LOS/TEAM take exactly one; TIME_COMBINATION/POINTS_COMBINATION take two or more.", requiredMode = Schema.RequiredMode.REQUIRED)
        List<GaudiModeRaceEntry> races,

        @Schema(description = "Type of the Gaudi-Modus", example = "LOS", requiredMode = Schema.RequiredMode.REQUIRED)
        GaudiModeType type,

        @Schema(description = "Name / label of this Gaudi-Modus instance", example = "Los-Wertung Herbstrennen", requiredMode = Schema.RequiredMode.REQUIRED)
        String name,

        @Nullable
        @Schema(description = "Number of participants counted per team (only relevant for type TEAM)", example = "5", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Integer teamSize,

        @Nullable
        @Schema(description = "Points scale to use (only relevant for type POINTS_COMBINATION); falls back to the default \"FIS-Schema\" if omitted", example = "1", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Long pointsScaleId,

        @Nullable
        @Schema(description = "POINTS_COMBINATION only: if true, a person with at least one valid result across the combined races stays in the ranking despite an explicitly-DNS leg (marked \"DNS\", 0 points, in the PDF sub-table) instead of being excluded as \"nicht gewertet\". A person with no valid result in any combined race is still excluded either way. Defaults to false if omitted.", example = "false", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Boolean keepDnsInRanking,

        @Nullable
        @Schema(description = "Same as keepDnsInRanking, but for an explicitly-DNF leg.", example = "false", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Boolean keepDnfInRanking,

        @Nullable
        @Schema(description = "Same as keepDnsInRanking, but for an explicitly-DSQ leg.", example = "false", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Boolean keepDsqInRanking,

        @Nullable
        @Schema(description = "Cover page PDF content (prepended to every PDF generated for this Gaudi-Modus instance), base64-encoded. Omit/null to leave the current cover page (if any) unchanged.", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        byte[] coverPagePdf,

        @Nullable
        @Schema(description = "Set to true to remove the current cover page (if any); takes precedence over coverPagePdf.", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Boolean removeCoverPage
) {
}
