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
public class TeaController {

    private static final Logger logger = LoggerFactory.getLogger(WineController.class);
    private static ServiceRegistry serviceRegistry;
    private static Session session;
    private TeaRepository repository;

    private UserRepository userRepository;

    private FlavorTeaRepository flavorTeaRepository;

    @Autowired
    public TeaController(TeaRepository repository, UserRepository userRepository, FlavorTeaRepository flavorTeaRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.flavorTeaRepository = flavorTeaRepository;
    }

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        // Date - dd/MM/yyyy
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
    }

    @GetMapping(path = {"api/teawheel/{id}"})
    public ResponseEntity<Tea> findById(@PathVariable long id) {
        return repository.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping(path = {"/teawheel/{id}"})
    public String showById(@PathVariable long id, Model model) throws SQLException {
        List<Tea> wines = repository.findByIdAndUserEmail(id, getCurrentUserName());
        if (wines.size() > 0) {
            Blob blob = wines.get(0).getFile();
            if (blob != null) {
                String image = Base64.encodeBase64String(blob.getBytes(1, (int) blob.length()));
                String fileType = wines.get(0).getFileType();
                model.addAttribute("image", image);
                model.addAttribute("filetype", fileType);
            }
        }
        model.addAttribute("teas", wines);
        return "teawheel";
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

    @PostMapping(value = "/addtea", consumes = {"multipart/form-data"})
    public String addNewWine(
            @RequestParam("file") MultipartFile file,
            @RequestParam("teaName") String teaName,
            @RequestParam("teaHouse") String teaHouse,
            @RequestParam("teaColor") String teaColor,
            @RequestParam("teaDate") String teaDate,
            @RequestParam("processingMethod") String processingMethod,
            @RequestParam("tastingMethod") String tastingMethod,
            @RequestParam("leaveType") String leaveType,
            @RequestParam("userNotes") String userNotes,
            @RequestParam("flavorsTea") int[] flavorids)
            throws IOException, SQLException {
        Tea w = new Tea();
        w.setFlag(false);
        w.setDate(new Date());
        if (teaName == null) {
            teaName = "Unnamed Tea";
        }
        w.setTeaName(teaName);
        w.setTeaHouse(teaHouse);
        w.setTeaColor(teaColor);
        w.setTeaDate(teaDate);
        w.setProcessingMethod(processingMethod);
        w.setTastingMethod(tastingMethod);
        w.setLeaveType(leaveType);
        w.setUserNotes(userNotes);
        //voeg flavorWines toe dmv array met flavorIDs
//        System.out.println(flavorids[0]);
        ArrayList<FlavorTea> flavorTeas = new ArrayList<>();
        for (int i = 0; i < flavorids.length; i++) {
            flavorTeas.add(flavorTeaRepository.findByID(flavorids[i]));
        }
        w.setFlavorTeas(flavorTeas);
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
        return "redirect:teawheel?successtea";
    }

    @PostMapping(path = "/tealib/posts/flag")
    public boolean addFlag(@RequestParam("flag") boolean flag) {
        Tea f = new Tea();
        f.setFlag(flag);
        repository.save(f);
        return false;
    }

    //TODO: deze method afmaken
    @PutMapping(value = "/tealib/{id}")
    public ResponseEntity<Tea> update(@PathVariable("id") long id, @RequestBody Tea tea) {
        return repository.findById(id).map(record -> {
            record.setDate(tea.getDate());
            record.setTeaName(tea.getTeaName());
            record.setTeaHouse(tea.getTeaHouse());
            record.setTeaColor(tea.getTeaColor());
            record.setProcessingMethod(tea.getProcessingMethod());
            record.setTastingMethod(tea.getTastingMethod());
            record.setLeaveType(tea.getLeaveType());
            record.setUserNotes(tea.getUserNotes());
            record.setFlag(tea.isFlag());
            Tea updated = repository.save(record);
            return ResponseEntity.ok().body(updated);
        }).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("tealib/delete/{id}")
    public String deleteTea(@PathVariable("id") long id, Model model) {
        Tea tea = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid tea Id:" + id));
        repository.delete(tea);
        model.addAttribute("tea", repository.findAll());
        return "redirect:/library";
    }
}
