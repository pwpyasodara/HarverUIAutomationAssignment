import HomePage from '../pageObjects/HomePage'
import HoversPage from '../pageObjects/HoversPage'
describe('5th Test Suite', function()
{
    it('Pop-up Test Case', function()
    {
        const homePage=new HomePage()
        const hoversPage=new HoversPage()
        cy.visit(Cypress.env('url'))
        homePage.getFormAuthenticationLink().contains('Hovers').click()
        hoversPage.getHiddenElement1().invoke('show')
        hoversPage.getViewProfile1().click()
        cy.url().should('include','users/1')
    
    }
    )

}
)