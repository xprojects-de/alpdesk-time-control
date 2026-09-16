package x.timecontrol.services;

import jakarta.inject.Singleton;
import org.apache.pdfbox.Loader;
import x.timecontrol.dto.RaceRequest;
import x.timecontrol.entities.Race;
import x.timecontrol.entities.ResultUnit;
import x.timecontrol.entities.SortDirection;
import x.timecontrol.entities.StartOrderMode;
import x.timecontrol.repositories.ParticipantRepository;
import x.timecontrol.repositories.RaceRepository;

import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

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
        assertValidPreviousRace(null, race.previousRaceId());
        assertValidStartOrderReverseTopCount(race.startOrderReverseTopCount());
        // liveToken is never provided by RaceRequest/createFromRequest - generated here, the one
        // place a brand-new race is actually persisted, rather than earlier where it could still
        // be discarded (e.g. a validation failure above never wastes/exposes a generated token).
        Race toSave = race.liveToken() != null ? race : withLiveToken(race, generateLiveToken());
        return repository.save(toSave);
    }

    public Optional<Race> findByLiveToken(String liveToken) {
        return repository.findByLiveToken(liveToken);
    }

    /**
     * An opaque, unguessable id for this race's public live-results URLs - deliberately unrelated
     * to the sequential `id` so those URLs can't be walked by incrementing/guessing a number. Not
     * reused as the JWT/session secret or anything security-critical - just non-enumerable.
     */
    private static String generateLiveToken() {
        return UUID.randomUUID().toString();
    }

    private static Race withLiveToken(Race race, String liveToken) {
        return new Race(race.id(), race.name(), race.date(), race.organisation(), race.referee(),
                race.raceDirector(), race.timeControl(), race.routeName(), race.elevationDifference(),
                race.routeLength(), race.courseSetter(), race.weather(), race.resultUnit(), race.resultUnitLabel(),
                race.sortDirection(), race.coverPagePdf(), race.previousRaceId(), race.startOrderMode(),
                race.startOrderReverseTopCount(), liveToken);
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

    /**
     * @param removeCoverPage if true, clears the cover page regardless of {@code race.coverPagePdf()};
     *                        otherwise a null {@code race.coverPagePdf()} leaves the existing cover
     *                        page (if any) untouched instead of wiping it on every unrelated edit -
     *                        the frontend only ever sends a non-null one when the user picks a new file.
     * @throws IllegalArgumentException if {@code race.coverPagePdf()} is set but isn't a parseable PDF
     */
    public Optional<Race> update(Long id, Race race, boolean removeCoverPage) {
        Optional<Race> existing = repository.findById(id);
        if (existing.isPresent()) {
            assertNameAvailable(race.name(), id);
            assertValidPreviousRace(id, race.previousRaceId());
            assertValidStartOrderReverseTopCount(race.startOrderReverseTopCount());
            if (!removeCoverPage && race.coverPagePdf() != null) {
                validateCoverPagePdf(race.coverPagePdf());
            }
            byte[] coverPagePdf = removeCoverPage ? null
                    : race.coverPagePdf() != null ? race.coverPagePdf()
                    : existing.get().coverPagePdf();
            NormalizedStartOrder startOrder = normalizeStartOrder(race.previousRaceId(), race.startOrderMode(), race.startOrderReverseTopCount());
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
                    race.sortDirection(),
                    coverPagePdf,
                    race.previousRaceId(),
                    startOrder.mode(),
                    startOrder.reverseTopCount(),
                    // liveToken isn't exposed in RaceRequest at all - always carried over from the
                    // existing row, never regenerated or cleared by an unrelated edit.
                    existing.get().liveToken()
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
                throw new IllegalStateException(assigned + " participants are assigned to this race. " +
                        "Deleting it will irrevocably delete all participants, measurements and " +
                        "assignments of this race. Delete anyway?");
            }
        }
        // race_measurement.race_id has ON DELETE CASCADE, so deleting a race implicitly writes to
        // race_measurement - the same table archive/reset operations guard with this lock. Without
        // taking it here too, a concurrent archive could race with this cascade.
        measurementTableLock.run(() -> repository.deleteById(id));
    }

    /**
     * @throws IllegalArgumentException if {@code request.coverPagePdf()} is set but isn't a parseable PDF
     */
    public Race createFromRequest(RaceRequest request) {
        if (request.coverPagePdf() != null) {
            validateCoverPagePdf(request.coverPagePdf());
        }
        NormalizedStartOrder startOrder = normalizeStartOrder(request.previousRaceId(), request.startOrderMode(), request.startOrderReverseTopCount());
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
                request.sortDirection() != null ? request.sortDirection() : SortDirection.ASC,
                request.coverPagePdf(),
                request.previousRaceId(),
                startOrder.mode(),
                startOrder.reverseTopCount()
        );
    }

    private record NormalizedStartOrder(StartOrderMode mode, Integer reverseTopCount) {
    }

    /**
     * startOrderMode/startOrderReverseTopCount are meaningless without a link - dropped here
     * instead of stored as orphaned config that a later UI might resurrect. Shared by
     * {@link #update} and {@link #createFromRequest} so the drop-when-unlinked rule can't drift
     * between the two.
     */
    private static NormalizedStartOrder normalizeStartOrder(Long previousRaceId, StartOrderMode mode, Integer reverseTopCount) {
        return previousRaceId == null ? new NormalizedStartOrder(null, null) : new NormalizedStartOrder(mode, reverseTopCount);
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

    /**
     * @throws IllegalArgumentException if previousRaceId references this same race, a
     *                                   non-existent race, or a race that (directly) links back to
     *                                   this one - a mutual link would leave "which race is
     *                                   actually first" undefined
     */
    private void assertValidPreviousRace(Long id, Long previousRaceId) {
        if (previousRaceId == null) {
            return;
        }
        if (previousRaceId.equals(id)) {
            throw new IllegalArgumentException("A race cannot be linked to itself");
        }
        Race linked = repository.findById(previousRaceId)
                .orElseThrow(() -> new IllegalArgumentException("Race with id " + previousRaceId + " does not exist"));
        if (id != null && id.equals(linked.previousRaceId())) {
            throw new IllegalArgumentException("Race with id " + previousRaceId + " already links back to this race");
        }
    }

    /**
     * @throws IllegalArgumentException if reverseTopCount is negative - the frontend already blocks
     *                                   this, but ParticipantService#applyStartOrderFromPreviousRace
     *                                   would otherwise silently clamp a negative value to 0 rather
     *                                   than rejecting it up front.
     */
    private void assertValidStartOrderReverseTopCount(Integer reverseTopCount) {
        if (ValidationUtils.isNegative(reverseTopCount)) {
            throw new IllegalArgumentException("startOrderReverseTopCount must not be negative");
        }
    }

    private static void validateCoverPagePdf(byte[] pdfBytes) {
        try (var ignored = Loader.loadPDF(pdfBytes)) {
            // Parsed only to validate - if it doesn't throw, the file is a real PDF.
        } catch (IOException e) {
            throw new IllegalArgumentException("The uploaded file is not a valid PDF file");
        }
    }
}
