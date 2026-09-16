package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.Race;
import x.timecontrol.entities.ResultUnit;
import x.timecontrol.entities.SortDirection;
import x.timecontrol.entities.StartOrderMode;

import java.time.LocalDate;

@Serdeable
@Schema(description = "Response object containing race information")
public record RaceResponse(
        @Schema(description = "Unique identifier of the race", example = "1")
        Long id,

        @Schema(description = "Name of the race", example = "Wintercup 2026")
        String name,

        @Schema(description = "Date of the race", example = "2026-01-15")
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

        @Schema(description = "Unit of the recorded result", example = "TIME")
        ResultUnit resultUnit,

        @Nullable
        @Schema(description = "Display label for the result unit, only relevant when resultUnit is POINTS", example = "m", nullable = true)
        String resultUnitLabel,

        @Schema(description = "Whether a lower (ASC) or higher (DESC) result is better", example = "ASC")
        SortDirection sortDirection,

        @Schema(description = "Whether a cover page PDF is set for this race. The PDF content itself is never included here - upload via coverPagePdf on update to replace it.")
        boolean hasCoverPage,

        @Nullable
        @Schema(description = "Id of an earlier race this race derives its start order from, if linked", nullable = true)
        Long previousRaceId,

        @Nullable
        @Schema(description = "How the start order is derived from previousRaceId, if linked", nullable = true)
        StartOrderMode startOrderMode,

        @Nullable
        @Schema(description = "Number of top-placed previousRaceId finishers (per age group) started in reverse order, if startOrderMode is REVERSE_TOP_N", nullable = true)
        Integer startOrderReverseTopCount
) {
    public static RaceResponse from(Race race) {
        return new RaceResponse(
                race.id(),
                race.name(),
                race.date(),
                race.organisation(),
                race.referee(),
                race.raceDirector(),
                race.timeControl(),
                race.routeName(),
                race.elevationDifference(),
                race.routeLength(),
                race.courseSetter(),
                race.weather(),
                race.resultUnit(),
                race.resultUnitLabel(),
                race.sortDirection(),
                race.coverPagePdf() != null,
                race.previousRaceId(),
                race.startOrderMode(),
                race.startOrderReverseTopCount()
        );
    }
}
