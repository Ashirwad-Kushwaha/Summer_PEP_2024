const form = document.getElementById('userForm');
const nameDisplay = document.getElementById('nameDisplay');
const emailDisplay = document.getElementById('emailDisplay');
const passwordDisplay = document.getElementById('passwordDisplay');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name === '' || email === '' || password === '') {
        document.getElementById('form-message').innerHTML = 'Please fill in all the fields';
        return;
    }

    nameDisplay.innerHTML = name;
    emailDisplay.innerHTML = email;
    passwordDisplay.innerHTML = password;

    document.getElementById('userDetails').style.display = 'block';

    form.style.display = 'none';
});