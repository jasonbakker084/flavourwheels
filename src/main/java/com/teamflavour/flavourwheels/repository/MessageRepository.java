package com.teamflavour.flavourwheels.repository;

import com.teamflavour.flavourwheels.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Integer> {

}