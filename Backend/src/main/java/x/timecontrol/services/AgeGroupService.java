package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.AgeGroupRequest;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Gender;
import x.timecontrol.entities.Race;
import x.timecontrol.repositories.AgeGroupRepository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.TreeSet;
import java.util.stream.StreamSupport;

/**
 * Age groups are configured per season (see {@link AgeGroup#seasonYear}): an age class rolls over
 * every year, so "U14" covers 2012-2013 in season 2025 and 2013-2014 in season 2026. Within a
 * season, a variant ({@link AgeGroup#variant}) lets two races group the same birth years
 * differently. Every lookup here is therefore scoped to one season and variant: the season resolved
 * from the race being looked at via {@link SeasonService}, the variant the race picked -
 * {@link #findAll()} exists only for the configuration UI, which lists seasons side by side.
 */
@Singleton
public class AgeGroupService {

    /**
     * The age group name {@link #calculateAgeGroupName} returns for a person without a birth date,
     * or whose birth year/gender matches no configured age group.
     */
    public static final String UNKNOWN_AGE_GROUP = "Unbekannt";

    /**
     * The label the UI shows for {@link AgeGroup#STANDARD_VARIANT}. Reserved as a variant name, so a
     * variant called "Standard" cannot be mistaken for the real one.
     */
    private static final String STANDARD_VARIANT_LABEL = "Standard";

    private final AgeGroupRepository repository;
    private final SeasonService seasonService;
    private final RaceService raceService;

    public AgeGroupService(AgeGroupRepository repository, SeasonService seasonService, RaceService raceService) {
        this.repository = repository;
        this.seasonService = seasonService;
        this.raceService = raceService;
    }

    /**
     * One variant of a season: how many age groups it has and which races are categorised with it.
     * A variant with races but no age groups is one whose last group was deleted before this was
     * guarded - its races come out "ohne Altersklasse" until it is refilled.
     */
    public record VariantUsage(String variant, int ageGroupCount, List<String> raceNames) {
    }

    public AgeGroup create(AgeGroup ageGroup) {
        assertValidVariantName(ageGroup.seasonYear(), ageGroup.variant());
        assertNameAvailable(ageGroup.name(), ageGroup.seasonYear(), ageGroup.variant(), null);
        assertNoOverlap(ageGroup, null);
        return repository.save(ageGroup);
    }

    /**
     * Every age group of every season - for the configuration UI only. Anything resolving a
     * participant's class wants {@link #findBySeasonAndVariant} for that race's season and variant
     * instead, or two differing ranges would be matched against the same person.
     */
    public Iterable<AgeGroup> findAll() {
        return repository.findAll();
    }

    /**
     * The age groups a race is categorised with: its season (from its date) and the variant it
     * picked - {@code seasonService.seasonOf(race)} and {@code race.ageGroupVariant()}.
     */
    public List<AgeGroup> findBySeasonAndVariant(int seasonYear, String variant) {
        return repository.findBySeasonYearAndVariant(seasonYear, variant);
    }

    /**
     * The age groups a Gaudi-Modus scores its races against: the season and variant of its first
     * race, following {@link SeasonService#scoringSeasonOf}. Races of one Gaudi-Modus normally
     * share both; if they don't, the first race decides - the same race whose name and date head
     * the exported document - and the Gaudi-Modus view points the mismatch out.
     */
    public List<AgeGroup> findForScoring(List<Race> races) {
        String variant = races.isEmpty() ? AgeGroup.STANDARD_VARIANT : races.getFirst().ageGroupVariant();
        return findBySeasonAndVariant(seasonService.scoringSeasonOf(races), variant);
    }

