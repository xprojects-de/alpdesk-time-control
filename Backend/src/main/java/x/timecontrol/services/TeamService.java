package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.TeamRequest;
import x.timecontrol.entities.Team;
import x.timecontrol.repositories.TeamRepository;

import java.util.Optional;

@Singleton
public class TeamService {

    private final TeamRepository repository;

    public TeamService(TeamRepository repository) {
        this.repository = repository;
    }

    public Team create(Team team) {
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

    public Optional<Team> update(Long id, Team team) {
        Optional<Team> existing = repository.findById(id);
        if (existing.isPresent()) {
            Team updated = new Team(id, team.name());
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Team createFromRequest(TeamRequest request) {
        return new Team(null, request.name());
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
