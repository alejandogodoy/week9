class LoginPage {
    
// GETTERS

    get emailInput () { return $('#email') }
    get emailValidation () { return $('#msg-email') }
    get passwordInput () { return $('#password') }
    get passwordValidation () { return $('#msg-psw') }
    get loginBtn () { return $('#login-btn') }
    get resetBtn () { return $('#reset-btn') }
    get validationContainer () { return $('#validation-container') }
    get registerLink () { return $('#anchor') }
    get labelEmail () { return $$('label')[0] }
    get labelPassword () { return $$('label')[1] }

// SETTERS

    setEmail (email) {
        this.emailInput.setValue(email);
        browser.keys('Tab');
    }

    setPassword (password) {
        this.passwordInput.setValue(password);
        browser.keys('Tab');
    }

// METHODS

    login (email, password) {
        this.setEmail(email);
        this.setPassword(password);
        this.loginBtn.click();
    }

    open () {
        return browser.url('https://alejandogodoy.github.io/week9/login.html');
    }
}

module.exports = new LoginPage();