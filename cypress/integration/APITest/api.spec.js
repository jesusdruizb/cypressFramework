import { Helpers } from '../Common/helperMethods'
import { onlineStoreHeaders } from '../Data/onlineStore/headers/onlineStoreHeaders'
import { productsEndpoints } from '../Data/onlineStore/endpoints/products'
import { customerEndpoints } from '../Data/onlineStore/endpoints/customers'
import { customerBody } from '../Data/onlineStore/apiBody/customerBody'
import { apiCustomersCommonOperations } from '../Common/apiCommonOperations/apiCustomersCommonOperations'

const baseEndpoint = Cypress.env('api').apiUrl
const getAllCustomersResource = customerEndpoints.getAllCustomersResource()
const apiAuthToken = Cypress.env('api').apiAuthToken
const getHeaders = onlineStoreHeaders.GetOperationHeaders(apiAuthToken)
const postHeaders = onlineStoreHeaders.PostOperationHeaders(apiAuthToken)

describe('Validate API capabilities', () => {
	it('Validate that the API can list all available products', () => {
		Helpers.GetRequest(
			baseEndpoint + productsEndpoints.getAllProductsResource(),
			getHeaders
		).then(allProductsResponse => {
			Object.values(allProductsResponse.body).forEach(item => {
				cy.log(item.name)
			})
		})
	})

	it.only('Validate that the API can return existing customer data correctly', () => {
		//setup
		const customerData = Helpers.createRandomCustomerData()
		apiCustomersCommonOperations.createNewCustomer(customerData)

		//test
		Helpers.GetRequest(
			baseEndpoint + getAllCustomersResource,
			getHeaders
		).then(allCustomersResponse => {
			Object.values(allCustomersResponse.body).forEach(customer => {
				expect(customer.first_name).to.equal(
					customerData.customerFirstName
				)
				expect(customer.last_name).to.equal(
					customerData.customerLastName
				)
				expect(customer.username).to.equal(
					customerData.customerUsername
				)
				expect(customer.email).to.equal(customerData.customerEmail)
				cy.wrap(customer.id).as('customerId')
			})
		})

		//cleanup

		cy.get('@customerId').then(customerId => {
			apiCustomersCommonOperations.deleteCustomer(customerId)
		})
	})
})
