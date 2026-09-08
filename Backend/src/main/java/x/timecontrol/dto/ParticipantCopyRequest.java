package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Serdeable
@Schema(description = "Request to copy all participants of one race into one or more other races")
public record ParticipantCopyRequest(
        @Schema(description = "Race whose participants should be copied", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
        Long sourceRaceId,

        @Schema(description = "Races to copy the participants into", requiredMode = Schema.RequiredMode.REQUIRED)
        List<Long> targetRaceIds
) {
}
