package com.BatistasNoBrasil.BatistasNoBrasil.Dto;

public class ChurchDto {
    private String name;
    private String address;
    private String city;
    private String state;
    private String zip;
    private String pastor;
    private String description;
    private String email;
    private String phone;
    private String image;
    private String id;
    private String website;

    public ChurchDto (String name,
                      String address,
                      String city,
                      String state,
                      String zip,
                      String pastor,
                      String description,
                      String email,
                      String phone,
                      String image,
                      String id,
                      String website){
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.pastor = pastor;
        this.description = description;
        this.email = email;
        this.phone = phone;
        this.image = image;
        this.id = id;
        this.website = website;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getPastor() {
        return pastor;
    }

    public void setPastor(String pastor) {
        this.pastor = pastor;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }
}
