package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.ResultUnit;
import x.timecontrol.entities.SortDirection;

import java.time.LocalDate;

@Serdeable
@Schema(description = "Request object for creating or updating a race")
public record RaceRequest(
        @Schema(description = "Name of the race", example = "Wintercup 2026", requiredMode = Schema.RequiredMode.REQUIRED)
        String name,

        @Schema(description = "Date of the race", example = "2026-01-15", requiredMode = Schema.RequiredMode.REQUIRED)
        LocalDate date,

        @Schema(description = "Organisation hosting the race", example = "Skiclub Musterhausen")
        String organisation,

        @Schema(description = "Referee of the race", example = "Max Mustermann")
        String referee,

        @Schema(description = "Race director", example = "Erika Musterfrau")
        String raceDirector,

        @Schema(description = "Timing provider/company", example = "TimeControl GmbH")
        String timeControl,

        @Schema(description = "Name of the race route", example = "Talabfahrt")
        String routeName,

        @Schema(description = "Elevation difference of the route", example = "350 m")
        String elevationDifference,

        @Schema(description = "Length of the route", example = "1200 m")
        String routeLength,

        @Schema(description = "Course setter", example = "Hans Kurssetzer")
        String courseSetter,

        @Schema(description = "Weather on race day", example = "Sunny, -3°C")
        String weather,

        @Nullable
        @Schema(description = "Unit of the recorded result (defaults to TIME if omitted)", example = "TIME", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        ResultUnit resultUnit,

        @Nullable
        @Schema(description = "Display label for the result unit, only relevant when resultUnit is POINTS", example = "m", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        String resultUnitLabel,

        @Nullable
        @Schema(description = "Whether a lower (ASC) or higher (DESC) result is better (defaults to ASC if omitted)", example = "ASC", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        SortDirection sortDirection
) {
}
