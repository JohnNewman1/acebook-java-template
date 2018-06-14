package com.millieandco.acebook;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

@RepositoryRestResource
public interface PersonRepository extends CrudRepository<Person, Long> {

    @Override
    @RestResource(exported = false)
    List<Person> findAll();

    Person save(Person person);

    Person findByUsername(String username);
}
