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
import x.timecontrol.dto.TeamRequest;
import x.timecontrol.dto.TeamResponse;
import x.timecontrol.entities.Team;
import x.timecontrol.services.TeamService;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/teams")
@ExecuteOn(TaskExecutors.BLOCKING)
@Tag(name = "Team")
public class TeamController {

    @Inject
    TeamService service;

    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List all teams", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of all teams", content = @Content(schema = @Schema(implementation = TeamResponse.class)))
    public HttpResponse<List<TeamResponse>> list() {
        Iterable<Team> teams = service.findAll();
        List<TeamResponse> response = StreamSupport.stream(teams.spliterator(), false)
                .map(TeamResponse::from)
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}")
    @Operation(summary = "Get team by ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Team found", content = @Content(schema = @Schema(implementation = TeamResponse.class)))
    @ApiResponse(responseCode = "404", description = "Team not found")
    public HttpResponse<TeamResponse> getById(@PathVariable Long id) {
        Optional<Team> team = service.findById(id);
        return team.map(t -> HttpResponse.ok(TeamResponse.from(t)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new team", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Team created", content = @Content(schema = @Schema(implementation = TeamResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "A team with this name already exists")
    public HttpResponse<?> add(@Body TeamRequest request) {
        if (!isValid(request)) {
            return HttpResponse.badRequest();
        }
        Team team = service.createFromRequest(request);
        try {
            Team created = service.create(team);
            return HttpResponse.created(TeamResponse.from(created));
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing team", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Team updated", content = @Content(schema = @Schema(implementation = TeamResponse.class)))
    @ApiResponse(responseCode = "404", description = "Team not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "A team with this name already exists")
    public HttpResponse<?> update(@PathVariable Long id, @Body TeamRequest request) {
        if (!isValid(request)) {
            return HttpResponse.badRequest();
        }
        Team team = service.createFromRequest(request);
        Optional<Team> updated;
        try {
            updated = service.update(id, team);
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
        return updated.map(t -> HttpResponse.ok((Object) TeamResponse.from(t)))
                .orElse(HttpResponse.notFound());
    }

    private boolean isValid(TeamRequest request) {
        return request.name() != null && !request.name().isBlank();
    }

    @Delete("/{id}")
    @Operation(summary = "Delete a team", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Team deleted")
    @ApiResponse(responseCode = "404", description = "Team not found")
    public HttpResponse<Void> delete(@PathVariable Long id) {
        Optional<Team> team = service.findById(id);
        if (team.isPresent()) {
            service.delete(id);
            return HttpResponse.noContent();
        }
        return HttpResponse.notFound();
    }
}
