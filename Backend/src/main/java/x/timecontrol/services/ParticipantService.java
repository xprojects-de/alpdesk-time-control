package x.timecontrol.services;

import x.timecontrol.entities.Participant;
import x.timecontrol.repositories.ParticipantRepository;
import jakarta.inject.Singleton;

import java.util.Optional;

@Singleton
public class ParticipantService {

    private final ParticipantRepository repository;

    public ParticipantService(ParticipantRepository repository) {
        this.repository = repository;
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
}
