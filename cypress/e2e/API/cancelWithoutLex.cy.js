/// <reference types="cypress" />
import cancelContract from '../../contracts/cancel.contract'
const product2023 = require('../../fixtures/products_2023.json')

describe('Teste da funcionalidade cancelamento', () => {

    it('Deve validar o contrato', () => {
        cy.request('rest/V1/bufranchise-ordercancel/cancel').then(response => {
            return cancelContract.validateAsync(response.body)
        })
    })

    /*
    1-maple b2c
    4-Sphere b2c
    7-Luminova b2c
    10 - maple b2b
    11 - Luminova b2b
    */

    //Maple Bear
    it.only('Cenário 1: Troca parcial de mesmo valor série incorreta', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 1, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });

        cy.getOrder(6859).then(response => {
            expect(response.body.status).to.equal("trocaparcial")
        })
    })

    it('Cenário 2: Troca parcial de mesmo valor ano letivo incorreto', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 0, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });
    })
    it('Cenário 3: Troca parcial de mesmo valor série e ano letivo incorreto', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 0, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });
    })
    it('Cenário 4: Troca total de mesmo valor série incorreta', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 0, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });
    })
    it('Cenário 5: Troca total de mesmo valor ano letivo incorreto', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 0, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });
    })
    it('Cenário 6: Troca total de mesmo valor série e ano letivo incorreto', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 0, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });
    })
    it('Cenário 7: Troca Parcial de valor diferente série incorreta', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 0, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });
    })
    it('Cenário 8: Troca parcial de valor diferente ano letivo incorreto', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 0, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });
    })
    it('Cenário 9: Troca Parcial de valor diferente ano e série incorreta', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 0, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });
    })
    it('Cenário 10: Troca total de valor diferente série incorreta', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 0, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });
    })
    it('Cenário 11: Troca Total de valor diferente ano letivo incorreto', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 0, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });
    })
    it('Cenário 12: Troca Total de valor didferente ano e série incorretos', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 0, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });
    })
    it('Cenário 13: Troca parcila de mesmo valor pelo mesmo item', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 0, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });
    })
    it('Cenário 14: Troca parcial de valor diferente pelo mesmo item', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 0, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });
    })
    it('Cenário 15: Troca total de mesmo valor pelo mesmo item', () => {
        //utilizando a função cancelOrder dentro do arquivo commands.js dentro da pasta support
        cy.cancelOrder(6859, "Troca por dados incorretos cenário 1", '03', 0, 1, 0, 18463, 1000.04, 8123000001180).then(response => {
            expect(response.status).to.equal(200)
        })
        //utilizando a função fixData dentro do arquivo commands.js dentro da pasta support
        cy.fixData().then(response => {
            expect(response.status).to.equal(200)
        });
    })
})






