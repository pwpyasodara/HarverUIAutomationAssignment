// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//


//To verify messages in the login functionality
Cypress.Commands.add('verifyMessage', (message) => {
    cy.get('#flash').then(function(element)
        {
            const actualText=element.text()
            expect(actualText.includes(message)).to.be.true
        })
})
