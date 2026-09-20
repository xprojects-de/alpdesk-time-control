package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Serdeable
@Schema(description = "Request to apply a start-group assignment (and its resulting start order) to a race's participants. Only participants listed here are touched - anyone left out keeps their current startGroupId/startSequence.")
public record StartGroupAssignmentRequest(
        @Schema(description = "One entry per participant to (re)assign, including still-unassigned ones (startGroupId=null, startSequence=null)", requiredMode = Schema.RequiredMode.REQUIRED)
        List<Entry> assignments
) {
    @Serdeable
    @Schema(description = "One participant's start-group assignment")
    public record Entry(
            @Schema(description = "Participant to assign", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
            Long participantId,

            @Nullable
            @Schema(description = "Start-group template this participant is assigned to, or null for still unassigned", nullable = true)
            Long startGroupId,

            @Nullable
            @Schema(description = "Position in the resulting start order (continuous across all groups, e.g. group A gets 1..28, group B 29..55), or null while still unassigned", example = "1", nullable = true)
            Integer startSequence
    ) {
    }
}
