class HoversPage
{
    getHiddenElement1()
    {
        return cy.get(":nth-child(3) > div[class='figcaption']")
    }

    getViewProfile1()
    {
        return cy.get("a[href='/users/1']")
    }

}

export default HoversPage;