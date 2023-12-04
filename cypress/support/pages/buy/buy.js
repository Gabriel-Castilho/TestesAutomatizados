const date = new Date();
const currentYear = date.getFullYear();
const nextYear = date.getFullYear() + 1


class Buy{

    goToHome(){
        cy.get('.logo-img').click();
    }
    goToSelectYear(){
        cy.get('[class="buy-image"]').click();
    }

    acceptModalPearsonOptional(){
        cy.get('.modal-optional-action-button-pay').click();
    }
    goToCart(){
        cy.get('[class="buy-image"]').click();
       // cy.get('[class="action-button"]').click();
        //cy.get('[class="cart-action-button"]').click();
    }
    selectCurrentYear(){
        cy.get('#wrapper > :nth-child(1)').click();
        cy.get('.action-button').click();
    }
    goToCheckoutRemovingStudent(posStudent){
      //  cy.get('data-cy="0"').click({force:true});
        cy.get('.dependent-checked-default.checkbox-dependent.checkbox-product').eq(posStudent).click({force:true});;
        
    }

    modalConfirmOptionalProducts(){
        cy.get('.modal-optional-action-button-pay').click();
    }
    selectNexYear(){
        cy.get('#wrapper > :nth-child(2)').click();
        cy.get('.action-button').click();
    }
    
    goToCheckout(){
        cy.get('.cart-action-button').click();
    }

     
    payWithCreditCard(ccNumber,ccName){
        
          cy.get('[for="getnet_paymentmagento_cc"]').click();
          cy.get('[name="payment[cc_number]"]').type(ccNumber);
          cy.get('[name="payment[cc_cid]"]').type('123');
          //1 is january -> month 1
          //12 is december -> month 12
          cy.get('[name="payment[cc_exp_month]"]').select(12);
          //2023 is year 2023
          //2029 is year 2029
          cy.get('[name="payment[cc_exp_year]"]').select("2029");
          cy.get('[name="payment[cc_cardholder_name]"]').type(ccName);
          //1 is 1x
          //12 is 12x
          cy.get('[name="payment[cc_installments]"]').select(1);
          //dont save credit card
          cy.get('[name="vault[is_enabled]"]').click();
          cy.get('#action-button-cc').click();
          cy.wait(8000);
       
    }
    payWithPaymentSlip(){
        cy.get('[for="getnet_paymentmagento_boleto"]').click();
        cy.get('#action-button-boleto').click();
    }
    payWithVoucher(){
        cy.get(':nth-child(4) > div.primary > .action').click();
    }
    insertVoucher(code){
        cy.get('[id="discount-code"]').type(code);
        cy.get('[value="Aplicar cupom"]').click();
    }
    verifyMandatory(){
        cy.get('[class="buy-image"]').click();
        cy.get('[class="action-button"]').click(); 
    }
}

export default new Buy();