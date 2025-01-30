class FeedbackPage {
    get feedbackInput() { return $('~feedback'); }
    get submitButton() { return $('~submit'); }
    get successMessage() { return $('~success-message'); }
    get errorMessage() { return $('~error-message'); }

    async