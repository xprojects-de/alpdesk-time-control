package x.timecontrol.services;

import x.timecontrol.dto.AgeGroupResponse;
import x.timecontrol.dto.RaceResponse;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Participant;
import x.timecontrol.repositories.ParticipantRepository;
import jakarta.inject.Singleton;

import java.util.Optional;

@Singleton
public class ParticipantService {

    private final ParticipantRepository repository;
    private final AgeGroupService ageGroupService;
    private final RaceService raceService;

    public ParticipantService(ParticipantRepository repository, AgeGroupService ageGroupService, RaceService raceService) {
        this.repository = repository;
        this.ageGroupService = ageGroupService;
        this.raceService = raceService;
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
            Participant updated = new Participant(id, participant.raceId(), participant.firstName(), participant.lastName(), participant.birthDate(), participant.gender(), participant.raceNumber(), participant.association());
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

    public Optional<AgeGroupResponse> findAgeGroupForParticipant(Participant participant) {
        if (participant.birthDate() == null) {
            return Optional.empty();
        }

        int birthYear = participant.birthDate().getYear();

        Iterable<AgeGroup> ageGroups = ageGroupService.findAll();

        for (AgeGroup ageGroup : ageGroups) {

            boolean yearMatches = ageGroupService.isYearInAgeGroup(ageGroup, birthYear);
            boolean genderMatches = ageGroup.gender() == participant.gender() ||
                                   ageGroup.gender() == x.timecontrol.entities.Gender.BOTH;

            if (yearMatches && genderMatches) {
                return Optional.of(AgeGroupResponse.from(ageGroup));
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
}
