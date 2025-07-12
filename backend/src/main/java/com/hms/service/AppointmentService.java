package com.hms.service;

import com.hms.model.Appointment;

import java.util.List;

public interface AppointmentService {
    Appointment save(Appointment appointment);
    List<Appointment> getAll();
    List<Appointment> getByPatientId(Long patientId);
    List<Appointment> getByDoctorId(Long doctorId);
}
