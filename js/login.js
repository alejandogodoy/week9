var inputs = document.querySelector("form");
var errInputs;
var validationMessage = document.getElementById("validation-container");
var email = inputs["email"];
var password = inputs["password"];

// EMAIL

function validateEmail() {
  var mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(mailRegex)) {
    return true;
  } else {
    return false;
  }
}

// PASSWORD

function validatePassword() {
  var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (password.value.match(passRegex) && password.value.length > 6) {
    return true;
  } else {
    return false;
  }
}

// FORM VALIDATION

function validateForms() {
  if (validateEmail() && validatePassword()) {
    return true;
  } else {
    errInputs = "";
    if (!validateEmail()) {
      errInputs += "<li>Email</li>";
    }
    if (!validatePassword()) {
      errInputs += "<li>Password</li>";
    }
    return false;
  }
}

// REQUIRE VALIDATION

function inputRequired() {
  if (email.hasAttribute("required") && password.hasAttribute("required")) {
    return true;
  } else {
    validationMessage.innerHTML += "<li>Missing 'required' attribute</li>";
    return false;
  }
}

// LABEL VALIDATION

function labelValidation() {
  var labels = document.querySelectorAll("label");
  var emailLabel = labels[0].getAttribute("for");
  var passwordLabel = labels[1].getAttribute("for");
  if (emailLabel == "email" && passwordLabel == "password") {
    return true;
  } else {
    validationMessage.innerHTML += "<li>Missing label</li>";
    return false;
  }
}

// ANCHOR VALIDATION

function anchorValidation() {
  var anchorHref = document.getElementById("anchor").getAttribute("href");
  if (anchorHref == "./register.html") {
    return true;
  } else {
    validationMessage.innerHTML += "<li>Redirect anchor 'href' is wrong</li>";
    return false;
  }
}

// BUTTON

function btnContent() {
  var logBtn = document.getElementById("login-btn").getAttribute("type");
  var resetBtn = document.getElementById("reset-btn").getAttribute("type");
  if (logBtn == "submit" && resetBtn == "reset") {
    return true;
  } else {
    validationMessage.innerHTML += "<li>Wrong buttons value</li>";
    return false;
  }
}

//VALIDATE ALL

function validateAll() {
  if (validateForms() && inputRequired() && labelValidation() && btnContent()) {
    validationMessage.innerHTML = "Every validation has passed! | Welcome back";
    validationMessage.style.color = "#36c23c";
  } else {
    validationMessage.innerHTML = "some errors appears: " + errInputs;
    validationMessage.style.color = "#ff0808";
  }
}

// LOGIN BUTTON

document.getElementById("login-btn").onclick = function (e) {
  validateAll();
  e.preventDefault();
};

// RESET BUTTON

document.getElementById("reset-btn").onclick = function () {
  window.location.reload();
};

inputRequired();
labelValidation();
anchorValidation();
btnContent();