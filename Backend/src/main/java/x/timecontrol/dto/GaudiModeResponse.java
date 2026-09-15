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

        @Schema(description = "Timestamp when this Gaudi-Modus instance was created")
        LocalDateTime createdAt,

        @Schema(description = "Whether a cover page PDF is set for this Gaudi-Modus instance. The PDF content itself is never included here - upload via coverPagePdf on update to replace it.")
        boolean hasCoverPage
) {
    public static GaudiModeResponse from(GaudiMode gaudiMode, List<GaudiModeRaceResponse> races) {
        return new GaudiModeResponse(
                gaudiMode.id(),
                races,
                gaudiMode.type(),
                gaudiMode.name(),
                gaudiMode.teamSize(),
                gaudiMode.pointsScaleId(),
                gaudiMode.createdAt(),
                gaudiMode.coverPagePdf() != null
        );
    }
}
