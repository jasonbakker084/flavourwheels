package com.teamflavour.flavourwheels.service;

import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class EmailSender {
    public static void main(String[] args) {
        String recipient = "recipient@gmail.com";
        String sender = "coffeeflavourwheel@gmail.com";
        String host = "https://coffeeflavourwheel.herokuapp.com";

        Properties properties = System.getProperties();
        properties.setProperty("mail.smtp.host", host);
        properties.put("mail.smtp.ssl.trust", "smtp.gmail.com");

        Session session = Session.getDefaultInstance(properties);

        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(sender));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(recipient));
//            message.addRecipients(Message.RecipientType.TO, new Address[...]); // email to multiple recipients
            message.setSubject("Hello World!");
            message.setText("And hello from the body of the message!");

            Transport.send(message);

        } catch (AddressException e) {
            e.printStackTrace();
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}