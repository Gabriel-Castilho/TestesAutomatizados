/// <reference types="cypress" />
const { pt_br, fakerPT_BR } = require('@faker-js/faker');
import Buy from '../../../support/pages/buy/buy'
import AcessStore from '../../../support/pages/acessStore/acessStore'

describe('Pagamento com cupom', () => {

    it('Valida mensagem de cupom inválido com 2 slm no carrinho', () => {
        cy.getCPF().then((cpf) => {
            AcessStore.acessStore(cpf);
            cy.Login('Senha123')
            Buy.goToCart();
           // Buy.goToCheckoutRemovingStudent();
          
           Buy.goToCheckout();
          // Buy.acceptModalPearsonOptional();
            Buy.insertVoucher("cypress2024");
            cy.get('.message > div').should('contain','O cupom só pode ser aplicado com um único SLM no carrinho');
        })
    })

    it.only('Pagamento com cupom 100%', () => {
        cy.getCPF().then((cpf) => {
            AcessStore.acessStore(cpf);
            cy.Login('Senha123')
            Buy.goToCart();
            Buy.goToCheckoutRemovingStudent(1);
            Buy.goToCheckout();
            Buy.insertVoucher("cypress2024");
            Buy.payWithVoucher();
            cy.get('strong > span').should('contain','Pedido concluído!');
            cy.get('.success-footer > :nth-child(3)').should('contain','Lembre se que os produtos ');
        })
    })

})