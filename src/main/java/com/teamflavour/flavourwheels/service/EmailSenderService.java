package com.teamflavour.flavourwheels.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service("emailSenderService")
public class EmailSenderService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    public EmailSenderService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Async
    public void sendEmail(SimpleMailMessage email) {
        javaMailSender.send(email);
    }

//    @Bean
//    public JavaMailSender javaMailService() {
//        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
//
//        if (this.auth) {
//            javaMailSender.setUsername(this.username);
//            javaMailSender.setPassword(this.password);
//        }
//
//        Properties properties = new Properties();
//        properties.setProperty("mail.transport.protocol", this.protocol);
//        properties.setProperty("mail.smtp.auth", Boolean.toString(this.auth));
//        properties.setProperty("mail.smtp.starttls.enable", Boolean.toString(this.starttls));
//        properties.setProperty("mail.debug", Boolean.toString(this.debug));
//        properties.setProperty("mail.smtp.host", this.host);
//        properties.setProperty("mail.smtp.port", Integer.toString(this.port));
//        properties.setProperty("mail.smtp.ssl.trust", this.trust);
//        javaMailSender.setJavaMailProperties(properties);
//
//        return javaMailSender;
//    }


}