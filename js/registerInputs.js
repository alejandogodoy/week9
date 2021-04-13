var nameMessage = document.getElementById('errormsg-name');
var emailMessage = document.getElementById('errormsg-email');
var pswMessage = document.getElementById('errormsg-psw');
var rePwsMessage = document.getElementById('errormsg-repsw');
var inputsValidate;

// NAME VALIDATION

function validateName() {
    var nameRegex = /^[a-zA-Z]+[ ]+[a-zA-Z\s]+$/; 
    if (fullName.value.match(nameRegex) && fullName.value.length >= 6) {
        return true;
    }
    else {
        return false;
    }
}
fullName.onblur = function() {
    if(validateName()){
        nameMessage.style.display= "flex";
        nameMessage.innerHTML = 'Pass!';
        nameMessage.style.color = '#08bd0f';
        fullName.style.backgroundColor = '#d1d1d1';
    }
    else {
        nameMessage.style.display= "flex";
        nameMessage.innerHTML = 'Must have 6 characters and a space in between';
        nameMessage.style.color = '#ff0000';
        fullName.style.backgroundColor = '#d1d1d1';
    }
}
fullName.onfocus = function () {
    nameMessage.style.display= "none";
    fullName.style.backgroundColor = '#E9F9A6';
}

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
        emailMessage.innerHTML = 'Please enter a valid email!';
        emailMessage.style.color = '#ff0000';
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
password.onblur = function() {
    if(validatePassword()){
        pswMessage.style.display= "flex";
        pswMessage.innerHTML = 'Pass!';
        pswMessage.style.color = '#08bd0f';
        password.style.backgroundColor = '#d1d1d1';
    }
    else {
        pswMessage.style.display= "flex";
        pswMessage.innerHTML = '"Password must have 8 characters, one number, one uppercase"';
        pswMessage.style.color = '#ff0000';
        password.style.backgroundColor = '#d1d1d1';
    }
}
password.onfocus = function () {
    pswMessage.style.display= "none";
    password.style.backgroundColor = '#E9F9A6';
}

// REPEAT PASSWORD VALIDATION

function validateConfirmPassword () {
    if (confirmPassword.value != "" && confirmPassword.value == password.value) {
        return true;
    }
    else {
        return false;
    }
}
confirmPassword.onblur = function() {
    if(validateConfirmPassword ()){
        rePwsMessage.style.display= "flex";
        rePwsMessage.innerHTML = 'Pass!';
        rePwsMessage.style.color = '#08bd0f';
        confirmPassword.style.backgroundColor = '#d1d1d1';
    }
    else {
        rePwsMessage.style.display= "flex";
        rePwsMessage.innerHTML = 'Password do not match';
        rePwsMessage.style.color = '#ff0000';
        confirmPassword.style.backgroundColor = '#d1d1d1';
    }
}
confirmPassword.onfocus = function () {
    rePwsMessage.style.display= "none";
    confirmPassword.style.backgroundColor = '#E9F9A6';
}

// SHOW INPUTS

function showInputs() {
    inputsValidate = ' ';
    if(validateName()){
        inputsValidate += `<li>Full Name: ${fullName.value}</li>`
    }
    if(validateEmail()){
        inputsValidate += `<li>Email: ${email.value}</li>`
    }
    if(validatePassword()){
        inputsValidate += `<li>Password: ${password.value}</li>`
    }
    if(validateConfirmPassword()){
        inputsValidate += `<li>Confirm Password: ${confirmPassword.value}</li>`
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
