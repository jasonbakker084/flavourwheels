package com.teamflavour.flavourwheels.repository;

import com.teamflavour.flavourwheels.model.Whiskey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WhiskeyRepository extends JpaRepository<Whiskey, Long> {
    List<Whiskey>findByWhiskeyName(String whiskeyName);
    List<Whiskey> findByUserEmail(String UserName);
    List<Whiskey> findByIdAndUserEmail(Long id, String UserName);
}
