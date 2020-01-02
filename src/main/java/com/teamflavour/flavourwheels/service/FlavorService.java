package com.teamflavour.flavourwheels.service;

import com.teamflavour.flavourwheels.repository.FlavorCoffeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FlavorService {

    @Autowired
    private FlavorCoffeeRepository flavorCoffeeRepository;
}
