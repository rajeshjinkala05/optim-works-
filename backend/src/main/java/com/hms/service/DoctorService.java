package com.hms.service;

import com.hms.model.Doctor;

import java.util.List;

public interface DoctorService {
    Doctor save(Doctor doctor);
    List<Doctor> getAll();
    List<Doctor> getByHospitalId(Long hospitalId);
}
