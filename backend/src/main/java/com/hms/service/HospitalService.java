package com.hms.service;

import com.hms.model.Hospital;
import java.util.List;

public interface HospitalService {
    Hospital save(Hospital hospital);
    List<Hospital> getAll();
}
