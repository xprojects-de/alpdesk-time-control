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
import x.timecontrol.dto.CategoryRequest;
import x.timecontrol.dto.CategoryResponse;
import x.timecontrol.entities.Category;
import x.timecontrol.services.CategoryService;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/categories")
@ExecuteOn(TaskExecutors.BLOCKING)
@Tag(name = "Category")
public class CategoryController {

    @Inject
    CategoryService service;

    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List all categories", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of all categories", content = @Content(schema = @Schema(implementation = CategoryResponse.class)))
    public HttpResponse<List<CategoryResponse>> list() {
        Iterable<Category> categories = service.findAll();
        List<CategoryResponse> response = StreamSupport.stream(categories.spliterator(), false)
                .map(CategoryResponse::from)
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}")
    @Operation(summary = "Get category by ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Category found", content = @Content(schema = @Schema(implementation = CategoryResponse.class)))
    @ApiResponse(responseCode = "404", description = "Category not found")
    public HttpResponse<CategoryResponse> getById(@PathVariable Long id) {
        Optional<Category> category = service.findById(id);
        return category.map(c -> HttpResponse.ok(CategoryResponse.from(c)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new category", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Category created", content = @Content(schema = @Schema(implementation = CategoryResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<CategoryResponse> add(@Body CategoryRequest request) {
        if (!isValid(request)) {
            return HttpResponse.badRequest();
        }
        Category category = service.createFromRequest(request);
        Category created = service.create(category);
        return HttpResponse.created(CategoryResponse.from(created));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing category", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Category updated", content = @Content(schema = @Schema(implementation = CategoryResponse.class)))
    @ApiResponse(responseCode = "404", description = "Category not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<CategoryResponse> update(@PathVariable Long id, @Body CategoryRequest request) {
        if (!isValid(request)) {
            return HttpResponse.badRequest();
        }
        Category category = service.createFromRequest(request);
        Optional<Category> updated = service.update(id, category);
        return updated.map(c -> HttpResponse.ok(CategoryResponse.from(c)))
                .orElse(HttpResponse.notFound());
    }

    private boolean isValid(CategoryRequest request) {
        return request.name() != null && !request.name().isBlank();
    }

    @Delete("/{id}")
    @Operation(summary = "Delete a category", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Category deleted")
    @ApiResponse(responseCode = "404", description = "Category not found")
    public HttpResponse<Void> delete(@PathVariable Long id) {
        Optional<Category> category = service.findById(id);
        if (category.isPresent()) {
            service.delete(id);
            return HttpResponse.noContent();
        }
        return HttpResponse.notFound();
    }
}
