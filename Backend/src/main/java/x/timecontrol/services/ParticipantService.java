package x.timecontrol.services;

import x.timecontrol.dto.AgeGroupResponse;
import x.timecontrol.dto.CategoryResponse;
import x.timecontrol.dto.ParticipantCopyResponse;
import x.timecontrol.dto.ParticipantImportFormat;
import x.timecontrol.dto.ParticipantImportPreviewResponse;
import x.timecontrol.dto.ParticipantImportRowError;
import x.timecontrol.dto.ParticipantResponse;
import x.timecontrol.dto.ParticipantResultImportPreviewResponse;
import x.timecontrol.dto.ParticipantResultImportRowError;
import x.timecontrol.dto.PersonResponse;
import x.timecontrol.dto.RaceResponse;
import x.timecontrol.dto.ResultTimeFormat;
import x.timecontrol.dto.StartGroupAssignmentRequest;
import x.timecontrol.dto.StartGroupTemplateResponse;
import x.timecontrol.dto.TeamResponse;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Category;
import x.timecontrol.entities.DisqualificationStatus;
import x.timecontrol.entities.Gender;
import x.timecontrol.entities.GaudiLosPairing;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Person;
import x.timecontrol.entities.Race;
import x.timecontrol.entities.RaceMeasurement;
import x.timecontrol.entities.ResultUnit;
import x.timecontrol.entities.StartGroupTemplate;
import x.timecontrol.entities.Team;
import x.timecontrol.repositories.GaudiLosPairingRepository;
import x.timecontrol.repositories.ParticipantRepository;
import io.micronaut.data.exceptions.DataAccessException;
import io.micronaut.transaction.TransactionOperations;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.time.LocalDate;
import java.time.MonthDay;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Singleton
public class ParticipantService {

    private static final Logger LOG = LoggerFactory.getLogger(ParticipantService.class);
    private static final int CSV_COLUMN_COUNT = 5;

    private final ParticipantRepository repository;
    private final AgeGroupService ageGroupService;
    private final SeasonService seasonService;
    private final RaceService raceService;
    private final TeamService teamService;
    private final CategoryService categoryService;
    private final PersonService personService;
    private final AutoAssignService autoAssignService;
    private final RankingService rankingService;
    private final StartGroupTemplateService startGroupTemplateService;
    private final TransactionOperations<Connection> transactionOperations;
    private final GaudiLosPairingRepository losPairingRepository;

    public ParticipantService(ParticipantRepository repository, AgeGroupService ageGroupService, SeasonService seasonService, RaceService raceService, TeamService teamService, CategoryService categoryService, PersonService personService, AutoAssignService autoAssignService, RankingService rankingService, StartGroupTemplateService startGroupTemplateService, TransactionOperations<Connection> transactionOperations, GaudiLosPairingRepository losPairingRepository) {
        this.repository = repository;
        this.ageGroupService = ageGroupService;
        this.seasonService = seasonService;
        this.raceService = raceService;
        this.teamService = teamService;
        this.categoryService = categoryService;
        this.personService = personService;
        this.autoAssignService = autoAssignService;
        this.rankingService = rankingService;
        this.startGroupTemplateService = startGroupTemplateService;
        this.transactionOperations = transactionOperations;
        this.losPairingRepository = losPairingRepository;
    }

    /**
     * @throws IllegalStateException if the race number (or, more rarely, a person-per-race
     *                                conflict slipped past {@link #validate}) collides with a row a
     *                                concurrent request just committed - the DB's unique indexes are
     *                                the actual guard against that race; this only translates the
     *                                resulting {@link DataAccessException} into the same clean 409
     *                                the pre-check above normally produces.
     */
    public Participant create(Participant participant) {
        validate(participant, null);
        Participant toSave = new Participant(participant.id(), participant.raceId(), participant.personId(), participant.raceNumber(),
                participant.teamId(), participant.categoryId(), participant.durationMs(), zeroPenaltyToNull(participant.penalty()),
                participant.measuredAt(), participant.comment(), resolveStatus(participant, DisqualificationStatus.NONE));
        try {
            return repository.save(toSave);
        } catch (DataAccessException e) {
            if (isUniqueConstraintViolation(e)) {
                throw new IllegalStateException("Race number or person is already assigned in this race", e);
            }
            throw e;
        }
    }

    private static Integer zeroPenaltyToNull(Integer penalty) {
        return penalty != null && penalty == 0 ? null : penalty;
    }

    public Iterable<Participant> findAll() {
        return repository.findAll();
    }

    public Optional<Participant> findById(Long id) {
        return repository.findById(id);
    }

    /**
     * @throws IllegalStateException if the race number collides with a row a concurrent request
     *                                just committed - see {@link #create} for why this is caught
     *                                here rather than left to surface as a raw 500.
     */
    public Optional<Participant> update(Long id, Participant participant) {
        Optional<Participant> existing = repository.findById(id);
        if (existing.isPresent()) {
            validate(participant, id);
            // durationMs/penalty/measuredAt/status/startSequence/startGroupId are omitted by most
            // update flows (e.g. editing name/team) and must not wipe out a time (or a DSQ/DNF/DNS
            // status, a derived start-order position, or a start-group assignment) that was already
            // assigned; only overwrite when provided. startSequence/startGroupId in particular are
            // never exposed in the participant edit form, so they must always fall through to "keep
            // existing" or every unrelated edit would silently clear them.
            Integer durationMs = participant.durationMs() != null ? participant.durationMs() : existing.get().durationMs();
            // An explicit 0 is how the edit form says "remove the penalty" (null already means "keep
            // existing" above) - stored as null so PDF/live views render "-" instead of "00:00,00".
            Integer penalty = participant.penalty() == null ? existing.get().penalty()
                    : participant.penalty() == 0 ? null : participant.penalty();
            var measuredAt = participant.measuredAt() != null ? participant.measuredAt() : existing.get().measuredAt();
            DisqualificationStatus status = resolveStatus(participant, existing.get().status());
            Integer startSequence = participant.startSequence() != null ? participant.startSequence() : existing.get().startSequence();
            Long startGroupId = existing.get().startGroupId();
            Participant updated = new Participant(id, participant.raceId(), participant.personId(), participant.raceNumber(), participant.teamId(), participant.categoryId(), durationMs, penalty, measuredAt, participant.comment(), status, startSequence, startGroupId);
            try {
                return Optional.of(repository.update(updated));
            } catch (DataAccessException e) {
                if (isUniqueConstraintViolation(e)) {
                    throw new IllegalStateException("Race number or person is already assigned in this race", e);
                }
                throw e;
            }
        }
        return Optional.empty();
    }

    /**
     * Resets a participant's result (durationMs/penalty/measuredAt to null) while leaving its
     * identity (race/person/raceNumber/team/category/startSequence) and its comment/status
     * untouched - the counterpart to {@link #update}'s deliberate "null means keep existing"
     * behaviour, which makes it impossible to actually clear an already-entered result through that
     * endpoint. No {@link #validate} call needed: identity fields are carried over unchanged from
     * the existing row, so neither a race-number collision nor any other validation failure is
     * possible here.
     */
    public Optional<Participant> clearResult(Long id) {
        Optional<Participant> existing = repository.findById(id);
        if (existing.isEmpty()) {
            return Optional.empty();
        }
        Participant cleared = new Participant(id, existing.get().raceId(), existing.get().personId(), existing.get().raceNumber(),
                existing.get().teamId(), existing.get().categoryId(), null, null, null, existing.get().comment(),
                existing.get().status(), existing.get().startSequence(), existing.get().startGroupId());
        return Optional.of(repository.update(cleared));
    }

    public record SyncMeasurementsResult(int synced, int skipped) {
    }

    /**
     * Batch-applies durationMs/measuredAt from a race's archived measurements onto their assigned
     * participants. Unlike {@link #update(Long, Participant)}, this intentionally skips
     * {@link #validate(Participant, Long)}: raceId/personId/teamId/categoryId/raceNumber are left
     * untouched here, so re-checking their existence and the race-number conflict for every row
     * (6+ extra queries per measurement in the previous per-row implementation, on top of a
     * findById() per measurement) is redundant - an already-persisted participant's FK references
     * are guaranteed valid, and nothing here can introduce a race-number collision.
     * Participants are batch-loaded and batch-written in one query each instead of one round trip
     * per measurement. A measurement with no participantId, one referencing a participant that no
     * longer exists, or a negative durationMs is skipped rather than aborting the whole sync -
     * mirroring the previous per-row behaviour where one bad row couldn't lose already-synced rows.
     */
    public SyncMeasurementsResult syncMeasurementsToParticipants(List<RaceMeasurement> raceMeasurements) {
        Set<Long> participantIds = raceMeasurements.stream()
                .map(RaceMeasurement::participantId)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());
        Map<Long, Participant> participantsById = new HashMap<>();
        for (Participant participant : repository.findByIdIn(participantIds)) {
            participantsById.put(participant.id(), participant);
        }

        List<Participant> toUpdate = new ArrayList<>();
        int skipped = 0;
        for (RaceMeasurement raceMeasurement : raceMeasurements) {
            if (raceMeasurement.participantId() == null || (raceMeasurement.durationMs() != null && raceMeasurement.durationMs() < 0)) {
                skipped++;
                continue;
            }
            Participant existing = participantsById.get(raceMeasurement.participantId());
            if (existing == null) {
                skipped++;
                continue;
            }
            toUpdate.add(new Participant(
                    existing.id(), existing.raceId(), existing.personId(), existing.raceNumber(),
                    existing.teamId(), existing.categoryId(), raceMeasurement.durationMs(), existing.penalty(), raceMeasurement.measuredAt(),
                    existing.comment(), existing.status(), existing.startSequence(), existing.startGroupId()
            ));
        }

        if (!toUpdate.isEmpty()) {
            repository.updateAll(toUpdate);
        }

