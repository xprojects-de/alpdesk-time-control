package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.RaceRequest;
import x.timecontrol.entities.Race;
import x.timecontrol.entities.ResultUnit;
import x.timecontrol.entities.SortDirection;
import x.timecontrol.repositories.ParticipantRepository;
import x.timecontrol.repositories.RaceRepository;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

@Singleton
public class RaceService {

    private final RaceRepository repository;
    private final ParticipantRepository participantRepository;
    private final MeasurementTableLock measurementTableLock;

    public RaceService(RaceRepository repository, ParticipantRepository participantRepository, MeasurementTableLock measurementTableLock) {
        this.repository = repository;
        this.participantRepository = participantRepository;
        this.measurementTableLock = measurementTableLock;
    }

    public Race create(Race race) {
        assertNameAvailable(race.name(), null);
        return repository.save(race);
    }

    public Iterable<Race> findAll() {
        return repository.findAll();
    }

    public Optional<Race> findById(Long id) {
        return repository.findById(id);
    }

    /**
     * Batch-loads races by id in a single query, e.g. for building a list response without
     * issuing one lookup per row.
     */
    public Map<Long, Race> findByIds(Set<Long> ids) {
        if (ids.isEmpty()) {
            return Collections.emptyMap();
        }
        Map<Long, Race> result = new HashMap<>();
        for (Race race : repository.findByIdIn(ids)) {
            result.put(race.id(), race);
        }
        return result;
    }

    public Optional<Race> findByName(String name) {
        return repository.findByName(name);
    }

    public Optional<Race> update(Long id, Race race) {
        Optional<Race> existing = repository.findById(id);
        if (existing.isPresent()) {
            assertNameAvailable(race.name(), id);
            // resultUnit/sortDirection defaulting is already applied once, in createFromRequest() -
            // the only place that ever builds the `race` object passed in here.
            Race updated = new Race(
                    id,
                    race.name(),
                    race.date(),
                    race.organisation(),
                    race.referee(),
                    race.raceDirector(),
                    race.timeControl(),
                    race.routeName(),
                    race.elevationDifference(),
                    race.routeLength(),
                    race.courseSetter(),
                    race.weather(),
                    race.resultUnit(),
                    race.resultUnitLabel(),
                    race.sortDirection()
            );
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    /**
     * @throws IllegalStateException if participants are still assigned to this race and {@code force} is false
     */
    public void delete(Long id, boolean force) {
        if (!force) {
            long assigned = participantRepository.countByRaceId(id);
            if (assigned > 0) {
                throw new IllegalStateException(assigned + " Teilnehmer sind diesem Rennen zugeordnet. " +
                        "Beim Löschen werden alle Teilnehmer, Messungen und Zuordnungen dieses Rennens " +
                        "unwiderruflich gelöscht. Trotzdem löschen?");
            }
        }
        // race_measurement.race_id has ON DELETE CASCADE, so deleting a race implicitly writes to
        // race_measurement - the same table archive/reset operations guard with this lock. Without
        // taking it here too, a concurrent archive could race with this cascade.
        measurementTableLock.run(() -> repository.deleteById(id));
    }

    public Race createFromRequest(RaceRequest request) {
        return new Race(
                null,
                request.name().trim(),
                request.date(),
                request.organisation(),
                request.referee(),
                request.raceDirector(),
                request.timeControl(),
                request.routeName(),
                request.elevationDifference(),
                request.routeLength(),
                request.courseSetter(),
                request.weather(),
                request.resultUnit() != null ? request.resultUnit() : ResultUnit.TIME,
                request.resultUnitLabel(),
                request.sortDirection() != null ? request.sortDirection() : SortDirection.ASC
        );
    }

    /**
     * @throws IllegalStateException if another race already has this name (case-insensitive)
     */
    private void assertNameAvailable(String name, Long excludeId) {
        Optional<Race> conflict = repository.findByNameIgnoreCase(name);
        if (conflict.isPresent() && !conflict.get().id().equals(excludeId)) {
            throw new IllegalStateException("A race named \"" + name + "\" already exists");
        }
    }
}

