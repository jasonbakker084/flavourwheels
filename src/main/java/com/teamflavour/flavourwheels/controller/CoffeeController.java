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
public class CoffeeController {

    private static final Logger logger = LoggerFactory.getLogger(CoffeeController.class);
    private static ServiceRegistry serviceRegistry;
    private static Session session;
    private CoffeeRepository coffeerepository;

    private WineRepository winerepository;

    private WhiskeyRepository whiskeyRepository;

    private TeaRepository teaRepository;

    private UserRepository userRepository;

    private FlavorCoffeeRepository flavorCoffeeRepository;

    @Autowired
    public CoffeeController(CoffeeRepository coffeerepository, TeaRepository teaRepository, WineRepository winerepository, WhiskeyRepository whiskeyRepository, UserRepository userRepository, FlavorCoffeeRepository flavorCoffeeRepository) {
        this.coffeerepository = coffeerepository;
        this.userRepository = userRepository;
        this.flavorCoffeeRepository = flavorCoffeeRepository;
        this.winerepository = winerepository;
        this.whiskeyRepository = whiskeyRepository;
        this.teaRepository = teaRepository;
    }

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        // Date - dd/MM/yyyy
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
    }

    @GetMapping(path = {"api/library/{id}"})
    public ResponseEntity<Coffee> findById(@PathVariable long id) {
        return coffeerepository.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }


    @GetMapping(path = {"/library/{id}"})
    public String showById(@PathVariable long id, Model model) throws SQLException {
        List<Coffee> coffees = coffeerepository.findByIdAndUserEmail(id, getCurrentUserName());
        List<Wine> wines = winerepository.findByIdAndUserEmail(id, getCurrentUserName());
        List<Whiskey> whiskeys = whiskeyRepository.findByIdAndUserEmail(id, getCurrentUserName());
        List<Tea> teas = teaRepository.findByIdAndUserEmail(id, getCurrentUserName());
        if (coffees.size() > 0) {
            Blob blob = coffees.get(0).getFile();
            if (blob != null) {
                String image = Base64.encodeBase64String(blob.getBytes(1, (int) blob.length()));
                String fileType = coffees.get(0).getFileType();
                model.addAttribute("image", image);
                model.addAttribute("filetype", fileType);
            }
        }
        if (wines.size() > 0) {
            Blob blob = wines.get(0).getFile();
            if (blob != null) {
                String image = Base64.encodeBase64String(blob.getBytes(1, (int) blob.length()));
                String fileType = wines.get(0).getFileType();
                model.addAttribute("image", image);
                model.addAttribute("filetype", fileType);
            }
        }
        if (whiskeys.size() > 0) {
            Blob blob = whiskeys.get(0).getFile();
            if (blob != null) {
                String image = Base64.encodeBase64String(blob.getBytes(1, (int) blob.length()));
                String fileType = whiskeys.get(0).getFileType();
                model.addAttribute("image", image);
                model.addAttribute("filetype", fileType);
            }
        }
        if (teas.size() > 0) {
            Blob blob = teas.get(0).getFile();
            if (blob != null) {
                String image = Base64.encodeBase64String(blob.getBytes(1, (int) blob.length()));
                String fileType = teas.get(0).getFileType();
                model.addAttribute("image", image);
                model.addAttribute("filetype", fileType);
            }
        }
        model.addAttribute("wines", wines);
        model.addAttribute("coffees", coffees);
        model.addAttribute("whiskeys", whiskeys);
        model.addAttribute("teas", teas);
        return "library";
    }

    @GetMapping("/library")
    public String showUpdateForm(Model model) {
        model.addAttribute("role", userRepository.findByEmail(getCurrentUserName()).getRoles().stream().findFirst());
        model.addAttribute("coffees", coffeerepository.findByUserEmail(getCurrentUserName()));
        model.addAttribute("wines", winerepository.findByUserEmail(getCurrentUserName()));
        model.addAttribute("whiskeys", whiskeyRepository.findByUserEmail(getCurrentUserName()));
        model.addAttribute("teas", teaRepository.findByUserEmail(getCurrentUserName()));
        return "library";
    }

    private String getCurrentUserName() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userName = "";
        if (principal instanceof org.springframework.security.core.userdetails.User) {
            userName = ((org.springframework.security.core.userdetails.User) principal).getUsername();
        }
        return userName;
    }

    @PostMapping(value = "/add", consumes = {"multipart/form-data"})
    public String addNewCoffee(
            @RequestParam("file") MultipartFile file,
            @RequestParam("coffeeName") String coffeeName,
            @RequestParam("roaster") String roaster,
            @RequestParam("roastColor") String roastColor,
            @RequestParam("roastDate") String roastDate,
            @RequestParam("processingMethod") String processingMethod,
            @RequestParam("tastingMethod") String tastingMethod,
            @RequestParam("beanType") String beanType,
            @RequestParam("userNotes") String userNotes,
            @RequestParam("flavorsCoffee") int[] flavorids)
            throws IOException, SQLException {
        Coffee c = new Coffee();

        c.setFlag(false);
        c.setDate(new Date());
        if (coffeeName == null) {
            coffeeName = "Unnamed Coffee";
        }
        c.setCoffeeName(coffeeName);
        c.setRoaster(roaster);
        c.setRoastColor(roastColor);
        c.setRoastDate(roastDate);
        c.setProcessingMethod(processingMethod);
        c.setTastingMethod(tastingMethod);
        c.setBeanType(beanType);
        c.setUserNotes(userNotes);
        //voeg flavorCoffees toe dmv array met flavorIDs
//        System.out.println(flavorids[0]);
        ArrayList<FlavorCoffee> flavorCoffees = new ArrayList<>();
        for (int i = 0; i < flavorids.length; i++) {
            flavorCoffees.add(flavorCoffeeRepository.findByID(flavorids[i]));
        }
        c.setFlavorCoffees(flavorCoffees);
        //Zoek huidige user en koppel de Coffee daaraan.
        User currentUser = userRepository.findByEmail(getCurrentUserName());
        c.setUser(currentUser);
        //file omzetten naar blob
        if ((!file.isEmpty()) && (file.getSize() < 3200000)) {
            byte[] bytes = file.getBytes();
            Blob blob = new javax.sql.rowset.serial.SerialBlob(bytes);
            c.setFile(blob);
        }
        String extension = FilenameUtils.getExtension(file.getOriginalFilename());
        //String filetype = FilenameUtils.getBaseName()
        c.setFileType(extension);
        coffeerepository.save(c);
        return "redirect:/?successcoffee";
    }

    @PostMapping(path = "/coffeelib/posts/flag")
    public boolean addFlag(@RequestParam("flag") boolean flag) {
        Coffee f = new Coffee();
        f.setFlag(flag);
        coffeerepository.save(f);
        return false;
    }

    //TODO: deze method afmaken
    @PutMapping(value = "/coffeelib/{id}")
    public ResponseEntity<Coffee> update(@PathVariable("id") long id, @RequestBody Coffee coffee) {
        return coffeerepository.findById(id).map(record -> {
            record.setDate(coffee.getDate());
            record.setCoffeeName(coffee.getCoffeeName());
            record.setRoaster(coffee.getRoaster());
            record.setRoastColor(coffee.getRoastColor());
            record.setProcessingMethod(coffee.getProcessingMethod());
            record.setTastingMethod(coffee.getTastingMethod());
            record.setBeanType(coffee.getBeanType());
            record.setUserNotes(coffee.getUserNotes());
            record.setFlag(coffee.isFlag());
            Coffee updated = coffeerepository.save(record);
            return ResponseEntity.ok().body(updated);
        }).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("coffeelib/delete/{id}")
    public String deleteCoffee(@PathVariable("id") long id, Model model) {
        Coffee coffee = coffeerepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid coffee Id:" + id));
        coffeerepository.delete(coffee);
//        Wine wine = winerepository.findById(id)
//                .orElseThrow(() -> new IllegalArgumentException("Invalid wine Id:" + id));
//        winerepository.delete(wine);
        model.addAttribute("coffee", coffeerepository.findAll());
//        model.addAttribute("wine", winerepository.findAll());
        return "redirect:/library";
    }
}
