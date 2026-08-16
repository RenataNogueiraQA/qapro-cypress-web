/// <reference type="cypress"/>

import checkoutPage from '../support/pages/checkoutPage';
import { faker } from '@faker-js/faker';

describe('Fluxo de Checkout', () => {
  beforeEach(() => {
    checkoutPage.visit();
  });

  it('Checkout com sucesso - Direct Bank Transfer', () => {
    checkoutPage
      .fillCheckoutForm()
      .markTerms()
      .submitCheckout()
      .assertBillingSuccess()
      .confirmOrder()
      .assertOrderSuccess();
  });

  it('Checkout com sucesso - Mobile Banking', () => {
    checkoutPage
      .fillCheckoutForm()
      .markTerms()
      .submitCheckout()
      .assertBillingSuccess()
      .selectPayment('mobile')
      .confirmOrder()
      .assertOrderSuccess();
  });

  it('Checkout com sucesso - Paypal', () => {
    checkoutPage
      .fillCheckoutForm()
      .markTerms()
      .submitCheckout()
      .assertBillingSuccess()
      .selectPayment('paypal')
      .confirmOrder()
      .assertOrderSuccess();
  });

  it('Campo Nome obrigatorio', () => {
    checkoutPage
      .fillCheckoutForm({ firstName: '' })
      .markTerms()
      .submitCheckout()
      .assertErrorMessage('O campo First Name deve ser prenchido');
  });

  it('Campo Sobrenome obrigatorio', () => {
    checkoutPage
      .fillCheckoutForm({ lastName: '' })
      .markTerms()
      .submitCheckout()
      .assertErrorMessage('O campo Last Name deve ser prenchido');
  });

  it('Campo Nome da Companhia obrigatorio', () => {
    checkoutPage
      .fillCheckoutForm({ company: '' })
      .markTerms()
      .submitCheckout()
      .assertErrorMessage('O campo Company deve ser prenchido');
  });

  it('Campo E-mail obrigatorio', () => {
    checkoutPage
      .fillCheckoutForm({ email: '' })
      .markTerms()
      .submitCheckout()
      .assertErrorMessage('O campo E-mail deve ser prenchido ou é inválido');
  });

  it('Campo País obrigatorio', () => {
    checkoutPage
      .fillCheckoutForm({ country: '' })
      .markTerms()
      .submitCheckout()
      .assertErrorMessage('O campo Country deve ser prenchido');
  });

  it('Campo Estado/Cidade obrigatorio', () => {
    checkoutPage
      .fillCheckoutForm({ city: '' })
      .markTerms()
      .submitCheckout()
      .assertErrorMessage('O campo City deve ser prenchido');
  });

  it('Campo CEP obrigatorio', () => {
    checkoutPage
      .fillCheckoutForm({ zip: '' })
      .markTerms()
      .submitCheckout()
      .assertErrorMessage('O campo Zip Code deve ser prenchido');
  });

  it('Campo Endereço Completo obrigatorio', () => {
    checkoutPage
      .fillCheckoutForm({ address: '' })
      .markTerms()
      .submitCheckout()
      .assertErrorMessage('O campo Address deve ser prenchido');
  });

  it('Campo Notas Adicionais obrigatorio', () => {
    checkoutPage
      .fillCheckoutForm({ notes: '' })
      .markTerms()
      .submitCheckout()
      .assertErrorMessage('O campo Additional Notes deve ser prenchido');
  });

  it('Campo E-mail inválido - sem @', () => {
    checkoutPage
      .fillCheckoutForm({ email: 'email_sem_arroba.com.br' })
      .markTerms()
      .submitCheckout()
      .assertErrorMessage('O campo E-mail deve ser prenchido ou é inválido');
  });

  it('Campo E-mail inválido - sem domínio', () => {
    checkoutPage
      .fillCheckoutForm({ email: 'email_sem_dominio@123' })
      .markTerms()
      .submitCheckout()
      .assertErrorMessage('O campo E-mail deve ser prenchido ou é inválido');
  });
});