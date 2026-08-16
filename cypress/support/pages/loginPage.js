class LoginPage {
  visit() {
    cy.visit('/login');
    return this;
  }

  fillCredentials(email, password) {
    cy.get('#user').type(email);
    cy.get('#password').type(password);
    return this;
  }

  submitLogin() {
    cy.get('#btnLogin').click();
    return this;
  }

  login(email, password) {
    this.visit().fillCredentials(email, password).submitLogin();
    return this;
  }
}

export default new LoginPage();
