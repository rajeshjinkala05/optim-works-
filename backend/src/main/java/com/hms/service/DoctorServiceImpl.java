package com.hms.service;

import com.hms.model.Doctor;
import com.hms.repository.DoctorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService {

    private final DoctorRepository repository;

    public DoctorServiceImpl(DoctorRepository repository) {
        this.repository = repository;
    }

    @Override
    public Doctor save(Doctor doctor) {
        return repository.save(doctor);
    }

    @Override
    public List<Doctor> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Doctor> getByHospitalId(Long hospitalId) {
        return repository.findByHospitalId(hospitalId);
    }
}
