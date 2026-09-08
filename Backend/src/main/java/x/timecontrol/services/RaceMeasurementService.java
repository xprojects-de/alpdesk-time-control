package x.timecontrol.services;

import x.timecontrol.entities.RaceMeasurement;
import x.timecontrol.repositories.MeasurementRepository;
import x.timecontrol.repositories.RaceMeasurementRepository;
import jakarta.inject.Singleton;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;

@Singleton
public class RaceMeasurementService {

    private final RaceMeasurementRepository repository;
    private final MeasurementRepository measurementRepository;
    private final MeasurementTableLock measurementTableLock;

    public RaceMeasurementService(RaceMeasurementRepository repository, MeasurementRepository measurementRepository, MeasurementTableLock measurementTableLock) {
        this.repository = repository;
        this.measurementRepository = measurementRepository;
        this.measurementTableLock = measurementTableLock;
    }

    public void copyMeasurements(Long raceId) {
        measurementTableLock.run(() -> repository.copyFromMeasurements(raceId));
    }

    @Transactional
    public void archiveMeasurements(Long raceId) {
        measurementTableLock.run(() -> {
            repository.copyFromMeasurements(raceId);
            measurementRepository.deleteAll();
            measurementRepository.resetSequence();
        });
    }

    public List<RaceMeasurement> findByRaceId(Long raceId) {
        return repository.findByRaceId(raceId);
    }

    public Optional<RaceMeasurement> findById(Long id) {
        return repository.findById(id);
    }

    public Optional<RaceMeasurement> update(Long id, RaceMeasurement raceMeasurement) {
        Optional<RaceMeasurement> existing = repository.findById(id);
        if (existing.isPresent()) {
            RaceMeasurement updated = new RaceMeasurement(
                    id,
                    existing.get().raceId(),
                    existing.get().deviceMeasurementId(),
                    raceMeasurement.participantId(),
                    raceMeasurement.durationMs(),
                    raceMeasurement.measuredAt()
            );
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
