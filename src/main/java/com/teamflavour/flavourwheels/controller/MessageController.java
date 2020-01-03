package com.teamflavour.flavourwheels.controller;

import com.teamflavour.flavourwheels.model.Message;
import com.teamflavour.flavourwheels.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MessageController {
    @Autowired
    private MessageRepository messageRepository;

    @GetMapping("/home")
    public String home(Model model) {
        model.addAttribute("msgs", messageRepository.findAll());
        return "userhome";
    }

    @PostMapping("/messages")
    public String saveMessage(Message message) {
        messageRepository.save(message);
        return "redirect:/home";
    }
}