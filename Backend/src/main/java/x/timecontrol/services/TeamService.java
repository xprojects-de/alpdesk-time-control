package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.TeamRequest;
import x.timecontrol.entities.Team;
import x.timecontrol.repositories.ParticipantRepository;
import x.timecontrol.repositories.TeamRepository;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

@Singleton
public class TeamService {

    private final TeamRepository repository;
    private final ParticipantRepository participantRepository;

    public TeamService(TeamRepository repository, ParticipantRepository participantRepository) {
        this.repository = repository;
        this.participantRepository = participantRepository;
    }

    public Team create(Team team) {
        assertNameAvailable(team.name(), null);
        return repository.save(team);
    }

    public Iterable<Team> findAll() {
        return repository.findAll();
    }

    public Optional<Team> findById(Long id) {
        return repository.findById(id);
    }

    public Optional<Team> findByName(String name) {
        return repository.findByName(name);
    }

    /**
     * Batch-loads teams by id in a single query, e.g. for building a list response without
     * issuing one lookup per row.
     */
    public Map<Long, Team> findByIds(Set<Long> ids) {
        if (ids.isEmpty()) {
            return Collections.emptyMap();
        }
        Map<Long, Team> result = new HashMap<>();
        for (Team team : repository.findByIdIn(ids)) {
            result.put(team.id(), team);
        }
        return result;
    }

    public Optional<Team> update(Long id, Team team) {
        Optional<Team> existing = repository.findById(id);
        if (existing.isPresent()) {
            assertNameAvailable(team.name(), id);
            Team updated = new Team(id, team.name());
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    /**
     * @throws IllegalStateException if participants are still assigned to this team and {@code force} is false
     */
    public void delete(Long id, boolean force) {
        if (!force) {
            long assigned = participantRepository.countByTeamId(id);
            if (assigned > 0) {
                throw new IllegalStateException(assigned + " Teilnehmer sind diesem Team zugeordnet. " +
                        "Beim Löschen wird die Team-Zuordnung bei diesen Teilnehmern entfernt. Trotzdem löschen?");
            }
        }
        repository.deleteById(id);
    }

    public Team createFromRequest(TeamRequest request) {
        return new Team(null, request.name().trim());
    }

    /**
     * @throws IllegalStateException if another team already has this name (case-insensitive)
     */
    private void assertNameAvailable(String name, Long excludeId) {
        Optional<Team> conflict = repository.findByNameIgnoreCase(name);
        if (conflict.isPresent() && !conflict.get().id().equals(excludeId)) {
            throw new IllegalStateException("A team named \"" + name + "\" already exists");
        }
    }

    /**
     * Finds a team by name (case-insensitive), creating it with an uppercased name if it does not exist yet.
     */
    public Team findOrCreateByName(String name) {
        String normalized = name.trim().toUpperCase();
        return repository.findByNameIgnoreCase(normalized)
                .orElseGet(() -> repository.save(new Team(null, normalized)));
    }
}
