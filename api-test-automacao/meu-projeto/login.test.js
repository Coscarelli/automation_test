const LoginPage = require('../pageobjects/login.page');
const CadastroPage = require('../pageobjects/cadastro.page');
const ContatoPage = require('../pageobjects/contato.page');
const testData = require('../data/testData.json');

describe('Teste de Funcionalidades do Aplicativo', () => {
    before(async () => {
        // Inicializa o aplicativo antes de cada teste
        await browser.launchApp();
    });

    after(async () => {
        // Fecha o aplicativo após os testes
        await browser.closeApp();
    });

    it('Deve fazer login com credenciais válidas', async () => {
        await LoginPage.login(testData.validUser .email, testData.validUser .password);
        // Verifique se a navegação foi bem-sucedida
        const successMessage = await $('~success-message'); // Ajuste o seletor conforme necessário
        expect(await successMessage.isDisplayed()).toBe(true);
    });

    it('Deve exibir mensagem de erro ao fazer login com credenciais inválidas', async () => {
        await LoginPage.login(testData.invalidUser .email, testData.invalidUser .password);
        const errorMessage = await LoginPage.errorMessage.getText();
        expect(errorMessage).toEqual('Credenciais inválidas');
    });

    it('Deve cadastrar um novo usuário', async () => {
        await CadastroPage.register(testData.newUser .name, testData.newUser .email, testData.newUser .password);
        const successMessage = await CadastroPage.successMessage.getText();
        expect(successMessage).toEqual('Cadastro realizado com sucesso');
    });

    it('Deve navegar entre telas', async () => {
        await LoginPage.login(testData.validUser .email, testData.validUser .password);
        await $('~menu-button').click(); // Ajuste o seletor conforme necessário
        await $('~profile-button').click(); // Ajuste o seletor conforme necessário
        const profileHeader = await $('~profile-header'); // Ajuste o seletor conforme necessário
        expect(await profileHeader.isDisplayed()).toBe(true);
    });

    it('Deve preencher e enviar um formulário de contato', async () => {
        await ContatoPage.sendMessage(testData.contactMessage);
        const successMessage = await ContatoPage.successMessage.getText();
        expect(successMessage).toEqual('Mensagem enviada com sucesso');
    });

    it('Deve exibir mensagens de erro ao deixar campos obrigatórios em branco no cadastro', async () => {
        await CadastroPage.register('', '', '');
        const errorMessage = await CadastroPage.errorMessage.getText();
        expect(errorMessage).toEqual('Todos os campos são obrigatórios');
    });

    it('Deve exibir mensagem de erro ao tentar fazer login sem preencher os campos', async () => {
        await LoginPage.login('', '');
        const errorMessage = await LoginPage.errorMessage.getText();
        expect(errorMessage).toEqual('Por favor, preencha todos os campos');
    });

    it('Deve permitir a recuperação de senha', async () => {
        await LoginPage.recoverPassword(testData.validUser .email);
        const recoveryMessage = await $('~recovery-message').getText(); // Ajuste o seletor conforme necessário
        expect(recoveryMessage).toEqual('Instruções de recuperação de senha enviadas');
    });

    it('Deve fazer logout do usuário', async () => {
        await LoginPage.login(testData.validUser .email, testData.validUser .password);
        await $('~logout-button').click(); // Ajuste o seletor conforme necessário
        const loginButton = await LoginPage.loginButton; // Ajuste o seletor conforme necessário
        expect(await loginButton.isDisplayed()).toBe(true);
    });
});