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
        // ParticipantService#applyStartOrderFromPreviousRace.
        @Nullable Long previousRaceId,
        @Nullable StartOrderMode startOrderMode,
        @Nullable Integer startOrderReverseTopCount,

        // Opaque, unguessable identifier for this race's public live-results URLs
        // (RaceLiveController) - deliberately unrelated to `id` so those URLs can't be walked by
        // incrementing/guessing a number. Always set by RaceService before a race is first saved.
        String liveToken
) {
    /**
     * Legacy 19-arg constructor predating liveToken, kept so the many call sites (mostly tests)
     * that build a Race without caring about the live-results token don't all need touching:
     * defaults it to null. {@link x.timecontrol.services.RaceService#create} rejects a null
     * liveToken before ever persisting a race, so this is only safe for in-memory-only use (e.g.
     * ranking/PDF tests), never for a Race that gets saved.
     */
    public Race(Long id, String name, LocalDate date, @Nullable String organisation, @Nullable String referee,
                @Nullable String raceDirector, @Nullable String timeControl, @Nullable String routeName,
                @Nullable String elevationDifference, @Nullable String routeLength, @Nullable String courseSetter,
                @Nullable String weather, ResultUnit resultUnit, @Nullable String resultUnitLabel,
                SortDirection sortDirection, @Nullable byte[] coverPagePdf, @Nullable Long previousRaceId,
                @Nullable StartOrderMode startOrderMode, @Nullable Integer startOrderReverseTopCount) {
        this(id, name, date, organisation, referee, raceDirector, timeControl, routeName, elevationDifference,
                routeLength, courseSetter, weather, resultUnit, resultUnitLabel, sortDirection, coverPagePdf,
                previousRaceId, startOrderMode, startOrderReverseTopCount, null);
    }
}
