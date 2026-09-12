package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Request to manually set the next expected race number in auto-assign mode")
public record AutoAssignSetNextRequest(
        @Schema(description = "Race number the next incoming measurement should be matched to; null clears it (no auto-match until set again)", example = "17", nullable = true)
        @Nullable
        Integer raceNumber
) {
}
