package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Request to enable live auto-assign mode for a race")
public record AutoAssignEnableRequest(
        @Schema(description = "Race to bind auto-assign mode to", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
        Long raceId,

        @Schema(description = "Race number to start matching from; defaults to the lowest race number in the race if omitted", example = "1", nullable = true)
        @Nullable
        Integer startRaceNumber
) {
}
