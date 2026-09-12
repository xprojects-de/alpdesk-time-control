package x.timecontrol.services;

import x.timecontrol.entities.Measurement;
import x.timecontrol.entities.Participant;
import x.timecontrol.repositories.MeasurementRepository;
import x.timecontrol.repositories.ParticipantRepository;
import jakarta.inject.Singleton;

import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Live auto-assign mode: while active for a race, every still-unassigned device measurement is
 * matched to the participant currently at the front of the auto-assign queue (ascending race
 * number). The match is written straight onto the raw measurement - the same "measurement" table
 * and "participantId" field the Messungen screen already reads and edits.
 * <p>
 * Nothing is archived into a race here. That only happens when the operator explicitly clicks
 * "Archivieren", at which point the existing copy-from-measurements logic (see
 * {@link RaceMeasurementService}) carries these participantId values over into race_measurement,
 * since it already reads them from this same table. Until then, a match is easy to undo or correct
 * (edit/delete the raw measurement) without having touched any race data - "just in RAM", as far as
 * the race is concerned.
 * <p>
 * This mirrors the finish device's own pairing logic: see the firmware's StopWatch, which pairs
 * each finish trigger with the oldest still-open start time in a FIFO queue. Both assume arrival
 * order equals start order, so an overtake that breaks that assumption on the device already
 * produces a wrong duration there, not just a wrong participant match here.
 * <p>
 * State is in-memory only, the same convention {@link DataImportScheduler#isScheduledImportActive()}
 * already uses for "is a live mode currently on": it has to be re-enabled after a backend restart.
 * Every read and write of that state goes through {@link MeasurementTableLock}, the same lock
 * already used for the underlying measurement table. That's needed because
 * {@link #processNewMeasurements()} runs on a scheduler thread every few seconds while enable/
 * disable/skip/setNextRaceNumber run on HTTP request threads; without a shared lock, two of these
 * racing (e.g. a skip landing mid-cycle) could each compute the next race number from a stale read
 * and one update silently overwrite the other.
 */
@Singleton
public class AutoAssignService {

    private final MeasurementRepository measurementRepository;
    private final ParticipantRepository participantRepository;
    private final MeasurementTableLock measurementTableLock;

    // Guarded exclusively by measurementTableLock - see class javadoc. Not volatile: the lock
    // already provides the necessary visibility and, unlike volatile alone, also makes the
    // read-then-write updates below atomic with respect to each other.
    private Long activeRaceId;
    private Integer nextRaceNumber;

    public AutoAssignService(MeasurementRepository measurementRepository,
                              ParticipantRepository participantRepository,
                              MeasurementTableLock measurementTableLock) {
        this.measurementRepository = measurementRepository;
        this.participantRepository = participantRepository;
        this.measurementTableLock = measurementTableLock;
    }

    public record Status(Long raceId, boolean active, Integer nextRaceNumber) {
    }

    public Status getStatus() {
        return measurementTableLock.get(this::currentStatus);
    }

    /**
     * An explicit startRaceNumber is always honored exactly as given (e.g. deliberately re-matching
     * from a specific number). The default (none given) skips forward past any race number whose
     * participant already has a measurement, so "next expected" never points at someone already done.
     */
    public Status enable(Long raceId, Integer startRaceNumber) {
        return measurementTableLock.get(() -> {
            if (startRaceNumber != null) {
                nextRaceNumber = startRaceNumber;
            } else {
                List<Integer> raceNumbers = sortedRaceNumbers(raceId);
                nextRaceNumber = skipAlreadyAssigned(raceId, raceNumbers, raceNumbers.stream().findFirst().orElse(null), assignedParticipantIds());
            }
            activeRaceId = raceId;
            return currentStatus();
        });
    }

    public Status disable() {
        return measurementTableLock.get(() -> {
            activeRaceId = null;
            nextRaceNumber = null;
            return currentStatus();
        });
    }

    /**
     * @throws IllegalStateException if auto-assign mode is not currently active
     */
    public Status skip() {
        return measurementTableLock.get(() -> {
            Long raceId = requireActive();
            List<Integer> raceNumbers = sortedRaceNumbers(raceId);
            nextRaceNumber = skipAlreadyAssigned(raceId, raceNumbers, firstGreaterThan(raceNumbers, nextRaceNumber), assignedParticipantIds());
            return currentStatus();
        });
    }

    /**
     * Manual override: honored exactly as given, no skipping - the operator is explicitly pointing
     * the queue somewhere, e.g. to redo a specific race number.
     *
     * @throws IllegalStateException if auto-assign mode is not currently active
     */
    public Status setNextRaceNumber(Integer raceNumber) {
        return measurementTableLock.get(() -> {
            requireActive();
            nextRaceNumber = raceNumber;
            return currentStatus();
        });
    }

    private Status currentStatus() {
        return new Status(activeRaceId, activeRaceId != null, nextRaceNumber);
    }

    /**
     * Must only be called while holding measurementTableLock.
     *
     * @throws IllegalStateException if auto-assign mode is not currently active
     */
    private Long requireActive() {
        if (activeRaceId == null) {
            throw new IllegalStateException("Auto-assign mode is not active");
        }
        return activeRaceId;
    }

    /**
     * Called after every device import cycle (see {@link DataImportScheduler}). No-ops immediately
     * if auto-assign mode isn't active for any race. Otherwise matches every still-unassigned raw
     * measurement, in device order, to the participant at the front of the auto-assign queue - or
     * leaves the rest unassigned if the queue runs out (no more known race numbers ahead), same as
     * they already were.
     */
    public void processNewMeasurements() {
        measurementTableLock.run(() -> {
            if (activeRaceId == null) {
                return;
            }
            Long raceId = activeRaceId;

            List<Measurement> all = measurementRepository.findAll();

            List<Measurement> pending = all.stream()
                    .filter(m -> m.participantId() == null)
                    .sorted(Comparator.comparing(Measurement::id))
                    .toList();

            if (pending.isEmpty()) {
                return;
            }

            List<Integer> raceNumbers = sortedRaceNumbers(raceId);
            Set<Long> assignedParticipantIds = all.stream()
                    .map(Measurement::participantId)
                    .filter(Objects::nonNull)
                    .collect(Collectors.toCollection(HashSet::new));

            // A race number may have picked up a measurement since the last cycle through a manual
            // edit (e.g. correcting a specific row in the Messungen dialog) rather than through this
            // loop. Re-check before trusting the cursor so the same participant is never matched twice.
            nextRaceNumber = skipAlreadyAssigned(raceId, raceNumbers, nextRaceNumber, assignedParticipantIds);

            for (Measurement measurement : pending) {
                if (nextRaceNumber == null) {
                    break;
                }
                Optional<Participant> participant = participantRepository.findByRaceIdAndRaceNumber(raceId, nextRaceNumber);
                if (participant.isEmpty()) {
                    break; // shouldn't happen: nextRaceNumber is always sourced from raceNumbers
                }
                measurementRepository.update(new Measurement(
                        measurement.id(), participant.get().id(), measurement.durationMs(), measurement.measuredAt()
                ));
                assignedParticipantIds.add(participant.get().id());
                nextRaceNumber = skipAlreadyAssigned(raceId, raceNumbers, firstGreaterThan(raceNumbers, nextRaceNumber), assignedParticipantIds);
            }
        });
    }

    /**
     * Must only be called while holding measurementTableLock.
     */
    private Integer skipAlreadyAssigned(Long raceId, List<Integer> raceNumbers, Integer candidate, Set<Long> assignedParticipantIds) {
        while (candidate != null) {
            Optional<Participant> participant = participantRepository.findByRaceIdAndRaceNumber(raceId, candidate);
            if (participant.isEmpty() || !assignedParticipantIds.contains(participant.get().id())) {
                return candidate;
            }
            candidate = firstGreaterThan(raceNumbers, candidate);
        }
        return null;
    }

    private Set<Long> assignedParticipantIds() {
        return measurementRepository.findAll().stream()
                .map(Measurement::participantId)
                .filter(Objects::nonNull)
                .collect(Collectors.toCollection(HashSet::new));
    }

    private static Integer firstGreaterThan(List<Integer> sortedRaceNumbers, Integer current) {
        if (current == null) {
            return null;
        }
        return sortedRaceNumbers.stream().filter(n -> n > current).findFirst().orElse(null);
    }

    private List<Integer> sortedRaceNumbers(Long raceId) {
        return StreamSupport.stream(participantRepository.findByRaceId(raceId).spliterator(), false)
                .map(Participant::raceNumber)
                .filter(Objects::nonNull)
                .sorted()
                .toList();
    }
}
