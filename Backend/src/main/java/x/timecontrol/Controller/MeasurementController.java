package x.timecontrol.Controller;

import x.timecontrol.dto.MeasurementRequest;
import x.timecontrol.dto.MeasurementResponse;
import x.timecontrol.entities.Measurement;
import x.timecontrol.services.MeasurementService;
import x.timecontrol.services.DataImportService;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.inject.Inject;
import x.timecontrol.services.PdfExportService;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/measurements")
@Tag(name = "Measurement")
public class MeasurementController {

    @Inject
    MeasurementService service;

    @Inject
    DataImportService dataImportService;

    @Inject
    PdfExportService pdfExportService;

    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List all measurements", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of all measurements", content = @Content(schema = @Schema(implementation = MeasurementResponse.class)))
    public HttpResponse<List<MeasurementResponse>> list() {
        Iterable<Measurement> measurements = service.findAll();
        List<MeasurementResponse> response = StreamSupport.stream(measurements.spliterator(), false)
                .map(MeasurementResponse::from)
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/participant/{participantId}")
    @Operation(summary = "List measurements by participant ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of measurements for the participant", content = @Content(schema = @Schema(implementation = MeasurementResponse.class)))
    public HttpResponse<List<MeasurementResponse>> listByParticipant(@PathVariable Long participantId) {
        List<Measurement> measurements = service.findByParticipantId(participantId);
        List<MeasurementResponse> response = measurements.stream()
                .map(MeasurementResponse::from)
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}")
    @Operation(summary = "Get measurement by ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Measurement found", content = @Content(schema = @Schema(implementation = MeasurementResponse.class)))
    @ApiResponse(responseCode = "404", description = "Measurement not found")
    public HttpResponse<MeasurementResponse> getById(@PathVariable Long id) {
        Optional<Measurement> measurement = service.findById(id);
        return measurement.map(m -> HttpResponse.ok(MeasurementResponse.from(m)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new measurement", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Measurement created", content = @Content(schema = @Schema(implementation = MeasurementResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<MeasurementResponse> add(@Body MeasurementRequest request) {
        Measurement measurement = new Measurement(
                null,
                request.participantId(),
                request.durationMs(),
                request.measuredAt()
        );
        Measurement created = service.create(measurement);
        return HttpResponse.created(MeasurementResponse.from(created));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing measurement", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Measurement updated", content = @Content(schema = @Schema(implementation = MeasurementResponse.class)))
    @ApiResponse(responseCode = "404", description = "Measurement not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<MeasurementResponse> update(@PathVariable Long id, @Body MeasurementRequest request) {
        Measurement measurement = new Measurement(
                null,
                request.participantId(),
                request.durationMs(),
                request.measuredAt()
        );
        Optional<Measurement> updated = service.update(id, measurement);
        return updated.map(m -> HttpResponse.ok(MeasurementResponse.from(m)))
                .orElse(HttpResponse.notFound());
    }

    @Delete("/{id}")
    @Operation(summary = "Delete a measurement", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Measurement deleted")
    @ApiResponse(responseCode = "404", description = "Measurement not found")
    public HttpResponse<Void> delete(@PathVariable Long id) {
        Optional<Measurement> measurement = service.findById(id);
        if (measurement.isPresent()) {
            service.delete(id);
            return HttpResponse.noContent();
        }
        return HttpResponse.notFound();
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Post("/import")
    @Operation(summary = "Import measurements from external device",
               description = "Fetches timing data from http://192.168.4.1/data and creates measurements",
               security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Measurements imported successfully",
                 content = @Content(schema = @Schema(implementation = MeasurementResponse.class)))
    @ApiResponse(responseCode = "500", description = "Import failed")
    public HttpResponse<List<MeasurementResponse>> importFromDevice() {
        try {
            List<Measurement> imported = dataImportService.importDataFromDevice();
            List<MeasurementResponse> response = imported.stream()
                    .map(MeasurementResponse::from)
                    .toList();
            return HttpResponse.created(response);
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Produces("application/pdf")
    @Get("/export/pdf")
    @Operation(summary = "Export all measurements as PDF", 
               description = "Generates a PDF document with all measurements in table format",
               security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<byte[]> exportAllToPdf() {
        try {
            Iterable<Measurement> measurements = service.findAll();
            List<Measurement> measurementList = StreamSupport.stream(measurements.spliterator(), false)
                    .toList();
            byte[] pdfBytes = pdfExportService.generateMeasurementsPdf(measurementList);
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=messungen.pdf");
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Produces("application/pdf")
    @Get("/participant/{participantId}/export/pdf")
    @Operation(summary = "Export measurements by participant as PDF", 
               description = "Generates a PDF document with measurements for a specific participant",
               security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<byte[]> exportParticipantToPdf(@PathVariable Long participantId) {
        try {
            List<Measurement> measurements = service.findByParticipantId(participantId);
            byte[] pdfBytes = pdfExportService.generateMeasurementsPdf(measurements);
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=messungen_teilnehmer_" + participantId + ".pdf");
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

}

