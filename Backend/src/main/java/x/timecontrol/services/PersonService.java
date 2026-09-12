package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.PersonRequest;
import x.timecontrol.entities.Person;
import x.timecontrol.repositories.ParticipantRepository;
import x.timecontrol.repositories.PersonRepository;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

@Singleton
public class PersonService {

    private final PersonRepository repository;
    private final ParticipantRepository participantRepository;

    public PersonService(PersonRepository repository, ParticipantRepository participantRepository) {
        this.repository = repository;
        this.participantRepository = participantRepository;
    }

    public Person create(Person person) {
        assertExternalIdAvailable(person.externalId(), null);
        return repository.save(person);
    }

    public Iterable<Person> findAll() {
        return repository.findAll();
    }

    public Optional<Person> findById(Long id) {
        return repository.findById(id);
    }

    /**
     * Batch-loads persons by id in a single query, e.g. for building a list response without
     * issuing one lookup per row.
     */
    public Map<Long, Person> findByIds(Set<Long> ids) {
        if (ids.isEmpty()) {
            return Collections.emptyMap();
        }
        Map<Long, Person> result = new HashMap<>();
        for (Person person : repository.findByIdIn(ids)) {
            result.put(person.id(), person);
        }
        return result;
    }

    public Optional<Person> findByExternalId(String externalId) {
        return repository.findByExternalId(externalId);
    }

    public List<Person> search(String query) {
        return repository.search("%" + query.trim() + "%");
    }

    public Optional<Person> update(Long id, Person person) {
        Optional<Person> existing = repository.findById(id);
        if (existing.isPresent()) {
            assertExternalIdAvailable(person.externalId(), id);
            Person updated = new Person(id, person.firstName(), person.lastName(), person.birthDate(), person.gender(), person.externalId());
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    /**
     * @throws IllegalStateException if another person already has this externalId
     */
    private void assertExternalIdAvailable(String externalId, Long excludeId) {
        if (externalId == null || externalId.isBlank()) {
            return;
        }
        Optional<Person> conflict = repository.findByExternalId(externalId);
        if (conflict.isPresent() && !conflict.get().id().equals(excludeId)) {
            throw new IllegalStateException("A person with externalId \"" + externalId + "\" already exists");
        }
    }

    /**
     * @throws IllegalStateException if the person is still referenced by at least one participant
     */
    public void delete(Long id) {
        if (participantRepository.existsByPersonId(id)) {
            throw new IllegalStateException("Person is still assigned as a participant and cannot be deleted");
        }
        repository.deleteById(id);
    }

    public Person createFromRequest(PersonRequest request) {
        return new Person(null, request.firstName(), request.lastName(), request.birthDate(), request.gender(), request.externalId());
    }

    /**
     * Human-readable "Lastname Firstname" label shared by every consumer that needs to display
     * a Person's name (PDF export, Gaudi-Modus pairing labels), so the format only lives in one place.
     */
    public String displayName(Person person) {
        String firstName = person.firstName() != null ? person.firstName() : "";
        String lastName = person.lastName() != null ? person.lastName() : "";
        return (lastName + " " + firstName).trim();
    }
}
