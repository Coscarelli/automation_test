class LoginPage {
    get usernameInput() { return $('~username') }
    get passwordInput() { return $('~password') }
    get loginButton() { return $('~loginButton') }
    get errorMessage() { return $('~errorMessage') }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async isErrorVisible() {
        return await this.errorMessage.isDisplayed();
    }
}

module.exports = new LoginPage();
