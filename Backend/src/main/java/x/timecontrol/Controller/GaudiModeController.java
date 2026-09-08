package x.timecontrol.Controller;

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
        GaudiMode gaudiMode = service.createFromRequest(request);
        Optional<GaudiMode> updated;
        try {
            updated = service.update(id, gaudiMode, request.races());
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
    public HttpResponse<List<GaudiLosPairingResponse>> draw(@PathVariable Long id) {
        Optional<GaudiMode> gaudiModeOpt = service.findById(id);
        if (gaudiModeOpt.isEmpty()) {
            return HttpResponse.notFound();
        }
        GaudiMode gaudiMode = gaudiModeOpt.get();
        if (gaudiMode.type() != GaudiModeType.LOS) {
            return HttpResponse.badRequest();
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
    public HttpResponse<byte[]> exportPdf(@PathVariable Long id) {
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
                case LOS -> pdfExportService.generateLosModeRanking(gaudiMode.name(), ranking, races.get(0));
                case TEAM -> pdfExportService.generateTeamModeRanking(gaudiMode.name(), ranking, races.get(0));
                case TIME_COMBINATION -> pdfExportService.generateTimeCombinationRanking(gaudiMode.name(), ranking, races, races.get(0));
                case POINTS_COMBINATION -> pdfExportService.generatePointsCombinationRanking(gaudiMode.name(), ranking, races, races.get(0));
            };

            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=gaudi_" + gaudiMode.id() + ".pdf");
        } catch (Exception e) {
            return HttpResponse.serverError();
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
