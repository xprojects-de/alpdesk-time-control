package x.timecontrol.Controller;

import x.timecontrol.dto.ParticipantRequest;
import x.timecontrol.dto.ParticipantResponse;
import x.timecontrol.entities.Participant;
import x.timecontrol.services.ParticipantService;
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

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/participants")
@Tag(name = "Participant")
public class ParticipantController {

    @Inject
    ParticipantService service;

    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List all participants", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of all participants", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    public HttpResponse<List<ParticipantResponse>> list() {
        Iterable<Participant> participants = service.findAll();
        List<ParticipantResponse> response = StreamSupport.stream(participants.spliterator(), false)
                .map(participant -> {
                    var ageGroup = service.findAgeGroupForParticipant(participant).orElse(null);
                    return ParticipantResponse.from(participant, ageGroup);
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
            var ageGroup = service.findAgeGroupForParticipant(p).orElse(null);
            return HttpResponse.ok(ParticipantResponse.from(p, ageGroup));
        }).orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new participant", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Participant created", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<ParticipantResponse> add(@Body ParticipantRequest request) {
        Participant participant = new Participant(null, request.firstName(), request.lastName(), request.birthDate(), request.gender(), request.raceNumber(), request.association());
        Participant created = service.create(participant);
        var ageGroup = service.findAgeGroupForParticipant(created).orElse(null);
        return HttpResponse.created(ParticipantResponse.from(created, ageGroup));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing participant", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Participant updated", content = @Content(schema = @Schema(implementation = ParticipantResponse.class)))
    @ApiResponse(responseCode = "404", description = "Participant not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<ParticipantResponse> update(@PathVariable Long id, @Body ParticipantRequest request) {
        Participant participant = new Participant(null, request.firstName(), request.lastName(), request.birthDate(), request.gender(), request.raceNumber(), request.association());
        Optional<Participant> updated = service.update(id, participant);
        return updated.map(p -> {
            var ageGroup = service.findAgeGroupForParticipant(p).orElse(null);
            return HttpResponse.ok(ParticipantResponse.from(p, ageGroup));
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

}