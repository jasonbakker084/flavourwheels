package com.teamflavour.flavourwheels.service;

import com.teamflavour.flavourwheels.model.Wine;
import com.teamflavour.flavourwheels.repository.WineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Blob;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class WineService implements IWinelibService {

    @Autowired
    private WineRepository wineRepository;

    @Override
    public List<Wine> getWinesByName(String wineName) {
        return wineRepository.findByWineName(wineName);
    }

    @Override
    public Optional<Wine> getWineById(long id) {
        return wineRepository.findById(id);
    }

    @Override
    public void updateWine(Wine wine) {
        wineRepository.save(wine);
    }

    @Override
    public void addWine(Date date, String wineName, String wineHouse, String wineColor, String wineYear, String processingMethod, String tastingMethod, String grapeType, String userNotes, Boolean flag,
                        Blob file) {
        wineRepository.save(new Wine(date, wineName, wineHouse, wineColor, wineYear, grapeType, processingMethod, tastingMethod, userNotes, flag, file));
    }

    @Override
    public void deleteWine(long id) {
        Optional<Wine> wineLib = wineRepository.findById(id);
        if (wineLib.isPresent()) {
            wineRepository.delete(wineLib.get());
        }
        ;
    }

    @Override
    public void saveWine(Wine wine) {
        wineRepository.save(wine);
    }


}
