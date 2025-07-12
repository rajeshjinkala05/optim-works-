document.addEventListener('DOMContentLoaded', () => {
  const patientForm = document.getElementById('patientForm');
  const patientList = document.getElementById('patientList');

  if (patientForm && patientList) {
    patientForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('patientName');
      const ageInput = document.getElementById('patientAge');
      const genderInput = document.getElementById('patientGender');
      const doctorIdInput = document.getElementById('doctorId');

      if (!nameInput || !ageInput || !genderInput || !doctorIdInput) {
        alert("One or more patient form fields are missing in HTML.");
        return;
      }

      const patient = {
        name: nameInput.value,
        age: ageInput.value,
        gender: genderInput.value,
        doctorId: doctorIdInput.value
      };

      const response = await fetch('http://localhost:8080/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patient)
      });

      if (response.ok) {
        alert('Patient added successfully!');
        patientForm.reset();
        loadPatients();
      } else {
        alert('Failed to add patient.');
      }
    });

    async function loadPatients() {
      try {
        const res = await fetch('http://localhost:8080/api/patients');
        const patients = await res.json();
        patientList.innerHTML = '';
        patients.forEach(p => {
          const li = document.createElement('li');
          li.textContent = `${p.name}, Age: ${p.age}, Gender: ${p.gender}, Doctor ID: ${p.doctorId}`;
          patientList.appendChild(li);
        });
      } catch (error) {
        console.error("Failed to load patients:", error);
      }
    }

    loadPatients();
  }
});
