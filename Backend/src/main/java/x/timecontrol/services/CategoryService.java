package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.CategoryRequest;
import x.timecontrol.entities.Category;
import x.timecontrol.repositories.CategoryRepository;
import x.timecontrol.repositories.ParticipantRepository;

import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.StreamSupport;

@Singleton
public class CategoryService {

    private final CategoryRepository repository;
    private final ParticipantRepository participantRepository;

    public CategoryService(CategoryRepository repository, ParticipantRepository participantRepository) {
        this.repository = repository;
        this.participantRepository = participantRepository;
    }

    public Category create(Category category) {
        assertNameAvailable(category.name(), null);
        return repository.save(category);
    }

    public Iterable<Category> findAll() {
        return repository.findAll();
    }

    public Optional<Category> findById(Long id) {
        return repository.findById(id);
    }

    public Optional<Category> findByName(String name) {
        return repository.findByName(name);
    }

    /**
     * Categories sorted by name - the shared "how do we order categories for grouped display"
     * rule, used by both PdfExportService's by-category exports and ParticipantService's derived
     * start-order grouping, so the two can't silently diverge.
     */
    public List<Category> sortedByName() {
        return StreamSupport.stream(findAll().spliterator(), false)
                .sorted(Comparator.comparing(Category::name))
                .toList();
    }

    /**
     * Batch-loads categories by id in a single query, e.g. for building a list response without
     * issuing one lookup per row.
     */
    public Map<Long, Category> findByIds(Set<Long> ids) {
        if (ids.isEmpty()) {
            return Collections.emptyMap();
        }
        Map<Long, Category> result = new HashMap<>();
        for (Category category : repository.findByIdIn(ids)) {
            result.put(category.id(), category);
        }
        return result;
    }

    public Optional<Category> update(Long id, Category category) {
        Optional<Category> existing = repository.findById(id);
        if (existing.isPresent()) {
            assertNameAvailable(category.name(), id);
            Category updated = new Category(id, category.name());
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    /**
     * @throws IllegalStateException if participants are still assigned to this category and {@code force} is false
     */
    public void delete(Long id, boolean force) {
        if (!force) {
            long assigned = participantRepository.countByCategoryId(id);
            if (assigned > 0) {
                throw new IllegalStateException(assigned + " participants are assigned to this category. " +
                        "Deleting it will remove the category assignment from those participants. Delete anyway?");
            }
        }
        repository.deleteById(id);
    }

    public Category createFromRequest(CategoryRequest request) {
        return new Category(null, request.name().trim());
    }

    /**
     * @throws IllegalStateException if another category already has this name (case-insensitive)
     */
    private void assertNameAvailable(String name, Long excludeId) {
        Optional<Category> conflict = repository.findByNameIgnoreCase(name);
        if (conflict.isPresent() && !conflict.get().id().equals(excludeId)) {
            throw new IllegalStateException("A category named \"" + name + "\" already exists");
        }
    }

    /**
     * Finds a category by name (case-insensitive), creating it with an uppercased name if it does not exist yet.
     */
    public Category findOrCreateByName(String name) {
        String normalized = name.trim().toUpperCase();
        return repository.findByNameIgnoreCase(normalized)
                .orElseGet(() -> repository.save(new Category(null, normalized)));
    }
}
