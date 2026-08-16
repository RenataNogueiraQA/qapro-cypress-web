Cypress.Commands.add('login', (email = 'renata@teste.com.br', password = 'Senha123') => {
  cy.visit('/login');
  cy.get('#user').type(email);
  cy.get('#password').type(password);
  cy.get('#btnLogin').click();
});