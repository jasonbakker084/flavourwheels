package com.teamflavour.flavourwheels.repository;

import com.teamflavour.flavourwheels.model.User;
import com.teamflavour.flavourwheels.model.UserRegistrationDto;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    User findByEmail(String email);

    User save(UserRegistrationDto registration);
}