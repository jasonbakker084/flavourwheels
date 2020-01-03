package com.teamflavour.flavourwheels.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "flavors")
public class FlavorTea {

    @Id
    private int ID;           // nummer
    @Column(name = "parentID")
    private int parentID;     // nummer van de flavor waar hij onder valt
    @Column(name = "flavorname")
    protected String name;      // De naam zoals in het wiel beschreven
    @Column(name = "color")
    protected String color;     // kleurcode

    @Column(name = "ring")
    protected int ring;         // nummer van de ring, beginnend bij 1


    //ArrayList<FlavorTea> children; // lijst met alle flavors die onder hem vallen.

    public FlavorTea(String name, String color, int ID, int parentID) {
        super();
        this.name = name;
        this.color = color;
        this.ID = ID;
        this.parentID = parentID;
        //this.children = new ArrayList<>();
        this.ring = 0;

    }

    public FlavorTea() {
        super();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    int getParentID() {
        return parentID;
    }

    public void setParentID(Integer parent) {
        this.parentID = parent;
    }

    public int getRing() {
        return ring;
    }

    public void setRing(int ring) {
        this.ring = ring;
    }
}