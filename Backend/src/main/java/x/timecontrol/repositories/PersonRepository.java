package x.timecontrol.repositories;

import io.micronaut.data.annotation.Query;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import x.timecontrol.entities.Person;

import java.util.List;
import java.util.Optional;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface PersonRepository extends CrudRepository<Person, Long> {

    Optional<Person> findByExternalId(String externalId);

    List<Person> findByIdIn(Iterable<Long> ids);

    @Query(value = "SELECT * FROM person " +
            "WHERE LOWER(first_name || ' ' || last_name) LIKE LOWER(:pattern) " +
            "OR LOWER(last_name || ' ' || first_name) LIKE LOWER(:pattern) " +
            "ORDER BY last_name, first_name LIMIT 20", nativeQuery = true)
    List<Person> search(String pattern);

    @Query(value = "SELECT * FROM person " +
            "WHERE id NOT IN (SELECT DISTINCT person_id FROM participant)", nativeQuery = true)
    List<Person> findUnused();
}
