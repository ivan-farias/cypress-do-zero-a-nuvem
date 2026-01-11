Cypress.Commands.add('preencherFormulario', (data = {
    firstName: 'Johan',
    lastName: 'Sobrenome',
    email: 'teste@teste.com',
    text: 'Testadores.'
}) => {
    cy.get('#firstName').type(data.firstName);
    cy.get('#lastName').type(data.lastName);
    cy.get('#email').type(data.email);
    cy.get('#open-text-area').type(data.text);
    // cy.get('.button').click();
    cy.contains('button', 'Enviar').click();
})