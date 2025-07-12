document.addEventListener('DOMContentLoaded', () => {
  const hospitalForm = document.getElementById('hospitalForm');
  const hospitalList = document.getElementById('hospitalList');

  hospitalForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const hospital = {
      name: document.getElementById('hospitalName').value,
      location: document.getElementById('hospitalLocation').value
    };

    const response = await fetch('http://localhost:8080/api/hospitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(hospital)
    });

    if (response.ok) {
      alert('Hospital added successfully!');
      hospitalForm.reset();
      loadHospitals();
    } else {
      alert('Failed to add hospital.');
    }
  });

  async function loadHospitals() {
    const res = await fetch('http://localhost:8080/api/hospitals');
    const hospitals = await res.json();
    hospitalList.innerHTML = '';
    hospitals.forEach(hospital => {
      const li = document.createElement('li');
      li.textContent = `${hospital.name} - ${hospital.location}`;
      hospitalList.appendChild(li);
    });
  }

  loadHospitals();
});
