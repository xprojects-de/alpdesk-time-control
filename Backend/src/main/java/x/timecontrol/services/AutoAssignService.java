package x.timecontrol.services;

import x.timecontrol.entities.Measurement;
import x.timecontrol.entities.Participant;
import x.timecontrol.repositories.MeasurementRepository;
import x.timecontrol.repositories.ParticipantRepository;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
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
 * matched to the participant currently at the front of the auto-assign queue - ordered by
 * {@link Participant#startSequence()} when a participant has one (e.g. a race whose start order
 * was derived from a linked previous race's results, so bib 30 can start before bib 5), falling
 * back to {@link Participant#raceNumber()} (ascending bib order) for one that doesn't. A
 * participant already marked DSQ/DNF/DNS with no startSequence is excluded from the queue
 * entirely - they're not starting, so no measurement is ever expected for them. The match is
 * written straight onto the raw measurement - the same "measurement" table and "participantId"
 * field the Messungen screen already reads and edits. The queue is still keyed and displayed by
 * race number (the bib an official actually reads), only its *order* differs from bib-ascending
 * when a start order has been derived.
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
 * State is in-memory only, the same convention {@link DeviceImportGate#isScheduledImportActive()}
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
                nextRaceNumber = skipAlreadyAssigned(roster, roster.raceNumbersInStartOrder().stream().findFirst().orElse(null), assignedParticipantIds());
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
            nextRaceNumber = skipAlreadyAssigned(roster, firstAfter(roster, nextRaceNumber), assignedParticipantIds());
            return currentStatus();
        });
    }

    /**
     * Manual override of the queue position, honored exactly as given - no skipping forward past
     * race numbers the operator deliberately pointed at.
     * <p>
     * A race number that already has a measurement is refused unless {@code force} is set, and
     * with it that measurement is deleted. Neither half is optional. Refusing is needed because
     * {@link #processNewMeasurements()} re-validates the cursor against "already has a time" on
     * every cycle: left alone, it would quietly walk the cursor forward off the requested number
     * and credit the next incoming finish to the following starter instead - a wrong time on a
     * real runner, with nothing on screen saying so. Deleting is what actually makes a re-run
     * possible, since {@link MeasurementService} allows only one measurement per participant, so
     * the old time has to go before the new one can be matched.
     * <p>
     * Deleting rather than just clearing the row's participant: an unassigned measurement stays in
     * the table as pending work and the very next cycle hands it back out - by id, so the stale
     * time would overtake the new one and land on someone else.
     *
     * @throws IllegalStateException if auto-assign mode is not currently active
     * @throws IllegalArgumentException if raceNumber is given but no participant in the active race
     * has that race number - see {@link #enable} for why this must be rejected up front.
     * @throws AlreadyTimedException if that race number already has a measurement and force is not set
     */
    public Status setNextRaceNumber(Integer raceNumber, boolean force) {
        return measurementTableLock.get(() -> {
            Long raceId = requireActive();
            if (raceNumber != null) {
                Participant participant = loadRoster(raceId).byRaceNumber().get(raceNumber);
                if (participant == null) {
                    throw new IllegalArgumentException("No participant in this race has race number " + raceNumber);
                }
                discardExistingMeasurements(participant, raceNumber, force);
            }
            nextRaceNumber = raceNumber;
            return currentStatus();
        });
    }

    /**
     * Must only be called while holding measurementTableLock - it decides and deletes in one go,
     * so nothing can slip a measurement onto this participant between the check and the delete.
     */
    private void discardExistingMeasurements(Participant participant, Integer raceNumber, boolean force) {
        List<Measurement> existing = measurementRepository.findByParticipantId(participant.id());
        if (existing.isEmpty()) {
            return;
        }
        if (!force) {
            throw new AlreadyTimedException("Race number " + raceNumber + " already has a measurement. "
                    + "Retry with force=true to discard it and time this race number again.");
        }
        for (Measurement measurement : existing) {
            measurementRepository.deleteById(measurement.id());
        }
        LOG.info("Discarded {} measurement(s) of race number {} in race {} for a re-run",
                existing.size(), raceNumber, participant.raceId());
    }

    /**
     * Its own type purely so the controller can answer it with 409 rather than the 400 the two
     * pre-existing failures of {@link #setNextRaceNumber} map to: this one is the only one the
     * caller can act on by retrying with force, and the frontend has to tell it apart to offer
     * that.
     */
    public static class AlreadyTimedException extends RuntimeException {
        public AlreadyTimedException(String message) {
            super(message);
        }
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
                        measurement.id(), measurement.deviceMeasurementId(), participant.id(),
                        measurement.durationMs(), measurement.measuredAt()
                ));
                assignedParticipantIds.add(participant.id());
                nextRaceNumber = skipAlreadyAssigned(roster, firstAfter(roster, nextRaceNumber), assignedParticipantIds);
            }
        });
    }

    /**
     * A race's participants (by race number), loaded once per call instead of the previous
     * one-query-per-candidate-number approach: {@link #skipAlreadyAssigned} and the match loop in
     * {@link #processNewMeasurements} both used to call {@code participantRepository.findByRaceIdAndRaceNumber}
     * per race number checked, which meant one DB round trip per already-assigned/skipped number on
     * every 5s scheduler cycle - wasteful for a large field with many already-matched participants.
     * <p>
     * {@code byRaceNumber} includes every participant with a bib, regardless of whether they're
     * actually starting - an explicit {@link #setNextRaceNumber} override is allowed to point at
     * any known bib. {@code raceNumbersInStartOrder} is the actual auto-assign queue: only
     * participants who are starting (see effectiveStartOrder), in that start order - not
     * necessarily ascending bib order, see the class javadoc.
     */
    private record RaceRoster(List<Integer> raceNumbersInStartOrder, Map<Integer, Participant> byRaceNumber) {
    }

    private RaceRoster loadRoster(Long raceId) {
        List<Participant> participants = StreamSupport.stream(participantRepository.findByRaceId(raceId).spliterator(), false).toList();
        Map<Integer, Participant> byRaceNumber = new HashMap<>();
        List<Participant> starting = new ArrayList<>();
        for (Participant participant : participants) {
            if (participant.raceNumber() == null) {
                continue;
            }
            byRaceNumber.put(participant.raceNumber(), participant);
            if (participant.effectiveStartOrder() != null) {
                starting.add(participant);
            }
        }
        // requireNonNull: every entry in `starting` was only added above after confirming
        // effectiveStartOrder() != null, but the comparator calls the method again independently -
        // the compiler/IDE can't see that invariant across the two calls, so state it explicitly
        // instead of leaving a @Nullable method reference where Comparator.comparing needs non-null.
        // raceNumber as a tie-break, and the same one firstAfter() compares by: startSequence and
        // raceNumber are two separate 1..n number spaces, each unique only within itself, so two
        // participants can share an order key (a late entry without a startSequence whose bib equals
        // someone else's sequence). Sorting and comparing by different orders would let firstAfter()
        // step over the second of the pair for good - it is the cursor's only way forward, so that
        // starter never gets a time and everyone behind them is credited one measurement too early.
        starting.sort(Comparator.comparing((Participant p) -> Objects.requireNonNull(p.effectiveStartOrder()))
                .thenComparing(Participant::raceNumber));
        List<Integer> raceNumbersInStartOrder = starting.stream().map(Participant::raceNumber).toList();
        return new RaceRoster(raceNumbersInStartOrder, byRaceNumber);
    }

    /**
     * Must only be called while holding measurementTableLock.
     * <p>
     * Checks {@code effectiveStartOrder() != null}, not just presence in {@code byRaceNumber} -
     * {@code candidate} is often the cursor's *current* value, re-validated on every cycle
     * (see {@link #processNewMeasurements}), and that participant may have been marked
     * DSQ/DNF/DNS *after* the cursor was already pointing at them (e.g. a scratch discovered
     * right before their start). Without this check, a measurement arriving while the cursor
     * still sat on that now-excluded bib would be silently credited to them.
     */
    private Integer skipAlreadyAssigned(RaceRoster roster, Integer candidate, Set<Long> assignedParticipantIds) {
        while (candidate != null) {
            Participant participant = roster.byRaceNumber().get(candidate);
            if (participant != null && participant.effectiveStartOrder() != null && !assignedParticipantIds.contains(participant.id())) {
                return candidate;
            }
            candidate = firstAfter(roster, candidate);
        }
        return null;
    }

    private Set<Long> assignedParticipantIds() {
        return measurementRepository.findAll().stream()
                .map(Measurement::participantId)
                .filter(Objects::nonNull)
                .collect(Collectors.toCollection(HashSet::new));
    }

    /**
     * The race number immediately after {@code current} in the queue's actual start order - not a
     * numeric "next greater bib" comparison, since start order need not be bib-ascending.
     * <p>
     * Compares by each participant's start-order key (startSequence if set, else raceNumber)
     * rather than {@code current}'s position within {@code roster.raceNumbersInStartOrder()}:
     * {@link #setNextRaceNumber} explicitly allows pointing the cursor at any known bib, including
     * one currently marked DSQ/DNF/DNS, whose {@link Participant#effectiveStartOrder()} is null and
     * which is therefore absent from that list entirely. A position lookup would find no match and
     * return null forever, silently freezing auto-assign for the rest of the race; resolving by key
     * instead always finds the next starting participant, whether or not {@code current} itself is
     * one.
     */
    private static Integer firstAfter(RaceRoster roster, Integer current) {
        if (current == null) {
            return null;
        }
        Participant currentParticipant = roster.byRaceNumber().get(current);
        int currentOrderKey = currentParticipant != null ? orderKey(currentParticipant) : current;
        for (Integer raceNumber : roster.raceNumbersInStartOrder()) {
            int orderKey = orderKey(roster.byRaceNumber().get(raceNumber));
            // Lexicographic (orderKey, raceNumber), matching how loadRoster sorts the queue - see
            // the comment there for why the tie-break is not optional. Bibs are unique per race, so
            // the pair is a total order and no entry can be stepped over.
            if (orderKey > currentOrderKey || (orderKey == currentOrderKey && raceNumber > current)) {
                return raceNumber;
            }
        }
        return null;
    }

    /**
     * A participant's position in the start order, ignoring DSQ/DNF/DNS status - unlike
     * {@link Participant#effectiveStartOrder()}, which is null for such a participant precisely
     * because they're excluded from the auto-assign queue. {@link #firstAfter} needs this
     * status-independent key to place an excluded participant relative to the queue even though
     * they're not part of it themselves.
     */
    private static int orderKey(Participant participant) {
        return participant.startSequence() != null ? participant.startSequence() : participant.raceNumber();
    }
}
