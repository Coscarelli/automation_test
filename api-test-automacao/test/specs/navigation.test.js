describe('Navigation Tests', () => {
    it('should navigate from Login to Home', async () => {
        await LoginPage.login('validUser', 'validPassword');
        // Verifique se a navegação foi bem-sucedida, por exemplo, a tela inicial foi exibida
    });
});
