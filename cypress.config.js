const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9nyv2z',
  reporter: 'mochawesome',
  env:
{
  url: "https://the-internet.herokuapp.com/"
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
