package com.teamflavour.flavourwheels.repository;

import com.teamflavour.flavourwheels.model.FlavorCoffee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlavorCoffeeRepository extends JpaRepository<FlavorCoffee, Integer> {
    FlavorCoffee findByID(int id);

    FlavorCoffee findFirstByID(int id);

    boolean existsByID(int id);
}
