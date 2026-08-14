package x.timecontrol.Controller;

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
import x.timecontrol.dto.RaceRequest;
import x.timecontrol.dto.RaceResponse;
import x.timecontrol.entities.Race;
import x.timecontrol.services.RaceService;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/races")
@Tag(name = "Race")
public class RaceController {

    @Inject
    RaceService service;

    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List all races", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of all races", content = @Content(schema = @Schema(implementation = RaceResponse.class)))
    public HttpResponse<List<RaceResponse>> list() {
        Iterable<Race> races = service.findAll();
        List<RaceResponse> response = StreamSupport.stream(races.spliterator(), false)
                .map(RaceResponse::from)
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}")
    @Operation(summary = "Get race by ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Race found", content = @Content(schema = @Schema(implementation = RaceResponse.class)))
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<RaceResponse> getById(@PathVariable Long id) {
        Optional<Race> race = service.findById(id);
        return race.map(r -> HttpResponse.ok(RaceResponse.from(r)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/by-name/{name}")
    @Operation(summary = "Get race by name", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Race found", content = @Content(schema = @Schema(implementation = RaceResponse.class)))
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<RaceResponse> getByName(@PathVariable String name) {
        Optional<Race> race = service.findByName(name);
        return race.map(r -> HttpResponse.ok(RaceResponse.from(r)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Race created", content = @Content(schema = @Schema(implementation = RaceResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<RaceResponse> add(@Body RaceRequest request) {
        Race race = service.createFromRequest(request);
        Race created = service.create(race);
        return HttpResponse.created(RaceResponse.from(created));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Race updated", content = @Content(schema = @Schema(implementation = RaceResponse.class)))
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<RaceResponse> update(@PathVariable Long id, @Body RaceRequest request) {
        Race race = service.createFromRequest(request);
        Optional<Race> updated = service.update(id, race);
        return updated.map(r -> HttpResponse.ok(RaceResponse.from(r)))
                .orElse(HttpResponse.notFound());
    }

    @Delete("/{id}")
    @Operation(summary = "Delete a race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Race deleted")
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<Void> delete(@PathVariable Long id) {
        Optional<Race> race = service.findById(id);
        if (race.isPresent()) {
            service.delete(id);
            return HttpResponse.noContent();
        }
        return HttpResponse.notFound();
    }
}