    /**
     * The variants of one season with the races using each, standard first - the variant
     * selector's options. A variant that only races still refer to (its last age group was
     * deleted) is listed too, so it can be spotted and refilled rather than silently
     * categorising those races "ohne Altersklasse". The standard variant is always there.
     */
    public List<VariantUsage> findVariants(int seasonYear) {
        List<Race> racesOfSeason = racesOfSeason(seasonYear);
        Map<String, Integer> ageGroupCountByVariant = new HashMap<>();
        for (AgeGroup ageGroup : repository.findBySeasonYear(seasonYear)) {
            ageGroupCountByVariant.merge(ageGroup.variant(), 1, Integer::sum);
        }

        TreeSet<String> variants = new TreeSet<>(ageGroupCountByVariant.keySet());
        variants.add(AgeGroup.STANDARD_VARIANT);
        for (Race race : racesOfSeason) {
            variants.add(race.ageGroupVariant());
        }

        List<VariantUsage> usages = new ArrayList<>();
        for (String variant : variants) {
            usages.add(new VariantUsage(variant, ageGroupCountByVariant.getOrDefault(variant, 0),
                    raceNamesUsing(racesOfSeason, variant)));
        }
        return usages;
    }

    /**
     * Whether {@code race} may be saved with its age-group variant. {@code previous} is the race as
     * stored before this update, or null for a new race.
     * <p>
     * Only a <em>changed</em> season or variant is checked. A race whose variant has meanwhile lost
     * its age groups must still be editable - a weather correction on race day must not fail over
     * the classes - while picking such a variant, or moving the race into a season that lacks it,
     * is refused.
     *
     * @throws IllegalArgumentException if the race's season has no age groups in that variant.
     *                                  Variants are set up on the age-group page before a race
     *                                  picks one; the standard variant is always allowed,
     *                                  configured or not.
     */
    public void assertVariantSelectable(Race race, Race previous) {
        int seasonYear = seasonService.seasonOf(race);
        boolean unchanged = previous != null
                && race.ageGroupVariant().equals(previous.ageGroupVariant())
                && seasonYear == seasonService.seasonOf(previous);
        if (unchanged || AgeGroup.STANDARD_VARIANT.equals(race.ageGroupVariant())) {
            return;
        }
        if (repository.findBySeasonYearAndVariant(seasonYear, race.ageGroupVariant()).isEmpty()) {
            throw new IllegalArgumentException("Age group variant \"" + race.ageGroupVariant()
                    + "\" does not exist in season " + seasonYear);
        }
    }

    /**
     * Deletes every age group of a variant.
     *
     * @throws IllegalArgumentException for the standard variant, which every season has
     * @throws IllegalStateException    if races of that season are still categorised with it -
     *                                  they would silently lose their classes
     */
    public void deleteVariant(int seasonYear, String variant) {
        if (AgeGroup.STANDARD_VARIANT.equals(variant)) {
            throw new IllegalArgumentException("The standard variant cannot be deleted");
        }
        List<String> raceNames = raceNamesUsing(racesOfSeason(seasonYear), variant);
        if (!raceNames.isEmpty()) {
            throw new IllegalStateException("Age group variant \"" + variant + "\" is still used by: "
                    + String.join(", ", raceNames));
        }
        repository.deleteBySeasonYearAndVariant(seasonYear, variant);
    }

