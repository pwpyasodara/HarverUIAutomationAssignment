import HomePage from '../pageObjects/HomePage'
import LoginPage from '../pageObjects/LoginPage'
import SecureAreaPage from '../pageObjects/SecureAreaPage'
describe('1st Test Suite', function()
{
    before(() => {
        cy.fixture('example').then(function(data)
        {
this.data=data
        }
        )
      })

    it('Login Funcion Test Case', function()
    {
        const homePage=new HomePage()
        const loginPage=new LoginPage()
        const secureAreaPage=new SecureAreaPage()
        cy.visit(Cypress.env('url'))
        homePage.getFormAuthenticationLink().contains('Form Authentication').click()
        loginPage.getUserNameField().type(this.data.username)
        loginPage.getPasswordField().type(this.data.password)
        loginPage.getLoginButton().click()
        //Verify login success message
        cy.verifyMessage(this.data.loginsuccessmessage)
        secureAreaPage.getLogoutButton().click()
        //Verify logout success message
        cy.verifyMessage(this.data.logoutsuccessmessage)
    
    }
    )

}
)