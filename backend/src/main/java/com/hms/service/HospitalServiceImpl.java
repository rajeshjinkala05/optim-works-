package com.hms.service;

import com.hms.model.Hospital;
import com.hms.repository.HospitalRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HospitalServiceImpl implements HospitalService {

    private final HospitalRepository repository;

    public HospitalServiceImpl(HospitalRepository repository) {
        this.repository = repository;
    }

    @Override
    public Hospital save(Hospital hospital) {
        return repository.save(hospital);
    }

    @Override
    public List<Hospital> getAll() {
        return repository.findAll();
    }
}
