package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.AgeGroupRequest;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Gender;
import x.timecontrol.repositories.AgeGroupRepository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

/**
 * Age groups are configured per season (see {@link AgeGroup#seasonYear}): an age class rolls over
 * every year, so "U14" covers 2012-2013 in season 2025 and 2013-2014 in season 2026. Every lookup
 * here is therefore scoped to one season, resolved from the race being looked at via
 * {@link SeasonService} - {@link #findAll()} exists only for the configuration UI, which lists
 * seasons side by side.
 */
@Singleton
public class AgeGroupService {

    /**
     * The age group name {@link #calculateAgeGroupName} returns for a person without a birth date,
     * or whose birth year/gender matches no configured age group.
     */
    public static final String UNKNOWN_AGE_GROUP = "Unbekannt";

    private final AgeGroupRepository repository;

    public AgeGroupService(AgeGroupRepository repository) {
        this.repository = repository;
    }

    public AgeGroup create(AgeGroup ageGroup) {
        assertNameAvailable(ageGroup.name(), ageGroup.seasonYear(), null);
        assertNoOverlap(ageGroup, null);
        return repository.save(ageGroup);
    }

    /**
     * Every age group of every season - for the configuration UI only. Anything resolving a
     * participant's class wants {@link #findBySeason} for that race's season instead, or two
     * seasons' differing ranges would be matched against the same person.
     */
    public Iterable<AgeGroup> findAll() {
        return repository.findAll();
    }

    public List<AgeGroup> findBySeason(int seasonYear) {
        return repository.findBySeasonYear(seasonYear);
    }

    /**
     * Seasons that have any age group configured, newest first - the season selector's options.
     */
    public List<Integer> findConfiguredSeasons() {
        return repository.findDistinctSeasonYears();
    }

    public Optional<AgeGroup> findById(Long id) {
        return repository.findById(id);
    }

    public Optional<AgeGroup> findByName(String name, int seasonYear) {
        return repository.findByNameIgnoreCaseAndSeasonYear(name, seasonYear);
    }

