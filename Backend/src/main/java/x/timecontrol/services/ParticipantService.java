package x.timecontrol.services;

import x.timecontrol.dto.AgeGroupResponse;
import x.timecontrol.dto.CategoryResponse;
import x.timecontrol.dto.RaceResponse;
import x.timecontrol.dto.TeamResponse;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Gender;
import x.timecontrol.entities.Participant;
import x.timecontrol.repositories.ParticipantRepository;
import jakarta.inject.Singleton;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.stream.StreamSupport;

@Singleton
public class ParticipantService {

    private final ParticipantRepository repository;
    private final AgeGroupService ageGroupService;
    private final RaceService raceService;
    private final TeamService teamService;
    private final CategoryService categoryService;

    public ParticipantService(ParticipantRepository repository, AgeGroupService ageGroupService, RaceService raceService, TeamService teamService, CategoryService categoryService) {
        this.repository = repository;
        this.ageGroupService = ageGroupService;
        this.raceService = raceService;
        this.teamService = teamService;
        this.categoryService = categoryService;
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
            Participant updated = new Participant(id, participant.raceId(), participant.firstName(), participant.lastName(), participant.birthDate(), participant.gender(), participant.raceNumber(), participant.teamId(), participant.categoryId(), participant.durationMs(), participant.measuredAt());
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
        if (participant.birthDate() == null) {
            return Optional.empty();
        }

        int birthYear = participant.birthDate().getYear();

        for (AgeGroup ageGroup : ageGroupService.findAll()) {
            boolean yearMatches = ageGroupService.isYearInAgeGroup(ageGroup, birthYear);
            boolean genderMatches = ageGroup.gender() == participant.gender() ||
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

        withoutAgeGroup.sort(Comparator.comparing(Participant::birthDate, Comparator.nullsLast(Comparator.reverseOrder())));
        ordered.addAll(withoutAgeGroup);

        List<Participant> result = new ArrayList<>();
        int raceNumber = 1;
        for (Participant participant : ordered) {
            Participant updated = new Participant(
                    participant.id(),
                    participant.raceId(),
                    participant.firstName(),
                    participant.lastName(),
                    participant.birthDate(),
                    participant.gender(),
                    raceNumber++,
                    participant.teamId(),
                    participant.categoryId(),
                    participant.durationMs(),
                    participant.measuredAt()
            );
            result.add(repository.update(updated));
        }
        return result;
    }
}
