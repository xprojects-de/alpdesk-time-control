package x.timecontrol.services;

import x.timecontrol.dto.AgeGroupResponse;
import x.timecontrol.dto.CategoryResponse;
import x.timecontrol.dto.ParticipantCopyResponse;
import x.timecontrol.dto.ParticipantImportFormat;
import x.timecontrol.dto.ParticipantImportPreviewResponse;
import x.timecontrol.dto.ParticipantImportRowError;
import x.timecontrol.dto.ParticipantResponse;
import x.timecontrol.dto.PersonResponse;
import x.timecontrol.dto.RaceResponse;
import x.timecontrol.dto.TeamResponse;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Category;
import x.timecontrol.entities.Gender;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Person;
import x.timecontrol.entities.Race;
import x.timecontrol.entities.RaceMeasurement;
import x.timecontrol.entities.Team;
import x.timecontrol.repositories.ParticipantRepository;
import io.micronaut.data.exceptions.DataAccessException;
import io.micronaut.transaction.TransactionOperations;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.time.LocalDate;
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
    private final RaceService raceService;
    private final TeamService teamService;
    private final CategoryService categoryService;
    private final PersonService personService;
    private final TransactionOperations<Connection> transactionOperations;

    public ParticipantService(ParticipantRepository repository, AgeGroupService ageGroupService, RaceService raceService, TeamService teamService, CategoryService categoryService, PersonService personService, TransactionOperations<Connection> transactionOperations) {
        this.repository = repository;
        this.ageGroupService = ageGroupService;
        this.raceService = raceService;
        this.teamService = teamService;
        this.categoryService = categoryService;
        this.personService = personService;
        this.transactionOperations = transactionOperations;
    }

    public Participant create(Participant participant) {
        validate(participant, null);
        return repository.save(participant);
    }

    public Iterable<Participant> findAll() {
        return repository.findAll();
    }

    public Optional<Participant> findById(Long id) {
        return repository.findById(id);
    }

    public Optional<Participant> update(Long id, Participant participant) {
        Optional<Participant> existing = repository.findById(id);
        if (existing.isPresent()) {
            validate(participant, id);
            // durationMs/penalty/measuredAt are omitted by most update flows (e.g. editing name/team) and must not
            // wipe out a time that was already assigned via the measurement sync; only overwrite when provided.
            Integer durationMs = participant.durationMs() != null ? participant.durationMs() : existing.get().durationMs();
            Integer penalty = participant.penalty() != null ? participant.penalty() : existing.get().penalty();
            var measuredAt = participant.measuredAt() != null ? participant.measuredAt() : existing.get().measuredAt();
            Participant updated = new Participant(id, participant.raceId(), participant.personId(), participant.raceNumber(), participant.teamId(), participant.categoryId(), durationMs, penalty, measuredAt, participant.comment());
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
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
                    existing.comment()
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
        if (raceService.findById(participant.raceId()).isEmpty()) {
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
        if (participant.penalty() != null && participant.penalty() < 0) {
            // RankingService.adjustedValue() applies the penalty directly (+/- depending on sort
            // direction) with no floor; a negative penalty can drive the adjusted value negative,
            // which formatTime()/formatDuration() render as garbled strings like "-1:-1.-500".
            throw new IllegalArgumentException("penalty must not be negative");
        }
        if (participant.durationMs() != null && participant.durationMs() < 0) {
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

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private List<AgeGroup> allAgeGroups() {
        return StreamSupport.stream(ageGroupService.findAll().spliterator(), false).toList();
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
     * Builds response DTOs for a batch of participants, batch-loading each referenced
     * race/person/team/category once instead of issuing one lookup per participant per
     * relation (the previous per-participant approach did 5+ queries per row).
     */
    public List<ParticipantResponse> toResponses(List<Participant> participants) {
        Set<Long> raceIds = new HashSet<>();
        Set<Long> personIds = new HashSet<>();
        Set<Long> teamIds = new HashSet<>();
        Set<Long> categoryIds = new HashSet<>();
        for (Participant p : participants) {
            if (p.raceId() != null) raceIds.add(p.raceId());
            if (p.personId() != null) personIds.add(p.personId());
            if (p.teamId() != null) teamIds.add(p.teamId());
            if (p.categoryId() != null) categoryIds.add(p.categoryId());
        }

        Map<Long, Race> racesById = raceService.findByIds(raceIds);
        Map<Long, Person> personsById = personService.findByIds(personIds);
        Map<Long, Team> teamsById = teamService.findByIds(teamIds);
        Map<Long, Category> categoriesById = categoryService.findByIds(categoryIds);
        List<AgeGroup> ageGroups = allAgeGroups();

        List<ParticipantResponse> result = new ArrayList<>();
        for (Participant p : participants) {
            Race race = p.raceId() != null ? racesById.get(p.raceId()) : null;
            Person person = p.personId() != null ? personsById.get(p.personId()) : null;
            Team team = p.teamId() != null ? teamsById.get(p.teamId()) : null;
            Category category = p.categoryId() != null ? categoriesById.get(p.categoryId()) : null;
            AgeGroup ageGroup = person != null ? findMatchingAgeGroup(person, ageGroups).orElse(null) : null;

            result.add(ParticipantResponse.from(
                    p,
                    person != null ? PersonResponse.from(person) : null,
                    race != null ? RaceResponse.from(race) : null,
                    team != null ? TeamResponse.from(team) : null,
                    category != null ? CategoryResponse.from(category) : null,
                    ageGroup != null ? AgeGroupResponse.from(ageGroup) : null
            ));
        }
        return result;
    }

    public Iterable<Participant> findByRaceId(Long raceId) {
        return repository.findByRaceId(raceId);
    }

    public void deleteByRaceId(Long raceId) {
        repository.deleteByRaceId(raceId);
    }

    /**
     * Copies every participant of {@code sourceRaceId} into each of {@code targetRaceIds}, carrying
     * over personId/teamId/categoryId but leaving durationMs/penalty/measuredAt empty (each race
     * measures its own result). raceNumber is carried over only if {@code carryStartNumber} is true
     * and the number isn't already taken in the target race (to avoid duplicate start numbers); it is
     * left empty otherwise. A person already present in a target race is skipped rather than duplicated.
     */
    public ParticipantCopyResponse copyParticipants(Long sourceRaceId, List<Long> targetRaceIds, boolean carryStartNumber) {
        // Now that PRAGMA foreign_keys=ON is enabled, saving a participant for a race that doesn't
        // exist would otherwise throw a raw FK-constraint exception straight out of repository.save()
        // instead of a clean, caught error.
        if (raceService.findById(sourceRaceId).isEmpty()) {
            throw new IllegalArgumentException("Race with id " + sourceRaceId + " does not exist");
        }
        for (Long targetRaceId : targetRaceIds) {
            if (raceService.findById(targetRaceId).isEmpty()) {
                throw new IllegalArgumentException("Race with id " + targetRaceId + " does not exist");
            }
        }

        List<Participant> sourceParticipants = StreamSupport
                .stream(repository.findByRaceId(sourceRaceId).spliterator(), false)
                .toList();

        // Wrapped as one transaction so a failure partway through (e.g. target race #3 of 5 hitting
        // a real, non-uniqueness DataAccessException) rolls back every already-copied target race
        // instead of leaving the caller with a confusing, undocumented partial copy.
        return transactionOperations.executeWrite(status -> {
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
                        .filter(java.util.Objects::nonNull)
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
                    Participant copy = new Participant(null, targetRaceId, source.personId(), raceNumber,
                            source.teamId(), source.categoryId(), null, null, null, null);
                    try {
                        repository.save(copy);
                    } catch (DataAccessException e) {
                        // existingRaceNumbers is a snapshot taken before this loop started - it can be
                        // stale if another request concurrently claimed this race number in the same
                        // target race. Fall back to no start number for this participant instead of
                        // aborting the rest of the copy over a single collision.
                        if (raceNumber == null || !isUniqueConstraintViolation(e)) {
                            throw e;
                        }
                        repository.save(new Participant(null, targetRaceId, source.personId(), null,
                                source.teamId(), source.categoryId(), null, null, null, null));
                        raceNumber = null;
                    }
                    if (raceNumber != null) {
                        existingRaceNumbers.add(raceNumber);
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
     */
    public List<Participant> assignRaceNumbers(Long raceId) {
        List<Participant> participants = StreamSupport.stream(repository.findByRaceId(raceId).spliterator(), false).toList();

        Set<Long> personIds = participants.stream().map(Participant::personId).filter(Objects::nonNull).collect(Collectors.toSet());
        Map<Long, Person> personsById = personService.findByIds(personIds);

        List<AgeGroup> ageGroups = StreamSupport.stream(ageGroupService.findAll().spliterator(), false)
                .sorted(Comparator.comparing(AgeGroup::birthYearTo).reversed())
                .toList();

        Map<Long, List<Participant>> byAgeGroup = new LinkedHashMap<>();
        for (AgeGroup ageGroup : ageGroups) {
            byAgeGroup.put(ageGroup.id(), new ArrayList<>());
        }
        List<Participant> withoutAgeGroup = new ArrayList<>();

        for (Participant participant : participants) {
            Person person = participant.personId() != null ? personsById.get(participant.personId()) : null;
            Optional<AgeGroup> ageGroup = person != null ? findMatchingAgeGroup(person, ageGroups) : Optional.empty();
            if (ageGroup.isPresent()) {
                byAgeGroup.get(ageGroup.get().id()).add(participant);
            } else {
                withoutAgeGroup.add(participant);
            }
        }

        Random random = new Random();
        List<Participant> ordered = new ArrayList<>();
        for (AgeGroup ageGroup : ageGroups) {
            List<Participant> group = byAgeGroup.get(ageGroup.id());
            Collections.shuffle(group, random);
            ordered.addAll(group);
        }

        withoutAgeGroup.sort(Comparator.comparing(
                (Participant p) -> {
                    Person person = personsById.get(p.personId());
                    return person != null ? person.birthDate() : null;
                },
                Comparator.nullsLast(Comparator.reverseOrder())));
        ordered.addAll(withoutAgeGroup);

        // Assigning race numbers touches every participant of the race; if a write fails partway
        // through, the whole batch must roll back rather than leaving some participants renumbered
        // and others not (which risks duplicate/missing race numbers right before a start list is printed).
        //
        // Re-shuffling an already-numbered race (the normal case) reassigns numbers that are
        // currently held by OTHER participants in this same race. Since race_number is now
        // constrained UNIQUE per race, writing the new numbers directly would collide with a
        // not-yet-updated participant still holding that number. Clearing every number to NULL
        // first (SQLite treats each NULL as distinct, so this never collides) avoids that.
        return transactionOperations.executeWrite(status -> {
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

    private static Participant withRaceNumber(Participant participant, Integer raceNumber) {
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
                participant.comment()
        );
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
            importRow(raceId, lineNumber, line,
                    new ImportRowFields(parts[0], parts[1], parts[2], parts[3], parts[4], externalId,
                            null, null, null, null, null, null),
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

        int rowNumber = 1;
        for (Map<String, String> row : parsed.rows()) {
            rowNumber++;
            importRow(raceId, rowNumber, row.toString(),
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
                            valueFor(row, effectiveMapping, "measuredAt")),
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
            case CSV -> ParticipantImportParsers.parseCsv(new String(fileBytes, StandardCharsets.UTF_8), delimiter);
            case DSV_XML -> ParticipantImportParsers.parseDsvXml(new ByteArrayInputStream(fileBytes));
        };
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
                    p.measuredAt() != null ? p.measuredAt().toString() : ""
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
            String durationMs, String penalty, String measuredAt) {
    }

    /**
     * Validates and saves a single import row (shared by the fixed-column CSV import and the
     * mapped/generic import), appending either to {@code imported} or {@code errors} - never throws.
     * {@code existingNameBirthDateKeys} is grown in place so duplicate ExternalId-less rows later in
     * the same file are also caught.
     */
    private void importRow(Long raceId, int rowNumber, String rawRowDescription, ImportRowFields fields,
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
        LocalDateTime measuredAt = parseMeasuredAt(fields.measuredAt());

        // Each row is its own transaction: a failure saving the participant rolls back a
        // just-created person for that row too (no orphan Person left behind), and does not
        // abort rows that were already imported successfully or rows still to come.
        try {
            Participant saved = transactionOperations.executeWrite(status -> {
                Long teamId = teamName.isEmpty() ? null : teamService.findOrCreateByName(teamName).id();
                Long categoryId = categoryName.isEmpty() ? null : categoryService.findOrCreateByName(categoryName).id();
                // AgeGroup isn't a participant FK - it's computed from birthDate/gender at read time
                // (findMatchingAgeGroup) - so importing "Klasse" just needs a matching AgeGroup row to
                // exist, not anything set on the Participant itself.
                if (!ageGroupName.isEmpty()) {
                    ageGroupService.findOrCreateForImport(ageGroupName, birthDate.getYear(), gender);
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

                Participant participant = new Participant(null, raceId, person.id(), raceNumber, teamId, categoryId, durationMs, penalty, measuredAt, null);
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
