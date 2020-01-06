package com.teamflavour.flavourwheels.service;


import com.teamflavour.flavourwheels.model.Beer;
import com.teamflavour.flavourwheels.model.Coffee;
import com.teamflavour.flavourwheels.repository.BeerRepository;
import com.teamflavour.flavourwheels.repository.CoffeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Blob;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BeerService implements IBeerlibService {

    @Autowired
    private BeerRepository beerRepository;

    @Override
    public List<Beer> getBeersByName(String beerName) {
        return beerRepository.findByBeerName(beerName);
    }

    @Override
    public Optional<Beer> getBeerById(long id) {
        return beerRepository.findById(id);
    }

    @Override
    public void updateBeer(Beer beer) {
        beerRepository.save(beer);
    }

    @Override
    public void addBeer(Date date, String beerName, String brewery, String beerColor, String productiondate, String processingMethod, String tastingMethod, String beanType, String userNotes, Boolean flag,
                          Blob file) {
        beerRepository.save(new Beer(date, beerName, brewery, beerColor, productiondate, beanType, processingMethod, tastingMethod, userNotes, flag, file));
    }

    @Override
    public void deleteBeer(long id) {
        Optional<Beer> beerLib = beerRepository.findById(id);
        if (beerLib.isPresent()) {
            beerRepository.delete(beerLib.get());
        }
        ;
    }

    @Override
    public void saveBeer(Beer beer) {
        beerRepository.save(beer);
    }


}
