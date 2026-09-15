package x.timecontrol.services;

import x.timecontrol.entities.Measurement;
import x.timecontrol.entities.Participant;
import x.timecontrol.repositories.MeasurementRepository;
import x.timecontrol.repositories.ParticipantRepository;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
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

    private static final Logger LOG = LoggerFactory.getLogger(AutoAssignService.class);

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
     * Used by {@link ParticipantService#assignRaceNumbers} to refuse reassigning race numbers
     * while auto-assign is live for this race: the in-flight nextRaceNumber cursor and the
     * "already assigned" bookkeeping are both keyed on race numbers, so renumbering underneath
     * them can point the cursor at a different participant than the operator intended, silently
     * crediting a finish to the wrong person.
     */
    public boolean isActiveFor(Long raceId) {
        return measurementTableLock.get(() -> Objects.equals(activeRaceId, raceId));
    }

    /**
     * An explicit startRaceNumber is always honored exactly as given (e.g. deliberately re-matching
     * from a specific number). The default (none given) skips forward past any race number whose
     * participant already has a measurement, so "next expected" never points at someone already done.
     *
     * @throws IllegalArgumentException if startRaceNumber is given but no participant in this race
     * has that race number - without this check, {@link #processNewMeasurements()} would find no
     * matching participant for it and stop matching entirely, silently stalling auto-assign for
     * every subsequent scheduler cycle with no error surfaced anywhere.
     */
    public Status enable(Long raceId, Integer startRaceNumber) {
        return measurementTableLock.get(() -> {
            RaceRoster roster = loadRoster(raceId);
            if (startRaceNumber != null) {
                if (!roster.byRaceNumber().containsKey(startRaceNumber)) {
                    throw new IllegalArgumentException("No participant in this race has race number " + startRaceNumber);
                }
                nextRaceNumber = startRaceNumber;
            } else {
                nextRaceNumber = skipAlreadyAssigned(roster, roster.raceNumbers().stream().findFirst().orElse(null), assignedParticipantIds());
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
            RaceRoster roster = loadRoster(raceId);
            nextRaceNumber = skipAlreadyAssigned(roster, firstGreaterThan(roster.raceNumbers(), nextRaceNumber), assignedParticipantIds());
            return currentStatus();
        });
    }

    /**
     * Manual override: honored exactly as given, no skipping - the operator is explicitly pointing
     * the queue somewhere, e.g. to redo a specific race number.
     *
     * @throws IllegalStateException if auto-assign mode is not currently active
     * @throws IllegalArgumentException if raceNumber is given but no participant in the active race
     * has that race number - see {@link #enable} for why this must be rejected up front.
     */
    public Status setNextRaceNumber(Integer raceNumber) {
        return measurementTableLock.get(() -> {
            Long raceId = requireActive();
            if (raceNumber != null && !loadRoster(raceId).byRaceNumber().containsKey(raceNumber)) {
                throw new IllegalArgumentException("No participant in this race has race number " + raceNumber);
            }
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

            RaceRoster roster = loadRoster(raceId);
            Set<Long> assignedParticipantIds = all.stream()
                    .map(Measurement::participantId)
                    .filter(Objects::nonNull)
                    .collect(Collectors.toCollection(HashSet::new));

            // A race number may have picked up a measurement since the last cycle through a manual
            // edit (e.g. correcting a specific row in the Messungen dialog) rather than through this
            // loop. Re-check before trusting the cursor so the same participant is never matched twice.
            nextRaceNumber = skipAlreadyAssigned(roster, nextRaceNumber, assignedParticipantIds);

            for (Measurement measurement : pending) {
                if (nextRaceNumber == null) {
                    break;
                }
                Participant participant = roster.byRaceNumber().get(nextRaceNumber);
                if (participant == null) {
                    LOG.warn("Auto-assign cursor {} has no participant in race {} - stopping", nextRaceNumber, raceId);
                    break;
                }
                measurementRepository.update(new Measurement(
                        measurement.id(), participant.id(), measurement.durationMs(), measurement.measuredAt()
                ));
                assignedParticipantIds.add(participant.id());
                nextRaceNumber = skipAlreadyAssigned(roster, firstGreaterThan(roster.raceNumbers(), nextRaceNumber), assignedParticipantIds);
            }
        });
    }

    /**
     * A race's participants (by race number), loaded once per call instead of the previous
     * one-query-per-candidate-number approach: {@link #skipAlreadyAssigned} and the match loop in
     * {@link #processNewMeasurements} both used to call {@code participantRepository.findByRaceIdAndRaceNumber}
     * per race number checked, which meant one DB round trip per already-assigned/skipped number on
     * every 5s scheduler cycle - wasteful for a large field with many already-matched participants.
     */
    private record RaceRoster(List<Integer> raceNumbers, Map<Integer, Participant> byRaceNumber) {
    }

    private RaceRoster loadRoster(Long raceId) {
        List<Participant> participants = StreamSupport.stream(participantRepository.findByRaceId(raceId).spliterator(), false).toList();
        Map<Integer, Participant> byRaceNumber = new HashMap<>();
        List<Integer> raceNumbers = new ArrayList<>();
        for (Participant participant : participants) {
            if (participant.raceNumber() != null) {
                raceNumbers.add(participant.raceNumber());
                byRaceNumber.put(participant.raceNumber(), participant);
            }
        }
        Collections.sort(raceNumbers);
        return new RaceRoster(raceNumbers, byRaceNumber);
    }

    /**
     * Must only be called while holding measurementTableLock.
     */
    private Integer skipAlreadyAssigned(RaceRoster roster, Integer candidate, Set<Long> assignedParticipantIds) {
        while (candidate != null) {
            Participant participant = roster.byRaceNumber().get(candidate);
            if (participant != null && !assignedParticipantIds.contains(participant.id())) {
                return candidate;
            }
            candidate = firstGreaterThan(roster.raceNumbers(), candidate);
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
}
