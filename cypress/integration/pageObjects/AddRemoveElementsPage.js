class AddRemoveElementPage
{
    getAddButton()
    {
        return cy.get('button')
    }

    getTemporaryElementArea()
    {
        return cy.get('#elements')
    }

    getDeleteButton()
    {
        return cy.get('.added-manually')
    }

}

export default AddRemoveElementPage;