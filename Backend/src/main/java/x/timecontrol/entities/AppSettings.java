package x.timecontrol.entities;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

@MappedEntity(value = "app_settings")
public record AppSettings(

        @Id
        Long id,

        TimingProviderType timingProviderType,

        // JSON-encoded Map<String, String> of provider-specific overrides (e.g. device URLs, COM
        // port, baud rate). Kept as a flat string rather than per-provider columns so adding a new
        // provider's config never needs a schema migration.
        @Nullable String timingProviderConfig,

        // Start of the season year as month/day - the boundary SeasonService uses to decide which
        // season a race's date belongs to, and with it which AgeGroup rows apply to that race.
        // Defaults to 1/1 (a season is a calendar year); a club whose season spans the turn of the
        // year can move it to e.g. 1 July so a December and a January race count as one season.
        Integer seasonStartMonth,
        Integer seasonStartDay,

        // Whether the result PDFs - a single race's and the Gaudi-Modus ones - print each
        // participant's race number / birth year (see PdfExportService#personColumns). The start
        // list always has both and is not affected by these switches.
        boolean pdfShowRaceNumber,
        boolean pdfShowBirthYear
) {
}
