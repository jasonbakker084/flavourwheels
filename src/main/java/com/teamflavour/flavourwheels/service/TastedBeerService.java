package com.teamflavour.flavourwheels.service;

import com.teamflavour.flavourwheels.model.Beer;
import com.teamflavour.flavourwheels.model.Coffee;
import com.teamflavour.flavourwheels.repository.BeerRepository;
import com.teamflavour.flavourwheels.repository.CoffeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TastedBeerService {


    @Autowired
    private BeerRepository beerRepository;

    public List<Beer> findAll() {
        var it = beerRepository.findAll();

        var tastedbeers = new ArrayList<Beer>();
        it.forEach(e -> tastedbeers.add(e));

        return tastedbeers;
    }

    public Long count() {
        return beerRepository.count();
    }

    public void deleteById(Long tastedBeerId) {
        beerRepository.deleteById(tastedBeerId);
    }

}
