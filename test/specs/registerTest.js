const RegisterPage = require("../pageobjects/register.page");

describe("Register page Tests", () => {
  beforeAll("Open browser", () => {
    RegisterPage.open();
  });
  describe("Full name input test", () => {
    it("leaving empty email input display error message", () => {
      RegisterPage.setFullName();
      expect(RegisterPage.nameValidation).toHaveText(
        "Must have 8 characters and a space in between"
      );
      browser.pause(2000);
    });
    it("using an undefined name display error message", () => {
      RegisterPage.setFullName(undefined);
      expect(RegisterPage.nameValidation).toHaveText(
        "Must have 8 characters and a space in between"
      );
      browser.pause(2000);
    });
    it("using a name without space between display error message", () => {
      RegisterPage.setFullName("testname");
      expect(RegisterPage.nameValidation).toHaveText(
        "Must have 8 characters and a space in between"
      );
      browser.pause(2000);
    });
    it("using a name with numbers display error message", () => {
      RegisterPage.setFullName("test1 name2");
      expect(RegisterPage.nameValidation).toHaveText(
        "Must have 8 characters and a space in between"
      );
      browser.pause(2000);
    });
    it("using a valid full name display success message", () => {
      RegisterPage.setFullName("Valid Name");
      expect(RegisterPage.nameValidation).toHaveText("Pass!");
      browser.pause(2000);
    });
  });
  describe("Email input Tests", () => {
    it("leaving empty email input should display error message", () => {
      RegisterPage.setEmail();
      expect(RegisterPage.emailValidation).toHaveText("Please enter a valid email!");
      browser.pause(2000);
    });
    it("using an undefined email address display error message", () => {
      RegisterPage.setEmail(undefined);
      expect(RegisterPage.emailValidation).toHaveText("Please enter a valid email!");
      browser.pause(2000);
    });
    it("using an invalid email address display error message", () => {
      RegisterPage.setEmail("invalid@email");
      expect(RegisterPage.emailValidation).toHaveText("Please enter a valid email!");
      browser.pause(2000);
    });
    it("using numbers instead of email address display error message", () => {
      RegisterPage.setEmail(1234567);
      expect(RegisterPage.emailValidation).toHaveText("Please enter a valid email!");
      browser.pause(2000);
    });
    it("using a valid email address display success message", () => {
      RegisterPage.setEmail("valid@email.com");
      expect(RegisterPage.emailValidation).toHaveText("Pass!");
      browser.pause(2000);
    });
  });
  describe("Password input Tests", () => {
    it("leaving empty password input should display error message", () => {
      RegisterPage.setPassword();
      expect(RegisterPage.passwordValidation).toHaveText(
        "Password must have 8 characters, one number, one uppercase"
      );
      browser.pause(2000);
    });
    it("using lowercase letters only display error message", () => {
      RegisterPage.setPassword("password");
      expect(RegisterPage.passwordValidation).toHaveText(
        "Password must have 8 characters, one number, one uppercase"
      );
      browser.pause(2000);
    });
    it("using numbers only display error message", () => {
      RegisterPage.setPassword(1234567);
      expect(RegisterPage.passwordValidation).toHaveText(
        "Password must have 8 characters, one number, one uppercase"
      );
      browser.pause(2000);
    });
    it("using capital letters only display error message", () => {
      RegisterPage.setPassword("PASSWORD");
      expect(RegisterPage.passwordValidation).toHaveText(
        "Password must have 8 characters, one number, one uppercase"
      );
      browser.pause(2000);
    });
    it("using a password with less than 8 characters", () => {
      RegisterPage.setPassword("Pass123");
      expect(RegisterPage.passwordValidation).toHaveText(
        "Password must have 8 characters, one number, one uppercase"
      );
      browser.pause(2000);
    });
    it("using a valid password display correct message", () => {
      RegisterPage.setPassword("Password123");
      expect(RegisterPage.passwordValidation).toHaveText("Pass!");
      browser.pause(2000);
    });
  });
  describe("Confirm Password input Tests", () => {
    it("using an empty confirm password should display error message", () => {
      RegisterPage.setConfirmPass();
      expect(RegisterPage.confirmPassValidation).toHaveText(
        "Password do not match"
      );
      browser.pause(2000);
    });
    it("using a different password display error message", () => {
      RegisterPage.setConfirmPass("Password000");
      expect(RegisterPage.confirmPassValidation).toHaveText(
        "Password do not match"
      );
      browser.pause(2000);
    });
    it("using a correct password display success message", () => {
      RegisterPage.setConfirmPass("Password123");
      expect(RegisterPage.confirmPassValidation).toHaveText("Pass!");
      browser.pause(2000);
    });
  });
  describe("Buttons functionality tests", () => {
    it("register button should show input data if it is correct", () => {
      RegisterPage.register(
        "Valid Name",
        "valid@email.com",
        "Password123",
        "Password123"
      );
      RegisterPage.validationContainer.waitForDisplayed();
      expect(RegisterPage.validationContainer).toHaveTextContaining([
        "Validations results: every validation has passed!",
        "Full name: Valid Name",
        "Email: valid@email.com",
        "Password: Password123",
        "Confirm Password: Password123",
      ]);
      browser.pause(2000);
    });
    it("reset button should reload website", () => {
      RegisterPage.resetBtn.click();
      expect(browser.refresh());
      expect(browser).toHaveUrl(
        "https://alejandogodoy.github.io/week9/register.html"
      );
      expect(browser).toHaveTitle("Register");
      browser.pause(2000);
    });
  });
  describe("Login anchor redirection Tests", () => {
    it("login anchor should redirect", () => {
      RegisterPage.loginLink.click();
      expect(browser).toHaveUrl(
        "https://alejandogodoy.github.io/week9/login.html"
      );
      expect(browser).toHaveTitle("Login");
      browser.pause(2000);
    });
  });
  describe("verify if inputs exist", () => {
    it("verify if labels are correct", () => {
      RegisterPage.open();
      expect(RegisterPage.labelFullName).toHaveText("Full Name");
      expect(RegisterPage.labelEmail).toHaveText("Email");
      expect(RegisterPage.labelPassword).toHaveText("Password");
      expect(RegisterPage.labelConfirmPass).toHaveText("Confirm Password");
      browser.pause(2000);
    });
    it("verify if inputs exist", () => {
      expect(RegisterPage.fullNameInput).toExist();
      expect(RegisterPage.emailInput).toExist();
      expect(RegisterPage.passwordInput).toExist();
      expect(RegisterPage.confirmPassInput).toExist();
      browser.pause(2000);
    });
    it("verify if redirection text is correct", () => {
      expect(RegisterPage.loginLink).toHaveText(
        "Already have an account? Sign in"
      );
      browser.pause(2000);
    });
  });
});
