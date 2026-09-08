package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "One race referenced by a Gaudi-Modus instance, with its weight for Punkte-Mischwertung")
public record GaudiModeRaceEntry(
        @Schema(description = "ID of the referenced race", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
        Long raceId,

        @Nullable
        @Schema(description = "Weight this race's points count with (Punkte-Mischwertung only, defaults to 1.0)", example = "1.0", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Double weight
) {
}