    /**
     * Without a variant, trims it and falls back to the standard one - what every request carrying
     * an optional variant goes through before it is stored or looked up.
     */
    public static String normalizeVariant(String variant) {
        return variant == null ? AgeGroup.STANDARD_VARIANT : variant.trim();
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

    public Optional<AgeGroup> findByName(String name, int seasonYear, String variant) {
        return repository.findByNameIgnoreCaseAndSeasonYearAndVariant(name, seasonYear, variant);
    }

    /**
     * @throws IllegalStateException if the update moves the last age group of a variant that races
     *                               still use into another season or variant - for those races it
     *                               is the same as deleting it (see {@link #delete}).
     */
    public Optional<AgeGroup> update(Long id, AgeGroup ageGroup) {
        Optional<AgeGroup> existing = repository.findById(id);
        if (existing.isPresent()) {
            if (leavesItsVariant(existing.get(), ageGroup)) {
                assertNotLastOfUsedVariant(existing.get());
            }
            assertValidVariantName(ageGroup.seasonYear(), ageGroup.variant());
            assertNameAvailable(ageGroup.name(), ageGroup.seasonYear(), ageGroup.variant(), id);
            assertNoOverlap(ageGroup, id);
            AgeGroup updated = new AgeGroup(
                    id,
                    ageGroup.name(),
                    ageGroup.seasonYear(),
                    ageGroup.variant(),
                    ageGroup.birthYearFrom(),
                    ageGroup.birthYearTo(),
                    ageGroup.gender()
            );
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    /**
     * @throws IllegalStateException if this is the last age group of a variant that races are
     *                               still categorised with - it would leave them "ohne
     *                               Altersklasse" without a word, the same thing
     *                               {@link #deleteVariant} refuses to do. The standard variant is
     *                               exempt: every race without a variant of its own uses it, so its
     *                               last group was always deletable and still is.
     */
    public void delete(Long id) {
        Optional<AgeGroup> ageGroup = repository.findById(id);
        if (ageGroup.isPresent()) {
            assertNotLastOfUsedVariant(ageGroup.get());
        }
        repository.deleteById(id);
    }

    private static boolean leavesItsVariant(AgeGroup existing, AgeGroup updated) {
        return !existing.seasonYear().equals(updated.seasonYear()) || !existing.variant().equals(updated.variant());
    }

    private void assertNotLastOfUsedVariant(AgeGroup ageGroup) {
        if (isLastOfUsedVariant(ageGroup)) {
            throw new IllegalStateException("\"" + ageGroup.name() + "\" is the last age group of variant \""
                    + ageGroup.variant() + "\", which is still used by: "
                    + String.join(", ", raceNamesUsing(racesOfSeason(ageGroup.seasonYear()), ageGroup.variant())));
        }
    }

    private boolean isLastOfUsedVariant(AgeGroup ageGroup) {
        if (AgeGroup.STANDARD_VARIANT.equals(ageGroup.variant())) {
            return false;
        }
        boolean last = repository.findBySeasonYearAndVariant(ageGroup.seasonYear(), ageGroup.variant()).size() == 1;
        return last && !raceNamesUsing(racesOfSeason(ageGroup.seasonYear()), ageGroup.variant()).isEmpty();
    }

    public AgeGroup createFromRequest(AgeGroupRequest request) {
        return new AgeGroup(
                null,
                request.name().trim(),
                request.seasonYear(),
                normalizeVariant(request.variant()),
                request.birthYearFrom(),
                request.birthYearTo(),
                request.gender()
        );
    }

    /**
     * Copies one variant's age groups to another season and/or variant. It serves two purposes:
     * <ul>
     *   <li>rolling a season over to the next one: the birth years are shifted by the difference
     *       between the two seasons, so "U14" 2012-2013 in 2025 becomes "U14" 2013-2014 in 2026.
     *       This is deliberately cheaper than editing the existing rows: editing them would
     *       re-categorise every race already run under them, which is exactly what
     *       {@link AgeGroup#seasonYear} exists to prevent;</li>
     *   <li>starting a new variant from an existing one within a season (shift 0), whose birth
     *       years are then re-cut by hand.</li>
     * </ul>
     * A shift is right for the rolling classes that make up virtually all of a club's setup (U14,
     * U16, "Herren allgemein"); a fixed-cohort class ("Jahrgang 2012") has to be corrected
     * afterwards - one sample of a season's config can't tell the two apart.
     *
     * @throws IllegalArgumentException if source and target are the same, or the target variant
     *                                  name is not allowed
     * @throws IllegalStateException    if the source has no age groups, or the target already has
     *                                  some - merging into a half-configured variant would have to
     *                                  guess which of two conflicting ranges wins
     */
    public List<AgeGroup> copyVariant(int fromSeason, String fromVariant, int toSeason, String toVariant) {
        if (fromSeason == toSeason && fromVariant.equals(toVariant)) {
            throw new IllegalArgumentException("Source and target must differ in season or variant");
        }
        assertValidVariantName(toSeason, toVariant);
        List<AgeGroup> source = repository.findBySeasonYearAndVariant(fromSeason, fromVariant);
        if (source.isEmpty()) {
            throw new IllegalStateException(describe(fromSeason, fromVariant) + " has no age groups to copy");
        }
        if (!repository.findBySeasonYearAndVariant(toSeason, toVariant).isEmpty()) {
            throw new IllegalStateException(describe(toSeason, toVariant) + " already has age groups");
        }

        int shift = toSeason - fromSeason;
        List<AgeGroup> copies = new ArrayList<>();
        for (AgeGroup ageGroup : source) {
            copies.add(new AgeGroup(
                    null,
                    ageGroup.name(),
                    toSeason,
                    toVariant,
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
     * {@code ageGroups} must be one season's and variant's groups ({@link #findBySeasonAndVariant}),
     * those of the race being looked at - passing several at once would match a person against
     * whichever ranges happen to come first.
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
     * Everything here is scoped to {@code seasonYear} and {@code variant}, the season and variant of
     * the race being imported into. That scoping is what keeps an import out of past seasons and
     * other variants: without it, importing a 2026 roster would find season 2025's "U14" (it covers
     * 2012 for males) and never create the 2026 one. A missing class is created in the race's
     * variant too, whichever it is - there is no "this variant is complete" state.
     * <p>
     * An import never changes an age group that already exists. There are exactly two outcomes:
     * <ol>
     *   <li>an <em>existing</em> group of this season already covers this birth year for this gender
     *       (a BOTH-gender group counts for either) - that one is returned, whatever it is named.
     *       This mirrors how {@link x.timecontrol.services.ParticipantService} resolves a person's
     *       class at read time (year in range AND gender matches, first one wins), so an import
     *       never creates a redundant "U14M" beside an existing "U14" (BOTH) that already covers
     *       this row;</li>
     *   <li>nothing covers it - a new group is created from this row's label, gender and birth
     *       year.</li>
     * </ol>
     * Widening an existing group's birth-year range used to be a third outcome. It is deliberately
     * gone: a season's classes are a configuration the operator set up (or rolled over with
     * {@link #copyVariant}), and a roster file must not reshape it. Widening re-categorises everyone
     * else of the affected birth year - including the other gender, when the widened group is a
     * BOTH one - in a season whose races may already have been run and published.
     *
     * @throws IllegalStateException if a group of this name already exists in this season but does
     *                               not cover this row (wrong birth year, wrong gender, or both).
     *                               It cannot be reused as it is, must not be changed, and a second
     *                               group under that name is impossible - age_group has
     *                               UNIQUE (name, season_year, variant) since V6. Only the operator can say
     *                               which side is wrong, so this is reported as a row error while
     *                               the rest of the file imports normally (see
     *                               ParticipantService#importRow).
     */
    public AgeGroup findOrCreateForImport(String rawLabel, int birthYear, Gender gender, int seasonYear, String variant) {
        List<AgeGroup> existingGroups = repository.findBySeasonYearAndVariant(seasonYear, variant);

        for (AgeGroup ageGroup : existingGroups) {
            boolean yearMatches = isYearInAgeGroup(ageGroup, birthYear);
            boolean genderMatches = ageGroup.gender() == gender || ageGroup.gender() == Gender.BOTH;
            if (yearMatches && genderMatches) {
                return ageGroup;
            }
        }

        String normalized = rawLabel.trim().toUpperCase();
        Optional<AgeGroup> nameClash = existingGroups.stream()
                .filter(ag -> ag.name().equalsIgnoreCase(normalized))
                .findFirst();
        if (nameClash.isPresent()) {
            // Getting here means the loop above found nothing covering this row, so this same-named
            // group necessarily does not apply to it - by birth year, by gender, or by both.
            AgeGroup clash = nameClash.get();
            throw new IllegalStateException("Age class \"" + clash.name() + "\" in " + describe(seasonYear, variant)
                    + " covers birth years " + clash.birthYearFrom() + "-" + clash.birthYearTo()
                    + " for gender " + clash.gender() + ", so it does not apply to this row (born "
                    + birthYear + ", " + gender + ") - correct the class in the file, or adjust that"
                    + " age class in the season's configuration");
        }

        return repository.save(new AgeGroup(null, normalized, seasonYear, variant, birthYear, birthYear, gender));
    }

    /** The races of one season, without their cover-page BLOBs. */
    private List<Race> racesOfSeason(int seasonYear) {
        return raceService.findBetweenWithoutCoverPage(
                seasonService.seasonStartDate(seasonYear), seasonService.seasonEndDate(seasonYear));
    }

    private static List<String> raceNamesUsing(List<Race> races, String variant) {
        List<String> names = new ArrayList<>();
        for (Race race : races) {
            if (race.ageGroupVariant().equals(variant)) {
                names.add(race.name());
            }
        }
        return names;
    }

    private static String describe(int seasonYear, String variant) {
        return AgeGroup.STANDARD_VARIANT.equals(variant)
                ? "season " + seasonYear
                : "variant \"" + variant + "\" of season " + seasonYear;
    }

    /**
     * @throws IllegalArgumentException if the variant is called "Standard" (in any case): that is
     *                                  what the UI shows for the real standard variant, and a second
     *                                  one under that label could not be told apart from it. Or if
     *                                  the season already has the variant under another spelling
     *                                  ("kinder" beside "Kinder"): two variants differing only in
     *                                  case would look like one in every selector.
     */
    private void assertValidVariantName(int seasonYear, String variant) {
        if (variant.equalsIgnoreCase(STANDARD_VARIANT_LABEL)) {
            throw new IllegalArgumentException("\"" + STANDARD_VARIANT_LABEL + "\" is reserved for the standard variant");
        }
        for (AgeGroup ageGroup : repository.findBySeasonYear(seasonYear)) {
            if (ageGroup.variant().equalsIgnoreCase(variant) && !ageGroup.variant().equals(variant)) {
                throw new IllegalArgumentException("Season " + seasonYear + " already has this variant as \""
                        + ageGroup.variant() + "\"");
            }
        }
    }

    /**
     * @throws IllegalStateException if another age group in the same season and variant already has
     *                                this name (case-insensitive). Scoped to both because the whole
     *                                point of seasons and variants is that "U14" exists once in each.
     */
    private void assertNameAvailable(String name, Integer seasonYear, String variant, Long excludeId) {
        Optional<AgeGroup> conflict = repository.findByNameIgnoreCaseAndSeasonYearAndVariant(name, seasonYear, variant);
        if (conflict.isPresent() && !conflict.get().id().equals(excludeId)) {
            throw new IllegalStateException("An age group named \"" + name + "\" already exists in " + describe(seasonYear, variant));
        }
    }

    /**
     * @throws IllegalStateException if another age group <em>of the same season and variant</em>
     *                                already covers an overlapping birth-year range for an
     *                                overlapping gender (BOTH overlaps with every gender), e.g.
     *                                creating "U14w" 2011-2012 while "U14" (BOTH) 2011-2012 already
     *                                exists. Comparing across seasons or variants would make both
     *                                impossible: season 2026's "U14" (2013-2014) necessarily
     *                                overlaps season 2025's (2012-2013) on 2013, and a variant
     *                                exists precisely to cut the same birth years differently.
     */
    private void assertNoOverlap(AgeGroup ageGroup, Long excludeId) {
        List<AgeGroup> existingGroups = repository.findBySeasonYearAndVariant(ageGroup.seasonYear(), ageGroup.variant());
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
                        + " for this gender in " + describe(ageGroup.seasonYear(), ageGroup.variant()));
            }
        }
    }
}
