class ContatoPage {
    get messageInput() { return $('~message'); }
    get sendButton() { return $('~send'); }
    get successMessage() { return $('~success-message'); }
    get errorMessage() { return $('~error-message'); }

    async sendMessage(message) {
        await this.messageInput.setValue(message);
        await this.sendButton.click();
    }
}

module.exports = new ContatoPage();