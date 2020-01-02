package com.teamflavour.flavourwheels.controller;

import com.teamflavour.flavourwheels.model.User;
import com.teamflavour.flavourwheels.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Controller
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    // https://stackabuse.com/password-encoding-with-spring-security/
// to encode our password
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    //@GetMapping("/")
    //public String root() {
    //    return "coffeewheel";
    //}

    // Geeft loginscherm
    @RequestMapping(value="/login", method=RequestMethod.GET)
    public ModelAndView displayLogin(ModelAndView modelAndView, User user) {
        modelAndView.addObject("user", user);
        modelAndView.setViewName("login");
        return modelAndView;
    }

    //
    @RequestMapping(value="/login", method= RequestMethod.POST)
    public ModelAndView loginUser(ModelAndView modelAndView, User user) {

        User existingUser = userRepository.findByEmailIgnoreCase(user.getEmail());
        if(existingUser != null) {
            // use encoder.matches to compare raw password with encrypted password

            if (encoder.matches(user.getPassword(), existingUser.getPassword())){
                // successfully logged in
                modelAndView.addObject("message", "Successfully logged in!");
                modelAndView.setViewName("successLogin");
            } else {
                // wrong password
                modelAndView.addObject("message", "Incorrect password. Try again.");
                modelAndView.setViewName("login");
            }
        } else {
            modelAndView.addObject("message", "The email provided does not exist!");
            modelAndView.setViewName("login");

        }

        return modelAndView;
    }

    //@GetMapping("/login1")
    //public String login(Model model) {
    //    return "login";
    //}
    //
    // @GetMapping("/user")
    // public String userIndex() {
    //    return "user/index";
    //}
}