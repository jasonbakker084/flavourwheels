package com.teamflavour.flavourwheels.controller;

import com.teamflavour.flavourwheels.model.User;
import com.teamflavour.flavourwheels.repository.UserRepository;
import com.teamflavour.flavourwheels.repository.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping("/admin/home")
public class AdminController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository repository;

    @Autowired
    public AdminController(UserRepository userRepository) {
        this.repository = userRepository;
    }

    @GetMapping("signup")
    public String showSignUpForm(User user) {
        return "add-user";
    }

    @GetMapping("")
    public String showUpdateForm(Model model) {
        model.addAttribute("users", repository.findAll());
        return "adminhome";
    }

//        @PostMapping("add")
//        public String addUser(@Valid User user, BindingResult result, Model model) {
//            if (result.hasErrors()) {
//                return "add-user";
//            }
//
//            repository.save(user);
//            return "redirect:list";
//        }

    @GetMapping("edit/{id}")
    public String showUpdateForm(@PathVariable("id") long id, Model model) {
        User user = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid user Id:" + id));
        model.addAttribute("user", user);
        return "update-user";
    }

    @PostMapping("update/{id}")
    public String updateUser(@PathVariable("id") long id, @Valid User user, BindingResult result,
                             Model model) {
        if (result.hasErrors()) {
            user.setId(id);
            return "update-user";
        }

        repository.save(user);
        model.addAttribute("users", repository.findAll());
        return "adminhome";
    }

    @GetMapping("delete/{id}")
    public String deleteUser(@PathVariable("id") long id, Model model) {
        User user = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid user Id:" + id));
        repository.delete(user);
        model.addAttribute("users", repository.findAll());
        return "adminhome";
    }
}

