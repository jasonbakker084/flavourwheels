package com.teamflavour.flavourwheels.controller;

import com.teamflavour.flavourwheels.model.*;
import com.teamflavour.flavourwheels.repository.*;
import org.apache.commons.io.FilenameUtils;
import org.apache.tomcat.util.codec.binary.Base64;
import org.hibernate.Session;
import org.hibernate.service.ServiceRegistry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Controller
@RequestMapping("")
public class BeerController {

    private static final Logger logger = LoggerFactory.getLogger(WineController.class);
    private static ServiceRegistry serviceRegistry;
    private static Session session;
    private BeerRepository repository;

    private UserRepository userRepository;

    private FlavorBeerRepository flavorBeerRepository;

    @Autowired
    public BeerController(BeerRepository repository, UserRepository userRepository, FlavorBeerRepository flavorBeerRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.flavorBeerRepository = flavorBeerRepository;
    }

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        // Date - dd/MM/yyyy
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
    }

    @GetMapping(path = {"api/beerwheel/{id}"})
    public ResponseEntity<Beer> findById(@PathVariable long id) {
        return repository.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

//    @GetMapping(path = {"/beerwheel/{id}"})
//    public String showById(@PathVariable long id, Model model) throws SQLException {
//        List<Beer> beers = repository.findByIdAndUserEmail(id, getCurrentUserName());
//        if (beers.size() > 0) {
//            Blob blob = beers.get(0).getFile();
//            if (blob != null) {
//                String image = Base64.encodeBase64String(blob.getBytes(1, (int) blob.length()));
//                String fileType = beers.get(0).getFileType();
//                model.addAttribute("image", image);
//                model.addAttribute("filetype", fileType);
//            }
//        }
//        model.addAttribute("beers", beers);
//        return "beerwheel";
//    }

//    @GetMapping("/winewheel")
//    public String showUpdateForm(Model model) {
////        model.addAttribute("role", userRepository.findByEmail(getCurrentUserName()).getRoles().stream().findFirst());
////        model.addAttribute("wines", repository.findByUserEmail(getCurrentUserName()));
//        return "winewheel";
//    }

    private String getCurrentUserName() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userName = "";
        if (principal instanceof org.springframework.security.core.userdetails.User) {
            userName = ((org.springframework.security.core.userdetails.User) principal).getUsername();
        }
        return userName;
    }

    @PostMapping(value = "/addbeer", consumes = {"multipart/form-data"})
    public String addNewWine(
            @RequestParam("file") MultipartFile file,
            @RequestParam("beerName") String beerName,
            @RequestParam("brewery") String brewery,
            @RequestParam("beerColor") String beerColor,
            @RequestParam("productionDate") String productionDate,
            @RequestParam("processingMethod") String processingMethod,
            @RequestParam("tastingMethod") String tastingMethod,
            @RequestParam("grapeType") String grapeType,
            @RequestParam("userNotes") String userNotes,
            @RequestParam("flavorsBeer") int[] flavorids)
            throws IOException, SQLException {
        Beer w = new Beer();
        w.setFlag(false);
        w.setDate(new Date());
        if (beerName == null) {
            beerName = "Unnamed Beer";
        }
        w.setBeerName(beerName);
        w.setBrewery(brewery);
        w.setBeerColor(beerColor);
        w.setProductionDate(productionDate);
        w.setProcessingMethod(processingMethod);
        w.setTastingMethod(tastingMethod);
        w.setGrapeType(grapeType);
        w.setUserNotes(userNotes);
        //voeg flavorWines toe dmv array met flavorIDs
//        System.out.println(flavorids[0]);
        ArrayList<FlavorBeer> flavorBeers = new ArrayList<>();
        for (int i = 0; i < flavorids.length; i++) {
            flavorBeers.add(flavorBeerRepository.findByID(flavorids[i]));
        }
        w.setFlavorBeers(flavorBeers);
        //Zoek huidige user en koppel de Wine daaraan.
        User currentUser = userRepository.findByEmail(getCurrentUserName());
        w.setUser(currentUser);
        //file omzetten naar blob
        if ((!file.isEmpty()) && (file.getSize() < 3200000)) {
            byte[] bytes = file.getBytes();
            Blob blob = new javax.sql.rowset.serial.SerialBlob(bytes);
            w.setFile(blob);
        }
        String extension = FilenameUtils.getExtension(file.getOriginalFilename());
        //String filetype = FilenameUtils.getBaseName()
        w.setFileType(extension);
        repository.save(w);
        return "redirect:beerwheel?successbeer";
    }

    @PostMapping(path = "/beerlib/posts/flag")
    public boolean addFlag(@RequestParam("flag") boolean flag) {
        Beer f = new Beer();
        f.setFlag(flag);
        repository.save(f);
        return false;
    }

    //TODO: deze method afmaken
    @PutMapping(value = "/beerlib/{id}")
    public ResponseEntity<Beer> update(@PathVariable("id") long id, @RequestBody Beer beer) {
        return repository.findById(id).map(record -> {
            record.setDate(beer.getDate());
            record.setBeerName(beer.getBeerName());
            record.setBrewery(beer.getBrewery());
            record.setBeerColor(beer.getBeerColor());
            record.setProcessingMethod(beer.getProcessingMethod());
            record.setTastingMethod(beer.getTastingMethod());
            record.setGrapeType(beer.getGrapeType());
            record.setUserNotes(beer.getUserNotes());
            record.setFlag(beer.isFlag());
            Beer updated = repository.save(record);
            return ResponseEntity.ok().body(updated);
        }).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("beerlib/delete/{id}")
    public String deleteWine(@PathVariable("id") long id, Model model) {
        Beer beer = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid beer Id:" + id));
        repository.delete(beer);
        model.addAttribute("beer", repository.findAll());
        return "redirect:/library";
    }
}
