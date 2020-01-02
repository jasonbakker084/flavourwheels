package com.teamflavour.flavourwheels.service;

import com.teamflavour.flavourwheels.model.Wine;
import com.teamflavour.flavourwheels.repository.WineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TastedWineService {


    @Autowired
    private WineRepository wineRepository;

    public List<Wine> findAll() {
        var it = wineRepository.findAll();

        var tastedwines = new ArrayList<Wine>();
        it.forEach(e -> tastedwines.add(e));

        return tastedwines;
    }

    public Long count() {
        return wineRepository.count();
    }

    public void deleteById(Long tastedWineId) {
        wineRepository.deleteById(tastedWineId);
    }

}
