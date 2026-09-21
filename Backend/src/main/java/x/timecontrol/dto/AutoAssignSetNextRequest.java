package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Request to manually set the next expected race number in auto-assign mode")
public record AutoAssignSetNextRequest(
        @Schema(description = "Race number the next incoming measurement should be matched to; null clears it (no auto-match until set again)", example = "17", nullable = true)
        @Nullable
        Integer raceNumber,

        @Schema(description = "Discard the race number's existing measurement, if any, so it can be timed again (re-run). Without this, a race number that already has a time is rejected with 409.", example = "false", nullable = true)
        @Nullable
        Boolean force
) {
}
