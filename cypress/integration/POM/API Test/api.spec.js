describe('Validate API capabilities', () => {


    it(
        'Validate that the API can list all available products', () => {
            cy.getAllProducts(Cypress.env("api").apiAuthToken).then(
                allProductsResponseBody => {
                    cy.log(allProductsResponseBody)
                })
        })

})
