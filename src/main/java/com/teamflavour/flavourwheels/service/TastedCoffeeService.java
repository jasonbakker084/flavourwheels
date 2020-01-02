package com.teamflavour.flavourwheels.service;

import com.teamflavour.flavourwheels.model.Coffee;
import com.teamflavour.flavourwheels.repository.CoffeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TastedCoffeeService {


    @Autowired
    private CoffeeRepository coffeeRepository;

    public List<Coffee> findAll() {
        var it = coffeeRepository.findAll();

        var tastedcoffees = new ArrayList<Coffee>();
        it.forEach(e -> tastedcoffees.add(e));

        return tastedcoffees;
    }

    public Long count() {
        return coffeeRepository.count();
    }

    public void deleteById(Long tastedCoffeeId) {
        coffeeRepository.deleteById(tastedCoffeeId);
    }

}
