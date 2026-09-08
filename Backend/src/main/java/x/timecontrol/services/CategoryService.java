package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.CategoryRequest;
import x.timecontrol.entities.Category;
import x.timecontrol.repositories.CategoryRepository;

import java.util.Optional;

@Singleton
public class CategoryService {

    private final CategoryRepository repository;

    public CategoryService(CategoryRepository repository) {
        this.repository = repository;
    }

    public Category create(Category category) {
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

    public Optional<Category> update(Long id, Category category) {
        Optional<Category> existing = repository.findById(id);
        if (existing.isPresent()) {
            Category updated = new Category(id, category.name());
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Category createFromRequest(CategoryRequest request) {
        return new Category(null, request.name());
    }
}
