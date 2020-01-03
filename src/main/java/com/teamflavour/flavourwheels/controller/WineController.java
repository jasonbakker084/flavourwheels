package com.teamflavour.flavourwheels.controller;

import com.teamflavour.flavourwheels.model.FlavorWine;
import com.teamflavour.flavourwheels.model.User;
import com.teamflavour.flavourwheels.model.Wine;
import com.teamflavour.flavourwheels.repository.FlavorWineRepository;
import com.teamflavour.flavourwheels.repository.UserRepository;
import com.teamflavour.flavourwheels.repository.WineRepository;
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
public class WineController {

    private static final Logger logger = LoggerFactory.getLogger(WineController.class);
    private static ServiceRegistry serviceRegistry;
    private static Session session;
    private WineRepository repository;

    private UserRepository userRepository;

    private FlavorWineRepository flavorWineRepository;

    @Autowired
    public WineController(WineRepository repository, UserRepository userRepository, FlavorWineRepository flavorWineRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.flavorWineRepository = flavorWineRepository;
    }

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        // Date - dd/MM/yyyy
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
    }

    @GetMapping(path = {"api/winewheel/{id}"})
    public ResponseEntity<Wine> findById(@PathVariable long id) {
        return repository.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping(path = {"/winewheel/{id}"})
    public String showById(@PathVariable long id, Model model) throws SQLException {
        List<Wine> wines = repository.findByIdAndUserEmail(id, getCurrentUserName());
        if (wines.size() > 0) {
            Blob blob = wines.get(0).getFile();
            if (blob != null) {
                String image = Base64.encodeBase64String(blob.getBytes(1, (int) blob.length()));
                String fileType = wines.get(0).getFileType();
                model.addAttribute("image", image);
                model.addAttribute("filetype", fileType);
            }
        }
        model.addAttribute("wines", wines);
        return "winewheel";
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

    @PostMapping(value = "/addwine", consumes = {"multipart/form-data"})
    public String addNewWine(
            @RequestParam("file") MultipartFile file,
            @RequestParam("wineName") String wineName,
            @RequestParam("wineHouse") String wineHouse,
            @RequestParam("wineColor") String wineColor,
            @RequestParam("wineYear") String wineYear,
            @RequestParam("processingMethod") String processingMethod,
            @RequestParam("tastingMethod") String tastingMethod,
            @RequestParam("grapeType") String grapeType,
            @RequestParam("userNotes") String userNotes,
            @RequestParam("flavorsWine") int[] flavorids)
            throws IOException, SQLException {
        Wine w = new Wine();
        w.setFlag(false);
        w.setDate(new Date());
        if (wineName == null) {
            wineName = "Unnamed Wine";
        }
        w.setWineName(wineName);
        w.setWineHouse(wineHouse);
        w.setWineColor(wineColor);
        w.setWineYear(wineYear);
        w.setProcessingMethod(processingMethod);
        w.setTastingMethod(tastingMethod);
        w.setGrapeType(grapeType);
        w.setUserNotes(userNotes);
        //voeg flavorWines toe dmv array met flavorIDs
//        System.out.println(flavorids[0]);
        ArrayList<FlavorWine> flavorWines = new ArrayList<>();
        for (int i = 0; i < flavorids.length; i++) {
            flavorWines.add(flavorWineRepository.findByID(flavorids[i]));
        }
        w.setFlavorWines(flavorWines);
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
        return "redirect:winewheel?successwine";
    }

    @PostMapping(path = "/winelib/posts/flag")
    public boolean addFlag(@RequestParam("flag") boolean flag) {
        Wine f = new Wine();
        f.setFlag(flag);
        repository.save(f);
        return false;
    }

    //TODO: deze method afmaken
    @PutMapping(value = "/winelib/{id}")
    public ResponseEntity<Wine> update(@PathVariable("id") long id, @RequestBody Wine wine) {
        return repository.findById(id).map(record -> {
            record.setDate(wine.getDate());
            record.setWineName(wine.getWineName());
            record.setWineHouse(wine.getWineHouse());
            record.setWineColor(wine.getWineColor());
            record.setProcessingMethod(wine.getProcessingMethod());
            record.setTastingMethod(wine.getTastingMethod());
            record.setGrapeType(wine.getGrapeType());
            record.setUserNotes(wine.getUserNotes());
            record.setFlag(wine.isFlag());
            Wine updated = repository.save(record);
            return ResponseEntity.ok().body(updated);
        }).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("winelib/delete/{id}")
    public String deleteWine(@PathVariable("id") long id, Model model) {
        Wine wine = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid wine Id:" + id));
        repository.delete(wine);
        model.addAttribute("wine", repository.findAll());
        return "redirect:/library";
    }
}
