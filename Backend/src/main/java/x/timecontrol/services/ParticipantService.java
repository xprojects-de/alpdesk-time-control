package x.timecontrol.services;

import x.timecontrol.dto.AgeGroupResponse;
import x.timecontrol.dto.CategoryResponse;
import x.timecontrol.dto.ParticipantCopyResponse;
import x.timecontrol.dto.ParticipantImportRowError;
import x.timecontrol.dto.PersonResponse;
import x.timecontrol.dto.RaceResponse;
import x.timecontrol.dto.TeamResponse;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Gender;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Person;
import x.timecontrol.repositories.ParticipantRepository;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
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

    public ParticipantService(ParticipantRepository repository, AgeGroupService ageGroupService, RaceService raceService, TeamService teamService, CategoryService categoryService, PersonService personService) {
        this.repository = repository;
        this.ageGroupService = ageGroupService;
        this.raceService = raceService;
        this.teamService = teamService;
        this.categoryService = categoryService;
        this.personService = personService;
    }

    public Participant create(Participant participant) {

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

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Optional<RaceResponse> findRaceForParticipant(Participant participant) {
        if (participant.raceId() == null) {
            return Optional.empty();
        }
        return raceService.findById(participant.raceId())
                .map(RaceResponse::from);
    }

    public Optional<PersonResponse> findPersonForParticipant(Participant participant) {
        if (participant.personId() == null) {
            return Optional.empty();
        }
        return personService.findById(participant.personId())
                .map(PersonResponse::from);
    }

    public Optional<TeamResponse> findTeamForParticipant(Participant participant) {
        if (participant.teamId() == null) {
            return Optional.empty();
        }
        return teamService.findById(participant.teamId())
                .map(TeamResponse::from);
    }

    public Optional<CategoryResponse> findCategoryForParticipant(Participant participant) {
        if (participant.categoryId() == null) {
            return Optional.empty();
        }
        return categoryService.findById(participant.categoryId())
                .map(CategoryResponse::from);
    }

    public Optional<AgeGroupResponse> findAgeGroupForParticipant(Participant participant) {
        return findMatchingAgeGroup(participant).map(AgeGroupResponse::from);
    }

    private Optional<AgeGroup> findMatchingAgeGroup(Participant participant) {
        Optional<Person> person = participant.personId() != null ? personService.findById(participant.personId()) : Optional.empty();
        return person.flatMap(this::findMatchingAgeGroup);
    }

    private Optional<AgeGroup> findMatchingAgeGroup(Person person) {
        if (person.birthDate() == null) {
            return Optional.empty();
        }

        int birthYear = person.birthDate().getYear();

        for (AgeGroup ageGroup : ageGroupService.findAll()) {
            boolean yearMatches = ageGroupService.isYearInAgeGroup(ageGroup, birthYear);
            boolean genderMatches = ageGroup.gender() == person.gender() ||
                                   ageGroup.gender() == Gender.BOTH;

            if (yearMatches && genderMatches) {
                return Optional.of(ageGroup);
            }
        }

        return Optional.empty();
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

        List<AgeGroup> ageGroups = StreamSupport.stream(ageGroupService.findAll().spliterator(), false)
                .sorted(Comparator.comparing(AgeGroup::birthYearTo).reversed())
                .toList();

        Map<Long, List<Participant>> byAgeGroup = new LinkedHashMap<>();
        for (AgeGroup ageGroup : ageGroups) {
            byAgeGroup.put(ageGroup.id(), new ArrayList<>());
        }
        List<Participant> withoutAgeGroup = new ArrayList<>();

        for (Participant participant : participants) {
            Optional<AgeGroup> ageGroup = findMatchingAgeGroup(participant);
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
                (Participant p) -> personService.findById(p.personId()).map(Person::birthDate).orElse(null),
                Comparator.nullsLast(Comparator.reverseOrder())));
        ordered.addAll(withoutAgeGroup);

        List<Participant> result = new ArrayList<>();
        int raceNumber = 1;
        for (Participant participant : ordered) {
            Participant updated = new Participant(
                    participant.id(),
                    participant.raceId(),
                    participant.personId(),
                    raceNumber++,
                    participant.teamId(),
                    participant.categoryId(),
                    participant.durationMs(),
                    participant.penalty(),
                    participant.measuredAt()
            );
            result.add(repository.update(updated));
        }
        return result;
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

            Long teamId = teamName.isEmpty() ? null : teamService.findOrCreateByName(teamName).id();

            Person person;
            if (!externalId.isEmpty()) {
                person = personService.findByExternalId(externalId)
                        .orElseGet(() -> personService.create(new Person(null, firstName, lastName, birthDate, gender, externalId)));
            } else {
                person = personService.create(new Person(null, firstName, lastName, birthDate, gender, null));
            }

            Participant participant = new Participant(null, raceId, person.id(), null, teamId, null, null, null, null);
            imported.add(repository.save(participant));
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
