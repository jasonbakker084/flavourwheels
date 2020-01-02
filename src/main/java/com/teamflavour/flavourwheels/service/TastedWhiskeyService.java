package com.teamflavour.flavourwheels.service;

import com.teamflavour.flavourwheels.model.Whiskey;
import com.teamflavour.flavourwheels.repository.WhiskeyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TastedWhiskeyService {


    @Autowired
    private WhiskeyRepository whiskeyRepository;

    public List<Whiskey> findAll() {
        var it = whiskeyRepository.findAll();

        var tastedwhiskeys = new ArrayList<Whiskey>();
        it.forEach(e -> tastedwhiskeys.add(e));

        return tastedwhiskeys;
    }

    public Long count() {
        return whiskeyRepository.count();
    }

    public void deleteById(Long tastedWhiskeyId) {
        whiskeyRepository.deleteById(tastedWhiskeyId);
    }

}
