package com.teamflavour.flavourwheels.service;

import com.teamflavour.flavourwheels.model.Whiskey;
import com.teamflavour.flavourwheels.model.Wine;
import com.teamflavour.flavourwheels.repository.WhiskeyRepository;
import com.teamflavour.flavourwheels.repository.WineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Blob;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class WhiskeyService implements IWhiskeylibService {

    @Autowired
    private WhiskeyRepository whiskeyRepository;

    @Override
    public List<Whiskey> getWhiskeysByName(String whiskeyName) {
        return whiskeyRepository.findByWhiskeyName(whiskeyName);
    }

    @Override
    public Optional<Whiskey> getWhiskeyById(long id) {
        return whiskeyRepository.findById(id);
    }

    @Override
    public void updateWhiskey(Whiskey whiskey) {
        whiskeyRepository.save(whiskey);
    }

    @Override
    public void addWhiskey(Date date, String whiskeyName, String whiskeyHouse, String whiskeyColor, String whiskeyYear, String processingMethod, String tastingMethod, String grapeType, String userNotes, Boolean flag,
                           Blob file) {
        whiskeyRepository.save(new Whiskey(date, whiskeyName, whiskeyHouse, whiskeyColor, whiskeyYear, grapeType, processingMethod, tastingMethod, userNotes, flag, file));
    }

    @Override
    public void deleteWhiskey(long id) {
        Optional<Whiskey> whiskeyLib = whiskeyRepository.findById(id);
        if (whiskeyLib.isPresent()) {
            whiskeyRepository.delete(whiskeyLib.get());
        }
        ;
    }

    @Override
    public void saveWhiskey(Whiskey whiskey) {
        whiskeyRepository.save(whiskey);
    }


}
