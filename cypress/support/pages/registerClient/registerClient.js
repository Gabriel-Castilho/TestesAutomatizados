class RegisterClient {


    registerClient(name,telephone,email,password,passwordConfirmation,cep,houseNumber,complement) {
        cy.get('[data-cy="fullname"]').type(name);
        cy.get('[data-cy="telephone"]').type(telephone);
        cy.get('[data-cy="email"]').type(email);
        cy.get('[data-cy="password"]').type(password);
        cy.get('[data-cy="password_confirmation"]').type(passwordConfirmation);
        cy.get('[data-cy="go_to_address"]').click();
        cy.get('[data-cy="postcode"]').type(cep);
        cy.get('[data-cy="address_number"]').type(houseNumber);
        cy.get('[data-cy="address_complement"]').type(complement);
        cy.wait(2000)
        cy.get('[data-cy="save-client"]').click();
        
    }

    editClient(firstName,lastName,telephone,email,password,newPassword){
        cy.get('[class="action switch"]').click({force: true});
        cy.get('.meus-dados').click();
        cy.get('#firstname').clear().type(firstName);
        cy.get('#lastname').clear().type(lastName);
        cy.get('#telefone__seb_e').clear().type(telephone);
        cy.get('#change-email').click();
        cy.get('#email').clear().type(email);
        cy.get('#current-password').clear().type(password);
        cy.get('#change-password').click();
        cy.get('#password').type(newPassword);
        cy.get('#password-confirmation').type(newPassword);
        cy.get('#politica_privacidade__seb').click();
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();

    }

   
}

export default new RegisterClient();