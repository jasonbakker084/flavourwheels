package com.teamflavour.flavourwheels.controller;

import com.teamflavour.flavourwheels.model.RegistrationForm;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;

@Controller
public class RegistrationController {
    //store uploaded file to this folder
    private static String upload_dir = "/Users/jasonbakker/uploads/";

    @GetMapping("/startregistration")
    public String register() {
        return "registration2";
    }

    @PostMapping("/register")
    public String doRegister(@ModelAttribute RegistrationForm form, ModelMap model, HttpSession session
    ) {
        ArrayList<String> fileNames = null;
        if (form.getAlbums().length > 0) {
            fileNames = new ArrayList<String>();
            for (MultipartFile file : form.getAlbums()) {
                if (file.isEmpty()) {
                    model.put("message", "Please select a file to upload");
                }
                try {
                    file.transferTo(new File(upload_dir + file.getOriginalFilename()));
                    fileNames.add(file.getOriginalFilename());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        model.put("message", "Please select a file to upload");
        model.put("name", form.getName());
        model.put("email", form.getEmail());
        model.put("files", fileNames);
        System.out.println("Email : " + form.getEmail());
        return "success";
    }

    @RequestMapping(value = "/image/{imageName}")
    @ResponseBody
    public byte[] getImage(@PathVariable("imageName") String fileName) throws IOException {
        File file = new File(upload_dir + fileName);
        System.out.println(file.getAbsolutePath());
        return Files.readAllBytes(file.toPath());
    }
}