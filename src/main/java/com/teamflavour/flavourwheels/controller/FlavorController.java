package com.teamflavour.flavourwheels.controller;

import com.teamflavour.flavourwheels.model.FlavorCoffee;
import com.teamflavour.flavourwheels.model.FlavorWine;
import com.teamflavour.flavourwheels.repository.FlavorCoffeeRepository;
import com.teamflavour.flavourwheels.repository.FlavorWineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class FlavorController {

    @Autowired
    private FlavorCoffeeRepository repositoryCoffee;

    @Autowired
    private FlavorWineRepository repositoryWine;



    @GetMapping("/api/flavorlistCoffee")
    public List<FlavorCoffee> allFlavorsCoffee() {
           return (List<FlavorCoffee>) repositoryCoffee.findAll();
     }

    @GetMapping("/api/flavorlistWine")
    public List<FlavorWine> allFlavorsWine() {
        return (List<FlavorWine>) repositoryWine.findAll();
    }

 //   @GetMapping(path = {"/api/flavor/{id}"})
  //  public ResponseEntity<FlavorCoffee> findById(@PathVariable int id) {
 //       return repository.findById(id).map(record -> ResponseEntity.ok().body(record))
 //               .orElse(ResponseEntity.notFound().build());
  //  }
}