        return new SyncMeasurementsResult(toUpdate.size(), skipped);
    }

    /**
     * @throws IllegalArgumentException if a required field is missing or references a non-existent entity
     * @throws IllegalStateException    if the race number is already assigned to another participant of the same race
     */
    private void validate(Participant participant, Long excludeParticipantId) {
        if (participant.raceId() == null) {
            throw new IllegalArgumentException("raceId is required");
        }
        if (participant.personId() == null) {
            throw new IllegalArgumentException("personId is required");
        }
        if (!raceService.existsById(participant.raceId())) {
            throw new IllegalArgumentException("Race with id " + participant.raceId() + " does not exist");
        }
        if (personService.findById(participant.personId()).isEmpty()) {
            throw new IllegalArgumentException("Person with id " + participant.personId() + " does not exist");
        }
        if (participant.teamId() != null && teamService.findById(participant.teamId()).isEmpty()) {
            throw new IllegalArgumentException("Team with id " + participant.teamId() + " does not exist");
        }
        if (participant.categoryId() != null && categoryService.findById(participant.categoryId()).isEmpty()) {
            throw new IllegalArgumentException("Category with id " + participant.categoryId() + " does not exist");
        }
        if (participant.raceNumber() != null) {
            Optional<Participant> conflict = repository.findByRaceIdAndRaceNumber(participant.raceId(), participant.raceNumber());
            if (conflict.isPresent() && !conflict.get().id().equals(excludeParticipantId)) {
                throw new IllegalStateException("Race number " + participant.raceNumber() + " is already assigned in this race");
            }
        }
        if (ValidationUtils.isNegative(participant.penalty())) {
            // RankingService.adjustedValue() applies the penalty directly (+/- depending on sort
            // direction) with no floor; a negative penalty can drive the adjusted value negative,
            // which formatTime()/formatDuration() render as garbled strings like "-1:-1.-500".
            throw new IllegalArgumentException("penalty must not be negative");
        }
        if (ValidationUtils.isNegative(participant.durationMs())) {
            // adjustedValue() floors the *adjusted* value at 0, but a negative raw duration would
            // still floor to 0 and rank that participant first/best - a garbled or malicious input
            // must be rejected here rather than silently winning the race.
            throw new IllegalArgumentException("durationMs must not be negative");
        }
        // Mirrors the dedupe rule copyParticipants() already enforces: a person may only take part
        // in a race once. Without this, the add/edit dialog could silently create a second entry
        // for the same person in the same race.
        Optional<Participant> personConflict = repository.findByRaceIdAndPersonId(participant.raceId(), participant.personId());
        if (personConflict.isPresent() && !personConflict.get().id().equals(excludeParticipantId)) {
            throw new IllegalStateException("This person is already a participant of this race");
        }
    }

    /**
     * Deleting a participant must not take their Los-Modus partner down with them: the pairing's FKs
     * are ON DELETE CASCADE, which would silently drop the whole pair (and with it the partner, who
     * may well have raced) from the Los ranking. The deleted participant is removed from each of
     * their pairings first instead, leaving the partner as a single ("Einzel") pairing - which
     * LosModeCalculator already ranks - and only a pairing with nobody left is deleted.
     */
    public void delete(Long id) {
        transactionOperations.executeWrite(_ -> {
            for (GaudiLosPairing pairing : losPairingRepository.findByParticipant1IdOrParticipant2Id(id, id)) {
                Long partnerId = id.equals(pairing.participant1Id()) ? pairing.participant2Id() : pairing.participant1Id();
                if (partnerId == null) {
                    losPairingRepository.deleteById(pairing.id());
                } else {
                    losPairingRepository.update(new GaudiLosPairing(pairing.id(), pairing.gaudiModeId(), partnerId, null));
                }
            }
            repository.deleteById(id);
            return null;
        });
    }

    /**
     * The age groups that apply to one race: those configured for the season the race's date falls
     * into (see {@link SeasonService}). Never "all age groups" - an age class rolls over every
     * year, so several seasons' rows describe the same class with different birth years and
     * matching a person against all of them at once would pick whichever season came first.
     */
    private List<AgeGroup> ageGroupsForRace(Race race) {
        return ageGroupService.findBySeason(seasonService.seasonOf(race));
    }

    private Race requireRace(Long raceId) {
        return raceService.findById(raceId)
                .orElseThrow(() -> new IllegalArgumentException("Race with id " + raceId + " does not exist"));
    }

    private Optional<AgeGroup> findMatchingAgeGroup(Person person, List<AgeGroup> ageGroups) {
        if (person.birthDate() == null) {
            return Optional.empty();
        }

        int birthYear = person.birthDate().getYear();

        for (AgeGroup ageGroup : ageGroups) {
            boolean yearMatches = ageGroupService.isYearInAgeGroup(ageGroup, birthYear);
            boolean genderMatches = ageGroup.gender() == person.gender() ||
                                   ageGroup.gender() == Gender.BOTH;

            if (yearMatches && genderMatches) {
                return Optional.of(ageGroup);
            }
        }

        return Optional.empty();
    }

    /**
     * Identifies one ordered bucket in {@link #groupByAgeGroup}: a single age group's participants
     * of one gender. {@code ageGroupId == null} is the catch-all "no matching age group" bucket
     * ({@code gender} unused/null in that case).
     */
    private record AgeGroupBucketKey(Long ageGroupId, Gender gender) {
        private static final AgeGroupBucketKey NO_AGE_GROUP = new AgeGroupBucketKey(null, null);
    }

    /**
     * Groups participants by their computed age group (from birthDate/gender via
     * {@link #findMatchingAgeGroup}) and then by the participant's own gender within that age
     * group - youngest age group first (by birthYearTo descending, with age groups sharing the
     * same birthYearTo, e.g. a same-Jahrgang "U14m"/"U14w" pair, tie-broken by the age group's own
     * gender), female participants before male participants within each age group. This
     * gender split matters even for a single mixed-gender ("BOTH") age group - e.g. a club's only
     * "U16" age group covering both boys and girls - since without it, per-age-group ranking/start
     * order would rank and reverse boys and girls together as one field instead of as two separate
     * fields, matching the female-before-male convention used throughout {@link PdfExportService}.
     * A no-age-group bucket ({@link AgeGroupBucketKey#NO_AGE_GROUP}) for participants without a
     * matching age group is appended last. Shared by {@link #assignRaceNumbers} (random shuffle
     * within each bucket) and {@link #applyStartOrderFromPreviousRace} (per-bucket reversal), so
     * the ordering convention can't drift between the two. {@code personsById} is caller-provided
     * since both callers already need to batch-load it for other purposes too.
     */
    private Map<AgeGroupBucketKey, List<Participant>> groupByAgeGroup(List<Participant> participants, Map<Long, Person> personsById, int seasonYear) {
        List<AgeGroup> ageGroups = ageGroupService.findBySeason(seasonYear).stream()
                .sorted(Comparator.comparing(AgeGroup::birthYearTo).reversed()
                        .thenComparing(AgeGroup::gender))
                .toList();

        Map<AgeGroupBucketKey, List<Participant>> byAgeGroup = new LinkedHashMap<>();
        for (AgeGroup ageGroup : ageGroups) {
            for (Gender gender : List.of(Gender.FEMALE, Gender.MALE)) {
                byAgeGroup.put(new AgeGroupBucketKey(ageGroup.id(), gender), new ArrayList<>());
            }
        }
        byAgeGroup.put(AgeGroupBucketKey.NO_AGE_GROUP, new ArrayList<>());

        for (Participant participant : participants) {
            Person person = participant.personId() != null ? personsById.get(participant.personId()) : null;
            Optional<AgeGroup> ageGroup = person != null ? findMatchingAgeGroup(person, ageGroups) : Optional.empty();
            AgeGroupBucketKey key = ageGroup.isPresent()
                    ? new AgeGroupBucketKey(ageGroup.get().id(), person.gender())
                    : AgeGroupBucketKey.NO_AGE_GROUP;
            byAgeGroup.get(key).add(participant);
        }
        return byAgeGroup;
    }

    /**
     * Builds response DTOs for a batch of participants, batch-loading each referenced
     * race/person/team/category once instead of issuing one lookup per participant per
     * relation (the previous per-participant approach did 5+ queries per row).
     */
    public List<ParticipantResponse> toResponses(List<Participant> participants) {
        Set<Long> raceIds = new HashSet<>();
        Set<Long> personIds = new HashSet<>();
        Set<Long> teamIds = new HashSet<>();
        Set<Long> categoryIds = new HashSet<>();
        Set<Long> startGroupIds = new HashSet<>();
        for (Participant p : participants) {
            if (p.raceId() != null) raceIds.add(p.raceId());
            if (p.personId() != null) personIds.add(p.personId());
            if (p.teamId() != null) teamIds.add(p.teamId());
            if (p.categoryId() != null) categoryIds.add(p.categoryId());
            if (p.startGroupId() != null) startGroupIds.add(p.startGroupId());
        }

        Map<Long, Race> racesById = raceService.findByIds(raceIds);
        Map<Long, Person> personsById = personService.findByIds(personIds);
        Map<Long, Team> teamsById = teamService.findByIds(teamIds);
        Map<Long, Category> categoriesById = categoryService.findByIds(categoryIds);
        Map<Long, StartGroupTemplate> startGroupsById = startGroupTemplateService.findByIds(startGroupIds);
        // A batch can span races of different seasons (the roster of one race never does, but
        // cross-race callers exist), and each race has to be categorised against its own season's
        // age groups. Resolved once per race up front and keyed by race id, so the per-participant
        // loop below is a plain map lookup: deriving the season per participant would re-read the
        // settings row (SeasonService#seasonStart) once for every row in the batch.
        Map<Integer, List<AgeGroup>> ageGroupsBySeason = new HashMap<>();
        Map<Long, List<AgeGroup>> ageGroupsByRaceId = new HashMap<>();
        Map<Long, Integer> seasonByRaceId = new HashMap<>();
        MonthDay seasonStart = seasonService.seasonStart();
        for (Race race : racesById.values()) {
            int season = seasonService.seasonOf(race.date(), seasonStart);
            seasonByRaceId.put(race.id(), season);
            ageGroupsByRaceId.put(race.id(),
                    ageGroupsBySeason.computeIfAbsent(season, ageGroupService::findBySeason));
        }

        List<ParticipantResponse> result = new ArrayList<>();
        for (Participant p : participants) {
            Race race = p.raceId() != null ? racesById.get(p.raceId()) : null;
            Person person = p.personId() != null ? personsById.get(p.personId()) : null;
            Team team = p.teamId() != null ? teamsById.get(p.teamId()) : null;
            Category category = p.categoryId() != null ? categoriesById.get(p.categoryId()) : null;
            // No race (deleted out from under the participant) means no season to categorise
            // against, so no age group - the same "nothing matched" outcome the caller already
            // handles for a person whose birth year fits no configured group.
            List<AgeGroup> ageGroups = race != null
                    ? ageGroupsByRaceId.getOrDefault(race.id(), List.of())
                    : List.of();
            AgeGroup ageGroup = person != null ? findMatchingAgeGroup(person, ageGroups).orElse(null) : null;
            StartGroupTemplate startGroup = p.startGroupId() != null ? startGroupsById.get(p.startGroupId()) : null;

            result.add(ParticipantResponse.from(
                    p,
                    person != null ? PersonResponse.from(person) : null,
                    race != null ? RaceResponse.from(race, seasonByRaceId.get(race.id())) : null,
                    team != null ? TeamResponse.from(team) : null,
                    category != null ? CategoryResponse.from(category) : null,
                    ageGroup != null ? AgeGroupResponse.from(ageGroup) : null,
                    startGroup != null ? StartGroupTemplateResponse.from(startGroup) : null
            ));
        }
        return result;
    }

    public Iterable<Participant> findByRaceId(Long raceId) {
        return repository.findByRaceId(raceId);
    }

    /**
     * @throws IllegalStateException if auto-assign is running for this race - the same guard
     *                               {@link #applyStartGroupAssignment} and
     *                               {@link #copyStartGroupAssignment} apply, and for a stronger
     *                               reason: auto-assign holds a cursor on a race number and is
     *                               matching incoming finish times to it. Deleting the roster
     *                               underneath it leaves that cursor pointing at a participant that
     *                               no longer exists, and the times arriving in the meantime are
     *                               silently dropped instead of being recorded anywhere.
     */
    public void deleteByRaceId(Long raceId) {
        requireAutoAssignInactive(raceId);
        repository.deleteByRaceId(raceId);
    }

    /**
     * Copies every participant of {@code sourceRaceId} into each of {@code targetRaceIds}, carrying
     * over personId/teamId/categoryId/comment and the start-group assignment (startGroupId +
     * startSequence) but leaving durationMs/penalty/measuredAt empty (each race measures its own
     * result). raceNumber is carried over only if {@code carryStartNumber} is true and the number
     * isn't already taken in the target race (to avoid duplicate start numbers); it is left empty
     * otherwise. A startSequence already taken in the target race is dropped together with its
     * startGroupId, the same way {@link #copyStartGroupAssignment} treats a lost position. Only a DNS
     * status is carried over - DNF/DSQ describe what happened in the source race itself and never
     * apply to another one. A person already present in a target race is skipped rather than
     * duplicated.
     */
    public ParticipantCopyResponse copyParticipants(Long sourceRaceId, List<Long> targetRaceIds, boolean carryStartNumber) {
        // Now that PRAGMA foreign_keys=ON is enabled, saving a participant for a race that doesn't
        // exist would otherwise throw a raw FK-constraint exception straight out of repository.save()
        // instead of a clean, caught error.
        if (!raceService.existsById(sourceRaceId)) {
            throw new IllegalArgumentException("Race with id " + sourceRaceId + " does not exist");
        }
        for (Long targetRaceId : targetRaceIds) {
            if (!raceService.existsById(targetRaceId)) {
                throw new IllegalArgumentException("Race with id " + targetRaceId + " does not exist");
            }
        }

        List<Participant> sourceParticipants = StreamSupport
                .stream(repository.findByRaceId(sourceRaceId).spliterator(), false)
                .toList();

        // Wrapped as one transaction so a failure partway through (e.g. target race #3 of 5 hitting
        // a real, non-uniqueness DataAccessException) rolls back every already-copied target race
        // instead of leaving the caller with a confusing, undocumented partial copy.
        return transactionOperations.executeWrite(_ -> {
            int copied = 0;
            int skipped = 0;
            for (Long targetRaceId : targetRaceIds) {
                List<Participant> targetParticipants = StreamSupport
                        .stream(repository.findByRaceId(targetRaceId).spliterator(), false)
                        .toList();
                Set<Long> existingPersonIds = targetParticipants.stream()
                        .map(Participant::personId)
                        .collect(Collectors.toSet());
                Set<Integer> existingRaceNumbers = targetParticipants.stream()
                        .map(Participant::raceNumber)
                        .filter(Objects::nonNull)
                        .collect(Collectors.toSet());
                Set<Integer> existingStartSequences = targetParticipants.stream()
                        .map(Participant::startSequence)
                        .filter(Objects::nonNull)
                        .collect(Collectors.toSet());

                for (Participant source : sourceParticipants) {
                    if (existingPersonIds.contains(source.personId())) {
                        skipped++;
                        continue;
                    }
                    Integer raceNumber = null;
                    if (carryStartNumber && source.raceNumber() != null && !existingRaceNumbers.contains(source.raceNumber())) {
                        raceNumber = source.raceNumber();
                    }
                    Integer startSequence = source.startSequence();
                    Long startGroupId = source.startGroupId();
                    if (startSequence != null && existingStartSequences.contains(startSequence)) {
                        // Losing its position also drops its group, or it would keep showing in that
                        // group's column/start list while sorting outside the group's block.
                        startSequence = null;
                        startGroupId = null;
                    }
                    DisqualificationStatus status = source.status() == DisqualificationStatus.DNS
                            ? DisqualificationStatus.DNS
                            : DisqualificationStatus.NONE;
                    try {
                        repository.save(new Participant(null, targetRaceId, source.personId(), raceNumber,
                                source.teamId(), source.categoryId(), null, null, null, source.comment(),
                                status, startSequence, startGroupId));
                    } catch (DataAccessException e) {
                        // existingRaceNumbers/existingStartSequences are snapshots taken before this
                        // loop started - they can be stale if another request concurrently claimed this
                        // race number or start position in the same target race. Fall back to neither
                        // for this participant instead of aborting the rest of the copy over a single
                        // collision.
                        if ((raceNumber == null && startSequence == null) || !isUniqueConstraintViolation(e)) {
                            throw e;
                        }
                        repository.save(new Participant(null, targetRaceId, source.personId(), null,
                                source.teamId(), source.categoryId(), null, null, null, source.comment(),
                                status, null, null));
                        raceNumber = null;
                        startSequence = null;
                    }
                    if (raceNumber != null) {
                        existingRaceNumbers.add(raceNumber);
                    }
                    if (startSequence != null) {
                        existingStartSequences.add(startSequence);
                    }
                    existingPersonIds.add(source.personId());
                    copied++;
                }
            }

            return new ParticipantCopyResponse(copied, skipped);
        });
    }

    private static boolean isUniqueConstraintViolation(DataAccessException e) {
        Throwable cause = e;
        while (cause.getCause() != null && cause.getCause() != cause) {
            cause = cause.getCause();
        }
        String message = cause.getMessage();
        return message != null && message.toLowerCase().contains("unique constraint");
    }

    /**
     * Randomly assigns race numbers 1..n to all participants of a race, shuffled
     * within each age group; participants without a matching age group are appended
     * at the end, ordered by ascending age (youngest first).
     *
     * @throws IllegalStateException if live auto-assign mode is currently active for this race -
     * see {@link AutoAssignService#isActiveFor}.
     */
    public List<Participant> assignRaceNumbers(Long raceId) {
        if (autoAssignService.isActiveFor(raceId)) {
            throw new IllegalStateException("Auto-assign mode is active for this race. Disable it before reassigning race numbers.");
        }
        List<Participant> participants = StreamSupport.stream(repository.findByRaceId(raceId).spliterator(), false).toList();

        Set<Long> personIds = participants.stream().map(Participant::personId).filter(Objects::nonNull).collect(Collectors.toSet());
        Map<Long, Person> personsById = personService.findByIds(personIds);
        Map<AgeGroupBucketKey, List<Participant>> byAgeGroup =
                groupByAgeGroup(participants, personsById, seasonService.seasonOf(requireRace(raceId)));

        Random random = new Random();
        List<Participant> ordered = new ArrayList<>();
        for (Map.Entry<AgeGroupBucketKey, List<Participant>> entry : byAgeGroup.entrySet()) {
            if (entry.getKey().equals(AgeGroupBucketKey.NO_AGE_GROUP)) {
                continue; // handled separately below, sorted by birthdate instead of shuffled
            }
            List<Participant> group = entry.getValue();
            Collections.shuffle(group, random);
            ordered.addAll(group);
        }

        List<Participant> withoutAgeGroup = byAgeGroup.get(AgeGroupBucketKey.NO_AGE_GROUP);
        withoutAgeGroup.sort(Comparator.comparing(
                (Participant p) -> {
                    Person person = personsById.get(p.personId());
                    return person != null ? person.birthDate() : null;
                },
                Comparator.nullsLast(Comparator.reverseOrder())));
        ordered.addAll(withoutAgeGroup);

        return renumberSequentially(ordered);
    }

    /**
     * Derives the {@code startSequence} (start ORDER, never the {@code raceNumber} bib itself -
     * see the field's own doc on {@link Participant}) for {@code raceId} from the ranking of its
     * linked {@link Race#previousRaceId()} race: per age group (computed from birthDate/gender,
     * same convention as {@link #assignRaceNumbers} - youngest age group first, gender-tie-broken
     * female before male, participants without a matching age group grouped last; {@code Category}
     * plays no role here at all,
     * independent of the reversal), the top {@link Race#startOrderReverseTopCount()} placed
     * finishers of the previous race start in reverse order, followed by the rest of that age
     * group in normal placement order - e.g. a slalom run 2 start order built from run 1's
     * results, where bib 30 can end up starting before bib 5. Only participants entered in *both*
     * races are reordered this way; a
     * participant of this race whose person wasn't reordered (not in the previous race) is
     * appended last, keeping their current relative race-number order rather than being dropped.
     * <p>
     * A previous-race participant with no result (DSQ/DNF/DNS, or simply not yet measured) is
     * either appended at the end of their age group's block ({@code includeUnranked=true}) or
     * excluded from this race's start order entirely and marked
     * {@link DisqualificationStatus#DNS} here ({@code includeUnranked=false}) - they didn't start
     * the previous race, so they don't start this one either.
     * <p>
     * If the previous race has no results at all yet, every one of its participants counts as
     * "no result", so the derived order falls back to the previous race's own race-number order
     * (or, with includeUnranked=false, nobody is ordered at all) - calling this before the linked
     * race is actually finished produces a start order that isn't actually reversed by result.
     * <p>
     * {@link AutoAssignService} picks this up automatically: it matches incoming measurements by
     * startSequence when a participant has one, falling back to raceNumber otherwise, so this
     * method needs no separate wiring into auto-assign.
     *
     * @throws IllegalArgumentException if the race (or its linked previous race) doesn't exist, or
     *                                   the race has no previousRaceId set
     * @throws IllegalStateException    if live auto-assign mode is currently active for this race -
     *                                   see {@link AutoAssignService#isActiveFor}.
     */
    public List<Participant> applyStartOrderFromPreviousRace(Long raceId, boolean includeUnranked) {
        Race race = raceService.findById(raceId)
                .orElseThrow(() -> new IllegalArgumentException("Race with id " + raceId + " does not exist"));
        if (race.previousRaceId() == null) {
            throw new IllegalArgumentException("Race " + raceId + " has no linked previous race");
        }
        if (autoAssignService.isActiveFor(raceId)) {
            throw new IllegalStateException("Auto-assign mode is active for this race. Disable it before changing the start order.");
        }
        Race previousRace = raceService.findById(race.previousRaceId())
                .orElseThrow(() -> new IllegalArgumentException("Linked race with id " + race.previousRaceId() + " does not exist"));

        List<Participant> previousParticipants = StreamSupport.stream(repository.findByRaceId(previousRace.id()).spliterator(), false).toList();
        List<Participant> targetParticipants = StreamSupport.stream(repository.findByRaceId(raceId).spliterator(), false).toList();
        // This derives a fresh startSequence for the whole race purely from previous-race
        // placement, with no awareness of start-group membership - running it on a race that
        // already has a start-group assignment (see applyStartGroupAssignment) would scramble each
        // group's block order, and the board's own next "Speichern" would then silently overwrite
        // this method's carefully-computed order with a naive walk of the now-scrambled columns.
        // The two features are for different race formats (individual-start reordering vs.
        // block-start groups) and were never meant to be combined on the same race.
        if (targetParticipants.stream().anyMatch(p -> p.startGroupId() != null)) {
            throw new IllegalStateException("This race already has a start-group assignment. Remove it before deriving the start order from a previous race.");
        }
        // (a, b) -> a: if the same person was somehow entered twice in the target race (shouldn't
        // happen, race_id+person_id is unique), keep the first rather than failing the whole reorder.
        Map<Long, Participant> targetByPersonId = targetParticipants.stream()
                .collect(Collectors.toMap(Participant::personId, p -> p, (a, _) -> a));

        int reverseTopCount = race.startOrderReverseTopCount() != null ? Math.max(0, race.startOrderReverseTopCount()) : 0;

        // Grouped and reversed per age group, independent of Category - see groupByAgeGroup for
        // the shared ordering convention (youngest age group first, female before male, no-match
        // bucket last).
        Set<Long> previousPersonIds = previousParticipants.stream().map(Participant::personId).filter(Objects::nonNull).collect(Collectors.toSet());
        Map<Long, Person> previousPersonsById = personService.findByIds(previousPersonIds);
        // Bucketed against the *target* race's season, not the previous race's: the order computed
        // here becomes that race's start order and has to line up with the age-group sections its
        // own start list and rankings print. Two runs of the same event are in the same season
        // anyway; this only matters if they were ever split across the season boundary.
        Map<AgeGroupBucketKey, List<Participant>> byAgeGroup =
                groupByAgeGroup(previousParticipants, previousPersonsById, seasonService.seasonOf(race));

        List<Participant> ordered = new ArrayList<>();
        Set<Long> matchedPersonIds = new HashSet<>();
        // Previous-race participants with no result, deliberately excluded via includeUnranked=false:
        // their target-race counterpart (if any) is collected here so it can be marked DNS and its
        // stale start sequence cleared below, instead of silently getting a start position anyway.
        List<Participant> excludedTargets = new ArrayList<>();

        for (List<Participant> group : byAgeGroup.values()) {
            if (group.isEmpty()) {
                continue;
            }
            Map<Long, Integer> places = rankingService.computePlaces(previousRace, group);

            List<Participant> ranked = new ArrayList<>(group.stream()
                    .filter(p -> places.containsKey(p.id()))
                    .sorted(Comparator.comparing(p -> places.get(p.id())))
                    .toList());
            // Cut by PLACE VALUE, not raw index: two participants tied for the same "1224" place
            // (e.g. both placed 15th on an identical time) must move together, never split across
            // the reversed/normal boundary just because of arbitrary list order.
            int splitIndex = Math.min(reverseTopCount, ranked.size());
            if (splitIndex > 0 && splitIndex < ranked.size()) {
                int cutoffPlace = places.get(ranked.get(splitIndex - 1).id());
                while (splitIndex < ranked.size() && places.get(ranked.get(splitIndex).id()) == cutoffPlace) {
                    splitIndex++;
                }
            }
            List<Participant> top = new ArrayList<>(ranked.subList(0, splitIndex));
            Collections.reverse(top);

            List<Participant> ageGroupBlock = new ArrayList<>(top);
            ageGroupBlock.addAll(ranked.subList(splitIndex, ranked.size()));

            List<Participant> unranked = group.stream()
                    .filter(p -> !places.containsKey(p.id()))
                    .sorted(Comparator.comparing(Participant::raceNumber, Comparator.nullsLast(Comparator.naturalOrder())))
                    .toList();
            if (includeUnranked) {
                ageGroupBlock.addAll(unranked);
            } else {
                for (Participant p : unranked) {
                    Participant target = targetByPersonId.get(p.personId());
                    if (target != null) {
                        excludedTargets.add(target);
                    }
                }
            }

            for (Participant sourceParticipant : ageGroupBlock) {
                Participant target = targetByPersonId.get(sourceParticipant.personId());
                if (target != null && matchedPersonIds.add(sourceParticipant.personId())) {
                    ordered.add(target);
                }
            }
        }

        // Participants of this race whose person wasn't part of the previous race at all (not
        // excluded, just never entered there) still need a start position - appended last, keeping
        // their current relative race-number order rather than being silently dropped.
        Set<Long> excludedPersonIds = excludedTargets.stream().map(Participant::personId).collect(Collectors.toSet());
        List<Participant> unmatched = targetParticipants.stream()
                .filter(p -> !matchedPersonIds.contains(p.personId()) && !excludedPersonIds.contains(p.personId()))
                .sorted(Comparator.comparing(Participant::raceNumber, Comparator.nullsLast(Comparator.naturalOrder())))
                .toList();
        ordered.addAll(unmatched);

        return applyStartSequence(ordered, excludedTargets);
    }

    /**
     * Applies a start-group assignment (startGroupId + the resulting startSequence, e.g. group A's
     * members get 1..28, group B's 29..55, ...) to a race's participants. Only participants listed
     * in {@code assignments} are touched - anyone left out keeps their current startGroupId/
     * startSequence untouched. Assumes the caller (the start-group board) sends the complete set of
     * participants whose startSequence is relevant right now (assigned or still unassigned) in one
     * call, the same assumption {@link #applyStartSequence} already makes for its own caller -
     * touched participants are cleared to a null startSequence first (same reasoning as
     * {@link #applyStartSequence}: dodges the {@code (race_id, start_sequence)} unique index
     * colliding with a not-yet-updated row still holding a value about to be handed to someone
     * else), so a partial request that leaves an untouched participant holding a
     * soon-to-be-reused startSequence can still fail with a uniqueness conflict.
     *
     * @throws IllegalArgumentException if a participantId doesn't belong to {@code raceId}, or a
     *                                    referenced start-group template doesn't exist
     * @throws IllegalStateException    if live auto-assign mode is currently active for this race
     */
    public List<Participant> applyStartGroupAssignment(Long raceId, List<StartGroupAssignmentRequest.Entry> assignments) {
        requireAutoAssignInactive(raceId);
        Set<Long> participantIds = assignments.stream().map(StartGroupAssignmentRequest.Entry::participantId).collect(Collectors.toSet());
        Map<Long, Participant> existingById = new HashMap<>();
        for (Participant participant : repository.findByIdIn(participantIds)) {
            if (!Objects.equals(participant.raceId(), raceId)) {
                throw new IllegalArgumentException("Participant " + participant.id() + " does not belong to race " + raceId);
            }
            existingById.put(participant.id(), participant);
        }
        for (Long participantId : participantIds) {
            if (!existingById.containsKey(participantId)) {
                throw new IllegalArgumentException("Participant with id " + participantId + " does not exist");
            }
        }
        Set<Long> startGroupIds = assignments.stream().map(StartGroupAssignmentRequest.Entry::startGroupId).filter(Objects::nonNull).collect(Collectors.toSet());
        Map<Long, StartGroupTemplate> templatesById = startGroupTemplateService.findByIds(startGroupIds);
        for (Long startGroupId : startGroupIds) {
            if (!templatesById.containsKey(startGroupId)) {
                throw new IllegalArgumentException("Start-group template with id " + startGroupId + " does not exist");
            }
        }

        return transactionOperations.executeWrite(_ -> {
            for (Participant participant : existingById.values()) {
                clearStartSequenceIfSet(participant);
            }
            List<Participant> result = new ArrayList<>();
            for (StartGroupAssignmentRequest.Entry entry : assignments) {
                Participant participant = existingById.get(entry.participantId());
                result.add(repository.update(withStartGroupAndSequence(participant, entry.startGroupId(), entry.startSequence())));
            }
            return result;
        });
    }

    /**
     * Copies a race's start-group assignment (startGroupId + startSequence) into one or more other
     * races, matched by personId - mirrors the "only participants entered in both races are
     * reordered, everyone else keeps their current state" rule {@link #applyStartOrderFromPreviousRace}
     * already uses. A target race's participant whose person isn't in the source race keeps its
     * current assignment untouched - including when the two races have different rosters
     * entirely (e.g. late registrations only in one of them): the unmatched majority is simply
     * left alone, and only the actually-shared persons get the group/sequence copied over
     * verbatim (gaps in the resulting startSequence numbering are harmless - every consumer sorts
     * by it, never displays the raw number). The one case handled explicitly is an unmatched
     * target participant whose own leftover startSequence happens to collide with a value being
     * copied in for someone else - it's cleared too, or the write below would fail outright on the
     * {@code (race_id, start_sequence)} unique index.
     *
     * @throws IllegalArgumentException if the source race or any target race doesn't exist
     * @throws IllegalStateException    if live auto-assign mode is currently active for any target race
     */
    public List<Participant> copyStartGroupAssignment(Long sourceRaceId, List<Long> targetRaceIds) {
        if (!raceService.existsById(sourceRaceId)) {
            throw new IllegalArgumentException("Race with id " + sourceRaceId + " does not exist");
        }
        for (Long targetRaceId : targetRaceIds) {
            if (!raceService.existsById(targetRaceId)) {
                throw new IllegalArgumentException("Race with id " + targetRaceId + " does not exist");
            }
            requireAutoAssignInactive(targetRaceId);
        }

        List<Participant> sourceParticipants = StreamSupport.stream(repository.findByRaceId(sourceRaceId).spliterator(), false).toList();
        Map<Long, Participant> sourceByPersonId = sourceParticipants.stream()
                .collect(Collectors.toMap(Participant::personId, p -> p, (a, _) -> a));

        return transactionOperations.executeWrite(_ -> {
            // Every target participant is returned (not just the ones actually copied into),
            // matching applyStartGroupAssignment's shape - the frontend merges whatever comes back
            // into its own participants array by id, so a target race someone happens to be
            // viewing reflects the copy immediately instead of showing stale pre-copy data until a
            // manual reload.
            List<Participant> allUpdated = new ArrayList<>();
            for (Long targetRaceId : targetRaceIds) {
                List<Participant> targetParticipants = StreamSupport.stream(repository.findByRaceId(targetRaceId).spliterator(), false).toList();
                // The source and target race can have different rosters (e.g. late registrations
                // only in one of them), so a copied-in startSequence value can coincide with an
                // untouched, unmatched target participant's own leftover value from some earlier,
                // unrelated assignment - collect those up front so the clear-then-reassign pass
                // below can null them out too, not just the matched participants, or the second
                // pass's write would fail outright on the (race_id, start_sequence) unique index.
                Set<Integer> incomingSequences = targetParticipants.stream()
                        .map(t -> sourceByPersonId.get(t.personId()))
                        .filter(Objects::nonNull)
                        .map(Participant::startSequence)
                        .filter(Objects::nonNull)
                        .collect(Collectors.toSet());
                // Tracks each target's current state through the clear pass below, so a
                // cleared-but-unmatched participant is returned with its actual (nulled)
                // startSequence instead of the stale pre-clear value. Both passes below batch
                // their writes via updateAll instead of one repository.update() per participant.
                Map<Long, Participant> currentById = new HashMap<>();
                List<Participant> toClear = new ArrayList<>();
                for (Participant target : targetParticipants) {
                    boolean matched = sourceByPersonId.containsKey(target.personId());
                    boolean collidesWithIncoming = !matched && target.startSequence() != null && incomingSequences.contains(target.startSequence());
                    if (collidesWithIncoming) {
                        // Losing its position also drops its group, or it would keep showing in
                        // that group's column/start list while sorting outside the group's block.
                        toClear.add(withStartGroupAndSequence(target, null, null));
                    } else if (matched && target.startSequence() != null) {
                        toClear.add(withStartSequence(target, null));
                    } else {
                        currentById.put(target.id(), target);
                    }
                }
                if (!toClear.isEmpty()) {
                    for (Participant cleared : repository.updateAll(toClear)) {
                        currentById.put(cleared.id(), cleared);
                    }
                }

                List<Participant> toAssign = new ArrayList<>();
                for (Participant target : targetParticipants) {
                    Participant source = sourceByPersonId.get(target.personId());
                    if (source != null) {
                        toAssign.add(withStartGroupAndSequence(currentById.get(target.id()), source.startGroupId(), source.startSequence()));
                    }
                }
                Map<Long, Participant> assignedById = new HashMap<>();
                if (!toAssign.isEmpty()) {
                    for (Participant assigned : repository.updateAll(toAssign)) {
                        assignedById.put(assigned.id(), assigned);
                    }
                }
                for (Participant target : targetParticipants) {
                    Participant assigned = assignedById.get(target.id());
                    allUpdated.add(assigned != null ? assigned : currentById.get(target.id()));
                }
            }
            return allUpdated;
        });
    }

    /**
     * Assigns race numbers (bibs) 1..n sequentially from a race's current start order -
     * {@code startSequence} when set (the board already writes it out as one continuous sequence
     * across every group in their on-screen order - see {@link #applyStartGroupAssignment} - so it
     * alone already reflects the intended group order; a group's own
     * {@link StartGroupTemplate#position()} is only that template's *default* position for a
     * brand-new assignment and must not be consulted here, or a group reordered on the board after
     * its last save would silently renumber back to the template's global position), falling back
     * to raceNumber for anyone without one. Neither startGroupId nor startSequence are touched by
     * this - only raceNumber, via the same clear-then-reassign {@link #renumberSequentially} used
     * by {@link #assignRaceNumbers}.
     *
     * @throws IllegalStateException if any participant of the race already has a result
     *                                 (durationMs/measuredAt set) - renumbering afterwards would
     *                                 break already-recorded measurement-to-participant matching.
     */
    public List<Participant> generateRaceNumbersFromStartGroups(Long raceId) {
        List<Participant> participants = StreamSupport.stream(repository.findByRaceId(raceId).spliterator(), false).toList();
        boolean hasResults = participants.stream().anyMatch(p -> p.durationMs() != null || p.measuredAt() != null);
        if (hasResults) {
            throw new IllegalStateException("This race already has results. Assigning race numbers from the start-group order would break existing measurement assignments.");
        }

        List<Participant> ordered = participants.stream()
                .sorted(Comparator
                        .comparing((Participant p) -> p.startSequence() != null ? p.startSequence() : Integer.MAX_VALUE)
                        .thenComparing(Participant::raceNumber, Comparator.nullsLast(Comparator.naturalOrder())))
                .toList();

        return renumberSequentially(ordered);
    }

    /**
     * Randomly assigns race numbers 1..n to all participants of a race, shuffled within each age
     * group; participants without a matching age group are appended at the end, ordered by
     * ascending age (youngest first). Clears every participant's race number first, then
     * reassigns 1..n, all in one transaction so a write failing partway through rolls back rather
     * than leaving some participants renumbered and others not (which risks duplicate/missing race
     * numbers right before a start list is printed). Re-numbering an already-numbered race (the
     * normal case) reassigns numbers currently held by OTHER participants of the same race; since
     * race_number is UNIQUE per race, writing the new numbers directly would collide with a
     * not-yet-updated participant still holding that number. Clearing every number to NULL first
     * (SQLite treats each NULL as distinct, so this never collides) avoids that.
     */
    private List<Participant> renumberSequentially(List<Participant> ordered) {
        return transactionOperations.executeWrite(_ -> {
            for (Participant participant : ordered) {
                if (participant.raceNumber() != null) {
                    repository.update(withRaceNumber(participant, null));
                }
            }
            List<Participant> result = new ArrayList<>();
            int raceNumber = 1;
            for (Participant participant : ordered) {
                result.add(repository.update(withRaceNumber(participant, raceNumber++)));
            }
            return result;
        });
    }

    /**
     * Same clear-then-reassign shape as {@link #renumberSequentially}, but for
     * {@link Participant#startSequence()} instead of {@link Participant#raceNumber()} - the bib
     * itself is never touched here. {@code excluded} participants are cleared the same way but
     * never given a start position, and are marked {@link DisqualificationStatus#DNS} instead:
     * they didn't have a result in the linked race, so they're not starting this one either.
     */
    private List<Participant> applyStartSequence(List<Participant> ordered, List<Participant> excluded) {
        return transactionOperations.executeWrite(_ -> {
            for (Participant participant : ordered) {
                clearStartSequenceIfSet(participant);
            }
            List<Participant> result = new ArrayList<>();
            for (Participant participant : excluded) {
                result.add(repository.update(withStartSequenceAndStatus(participant, null, DisqualificationStatus.DNS)));
            }
            int sequence = 1;
            for (Participant participant : ordered) {
                result.add(repository.update(withStartSequence(participant, sequence++)));
            }
            return result;
        });
    }

    /**
     * The single place every "copy this participant with 1-2 fields changed" helper below
     * delegates to, so the next field added to {@link Participant} (already grown from 10 to 13
     * constructor args across this feature) only has one reconstruction site to update instead of
     * several - see {@link #withRaceNumber}/{@link #withStartSequenceAndStatus}/
     * {@link #withStartGroupAndSequence}.
     */
    private static Participant with(Participant participant, Integer raceNumber, DisqualificationStatus status,
                                     Integer startSequence, Long startGroupId) {
        return new Participant(
                participant.id(),
                participant.raceId(),
                participant.personId(),
                raceNumber,
                participant.teamId(),
                participant.categoryId(),
                participant.durationMs(),
                participant.penalty(),
                participant.measuredAt(),
                participant.comment(),
                status,
                startSequence,
                startGroupId
        );
    }

    private static Participant withRaceNumber(Participant participant, Integer raceNumber) {
        return with(participant, raceNumber, participant.status(), participant.startSequence(), participant.startGroupId());
    }

    private static Participant withStartSequence(Participant participant, Integer startSequence) {
        return withStartSequenceAndStatus(participant, startSequence, participant.status());
    }

    private static Participant withStartSequenceAndStatus(Participant participant, Integer startSequence, DisqualificationStatus status) {
        return with(participant, participant.raceNumber(), status, startSequence, participant.startGroupId());
    }

    private static Participant withStartGroupAndSequence(Participant participant, Long startGroupId, Integer startSequence) {
        return with(participant, participant.raceNumber(), participant.status(), startSequence, startGroupId);
    }

    /**
     * Rewriting startSequence while live auto-assign is matching measurements against it would
     * attach the next finish-line measurements to the wrong participants.
     */
    private void requireAutoAssignInactive(Long raceId) {
        if (autoAssignService.isActiveFor(raceId)) {
            throw new IllegalStateException("Auto-assign mode is active for race " + raceId + ". Disable it before changing the start order.");
        }
    }

    /**
     * Shared clear-then-reassign guard used by {@link #applyStartSequence},
     * {@link #applyStartGroupAssignment}, and {@link #copyStartGroupAssignment}: nulls out a
     * participant's startSequence if it's currently set, so a value about to be handed to someone
     * else can't collide with it on the {@code (race_id, start_sequence)} unique index.
     */
    private Participant clearStartSequenceIfSet(Participant participant) {
        return participant.startSequence() != null ? repository.update(withStartSequence(participant, null)) : participant;
    }

    /**
     * Picks the status to persist: an explicitly given one (including a request that explicitly
     * resets to NONE), or {@code fallback} (the existing row's status on update, NONE on create)
     * when the caller's Participant carries no status at all - the same "omitted means unchanged"
     * convention already used for durationMs/penalty/measuredAt above.
     */
    private static DisqualificationStatus resolveStatus(Participant participant, DisqualificationStatus fallback) {
        return participant.status() != null ? participant.status() : fallback;
    }

    /**
     * Imports participants for a race from a CSV file with columns Lastname,Firstname,Birthdate,Team,Gender and an
     * optional 6th ExternalId column. The header row is ignored. ExternalId is entirely optional: rows may have
     * only 5 columns (older format, no ExternalId at all), or 6 columns with an empty last field.
     * Per-row semantics (team/category resolution, ExternalId dedupe, gender/birthdate parsing) are shared with
     * {@link #importMapped} via {@link #importRow}.
     */
    public ParticipantImportResult importFromCsv(Long raceId, BufferedReader reader) throws IOException {
        List<Participant> imported = new ArrayList<>();
        List<ParticipantImportRowError> errors = new ArrayList<>();
        Set<String> existingNameBirthDateKeys = loadExistingNameBirthDateKeys(raceId);
        // Resolved once for the whole file rather than per row: it is the same race for every row,
        // and resolving it per row would read the settings table once per participant.
        int seasonYear = seasonService.seasonOf(requireRace(raceId));

        String line;
        int lineNumber = 0;

        while ((line = reader.readLine()) != null) {
            lineNumber++;

            if (lineNumber == 1) {
                continue;
            }

            String trimmedLine = line.trim();
            if (trimmedLine.isEmpty()) {
                continue;
            }

            String[] parts = trimmedLine.split(",", -1);
            if (parts.length < CSV_COLUMN_COUNT) {
                errors.add(new ParticipantImportRowError(lineNumber, line,
                        "Expected at least " + CSV_COLUMN_COUNT + " columns (Lastname,Firstname,Birthdate,Team,Gender[,ExternalId])"));
                continue;
            }

            String externalId = parts.length > 5 ? parts[5].trim() : "";
            importRow(raceId, seasonYear, lineNumber, line,
                    new ImportRowFields(parts[0], parts[1], parts[2], parts[3], parts[4], externalId,
                            null, null, null, null, null, null, null, null),
                    existingNameBirthDateKeys, imported, errors);
        }

        LOG.info("CSV import for race {} finished: {} imported, {} skipped", raceId, imported.size(), errors.size());

        return new ParticipantImportResult(imported, errors);
    }

    /**
     * Generic counterpart to {@link #importFromCsv}: parses a CSV (any delimiter) or a
     * DSV-Wettkampfdatei-style XML export into raw {@code {sourceField: value}} rows via
     * {@link ParticipantImportParsers}, then applies {@code mapping} (our field name -> source field
     * name) to pull out the values {@link #importRow} needs. A field left out of {@code mapping} (or
     * {@code mapping} entirely null/empty, in which case the auto-suggested mapping is used) is simply
     * not imported for any row - e.g. a Punkte/ChipID column nobody mapped is silently ignored rather
     * than causing errors.
     */
    public ParticipantImportResult importMapped(Long raceId, byte[] fileBytes, ParticipantImportFormat format,
                                                 Character delimiter, Map<String, String> mapping) throws IOException {
        ParticipantImportParsers.ParsedRows parsed = parseImportFile(fileBytes, format, delimiter);
        Map<String, String> effectiveMapping = (mapping == null || mapping.isEmpty())
                ? ParticipantImportParsers.suggestMapping(parsed.fields())
                : mapping;

        List<Participant> imported = new ArrayList<>();
        List<ParticipantImportRowError> errors = new ArrayList<>();
        Set<String> existingNameBirthDateKeys = loadExistingNameBirthDateKeys(raceId);
        int seasonYear = seasonService.seasonOf(requireRace(raceId));

        int rowNumber = 1;
        for (Map<String, String> row : parsed.rows()) {
            rowNumber++;
            importRow(raceId, seasonYear, rowNumber, row.toString(),
                    new ImportRowFields(
                            valueFor(row, effectiveMapping, "lastName"),
                            valueFor(row, effectiveMapping, "firstName"),
                            valueFor(row, effectiveMapping, "birthDate"),
                            valueFor(row, effectiveMapping, "team"),
                            valueFor(row, effectiveMapping, "gender"),
                            valueFor(row, effectiveMapping, "externalId"),
                            valueFor(row, effectiveMapping, "raceNumber"),
                            valueFor(row, effectiveMapping, "category"),
                            valueFor(row, effectiveMapping, "ageGroup"),
                            valueFor(row, effectiveMapping, "durationMs"),
                            valueFor(row, effectiveMapping, "penalty"),
                            valueFor(row, effectiveMapping, "measuredAt"),
                            valueFor(row, effectiveMapping, "comment"),
                            valueFor(row, effectiveMapping, "status")),
                    existingNameBirthDateKeys, imported, errors);
        }

        LOG.info("Mapped {} import for race {} finished: {} imported, {} skipped", format, raceId, imported.size(), errors.size());

        return new ParticipantImportResult(imported, errors);
    }

    /**
     * Parses an import file into detected source fields + a suggested mapping + a few sample rows,
     * for building/pre-filling the column-mapping UI. Never touches the database.
     */
    public ParticipantImportPreviewResponse previewImport(byte[] fileBytes, ParticipantImportFormat format, Character delimiter) throws IOException {
        ParticipantImportParsers.ParsedRows parsed = parseImportFile(fileBytes, format, delimiter);
        Map<String, String> suggested = ParticipantImportParsers.suggestMapping(parsed.fields());
        List<Map<String, String>> sample = parsed.rows().stream().limit(5).toList();
        return new ParticipantImportPreviewResponse(parsed.fields(), suggested, sample);
    }

    private static ParticipantImportParsers.ParsedRows parseImportFile(byte[] fileBytes, ParticipantImportFormat format, Character delimiter) throws IOException {
        return switch (format) {
            case CSV -> ParticipantImportParsers.parseCsv(TextFileDecoder.decode(fileBytes), delimiter);
            case DSV_XML -> ParticipantImportParsers.parseDsvXml(new ByteArrayInputStream(fileBytes));
        };
    }

    /**
     * Parses a result-import file into detected source fields + a suggested mapping + a few sample
     * rows, for building/pre-filling the column-mapping UI. Never touches the database.
     */
    public ParticipantResultImportPreviewResponse previewResultsImport(byte[] fileBytes, Character delimiter) {
        ParticipantResultImportParsers.ParsedRows parsed = ParticipantResultImportParsers.parseCsv(TextFileDecoder.decode(fileBytes), delimiter);
        Map<String, String> suggested = ParticipantResultImportParsers.suggestMapping(parsed.fields());
        List<Map<String, String>> sample = parsed.rows().stream().limit(5).toList();
        return new ParticipantResultImportPreviewResponse(parsed.fields(), suggested, sample);
    }

    public record ParticipantResultImportResult(List<Participant> updated, List<ParticipantResultImportRowError> errors) {
    }

    /**
     * Imports results (time/value + optionally penalty/status/comment) for a race, matching each
     * row onto an *existing* participant via raceNumber - deliberately never creates a participant.
     * A raceNumber that matches nobody in the race, or that's missing/unparsable, is reported as a
     * row error instead. Only the result fields (durationMs/penalty/measuredAt/status/comment) are
     * touched; identity data (name, team, category, ...) is left exactly as it was - raceId/personId/
     * raceNumber/teamId/categoryId are always carried over unchanged from the existing row. There is
     * no "measuredAt" column to map: every row that ends up in {@code toUpdate} gets its
     * {@code measuredAt} stamped with the import's own timestamp instead, since a hand-edited/
     * re-imported CSV has no meaningful original measurement time of its own.
     * <p>
     * The race's full roster is loaded once up front (like {@link #syncMeasurementsToParticipants})
     * and matched in memory, and every row's update is applied in one {@code repository.updateAll}
     * at the end, instead of one {@link #update(Long, Participant)} call per row - that would re-run
     * {@code validate()}'s race/person/team/category/uniqueness checks on every row for values that
     * are, by construction, always carried over unchanged from an already-valid persisted row, i.e.
     * always no-ops. If the file lists the same raceNumber twice, both rows are computed against the
     * same pre-import snapshot (not chained), and the later row wins in the final batch - the same
     * per-key-independent semantics {@link #syncMeasurementsToParticipants} already has.
     * <p>
     * {@code mapping} is used as given - including an explicitly empty map, meaning "map nothing" -
     * and only falls back to the auto-suggested mapping when it's entirely omitted ({@code null}).
     * <p>
     * {@code resultUnit} (the race's own {@code TIME}/{@code POINTS} setting) decides how the mapped
     * "time" and "penalty" columns are read: for a {@code POINTS} race both are always a plain decimal
     * number (dot or comma), rounded to hundredths, regardless of {@code timeFormat}; for a
     * {@code TIME} race, {@code timeFormat} says whether they're raw milliseconds, decimal seconds, or
     * a "[[hh:]mm:]ss[.,fraction]" race-clock string - different timing providers export differently,
     * so this is picked explicitly rather than guessed. A time value that's actually a DNF/DNS/DSQ
     * keyword (see {@link #parseExplicitStatus}) sets that status instead of a duration, regardless of
     * the chosen format.
     * <p>
     * The mapped "status" column has three outcomes: not mapped at all leaves the existing status
     * untouched; mapped but blank for this row resolves to an explicit {@code NONE} ("NONE oder leer
     * als gewertet") - including undoing a previously imported DNF/DNS/DSQ by clearing the cell; a
     * mapped, non-blank value that isn't NONE/DNF/DNS/DSQ (any casing) is a row error rather than
     * being silently dropped.
     * <p>
     * The mapped "penalty" column follows the result it belongs to: on a row that carries a numeric
     * time/value, a blank penalty cell means "no penalty" and clears an existing one - otherwise a
     * penalty removed at a station after an earlier import would stick on the main instance forever
     * and skew its ranking. On a row without a time/value (a still-pending participant, or one only
     * carrying a status keyword) and when the column isn't mapped at all, the existing penalty is
     * kept.
     * <p>
     * The mapped "comment" column works the same way: on a row that states an outcome (a non-blank
     * time/value or status cell), a blank comment means "no comment" and clears an existing one -
     * e.g. the note of a DSQ reversed at a station after an earlier import. On a still-pending row
     * (both blank) and when the column isn't mapped at all, the existing comment is kept.
     */
    public ParticipantResultImportResult importResultsByRaceNumber(Long raceId, byte[] fileBytes, Character delimiter,
                                                                     Map<String, String> mapping, ResultTimeFormat timeFormat,
                                                                     ResultUnit resultUnit) {
        ParticipantResultImportParsers.ParsedRows parsed = ParticipantResultImportParsers.parseCsv(TextFileDecoder.decode(fileBytes), delimiter);
        Map<String, String> effectiveMapping = (mapping == null)
                ? ParticipantResultImportParsers.suggestMapping(parsed.fields())
                : mapping;

        Map<Integer, Participant> existingByRaceNumber = new HashMap<>();
        for (Participant participant : repository.findByRaceId(raceId)) {
            if (participant.raceNumber() != null) {
                existingByRaceNumber.put(participant.raceNumber(), participant);
            }
        }

        List<Participant> toUpdate = new ArrayList<>();
        List<ParticipantResultImportRowError> errors = new ArrayList<>();

        int rowNumber = 1;
        for (Map<String, String> row : parsed.rows()) {
            rowNumber++;
            // row.toString() is only ever needed on an error path (never on the common
            // successfully-parsed-row path), and every branch below `continue`s right after using
            // it at most once - so it's computed inline at each error site instead of eagerly here.

            String raceNumberRaw = valueFor(row, effectiveMapping, "raceNumber");
            if (raceNumberRaw == null || raceNumberRaw.isBlank()) {
                errors.add(new ParticipantResultImportRowError(rowNumber, row.toString(), "raceNumber is missing"));
                continue;
            }
            Integer raceNumber;
            try {
                raceNumber = Integer.parseInt(raceNumberRaw.trim());
            } catch (NumberFormatException e) {
                errors.add(new ParticipantResultImportRowError(rowNumber, row.toString(), "raceNumber is not a valid number: " + raceNumberRaw));
                continue;
            }

            Participant existing = existingByRaceNumber.get(raceNumber);
            if (existing == null) {
                errors.add(new ParticipantResultImportRowError(rowNumber, row.toString(), "No participant with raceNumber " + raceNumber + " found in this race"));
                continue;
            }

            String timeRaw = valueFor(row, effectiveMapping, "time");
            String statusRaw = valueFor(row, effectiveMapping, "status");
            // Distinguishes "status column not mapped at all" (null - no status info requested,
            // leave the existing one untouched) from "mapped but this row's cell is blank" ("" -
            // explicitly means NONE/gewertet, e.g. to undo a previously imported DNF by clearing the
            // cell) - matching the original "NONE oder leer als gewertet" spec. An unrecognized
            // non-blank value is a row error rather than being silently dropped.
            DisqualificationStatus status;
            if (statusRaw == null) {
                status = null;
            } else if (statusRaw.isBlank()) {
                status = DisqualificationStatus.NONE;
            } else {
                status = parseExplicitStatus(statusRaw);
                if (status == null) {
                    errors.add(new ParticipantResultImportRowError(rowNumber, row.toString(),
                            "status \"" + statusRaw + "\" is not recognized (expected NONE/DNF/DNS/DSQ, or empty)"));
                    continue;
                }
            }

            Integer durationMs = null;
            if (timeRaw != null && !timeRaw.isBlank()) {
                DisqualificationStatus timeStatus = parseExplicitStatus(timeRaw);
                if (timeStatus != null) {
                    status = timeStatus;
                } else {
                    try {
                        durationMs = parseResultValue(timeRaw.trim(), timeFormat, resultUnit);
                    } catch (IllegalArgumentException e) {
                        errors.add(new ParticipantResultImportRowError(rowNumber, row.toString(),
                                "Time/value \"" + timeRaw + "\" could not be read"));
                        continue;
                    }
                    if (ValidationUtils.isNegative(durationMs)) {
                        errors.add(new ParticipantResultImportRowError(rowNumber, row.toString(), "time/value must not be negative"));
                        continue;
                    }
                }
            } else if (status == null) {
                errors.add(new ParticipantResultImportRowError(rowNumber, row.toString(), "time/value is missing"));
                continue;
            }

            // Mirrors validate()'s penalty>=0 check, which this row-by-row import path bypasses
            // entirely (see the class-level note above) - without this, a negative value from a
            // hand-edited or malformed export floors to 0 in RankingService.adjustedValue() and wins
            // the ranking outright, silently and with no error surfaced anywhere.
            String penaltyRaw = valueFor(row, effectiveMapping, "penalty");
            Integer penalty = existing.penalty();
            if (penaltyRaw != null && !penaltyRaw.isBlank()) {
                try {
                    penalty = parseResultValue(penaltyRaw.trim(), timeFormat, resultUnit);
                } catch (IllegalArgumentException e) {
                    errors.add(new ParticipantResultImportRowError(rowNumber, row.toString(), "penalty \"" + penaltyRaw + "\" could not be read"));
                    continue;
                }
                if (ValidationUtils.isNegative(penalty)) {
                    errors.add(new ParticipantResultImportRowError(rowNumber, row.toString(), "penalty must not be negative"));
                    continue;
                }
            } else if (penaltyRaw != null && durationMs != null) {
                // Mapped-but-blank penalty on a row that carries a result: the file states this
                // result has no penalty (e.g. a station removed one after an earlier import), so
                // clear it instead of keeping the stale value.
                penalty = null;
            }

            String commentRaw = valueFor(row, effectiveMapping, "comment");
            String comment;
            if (commentRaw != null && !commentRaw.trim().isEmpty()) {
                comment = commentRaw.trim();
            } else if (commentRaw != null && (hasText(timeRaw) || hasText(statusRaw))) {
                // Same rule as the penalty above: a mapped-but-blank comment on a row that states an
                // outcome (a time/value or a status) means "no comment" - e.g. the note of a DSQ that
                // was reversed at the station after an earlier import.
                comment = null;
            } else {
                comment = existing.comment();
            }

            toUpdate.add(new Participant(existing.id(), existing.raceId(), existing.personId(), existing.raceNumber(),
                    existing.teamId(), existing.categoryId(),
                    durationMs != null ? durationMs : existing.durationMs(),
                    zeroPenaltyToNull(penalty),
                    LocalDateTime.now(),
                    comment,
                    status != null ? status : existing.status(),
                    existing.startSequence(),
                    existing.startGroupId()));
        }

        if (!toUpdate.isEmpty()) {
            repository.updateAll(toUpdate);
        }

        LOG.info("Result import for race {} finished: {} updated, {} skipped", raceId, toUpdate.size(), errors.size());

        return new ParticipantResultImportResult(toUpdate, errors);
    }

    /**
     * Recognizes an explicit DNF/DNS/DSQ (or NONE) marker - unlike {@link #parseStatus}, returns
     * null rather than defaulting to NONE when the value isn't a recognized keyword, so the caller
     * can tell "explicitly reset to NONE" apart from "not a status value at all" (e.g. a plain race
     * time, which must not overwrite whatever status the participant already had).
     */
    private static DisqualificationStatus parseExplicitStatus(String rawStatus) {
        return matchStatusKeyword(rawStatus);
    }

    /**
     * The DSQ/DNF/DNS/NONE keyword list shared by {@link #parseStatus} and
     * {@link #parseExplicitStatus} - kept as one method so the two callers, which each default
     * differently for an unrecognized value, can't end up recognizing different keywords.
     */
    private static DisqualificationStatus matchStatusKeyword(String raw) {
        if (raw == null || raw.isBlank()) {
            return null;
        }
        return switch (raw.trim().toUpperCase()) {
            case "DSQ", "DISQUALIFIZIERT", "DISQUALIFIED" -> DisqualificationStatus.DSQ;
            case "DNF", "AUFGEGEBEN" -> DisqualificationStatus.DNF;
            case "DNS", "NICHT GESTARTET", "NICHT_GESTARTET" -> DisqualificationStatus.DNS;
            case "NONE" -> DisqualificationStatus.NONE;
            default -> null;
        };
    }

    /**
     * Parses a raw "time"/"penalty" cell for {@link #importResultsByRaceNumber}. A {@code POINTS}
     * race ignores {@code format} entirely - the value is always a plain decimal number (dot or
     * comma), rounded to hundredths, matching the {@code pointsValue}/{@code penaltyPointsValue}
     * convention the manual participant-edit dialog already uses. A {@code TIME} race defers to
     * {@link #parseResultTime}.
     *
     * @throws IllegalArgumentException if the value doesn't match the expected format
     */
    private static int parseResultValue(String raw, ResultTimeFormat format, ResultUnit resultUnit) {
        if (resultUnit == ResultUnit.POINTS) {
            try {
                return (int) Math.round(Double.parseDouble(raw.replace(',', '.')) * 100.0);
            } catch (NumberFormatException e) {
                throw new IllegalArgumentException(e);
            }
        }
        return parseResultTime(raw, format);
    }

    /**
     * Parses a raw time value per the chosen {@link ResultTimeFormat}. CLOCK accepts "ss",
     * "mm:ss" or "hh:mm:ss", with either "." or "," before the fractional seconds (e.g. "1:23,68"
     * or "01:23.680") - covers both our own export format and the comma-decimal, no-milliseconds
     * style common in timing-provider CSVs (e.g. Alpenhunde's "01:23,68").
     *
     * @throws IllegalArgumentException if the value doesn't match the chosen format
     */
    private static int parseResultTime(String raw, ResultTimeFormat format) {
        try {
            return switch (format) {
                case MILLISECONDS -> Integer.parseInt(raw);
                case SECONDS -> (int) Math.round(Double.parseDouble(raw.replace(',', '.')) * 1000.0);
                case CLOCK -> parseClock(raw);
            };
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException(e);
        }
    }

    private static int parseClock(String raw) {
        String[] parts = raw.split(":");
        if (parts.length < 1 || parts.length > 3) {
            throw new IllegalArgumentException("invalid clock format: " + raw);
        }
        double seconds = Double.parseDouble(parts[parts.length - 1].replace(',', '.'));
        int minutes = parts.length >= 2 ? Integer.parseInt(parts[parts.length - 2]) : 0;
        int hours = parts.length == 3 ? Integer.parseInt(parts[0]) : 0;
        return (int) Math.round((hours * 3600L + minutes * 60L) * 1000.0 + seconds * 1000.0);
    }

    private static boolean hasText(String value) {
        return value != null && !value.isBlank();
    }

    private static String valueFor(Map<String, String> row, Map<String, String> mapping, String targetField) {
        String sourceField = mapping.get(targetField);
        return sourceField == null ? null : row.get(sourceField);
    }

    private static final char EXPORT_DELIMITER = ';';

    /**
     * Exports every participant of a race as CSV - including person data (not just a reference to
     * it) and the result fields (durationMs/penalty/measuredAt) - for migrating a whole race's roster
     * and results to another instance. Uses our own canonical field names as the header row (see
     * {@link ParticipantImportParsers#TARGET_FIELDS}) so re-importing it via {@link #importMapped}
     * needs no manual mapping: each header self-suggests via that field's own-name alias.
     * AgeGroup is deliberately not exported - it isn't stored per participant (see importRow), it's
     * recomputed automatically from birthDate/gender against whatever AgeGroups exist in the target
     * instance. Semicolon-delimited: the parser this round-trips through has no quoting support, so
     * values are sanitized (delimiter/newlines replaced with a space) instead - simple, and lossless
     * for realistic data (none of which legitimately contains a semicolon).
     */
    public String exportCsv(Long raceId) {
        List<Participant> participants = StreamSupport.stream(repository.findByRaceId(raceId).spliterator(), false).toList();
        List<ParticipantResponse> responses = toResponses(participants);

        StringBuilder csv = new StringBuilder();
        csv.append(String.join(String.valueOf(EXPORT_DELIMITER), ParticipantImportParsers.TARGET_FIELDS)).append('\n');
        for (ParticipantResponse p : responses) {
            PersonResponse person = p.person();
            List<String> values = List.of(
                    sanitizeForExport(person != null ? person.lastName() : ""),
                    sanitizeForExport(person != null ? person.firstName() : ""),
                    person != null && person.birthDate() != null ? person.birthDate().toString() : "",
                    person != null && person.gender() != null ? person.gender().name() : "",
                    "",
                    sanitizeForExport(p.team() != null ? p.team().name() : ""),
                    sanitizeForExport(p.category() != null ? p.category().name() : ""),
                    sanitizeForExport(person != null && person.externalId() != null ? person.externalId() : ""),
                    p.raceNumber() != null ? p.raceNumber().toString() : "",
                    p.durationMs() != null ? p.durationMs().toString() : "",
                    p.penalty() != null ? p.penalty().toString() : "",
                    p.measuredAt() != null ? p.measuredAt().toString() : "",
                    sanitizeForExport(p.comment()),
                    Objects.requireNonNullElse(p.status(), DisqualificationStatus.NONE).name()
            );
            csv.append(String.join(String.valueOf(EXPORT_DELIMITER), values)).append('\n');
        }
        return csv.toString();
    }

    private static String sanitizeForExport(String value) {
        if (value == null) {
            return "";
        }
        return value.replace(String.valueOf(EXPORT_DELIMITER), " ").replace("\n", " ").replace("\r", " ");
    }

    // Header text for exportResultsCsv, sorted ascending by raceNumber. lastName/firstName/team/
    // ageGroup/externalId are informational only - present so a human editing the file in Excel can
    // tell whose row they're looking at, but never read back on import (raceNumber is the only key).
    // Unlike exportCsv's roster export, ageGroup here is the participant's *current* computed
    // ageGroup (from toResponses(), same as the UI shows) rather than always blank - it's read-only
    // information here, not something re-imported into another instance's own AgeGroup config.
    // "time/value" self-suggests onto ParticipantResultImportParsers' "time" target field on
    // re-import (see its "timevalue" alias); there's no "measuredAt" column - see the note on
    // importResultsByRaceNumber for why.
    private static final List<String> RESULTS_EXPORT_HEADER =
            List.of("raceNumber", "lastName", "firstName", "team", "ageGroup", "externalId", "time/value", "penalty", "comment", "status");

    /**
     * Exports every participant of a race's results (raceNumber + identity fields for readability
     * only + time/value/penalty/comment/status), sorted ascending by raceNumber - the counterpart to
     * {@link #importResultsByRaceNumber}, meant to be opened in Excel, have its result columns
     * filled in or corrected, and re-imported to update those same participants (matched purely by
     * raceNumber; the identity columns have no effect on import). "time/value" and "penalty" are
     * written as a human-readable clock string ("m:ss.SSS"/"h:mm:ss.SSS") for a {@code TIME} race, or
     * a plain decimal for a {@code POINTS} race - both round-trip through
     * {@link #parseResultValue} on re-import. A participant with no raceNumber is still exported
     * (with an empty raceNumber column, sorted last) rather than silently dropped - the other side's
     * import will report it as a row error instead of a value quietly going missing.
     */
    public String exportResultsCsv(Long raceId, ResultUnit resultUnit) {
        List<Participant> participants = StreamSupport.stream(repository.findByRaceId(raceId).spliterator(), false)
                .sorted(Comparator.comparing(Participant::raceNumber, Comparator.nullsLast(Integer::compareTo)))
                .toList();
        List<ParticipantResponse> responses = toResponses(participants);

        StringBuilder csv = new StringBuilder();
        csv.append(String.join(String.valueOf(EXPORT_DELIMITER), RESULTS_EXPORT_HEADER)).append('\n');
        for (ParticipantResponse p : responses) {
            PersonResponse person = p.person();
            List<String> values = List.of(
                    p.raceNumber() != null ? p.raceNumber().toString() : "",
                    sanitizeForExport(person != null ? person.lastName() : ""),
                    sanitizeForExport(person != null ? person.firstName() : ""),
                    sanitizeForExport(p.team() != null ? p.team().name() : ""),
                    sanitizeForExport(p.ageGroup() != null ? p.ageGroup().name() : ""),
                    sanitizeForExport(person != null && person.externalId() != null ? person.externalId() : ""),
                    formatResultValueForExport(p.durationMs(), resultUnit),
                    formatResultValueForExport(p.penalty(), resultUnit),
                    sanitizeForExport(p.comment()),
                    formatStatusForExport(p.status())
            );
            csv.append(String.join(String.valueOf(EXPORT_DELIMITER), values)).append('\n');
        }
        return csv.toString();
    }

    // Header text for exportStartListCsv. startGroup/startGroupOffset are only appended when at
    // least one listed participant has a start group (mirroring the start list PDF's
    // "Gruppe"/"Zeitversatz" columns). startGroupOffset is the group's Zeitversatz as "m:ss" - the
    // value RankingService nets a TIME race's raw result by, which no other export carries
    // (exportResultsCsv's time/value is the raw, un-netted clock time).
    private static final List<String> START_LIST_EXPORT_HEADER =
            List.of("raceNumber", "lastName", "firstName", "externalId", "birthYear", "gender", "ageGroup", "team", "category");
    private static final List<String> START_LIST_EXPORT_START_GROUP_HEADER = List.of("startGroup", "startGroupOffset");

    /**
     * Exports a race's start list as CSV - the same participants in the same order as the start list
     * PDF ({@link Participant#effectiveStartOrder()}; DSQ/DNF/DNS without a start position aren't
     * starting and are left out), plus identity data and - only if any of them has a start group -
     * each participant's start group with its Zeitversatz. Export only, there is no matching import.
     * Empty cells instead of the PDF's "-".
     */
    public String exportStartListCsv(Long raceId) {
        List<Participant> participants = StreamSupport.stream(repository.findByRaceId(raceId).spliterator(), false)
                .filter(p -> p.effectiveStartOrder() != null)
                .sorted(Comparator.comparing(p -> Objects.requireNonNull(p.effectiveStartOrder())))
                .toList();

        boolean anyStartGroup = participants.stream().anyMatch(p -> p.startGroupId() != null);

        List<String> header = new ArrayList<>(START_LIST_EXPORT_HEADER);
        if (anyStartGroup) {
            header.addAll(START_LIST_EXPORT_START_GROUP_HEADER);
        }
        StringBuilder csv = new StringBuilder();
        csv.append(String.join(String.valueOf(EXPORT_DELIMITER), header)).append('\n');
        for (ParticipantResponse p : toResponses(participants)) {
            PersonResponse person = p.person();
            List<String> values = new ArrayList<>(List.of(
                    p.raceNumber() != null ? p.raceNumber().toString() : "",
                    sanitizeForExport(person != null ? person.lastName() : ""),
                    sanitizeForExport(person != null ? person.firstName() : ""),
                    sanitizeForExport(person != null && person.externalId() != null ? person.externalId() : ""),
                    person != null && person.birthDate() != null ? String.valueOf(person.birthDate().getYear()) : "",
                    person != null && person.gender() != null ? person.gender().name() : "",
                    sanitizeForExport(p.ageGroup() != null ? p.ageGroup().name() : ""),
                    sanitizeForExport(p.team() != null ? p.team().name() : ""),
                    sanitizeForExport(p.category() != null ? p.category().name() : "")
            ));
            if (anyStartGroup) {
                StartGroupTemplateResponse startGroup = p.startGroup();
                String offset = startGroup != null ? RankingViewService.formatStartGroupOffset(startGroup.offsetSeconds()) : null;
                values.add(sanitizeForExport(startGroup != null ? startGroup.label() : ""));
                values.add(offset != null ? offset : "");
            }
            csv.append(String.join(String.valueOf(EXPORT_DELIMITER), values)).append('\n');
        }
        return csv.toString();
    }

    /**
     * Renders a status for {@link #exportResultsCsv} - blank for {@code NONE} (the normal, ranked
     * case) rather than the literal "NONE", so the column reads as empty-unless-flagged in Excel.
     * Round-trips correctly through {@link #importResultsByRaceNumber}'s blank-means-NONE handling
     * (including letting a cleared cell undo a previously imported DNF/DNS/DSQ).
     */
    private static String formatStatusForExport(DisqualificationStatus status) {
        DisqualificationStatus resolved = Objects.requireNonNullElse(status, DisqualificationStatus.NONE);
        return resolved == DisqualificationStatus.NONE ? "" : resolved.name();
    }

    /**
     * Renders a durationMs/penalty value for {@link #exportResultsCsv} - a plain decimal (2 places,
     * "."-separated) for a {@code POINTS} race, or "m:ss.SSS"/"h:mm:ss.SSS" for a {@code TIME} race.
     * Always includes at least "m:ss" (never the bare "SS.mmm" form {@code formatDuration} on the
     * frontend uses for display) so the value always contains a ":" and round-trips unambiguously
     * through {@link #parseClock} rather than being misread as decimal seconds.
     */
    private static String formatResultValueForExport(Integer value, ResultUnit resultUnit) {
        if (value == null) {
            return "";
        }
        if (resultUnit == ResultUnit.POINTS) {
            return String.format(Locale.ROOT, "%.2f", value / 100.0);
        }
        long totalMs = value;
        long hours = totalMs / 3_600_000;
        long minutes = (totalMs % 3_600_000) / 60_000;
        long seconds = (totalMs % 60_000) / 1000;
        long millis = totalMs % 1000;
        return hours > 0
                ? String.format(Locale.ROOT, "%d:%02d:%02d.%03d", hours, minutes, seconds, millis)
                : String.format(Locale.ROOT, "%d:%02d.%03d", minutes, seconds, millis);
    }

    /**
     * Seeds the ExternalId-less dedupe check with everyone already in this race, keyed by
     * lastName|firstName|birthDate. Without this, re-uploading the same roster twice - or a file
     * that accidentally lists someone twice - would silently double every ExternalId-less row
     * instead of being reported. Persons are batch-loaded (like toResponses() does) instead of one
     * findById() per existing participant. The returned set is grown by importRow() as rows are
     * imported, so duplicate rows within the same file are also caught.
     */
    private Set<String> loadExistingNameBirthDateKeys(Long raceId) {
        List<Participant> existingParticipants = StreamSupport.stream(repository.findByRaceId(raceId).spliterator(), false).toList();
        Set<Long> existingPersonIds = existingParticipants.stream().map(Participant::personId).collect(Collectors.toSet());
        Map<Long, Person> existingPersonsById = personService.findByIds(existingPersonIds);
        Set<String> keys = new HashSet<>();
        for (Participant existingParticipant : existingParticipants) {
            Person person = existingPersonsById.get(existingParticipant.personId());
            if (person != null) {
                keys.add(nameBirthDateKey(person.lastName(), person.firstName(), person.birthDate()));
            }
        }
        return keys;
    }

    /**
     * Raw (unparsed, possibly null) values for one import row - name-based instead of positional so
     * the two call sites ({@link #importFromCsv}, {@link #importMapped}) can't silently swap two
     * same-typed String arguments.
     */
    private record ImportRowFields(
            String lastName, String firstName, String birthDate, String team, String gender,
            String externalId, String raceNumber, String category, String ageGroup,
            String durationMs, String penalty, String measuredAt, String comment, String status) {
    }

    /**
     * Validates and saves a single import row (shared by the fixed-column CSV import and the
     * mapped/generic import), appending either to {@code imported} or {@code errors} - never throws.
     * {@code existingNameBirthDateKeys} is grown in place so duplicate ExternalId-less rows later in
     * the same file are also caught.
     */
    private void importRow(Long raceId, int seasonYear, int rowNumber, String rawRowDescription, ImportRowFields fields,
                            Set<String> existingNameBirthDateKeys, List<Participant> imported, List<ParticipantImportRowError> errors) {
        String lastName = fields.lastName() != null ? fields.lastName().trim() : "";
        String firstName = fields.firstName() != null ? fields.firstName().trim() : "";
        String teamName = fields.team() != null ? fields.team().trim() : "";
        String categoryName = fields.category() != null ? fields.category().trim() : "";
        String ageGroupName = fields.ageGroup() != null ? fields.ageGroup().trim() : "";
        String externalId = fields.externalId() != null ? fields.externalId().trim() : "";

        if (lastName.isEmpty() || firstName.isEmpty()) {
            errors.add(new ParticipantImportRowError(rowNumber, rawRowDescription, "Lastname and Firstname are required"));
            return;
        }

        Gender gender = parseGender(fields.gender());
        if (gender == null) {
            errors.add(new ParticipantImportRowError(rowNumber, rawRowDescription,
                    "Missing or invalid gender (expected MALE/FEMALE or M/W), row skipped"));
            return;
        }

        LocalDate birthDate = parseBirthDate(fields.birthDate());
        if (birthDate == null) {
            errors.add(new ParticipantImportRowError(rowNumber, rawRowDescription,
                    "Invalid or missing birthdate (expected yyyy-MM-dd, dd.MM.yyyy or a 4-digit birth year)"));
            return;
        }

        if (externalId.isEmpty()) {
            String key = nameBirthDateKey(lastName, firstName, birthDate);
            if (existingNameBirthDateKeys.contains(key)) {
                errors.add(new ParticipantImportRowError(rowNumber, rawRowDescription,
                        "A participant with this name and birthdate is already in this race (no ExternalId to disambiguate); row skipped"));
                return;
            }
        }

        Integer raceNumber = parseOptionalInt(fields.raceNumber());
        // Result fields (durationMs/penalty/measuredAt): present when importing a full race export
        // (see ParticipantController#exportCsv), absent from a plain start-list import - optional and
        // best-effort like raceNumber, an unparsable value is simply left unset rather than failing the row.
        Integer durationMs = parseOptionalInt(fields.durationMs());
        Integer penalty = parseOptionalInt(fields.penalty());
        // Mirrors validate()'s non-negative checks, which this row-by-row import path bypasses
        // entirely (see the same-person-per-race comment below) - without this, a negative value
        // from a hand-edited or malformed export floors to 0 in RankingService.adjustedValue() and
        // wins the ranking outright, silently and with no error surfaced anywhere.
        if (ValidationUtils.isNegative(penalty)) {
            errors.add(new ParticipantImportRowError(rowNumber, rawRowDescription, "penalty must not be negative, row skipped"));
            return;
        }
        if (ValidationUtils.isNegative(durationMs)) {
            errors.add(new ParticipantImportRowError(rowNumber, rawRowDescription, "durationMs must not be negative, row skipped"));
            return;
        }
        LocalDateTime measuredAt = parseMeasuredAt(fields.measuredAt());
        String comment = fields.comment() != null && !fields.comment().trim().isEmpty() ? fields.comment().trim() : null;
        DisqualificationStatus participantStatus = parseStatus(fields.status());

        // Each row is its own transaction: a failure saving the participant rolls back a
        // just-created person for that row too (no orphan Person left behind), and does not
        // abort rows that were already imported successfully or rows still to come.
        try {
            Participant saved = transactionOperations.executeWrite(_ -> {
                Long teamId = teamName.isEmpty() ? null : teamService.findOrCreateByName(teamName).id();
                Long categoryId = categoryName.isEmpty() ? null : categoryService.findOrCreateByName(categoryName).id();
                // AgeGroup isn't a participant FK - it's computed from birthDate/gender at read time
                // (findMatchingAgeGroup) - so importing "Klasse" just needs a matching AgeGroup row to
                // exist, not anything set on the Participant itself. It has to exist in *this race's
                // season*: scoped to the target race rather than to whatever "U14" happens to exist,
                // an import can neither silently reuse a past season's class nor widen its birth-year
                // range and thereby re-categorise races already run under it.
                if (!ageGroupName.isEmpty()) {
                    ageGroupService.findOrCreateForImport(ageGroupName, birthDate.getYear(), gender, seasonYear);
                }

                Person person;
                if (!externalId.isEmpty()) {
                    person = personService.findByExternalId(externalId)
                            .orElseGet(() -> personService.create(new Person(null, firstName, lastName, birthDate, gender, externalId)));
                } else {
                    person = personService.create(new Person(null, firstName, lastName, birthDate, gender, null));
                }

                // Re-importing a roster that includes someone already in this race (matched via
                // ExternalId) must not create a second Participant row for them - this bypasses
                // ParticipantService.create()/validate() entirely, so the same-person-per-race
                // rule has to be enforced here too.
                if (repository.findByRaceIdAndPersonId(raceId, person.id()).isPresent()) {
                    throw new IllegalStateException("Person is already a participant of this race");
                }

                Participant participant = new Participant(null, raceId, person.id(), raceNumber, teamId, categoryId, durationMs, zeroPenaltyToNull(penalty), measuredAt, comment, participantStatus);
                return repository.save(participant);
            });
            imported.add(saved);
            if (externalId.isEmpty()) {
                existingNameBirthDateKeys.add(nameBirthDateKey(lastName, firstName, birthDate));
            }
        } catch (Exception e) {
            String reason = e.getMessage() != null ? e.getMessage() : e.getClass().getSimpleName();
            LOG.warn("Failed to import row {} for race {}: {}", rowNumber, raceId, reason);
            errors.add(new ParticipantImportRowError(rowNumber, rawRowDescription, "Failed to save row: " + reason));
        }
    }

    private static String nameBirthDateKey(String lastName, String firstName, LocalDate birthDate) {
        return lastName.trim().toLowerCase() + "|" + firstName.trim().toLowerCase() + "|" + birthDate;
    }

    /**
     * Accepts MALE/FEMALE (the canonical values) as well as the M/W (and F) abbreviations used by
     * RaceEngine and DSV-Wettkampfdatei exports, plus the German spellings - case-insensitively.
     */
    private Gender parseGender(String rawGender) {
        if (rawGender == null) {
            return null;
        }
        String normalized = rawGender.trim().toUpperCase();
        return switch (normalized) {
            case "M", "MALE", "MÄNNLICH", "MAENNLICH" -> Gender.MALE;
            case "W", "F", "FEMALE", "WEIBLICH" -> Gender.FEMALE;
            default -> null;
        };
    }

    /**
     * Best-effort like {@link #parseOptionalInt}: blank/unrecognized values default to NONE (a
     * normal, rankable result) instead of failing the row - the safe direction to fail in, since a
     * value nobody meant as a disqualification marker can only leave someone wrongly rankable, not
     * wrongly excluded. Recognizes our own enum names plus the German terms used on export/reports -
     * the actual keyword list lives in {@link #matchStatusKeyword} so it can't drift out of sync
     * with {@link #parseExplicitStatus}'s identical list.
     */
    private DisqualificationStatus parseStatus(String rawStatus) {
        return Objects.requireNonNullElse(matchStatusKeyword(rawStatus), DisqualificationStatus.NONE);
    }

    /**
     * Accepts an ISO date (yyyy-MM-dd, the original format), a German date (dd.MM.yyyy), or a bare
     * 4-digit birth year (Jahrgang, as DSV-Wettkampfdatei/RaceEngine exports only carry the year) -
     * stored as 1 January of that year. Age-group matching only ever looks at the year
     * ({@link #findMatchingAgeGroup}), so this placeholder date doesn't affect categorization.
     */
    private LocalDate parseBirthDate(String rawBirthDate) {
        if (rawBirthDate == null) {
            return null;
        }
        String trimmed = rawBirthDate.trim();
        if (trimmed.isEmpty()) {
            return null;
        }
        if (trimmed.matches("\\d{4}")) {
            return LocalDate.of(Integer.parseInt(trimmed), 1, 1);
        }
        try {
            return LocalDate.parse(trimmed);
        } catch (DateTimeParseException e) {
            try {
                return LocalDate.parse(trimmed, DateTimeFormatter.ofPattern("dd.MM.yyyy"));
            } catch (DateTimeParseException e2) {
                return null;
            }
        }
    }

    /**
     * Shared by raceNumber/durationMs/penalty: all three are optional and best-effort - an
     * unparsable value (e.g. a stray non-numeric StNr) is simply left unset rather than rejecting the
     * whole row over a field nobody strictly needs.
     */
    private Integer parseOptionalInt(String raw) {
        if (raw == null) {
            return null;
        }
        String trimmed = raw.trim();
        if (trimmed.isEmpty()) {
            return null;
        }
        try {
            return Integer.parseInt(trimmed);
        } catch (NumberFormatException e) {
            return null;
        }
    }

    /**
     * Optional and best-effort like {@link #parseOptionalInt}: expects the ISO format
     * {@code LocalDateTime} is naturally serialized as (e.g. "2026-08-18T10:30:00", see
     * ParticipantController#exportCsv) - an unparsable value is left unset, not an error.
     */
    private LocalDateTime parseMeasuredAt(String raw) {
        if (raw == null) {
            return null;
        }
        String trimmed = raw.trim();
        if (trimmed.isEmpty()) {
            return null;
        }
        try {
            return LocalDateTime.parse(trimmed);
        } catch (DateTimeParseException e) {
            return null;
        }
    }

    public record ParticipantImportResult(List<Participant> imported, List<ParticipantImportRowError> errors) {
    }
}
