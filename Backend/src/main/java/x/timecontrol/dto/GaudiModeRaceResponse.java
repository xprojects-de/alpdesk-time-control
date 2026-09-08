package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "One race referenced by a Gaudi-Modus instance")
public record GaudiModeRaceResponse(
        @Schema(description = "ID of the referenced race", example = "1")
        Long raceId,

        @Schema(description = "Name of the referenced race", example = "Riesenslalom")
        String raceName,

        @Schema(description = "Weight this race's points count with (Punkte-Mischwertung only)", example = "1.0")
        double weight,

        @Schema(description = "Display order of this race within the combination", example = "0")
        int sortOrder
) {
}
