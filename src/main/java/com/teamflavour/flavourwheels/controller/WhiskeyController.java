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
public class WhiskeyController {

    private static final Logger logger = LoggerFactory.getLogger(WineController.class);
    private static ServiceRegistry serviceRegistry;
    private static Session session;

    private WhiskeyRepository repository;

    private UserRepository userRepository;

    private FlavorWhiskeyRepository flavorWhiskeyRepository;

    @Autowired
    public WhiskeyController(WhiskeyRepository repository, UserRepository userRepository, FlavorWhiskeyRepository flavorWhiskeyRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.flavorWhiskeyRepository = flavorWhiskeyRepository;
    }

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        // Date - dd/MM/yyyy
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
    }

    @GetMapping(path = {"api/whiskeywheel/{id}"})
    public ResponseEntity<Whiskey> findById(@PathVariable long id) {
        return repository.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping(path = {"/whiskeywheel/{id}"})
    public String showById(@PathVariable long id, Model model) throws SQLException {
        List<Whiskey> whiskeys = repository.findByIdAndUserEmail(id, getCurrentUserName());
        if (whiskeys.size() > 0) {
            Blob blob = whiskeys.get(0).getFile();
            if (blob != null) {
                String image = Base64.encodeBase64String(blob.getBytes(1, (int) blob.length()));
                String fileType = whiskeys.get(0).getFileType();
                model.addAttribute("image", image);
                model.addAttribute("filetype", fileType);
            }
        }
        model.addAttribute("whiskeys", whiskeys);
        return "whiskeywheel";
    }

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

    @PostMapping(value = "/addwhiskey", consumes = {"multipart/form-data"})
    public String addNewWhiskey(
            @RequestParam("file") MultipartFile file,
            @RequestParam("whiskeyName") String whiskeyName,
            @RequestParam("whiskeyHouse") String whiskeyHouse,
            @RequestParam("whiskeyColor") String whiskeyColor,
            @RequestParam("whiskeyYear") String whiskeyYear,
            @RequestParam("processingMethod") String processingMethod,
            @RequestParam("tastingMethod") String tastingMethod,
            @RequestParam("grapeType") String grapeType,
            @RequestParam("userNotes") String userNotes,
            @RequestParam("flavorsWhiskey") int[] flavorids)
            throws IOException, SQLException {
        Whiskey w = new Whiskey();
        w.setFlag(false);
        w.setDate(new Date());
        if (whiskeyName == null) {
            whiskeyName = "Unnamed Whiskey";
        }
        w.setWhiskeyName(whiskeyName);
        w.setWhiskeyHouse(whiskeyHouse);
        w.setWhiskeyColor(whiskeyColor);
        w.setWhiskeyYear(whiskeyYear);
        w.setProcessingMethod(processingMethod);
        w.setTastingMethod(tastingMethod);
        w.setGrapeType(grapeType);
        w.setUserNotes(userNotes);
        //voeg flavorWines toe dmv array met flavorIDs
//        System.out.println(flavorids[0]);
        ArrayList<FlavorWhiskey> flavorWhiskeys = new ArrayList<>();
        for (int i = 0; i < flavorids.length; i++) {
            flavorWhiskeys.add(flavorWhiskeyRepository.findByID(flavorids[i]));
        }
        w.setFlavorWhiskeys(flavorWhiskeys);
        //Zoek huidige user en koppel de Whiskey daaraan.
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
        return "redirect:whiskeywheel?successwhiskey";
    }

    @PostMapping(path = "/whiskeylib/posts/flag")
    public boolean addFlag(@RequestParam("flag") boolean flag) {
        Whiskey f = new Whiskey();
        f.setFlag(flag);
        repository.save(f);
        return false;
    }

    //TODO: deze method afmaken
    @PutMapping(value = "/whiskeylib/{id}")
    public ResponseEntity<Whiskey> update(@PathVariable("id") long id, @RequestBody Whiskey whiskey) {
        return repository.findById(id).map(record -> {
            record.setDate(whiskey.getDate());
            record.setWhiskeyName(whiskey.getWhiskeyName());
            record.setWhiskeyHouse(whiskey.getWhiskeyHouse());
            record.setWhiskeyColor(whiskey.getWhiskeyColor());
            record.setProcessingMethod(whiskey.getProcessingMethod());
            record.setTastingMethod(whiskey.getTastingMethod());
            record.setGrapeType(whiskey.getGrapeType());
            record.setUserNotes(whiskey.getUserNotes());
            record.setFlag(whiskey.isFlag());
            Whiskey updated = repository.save(record);
            return ResponseEntity.ok().body(updated);
        }).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("whiskeylib/delete/{id}")
    public String deleteWhiskey(@PathVariable("id") long id, Model model) {
        Whiskey whiskey = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid whiskey Id:" + id));
        repository.delete(whiskey);
        model.addAttribute("whiskey", repository.findAll());
        return "redirect:/library";
    }
}
