const LoginPage = require('../pages/LoginPage');
const testData = require('../data/testData.json'); // Importando os dados do arquivo JSON

describe('Login Tests', () => {
    it('should login with valid credentials', async () => {
        // Usando os dados válidos para login
        await LoginPage.login(testData.validUser.username, testData.validUser.password);
        
        // Verifique se a navegação foi bem-sucedida
        // Exemplo de assert para garantir que a tela de login não está mais visível
        const homePageVisible = await HomePage.isHomePageVisible();
        assert(homePageVisible, 'Home page should be visible');
    });

    it('should show an error message with invalid credentials', async () => {
        // Usando os dados inválidos para login
        await LoginPage.login(testData.invalidUser.username, testData.invalidUser.password);
        
        // Verificando se a mensagem de erro aparece
        const errorVisible = await LoginPage.isErrorVisible();
        assert(errorVisible, 'Error message should be visible');
    });
});
