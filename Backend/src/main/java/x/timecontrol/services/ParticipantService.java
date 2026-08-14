package x.timecontrol.services;

import x.timecontrol.dto.AgeGroupResponse;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Participant;
import x.timecontrol.repositories.ParticipantRepository;
import jakarta.inject.Singleton;

import java.util.Optional;

@Singleton
public class ParticipantService {

    private final ParticipantRepository repository;
    private final AgeGroupService ageGroupService;

    public ParticipantService(ParticipantRepository repository, AgeGroupService ageGroupService) {
        this.repository = repository;
        this.ageGroupService = ageGroupService;
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
            Participant updated = new Participant(id, participant.firstName(), participant.lastName(), participant.birthDate(), participant.gender(), participant.raceNumber(), participant.association());
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Optional<AgeGroupResponse> findAgeGroupForParticipant(Participant participant) {
        if (participant.birthDate() == null) {
            return Optional.empty();
        }

        int birthYear = participant.birthDate().getYear();

        Iterable<AgeGroup> ageGroups = ageGroupService.findAll();

        for (AgeGroup ageGroup : ageGroups) {
            if (ageGroupService.isYearInAgeGroup(ageGroup, birthYear)) {
                return Optional.of(AgeGroupResponse.from(ageGroup));
            }
        }

        return Optional.empty();
    }
}
