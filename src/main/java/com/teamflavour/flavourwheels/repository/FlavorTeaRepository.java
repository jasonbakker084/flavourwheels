package com.teamflavour.flavourwheels.repository;

import com.teamflavour.flavourwheels.model.FlavorCoffee;
import com.teamflavour.flavourwheels.model.FlavorTea;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlavorTeaRepository extends JpaRepository<FlavorTea, Integer> {
    FlavorTea findByID(int id);

    FlavorTea findFirstByID(int id);

    boolean existsByID(int id);
}
