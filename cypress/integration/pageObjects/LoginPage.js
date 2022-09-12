class LoginPage
{

    getUserNameField()
    {
        return cy.get('#username')
    }

    getPasswordField()
    {
        return cy.get('#password')
    }

    getLoginButton()
    {
        return cy.get('.fa')
    }


}

export default LoginPage;