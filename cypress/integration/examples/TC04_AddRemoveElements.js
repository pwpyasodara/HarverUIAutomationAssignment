import HomePage from '../pageObjects/HomePage'
import AddRemoveElementPage from '../pageObjects/AddRemoveElementsPage'
describe('4th Test Suite', function()
{
    it('Checkboxes Test Case', function()
    {
        const homePage=new HomePage()
        const addRemoveElementPage=new AddRemoveElementPage()
        cy.visit(Cypress.env('url'))
        homePage.getFormAuthenticationLink().contains('Add/Remove Elements').click()
        addRemoveElementPage.getAddButton().contains('Add Element').click()
        addRemoveElementPage.getTemporaryElementArea().should('be.visible')
        addRemoveElementPage.getDeleteButton().click()
        addRemoveElementPage.getTemporaryElementArea().should('not.be.visible')
    
    }
    )

}
)