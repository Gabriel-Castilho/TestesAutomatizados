/// <reference types="cypress" />
const { pt_br, fakerPT_BR } = require('@faker-js/faker');
//import RegisterClient from '../../../support/pages/registerClient/registerClient'
import RegisterStudent from '../../../../support/pages/registerStudent/registerStudent'
import AcessStore from '../../../../support/pages/acessStore/acessStore'


describe('Acesso a loja e verifica cadastro', () => {

    it('Acesso LEX', () => {
            AcessStore.acessStoreLEX('teban11752@gearstag.com','Senha123@');
            AcessStore.acessStoreByLex();
           // cy.get(':nth-child(1) > .content > .can-buy').should('contain', 'Material disponível para compra');
            //cy.get('[class="cant-buy"]').should('have.length', 1);
    })


})