const LoginPage = require("../pageobjects/login.page");

describe("Login Page Tests", () => {
  beforeAll("Open browser", () => {
    LoginPage.open();
  });
  describe("Email input test", () => {
    it("leaving empty email should display error message", () => {
      LoginPage.setEmail();
      expect(LoginPage.emailValidation).toHaveText("Please, enter a valid email!");
      browser.pause(2000);
    });
    it("using an undefined email address display error message", () => {
      LoginPage.setEmail(undefined);
      expect(LoginPage.emailValidation).toHaveText("Please, enter a valid email!");
      browser.pause(2000);
    });
    it("using an invalid email address display error message", () => {
      LoginPage.setEmail("invalid@email");
      expect(LoginPage.emailValidation).toHaveText("Please, enter a valid email!");
      browser.pause(2000);
    });
    it("using numbers instead of email address display error message", () => {
      LoginPage.setEmail(123456789);
      expect(LoginPage.emailValidation).toHaveText("Please, enter a valid email!");
      browser.pause(2000);
    });
    it("using a valid email address to display pass message", () => {
      LoginPage.setEmail("valid@email.com");
      expect(LoginPage.emailValidation).toHaveText("Pass!");
      browser.pause(2000);
    });
  });

  describe("Password input Tests", () => {
    it("leaving empty password should display error message", () => {
      LoginPage.setPassword();
      expect(LoginPage.passwordValidation).toHaveText(
        "Password must have 8 characters, one number, one uppercase"
      );
      browser.pause(2000);
    });
    it("using lowercase letters only display error message", () => {
      LoginPage.setPassword("password");
      expect(LoginPage.passwordValidation).toHaveText(
        "Password must have 8 characters, one number, one uppercase"
      );
      browser.pause(2000);
    });
    it("using numbers only display error message", () => {
      LoginPage.setPassword(123456789);
      expect(LoginPage.passwordValidation).toHaveText(
        "Password must have 8 characters, one number, one uppercase"
      );
      browser.pause(2000);
    });
    it("using capital letters only display error message", () => {
      LoginPage.setPassword("PASSWORD");
      expect(LoginPage.passwordValidation).toHaveText(
        "Password must have 8 characters, one number, one uppercase"
      );
      browser.pause(2000);
    });
    it("using a password with less than 8 characters", () => {
      LoginPage.setPassword("Psw1234");
      expect(LoginPage.passwordValidation).toHaveText(
        "Password must have 8 characters, one number, one uppercase"
      );
      browser.pause(2000);
    });
    it("using a valid password display pass message", () => {
      LoginPage.setPassword("Password123");
      expect(LoginPage.passwordValidation).toHaveText("Pass!");
      browser.pause(2000);
    });
  });

  describe("buttons functionality Tests", () => {
    it("login button should show input data if it is correct", () => {
      LoginPage.login("valid@email.com", "Password123");
      LoginPage.validationContainer.waitForDisplayed();
      expect(LoginPage.validationContainer).toHaveTextContaining([
        "Validations results: All correct, Pass!!",
        "Email: valid@email.com",
        "Password: Password123",
      ]);
      browser.pause(2000);
    });
    it("reset button should reload website", () => {
      LoginPage.resetBtn.click();
      expect(browser.refresh());
      expect(browser).toHaveUrl(
        "https://alejandogodoy.github.io/week9/login.html"
      );
      expect(browser).toHaveTitle("Login");
      browser.pause(2000);
    });
  });

  describe("Register anchor redirection Tests", () => {
    it("register anchor redirect", () => {
      LoginPage.registerLink.click();
      expect(browser).toHaveUrl(
        "https://alejandogodoy.github.io/week9/register.html"
      );
      expect(browser).toHaveTitle("Register");
      browser.pause(2000);
    });
  });

  describe("Verify if inputs exist", () => {
    it("verify if labels are correct", () => {
      LoginPage.open();
      expect(LoginPage.labelEmail).toHaveText("Email");
      expect(LoginPage.labelPassword).toHaveText("Password");
      browser.pause(2000);
    });
    it("verify if inputs exist", () => {
      expect(LoginPage.emailInput).toExist();
      expect(LoginPage.passwordInput).toExist();
      browser.pause(2000);
    });
    it("verify if redirection text is correct", () => {
      expect(LoginPage.registerLink).toHaveText(
        "Don't have an account? Register now!"
      );
      browser.pause(2000);
    });
  });
});
