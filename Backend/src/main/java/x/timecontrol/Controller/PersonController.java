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
import x.timecontrol.dto.PersonRequest;
import x.timecontrol.dto.PersonResponse;
import x.timecontrol.entities.Person;
import x.timecontrol.services.PersonService;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/persons")
@ExecuteOn(TaskExecutors.BLOCKING)
@Tag(name = "Person")
public class PersonController {

    @Inject
    PersonService service;

    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List all persons", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of all persons", content = @Content(schema = @Schema(implementation = PersonResponse.class)))
    public HttpResponse<List<PersonResponse>> list() {
        Iterable<Person> persons = service.findAll();
        List<PersonResponse> response = StreamSupport.stream(persons.spliterator(), false)
                .map(PersonResponse::from)
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/search")
    @Operation(summary = "Search persons by name",
            description = "Case-insensitive search over first name and last name (in either order), used for the participant assignment autocomplete. Returns at most 20 matches.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Matching persons", content = @Content(schema = @Schema(implementation = PersonResponse.class)))
    public HttpResponse<List<PersonResponse>> search(@QueryValue String q) {
        List<PersonResponse> response = service.search(q).stream()
                .map(PersonResponse::from)
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}")
    @Operation(summary = "Get person by ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Person found", content = @Content(schema = @Schema(implementation = PersonResponse.class)))
    @ApiResponse(responseCode = "404", description = "Person not found")
    public HttpResponse<PersonResponse> getById(@PathVariable Long id) {
        Optional<Person> person = service.findById(id);
        return person.map(p -> HttpResponse.ok(PersonResponse.from(p)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new person", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Person created", content = @Content(schema = @Schema(implementation = PersonResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "Another person with this externalId already exists")
    public HttpResponse<?> add(@Body PersonRequest request) {
        if (!isValid(request)) {
            return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse("firstName, lastName, birthDate and gender are required"));
        }
        Person person = service.createFromRequest(request);
        try {
            Person created = service.create(person);
            return HttpResponse.created(PersonResponse.from(created));
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing person", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Person updated", content = @Content(schema = @Schema(implementation = PersonResponse.class)))
    @ApiResponse(responseCode = "404", description = "Person not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "Another person with this externalId already exists")
    public HttpResponse<?> update(@PathVariable Long id, @Body PersonRequest request) {
        if (!isValid(request)) {
            return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse("firstName, lastName, birthDate and gender are required"));
        }
        Person person = service.createFromRequest(request);
        Optional<Person> updated;
        try {
            updated = service.update(id, person);
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
        return updated.map(p -> HttpResponse.ok((Object) PersonResponse.from(p)))
                .orElse(HttpResponse.notFound());
    }

    private boolean isValid(PersonRequest request) {
        return request.firstName() != null && !request.firstName().isBlank()
                && request.lastName() != null && !request.lastName().isBlank()
                && request.birthDate() != null
                && request.gender() != null;
    }

    @Delete("/{id}")
    @Operation(summary = "Delete a person", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Person deleted")
    @ApiResponse(responseCode = "404", description = "Person not found")
    @ApiResponse(responseCode = "409", description = "Person is still assigned as a participant")
    public HttpResponse<?> delete(@PathVariable Long id) {
        Optional<Person> person = service.findById(id);
        if (person.isEmpty()) {
            return HttpResponse.notFound();
        }
        try {
            service.delete(id);
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
        return HttpResponse.noContent();
    }
}
