package com.teamflavour.flavourwheels.service;

import com.teamflavour.flavourwheels.model.Coffee;

import java.sql.Blob;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface ICoffeelibService {

    List<Coffee> getCoffeesByName(String coffeeName);

    Optional<Coffee> getCoffeeById(long id);

    void updateCoffee(Coffee coffee);

    void addCoffee(Date date, String coffeeName, String roaster, String roastColor, String roastDate, String processingMethod, String tastingMethod, String beanType, String userNotes, Boolean flag,
                   Blob file);

    void deleteCoffee(long id);

    void saveCoffee(Coffee coffee);
}
