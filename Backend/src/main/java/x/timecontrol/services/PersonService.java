package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.PersonRequest;
import x.timecontrol.entities.Person;
import x.timecontrol.repositories.PersonRepository;

import java.util.List;
import java.util.Optional;

@Singleton
public class PersonService {

    private final PersonRepository repository;

    public PersonService(PersonRepository repository) {
        this.repository = repository;
    }

    public Person create(Person person) {
        return repository.save(person);
    }

    public Iterable<Person> findAll() {
        return repository.findAll();
    }

    public Optional<Person> findById(Long id) {
        return repository.findById(id);
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
            Person updated = new Person(id, person.firstName(), person.lastName(), person.birthDate(), person.gender(), person.externalId());
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    public void delete(Long id) {
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
