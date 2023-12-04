/// <reference types="cypress" />
const { pt_br, fakerPT_BR } = require('@faker-js/faker');

import AcessStore from '../../../support/pages/acessStore/acessStore';
import RegisterStudent from '../../../support/pages/registerStudent/registerStudent';



let studentName = fakerPT_BR.person.firstName() + ' ' + fakerPT_BR.person.lastName();

describe('Meus alunos', () => {
   
    
    it('Adicionando um aluno',()=>{
        cy.getCPF().then((cpf) => {
            AcessStore.acessStore(cpf);
            cy.Login('Senha123')
            RegisterStudent.newStudent(studentName,'2014-04-04',1,'2024',12);
        })
    })

    it('Exclusão de um estudante', () => {
        cy.getCPF().then((cpf) => {
            AcessStore.acessStore(cpf);
            cy.Login('Senha123')
            RegisterStudent.excludeStudent();
        })
    })

})
