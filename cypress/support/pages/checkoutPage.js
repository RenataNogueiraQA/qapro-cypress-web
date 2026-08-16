import { faker } from "@faker-js/faker";

class CheckoutPage {
  visit() {
    cy.visit('/checkout-one');
    return this;
  }

  fillCheckoutForm({
    firstName = faker.person.firstName(),
    lastName = faker.person.lastName(),
    company = faker.company.name(),
    email = faker.internet.email({ provider: 'qazando.com' }),
    country = 1,
    city = 1,
    zip = faker.location.zipCode(),
    address = faker.location.streetAddress(),
    notes = faker.lorem.sentence()
  } = {}) {
    firstName && cy.get('#fname').type(firstName);
    lastName && cy.get('#lname').type(lastName);
    company && cy.get('#cname').type(company);
    email && cy.get('#email').type(email);
    country && cy.get('#country').select(country);
    city &&cy.get('#city').select(city);
    zip && cy.get('#zip').type(zip);
    address && cy.get('#faddress').type(address);
    notes && cy.get('#messages').type(notes);
    return this;
  }

  markTerms() {
    cy.get('#materialUnchecked').click();
    return this;
  }

  submitCheckout() {
    cy.get('.checkout-area-bg > .theme-btn-one').click();
    return this;
  }

  assertBillingSuccess() {
    cy.get(':nth-child(2) > h3').should('contain', 'Billings Information registred with success!');
    return this;
  }

  selectPayment(method) {
    if (method === 'mobile') {
      cy.get('#headingTwo > .collapsed > [name="payment"]').click();
    } else if (method === 'paypal') {
      cy.get('#headingThree > .collapsed > label').click();
    }
    return this;
  }

  confirmOrder() {
    cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click();
    return this;
  }

  assertOrderSuccess() {
    cy.get('.offer_modal_left > h3').should('contain', 'Congrats! Your order was created with sucess!');
    return this;
  }

  assertErrorMessage(message) {
    cy.get('#errorMessageFirstName').should('contain', message);
    return this;
  }
}

export default new CheckoutPage();
