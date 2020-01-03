package com.teamflavour.flavourwheels.service;


import com.teamflavour.flavourwheels.model.Coffee;
import com.teamflavour.flavourwheels.model.Tea;
import com.teamflavour.flavourwheels.repository.CoffeeRepository;
import com.teamflavour.flavourwheels.repository.TeaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Blob;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TeaService implements ITealibService {

    @Autowired
    private TeaRepository teaRepository;

    @Override
    public List<Tea> getTeasByName(String teaName) {
        return teaRepository.findByTeaName(teaName);
    }

    @Override
    public Optional<Tea> getTeaById(long id) {
        return teaRepository.findById(id);
    }

    @Override
    public void updateTea(Tea tea) {
        teaRepository.save(tea);
    }

    @Override
    public void addTea(Date date, String teaName, String teaHouse, String teaColor, String teaDate, String processingMethod, String tastingMethod, String leaveType, String userNotes, Boolean flag,
                          Blob file) {
        teaRepository.save(new Tea(date, teaName, teaHouse, teaColor, teaDate, leaveType, processingMethod, tastingMethod, userNotes, flag, file));
    }

    @Override
    public void deleteTea(long id) {
        Optional<Tea> teaLib = teaRepository.findById(id);
        if (teaLib.isPresent()) {
            teaRepository.delete(teaLib.get());
        }
        ;
    }

    @Override
    public void saveTea(Tea tea) {
        teaRepository.save(tea);
    }


}
