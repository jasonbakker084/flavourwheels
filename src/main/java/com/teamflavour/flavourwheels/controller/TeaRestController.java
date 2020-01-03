package com.teamflavour.flavourwheels.controller;

import com.teamflavour.flavourwheels.model.Coffee;
import com.teamflavour.flavourwheels.model.Tea;
import com.teamflavour.flavourwheels.model.Wine;
import com.teamflavour.flavourwheels.repository.CoffeeRepository;
import com.teamflavour.flavourwheels.repository.TeaRepository;
import com.teamflavour.flavourwheels.repository.WineRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TeaRestController {


    private static final Logger logger = LoggerFactory.getLogger(CoffeeController.class);


    @Autowired
    private TeaRepository repository;

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        // Date - dd/MM/yyyy
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
    }

    @GetMapping("/tealib")
    public List<Tea> allTastedTea() {
        return repository.findAll();
    }


    @GetMapping(path = {"/tealib/{id}"})
    public ResponseEntity<Tea> findById(@PathVariable long id) {
        return repository.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/tealib/count")
    public Long count() {
        return repository.count();
    }

    @PostMapping(value = "/tealib/posts")
    public Tea create(@RequestBody Tea tea) {
        return repository.save(tea);
    }


}
