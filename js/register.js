var inputs = document.querySelector("form");
var errInputs;
var fullName = inputs["fullName"];
var email = inputs["email"];
var password = inputs["password"];
var confirmPassword = inputs["confirmPassword"];
var validationMessage = document.getElementById("validation-container");

// NAME

function validateName() {
  var nameRegex = /^[a-zA-Z\s]*$/;
  if (fullName.value != "" && fullName.value.match(nameRegex)) {
    return true;
  } else {
    return false;
  }
}

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

// REPEAT PASSWORD

function validateRepeatPassword() {
  if (confirmPassword.value != "" && confirmPassword.value == password.value) {
    return true;
  } else {
    return false;
  }
}

// FORM VALIDATIONS

function validateForms() {
  if (
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    validateRepeatPassword()
  ) {
    return true;
  } else {
    errInputs = "";
    if (!validateName()) {
      errInputs += "<li>Name</li>";
    }
    if (!validateEmail()) {
      errInputs += "<li>Email</li>";
    }
    if (!validatePassword()) {
      errInputs += "<li>Password</li>";
    }
    if (!validateRepeatPassword()) {
      errInputs += "<li>Confirm Password</li>";
    }
    return false;
  }
}

// REQUIRED INPUTS VALIDATIONS

function inputRequired() {
  if (
    fullName.hasAttribute("required") &&
    email.hasAttribute("required") &&
    password.hasAttribute("required") &&
    confirmPassword.hasAttribute("required")
  ) {
    return true;
  } else {
    validationMessage.innerHTML += "<li>Missing 'required'</li>";
    return false;
  }
}

// LABELS VALIDATIONS

function labelValidation() {
  var labels = document.querySelectorAll("label");
  var nameLabel = labels[0].getAttribute("for");
  var emailLabel = labels[1].getAttribute("for");
  var passwordLabel = labels[2].getAttribute("for");
  var confirmPassLabel = labels[3].getAttribute("for");
  if (
    nameLabel == "fullName" &&
    emailLabel == "email" &&
    passwordLabel == "password" &&
    confirmPassLabel == "confirmPassword"
  ) {
    return true;
  } else {
    validationMessage.innerHTML += "<li>Missing label</li>";
    return false;
  }
}

// ANCHOR

function anchorValidation() {
  var anchorHref = document.getElementById("anchor").getAttribute("href");
  if (anchorHref == "./login.html") {
    return true;
  } else {
    validationMessage.innerHTML +=
      "<li>Redirect anchor 'href' value wrong</li>";
    return false;
  }
}

// BUTTON

function btnContent() {
  var submitBtn = document.getElementById("register-btn").getAttribute("type");
  var resetBtn = document.getElementById("reset-btn").getAttribute("type");
  if (submitBtn == "submit" && resetBtn == "reset") {
    return true;
  } else {
    validationMessage.innerHTML += "<li>Wrong buttons value</li>";
    return false;
  }
}

// VALIDATE ALL

function validateAll() {
  if (validateForms() && inputRequired() && labelValidation() && btnContent()) {
    validationMessage.innerHTML = "Every validation has passed! | Account created";
    validationMessage.style.color = "#4CAF50";
  } else {
    validationMessage.innerHTML = "Some error appears: " + errInputs;
    validationMessage.style.color = "#D32F2F";
  }
}

// SUBMIT BUTTON

document.getElementById("register-btn").onclick = function (e) {
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