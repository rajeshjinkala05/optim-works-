document.addEventListener('DOMContentLoaded', () => {
  const doctorForm = document.getElementById('doctorForm');
  const doctorList = document.getElementById('doctorList');

  if (doctorForm && doctorList) {
    doctorForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const doctor = {
        name: document.getElementById('doctorName').value,
        specialization: document.getElementById('specialization').value,
        hospitalId: document.getElementById('doctorHospitalId').value
      };

      const response = await fetch('http://localhost:8080/api/doctors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(doctor)
      });

      if (response.ok) {
        alert('Doctor added successfully!');
        doctorForm.reset();
        loadDoctors();
      } else {
        alert('Failed to add doctor.');
      }
    });

    async function loadDoctors() {
      const res = await fetch('http://localhost:8080/api/doctors');
      const doctors = await res.json();
      doctorList.innerHTML = '';
      doctors.forEach(doc => {
        const li = document.createElement('li');
        li.textContent = `Dr. ${doc.name} (${doc.specialization}) - Hospital ID: ${doc.hospitalId}`;
        doctorList.appendChild(li);
      });
    }

    loadDoctors();
  }
});
