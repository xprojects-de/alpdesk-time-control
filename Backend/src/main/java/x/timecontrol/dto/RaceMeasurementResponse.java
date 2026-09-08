package x.timecontrol.dto;

import x.timecontrol.entities.RaceMeasurement;
import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDateTime;

@Serdeable
@Schema(description = "Response object containing an archived race measurement")
public record RaceMeasurementResponse(
        @Schema(description = "Unique identifier of the race measurement", example = "1")
        Long id,

        @Schema(description = "ID of the race this measurement was archived for", example = "1")
        Long raceId,

        @Schema(description = "Original ID assigned by the timing device", example = "17")
        Long deviceMeasurementId,

        @Schema(description = "ID of the participant", example = "1", nullable = true)
        @Nullable
        Long participantId,

        @Schema(description = "Duration in milliseconds", example = "5000")
        Integer durationMs,

        @Schema(description = "Time when the measurement was taken", example = "2026-08-13T10:30:00")
        LocalDateTime measuredAt
) {
    public static RaceMeasurementResponse from(RaceMeasurement raceMeasurement) {
        return new RaceMeasurementResponse(
                raceMeasurement.id(),
                raceMeasurement.raceId(),
                raceMeasurement.deviceMeasurementId(),
                raceMeasurement.participantId(),
                raceMeasurement.durationMs(),
                raceMeasurement.measuredAt()
        );
    }
}
