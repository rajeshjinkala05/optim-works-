package com.hms.controller;

import com.hms.model.Hospital;
import com.hms.service.HospitalService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hospitals")
@CrossOrigin(origins = "*")
public class HospitalController {

    private final HospitalService service;

    public HospitalController(HospitalService service) {
        this.service = service;
    }

    @PostMapping
    public Hospital register(@RequestBody Hospital hospital) {
        return service.save(hospital);
    }

    @GetMapping
    public List<Hospital> getAll() {
        return service.getAll();
    }
}
