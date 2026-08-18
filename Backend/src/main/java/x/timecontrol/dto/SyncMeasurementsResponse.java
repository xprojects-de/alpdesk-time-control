package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Response DTO for the sync measurements to participants operation.
 */
@Serdeable
@Schema(description = "Response containing the results of syncing measurements to participants")
public record SyncMeasurementsResponse(
        @Schema(description = "Number of measurements successfully synced to participants", example = "15")
        int syncedCount,

        @Schema(description = "Number of measurements skipped (no participant_id or participant not found)", example = "3")
        int skippedCount,

        @Schema(description = "Total number of measurements processed", example = "18")
        int totalCount,

        @Schema(description = "Descriptive message about the sync operation result",
                example = "Successfully synced 15 measurements to participants. Skipped 3 measurements.")
        String message
) {
    /**
     * Creates a SyncMeasurementsResponse with calculated values.
     *
     * @param syncedCount  Number of successfully synced measurements
     * @param skippedCount Number of skipped measurements
     * @return A new SyncMeasurementsResponse instance
     */
    public static SyncMeasurementsResponse of(int syncedCount, int skippedCount) {
        int totalCount = syncedCount + skippedCount;
        String message = String.format(
                "Successfully synced %d measurement%s to participants. Skipped %d measurement%s.",
                syncedCount,
                syncedCount == 1 ? "" : "s",
                skippedCount,
                skippedCount == 1 ? "" : "s"
        );
        return new SyncMeasurementsResponse(syncedCount, skippedCount, totalCount, message);
    }
}

