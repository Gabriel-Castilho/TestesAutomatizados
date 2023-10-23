/// <reference types="cypress" />
const { pt_br, fakerPT_BR } = require('@faker-js/faker');
import Buy from '../../../support/pages/buy/buy'
import AcessStore from '../../../support/pages/acessStore/acessStore'

describe('Pagamento com boleto', () => {

    it('Compra do material com boleto', () => {
        cy.getCPF().then((cpf) => {
            AcessStore.acessStore(cpf);
            cy.Login('Senha123')
            Buy.goToSelectYear();
            Buy.selectCurrentYear();
           // Buy.goToCheckoutRemovingStudent();
            Buy.goToCheckout();
            Buy.payWithPaymentSlip();
            cy.wait(5000)
            cy.get('strong > span').should('contain','Pedido concluído!');
            
            cy.get('.success-footer > :nth-child(3)').should('contain','Lembre se que os produtos ');
        })
    })

})