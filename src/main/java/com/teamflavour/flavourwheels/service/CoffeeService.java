package com.teamflavour.flavourwheels.service;

import com.teamflavour.flavourwheels.model.Coffee;
import com.teamflavour.flavourwheels.repository.CoffeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Blob;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CoffeeService implements ICoffeelibService {

    @Autowired
    private CoffeeRepository coffeeRepository;

    @Override
    public List<Coffee> getCoffeesByName (String coffeeName){
        return coffeeRepository.findByCoffeeName(coffeeName);
    }

    @Override
    public Optional<Coffee> getCoffeeById(long id){
        return coffeeRepository.findById(id);
    }

    @Override
    public void updateCoffee(Coffee coffee) {
        coffeeRepository.save(coffee);
    }

    @Override
    public void addCoffee(Date date, String coffeeName, String roaster, String roastColor, String roastDate, String processingMethod, String tastingMethod, String beanType, String userNotes, Boolean flag,
                          Blob file){
        coffeeRepository.save(new Coffee(date, coffeeName, roaster, roastColor, roastDate, beanType, processingMethod, tastingMethod, userNotes, flag, file));
    }

    @Override
    public void deleteCoffee(long id) {
        Optional<Coffee> coffeeLib = coffeeRepository.findById(id);
        if(coffeeLib.isPresent()){
    coffeeRepository.delete(coffeeLib.get());
        };
    }

    @Override
    public void saveCoffee(Coffee coffee) {
    coffeeRepository.save(coffee);
    }


}
