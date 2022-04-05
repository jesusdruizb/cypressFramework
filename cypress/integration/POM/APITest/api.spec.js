
import {apiOperations} from 'cypress/integration/Constants/apiOperations.js'

describe('Validate API capabilities', () => {


    it(
        'Validate that the API can list all available products', () => {
            cy.getAllProducts(Cypress.env("api").apiAuthToken).then(
                allProductsResponseBody => {
                    cy.log(allProductsResponseBody)
                })
        })

    it.only(
        'Validate that the AP2I can list all available products', () => {
            const allProductsHeaders = require('cypress/fixtures/apiCalls/products/headers/allProductsHeaders.json');
            cy.log(allProductsHeaders)
            //cy.ApiOperation()
        })

})
