package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDateTime;

@Serdeable
@Schema(description = "Request object for creating or updating a measurement")
public record MeasurementRequest(
        @Schema(description = "ID of the participant", example = "1", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        @Nullable
        Long participantId,

        @Schema(description = "Duration in milliseconds", example = "5000", requiredMode = Schema.RequiredMode.REQUIRED)
        Integer durationMs,

        @Schema(description = "Time when the measurement was taken", example = "2026-08-13T10:30:00", requiredMode = Schema.RequiredMode.REQUIRED)
        LocalDateTime measuredAt,

        @Schema(description = "Keeps the timing device and auto-assign from changing this measurement. "
                + "Omitted means not locked.", example = "true", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        @Nullable
        Boolean locked,

        @Schema(description = "Operator's note on this measurement, at most 500 characters. Blank or omitted "
                + "means no comment.", example = "Lichtschranke doppelt ausgelöst", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        @Nullable
        String comment
) {
}

