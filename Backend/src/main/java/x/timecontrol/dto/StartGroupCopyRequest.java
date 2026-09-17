package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Serdeable
@Schema(description = "Request to copy one race's start-group assignment into one or more other races")
public record StartGroupCopyRequest(
        @Schema(description = "Race whose start-group assignment should be copied", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
        Long sourceRaceId,

        @Schema(description = "Races to copy the assignment into", requiredMode = Schema.RequiredMode.REQUIRED)
        List<Long> targetRaceIds
) {
}
