const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
const url = Cypress.env('API_BASE_URL')

import { generate } from 'gerador-validador-cpf'


Cypress.Commands.add('generateCPF', () => {
    let cpf = generate()
    cy.writeFile("cypress/fixtures/cpf.json", { cpf: cpf })

})

Cypress.Commands.add('getCPF',()=>{
    return cy.readFile("cypress/fixtures/cpf.json").then((data) => {
        return data.cpf
    })
})

Cypress.Commands.add('Login', (password) => {
    cy.get('#xsd > #login-form > .fieldset > .password > .control > #pass').type(password);
    cy.get('#xsd > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
}) 

Cypress.Commands.add('waitUntilPageLoaded', () => {
    s
  });
/*

*/



