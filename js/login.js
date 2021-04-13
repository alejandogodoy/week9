var inputs = document.querySelector('form');
var validationMessage = document.getElementById('validation-container');
var email = inputs ["email"];
var password = inputs ["password"];

// INPUTS VALIDATION

function inputExist () {
    if(email === undefined ){
        validationMessage.innerHTML += '<li>Email input does not exist </li>'
    }
    if(password === undefined ){
        validationMessage.innerHTML += '<li>Password input does not exist </li>'
    }
}

// REQUIRED INPUT

function inputRequired () {
    if (email.hasAttribute('required') && password.hasAttribute('required')) {
        return true;
    }
    else {
        validationMessage.innerHTML += '<li>Missing \'required\' attribute</li>';
        return false;
    }
}

// LABEL VALIDATION

function labelValidation() {
var labels = document.querySelectorAll('label');
var emailLabel = labels [0].getAttribute('for');
var passwordLabel = labels [1].getAttribute('for');
    if (emailLabel == 'email' && passwordLabel == 'password') {
        return true;
    }
    else {
        validationMessage.innerHTML += '<li>Missing label</li>';
        return false;
    }
}

// ANCHOR VALIDATION

function anchorValidation(){
var anchorHref = document.getElementById('anchor').getAttribute('href')
    if(anchorHref == './register.html'){
        return true;
    }
    else {
        validationMessage.innerHTML += '<li>Redirect anchor \'href\' wrong</li>';
        return false;
    }
}

// BUTTON

function btnContent (){
var logBtn = document.getElementById('login-btn').getAttribute('type');
var resetBtn = document.getElementById('reset-btn').getAttribute('type');
    if(logBtn == 'submit' && resetBtn == 'reset'){
        return true;
    }
    else {
        validationMessage.innerHTML += '<li>Wrong buttons value</li>'
        return false;
    }
}

// VALIDATE ALL

function validateAll () {
    if(inputRequired() && labelValidation() && btnContent() && !inputExist()){
        validationMessage.innerHTML = 'Validations results: passed!' + inputWritten;
        validationMessage.style.color = '#4CAF50';
    }
    else {
        validationMessage.innerHTML = 'There are missing inputs: ';
        validationMessage.style.color = '#D32F2F';
    }
}

// LOGIN BUTTON

document.getElementById('login-btn').onclick = function (e) {
    showInputs();
    validateAll();
    apiRequest();
    e.preventDefault()};

// RESET BUTTON

document.getElementById('reset-btn').onclick = function () {
    window.location.reload();
};
inputExist();
inputRequired();
labelValidation();
anchorValidation();
btnContent();