# Cypress, do zero à nuvem.

Projeto de exemplo do curso "Cypress, do zero à nuvem da escola online "Talking About Testing".

## Pré requisitos:

É necessário ter o Git, Node.js e Npm instalado para clonar e instalar o projeto.

> Eu usei as versões `2.52.0`,`v18.14.0` e `9.3.1` respectivamente. Sugiro que utilize a mesma versão ou uma superior.

## Instalação 

Executar `npm install` ou `npm i` para instalar as dependências.

## Testes

Nesse projeto você pode executar os testes na versão desktop ou na versão mobile do desktop.

### Desktop

Execute `npm test` para executar os testes no modo "Headless" na área de trabalho.

Ou execute `npm run cy:open` para executar os testes no aplicativo do cypress (Testes visuais).

### Mobile

Execute `npm run test:mobile` para executar os testes no modo "Headless".

Ou execute `npm run cy:open:mobile` para executar os testes no aplicativo do cypress (Testes visuais).