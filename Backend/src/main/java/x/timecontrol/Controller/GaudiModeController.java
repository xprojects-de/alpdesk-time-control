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
import x.timecontrol.services.GaudiModeService;
import x.timecontrol.services.ParticipantService;
import x.timecontrol.services.PdfExportService;
import x.timecontrol.services.PersonService;
import x.timecontrol.services.RaceService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
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
        } catch (Exception e) {
            return HttpResponse.serverError(new x.timecontrol.dto.ErrorResponse("Failed to compute ranking: " + e.getMessage()));
        }
    }

    @Produces("application/pdf")
    @Get("/{id}/export/pdf")
    @Operation(summary = "Export the computed ranking of a Gaudi-Modus instance as PDF", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Gaudi-Modus instance or race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportPdf(@PathVariable Long id) {
        Optional<GaudiMode> gaudiModeOpt = service.findById(id);
        if (gaudiModeOpt.isEmpty()) {
            return HttpResponse.notFound();
        }
        GaudiMode gaudiMode = gaudiModeOpt.get();

        List<Race> races = service.findRacesFor(gaudiMode.id()).stream()
                .map(gmr -> raceService.findById(gmr.raceId()))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .toList();
        if (races.isEmpty()) {
            return HttpResponse.notFound();
        }

        try {
            List<GaudiRankingEntryResponse> ranking = service.computeRanking(gaudiMode);
            byte[] pdfBytes = switch (gaudiMode.type()) {
                case LOS -> pdfExportService.generateLosModeRanking(gaudiMode, ranking, races.getFirst());
                case TEAM -> pdfExportService.generateTeamModeRanking(gaudiMode, ranking, races.getFirst());
                case TIME_COMBINATION ->
                        pdfExportService.generateTimeCombinationRanking(gaudiMode, ranking, races, races.getFirst(),
                                service.computeDnsEntries(gaudiMode));
                case POINTS_COMBINATION ->
                        pdfExportService.generatePointsCombinationRanking(gaudiMode, ranking, races, races.getFirst(),
                                service.computeDnsEntries(gaudiMode));
            };

            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=gaudi_" + gaudiMode.id() + ".pdf");
        } catch (DataAccessException e) {
            throw e; // let GlobalExceptionHandler produce a consistent, non-leaking response
        } catch (Exception e) {
            // The method-level @Produces forces "application/pdf" on a plain HttpResponse.serverError();
            // overriding the content type here is what makes the JSON ErrorResponse body actually readable
            // as JSON instead of being mislabeled as a (broken) PDF download.
            String reason = e.getMessage() != null ? e.getMessage() : e.getClass().getSimpleName();
            return HttpResponse.serverError(new x.timecontrol.dto.ErrorResponse("Failed to generate PDF: " + reason))
                    .contentType(MediaType.APPLICATION_JSON);
        }
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
        return exportPointsCombinationPdf(id, gender.toLowerCase() + ".pdf",
                (gaudiMode, races) -> {
                    List<GaudiRankingEntryResponse> ranking =
                            service.computeRankingForCategory(gaudiMode, Gender.valueOf(gender.toUpperCase()), null);
                    return pdfExportService.generatePointsCombinationGenderRanking(
                            gaudiMode, ranking, races, races.getFirst(), gender, service.computeDnsEntries(gaudiMode));
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
        return exportPointsCombinationPdf(id, ageGroup.toLowerCase() + "_" + gender.toLowerCase() + ".pdf",
                (gaudiMode, races) -> {
                    List<GaudiRankingEntryResponse> ranking =
                            service.computeRankingForCategory(gaudiMode, Gender.valueOf(gender.toUpperCase()), ageGroup);
                    return pdfExportService.generatePointsCombinationAgeGroupGenderRanking(
                            gaudiMode, ranking, races, races.getFirst(), ageGroup, gender, service.computeDnsEntries(gaudiMode));
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
        return exportPointsCombinationPdf(id, "altersklassen.pdf",
                (gaudiMode, races) -> pdfExportService.generatePointsCombinationAllAgeGroupsRanking(
                        gaudiMode, races, races.getFirst(),
                        (gender, ageGroupName) -> service.computeRankingForCategory(gaudiMode, gender, ageGroupName),
                        service.computeDnsEntries(gaudiMode)));
    }

    @FunctionalInterface
    private interface PointsCombinationPdfBody {
        byte[] generate(GaudiMode gaudiMode, List<Race> races) throws Exception;
    }

    /**
     * Shared race-lookup + type-check + generate + error-handling scaffold for the Punkte-Mischwertung
     * gender/age-group PDF export endpoints above, mirroring {@code exportPdf} in
     * {@code ParticipantController}.
     */
    private HttpResponse<?> exportPointsCombinationPdf(Long id, String filenameSuffix, PointsCombinationPdfBody body) {
        Optional<GaudiMode> gaudiModeOpt = service.findById(id);
        if (gaudiModeOpt.isEmpty()) {
            return HttpResponse.notFound();
        }
        GaudiMode gaudiMode = gaudiModeOpt.get();
        if (gaudiMode.type() != GaudiModeType.POINTS_COMBINATION) {
            return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse(
                    "This export is only available for Gaudi-Modus instances of type POINTS_COMBINATION"));
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
            byte[] pdfBytes = body.generate(gaudiMode, races);
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=gaudi_" + gaudiMode.id() + "_" + filenameSuffix);
        } catch (DataAccessException e) {
            throw e; // let GlobalExceptionHandler produce a consistent, non-leaking response
        } catch (Exception e) {
            String reason = e.getMessage() != null ? e.getMessage() : e.getClass().getSimpleName();
            return HttpResponse.serverError(new x.timecontrol.dto.ErrorResponse("Failed to generate PDF: " + reason))
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
