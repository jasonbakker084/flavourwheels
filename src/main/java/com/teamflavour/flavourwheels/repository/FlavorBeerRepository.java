package com.teamflavour.flavourwheels.repository;

import com.teamflavour.flavourwheels.model.FlavorBeer;
import com.teamflavour.flavourwheels.model.FlavorCoffee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlavorBeerRepository extends JpaRepository<FlavorBeer, Integer> {
    FlavorBeer findByID(int id);

    FlavorBeer findFirstByID(int id);

    boolean existsByID(int id);
}
