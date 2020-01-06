package com.teamflavour.flavourwheels.service;

import com.teamflavour.flavourwheels.model.Beer;
import com.teamflavour.flavourwheels.model.Coffee;
import com.teamflavour.flavourwheels.model.Tea;

import java.sql.Blob;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface IBeerlibService {

    List<Beer> getBeersByName(String beerName);

    Optional<Beer> getBeerById(long id);

    void updateBeer(Beer beer);

    void addBeer(Date date, String beerName, String brewery, String beerColor, String productionDate, String processingMethod, String tastingMethod, String leaveType, String userNotes, Boolean flag,
                Blob file);

    void deleteBeer(long id);

    void saveBeer(Beer beer);
}
