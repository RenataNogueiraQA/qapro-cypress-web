/// <reference type="cypress"/>


describe("Comandos básicos", () => {

    it("Acessar url", () => {
        cy.visit('https://www.automationpratice.com.br/')
    })

    it("Encontrar um elemento", () => {
        cy.visit('https://www.automationpratice.com.br/Login');

        //get()
        //cy.get('#user')          //elemento = id user
        //cy.get('.login_submit')  //elemento = classe login_submit
        cy.get('.form-control')    //elemento = classe form-control             

        //find() - seleciona um elemento
        //dimuninuindo o escopo com get
        cy.get('.mc-form').find('.form-control')
        cy.get('#password') //clicar na mira e copiar do cypress
        cy.get('#btnLogin')

        //contains() - seleciona um elemento por texto
        //dimuninuindo o escopo com get
        cy.get('.mc-form').contains('Send')
    })

    it("Preencher um campo", () => {
        cy.visit('https://www.automationpratice.com.br/Login');

        cy.get('#user').type('renata@teste.com.br')
        cy.get('#password').type('Senha123')

    })

    it("Click", () => { 
        cy.visit('https://www.automationpratice.com.br/Login');

        cy.get('#btnLogin').click()
        //cy.get('[data-cy="meuid"]').click() --colocando nome no elemento quando ele não tem
    })

    it("Select/Dropdown", () => {
        cy.visit('https://automationpratice.com.br/checkout-one');
        //cy.get('#country').select('usa') //pelo nome
        cy.get('#country').select(2)     // pela posição na lista
     })

    it("Checkbox/Radio", () => { 
        cy.visit('https://automationpratice.com.br/checkout-one');
        cy.get('#materialUnchecked').check() //marca
        //cy.get('#materialUnchecked').uncheck() //desmarca
    })

    it("Validar um elemento", () => {
        cy.visit('https://automationpratice.com.br/Login');
        cy.get('#createAccount').should('be.visible').should('have.text','Ainda não tem conta?')

     })

})
