import HomePage from '../pageObjects/HomePage'
import CheckboxesPage from '../pageObjects/CheckboxesPage'
describe('3rd Test Suite', function()
{
    it('Checkboxes Test Case', function()
    {
        const homePage=new HomePage()
        const checkboxesPage=new CheckboxesPage()
        cy.visit(Cypress.env('url'))
        homePage.getFormAuthenticationLink().contains('Checkboxes').click()
        checkboxesPage.getCheckbox1().check().should('be.checked')
        checkboxesPage.getCheckbox2().uncheck().should('not.be.checked')
    
    }
    )

}
)