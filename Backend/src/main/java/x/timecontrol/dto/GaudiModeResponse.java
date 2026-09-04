package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeType;

import java.time.LocalDateTime;

@Serdeable
@Schema(description = "Response object containing Gaudi-Modus information")
public record GaudiModeResponse(
        @Schema(description = "Unique identifier of the Gaudi-Modus instance", example = "1")
        Long id,

        @Schema(description = "ID of the race this Gaudi-Modus belongs to", example = "1")
        Long raceId,

        @Schema(description = "Type of the Gaudi-Modus", example = "LOS")
        GaudiModeType type,

        @Schema(description = "Name / label of this Gaudi-Modus instance", example = "Los-Wertung Herbstrennen")
        String name,

        @Nullable
        @Schema(description = "Number of participants counted per team (only relevant for type TEAM)", example = "5", nullable = true)
        Integer teamSize,

        @Schema(description = "Timestamp when this Gaudi-Modus instance was created")
        LocalDateTime createdAt
) {
    public static GaudiModeResponse from(GaudiMode gaudiMode) {
        return new GaudiModeResponse(
                gaudiMode.id(),
                gaudiMode.raceId(),
                gaudiMode.type(),
                gaudiMode.name(),
                gaudiMode.teamSize(),
                gaudiMode.createdAt()
        );
    }
}
