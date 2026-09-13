package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.AgeGroupRequest;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Gender;
import x.timecontrol.repositories.AgeGroupRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Singleton
public class AgeGroupService {

    private final AgeGroupRepository repository;

    public AgeGroupService(AgeGroupRepository repository) {
        this.repository = repository;
    }

    public AgeGroup create(AgeGroup ageGroup) {
        assertNameAvailable(ageGroup.name(), null);
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
            assertNameAvailable(ageGroup.name(), id);
            AgeGroup updated = new AgeGroup(
                    id,
                    ageGroup.name(),
                    ageGroup.birthYearFrom(),
                    ageGroup.birthYearTo(),
                    ageGroup.gender()
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
                request.name().trim(),
                request.birthYearFrom(),
                request.birthYearTo(),
                request.gender()
        );
    }

    public boolean isYearInAgeGroup(AgeGroup ageGroup, int birthYear) {
        return birthYear >= ageGroup.birthYearFrom() && birthYear <= ageGroup.birthYearTo();
    }

    /**
     * Resolves the age group name a birth date falls into, given a preloaded list of age groups -
     * shared by every caller that needs to bucket a person by age (PDF exports, Punkte-Mischwertung
     * category filtering) without each doing its own {@link #isYearInAgeGroup} loop.
     */
    public String calculateAgeGroupName(LocalDate birthDate, List<AgeGroup> ageGroups) {
        if (birthDate == null) {
            return "Unbekannt";
        }
        int birthYear = birthDate.getYear();
        for (AgeGroup ageGroup : ageGroups) {
            if (isYearInAgeGroup(ageGroup, birthYear)) {
                return ageGroup.name();
            }
        }
        return "Unbekannt";
    }

    /**
     * Find-or-create for participant import: an import's "Klasse"/age-class column (DSV-Wettkampfdatei,
     * RaceEngine, ...) names an age+gender class such as "U14m" - an AgeGroup, not a free-text
     * Category. Resolved by name (case-insensitive), like Team/Category's findOrCreateByName. A newly
     * created group starts as a single birth year (this row's); an existing group's range is widened
     * to include this row's birth year when it falls outside it, since one sample row never tells us
     * a class's full range up front. An existing group's gender is left as-is - age_group.name is
     * globally unique, so real exports already bake gender into the name (U14m vs U14w).
     */
    public AgeGroup findOrCreateForImport(String rawLabel, int birthYear, Gender gender) {
        String normalized = rawLabel.trim().toUpperCase();
        Optional<AgeGroup> existing = repository.findByNameIgnoreCase(normalized);
        if (existing.isEmpty()) {
            return repository.save(new AgeGroup(null, normalized, birthYear, birthYear, gender));
        }
        AgeGroup match = existing.get();
        int widenedFrom = Math.min(match.birthYearFrom(), birthYear);
        int widenedTo = Math.max(match.birthYearTo(), birthYear);
        if (widenedFrom == match.birthYearFrom() && widenedTo == match.birthYearTo()) {
            return match;
        }
        return repository.update(new AgeGroup(match.id(), match.name(), widenedFrom, widenedTo, match.gender()));
    }

    /**
     * @throws IllegalStateException if another age group already has this name (case-insensitive)
     */
    private void assertNameAvailable(String name, Long excludeId) {
        Optional<AgeGroup> conflict = repository.findByNameIgnoreCase(name);
        if (conflict.isPresent() && !conflict.get().id().equals(excludeId)) {
            throw new IllegalStateException("An age group named \"" + name + "\" already exists");
        }
    }
}

