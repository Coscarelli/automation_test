class LoginPage {
    get emailInput() { return $('~email'); }
    get passwordInput() { return $('~password'); }
    get loginButton() { return $('~login'); }
    get errorMessage() { return $('~error-message'); }

    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();