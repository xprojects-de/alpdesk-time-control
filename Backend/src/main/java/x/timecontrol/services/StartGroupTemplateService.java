package x.timecontrol.services;

import io.micronaut.transaction.TransactionOperations;
import jakarta.inject.Singleton;
import x.timecontrol.dto.StartGroupTemplateRequest;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.StartGroupTemplate;
import x.timecontrol.repositories.ParticipantRepository;
import x.timecontrol.repositories.StartGroupTemplateRepository;

import java.sql.Connection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;

@Singleton
public class StartGroupTemplateService {

    private final StartGroupTemplateRepository repository;
    private final ParticipantRepository participantRepository;
    private final TransactionOperations<Connection> transactionOperations;

    // Every start-group template in the app, keyed by id - lazily (re)built from the DB on first
    // use after startup or after any write below, never read directly by anyone else. This table
    // is tiny (a handful of rows per club, at most) and read from RankingService#adjustedValue for
    // every participant of every ranking computation, so serving it from memory instead of hitting
    // SQLite per lookup turns what would otherwise be a per-participant query into an O(1) map
    // lookup, without any caller needing to batch-load anything itself.
    private final AtomicReference<Map<Long, StartGroupTemplate>> cache = new AtomicReference<>();

    public StartGroupTemplateService(StartGroupTemplateRepository repository, ParticipantRepository participantRepository, TransactionOperations<Connection> transactionOperations) {
        this.repository = repository;
        this.participantRepository = participantRepository;
        this.transactionOperations = transactionOperations;
    }

    private Map<Long, StartGroupTemplate> loadCache() {
        Map<Long, StartGroupTemplate> current = cache.get();
        if (current != null) {
            return current;
        }
        Map<Long, StartGroupTemplate> loaded = new HashMap<>();
        for (StartGroupTemplate template : repository.findAll()) {
            loaded.put(template.id(), template);
        }
        cache.set(loaded);
        return loaded;
    }

    /**
     * Called after every write below so the next read rebuilds from the DB - a benign race where
     * two threads both rebuild the cache at once just does the (cheap) load twice, never returns
     * stale data.
     */
    private void invalidateCache() {
        cache.set(null);
    }

    public StartGroupTemplate create(StartGroupTemplate template) {
        validate(template);
        StartGroupTemplate created = repository.save(template);
        invalidateCache();
        return created;
    }

    /**
     * Sorted by {@code position} - the shared display order for template pickers/boards, so it
     * can't drift between callers.
     */
    public List<StartGroupTemplate> findAll() {
        return loadCache().values().stream().sorted(Comparator.comparingInt(StartGroupTemplate::position)).toList();
    }

    public Optional<StartGroupTemplate> findById(Long id) {
        return Optional.ofNullable(loadCache().get(id));
    }

    /**
     * Batch-loads templates by id in a single query, e.g. for building a list response without
     * issuing one lookup per row.
     */
    public Map<Long, StartGroupTemplate> findByIds(Set<Long> ids) {
        if (ids.isEmpty()) {
            return Collections.emptyMap();
        }
        Map<Long, StartGroupTemplate> all = loadCache();
        Map<Long, StartGroupTemplate> result = new HashMap<>();
        for (Long id : ids) {
            StartGroupTemplate template = all.get(id);
            if (template != null) {
                result.put(id, template);
            }
        }
        return result;
    }

    public Optional<StartGroupTemplate> update(Long id, StartGroupTemplate template) {
        Optional<StartGroupTemplate> existing = repository.findById(id);
        if (existing.isPresent()) {
            validate(template);
            StartGroupTemplate updated = new StartGroupTemplate(id, template.label(), template.color(), template.position(), template.offsetSeconds());
            StartGroupTemplate result = repository.update(updated);
            invalidateCache();
            return Optional.of(result);
        }
        return Optional.empty();
    }

    /**
     * @throws IllegalArgumentException if offsetSeconds is negative - it floors adjustedValue()'s
     *                                    durationMs correction the wrong way (subtracting a
     *                                    negative offset adds time instead of removing it),
     *                                    silently inflating every participant in this group's
     *                                    ranked result instead of netting out their head start.
     */
    private void validate(StartGroupTemplate template) {
        if (ValidationUtils.isNegative(template.offsetSeconds())) {
            throw new IllegalArgumentException("offsetSeconds must not be negative");
        }
    }

    /**
     * @throws IllegalStateException if participants are still assigned to this template and {@code force} is false
     */
    public void delete(Long id, boolean force) {
        if (!force) {
            long assigned = participantRepository.countByStartGroupId(id);
            if (assigned > 0) {
                throw new IllegalStateException(assigned + " participants are currently assigned to this start group. " +
                        "Deleting it will remove the assignment from those participants. Delete anyway?");
            }
        }
        transactionOperations.executeWrite(_ -> {
            List<Participant> affected = participantRepository.findByStartGroupId(id);
            if (!affected.isEmpty()) {
                // The FK's own ON DELETE SET NULL (see participant.start_group_id) only clears
                // that column once the row below is deleted - it can't reach startSequence too.
                // Clearing it here explicitly for every affected participant (across every race
                // that used this template) avoids leaving a stale start position behind that would
                // keep silently affecting AutoAssignService/the printed start list even though the
                // participant now shows as unassigned.
                participantRepository.updateAll(affected.stream().map(StartGroupTemplateService::withClearedStartGroup).toList());
            }
            repository.deleteById(id);
            return null;
        });
        invalidateCache();
    }

    private static Participant withClearedStartGroup(Participant participant) {
        return new Participant(
                participant.id(),
                participant.raceId(),
                participant.personId(),
                participant.raceNumber(),
                participant.teamId(),
                participant.categoryId(),
                participant.durationMs(),
                participant.penalty(),
                participant.measuredAt(),
                participant.comment(),
                participant.status(),
                null,
                null
        );
    }

    public StartGroupTemplate createFromRequest(StartGroupTemplateRequest request) {
        return new StartGroupTemplate(null, request.label().trim(), request.color().trim(), request.position(), request.offsetSeconds());
    }
}
