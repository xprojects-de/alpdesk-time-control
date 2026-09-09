package x.timecontrol.Controller;

import x.timecontrol.dto.ErrorResponse;
import x.timecontrol.dto.ParticipantCopyRequest;
import x.timecontrol.dto.ParticipantCopyResponse;
import x.timecontrol.dto.ParticipantImportResponse;
import x.timecontrol.dto.ParticipantRequest;
import x.timecontrol.dto.ParticipantResponse;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Race;
import x.timecontrol.services.ParticipantService;
import x.timecontrol.services.PdfExportService;
import x.timecontrol.services.RaceService;
import io.micronaut.data.exceptions.DataAccessException;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import io.micronaut.http.multipart.CompletedFileUpload;
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

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/participants")
@ExecuteOn(TaskExecutors.BLOCKING)
@Tag(name = "Participant")
public class ParticipantController {

    @Inject
    ParticipantService service;

    @Inject
    PdfExportService pdfExportService;

    @Inject
    RaceService raceService;

    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List all participants", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of all participants", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    public HttpResponse<List<ParticipantResponse>> list(@QueryValue Optional<Long> raceId) {
        Iterable<Participant> participants;
        if (raceId.isPresent()) {
            participants = service.findByRaceId(raceId.get());
        } else {
            participants = service.findAll();
        }

        List<Participant> participantList = StreamSupport.stream(participants.spliterator(), false).toList();
        return HttpResponse.ok(service.toResponses(participantList));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}")
    @Operation(summary = "Get participant by ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Participant found", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    @ApiResponse(responseCode = "404", description = "Participant not found")
    public HttpResponse<ParticipantResponse> getById(@PathVariable Long id) {
        Optional<Participant> participant = service.findById(id);
        return participant.map(p -> HttpResponse.ok(service.toResponses(List.of(p)).get(0)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new participant", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Participant created", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "Race number already assigned in this race")
    public HttpResponse<?> add(@Body ParticipantRequest request) {
        Participant participant = new Participant(null, request.raceId(), request.personId(), request.raceNumber(), request.teamId(), request.categoryId(), request.durationMs(), request.penalty(), request.measuredAt());
        Participant created;
        try {
            created = service.create(participant);
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse(e.getMessage()));
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
        }
        return HttpResponse.created(service.toResponses(List.of(created)).get(0));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing participant", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Participant updated", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    @ApiResponse(responseCode = "404", description = "Participant not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "Race number already assigned in this race")
    public HttpResponse<?> update(@PathVariable Long id, @Body ParticipantRequest request) {
        Participant participant = new Participant(null, request.raceId(), request.personId(), request.raceNumber(), request.teamId(), request.categoryId(), request.durationMs(), request.penalty(), request.measuredAt());
        Optional<Participant> updated;
        try {
            updated = service.update(id, participant);
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse(e.getMessage()));
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
        }
        return updated.map(p -> HttpResponse.ok((Object) service.toResponses(List.of(p)).get(0)))
                .orElse(HttpResponse.notFound());
    }

    @Delete("/{id}")
    @Operation(summary = "Delete a participant", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Participant deleted")
    @ApiResponse(responseCode = "404", description = "Participant not found")
    public HttpResponse<Void> delete(@PathVariable Long id) {
        Optional<Participant> participant = service.findById(id);
        if (participant.isPresent()) {
            service.delete(id);
            return HttpResponse.noContent();
        }
        return HttpResponse.notFound();
    }

    @Delete("/race/{raceId}")
    @Operation(summary = "Delete all participants of a race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "All participants of the race deleted")
    public HttpResponse<Void> deleteByRaceId(@PathVariable Long raceId) {
        service.deleteByRaceId(raceId);
        return HttpResponse.noContent();
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post("/copy")
    @Operation(summary = "Copy participants into other races",
            description = "Copies every participant of the source race into each target race (personId/teamId/categoryId carried over, durationMs/penalty/measuredAt left empty; raceNumber carried over only if carryStartNumber is true and not already taken in the target race). A person already present in a target race is skipped rather than duplicated.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Participants copied", content = @Content(schema = @Schema(implementation = ParticipantCopyResponse.class)))
    @ApiResponse(responseCode = "400", description = "Source or target race does not exist")
    public HttpResponse<?> copyParticipants(@Body ParticipantCopyRequest request) {
        try {
            return HttpResponse.ok(service.copyParticipants(request.sourceRaceId(), request.targetRaceIds(), request.carryStartNumber()));
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse(e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Post("/race/{raceId}/assign-race-numbers")
    @Operation(summary = "Randomly assign race numbers for a race",
            description = "Assigns race numbers 1..n to all participants of a race, randomized within each age group; participants without a matching age group are assigned last, ordered by ascending age",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Race numbers assigned", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<?> assignRaceNumbers(@PathVariable Long raceId) {
        if (raceService.findById(raceId).isEmpty()) {
            return HttpResponse.notFound();
        }
        List<Participant> updated = service.assignRaceNumbers(raceId);
        return HttpResponse.ok(service.toResponses(updated));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Post("/import/{raceId}")
    @Operation(summary = "Import participants from CSV for a race",
            description = "Imports participants from a CSV file with columns Lastname,Firstname,Birthdate,Team,Gender and " +
                    "an optional 6th ExternalId column. The header row is ignored. Teams are looked up case-insensitively " +
                    "and created (uppercased) if they don't exist yet. Rows with a missing/invalid gender (only MALE or " +
                    "FEMALE are accepted) or an invalid birthdate (expected yyyy-MM-dd) are skipped and reported in the " +
                    "response. ExternalId is fully optional (omit the column entirely, or leave it empty); when given, " +
                    "it is used to find-or-create the matching Person so the same person can be re-imported for a later " +
                    "race/season without creating a duplicate.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Import finished", content = @Content(schema = @Schema(implementation = ParticipantImportResponse.class)))
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "Import failed")
    public HttpResponse<?> importCsv(@PathVariable Long raceId, @Part("file") CompletedFileUpload file) {
        Optional<Race> race = raceService.findById(raceId);
        if (race.isEmpty()) {
            return HttpResponse.notFound();
        }

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream(), StandardCharsets.UTF_8))) {
            ParticipantService.ParticipantImportResult result = service.importFromCsv(raceId, reader);

            List<ParticipantResponse> imported = service.toResponses(result.imported());

            return HttpResponse.ok(new ParticipantImportResponse(imported.size(), result.errors().size(), imported, result.errors()));
        } catch (IOException e) {
            return HttpResponse.serverError(new ErrorResponse("Failed to read the uploaded file: " + e.getMessage()));
        }
    }

    @Produces("application/pdf")
    @Get("/export/pdf/startlist/{raceId}")
    @Operation(summary = "Export start list as PDF",
            description = "Generates a PDF start list sorted by race number for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportStartListToPdf(@PathVariable Long raceId) {
        return exportPdf(raceId, "startliste.pdf", pdfExportService::generateStartList);
    }

    @Produces("application/pdf")
    @Get("/export/pdf/all/{raceId}")
    @Operation(summary = "Export all participants as PDF",
            description = "Generates a PDF with all participants sorted by time (fastest to slowest) for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportAllToPdf(@PathVariable Long raceId) {
        return exportPdf(raceId, "gesamtwertung.pdf", pdfExportService::generateOverallRanking);
    }

    @Produces("application/pdf")
    @Get("/export/pdf/gender/{gender}/{raceId}")
    @Operation(summary = "Export participants by gender as PDF",
            description = "Generates a PDF with participants filtered by gender, sorted by time for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportByGenderToPdf(@PathVariable String gender, @PathVariable Long raceId) {
        return exportPdf(raceId, "wertung_" + gender.toLowerCase() + ".pdf",
                (participants, race) -> pdfExportService.generateGenderRanking(participants, gender, race));
    }

    @Produces("application/pdf")
    @Get("/export/pdf/agegroup/{ageGroup}/gender/{gender}/{raceId}")
    @Operation(summary = "Export participants by age group and gender as PDF",
            description = "Generates a PDF with participants filtered by age group and gender, sorted by time for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportByAgeGroupAndGenderToPdf(@PathVariable String ageGroup, @PathVariable String gender, @PathVariable Long raceId) {
        return exportPdf(raceId, "wertung_" + ageGroup.toLowerCase() + "_" + gender.toLowerCase() + ".pdf",
                (participants, race) -> pdfExportService.generateAgeGroupGenderRanking(participants, ageGroup, gender, race));
    }

    @Produces("application/pdf")
    @Get("/export/pdf/agegroups/all/{raceId}")
    @Operation(summary = "Export all age groups separated by gender as PDF",
            description = "Generates a PDF with all age groups, each split by gender (male/female), starting from youngest for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportAllAgeGroupsToPdf(@PathVariable Long raceId) {
        return exportPdf(raceId, "wertung_altersklassen.pdf", pdfExportService::generateAllAgeGroupsRanking);
    }

    @Produces("application/pdf")
    @Get("/export/pdf/all/categories/{raceId}")
    @Operation(summary = "Export overall ranking split by category as PDF",
            description = "Generates a PDF with all participants sorted by time, split into one section per category",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportAllByCategoryToPdf(@PathVariable Long raceId) {
        return exportPdf(raceId, "gesamtwertung_kategorien.pdf", pdfExportService::generateOverallByCategoryRanking);
    }

    @Produces("application/pdf")
    @Get("/export/pdf/gender/{gender}/categories/{raceId}")
    @Operation(summary = "Export participants by gender split by category as PDF",
            description = "Generates a PDF with participants filtered by gender, split into one section per category",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportByGenderByCategoryToPdf(@PathVariable String gender, @PathVariable Long raceId) {
        return exportPdf(raceId, "wertung_" + gender.toLowerCase() + "_kategorien.pdf",
                (participants, race) -> pdfExportService.generateGenderByCategoryRanking(participants, gender, race));
    }

    @Produces("application/pdf")
    @Get("/export/pdf/agegroups/all/categories/{raceId}")
    @Operation(summary = "Export all age groups split by gender and category as PDF",
            description = "Generates a PDF with all age groups, each split by gender and then by category",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportAllAgeGroupsByCategoryToPdf(@PathVariable Long raceId) {
        return exportPdf(raceId, "wertung_altersklassen_kategorien.pdf", pdfExportService::generateAllAgeGroupsByCategoryRanking);
    }

    @Produces("application/pdf")
    @Get("/export/pdf/category/{categoryId}/{raceId}")
    @Operation(summary = "Export participants by category as PDF",
            description = "Generates a PDF with participants filtered by category, sorted by time for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportByCategoryToPdf(@PathVariable Long categoryId, @PathVariable Long raceId) {
        return exportPdf(raceId, "wertung_kategorie_" + categoryId + ".pdf",
                (participants, race) -> pdfExportService.generateCategoryRanking(participants, categoryId, race));
    }

    @FunctionalInterface
    private interface PdfBody {
        byte[] generate(Iterable<Participant> participants, Race race) throws Exception;
    }

    /**
     * Shared race-lookup + generate + error-handling scaffold for all PDF export endpoints above
     * (previously duplicated ~9 times). On failure, the response's content type is explicitly
     * overridden to JSON - the method-level {@code @Produces("application/pdf")} would otherwise
     * force that header onto the error body too, mislabeling an ErrorResponse as a broken PDF.
     */
    private HttpResponse<?> exportPdf(Long raceId, String filename, PdfBody body) {
        Optional<Race> race = raceService.findById(raceId);
        if (race.isEmpty()) {
            return HttpResponse.notFound();
        }
        try {
            Iterable<Participant> participants = service.findByRaceId(raceId);
            byte[] pdfBytes = body.generate(participants, race.get());
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=" + filename);
        } catch (DataAccessException e) {
            throw e; // let GlobalExceptionHandler produce a consistent, non-leaking response
        } catch (Exception e) {
            String reason = e.getMessage() != null ? e.getMessage() : e.getClass().getSimpleName();
            return HttpResponse.serverError(new ErrorResponse("Failed to generate PDF: " + reason))
                    .contentType(MediaType.APPLICATION_JSON);
        }
    }

}