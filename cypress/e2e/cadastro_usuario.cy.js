/// <reference type="cypress"/>

import registerPage from '../support/pages/registerPage';
import { faker } from '@faker-js/faker';

describe('Cadastro de Usuário', () => {

    beforeEach(() => {
        registerPage.visit();
    })

    it('Cadastro com sucesso', () => {     
        
        const name = faker.person.fullName();

        registerPage.fillForm({
            name: name,
            email: faker.internet.email({provider: 'qazando.com'}),
            password: faker.number.int(9999999)            
        });
        registerPage.submitRegister();        
    });

    it('Nome usuário sem preenchimento', () => {        
        registerPage.fillForm({
            email: faker.internet.email(),
            password: faker.number.int(9999999)
        });
        registerPage.submitRegister();
    });

    it('E-mail sem preenchimento', () => {        
        registerPage.fillForm({
            name: 'Renata',
            password: 'Senha123'
        });
        registerPage.submitRegister();
    });

    it('E-mail formato inválido', () => {        
        registerPage.fillForm({
            name: 'Renata',
            email: 'renata_cadusuario.com.br',
            password: 'Senha123'
        });
        registerPage.submitRegister();
    });

    it('E-mail formato inválido', () => {        
        registerPage.fillForm({
            name: 'Renata',
            email: 'renata@cadusuario',
            password: 'Senha123'
        });
        registerPage.submitRegister();
    });

    it('Senha sem preenchimento', () => {        
        registerPage.fillForm({
            name: 'Renata',
            email: 'renata@cadusuario.com.br'
        });
        registerPage.submitRegister();
    });

    it('Senha inválida', () => {        
        registerPage.fillForm({
            name: 'Renata',
            email: 'renata@cadusuario.com.br',
            password: '1a'
        });
        registerPage.submitRegister();
    });

    it('Cadastro de usuário com senha menor 6 caracteres', () => {        
        registerPage.fillForm({
            name: 'Renata',
            email: 'renata@cadusuario.com.br',
            password: '12345'
        });
        registerPage.submitRegister();
    });

    it('Botão Cadastrar visível', () => {        
        registerPage.assertButtonVisible();
    });
});
