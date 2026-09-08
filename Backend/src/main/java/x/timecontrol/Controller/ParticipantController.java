package x.timecontrol.Controller;

import x.timecontrol.dto.ParticipantImportResponse;
import x.timecontrol.dto.ParticipantRequest;
import x.timecontrol.dto.ParticipantResponse;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Race;
import x.timecontrol.services.ParticipantService;
import x.timecontrol.services.PdfExportService;
import x.timecontrol.services.RaceService;
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
        
        List<ParticipantResponse> response = StreamSupport.stream(participants.spliterator(), false)
                .map(participant -> {
                    var race = service.findRaceForParticipant(participant).orElse(null);
                    var person = service.findPersonForParticipant(participant).orElse(null);
                    var team = service.findTeamForParticipant(participant).orElse(null);
                    var category = service.findCategoryForParticipant(participant).orElse(null);
                    var ageGroup = service.findAgeGroupForParticipant(participant).orElse(null);
                    return ParticipantResponse.from(participant, person, race, team, category, ageGroup);
                })
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}")
    @Operation(summary = "Get participant by ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Participant found", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    @ApiResponse(responseCode = "404", description = "Participant not found")
    public HttpResponse<ParticipantResponse> getById(@PathVariable Long id) {
        Optional<Participant> participant = service.findById(id);
        return participant.map(p -> {
            var race = service.findRaceForParticipant(p).orElse(null);
            var person = service.findPersonForParticipant(p).orElse(null);
            var team = service.findTeamForParticipant(p).orElse(null);
            var category = service.findCategoryForParticipant(p).orElse(null);
            var ageGroup = service.findAgeGroupForParticipant(p).orElse(null);
            return HttpResponse.ok(ParticipantResponse.from(p, person, race, team, category, ageGroup));
        }).orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new participant", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Participant created", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<ParticipantResponse> add(@Body ParticipantRequest request) {
        Participant participant = new Participant(null, request.raceId(), request.personId(), request.raceNumber(), request.teamId(), request.categoryId(), request.durationMs(), request.measuredAt());
        Participant created = service.create(participant);
        var race = service.findRaceForParticipant(created).orElse(null);
        var person = service.findPersonForParticipant(created).orElse(null);
        var team = service.findTeamForParticipant(created).orElse(null);
        var category = service.findCategoryForParticipant(created).orElse(null);
        var ageGroup = service.findAgeGroupForParticipant(created).orElse(null);
        return HttpResponse.created(ParticipantResponse.from(created, person, race, team, category, ageGroup));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing participant", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Participant updated", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    @ApiResponse(responseCode = "404", description = "Participant not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<ParticipantResponse> update(@PathVariable Long id, @Body ParticipantRequest request) {
        Participant participant = new Participant(null, request.raceId(), request.personId(), request.raceNumber(), request.teamId(), request.categoryId(), request.durationMs(), request.measuredAt());
        Optional<Participant> updated = service.update(id, participant);
        return updated.map(p -> {
            var race = service.findRaceForParticipant(p).orElse(null);
            var person = service.findPersonForParticipant(p).orElse(null);
            var team = service.findTeamForParticipant(p).orElse(null);
            var category = service.findCategoryForParticipant(p).orElse(null);
            var ageGroup = service.findAgeGroupForParticipant(p).orElse(null);
            return HttpResponse.ok(ParticipantResponse.from(p, person, race, team, category, ageGroup));
        }).orElse(HttpResponse.notFound());
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
    @Post("/race/{raceId}/assign-race-numbers")
    @Operation(summary = "Randomly assign race numbers for a race",
            description = "Assigns race numbers 1..n to all participants of a race, randomized within each age group; participants without a matching age group are assigned last, ordered by ascending age",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Race numbers assigned", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    public HttpResponse<List<ParticipantResponse>> assignRaceNumbers(@PathVariable Long raceId) {
        List<Participant> updated = service.assignRaceNumbers(raceId);
        List<ParticipantResponse> response = updated.stream()
                .map(p -> {
                    var race = service.findRaceForParticipant(p).orElse(null);
                    var person = service.findPersonForParticipant(p).orElse(null);
                    var team = service.findTeamForParticipant(p).orElse(null);
                    var category = service.findCategoryForParticipant(p).orElse(null);
                    var ageGroup = service.findAgeGroupForParticipant(p).orElse(null);
                    return ParticipantResponse.from(p, person, race, team, category, ageGroup);
                })
                .toList();
        return HttpResponse.ok(response);
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
    public HttpResponse<ParticipantImportResponse> importCsv(@PathVariable Long raceId, @Part("file") CompletedFileUpload file) {
        Optional<Race> race = raceService.findById(raceId);
        if (race.isEmpty()) {
            return HttpResponse.notFound();
        }

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream(), StandardCharsets.UTF_8))) {
            ParticipantService.ParticipantImportResult result = service.importFromCsv(raceId, reader);

            List<ParticipantResponse> imported = result.imported().stream()
                    .map(p -> {
                        var r = service.findRaceForParticipant(p).orElse(null);
                        var person = service.findPersonForParticipant(p).orElse(null);
                        var team = service.findTeamForParticipant(p).orElse(null);
                        var category = service.findCategoryForParticipant(p).orElse(null);
                        var ageGroup = service.findAgeGroupForParticipant(p).orElse(null);
                        return ParticipantResponse.from(p, person, r, team, category, ageGroup);
                    })
                    .toList();

            return HttpResponse.ok(new ParticipantImportResponse(imported.size(), result.errors().size(), imported, result.errors()));
        } catch (IOException e) {
            return HttpResponse.serverError();
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
    public HttpResponse<byte[]> exportStartListToPdf(@PathVariable Long raceId) {
        try {
            Optional<Race> race = raceService.findById(raceId);
            if (race.isEmpty()) {
                return HttpResponse.notFound();
            }

            Iterable<Participant> participants = service.findByRaceId(raceId);

            byte[] pdfBytes = pdfExportService.generateStartList(participants, race.get());
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=startliste.pdf");
        } catch (IllegalArgumentException e) {
            return HttpResponse.serverError().body(e.getMessage().getBytes());
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Produces("application/pdf")
    @Get("/export/pdf/all/{raceId}")
    @Operation(summary = "Export all participants as PDF",
            description = "Generates a PDF with all participants sorted by time (fastest to slowest) for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<byte[]> exportAllToPdf(@PathVariable Long raceId) {
        try {
            Optional<Race> race = raceService.findById(raceId);
            if (race.isEmpty()) {
                return HttpResponse.notFound();
            }

            Iterable<Participant> participants = service.findByRaceId(raceId);

            byte[] pdfBytes = pdfExportService.generateOverallRanking(participants, race.get());
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=gesamtwertung.pdf");
        } catch (IllegalArgumentException e) {
            return HttpResponse.serverError().body(e.getMessage().getBytes());
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Produces("application/pdf")
    @Get("/export/pdf/gender/{gender}/{raceId}")
    @Operation(summary = "Export participants by gender as PDF",
            description = "Generates a PDF with participants filtered by gender, sorted by time for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<byte[]> exportByGenderToPdf(@PathVariable String gender, @PathVariable Long raceId) {
        try {
            Optional<Race> race = raceService.findById(raceId);
            if (race.isEmpty()) {
                return HttpResponse.notFound();
            }

            Iterable<Participant> participants = service.findByRaceId(raceId);

            byte[] pdfBytes = pdfExportService.generateGenderRanking(participants, gender, race.get());
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=wertung_" + gender.toLowerCase() + ".pdf");
        } catch (IllegalArgumentException e) {
            return HttpResponse.serverError().body(e.getMessage().getBytes());
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Produces("application/pdf")
    @Get("/export/pdf/agegroup/{ageGroup}/gender/{gender}/{raceId}")
    @Operation(summary = "Export participants by age group and gender as PDF",
            description = "Generates a PDF with participants filtered by age group and gender, sorted by time for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<byte[]> exportByAgeGroupAndGenderToPdf(@PathVariable String ageGroup, @PathVariable String gender, @PathVariable Long raceId) {
        try {
            Optional<Race> race = raceService.findById(raceId);
            if (race.isEmpty()) {
                return HttpResponse.notFound();
            }

            Iterable<Participant> participants = service.findByRaceId(raceId);

            byte[] pdfBytes = pdfExportService.generateAgeGroupGenderRanking(participants, ageGroup, gender, race.get());
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=wertung_" + ageGroup.toLowerCase() + "_" + gender.toLowerCase() + ".pdf");
        } catch (IllegalArgumentException e) {
            return HttpResponse.serverError().body(e.getMessage().getBytes());
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Produces("application/pdf")
    @Get("/export/pdf/agegroups/all/{raceId}")
    @Operation(summary = "Export all age groups separated by gender as PDF",
            description = "Generates a PDF with all age groups, each split by gender (male/female), starting from youngest for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<byte[]> exportAllAgeGroupsToPdf(@PathVariable Long raceId) {
        try {
            Optional<Race> race = raceService.findById(raceId);
            if (race.isEmpty()) {
                return HttpResponse.notFound();
            }

            Iterable<Participant> participants = service.findByRaceId(raceId);

            byte[] pdfBytes = pdfExportService.generateAllAgeGroupsRanking(participants, race.get());
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=wertung_altersklassen.pdf");
        } catch (IllegalArgumentException e) {
            return HttpResponse.serverError().body(e.getMessage().getBytes());
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Produces("application/pdf")
    @Get("/export/pdf/all/categories/{raceId}")
    @Operation(summary = "Export overall ranking split by category as PDF",
            description = "Generates a PDF with all participants sorted by time, split into one section per category",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<byte[]> exportAllByCategoryToPdf(@PathVariable Long raceId) {
        try {
            Optional<Race> race = raceService.findById(raceId);
            if (race.isEmpty()) {
                return HttpResponse.notFound();
            }

            Iterable<Participant> participants = service.findByRaceId(raceId);

            byte[] pdfBytes = pdfExportService.generateOverallByCategoryRanking(participants, race.get());
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=gesamtwertung_kategorien.pdf");
        } catch (IllegalArgumentException e) {
            return HttpResponse.serverError().body(e.getMessage().getBytes());
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Produces("application/pdf")
    @Get("/export/pdf/gender/{gender}/categories/{raceId}")
    @Operation(summary = "Export participants by gender split by category as PDF",
            description = "Generates a PDF with participants filtered by gender, split into one section per category",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<byte[]> exportByGenderByCategoryToPdf(@PathVariable String gender, @PathVariable Long raceId) {
        try {
            Optional<Race> race = raceService.findById(raceId);
            if (race.isEmpty()) {
                return HttpResponse.notFound();
            }

            Iterable<Participant> participants = service.findByRaceId(raceId);

            byte[] pdfBytes = pdfExportService.generateGenderByCategoryRanking(participants, gender, race.get());
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=wertung_" + gender.toLowerCase() + "_kategorien.pdf");
        } catch (IllegalArgumentException e) {
            return HttpResponse.serverError().body(e.getMessage().getBytes());
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Produces("application/pdf")
    @Get("/export/pdf/agegroups/all/categories/{raceId}")
    @Operation(summary = "Export all age groups split by gender and category as PDF",
            description = "Generates a PDF with all age groups, each split by gender and then by category",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<byte[]> exportAllAgeGroupsByCategoryToPdf(@PathVariable Long raceId) {
        try {
            Optional<Race> race = raceService.findById(raceId);
            if (race.isEmpty()) {
                return HttpResponse.notFound();
            }

            Iterable<Participant> participants = service.findByRaceId(raceId);

            byte[] pdfBytes = pdfExportService.generateAllAgeGroupsByCategoryRanking(participants, race.get());
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=wertung_altersklassen_kategorien.pdf");
        } catch (IllegalArgumentException e) {
            return HttpResponse.serverError().body(e.getMessage().getBytes());
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Produces("application/pdf")
    @Get("/export/pdf/category/{categoryId}/{raceId}")
    @Operation(summary = "Export participants by category as PDF",
            description = "Generates a PDF with participants filtered by category, sorted by time for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<byte[]> exportByCategoryToPdf(@PathVariable Long categoryId, @PathVariable Long raceId) {
        try {
            Optional<Race> race = raceService.findById(raceId);
            if (race.isEmpty()) {
                return HttpResponse.notFound();
            }

            Iterable<Participant> participants = service.findByRaceId(raceId);

            byte[] pdfBytes = pdfExportService.generateCategoryRanking(participants, categoryId, race.get());
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=wertung_kategorie_" + categoryId + ".pdf");
        } catch (IllegalArgumentException e) {
            return HttpResponse.serverError().body(e.getMessage().getBytes());
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

}