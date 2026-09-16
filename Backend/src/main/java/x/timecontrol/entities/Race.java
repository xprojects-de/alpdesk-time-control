package x.timecontrol.entities;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

import java.time.LocalDate;

@MappedEntity(value = "race")
public record Race(

        @Id
        @GeneratedValue
        Long id,

        String name,
        LocalDate date,

        @Nullable String organisation,
        @Nullable String referee,
        @Nullable String raceDirector,
        @Nullable String timeControl,
        @Nullable String routeName,
        @Nullable String elevationDifference,
        @Nullable String routeLength,
        @Nullable String courseSetter,
        @Nullable String weather,

        ResultUnit resultUnit,
        @Nullable String resultUnitLabel,
        SortDirection sortDirection,

        // Optional cover page prepended to every ranking/results PDF generated for this race (not
        // the start list) - see PdfExportService.renderDocument/generateStartList.
        @Nullable byte[] coverPagePdf,

        // Race this one derives its start order from (e.g. slalom run 2 <- run 1) - see
        // ParticipantService#assignRaceNumbersFromPreviousRace.
        @Nullable Long previousRaceId,
        @Nullable StartOrderMode startOrderMode,
        @Nullable Integer startOrderReverseTopCount
) {
}
