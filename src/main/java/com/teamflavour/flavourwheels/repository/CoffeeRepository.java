package com.teamflavour.flavourwheels.repository;

import com.teamflavour.flavourwheels.model.Coffee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CoffeeRepository extends JpaRepository<Coffee, Long> {
    List<Coffee> findByCoffeeName(String coffeeName);

    List<Coffee> findByUserEmail(String UserName);

    List<Coffee> findByIdAndUserEmail(Long id, String UserName);
}
