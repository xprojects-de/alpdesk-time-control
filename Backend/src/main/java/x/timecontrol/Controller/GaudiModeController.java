package x.timecontrol.Controller;

import io.micronaut.data.exceptions.DataAccessException;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import io.micronaut.scheduling.TaskExecutors;
import io.micronaut.scheduling.annotation.ExecuteOn;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.inject.Inject;
import x.timecontrol.dto.GaudiDnsEntryResponse;
import x.timecontrol.dto.GaudiLosPairingResponse;
import x.timecontrol.dto.GaudiModeRaceResponse;
import x.timecontrol.dto.GaudiModeRequest;
import x.timecontrol.dto.GaudiModeResponse;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.entities.GaudiLosPairing;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeRace;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Gender;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Race;
import x.timecontrol.services.GaudiCsvExportService;
import x.timecontrol.services.GaudiModeService;
import x.timecontrol.services.ParticipantService;
import x.timecontrol.services.PdfExportService;
import x.timecontrol.services.PersonService;
import x.timecontrol.services.RaceService;

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/gaudi-modes")
@ExecuteOn(TaskExecutors.BLOCKING)
@Tag(name = "Gaudi-Modus")
public class GaudiModeController {

    @Inject
    GaudiModeService service;

    @Inject
    ParticipantService participantService;

    @Inject
    RaceService raceService;

    @Inject
    PdfExportService pdfExportService;

    @Inject
    PersonService personService;

