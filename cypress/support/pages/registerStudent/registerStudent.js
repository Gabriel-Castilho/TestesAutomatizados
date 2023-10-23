

class RegisterStudent {

    firstRegisterStudent(studentName, birthday, gender, year, grade) {
        cy.get('[data-cy="school"]').select('19.928.970/0001-80').should('have.value', '19.928.970/0001-80');
        cy.get('[data-cy="dependent_name"]').type(studentName);
        //cy.get('[id="school"]').select('Sem integração - GO RIO VERDE - SETOR CENTRAL I').should('have.value','19.928.970/0001-80');
        cy.get('[data-cy="dependent_date_of_birth"]').type(birthday);
        //1 is male
        //2 is female
        cy.get('[data-cy="dependent_gender"]').select(gender);
        cy.get('[data-cy="go_to_yearserie"]').click();
        //1 is current year of slm
        //2 is next year of slm
        cy.get('[data-cy="dependent_year"]').select(year);
        cy.get('[data-cy="dependent_serie"]').select(grade);
        cy.get('[data-cy="dependent_save"]').click();

    }

    addNewStudentInRow() {
        cy.get('[data-cy="add_another_bear"]').click();
    }

    continueRegistration() {
        cy.get('[data-cy="proceed_customer_create"]').click();
    }

    newStudent(name, birthday, gender, year, grade) {
        //cy.get('[class="dependent-image"]').select('19.928.970/0001-80').should('have.value','19.928.970/0001-80');
        cy.get('[class="dependent-image"]').click();
        cy.get('[value="Adicionar dependente"]').click();
        cy.wait(4000)
        cy.get('[id="school"]').select('Sem integração - GO RIO VERDE - SETOR CENTRAL I').should('have.value', '19.928.970/0001-80');
        cy.get('[id="name"]').type(name);
        cy.get('[id="date_birth"]').type(birthday);
        //1 is male
        //2 is female
        cy.get('[id="gender"]').select(gender);
        //1 is current year of slm
        //2 is next year of slm
        cy.get('[id="year"]').select(year);
        cy.get('#grade').select(grade, { force: true })
        cy.get('.action-button').click();
    }

    excludeStudent() {
        cy.get('[class="dependent-image"]').click();
        cy.get('.action > svg').click();
        cy.get('#dependent-delete').click();
        cy.get('.deletebtn').click();

    }

    acessPageStudentByLex(){
       // cy.origin('https://mcstaging.maplebearstore.com.br', () => {
           // cy.visit('/customer/account/index/')
            //cy.get('[class="button action primary"]').contains('Aceitar e prosseguir').click();
            //cy.get('[class="dependent-image"]').click();
          //  cy.wait(2000)
            //cy.get('[class="button action primary"]').contains('Aceitar e prosseguir').click();
           // cy.get(':nth-child(1) > .content > .can-buy').should('contain','Material disponível para compra');
           // cy.get(':nth-child(3) > .content > .can-buy').should('contain','Material indisponível, por favor contate a escola');
           // cy.get(':nth-child(3) > .content > .can-buy').should('contain','Material indisponível, por favor contate a escola');
            
       // })
        
    }
}

export default new RegisterStudent();