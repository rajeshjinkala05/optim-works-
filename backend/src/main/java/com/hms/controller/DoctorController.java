package com.hms.controller;

import com.hms.model.Doctor;
import com.hms.service.DoctorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "*")
public class DoctorController {

    private final DoctorService service;

    public DoctorController(DoctorService service) {
        this.service = service;
    }

    @PostMapping
    public Doctor create(@RequestBody Doctor doctor) {
        return service.save(doctor);
    }

    @GetMapping
    public List<Doctor> getAll() {
        return service.getAll();
    }

    @GetMapping("/hospital/{hospitalId}")
    public List<Doctor> getByHospital(@PathVariable Long hospitalId) {
        return service.getByHospitalId(hospitalId);
    }
}