    @Inject
    GaudiCsvExportService gaudiCsvExportService;

    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List Gaudi-Modus instances, optionally filtered by race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of Gaudi-Modus instances", content = @Content(schema = @Schema(implementation = GaudiModeResponse.class)))
    public HttpResponse<List<GaudiModeResponse>> list(@QueryValue Optional<Long> raceId) {
        Iterable<GaudiMode> gaudiModes = raceId.isPresent() ? service.findByRaceId(raceId.get()) : service.findAll();
        List<GaudiModeResponse> response = StreamSupport.stream(gaudiModes.spliterator(), false)
                .map(gm -> GaudiModeResponse.from(gm, buildRaceResponses(gm.id())))
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}")
    @Operation(summary = "Get Gaudi-Modus instance by ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Gaudi-Modus instance found", content = @Content(schema = @Schema(implementation = GaudiModeResponse.class)))
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance not found")
    public HttpResponse<GaudiModeResponse> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(gm -> HttpResponse.ok(GaudiModeResponse.from(gm, buildRaceResponses(gm.id()))))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new Gaudi-Modus instance", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Gaudi-Modus instance created", content = @Content(schema = @Schema(implementation = GaudiModeResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<?> add(@Body GaudiModeRequest request) {
        GaudiMode created;
        try {
            created = service.create(service.createFromRequest(request), request.races());
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
        return HttpResponse.created(GaudiModeResponse.from(created, buildRaceResponses(created.id())));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing Gaudi-Modus instance", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Gaudi-Modus instance updated", content = @Content(schema = @Schema(implementation = GaudiModeResponse.class)))
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<?> update(@PathVariable Long id, @Body GaudiModeRequest request) {
        Optional<GaudiMode> updated;
        try {
            GaudiMode gaudiMode = service.createFromRequest(request);
            updated = service.update(id, gaudiMode, request.races(), Boolean.TRUE.equals(request.removeCoverPage()));
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
        return updated.map(gm -> HttpResponse.ok((Object) GaudiModeResponse.from(gm, buildRaceResponses(gm.id()))))
                .orElse(HttpResponse.notFound());
    }

    @Delete("/{id}")
    @Operation(summary = "Delete a Gaudi-Modus instance", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Gaudi-Modus instance deleted")
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance not found")
    public HttpResponse<Void> delete(@PathVariable Long id) {
        Optional<GaudiMode> gaudiMode = service.findById(id);
        if (gaudiMode.isPresent()) {
            service.delete(id);
            return HttpResponse.noContent();
        }
        return HttpResponse.notFound();
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Post("/{id}/draw")
    @Operation(summary = "(Re-)draw the random pairing of a Los-Modus instance",
            description = "Discards any previously drawn pairing and creates a new random pairing. Only valid for type LOS.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Pairing drawn", content = @Content(schema = @Schema(implementation = GaudiLosPairingResponse.class)))
    @ApiResponse(responseCode = "400", description = "Gaudi-Modus instance is not of type LOS")
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance not found")
    public HttpResponse<?> draw(@PathVariable Long id) {
        Optional<GaudiMode> gaudiModeOpt = service.findById(id);
        if (gaudiModeOpt.isEmpty()) {
            return HttpResponse.notFound();
        }
        GaudiMode gaudiMode = gaudiModeOpt.get();
        if (gaudiMode.type() != GaudiModeType.LOS) {
            return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse("Drawing a pairing is only valid for type LOS"));
        }

        List<GaudiLosPairing> pairing = service.drawLosPairing(gaudiMode);
        return HttpResponse.ok(toPairingResponses(pairing));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}/pairing")
    @Operation(summary = "Get the currently drawn pairing of a Los-Modus instance", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Current pairing", content = @Content(schema = @Schema(implementation = GaudiLosPairingResponse.class)))
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance not found")
    public HttpResponse<List<GaudiLosPairingResponse>> getPairing(@PathVariable Long id) {
        if (service.findById(id).isEmpty()) {
            return HttpResponse.notFound();
        }
        return HttpResponse.ok(toPairingResponses(service.findLosPairing(id)));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}/ranking")
    @Operation(summary = "Get the computed ranking of a Gaudi-Modus instance", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Computed ranking", content = @Content(schema = @Schema(implementation = GaudiRankingEntryResponse.class)))
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance not found")
    @ApiResponse(responseCode = "500", description = "Ranking could not be computed")
    public HttpResponse<?> getRanking(@PathVariable Long id) {
        Optional<GaudiMode> gaudiMode = service.findById(id);
        if (gaudiMode.isEmpty()) {
            return HttpResponse.notFound();
        }
        try {
            return HttpResponse.ok(service.computeRanking(gaudiMode.get()));
        } catch (DataAccessException e) {
            throw e; // let GlobalExceptionHandler produce a consistent, non-leaking response
        } catch (IllegalStateException e) {
            // A refused-by-design state, not a server fault. Same 409-for-IllegalStateException
            // mapping the rest of the controllers use, so the reason reaches the operator as a
            // handled error instead of the GlobalExceptionHandler's generic 500.
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT)
                    .body(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        } catch (Exception e) {
            return HttpResponse.serverError(new x.timecontrol.dto.ErrorResponse("Failed to compute ranking: " + e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}/not-ranked")
    @Operation(summary = "Get the entries excluded from a Gaudi-Modus ranking (\"nicht gewertet\")",
            description = "Persons (Zeit-Kombination / Punkte-Mischwertung) or pairs (Los-Modus) missing a valid result - the same list the PDF export prints below the ranking. Always empty for Mannschaftswertung.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Excluded entries", content = @Content(schema = @Schema(implementation = GaudiDnsEntryResponse.class)))
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance not found")
    @ApiResponse(responseCode = "409", description = "List refused by design (see the message)")
    public HttpResponse<?> getNotRanked(@PathVariable Long id) {
        Optional<GaudiMode> gaudiMode = service.findById(id);
        if (gaudiMode.isEmpty()) {
            return HttpResponse.notFound();
        }
        try {
            return HttpResponse.ok(service.computeDnsEntries(gaudiMode.get()));
        } catch (DataAccessException e) {
            throw e; // let GlobalExceptionHandler produce a consistent, non-leaking response
        } catch (IllegalStateException e) {
            // Same 409-for-IllegalStateException mapping as getRanking and the exports: without it
            // a refused-by-design state reaches the operator as the GlobalExceptionHandler's
            // generic "An unexpected error occurred", with the actual reason dropped.
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT)
                    .body(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
    }

    @Produces("application/pdf")
    @Get("/{id}/export/pdf")
    @Operation(summary = "Export the computed ranking of a Gaudi-Modus instance as PDF", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance or race not found")
    @ApiResponse(responseCode = "409", description = "Ranking refused by design (see the message)")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportPdf(@PathVariable Long id) {
        // Routed through the same scaffold as the type-restricted exports below (every type is
        // allowed here) rather than repeating the race lookup and error handling: the duplicated
        // copy is how this endpoint ended up without their IllegalStateException -> 409 mapping and
        // turned a refused-by-design state into a 500.
        return exportFile(id, EnumSet.allOf(GaudiModeType.class), ".pdf", "PDF", (gaudiMode, races) -> {
            List<GaudiRankingEntryResponse> ranking = service.computeRanking(gaudiMode);
            return switch (gaudiMode.type()) {
                case LOS -> pdfExportService.generateLosModeRanking(gaudiMode, ranking, races.getFirst(),
                        service.computeDnsEntries(gaudiMode));
                case TEAM -> pdfExportService.generateTeamModeRanking(gaudiMode, ranking, races.getFirst());
                case TIME_COMBINATION ->
                        pdfExportService.generateTimeCombinationRanking(gaudiMode, ranking, races, races.getFirst(),
                                service.computeDnsEntries(gaudiMode));
                case POINTS_COMBINATION ->
                        pdfExportService.generatePointsCombinationRanking(gaudiMode, ranking, races, races.getFirst(),
                                service.computeDnsEntries(gaudiMode));
            };
        });
    }

    @Produces("application/pdf")
    @Get("/{id}/export/pdf/gender/{gender}")
    @Operation(summary = "Export a Punkte-Mischwertung ranking filtered by gender as PDF",
            description = "Only valid for type POINTS_COMBINATION.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "400", description = "Gaudi-Modus instance is not of type POINTS_COMBINATION")
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance or race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportPdfByGender(@PathVariable Long id, @PathVariable String gender) {
        return exportFile(id, POINTS_COMBINATION_ONLY, "_" + gender.toLowerCase() + ".pdf", "PDF",
                (gaudiMode, races) -> {
                    Gender filterGender = Gender.valueOf(gender.toUpperCase());
                    List<GaudiRankingEntryResponse> ranking =
                            service.computeRankingForCategory(gaudiMode, filterGender, null);
                    return pdfExportService.generatePointsCombinationGenderRanking(
                            gaudiMode, ranking, races, races.getFirst(), gender,
                            service.computeDnsEntries(gaudiMode, filterGender, null));
                });
    }

    @Produces("application/pdf")
    @Get("/{id}/export/pdf/agegroup/{ageGroup}/gender/{gender}")
    @Operation(summary = "Export a Punkte-Mischwertung ranking filtered by age group and gender as PDF",
            description = "Only valid for type POINTS_COMBINATION.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "400", description = "Gaudi-Modus instance is not of type POINTS_COMBINATION")
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance or race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportPdfByAgeGroupAndGender(@PathVariable Long id, @PathVariable String ageGroup, @PathVariable String gender) {
        return exportFile(id, POINTS_COMBINATION_ONLY, "_" + ageGroup.toLowerCase() + "_" + gender.toLowerCase() + ".pdf", "PDF",
                (gaudiMode, races) -> {
                    Gender filterGender = Gender.valueOf(gender.toUpperCase());
                    List<GaudiRankingEntryResponse> ranking =
                            service.computeRankingForCategory(gaudiMode, filterGender, ageGroup);
                    return pdfExportService.generatePointsCombinationAgeGroupGenderRanking(
                            gaudiMode, ranking, races, races.getFirst(), ageGroup, gender,
                            service.computeDnsEntries(gaudiMode, filterGender, ageGroup));
                });
    }

    @Produces("application/pdf")
    @Get("/{id}/export/pdf/agegroups/all")
    @Operation(summary = "Export a Punkte-Mischwertung ranking split into all age groups and genders as PDF",
            description = "Only valid for type POINTS_COMBINATION.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "400", description = "Gaudi-Modus instance is not of type POINTS_COMBINATION")
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance or race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportPdfAllAgeGroups(@PathVariable Long id) {
        return exportFile(id, POINTS_COMBINATION_ONLY, "_altersklassen.pdf", "PDF",
                (gaudiMode, races) -> pdfExportService.generatePointsCombinationAllAgeGroupsRanking(
                        gaudiMode, races, races.getFirst(),
                        (gender, ageGroupName) -> service.computeRankingForCategory(gaudiMode, gender, ageGroupName),
                        service.computeDnsEntries(gaudiMode)));
    }

    @Produces("text/csv")
    @Get("/{id}/export/csv")
    @Operation(summary = "Export the ranking of a Zeit-Kombination / Punkte-Mischwertung as CSV",
            description = "One row per ranked person in ranking order: Platz, Name, Vorname, Team, Altersklasse, Externe ID, Wert " +
                    "(total time or total points). ';'-delimited, UTF-8. Only valid for types TIME_COMBINATION and POINTS_COMBINATION.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "CSV generated successfully")
    @ApiResponse(responseCode = "400", description = "Gaudi-Modus instance is not of type TIME_COMBINATION or POINTS_COMBINATION")
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance or race not found")
    @ApiResponse(responseCode = "500", description = "CSV generation failed")
    public HttpResponse<?> exportCsv(@PathVariable Long id) {
        return exportFile(id, COMBINATION_TYPES, ".csv", "CSV",
                (gaudiMode, races) -> gaudiCsvExportService.generateRanking(
                        gaudiMode.type(), service.computeRanking(gaudiMode), races.getFirst()));
    }

    @Produces("text/csv")
    @Get("/{id}/export/csv/gender/{gender}")
    @Operation(summary = "Export a Punkte-Mischwertung ranking filtered by gender as CSV",
            description = "Same columns as /export/csv. Only valid for type POINTS_COMBINATION.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "CSV generated successfully")
    @ApiResponse(responseCode = "400", description = "Gaudi-Modus instance is not of type POINTS_COMBINATION")
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance or race not found")
    @ApiResponse(responseCode = "500", description = "CSV generation failed")
    public HttpResponse<?> exportCsvByGender(@PathVariable Long id, @PathVariable String gender) {
        return exportFile(id, POINTS_COMBINATION_ONLY, "_" + gender.toLowerCase() + ".csv", "CSV",
                (gaudiMode, races) -> gaudiCsvExportService.generateRanking(gaudiMode.type(),
                        service.computeRankingForCategory(gaudiMode, Gender.valueOf(gender.toUpperCase()), null),
                        races.getFirst()));
    }

    @Produces("text/csv")
    @Get("/{id}/export/csv/agegroup/{ageGroup}/gender/{gender}")
    @Operation(summary = "Export a Punkte-Mischwertung ranking filtered by age group and gender as CSV",
            description = "Same columns as /export/csv. Only valid for type POINTS_COMBINATION.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "CSV generated successfully")
    @ApiResponse(responseCode = "400", description = "Gaudi-Modus instance is not of type POINTS_COMBINATION")
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance or race not found")
    @ApiResponse(responseCode = "500", description = "CSV generation failed")
    public HttpResponse<?> exportCsvByAgeGroupAndGender(@PathVariable Long id, @PathVariable String ageGroup, @PathVariable String gender) {
        return exportFile(id, POINTS_COMBINATION_ONLY, "_" + ageGroup.toLowerCase() + "_" + gender.toLowerCase() + ".csv", "CSV",
                (gaudiMode, races) -> gaudiCsvExportService.generateRanking(gaudiMode.type(),
                        service.computeRankingForCategory(gaudiMode, Gender.valueOf(gender.toUpperCase()), ageGroup),
                        races.getFirst()));
    }

    @Produces("application/zip")
    @Get("/{id}/export/csv/agegroups/all")
    @Operation(summary = "Export a Punkte-Mischwertung ranking split into all age groups and genders as a ZIP of CSV files",
            description = "One CSV (same columns as /export/csv) per non-empty age group x gender. Only valid for type POINTS_COMBINATION.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "ZIP generated successfully")
    @ApiResponse(responseCode = "400", description = "Gaudi-Modus instance is not of type POINTS_COMBINATION")
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance or race not found")
    @ApiResponse(responseCode = "500", description = "ZIP generation failed")
    public HttpResponse<?> exportCsvAllAgeGroups(@PathVariable Long id) {
        return exportFile(id, POINTS_COMBINATION_ONLY, "_altersklassen.zip", "CSV",
                (gaudiMode, races) -> gaudiCsvExportService.generateAllAgeGroupsZip(gaudiMode.type(), races.getFirst(),
                        (g, ageGroupName) -> service.computeRankingForCategory(gaudiMode, g, ageGroupName)));
    }

    private static final Set<GaudiModeType> POINTS_COMBINATION_ONLY = EnumSet.of(GaudiModeType.POINTS_COMBINATION);
    private static final Set<GaudiModeType> COMBINATION_TYPES =
            EnumSet.of(GaudiModeType.TIME_COMBINATION, GaudiModeType.POINTS_COMBINATION);

    @FunctionalInterface
    private interface ExportBody {
        byte[] generate(GaudiMode gaudiMode, List<Race> races) throws Exception;
    }

    /**
     * Shared race-lookup + type-check + generate + error-handling scaffold for the
     * type-restricted PDF/CSV export endpoints above, mirroring {@code exportPdf} in
     * {@code ParticipantController}. {@code filenameSuffix} is appended to "gaudi_&lt;id&gt;".
     */
    private HttpResponse<?> exportFile(Long id, Set<GaudiModeType> allowedTypes, String filenameSuffix,
                                       String formatLabel, ExportBody body) {
        Optional<GaudiMode> gaudiModeOpt = service.findById(id);
        if (gaudiModeOpt.isEmpty()) {
            return HttpResponse.notFound();
        }
        GaudiMode gaudiMode = gaudiModeOpt.get();
        if (!allowedTypes.contains(gaudiMode.type())) {
            return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse(
                    "This export is only available for Gaudi-Modus instances of type " +
                            allowedTypes.stream().map(Enum::name).collect(Collectors.joining(" or "))))
                    .contentType(MediaType.APPLICATION_JSON);
        }

        List<Race> races = service.findRacesFor(gaudiMode.id()).stream()
                .map(gmr -> raceService.findById(gmr.raceId()))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .toList();
        if (races.isEmpty()) {
            return HttpResponse.notFound();
        }

        try {
            byte[] bytes = body.generate(gaudiMode, races);
            return HttpResponse.ok(bytes)
                    .header("Content-Disposition", "attachment; filename=gaudi_" + gaudiMode.id() + filenameSuffix);
        } catch (DataAccessException e) {
            throw e; // let GlobalExceptionHandler produce a consistent, non-leaking response
        } catch (IllegalStateException e) {
            // See getRanking: a refused-by-design state is a 409 with its reason, not a 500.
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT)
                    .body(new x.timecontrol.dto.ErrorResponse(e.getMessage()))
                    .contentType(MediaType.APPLICATION_JSON);
        } catch (Exception e) {
            String reason = e.getMessage() != null ? e.getMessage() : e.getClass().getSimpleName();
            return HttpResponse.serverError(new x.timecontrol.dto.ErrorResponse("Failed to generate " + formatLabel + ": " + reason))
                    .contentType(MediaType.APPLICATION_JSON);
        }
    }

    private List<GaudiModeRaceResponse> buildRaceResponses(Long gaudiModeId) {
        List<GaudiModeRaceResponse> result = new ArrayList<>();
        for (GaudiModeRace gmr : service.findRacesFor(gaudiModeId)) {
            String raceName = raceService.findById(gmr.raceId()).map(Race::name).orElse("Unbekannt");
            result.add(new GaudiModeRaceResponse(gmr.raceId(), raceName, gmr.weight(), gmr.sortOrder()));
        }
        return result;
    }

    private List<GaudiLosPairingResponse> toPairingResponses(List<GaudiLosPairing> pairing) {
        return pairing.stream()
                .map(p -> {
                    Optional<Participant> p1 = participantService.findById(p.participant1Id());
                    Optional<Participant> p2 = p.participant2Id() != null
                            ? participantService.findById(p.participant2Id())
                            : Optional.empty();

                    return new GaudiLosPairingResponse(
                            p.id(),
                            p.participant1Id(),
                            formatName(p1).orElse("Unbekannt"),
                            p.participant2Id(),
                            formatName(p2).orElse(null)
                    );
                })
                .toList();
    }

    private Optional<String> formatName(Optional<Participant> participant) {
        return participant
                .flatMap(p -> personService.findById(p.personId()))
                .map(personService::displayName);
    }
}
