describe('Error Handling Tests', () => {
    it('should show an error message when submitting invalid data', async () => {
        await FormPage.fillForm('', 'invalidemail');
        await FormPage.submitForm();
        const errorMessage = await FormPage.getErrorMessage();
        assert(errorMessage === 'Invalid input', 'Error message should be shown');
    });
});
