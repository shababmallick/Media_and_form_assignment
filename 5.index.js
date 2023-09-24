const signInForm = document.getElementById('signInForm');

signInForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    // Add your validation logic here (e.g., check credentials)
  
    if (email === 'email' && password === 'password') {
        alert('Sign in successful!');
        signInForm.reset();
    } else {
        alert('Sign in failed. Please check your email and password.');
    }
});

// Sign Up Form
const signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting initially
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const confPassword = document.getElementById('confPassword').value;
    const age = parseInt(document.getElementById('age').value); // Parse age as an integer
    const gender = document.getElementById('gender').value;

    let isValid = true;

    // First name validation
    if (firstName.length < 3) {
        isValid = false;
        alert("First name must be at least 3 characters long.");
    }

    // Last name validation
    if (lastName.length < 3) {
        isValid = false;
        alert("Last name must be at least 3 characters long.");
    }

    // Age validation
    if (isNaN(age) || age < 0 || age > 150) {
        isValid = false;
        alert("Age must be a number between 0 and 150.");
    }

    if (!isValid) {
        e.preventDefault(); // Prevent the form from submitting if there are validation errors
    }

    // Additional validation
    if (email && password === confPassword && gender ) {
        alert("Sign up successful");
        signUpForm.reset();
    } else {
        alert("Please fill in all required fields and make sure passwords match.");
    }
});