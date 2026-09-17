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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

@Singleton
public class StartGroupTemplateService {

    private final StartGroupTemplateRepository repository;
    private final ParticipantRepository participantRepository;
    private final TransactionOperations<Connection> transactionOperations;

    public StartGroupTemplateService(StartGroupTemplateRepository repository, ParticipantRepository participantRepository, TransactionOperations<Connection> transactionOperations) {
        this.repository = repository;
        this.participantRepository = participantRepository;
        this.transactionOperations = transactionOperations;
    }

    public StartGroupTemplate create(StartGroupTemplate template) {
        return repository.save(template);
    }

    /**
     * Sorted by {@code position} - the shared display order for template pickers/boards, so it
     * can't drift between callers.
     */
    public List<StartGroupTemplate> findAll() {
        return repository.findAllOrderByPositionAsc();
    }

    public Optional<StartGroupTemplate> findById(Long id) {
        return repository.findById(id);
    }

    /**
     * Batch-loads templates by id in a single query, e.g. for building a list response without
     * issuing one lookup per row.
     */
    public Map<Long, StartGroupTemplate> findByIds(Set<Long> ids) {
        if (ids.isEmpty()) {
            return Collections.emptyMap();
        }
        Map<Long, StartGroupTemplate> result = new HashMap<>();
        for (StartGroupTemplate template : repository.findByIdIn(ids)) {
            result.put(template.id(), template);
        }
        return result;
    }

    public Optional<StartGroupTemplate> update(Long id, StartGroupTemplate template) {
        Optional<StartGroupTemplate> existing = repository.findById(id);
        if (existing.isPresent()) {
            StartGroupTemplate updated = new StartGroupTemplate(id, template.label(), template.color(), template.position(), template.offsetSeconds());
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
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
