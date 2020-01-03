package com.teamflavour.flavourwheels.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "flavorsCoffee")
public class FlavorCoffee {

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


    //ArrayList<FlavorCoffee> children; // lijst met alle flavors die onder hem vallen.

    public FlavorCoffee(String name, String color, int ID, int parentID) {
        super();
        this.name = name;
        this.color = color;
        this.ID = ID;
        this.parentID = parentID;
        //this.children = new ArrayList<>();
        this.ring = 0;

    }

    public FlavorCoffee() {
        super();
    }

    ;

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

//    public int getSize() {
//        int result = 0;
//        for (FlavorCoffee child : children) {
//            result += child.getSize();
//        }
//        if (result == 0) {
//            return 1;
//        }
//        return result;
//    }

//    public ArrayList<FlavorCoffee> getChildren() {
//        return children;
//    }
//
//    public void setChildren(ArrayList<FlavorCoffee> children) {
//        for (FlavorCoffee child : children) {
//            child.setRing(this.ring + 1);
//        }
//        this.children = children;
//    }

//    boolean matchChild(FlavorCoffee lostChild) {
//        if (lostChild.getParentID() == this.ID) {
//            lostChild.setRing(this.ring + 1);
//            this.children.add(lostChild);
//            return true;
//        } else {
//            for (FlavorCoffee child : children) {
//                if (child.matchChild(lostChild)) {
//                    return true;
//                }
//            }
//        }
//        return false;
//    }
//
//    String PrintFamily() {
//        String result = this.toString() + "\n";
//        for (FlavorCoffee child : children) {
//            result += child.PrintFamily("-");
//        }
//        return result;
//    }
//
//    private String PrintFamily(String dash) {
//        String result = dash + this.toString() + "\n";
//        for (FlavorCoffee child : children) {
//            result += child.PrintFamily(dash + "-");
//        }
//        return result;
//    }
//
//    String getJSON(int fromStep) {
//        String result = "{ring:" + ring + ", fromStep:" + fromStep + ", toStep:" + (fromStep + getSize()) + ", color:\""
//                + color + "\", name:\"" + name + "\", id:" + ID + ", parentID:" + parentID + "},\n";
//        for (FlavorCoffee child : children) {
//            result += child.getJSON(fromStep);
//            fromStep += child.getSize();
//        }
//
//        return result;
//    }
//
}