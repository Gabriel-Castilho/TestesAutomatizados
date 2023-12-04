/// <reference types="cypress" />
const { pt_br, fakerPT_BR } = require('@faker-js/faker');
import RegisterClient from '../../../support/pages/registerClient/registerClient'
import RegisterStudent from '../../../support/pages/registerStudent/registerStudent'
import AcessStore from '../../../support/pages/acessStore/acessStore'


describe('Acesso a loja e cadastro', () => {

    it('Primeiro acesso escola sem integração e cadastro de responsável e aluno', () => {

        let clientName = fakerPT_BR.person.fullName();
        let studentName = fakerPT_BR.person.firstName() + ' ' + fakerPT_BR.person.lastName();
        let studentName2 = fakerPT_BR.person.firstName() + ' ' + fakerPT_BR.person.lastName();
        let studentName3 = fakerPT_BR.person.firstName() + ' ' + fakerPT_BR.person.lastName();
        let studentName4 = fakerPT_BR.person.firstName() + ' ' + fakerPT_BR.person.lastName();
        let email = "automatedtest"+ Math.floor(Math.random()*1000000)+"@email.com";
        cy.generateCPF();
        cy.getCPF().then((cpf)=>{
        AcessStore.acessStore(cpf);  
        cy.get('[data-cy="register"]').click();
        RegisterStudent.firstRegisterStudent(studentName, '2014-01-10',1,1,'Year 5')
        RegisterStudent.addNewStudentInRow();
        RegisterStudent.firstRegisterStudent(studentName2, '2014-01-10',1,1,'Year 6')
        RegisterStudent.addNewStudentInRow();
        RegisterStudent.firstRegisterStudent(studentName3, '2014-01-10',1,1,'Year 7')
       // RegisterStudent.addNewStudentInRow();
        //RegisterStudent.firstRegisterStudent(studentName4, '2014-01-10',1,1,'Year 3')
        RegisterStudent.continueRegistration();
        RegisterClient.registerClient(clientName, '12999344444', email, 'Senha123', 'Senha123', 12092856, 500, 'apto 100');
        cy.get('[class="welcome-title"]').should('contain',"Bem-vindo à Maple Bear Store");
       })
    })


   

    


   
    





})