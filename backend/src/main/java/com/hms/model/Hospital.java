package com.hms.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Hospital {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String location;

    // Relationships will be added later
    // private List<Department> departments;

    public Hospital() {}

    public Hospital(String name, String location) {
        this.name = name;
        this.location = location;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
