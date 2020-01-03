package com.teamflavour.flavourwheels.repository;

import com.teamflavour.flavourwheels.model.FlavorCoffee;
import com.teamflavour.flavourwheels.model.FlavorWhiskey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlavorWhiskeyRepository extends JpaRepository<FlavorWhiskey, Integer> {
    FlavorWhiskey findByID(int id);

    FlavorWhiskey findFirstByID(int id);

    boolean existsByID(int id);
}
