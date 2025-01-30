# Automação de Testes Mobile com WebDriverIO e Appium

Este projeto tem como objetivo automatizar os testes de um aplicativo mobile utilizando WebDriverIO, Appium, Mocha, Chai e outras ferramentas para facilitar a execução e análise de falhas. Abaixo estão as instruções para configurar o ambiente de testes e executar os testes.

## Requisitos

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **Java** (necessário para rodar o Appium)
- **Android SDK** (para testes Android)
- **Xcode** (para testes iOS, caso esteja utilizando macOS)
- **Appium** (se ainda não instalado, veja abaixo como fazer isso)

## Configuração do Ambiente

1. **Clone o Repositório**

   Clone o repositório para o seu computador:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

npm install

npm install -g appium


export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$ANDROID_HOME/platform-tools:$PATH


npx wdio run wdio.conf.js


allure serve allure-results
