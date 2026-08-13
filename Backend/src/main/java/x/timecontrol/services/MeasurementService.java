package x.timecontrol.services;

import x.timecontrol.entities.Measurement;
import x.timecontrol.repositories.MeasurementRepository;
import jakarta.inject.Singleton;

import java.util.List;
import java.util.Optional;

@Singleton
public class MeasurementService {

    private final MeasurementRepository repository;

    public MeasurementService(MeasurementRepository repository) {
        this.repository = repository;
    }

    public Measurement create(Measurement measurement) {
        return repository.save(measurement);
    }

    public Iterable<Measurement> findAll() {
        return repository.findAll();
    }

    public List<Measurement> findByParticipantId(Long participantId) {
        return repository.findByParticipantId(participantId);
    }

    public Optional<Measurement> findById(Long id) {
        return repository.findById(id);
    }

    public Optional<Measurement> update(Long id, Measurement measurement) {
        Optional<Measurement> existing = repository.findById(id);
        if (existing.isPresent()) {
            Measurement updated = new Measurement(
                    id,
                    measurement.participantId(),
                    measurement.durationMs(),
                    measurement.measuredAt()
            );
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}

