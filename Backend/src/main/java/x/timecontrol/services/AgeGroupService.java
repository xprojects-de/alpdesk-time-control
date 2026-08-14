package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.AgeGroupRequest;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.repositories.AgeGroupRepository;

import java.util.Optional;

@Singleton
public class AgeGroupService {

    private final AgeGroupRepository repository;

    public AgeGroupService(AgeGroupRepository repository) {
        this.repository = repository;
    }

    public AgeGroup create(AgeGroup ageGroup) {
        return repository.save(ageGroup);
    }

    public Iterable<AgeGroup> findAll() {
        return repository.findAll();
    }

    public Optional<AgeGroup> findById(Long id) {
        return repository.findById(id);
    }

    public Optional<AgeGroup> findByName(String name) {
        return repository.findByName(name);
    }

    public Optional<AgeGroup> update(Long id, AgeGroup ageGroup) {
        Optional<AgeGroup> existing = repository.findById(id);
        if (existing.isPresent()) {
            AgeGroup updated = new AgeGroup(
                    id,
                    ageGroup.name(),
                    ageGroup.birthYearFrom(),
                    ageGroup.birthYearTo()
            );
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public AgeGroup createFromRequest(AgeGroupRequest request) {
        return new AgeGroup(
                null,
                request.name(),
                request.birthYearFrom(),
                request.birthYearTo()
        );
    }

    public boolean isYearInAgeGroup(AgeGroup ageGroup, int birthYear) {
        return birthYear >= ageGroup.birthYearFrom() && birthYear <= ageGroup.birthYearTo();
    }
}

