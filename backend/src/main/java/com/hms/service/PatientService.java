package com.hms.service;

import com.hms.model.Patient;
import java.util.List;

public interface PatientService {
    Patient save(Patient patient);
    List<Patient> getAll();
}
