package com.hms.controller;

import com.hms.model.Patient;
import com.hms.service.PatientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "*")
public class PatientController {

    private final PatientService service;

    public PatientController(PatientService service) {
        this.service = service;
    }

    @PostMapping
    public Patient register(@RequestBody Patient patient) {
        return service.save(patient);
    }

    @GetMapping
    public List<Patient> getAll() {
        return service.getAll();
    }
}
