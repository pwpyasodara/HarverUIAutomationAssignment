import HomePage from '../pageObjects/HomePage'
import DropdownListPage from '../pageObjects/DropdownListPage'
describe('2nd Test Suite', function()
{
    before(() => {
        cy.fixture('example').then(function(data)
        {
this.data=data
        }
        )
      })

    it('Dropdown List Test Case', function()
    {
        const homePage=new HomePage()
        const dropDownPage=new DropdownListPage()
        cy.visit(Cypress.env('url'))
        homePage.getFormAuthenticationLink().contains('Dropdown').click()
        dropDownPage.getDropdown().select(this.data.dropdownvalue)
    
    }
    )

}
)