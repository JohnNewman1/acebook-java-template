package com.millieandco.acebook.Unit;

import com.millieandco.acebook.Person;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PersonTest {

	private Person person = new Person("Kylo", "Ren", "kyloren@sithlord.com", "ihatejedis", "sithlord1");

	@Test
	public void userHasId() {
		assertEquals(person.getId(), 0);
	}

	@Test
	public void userHasFirstName() {
		assertEquals(person.getFirstName(), "Kylo");
	}

	@Test
	public void userHasLastName() {
		assertEquals(person.getLastName(), "Ren");
	}

	@Test
	public void userHasEmail() {
		assertEquals(person.getEmail(), "kyloren@sithlord.com");
	}

	@Test
	public void toStringReturnsCorrectString() {
		assertEquals(person.toString(), "Person[id=0, firstName='Kylo', lastName='Ren', username='sithlord1', email='kyloren@sithlord.com']");
	}

}
