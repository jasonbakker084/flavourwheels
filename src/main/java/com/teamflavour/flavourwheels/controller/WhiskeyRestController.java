package com.teamflavour.flavourwheels.controller;

import com.teamflavour.flavourwheels.model.Coffee;
import com.teamflavour.flavourwheels.model.Whiskey;
import com.teamflavour.flavourwheels.model.Wine;
import com.teamflavour.flavourwheels.repository.CoffeeRepository;
import com.teamflavour.flavourwheels.repository.WhiskeyRepository;
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
public class WhiskeyRestController {


    private static final Logger logger = LoggerFactory.getLogger(CoffeeController.class);


    @Autowired
    private WhiskeyRepository repository;

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        // Date - dd/MM/yyyy
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
    }

    @GetMapping("/whiskeylib")
    public List<Whiskey> allTastedWhiskey() {
        return repository.findAll();
    }


    @GetMapping(path = {"/whiskeylib/{id}"})
    public ResponseEntity<Whiskey> findById(@PathVariable long id) {
        return repository.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/whiskeylib/count")
    public Long count() {
        return repository.count();
    }

    @PostMapping(value = "/whiskeylib/posts")
    public Whiskey create(@RequestBody Whiskey whiskey) {
        return repository.save(whiskey);
    }


//    @PostMapping("/api/upload/multi/model")
//    public ResponseEntity<Coffee> multiUploadFileModel(@ModelAttribute Coffee model) {
//        try {
//            saveUploadedFile(model.getFile());
//            repository.save(model.getCoffeeName(),model.getRoaster(),model.getRoastColor(), model.getBeanType(), model.getProcessingMethod(), model.getTastingMethod(), model.getUserNotes());; //Save as you want as per requirement
//        } catch (IOException e) {
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
//        return new ResponseEntity("Successfully uploaded!", HttpStatus.OK);
//    }
//
//    private void saveUploadedFile(MultipartFile file) throws IOException {
//        if (!file.isEmpty()) {
//            byte[] bytes = file.getBytes();
//            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
//            Files.write(path, bytes);
//        }
//    }

/*
    @RequestMapping(value = "/uploadFile2", method = RequestMethod.POST)
    public @ResponseBody
    Coffee uploadFileHandler(
            @RequestParam("coffeeName") String coffeeName,
            @RequestParam("roaster") String roaster,
            @RequestParam("roastColor") String roastColor,
            @RequestParam("processingMethod") String processingMethod,
            @RequestParam("tastingMethod") String tastingMethod,
            @RequestParam("beanType") String beanType,
            @RequestParam("userNotes") String userNotes,
            @RequestParam("file") MultipartFile file,
            HttpServletRequest request, HttpServletResponse response) {

        if (!file.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();

                // Creating the directory to store file
                String rootPath = System.getProperty("catalina.home");
                File dir = new File(rootPath + File.separator + "tmpFiles");
                if (!dir.exists())
                    dir.mkdirs();

                // Create the file on server
                File serverFile = new File(dir.getAbsolutePath()
                        + File.separator + coffeeName + roaster + roastColor + processingMethod + tastingMethod + beanType + userNotes);
                BufferedOutputStream stream = new BufferedOutputStream(
                        new FileOutputStream(serverFile));
                stream.write(bytes);
                stream.close();

                logger.info("Server File Location="
                        + serverFile.getAbsolutePath());

                return null;
            } catch (Exception e) {
                return null;
            }
        }
        return null;
    }


    @PostMapping(path = "/home/coffeelib/posts", consumes = { "multipart/form-data" } )
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    public String addNewCoffee (
//                                @RequestParam("date") Date date,
            @RequestParam("file") MultipartFile[] file,
            @RequestParam("coffeeName") String coffeeName,
            @RequestParam("roaster") String roaster,
            @RequestParam("roastColor") String roastColor,
            @RequestParam("processingMethod") String processingMethod,
            @RequestParam("tastingMethod") String tastingMethod,
            @RequestParam("beanType") String beanType,
            @RequestParam("userNotes") String userNotes)
//                                @RequestParam("fileName") String fileName,
//                                @RequestParam("fileType") String fileType)
    {
        Coffee c = new Coffee();
//        c.setDate(date);
//        c.setFile(file);
        c.setCoffeeName(coffeeName);
        c.setRoaster(roaster);
        c.setRoastColor(roastColor);
        c.setProcessingMethod(processingMethod);
        c.setTastingMethod(tastingMethod);
        c.setBeanType(beanType);
        c.setUserNotes(userNotes);
        repository.save(c);
        return "saved";
    }

    @PostMapping(path = "/coffeelib/posts/flag" )
    public boolean addFlag(@RequestParam("flag") boolean flag) {
        Coffee f = new Coffee();
        f.setFlag(flag);
        repository.save(f);
        return false;
    }


    @PutMapping(value = "/coffeelib/{id}")
    public ResponseEntity<Coffee> update(@PathVariable("id") long id, @RequestBody Coffee coffeeLib) {
        return repository.findById(id).map(record -> {
            record.setDate(coffeeLib.getDate());
            record.setCoffeeName(coffeeLib.getCoffeeName());
            record.setRoaster(coffeeLib.getRoaster());
            record.setRoastColor(coffeeLib.getRoastColor());
            record.setProcessingMethod(coffeeLib.getProcessingMethod());
            record.setTastingMethod(coffeeLib.getTastingMethod());
            record.setBeanType(coffeeLib.getBeanType());
            record.setUserNotes(coffeeLib.getUserNotes());
            record.setFlag(coffeeLib.isFlag());
            Coffee updated = repository.save(record);
            return ResponseEntity.ok().body(updated);
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("coffeelib/{id}")
    public void delete(@PathVariable String id) {
        Long tastedCoffeeId = Long.parseLong(id);
        repository.deleteById(tastedCoffeeId);
    }

 */
}
