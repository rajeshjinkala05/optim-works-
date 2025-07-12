document.addEventListener('DOMContentLoaded', () => {
  const appointmentForm = document.getElementById('appointmentForm');
  const appointmentList = document.getElementById('appointmentList');

  if (appointmentForm && appointmentList) {
    appointmentForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const doctorIdInput = document.getElementById('appointmentDoctorId');
      const patientIdInput = document.getElementById('appointmentPatientId');
      const dateInput = document.getElementById('appointmentDate');

      if (!doctorIdInput || !patientIdInput || !dateInput) {
        console.error("One or more appointment input fields are missing");
        return;
      }

      const appointment = {
        doctorId: doctorIdInput.value,
        patientId: patientIdInput.value,
        dateTime: dateInput.value
      };

      try {
        const response = await fetch('http://localhost:8080/api/appointments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(appointment)
        });

        if (response.ok) {
          alert('Appointment booked successfully!');
          appointmentForm.reset();
          loadAppointments();
        } else {
          alert('Failed to book appointment.');
        }
      } catch (error) {
        console.error('Error while booking appointment:', error);
        alert('Error occurred while booking appointment.');
      }
    });

    async function loadAppointments() {
      try {
        const res = await fetch('http://localhost:8080/api/appointments');
        const appointments = await res.json();
        appointmentList.innerHTML = '';
        appointments.forEach(app => {
          const li = document.createElement('li');
          li.textContent = `Appointment - Doctor ID: ${app.doctorId}, Patient ID: ${app.patientId}, Date: ${app.dateTime}`;
          appointmentList.appendChild(li);
        });
      } catch (error) {
        console.error('Error loading appointments:', error);
      }
    }

    loadAppointments();
  }
});
