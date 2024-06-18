const form = document.getElementById('userForm');
const userDetails = document.getElementById('userDetails');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;

    if (name === '' || email === '' || phone === '' || age === '' || password === '') {
        document.getElementById('form-message').innerHTML = 'Please fill in all the fields';
        return;
    }

    if (age < 1 || age > 100) {
        document.getElementById('form-message').innerHTML = 'Age should be between 1 and 100';
        return;
    }

    userDetails.innerHTML = `
        <h2>User Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Age:</strong> ${age}</p>
    `;
    
    userDetails.style.display = 'block';
    form.style.display = 'none';
});