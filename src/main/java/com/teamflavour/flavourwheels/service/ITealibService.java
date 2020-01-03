package com.teamflavour.flavourwheels.service;

import com.teamflavour.flavourwheels.model.Coffee;
import com.teamflavour.flavourwheels.model.Tea;

import java.sql.Blob;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface ITealibService {

    List<Tea> getTeasByName(String teaName);

    Optional<Tea> getTeaById(long id);

    void updateTea(Tea tea);

    void addTea(Date date, String teaName, String teaHouse, String teaColor, String teaDate, String processingMethod, String tastingMethod, String leaveType, String userNotes, Boolean flag,
                   Blob file);

    void deleteTea(long id);

    void saveTea(Tea tea);
}
