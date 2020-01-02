package com.teamflavour.flavourwheels.repository;

import com.teamflavour.flavourwheels.model.FlavorCoffee;
import com.teamflavour.flavourwheels.model.FlavorWine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlavorWineRepository extends JpaRepository<FlavorWine, Integer> {
    FlavorWine findByID(int id);
    FlavorWine findFirstByID (int id);
    boolean existsByID (int id);
}
