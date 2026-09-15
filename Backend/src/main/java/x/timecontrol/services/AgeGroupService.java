package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.AgeGroupRequest;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Gender;
import x.timecontrol.repositories.AgeGroupRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Singleton
public class AgeGroupService {

    private final AgeGroupRepository repository;

    public AgeGroupService(AgeGroupRepository repository) {
        this.repository = repository;
    }

    public AgeGroup create(AgeGroup ageGroup) {
        assertNameAvailable(ageGroup.name(), null);
        assertNoOverlap(ageGroup, null);
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
            assertNoOverlap(ageGroup, id);
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
     * Resolves the age group name a birth date/gender falls into, given a preloaded list of age
     * groups - shared by every caller that needs to bucket a person by age (PDF exports,
     * Punkte-Mischwertung category filtering) without each doing its own {@link #isYearInAgeGroup}
     * loop. Mirrors {@link x.timecontrol.services.ParticipantService}'s own
     * findMatchingAgeGroup(person, ageGroups): year in range AND gender matches (a BOTH-gender
     * group counts for either gender), first one wins. Without the gender check, a person could be
     * matched against a same-year group configured for the other gender (real DSV exports commonly
     * have gender-specific classes with identical year ranges, e.g. "U14m"/"U14w") - not just a
     * wrong display label, but silently excluding that person from every by-gender PDF section and
     * Gaudi-Modus category filter that checks the name they end up with here.
     */
    public String calculateAgeGroupName(LocalDate birthDate, Gender gender, List<AgeGroup> ageGroups) {
        if (birthDate == null) {
            return "Unbekannt";
        }
        int birthYear = birthDate.getYear();
        for (AgeGroup ageGroup : ageGroups) {
            boolean yearMatches = isYearInAgeGroup(ageGroup, birthYear);
            boolean genderMatches = ageGroup.gender() == gender || ageGroup.gender() == Gender.BOTH;
            if (yearMatches && genderMatches) {
                return ageGroup.name();
            }
        }
        return "Unbekannt";
    }

    /**
     * Find-or-create for participant import: an import's "Klasse"/age-class column (DSV-Wettkampfdatei,
     * RaceEngine, ...) names an age+gender class such as "U14m" - an AgeGroup, not a free-text
     * Category.
     * <p>
     * First choice is any <em>existing</em> AgeGroup that already covers this birth year for this
     * gender (a BOTH-gender group counts too) - regardless of its name. This mirrors exactly how
     * {@link x.timecontrol.services.ParticipantService}'s own age-group matching resolves a person
     * (year in range + gender matches, first one wins), so import never creates a redundant
     * "U14M" next to an already-existing "U14" (BOTH) that already covers 2012 for males - the
     * existing, broader group is reused as-is instead.
     * <p>
     * Only when nothing already covers this year/gender does it fall back to name-based
     * find-or-create (case-insensitive), like Team/Category's findOrCreateByName: a newly created
     * group starts as a single birth year (this row's); an existing same-named group's range is
     * widened to include this row's birth year when it falls outside it, since one sample row never
     * tells us a class's full range up front. That existing group's gender is left as-is -
     * age_group.name is globally unique, so real exports already bake gender into the name (U14m vs
     * U14w).
     */
    public AgeGroup findOrCreateForImport(String rawLabel, int birthYear, Gender gender) {
        List<AgeGroup> existingGroups = StreamSupport.stream(repository.findAll().spliterator(), false).toList();

        for (AgeGroup ageGroup : existingGroups) {
            boolean yearMatches = isYearInAgeGroup(ageGroup, birthYear);
            boolean genderMatches = ageGroup.gender() == gender || ageGroup.gender() == Gender.BOTH;
            if (yearMatches && genderMatches) {
                return ageGroup;
            }
        }

        String normalized = rawLabel.trim().toUpperCase();
        Optional<AgeGroup> byName = existingGroups.stream()
                .filter(ag -> ag.name().equalsIgnoreCase(normalized))
                .findFirst();
        if (byName.isEmpty()) {
            return repository.save(new AgeGroup(null, normalized, birthYear, birthYear, gender));
        }
        AgeGroup match = byName.get();
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

    /**
     * @throws IllegalStateException if another age group already covers an overlapping birth-year
     *                                range for an overlapping gender (BOTH overlaps with every
     *                                gender), e.g. creating "U14w" 2011-2012 while "U14" (BOTH)
     *                                2011-2012 already exists
     */
    private void assertNoOverlap(AgeGroup ageGroup, Long excludeId) {
        List<AgeGroup> existingGroups = StreamSupport.stream(repository.findAll().spliterator(), false).toList();
        for (AgeGroup other : existingGroups) {
            if (other.id().equals(excludeId)) {
                continue;
            }
            boolean yearsOverlap = ageGroup.birthYearFrom() <= other.birthYearTo()
                    && other.birthYearFrom() <= ageGroup.birthYearTo();
            boolean gendersOverlap = ageGroup.gender() == other.gender()
                    || ageGroup.gender() == Gender.BOTH
                    || other.gender() == Gender.BOTH;
            if (yearsOverlap && gendersOverlap) {
                throw new IllegalStateException("An age group named \"" + other.name()
                        + "\" already covers birth year(s) " + Math.max(ageGroup.birthYearFrom(), other.birthYearFrom())
                        + "-" + Math.min(ageGroup.birthYearTo(), other.birthYearTo())
                        + " for this gender");
            }
        }
    }
}

