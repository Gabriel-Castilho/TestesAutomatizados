/// <reference types="cypress" />
const { pt_br, fakerPT_BR } = require('@faker-js/faker');

import AcessStore from '../../../support/pages/acessStore/acessStore';
import registerClient from '../../../support/pages/registerClient/registerClient';
//import RegisterStudent from '../../../support/pages/RegisterStudent/registerStudent';



var firstName = fakerPT_BR.person.firstName();
var lastName = fakerPT_BR.person.lastName();
var email = "automatedtestupdate"+ Math.floor(Math.random()*1000000)+"@email.com"

describe('Editando o perfil', () => {
    it('Editando dados do perfil', () => {
        cy.getCPF().then((cpf) => {
            AcessStore.acessStore(cpf);
            cy.Login('Senha123')
            registerClient.editClient(firstName,lastName,'12999444444',email,'Senha123','Senha123@')
            cy.get('.message-success > div').should('contain','Você gravou as informações da conta.')
        })
    })

})
