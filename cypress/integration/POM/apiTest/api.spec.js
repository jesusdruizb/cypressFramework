import { Helpers } from '../../Common/helperMethods'
import { onlineStoreHeaders } from '../../../fixtures/apiCalls/products/headers/getHeaders'
import { productsEndpoints } from '../../Data/onlineStore/endpoints/products'

const baseEnpoint = Cypress.env('api').apiUrl
const getAllProductsResource = productsEndpoints.getAllProductsResource()
const apiAuthToken = Cypress.env('api').apiAuthToken
const getHeaders = onlineStoreHeaders.GetOperationHeaders(apiAuthToken)

describe('Validate API capabilities', () => {
	it('Validate that the API can list all available products', () => {
		Helpers.GetRequest(
			baseEnpoint + getAllProductsResource,
			getHeaders
		).then(allProductsResponseBody => {
			cy.log(allProductsResponseBody.body)
		})
	})
})
