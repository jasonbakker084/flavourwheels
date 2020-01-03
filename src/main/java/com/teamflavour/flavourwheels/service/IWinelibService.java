package com.teamflavour.flavourwheels.service;

import com.teamflavour.flavourwheels.model.Coffee;
import com.teamflavour.flavourwheels.model.Wine;

import java.sql.Blob;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface IWinelibService {

    List<Wine> getWinesByName(String wineName);

    Optional<Wine> getWineById(long id);

    void updateWine(Wine wine);

    void addWine(Date date, String wineName, String wineHouse, String wineColor, String wineYear, String processingMethod, String tastingMethod, String grapeType, String userNotes, Boolean flag,
                 Blob file);

    void deleteWine(long id);

    void saveWine(Wine wine);
}
