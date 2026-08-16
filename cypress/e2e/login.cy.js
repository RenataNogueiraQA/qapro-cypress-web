/// <reference type="cypress"/>

import loginPage from '../support/pages/loginPage';

describe('Login', () => {
  it('Login com sucesso', () => {
    loginPage.login('renata@teste.com.br', 'Senha123');
  });

  it('Login com senha inválida', () => {
    loginPage.login('renata@teste.com.br', '@');
  });

  it('Login com usuário inexistente', () => {
    loginPage.login('@teste.com.br', 'Senha123');
  });
});
