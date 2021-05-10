class RegisterPage {
    
  // GETTERS

  get fullNameInput () { return $('#fullName') } 
  get nameValidation () { return $('#errormsg-name') }
  get emailInput () { return $('#email') }
  get emailValidation () { return $('#errormsg-email') }
  get passwordInput () { return $('#password') }
  get passwordValidation () { return $('#errormsg-psw') }
  get confirmPassInput () { return $('#confirmPassword') }
  get confirmPassValidation () { return $('#errormsg-repsw')}
  get registerBtn () { return $('#register-btn') }
  get resetBtn () { return $('#reset-btn') }
  get validationContainer () { return $('#validation-container') }
  get loginLink () { return $('#anchor') }
  get labelFullName () { return $$('label')[0] }
  get labelEmail () { return $$('label')[1] }
  get labelPassword () { return $$('label')[2] }
  get labelConfirmPass () { return $$('label')[3] }


  // SETTERS

  setFullName (fullName) {
      this.fullNameInput.setValue(fullName);
      browser.keys('Tab');
  }

  setEmail (email) {
      this.emailInput.setValue(email);
      browser.keys('Tab');
  }

  setPassword (password) {
      this.passwordInput.setValue(password);
      browser.keys('Tab');
  }

  setConfirmPass (confirmPass) {
      this.confirmPassInput.setValue(confirmPass);
      browser.keys('Tab');
  }

  // METHODS

  register (fullName, email, password, confirmPass) {
      this.setFullName(fullName);
      this.setEmail(email);
      this.setPassword(password);
      this.setConfirmPass(confirmPass);
      this.registerBtn.click();
  }

  open () {
      return browser.url('https://alejandogodoy.github.io/week9/register.html');
  }
}

module.exports = new RegisterPage();