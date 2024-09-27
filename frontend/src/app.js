document.getElementById('consultationForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        timezone: document.getElementById('timezone').value,
        petName: document.getElementById('petName').value,
        petType: document.getElementById('petType').value,
        petAge: document.getElementById('petAge').value
    };

    try {
        const response = await fetch('http://localhost:5000/api/consultation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (result.success) {
            document.getElementById('consultationForm').style.display = 'none';
            document.getElementById('thankYouMessage').style.display = 'block';
        } else {
            alert('Something went wrong. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    }
});
