package com.teamflavour.flavourwheels.repository;

import com.teamflavour.flavourwheels.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Role findFirstByName(String name);



    @Override
    void delete(Role role);

}
