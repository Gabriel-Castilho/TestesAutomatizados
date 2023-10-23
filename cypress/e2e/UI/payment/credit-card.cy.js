/// <reference types="cypress" />
const { pt_br, fakerPT_BR } = require('@faker-js/faker');
import Buy from '../../../support/pages/buy/buy'
import AcessStore from '../../../support/pages/acessStore/acessStore'
//import 'cypress-localstorage-commands'
describe('Pagamento com cartão', () => {

    it('Compra do material com cartão de crédito', () => {
        let creditCardName = fakerPT_BR.person.fullName();
        cy.getCPF().then((cpf) => {
            AcessStore.acessStore(cpf); 
            cy.Login('Senha123')
            Buy.goToSelectYear();
            cy.get('.message-select-year > span').should('contain','Agora, selecione o ano em que começam as aulas de seu dependente:');
            Buy.selectCurrentYear();
            cy.get(':nth-child(1) > .dependent-name-grade > .dependent-grade').should('contain','2023')
            Buy.goToCheckoutRemovingStudent();
            Buy.goToCheckout();
            cy.wait(8000)
              Buy.payWithCreditCard('5155901222280001',creditCardName);
            cy.get('strong > span').should('contain','Pedido concluído!');
            
            cy.get('.success-footer > :nth-child(3)').should('contain','Lembre se que os produtos ');
        })
    })

})