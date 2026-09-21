package x.timecontrol.dto;

import x.timecontrol.entities.Measurement;
import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDateTime;

@Serdeable
@Schema(description = "Response object containing measurement information")
public record MeasurementResponse(
        @Schema(description = "Unique identifier of the measurement", example = "1")
        Long id,

        @Schema(description = "The timing device's own measurement counter for this row - what the "
                + "device's display shows, as opposed to this table's own id. Negative for a row "
                + "that has no real device counter (manual entry, CSV import): see "
                + "Measurement#deviceMeasurementId.", example = "17", nullable = true)
        @Nullable
        Long deviceMeasurementId,

        @Schema(description = "ID of the participant", example = "1", nullable = true)
        @Nullable
        Long participantId,

        @Schema(description = "Duration in milliseconds", example = "5000")
        Integer durationMs,

        @Schema(description = "Time when the measurement was taken", example = "2026-08-13T10:30:00")
        LocalDateTime measuredAt
) {
    public static MeasurementResponse from(Measurement measurement) {
        return new MeasurementResponse(
                measurement.id(),
                measurement.deviceMeasurementId(),
                measurement.participantId(),
                measurement.durationMs(),
                measurement.measuredAt()
        );
    }
}

