const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "vppb75",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl":"https://mcstaging.maplebearstore.com.br/",
    specPatern:[
      "cypress/e2e/UI/registration/*.cy.js",
      "cypress/e2e/UI/payment/*.cy.js",
      "cypress/e2e/UI/enrollment/*.cy.js",
      "cypress/e2e/UI/profile/*.cy.js"
    ]
  },
  env:{
    ACCESS_TOKEN:"lptupzyqo0u79wxvwgo9syeq6rm6lt1c",
    API_BASE_URL:"https://mcstaging.maplebearstore.com.br/"
  }
  
});
