package com.teamflavour.flavourwheels.repository;

import com.teamflavour.flavourwheels.model.Coffee;
import com.teamflavour.flavourwheels.model.Tea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeaRepository extends JpaRepository<Tea, Long> {
    List<Tea> findByTeaName(String teaName);

    List<Tea> findByUserEmail(String UserName);

    List<Tea> findByIdAndUserEmail(Long id, String UserName);
}
