class CadastroPage {
    get nameInput() { return $('~name'); }
    get emailInput() { return $('~email'); }
    get passwordInput() { return $('~password'); }
    get registerButton() { return $('~register'); }
    get successMessage() { return $('~success-message'); }
    get errorMessage() { return $('~error-message'); }

    async register(name, email, password) {
        await this.nameInput.setValue(name);
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.registerButton.click();
    }
}

module.exports = new CadastroPage();