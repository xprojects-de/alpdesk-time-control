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
        measurementTableLock.run(() -> copyIntoRaceAndClear(raceId));
    }

    /**
     * Resets the device as the last step inside the archive's transaction. Resetting it first would
     * leave an emptied device next to a still-filled table whenever the copy fails - the device then
     * counts from 1 again, and its next finish would overwrite the stored row with that device id,
     * keeping the old row's participant. This way a failing copy never reaches the device, and a
     * failing reset rolls the copy back, so device and table always stay in step.
     *
     * @throws DeviceResetFailedException if the device does not confirm the reset; nothing is archived
     */
    @Transactional
    public void archiveMeasurementsAndResetDevice(Long raceId, TimingDataImporter device) {
        measurementTableLock.run(() -> {
            copyIntoRaceAndClear(raceId);
            if (!device.resetDevice()) {
                throw new DeviceResetFailedException("Failed to reset device. Measurements were not archived.");
            }
        });
    }

    private void copyIntoRaceAndClear(Long raceId) {
        repository.copyFromMeasurements(raceId);
        measurementRepository.deleteAll();
        measurementRepository.resetSequence();
    }

    public List<RaceMeasurement> findByRaceId(Long raceId) {
        return repository.findByRaceId(raceId);
    }

    public Optional<RaceMeasurement> findById(Long id) {
        return repository.findById(id);
    }

    /**
     * @throws IllegalStateException if participantId is already assigned to another measurement of the same race
     */
    public Optional<RaceMeasurement> update(Long id, RaceMeasurement raceMeasurement) {
        return measurementTableLock.get(() -> {
            Optional<RaceMeasurement> existing = repository.findById(id);
            if (existing.isPresent()) {
                if (raceMeasurement.participantId() != null) {
                    Optional<RaceMeasurement> conflict = repository.findByRaceIdAndParticipantId(
                            existing.get().raceId(), raceMeasurement.participantId());
                    if (conflict.isPresent() && !conflict.get().id().equals(id)) {
                        throw new IllegalStateException("This participant is already assigned to another measurement in this race");
                    }
                }
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
        });
    }

    public void delete(Long id) {
        measurementTableLock.run(() -> repository.deleteById(id));
    }
}
