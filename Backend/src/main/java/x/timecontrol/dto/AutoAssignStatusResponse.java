package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.services.AutoAssignService;

@Serdeable
@Schema(description = "Current status of the live auto-assign mode")
public record AutoAssignStatusResponse(
        @Schema(description = "Race the auto-assign mode is currently bound to, if active", nullable = true)
        @Nullable
        Long raceId,

        @Schema(description = "Whether auto-assign mode is currently active")
        boolean active,

        @Schema(description = "Race number that will be matched to the next incoming measurement", nullable = true)
        @Nullable
        Integer nextRaceNumber
) {
    public static AutoAssignStatusResponse from(AutoAssignService.Status status) {
        return new AutoAssignStatusResponse(status.raceId(), status.active(), status.nextRaceNumber());
    }
}
