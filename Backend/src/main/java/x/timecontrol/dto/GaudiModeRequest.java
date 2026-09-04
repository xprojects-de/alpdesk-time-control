package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.GaudiModeType;

@Serdeable
@Schema(description = "Request object for creating or updating a Gaudi-Modus instance")
public record GaudiModeRequest(
        @Schema(description = "ID of the race this Gaudi-Modus belongs to", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
        Long raceId,

        @Schema(description = "Type of the Gaudi-Modus", example = "LOS", requiredMode = Schema.RequiredMode.REQUIRED)
        GaudiModeType type,

        @Schema(description = "Name / label of this Gaudi-Modus instance", example = "Los-Wertung Herbstrennen", requiredMode = Schema.RequiredMode.REQUIRED)
        String name,

        @Nullable
        @Schema(description = "Number of participants counted per team (only relevant for type TEAM)", example = "5", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Integer teamSize
) {
}
