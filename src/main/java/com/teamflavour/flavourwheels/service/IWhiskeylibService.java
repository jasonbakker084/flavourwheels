package com.teamflavour.flavourwheels.service;

import com.teamflavour.flavourwheels.model.Whiskey;

import java.sql.Blob;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface IWhiskeylibService {

    List<Whiskey> getWhiskeysByName(String whiskeyName);

    Optional<Whiskey> getWhiskeyById(long id);

    void updateWhiskey(Whiskey whiskey);

    void addWhiskey(Date date, String whiskeyName, String whiskeyHouse, String whiskeyColor, String whiskeyYear, String processingMethod, String tastingMethod, String beanType, String userNotes, Boolean flag,
                   Blob file);

    void deleteWhiskey(long id);

    void saveWhiskey(Whiskey whiskey);
}
