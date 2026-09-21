package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeType;

import java.time.LocalDateTime;
import java.util.List;

@Serdeable
@Schema(description = "Response object containing Gaudi-Modus information")
public record GaudiModeResponse(
        @Schema(description = "Unique identifier of the Gaudi-Modus instance", example = "1")
        Long id,

        @Schema(description = "Races this Gaudi-Modus combines")
        List<GaudiModeRaceResponse> races,

        @Schema(description = "Type of the Gaudi-Modus", example = "LOS")
        GaudiModeType type,

        @Schema(description = "Name / label of this Gaudi-Modus instance", example = "Los-Wertung Herbstrennen")
        String name,

        @Nullable
        @Schema(description = "Number of participants counted per team (only relevant for type TEAM)", example = "5", nullable = true)
        Integer teamSize,

        @Nullable
        @Schema(description = "Points scale used (only relevant for type POINTS_COMBINATION)", example = "1", nullable = true)
        Long pointsScaleId,

        @Schema(description = "POINTS_COMBINATION only: if true, a person with at least one valid result across the combined races stays in the ranking despite an explicitly-DNS leg (marked \"DNS\", 0 points, in the PDF sub-table) instead of being excluded as \"nicht gewertet\". A person with no valid result in any combined race is still excluded either way.", example = "false")
        boolean keepDnsInRanking,

        @Schema(description = "Same as keepDnsInRanking, but for an explicitly-DNF leg.", example = "false")
        boolean keepDnfInRanking,

        @Schema(description = "Same as keepDnsInRanking, but for an explicitly-DSQ leg.", example = "false")
        boolean keepDsqInRanking,

        @Schema(description = "Timestamp when this Gaudi-Modus instance was created")
        LocalDateTime createdAt,

        @Schema(description = "Whether a cover page PDF is set for this Gaudi-Modus instance. The PDF content itself is never included here - upload via coverPagePdf on update to replace it.")
        boolean hasCoverPage
) {
    public static GaudiModeResponse from(GaudiMode gaudiMode, List<GaudiModeRaceResponse> races) {
        return from(gaudiMode, races, gaudiMode.coverPagePdf() != null);
    }

    /**
     * For callers whose GaudiMode came from a projection that leaves the cover page out (see
     * {@link x.timecontrol.repositories.GaudiModeRepository#findAllWithoutCoverPage()}), so
     * {@code gaudiMode.coverPagePdf() != null} would wrongly report "no cover page" for every one.
     */
    public static GaudiModeResponse from(GaudiMode gaudiMode, List<GaudiModeRaceResponse> races,
                                         boolean hasCoverPage) {
        return new GaudiModeResponse(
                gaudiMode.id(),
                races,
                gaudiMode.type(),
                gaudiMode.name(),
                gaudiMode.teamSize(),
                gaudiMode.pointsScaleId(),
                gaudiMode.keepDnsInRanking(),
                gaudiMode.keepDnfInRanking(),
                gaudiMode.keepDsqInRanking(),
                gaudiMode.createdAt(),
                hasCoverPage
        );
    }
}
