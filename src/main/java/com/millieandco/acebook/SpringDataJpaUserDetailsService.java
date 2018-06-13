package com.millieandco.acebook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class SpringDataJpaUserDetailsService implements UserDetailsService {

    private final PersonRepository repository;

    @Autowired
    public SpringDataJpaUserDetailsService(PersonRepository repository){
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Person person = this.repository.findByUsername(username);
        return new User(person.getUsername(), person.getPassword(), AuthorityUtils.createAuthorityList());
    }

}
