import { Helpers } from '../../Common/helperMethods'
import { onlineStoreHeaders } from '../../Data/onlineStore/headers/onlineStoreHeaders'
import { productsEndpoints } from '../../Data/onlineStore/endpoints/products'
import { customerEndpoints } from '../../Data/onlineStore/endpoints/customers'
import { customerBody } from '../../Data/onlineStore/apiBody/customerBody'

const baseEndpoint = Cypress.env('api').apiUrl
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
		const customerData = {
			customerEmail: 'test@2testAutoCypress.com',
			customerFirstName: 'testName',
			customerLastName: 'testLastName',
			customerUsername: 'cypressTestusername',
			customerPassword: 'pass1',
		}
		const createCustomerBody = customerBody.getCreateSingleUserBody(
			customerData.customerEmail,
			customerData.customerFirstName,
			customerData.customerLastName,
			customerData.customerUsername,
			customerData.customerPassword
		)
		Helpers.PostRequest(
			baseEndpoint + customerEndpoints.getAllCustomersResource(),
			postHeaders,
			createCustomerBody
		)

		//test
		Helpers.GetRequest(
			baseEndpoint + customerEndpoints.getAllCustomersResource(),
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
			Helpers.DeleteRequest(
				baseEndpoint +
					customerEndpoints.getDeleteCustomerByIdResource(customerId),
				getHeaders
			)
		})
	})
})
