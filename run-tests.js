const cypress = require('cypress');

(async () => {
  try {
    process.env.CYPRESS_BROWSER = 'chrome';
    const testFiles = [
     //'cypress/e2e/UI/LEX/confirm_Registration/*.cy.js',
      'cypress/e2e/UI/registration/*.cy.js',
      'cypress/e2e/UI/payment/credit-card.cy.js',
      'cypress/e2e/UI/payment/voucher.cy.js',
      'cypress/e2e/UI/payment/payment-slip.cy.js',
      'cypress/e2e/UI/enrollment/*.cy.js',
      'cypress/e2e/UI/profile/*.cy.js'
    ];

    for (const spec of testFiles) {
      await cypress.run({ spec,browser: 'chrome' });
    }
  } catch (error) {
    console.error('Erro ao executar os testes:', error);
    process.exit(1);
  }
})();