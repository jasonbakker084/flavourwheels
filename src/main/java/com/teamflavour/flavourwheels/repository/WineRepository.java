package com.teamflavour.flavourwheels.repository;

import com.teamflavour.flavourwheels.model.Wine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WineRepository extends JpaRepository<Wine, Long> {
    List<Wine>findByWineName(String wineName);
    List<Wine> findByUserEmail(String UserName);
    List<Wine> findByIdAndUserEmail(Long id, String UserName);
}
