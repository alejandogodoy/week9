var emailMessage = document.getElementById('msg-email');
var passwordMessage = document.getElementById('msg-psw');
var inputWritten;

// EMAIL VALIDATION

function validateEmail() {
    var mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]*$/;
    if(email.value.match(mailRegex))
    {
        return true;
    }
    else {
        return false;
    }
}
email.onblur = function() {
    if(validateEmail()){
        emailMessage.style.display= "flex";
        emailMessage.innerHTML = 'Pass!';
        emailMessage.style.color = '#08bd0f';
        email.style.backgroundColor = '#d1d1d1';
    }
    else {
        emailMessage.style.display= "flex";
        emailMessage.innerHTML = 'Please, enter a valid email!';
        emailMessage.style.color = '#D32F2F';
        email.style.backgroundColor = '#d1d1d1';
    }
}
email.onfocus = function () {
    emailMessage.style.display= "none";
    email.style.backgroundColor = '#E9F9A6';
}

// PASSWORD VALIDATION

function validatePassword () {
    var passwRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(password.value.match(passwRegex) && password.value.length >= 8 ) 
    { 
        return true;
    }
    else { 
        return false;
    }
}
password.onblur = function () {
    if(validatePassword()){
        passwordMessage.style.display = "flex";
        passwordMessage.innerHTML = 'Pass!';
        passwordMessage.style.color = '#08bd0f';
        password.style.backgroundColor = '#d1d1d1';
    }
    else {
        passwordMessage.style.display = "flex";
        passwordMessage.innerHTML = 'Password must have 8 characters, one number, one uppercase'
        passwordMessage.style.color = '#D32F2F';
        password.style.backgroundColor = '#d1d1d1';
    }
}
password.onfocus = function () {
    passwordMessage.style.display= "none";
    password.style.backgroundColor = '#E9F9A6';
}

// INPUTS

function showInputs() {
    inputWritten = ' ';
    if(validateEmail()){
        inputWritten += `<li>Email: ${email.value}</li>`
    }
    if(validatePassword()){
        inputWritten += `<li>Password: ${password.value}</li>`
    }
}

// API REQUEST

function apiRequest()
{
    let url = "https://jsonplaceholder.typicode.com/users?email=" + email.value;
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));
}