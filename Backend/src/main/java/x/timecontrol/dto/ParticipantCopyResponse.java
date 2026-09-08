package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Result of copying participants into other races")
public record ParticipantCopyResponse(
        @Schema(description = "Number of participants newly created across all target races", example = "12")
        int copiedCount,

        @Schema(description = "Number skipped because that person was already a participant of the target race", example = "2")
        int skippedCount
) {
}
