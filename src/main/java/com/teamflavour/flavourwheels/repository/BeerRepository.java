package com.teamflavour.flavourwheels.repository;

import com.teamflavour.flavourwheels.model.Beer;
import com.teamflavour.flavourwheels.model.Coffee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BeerRepository extends JpaRepository<Beer, Long> {
    List<Beer> findByBeerName(String coffeeName);

    List<Beer> findByUserEmail(String UserName);

    List<Beer> findByIdAndUserEmail(Long id, String UserName);
}
