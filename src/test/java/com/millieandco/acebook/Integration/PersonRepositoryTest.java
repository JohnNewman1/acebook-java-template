package com.millieandco.acebook.Integration;

import com.millieandco.acebook.Person;
import com.millieandco.acebook.PersonRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.Assert.assertEquals;

import java.util.List;

import static org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE;

@ActiveProfiles("test")
@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = NONE)
public class PersonRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private PersonRepository personRepository;

    @Test
    public void readsAndWritesToDatabase() {
        personRepository.deleteAll();

        Person firstPerson = new Person("Kylo", "Ren", "kyloren@sithlord.com", "ihatejedis", "sithlord");;
        entityManager.persist(firstPerson);
        entityManager.flush();

        Person secondPerson = new Person("Darth", "Maul", "darthmaul@sithlord.com", "ihavehorns", "sithlord2");;
        entityManager.persist(secondPerson);
        entityManager.flush();

        List<Person> people = personRepository.findAll();

        assertEquals(people.get(0).getFirstName(), "Kylo");
        assertEquals(people.get(0).getLastName(), "Ren");
        assertEquals(people.get(0).getEmail(), "kyloren@sithlord.com");
        assertEquals(people.get(1).getFirstName(), "Darth");
        assertEquals(people.get(1).getLastName(), "Maul");
        assertEquals(people.get(1).getEmail(), "darthmaul@sithlord.com");
    }
}