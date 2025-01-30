const FormPage = require('../pages/FormPage');

describe('Form Tests', () => {
    it('should submit a form with valid data', async () => {
        await FormPage.fillForm('John Doe', 'john@example.com');
        await FormPage.submitForm();
        // Verifique se a submissão foi bem-sucedida
    });
});
