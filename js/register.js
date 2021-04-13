var inputs = document.querySelector('form');
var fullName = inputs ["fullName"];
var email = inputs ["email"];
var password = inputs ["password"];
var confirmPassword = inputs ["confirmPassword"];
var validationMessage = document.getElementById('validation-container');

// INPUTS VALIDATION

function inputExist () {
    if(fullName === undefined ){
        validationMessage.innerHTML += '<li>Full name input does not exist </li>'
    }
    if(email === undefined ){
        validationMessage.innerHTML += '<li>Email input does not exist </li>'
    }
    if(password === undefined ){
        validationMessage.innerHTML += '<li>Password input does not exist </li>'
    }
    if(confirmPassword === undefined ){
        validationMessage.innerHTML += '<li>Confirm password input does not exist </li>'
    }
}
// INPUT VALIDATION

function inputRequired () {
    if (fullName.hasAttribute('required') && email.hasAttribute('required') && password.hasAttribute('required') && confirmPassword.hasAttribute('required')) {
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
var nameLabel = labels [0].getAttribute('for');
var emailLabel = labels [1].getAttribute('for');
var passwordLabel = labels [2].getAttribute('for');
var confirmPassLabel = labels [3].getAttribute('for');
    if (nameLabel == 'fullName' && emailLabel == 'email' && passwordLabel == 'password' && confirmPassLabel == 'confirmPassword') {
        return true;
    }
    else{
        validationMessage.innerHTML += '<li>Missing label</li>';
        return false;
    }
}
// ANCHOR VALIDATION

function anchorValidation(){
var anchorHref = document.getElementById('anchor').getAttribute('href')
    if(anchorHref == './login.html'){
        return true;
    }
    else {
        validationMessage.innerHTML += '<li>Redirect anchor \'href\' wrong</li>';
        return false;
    }
}
// BUTTON VALIDATION

function btnContent (){
var submitBtn = document.getElementById('register-btn').getAttribute('type');
var resetBtn = document.getElementById('reset-btn').getAttribute('type');
    if(submitBtn == 'submit' && resetBtn == 'reset'){
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
// SUBMIT BUTTON

document.getElementById('register-btn').onclick = function (e) {
  e.preventDefault()
    showInputs();
    validateAll();
    apiRequest();
   };

// RESET BUTTON

document.getElementById('reset-btn').onclick = function () {
    window.location.reload();
};
inputExist();
inputRequired()
labelValidation();
anchorValidation();
btnContent();