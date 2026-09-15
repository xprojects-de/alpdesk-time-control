package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "Result of deleting all persons not assigned to any participant")
public record DeleteUnusedPersonsResponse(
        @Schema(description = "Number of persons that were deleted", example = "3")
        int deletedCount
) {
}
