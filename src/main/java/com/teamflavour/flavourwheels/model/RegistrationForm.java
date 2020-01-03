package com.teamflavour.flavourwheels.model;

import org.springframework.web.multipart.MultipartFile;

public class RegistrationForm {

    private String name;
    private String email;
    private MultipartFile[] albums;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public MultipartFile[] getAlbums() {
        return albums;
    }

    public void setAlbums(MultipartFile[] albums) {
        this.albums = albums;
    }

}