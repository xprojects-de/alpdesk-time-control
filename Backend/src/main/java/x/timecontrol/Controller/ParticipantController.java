package x.timecontrol.Controller;

import x.timecontrol.dto.ErrorResponse;
import x.timecontrol.dto.ParticipantCopyRequest;
import x.timecontrol.dto.ParticipantCopyResponse;
import x.timecontrol.dto.ParticipantImportFormat;
import x.timecontrol.dto.ParticipantImportPreviewResponse;
import x.timecontrol.dto.ParticipantImportResponse;
import x.timecontrol.dto.ParticipantRequest;
import x.timecontrol.dto.ParticipantResponse;
import x.timecontrol.dto.ParticipantResultImportPreviewResponse;
import x.timecontrol.dto.ParticipantResultImportResponse;
import x.timecontrol.dto.ResultTimeFormat;
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
import io.micronaut.json.JsonMapper;
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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

    @Inject
    JsonMapper jsonMapper;

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
        return participant.map(p -> HttpResponse.ok(service.toResponses(List.of(p)).getFirst())).orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new participant", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Participant created", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "Race number already assigned in this race")
    public HttpResponse<?> add(@Body ParticipantRequest request) {
        Participant participant = new Participant(null, request.raceId(), request.personId(), request.raceNumber(), request.teamId(), request.categoryId(), request.durationMs(), request.penalty(), request.measuredAt(), request.comment(), request.status());
        Participant created;
        try {
            created = service.create(participant);
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse(e.getMessage()));
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
        }
        return HttpResponse.created(service.toResponses(List.of(created)).getFirst());
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
        Participant participant = new Participant(null, request.raceId(), request.personId(), request.raceNumber(), request.teamId(), request.categoryId(), request.durationMs(), request.penalty(), request.measuredAt(), request.comment(), request.status());
        Optional<Participant> updated;
        try {
            updated = service.update(id, participant);
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse(e.getMessage()));
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
        }
        return updated.map(p -> HttpResponse.ok((Object) service.toResponses(List.of(p)).getFirst())).orElse(HttpResponse.notFound());
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
    @Operation(summary = "Copy participants into other races", description = "Copies every participant of the source race into each target race (personId/teamId/categoryId carried over, durationMs/penalty/measuredAt left empty; raceNumber carried over only if carryStartNumber is true and not already taken in the target race). A person already present in a target race is skipped rather than duplicated.", security = @SecurityRequirement(name = "BearerAuth"))
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
    @Operation(summary = "Randomly assign race numbers for a race", description = "Assigns race numbers 1..n to all participants of a race, randomized within each age group; participants without a matching age group are assigned last, ordered by ascending age", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Race numbers assigned", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "409", description = "Auto-assign mode is currently active for this race")
    public HttpResponse<?> assignRaceNumbers(@PathVariable Long raceId) {
        if (raceService.findById(raceId).isEmpty()) {
            return HttpResponse.notFound();
        }
        try {
            List<Participant> updated = service.assignRaceNumbers(raceId);
            return HttpResponse.ok(service.toResponses(updated));
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Post("/race/{raceId}/apply-start-order-from-previous-race")
    @Operation(summary = "Derive a race's start order (not its race numbers/bibs) from its linked previous race's results", description = "Sets startSequence per age group (independent of Category) from the ranking of the race's linked previousRaceId race: the top startOrderReverseTopCount placed finishers of that age group start in reverse order, followed by the rest in normal placement order (e.g. a slalom run 2 start order derived from run 1, where bib 30 can end up starting before bib 5). raceNumber (the bib) is never changed by this. Only participants entered in both races are reordered; anyone else keeps their relative race-number order, appended last. includeUnranked controls whether previous-race participants with no result (DSQ/DNF/DNS) are appended at the end of their age group, or excluded from this race's start order and marked DNS.", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Start order applied", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    @ApiResponse(responseCode = "400", description = "Race (or its linked previous race) not found, or the race has no linked previous race")
    @ApiResponse(responseCode = "409", description = "Auto-assign mode is currently active for this race")
    public HttpResponse<?> applyStartOrderFromPreviousRace(@PathVariable Long raceId, @QueryValue(defaultValue = "true") boolean includeUnranked) {
        try {
            List<Participant> updated = service.applyStartOrderFromPreviousRace(raceId, includeUnranked);
            return HttpResponse.ok(service.toResponses(updated));
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse(e.getMessage()));
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Post("/import/{raceId}")
    @Operation(summary = "Import participants from CSV for a race", description = "Imports participants from a CSV file with columns Lastname,Firstname,Birthdate,Team,Gender and " + "an optional 6th ExternalId column. The header row is ignored. Teams are looked up case-insensitively " + "and created (uppercased) if they don't exist yet. Rows with a missing/invalid gender (only MALE or " + "FEMALE are accepted) or an invalid birthdate (expected yyyy-MM-dd) are skipped and reported in the " + "response. ExternalId is fully optional (omit the column entirely, or leave it empty); when given, " + "it is used to find-or-create the matching Person so the same person can be re-imported for a later " + "race/season without creating a duplicate.", security = @SecurityRequirement(name = "BearerAuth"))
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

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Post("/import-preview")
    @Operation(summary = "Preview a participant import file", description = "Parses a CSV (any delimiter) or DSV-Wettkampfdatei XML file and returns the detected source fields, a best-effort suggested mapping onto our participant fields, and a few sample rows - for building a column-mapping UI. Nothing is saved.", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Preview generated", content = @Content(schema = @Schema(implementation = ParticipantImportPreviewResponse.class)))
    @ApiResponse(responseCode = "400", description = "Unknown format or unreadable file")
    public HttpResponse<?> importPreview(@Part("file") CompletedFileUpload file,
                                          @Part("format") String format,
                                          @Part("delimiter") Optional<String> delimiter) {
        ParticipantImportFormat parsedFormat;
        try {
            parsedFormat = ParticipantImportFormat.valueOf(format.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse("Unknown format: " + format + " (expected CSV or DSV_XML)"));
        }

        Character delim = delimiter.filter(d -> !d.isBlank()).map(d -> d.charAt(0)).orElse(null);

        try {
            byte[] bytes = file.getBytes();
            return HttpResponse.ok(service.previewImport(bytes, parsedFormat, delim));
        } catch (IOException e) {
            return HttpResponse.badRequest(new ErrorResponse("Failed to read/parse the uploaded file: " + e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Post("/import-mapped/{raceId}")
    @Operation(summary = "Import participants with a custom column/field mapping", description = "Imports a CSV (any delimiter) or DSV-Wettkampfdatei XML file for a race, using an explicit mapping from our fields (lastName, firstName, birthDate, gender, team, category, externalId, raceNumber) onto the file's source fields/columns. A field left out of the mapping is not imported. If mapping is omitted, the auto-suggested mapping (see /import-preview) is used. Usable directly via REST without any UI - mapping is passed as a JSON object part, not persisted anywhere.", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Import finished", content = @Content(schema = @Schema(implementation = ParticipantImportResponse.class)))
    @ApiResponse(responseCode = "400", description = "Unknown format, invalid mapping JSON, or unreadable file")
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<?> importMapped(@PathVariable Long raceId,
                                         @Part("file") CompletedFileUpload file,
                                         @Part("format") String format,
                                         @Part("delimiter") Optional<String> delimiter,
                                         @Part("mapping") Optional<String> mappingJson) {
        Optional<Race> race = raceService.findById(raceId);
        if (race.isEmpty()) {
            return HttpResponse.notFound();
        }

        ParticipantImportFormat parsedFormat;
        try {
            parsedFormat = ParticipantImportFormat.valueOf(format.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse("Unknown format: " + format + " (expected CSV or DSV_XML)"));
        }

        Map<String, String> mapping = null;
        if (mappingJson.isPresent() && !mappingJson.get().isBlank()) {
            try {
                Map<?, ?> raw = jsonMapper.readValue(mappingJson.get(), Map.class);
                mapping = new HashMap<>();
                for (Map.Entry<?, ?> entry : raw.entrySet()) {
                    if (entry.getValue() != null) {
                        mapping.put(String.valueOf(entry.getKey()), String.valueOf(entry.getValue()));
                    }
                }
            } catch (IOException e) {
                return HttpResponse.badRequest(new ErrorResponse("Invalid mapping JSON: " + e.getMessage()));
            }
        }

        Character delim = delimiter.filter(d -> !d.isBlank()).map(d -> d.charAt(0)).orElse(null);

        try {
            byte[] bytes = file.getBytes();
            ParticipantService.ParticipantImportResult result = service.importMapped(raceId, bytes, parsedFormat, delim, mapping);
            List<ParticipantResponse> imported = service.toResponses(result.imported());
            return HttpResponse.ok(new ParticipantImportResponse(imported.size(), result.errors().size(), imported, result.errors()));
        } catch (IOException e) {
            return HttpResponse.badRequest(new ErrorResponse("Failed to read/parse the uploaded file: " + e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Post("/import-results-preview")
    @Operation(summary = "Preview a result-by-race-number import file", description = "Parses a CSV (any delimiter) and returns the detected source fields, a best-effort suggested mapping onto our result fields (raceNumber, time, comment, status), and a few sample rows - for building a column-mapping UI. Nothing is saved.", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Preview generated", content = @Content(schema = @Schema(implementation = ParticipantResultImportPreviewResponse.class)))
    @ApiResponse(responseCode = "400", description = "Unreadable file")
    public HttpResponse<?> importResultsPreview(@Part("file") CompletedFileUpload file,
                                                 @Part("delimiter") Optional<String> delimiter) {
        Character delim = delimiter.filter(d -> !d.isBlank()).map(d -> d.charAt(0)).orElse(null);
        try {
            byte[] bytes = file.getBytes();
            return HttpResponse.ok(service.previewResultsImport(bytes, delim));
        } catch (IOException e) {
            return HttpResponse.badRequest(new ErrorResponse("Failed to read/parse the uploaded file: " + e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Post("/import-results-mapped/{raceId}")
    @Operation(summary = "Import results (time/value/status) for existing participants, matched by race number", description = "Imports a CSV (any delimiter) of results for a race, matching each row onto an *existing* participant via raceNumber - never creates a new participant, and never touches identity data (name, team, category, ...). A raceNumber that matches nobody in the race is reported as a row error instead. Uses an explicit mapping from our fields (raceNumber, time, comment, status) onto the file's columns; a field left out of the mapping is not imported. If mapping is omitted, the auto-suggested mapping (see /import-results-preview) is used. For a POINTS race, the mapped time/penalty columns are always read as a plain decimal number and timeFormat is ignored; for a TIME race, timeFormat says how to read them: MILLISECONDS (raw ms), SECONDS (decimal seconds, dot or comma), or CLOCK (\"[[hh:]mm:]ss[.,fraction]\", e.g. \"1:23,68\"). A time value that's actually a DNF/DNS/DSQ keyword sets that status instead of a duration. Every updated row's measuredAt is stamped with the import's own timestamp.", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Import finished", content = @Content(schema = @Schema(implementation = ParticipantResultImportResponse.class)))
    @ApiResponse(responseCode = "400", description = "Unknown time format, invalid mapping JSON, or unreadable file")
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<?> importResultsMapped(@PathVariable Long raceId,
                                                @Part("file") CompletedFileUpload file,
                                                @Part("timeFormat") String timeFormat,
                                                @Part("delimiter") Optional<String> delimiter,
                                                @Part("mapping") Optional<String> mappingJson) {
        Optional<Race> race = raceService.findById(raceId);
        if (race.isEmpty()) {
            return HttpResponse.notFound();
        }

        ResultTimeFormat parsedTimeFormat;
        try {
            parsedTimeFormat = ResultTimeFormat.valueOf(timeFormat.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse("Unknown time format: " + timeFormat + " (expected MILLISECONDS, SECONDS or CLOCK)"));
        }

        Map<String, String> mapping = null;
        if (mappingJson.isPresent() && !mappingJson.get().isBlank()) {
            try {
                Map<?, ?> raw = jsonMapper.readValue(mappingJson.get(), Map.class);
                mapping = new HashMap<>();
                for (Map.Entry<?, ?> entry : raw.entrySet()) {
                    if (entry.getValue() != null) {
                        mapping.put(String.valueOf(entry.getKey()), String.valueOf(entry.getValue()));
                    }
                }
            } catch (IOException e) {
                return HttpResponse.badRequest(new ErrorResponse("Invalid mapping JSON: " + e.getMessage()));
            }
        }

        Character delim = delimiter.filter(d -> !d.isBlank()).map(d -> d.charAt(0)).orElse(null);

        try {
            byte[] bytes = file.getBytes();
            ParticipantService.ParticipantResultImportResult result = service.importResultsByRaceNumber(raceId, bytes, delim, mapping, parsedTimeFormat, race.get().resultUnit());
            List<ParticipantResponse> updated = service.toResponses(result.updated());
            return HttpResponse.ok(new ParticipantResultImportResponse(updated.size(), result.errors().size(), updated, result.errors()));
        } catch (IOException e) {
            return HttpResponse.badRequest(new ErrorResponse("Failed to read/parse the uploaded file: " + e.getMessage()));
        }
    }

    @Produces("text/csv")
    @Get("/export/csv/{raceId}")
    @Operation(summary = "Export a race's full participant list (with results) as CSV", description = "Exports every participant of a race as CSV, including person data and results (durationMs/penalty/measuredAt) - for migrating a whole race's roster and results to another instance. Uses our own field names as the header row, so re-importing the file via import-mapped needs no manual mapping.", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "CSV generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<?> exportParticipantsCsv(@PathVariable Long raceId) {
        Optional<Race> race = raceService.findById(raceId);
        if (race.isEmpty()) {
            return HttpResponse.notFound();
        }
        String csv = service.exportCsv(raceId);
        return HttpResponse.ok(csv.getBytes(StandardCharsets.UTF_8))
                .header("Content-Disposition", "attachment; filename=rennergebnisse_" + raceId + ".csv");
    }

    @Produces("text/csv")
    @Get("/export/results-csv/{raceId}")
    @Operation(summary = "Export a race's results as CSV, sorted by race number", description = "Exports every participant's raceNumber/lastName/firstName/team/externalId/time-value/penalty/comment/status, sorted ascending by raceNumber - identity columns are informational only (readability when editing in Excel), never read back on import. Meant to be opened, have result columns filled in or corrected, and re-imported via import-results-mapped, matched purely by raceNumber. time/value and penalty are written as \"m:ss.SSS\" (TIME races) or a plain decimal (POINTS races) - pick CLOCK as the time format on re-import for a TIME race (irrelevant for a POINTS race).", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "CSV generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<?> exportParticipantResultsCsv(@PathVariable Long raceId) {
        Optional<Race> race = raceService.findById(raceId);
        if (race.isEmpty()) {
            return HttpResponse.notFound();
        }
        String csv = service.exportResultsCsv(raceId, race.get().resultUnit());
        return HttpResponse.ok(csv.getBytes(StandardCharsets.UTF_8))
                .header("Content-Disposition", "attachment; filename=ergebnisse_" + raceId + ".csv");
    }

    @Produces("application/pdf")
    @Get("/export/pdf/startlist/{raceId}")
    @Operation(summary = "Export start list as PDF", description = "Generates a PDF start list sorted by race number for a specific race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportStartListToPdf(@PathVariable Long raceId) {
        return exportPdf(raceId, "startliste.pdf", pdfExportService::generateStartList);
    }

    @Produces("application/pdf")
    @Get("/export/pdf/all/{raceId}")
    @Operation(summary = "Export all participants as PDF", description = "Generates a PDF with all participants sorted by time (fastest to slowest) for a specific race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportAllToPdf(@PathVariable Long raceId) {
        return exportPdf(raceId, "gesamtwertung.pdf", pdfExportService::generateOverallRanking);
    }

    @Produces("application/pdf")
    @Get("/export/pdf/gender/{gender}/{raceId}")
    @Operation(summary = "Export participants by gender as PDF", description = "Generates a PDF with participants filtered by gender, sorted by time for a specific race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportByGenderToPdf(@PathVariable String gender, @PathVariable Long raceId) {
        return exportPdf(raceId, "wertung_" + gender.toLowerCase() + ".pdf", (participants, race) -> pdfExportService.generateGenderRanking(participants, gender, race));
    }

    @Produces("application/pdf")
    @Get("/export/pdf/agegroup/{ageGroup}/gender/{gender}/{raceId}")
    @Operation(summary = "Export participants by age group and gender as PDF", description = "Generates a PDF with participants filtered by age group and gender, sorted by time for a specific race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportByAgeGroupAndGenderToPdf(@PathVariable String ageGroup, @PathVariable String gender, @PathVariable Long raceId) {
        return exportPdf(raceId, "wertung_" + ageGroup.toLowerCase() + "_" + gender.toLowerCase() + ".pdf", (participants, race) -> pdfExportService.generateAgeGroupGenderRanking(participants, ageGroup, gender, race));
    }

    @Produces("application/pdf")
    @Get("/export/pdf/agegroups/all/{raceId}")
    @Operation(summary = "Export all age groups separated by gender as PDF", description = "Generates a PDF with all age groups, each split by gender (male/female), starting from youngest for a specific race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportAllAgeGroupsToPdf(@PathVariable Long raceId) {
        return exportPdf(raceId, "wertung_altersklassen.pdf", pdfExportService::generateAllAgeGroupsRanking);
    }

    @Produces("application/pdf")
    @Get("/export/pdf/all/categories/{raceId}")
    @Operation(summary = "Export overall ranking split by category as PDF", description = "Generates a PDF with all participants sorted by time, split into one section per category", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportAllByCategoryToPdf(@PathVariable Long raceId) {
        return exportPdf(raceId, "gesamtwertung_kategorien.pdf", pdfExportService::generateOverallByCategoryRanking);
    }

    @Produces("application/pdf")
    @Get("/export/pdf/gender/{gender}/categories/{raceId}")
    @Operation(summary = "Export participants by gender split by category as PDF", description = "Generates a PDF with participants filtered by gender, split into one section per category", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportByGenderByCategoryToPdf(@PathVariable String gender, @PathVariable Long raceId) {
        return exportPdf(raceId, "wertung_" + gender.toLowerCase() + "_kategorien.pdf", (participants, race) -> pdfExportService.generateGenderByCategoryRanking(participants, gender, race));
    }

    @Produces("application/pdf")
    @Get("/export/pdf/agegroups/all/categories/{raceId}")
    @Operation(summary = "Export all age groups split by gender and category as PDF", description = "Generates a PDF with all age groups, each split by gender and then by category", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportAllAgeGroupsByCategoryToPdf(@PathVariable Long raceId) {
        return exportPdf(raceId, "wertung_altersklassen_kategorien.pdf", pdfExportService::generateAllAgeGroupsByCategoryRanking);
    }

    @Produces("application/pdf")
    @Get("/export/pdf/category/{categoryId}/{raceId}")
    @Operation(summary = "Export participants by category as PDF", description = "Generates a PDF with participants filtered by category, sorted by time for a specific race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<?> exportByCategoryToPdf(@PathVariable Long categoryId, @PathVariable Long raceId) {
        return exportPdf(raceId, "wertung_kategorie_" + categoryId + ".pdf", (participants, race) -> pdfExportService.generateCategoryRanking(participants, categoryId, race));
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
            return HttpResponse.ok(pdfBytes).header("Content-Disposition", "attachment; filename=" + filename);
        } catch (DataAccessException e) {
            throw e; // let GlobalExceptionHandler produce a consistent, non-leaking response
        } catch (Exception e) {
            String reason = e.getMessage() != null ? e.getMessage() : e.getClass().getSimpleName();
            return HttpResponse.serverError(new ErrorResponse("Failed to generate PDF: " + reason)).contentType(MediaType.APPLICATION_JSON);
        }
    }

}