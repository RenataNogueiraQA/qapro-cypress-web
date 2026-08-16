class RegisterPage {
  visit() {
    cy.visit('/register');
    return this;
  }

  fillForm({ name = '', email = '', password = '' } = {}) {
    if (name !== undefined) {
      name && cy.get('#user').clear().type(name);
    }

    if (email !== undefined) {
      email &&cy.get('#email').clear().type(email);
    }

    if (password !== undefined) {
      password && cy.get('#password').clear().type(password);
    }

    return this;
  }

  submitRegister() {
    cy.get('#btnRegister').click();
    return this;
  }

  assertButtonVisible() {
    cy.get('#btnRegister').should('be.visible');
    return this;
  }
}

export default new RegisterPage();
