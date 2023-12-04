import '../../ui-commands'

class AcessStore {

    acessStore(cpf) { 

        cy.visit('customer/account/index/')
        cy.get('.modal-footer > :nth-child(2)').click();
        cy.get('[id="taxvat"]').type(cpf);
        //click in 'prosseguir'
        cy.get('#identification-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
        //waiting 6 seconds for loading
        cy.wait(6000)
    }


    acessStoreLEX(email, password) {
        cy.visit('https://homolog-sso.lex.education');
        cy.get(':nth-child(2) > .cards-container__card').click();
        cy.get('#mat-input-0').type(email);
        cy.get('#password').type(password);
        cy.get('.lex-button-block').click();
        cy.wait(5000)

        //cy.visit('https://mcstaging.maplebearstore.com.br/customer/account/index/')
    }

    acessStoreByLex(cpf) {
        cy.get('.user-portal-page__section > lex-card > .cards-container > .cards-container__anchor > .cards-container__card').click();

        cy.origin('https://mcstaging.maplebearstore.com.br', () => {
            cy.visit('https://mcstaging.maplebearstore.com.br/customer/account/index/');
        //cy.visit('https://mcstaging.maplebearstore.com.br/authentication/login/cache');
           cy.get('[id="taxvat"]').type('86162615081');
           cy.get('#identification-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
           cy.wait(15000)
            cy.visit('https://mcstaging.maplebearstore.com.br/dependents/');
         //cy.get('[class="dependent-image"]').click();
            cy.get(':nth-child(1) > .content > .can-buy').should('contain', 'Material disponível para compra');
            cy.get('[class="cant-buy"]').should('have.length', 1);
        });
    }

}

export default new AcessStore();