    public Optional<AgeGroup> update(Long id, AgeGroup ageGroup) {
        Optional<AgeGroup> existing = repository.findById(id);
        if (existing.isPresent()) {
            assertNameAvailable(ageGroup.name(), ageGroup.seasonYear(), id);
            assertNoOverlap(ageGroup, id);
            AgeGroup updated = new AgeGroup(
                    id,
                    ageGroup.name(),
                    ageGroup.seasonYear(),
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
                request.seasonYear(),
                request.birthYearFrom(),
                request.birthYearTo(),
                request.gender()
        );
    }

    /**
     * Rolls a whole season's configuration over to the next one: every age group of
     * {@code fromSeason} is copied to {@code toSeason} with its birth years shifted by the
     * difference between the two, so "U14" 2012-2013 in 2025 becomes "U14" 2013-2014 in 2026.
     * <p>
     * This is the intended way to set up a new season, and deliberately cheaper than editing the
     * existing rows: editing them would re-categorise every race already run under them, which is
     * exactly what {@link AgeGroup#seasonYear} exists to prevent.
     * <p>
     * A shift is right for the rolling classes that make up virtually all of a club's setup (U14,
     * U16, "Herren allgemein"); a fixed-cohort class ("Jahrgang 2012") has to be corrected
     * afterwards - one sample of a season's config can't tell the two apart.
     *
     * @throws IllegalStateException if the source season has no age groups, or the target season
     *                               already has some - merging into a half-configured season would
     *                               have to guess which of two conflicting ranges wins
     */
    public List<AgeGroup> copySeason(int fromSeason, int toSeason) {
        if (fromSeason == toSeason) {
            throw new IllegalStateException("Source and target season must differ");
        }
        List<AgeGroup> source = repository.findBySeasonYear(fromSeason);
        if (source.isEmpty()) {
            throw new IllegalStateException("Season " + fromSeason + " has no age groups to copy");
        }
        if (!repository.findBySeasonYear(toSeason).isEmpty()) {
            throw new IllegalStateException("Season " + toSeason + " already has age groups");
        }

        int shift = toSeason - fromSeason;
        List<AgeGroup> copies = new ArrayList<>();
        for (AgeGroup ageGroup : source) {
            copies.add(new AgeGroup(
                    null,
                    ageGroup.name(),
                    toSeason,
                    ageGroup.birthYearFrom() + shift,
                    ageGroup.birthYearTo() + shift,
                    ageGroup.gender()
            ));
        }
        return StreamSupport.stream(repository.saveAll(copies).spliterator(), false).toList();
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
     * <p>
     * {@code ageGroups} must be one season's groups ({@link #findBySeason}), that of the race being
     * looked at - passing several seasons' at once would match a person against whichever season's
     * ranges happen to come first.
     */
    public String calculateAgeGroupName(LocalDate birthDate, Gender gender, List<AgeGroup> ageGroups) {
        if (birthDate == null) {
            return UNKNOWN_AGE_GROUP;
        }
        int birthYear = birthDate.getYear();
        for (AgeGroup ageGroup : ageGroups) {
            boolean yearMatches = isYearInAgeGroup(ageGroup, birthYear);
            boolean genderMatches = ageGroup.gender() == gender || ageGroup.gender() == Gender.BOTH;
            if (yearMatches && genderMatches) {
                return ageGroup.name();
            }
        }
        return UNKNOWN_AGE_GROUP;
    }

    /**
     * Find-or-create for participant import: an import's "Klasse"/age-class column (DSV-Wettkampfdatei,
     * RaceEngine, ...) names an age+gender class such as "U14m" - an AgeGroup, not a free-text
     * Category.
     * <p>
     * Everything here is scoped to {@code seasonYear}, the season of the race being imported into.
     * That scoping is what keeps an import out of past seasons: without it, importing a 2026 roster
     * would find season 2025's "U14" (it covers 2012 for males, so the very first branch below
     * returns it), never create the 2026 one - or worse, take the widening branch and stretch
     * 2025's "U14" from 2012-2013 to 2012-2015, silently re-categorising every race already run
     * that season.
     * <p>
     * First choice is any <em>existing</em> AgeGroup of this season that already covers this birth
     * year for this gender (a BOTH-gender group counts too) - regardless of its name. This mirrors
     * exactly how {@link x.timecontrol.services.ParticipantService}'s own age-group matching
     * resolves a person (year in range + gender matches, first one wins), so import never creates a
     * redundant "U14M" next to an already-existing "U14" (BOTH) that already covers 2012 for males
     * - the existing, broader group is reused as-is instead.
     * <p>
     * Only when nothing already covers this year/gender does it fall back to name-based
     * find-or-create (case-insensitive), like Team/Category's findOrCreateByName: a newly created
     * group starts as a single birth year (this row's); an existing same-named group's range is
     * widened to include this row's birth year when it falls outside it, since one sample row never
     * tells us a class's full range up front. That existing group's gender is left as-is -
     * age_group.name is unique per season, so real exports already bake gender into the name (U14m
     * vs U14w).
     */
    public AgeGroup findOrCreateForImport(String rawLabel, int birthYear, Gender gender, int seasonYear) {
        List<AgeGroup> existingGroups = repository.findBySeasonYear(seasonYear);

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
            return repository.save(new AgeGroup(null, normalized, seasonYear, birthYear, birthYear, gender));
        }
        AgeGroup match = byName.get();
        int widenedFrom = Math.min(match.birthYearFrom(), birthYear);
        int widenedTo = Math.max(match.birthYearTo(), birthYear);
        if (widenedFrom == match.birthYearFrom() && widenedTo == match.birthYearTo()) {
            return match;
        }
        AgeGroup widened = new AgeGroup(match.id(), match.name(), match.seasonYear(), widenedFrom, widenedTo, match.gender());
        // Same guard create()/update() enforce for a manually-entered range: without it, widening
        // this group to cover the imported row's birth year could make its range overlap another
        // existing group's, so a participant ends up matched inconsistently between call sites
        // depending on unspecified DB iteration order (see findMatchingAgeGroup/calculateAgeGroupName).
        assertNoOverlap(widened, match.id());
        return repository.update(widened);
    }

    /**
     * @throws IllegalStateException if another age group in the same season already has this name
     *                                (case-insensitive). Scoped to the season because the whole
     *                                point of seasons is that "U14" exists once per season.
     */
    private void assertNameAvailable(String name, Integer seasonYear, Long excludeId) {
        Optional<AgeGroup> conflict = repository.findByNameIgnoreCaseAndSeasonYear(name, seasonYear);
        if (conflict.isPresent() && !conflict.get().id().equals(excludeId)) {
            throw new IllegalStateException("An age group named \"" + name + "\" already exists in season " + seasonYear);
        }
    }

    /**
     * @throws IllegalStateException if another age group <em>of the same season</em> already covers
     *                                an overlapping birth-year range for an overlapping gender
     *                                (BOTH overlaps with every gender), e.g. creating "U14w"
     *                                2011-2012 while "U14" (BOTH) 2011-2012 already exists.
     *                                Comparing across seasons would make the feature impossible:
     *                                season 2026's "U14" (2013-2014) necessarily overlaps season
     *                                2025's (2012-2013) on 2013.
     */
    private void assertNoOverlap(AgeGroup ageGroup, Long excludeId) {
        List<AgeGroup> existingGroups = repository.findBySeasonYear(ageGroup.seasonYear());
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
                        + " for this gender in season " + ageGroup.seasonYear());
            }
        }
    }
}
