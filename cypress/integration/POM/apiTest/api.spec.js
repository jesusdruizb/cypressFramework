import { Helpers } from '../../Common/helperMethods'
import { onlineStoreHeaders } from '../../../fixtures/apiCalls/products/headers/getHeaders'
import { productsEndpoints } from '../../Data/onlineStore/endpoints/products'

const baseEndpoint = Cypress.env('api').apiUrl
const apiAuthToken = Cypress.env('api').apiAuthToken
const getHeaders = onlineStoreHeaders.GetOperationHeaders(apiAuthToken)

describe('Validate API capabilities', () => {
	it('Validate that the API can list all available products', () => {
		const getAllProductsResource =
			productsEndpoints.getAllProductsResource()
		Helpers.GetRequest(
			baseEndpoint + getAllProductsResource,
			getHeaders
		).then(allProductsResponseBody => {
			cy.log(allProductsResponseBody.body)
		})
	})
})
