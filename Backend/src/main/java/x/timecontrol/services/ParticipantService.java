package x.timecontrol.services;

import x.timecontrol.dto.AgeGroupResponse;
import x.timecontrol.dto.CategoryResponse;
import x.timecontrol.dto.ParticipantCopyResponse;
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
import x.timecontrol.entities.Team;
import x.timecontrol.repositories.ParticipantRepository;
import io.micronaut.transaction.TransactionOperations;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.Connection;
import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
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
            Participant updated = new Participant(id, participant.raceId(), participant.personId(), participant.raceNumber(), participant.teamId(), participant.categoryId(), durationMs, penalty, measuredAt);
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
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
     * over personId/teamId/categoryId but leaving raceNumber/durationMs/penalty/measuredAt empty
     * (each race measures its own result). A person already present in a target race is skipped
     * rather than duplicated.
     */
    public ParticipantCopyResponse copyParticipants(Long sourceRaceId, List<Long> targetRaceIds) {
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

        int copied = 0;
        int skipped = 0;
        for (Long targetRaceId : targetRaceIds) {
            Set<Long> existingPersonIds = StreamSupport
                    .stream(repository.findByRaceId(targetRaceId).spliterator(), false)
                    .map(Participant::personId)
                    .collect(Collectors.toSet());

            for (Participant source : sourceParticipants) {
                if (existingPersonIds.contains(source.personId())) {
                    skipped++;
                    continue;
                }
                Participant copy = new Participant(null, targetRaceId, source.personId(), null,
                        source.teamId(), source.categoryId(), null, null, null);
                repository.save(copy);
                existingPersonIds.add(source.personId());
                copied++;
            }
        }

        return new ParticipantCopyResponse(copied, skipped);
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
                participant.measuredAt()
        );
    }

    /**
     * Imports participants for a race from a CSV file with columns Lastname,Firstname,Birthdate,Team,Gender and an
     * optional 6th ExternalId column. The header row is ignored. Teams are resolved case-insensitively and created
     * (uppercased) if they don't exist yet. Rows with a missing or invalid gender (only MALE/FEMALE are accepted) or
     * birthdate are skipped.
     * ExternalId is entirely optional: rows may have only 5 columns (older format, no ExternalId at all), or 6
     * columns with an empty last field. When an ExternalId is given, it is used to find-or-create the matching
     * Person (an existing match is reused as-is, its stored name/birthdate/gender are never overwritten from the
     * CSV) so the same person can be imported again for a later race/season without creating a duplicate. Rows
     * without an ExternalId always create a new Person, since name+birthdate matching alone is too unreliable to
     * dedupe automatically.
     */
    public ParticipantImportResult importFromCsv(Long raceId, BufferedReader reader) throws IOException {
        List<Participant> imported = new ArrayList<>();
        List<ParticipantImportRowError> errors = new ArrayList<>();

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

            String lastName = parts[0].trim();
            String firstName = parts[1].trim();
            String birthDateRaw = parts[2].trim();
            String teamName = parts[3].trim();
            String genderRaw = parts[4].trim();
            String externalId = parts.length > 5 ? parts[5].trim() : "";

            if (lastName.isEmpty() || firstName.isEmpty()) {
                errors.add(new ParticipantImportRowError(lineNumber, line, "Lastname and Firstname are required"));
                continue;
            }

            Gender gender = parseGender(genderRaw);
            if (gender == null) {
                errors.add(new ParticipantImportRowError(lineNumber, line,
                        "Missing or invalid gender (expected MALE or FEMALE), row skipped"));
                continue;
            }

            LocalDate birthDate;
            try {
                birthDate = LocalDate.parse(birthDateRaw);
            } catch (DateTimeParseException e) {
                errors.add(new ParticipantImportRowError(lineNumber, line, "Invalid birthdate format (expected yyyy-MM-dd)"));
                continue;
            }

            // Each row is its own transaction: a failure saving the participant rolls back a
            // just-created person for that row too (no orphan Person left behind), and does not
            // abort rows that were already imported successfully or rows still to come.
            try {
                Participant saved = transactionOperations.executeWrite(status -> {
                    Long teamId = teamName.isEmpty() ? null : teamService.findOrCreateByName(teamName).id();

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

                    Participant participant = new Participant(null, raceId, person.id(), null, teamId, null, null, null, null);
                    return repository.save(participant);
                });
                imported.add(saved);
            } catch (Exception e) {
                String reason = e.getMessage() != null ? e.getMessage() : e.getClass().getSimpleName();
                LOG.warn("Failed to import row {} for race {}: {}", lineNumber, raceId, reason);
                errors.add(new ParticipantImportRowError(lineNumber, line, "Failed to save row: " + reason));
            }
        }

        LOG.info("CSV import for race {} finished: {} imported, {} skipped", raceId, imported.size(), errors.size());

        return new ParticipantImportResult(imported, errors);
    }

    private Gender parseGender(String rawGender) {
        if (rawGender.isEmpty()) {
            return null;
        }
        try {
            Gender gender = Gender.valueOf(rawGender.toUpperCase());
            return gender == Gender.MALE || gender == Gender.FEMALE ? gender : null;
        } catch (IllegalArgumentException e) {
            return null;
        }
    }

    public record ParticipantImportResult(List<Participant> imported, List<ParticipantImportRowError> errors) {
    }
}
