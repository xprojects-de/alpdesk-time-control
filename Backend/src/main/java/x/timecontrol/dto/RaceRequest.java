package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.ResultUnit;
import x.timecontrol.entities.SortDirection;
import x.timecontrol.entities.StartOrderMode;

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
        SortDirection sortDirection,

        @Nullable
        @Schema(description = "Cover page PDF content (prepended to every ranking/results PDF generated for this race, not the start list), base64-encoded. Omit/null to leave the current cover page (if any) unchanged.", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        byte[] coverPagePdf,

        @Nullable
        @Schema(description = "Set to true to remove the current cover page (if any); takes precedence over coverPagePdf.", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Boolean removeCoverPage,

        @Nullable
        @Schema(description = "Id of an earlier race (e.g. run 1 of a two-run slalom) this race derives its start order from. Null/omitted means no link.", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Long previousRaceId,

        @Nullable
        @Schema(description = "How the start order is derived from previousRaceId; only relevant when previousRaceId is set", example = "REVERSE_TOP_N", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        StartOrderMode startOrderMode,

        @Nullable
        @Schema(description = "Number of top-placed previousRaceId finishers (per age group) to start in reverse order when startOrderMode is REVERSE_TOP_N", example = "15", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        Integer startOrderReverseTopCount,

        @Nullable
        @Schema(description = "Age-group variant of the race's season this race is categorised with. Empty means the season's standard variant; any other value must have age groups in that season. Omitted keeps the race's current variant on an update (the standard one for a new race).", example = "Kinderrennen jahrgangsweise", requiredMode = Schema.RequiredMode.NOT_REQUIRED, nullable = true)
        String ageGroupVariant
) {
}
