
document.getElementById('loginButton').addEventListener('click', function() {
    const authFormContainer = document.getElementById('authorization-form-container');
    const regFormContainer = document.getElementById('registration-form-container');
    const overlay = document.getElementById('overlay');
    
    overlay.style.display = 'block';
    authFormContainer.style.display = 'block';
    regFormContainer.style.display = 'none'; 
});

document.getElementById('regTab').addEventListener('click', function() {
    const authFormContainer = document.getElementById('authorization-form-container');
    const regFormContainer = document.getElementById('registration-form-container');

    authFormContainer.style.display = 'none'; 
    regFormContainer.style.display = 'block'; 
});


document.getElementById('authTab').addEventListener('click', function() {
    const authFormContainer = document.getElementById('authorization-form-container');
    const regFormContainer = document.getElementById('registration-form-container');

    authFormContainer.style.display = 'block';
    regFormContainer.style.display = 'none'; 
});


document.querySelectorAll('.cancel-icon').forEach(function(closeIcon) {
    closeIcon.addEventListener('click', function() {
        const overlay = document.getElementById('overlay');
        const authFormContainer = document.getElementById('authorization-form-container');
        const regFormContainer = document.getElementById('registration-form-container');

        overlay.style.display = 'none';
        authFormContainer.style.display = 'none';
        regFormContainer.style.display = 'none';
    });
});
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let isValid = true;

    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';

    if (!validateEmail(email)) {
        console.log('Password validation failed'); 
        document.getElementById('email-error').textContent = 'გთხოვთ შეიყვანოთ სწორი მეილი.';
        isValid = false;
    }

    if (!validatePassword(password)) {
        document.getElementById('password-error').textContent = 'პაროლი არ არის ვაილური.';
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'პაროლები არ ემთხვევა.';
        isValid = false;
    }

    if (isValid) {
        alert('რეგისტრაცია წარმატებით დასრულდა!');
    }
});

function validateEmail(email) {
    email = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    password = password.trim();
    const passwordPattern = /^(?=.*[A-Z]).{8,}$/;
    return passwordPattern.test(password);
}
