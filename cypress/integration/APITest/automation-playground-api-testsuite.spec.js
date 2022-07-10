import ApiCall from '../Common/helperMethods'
import { onlineStoreHeaders } from '../Data/onlineStore/headers/onlineStoreHeaders'
import { productsEndpoints } from '../Data/onlineStore/endpoints/products'
import { customerEndpoints } from '../Data/onlineStore/endpoints/customers'
import ApiCustomersCommonOperations from '../Common/apiCommonOperations/apiCustomersCommonOperations'
import CustomerBody from '../Data/onlineStore/apiBody/customerBody'
import defaultProductList from '../../fixtures/products/default-product-list'
import customerEndpointsApiResponse from '../../fixtures/apiCalls/products/apiResponse/customer-endpoint-responses'

const apiAuthToken = Cypress.env('api').apiAuthToken
const baseEndpoint = Cypress.env('api').apiUrl
const getAllCustomersResource = customerEndpoints.getAllCustomersResource()
const getHeaders = onlineStoreHeaders.GetOperationHeaders(apiAuthToken)
const apiCustomersCommonOperations = new ApiCustomersCommonOperations()
const apiCall = new ApiCall()
const customerBody = new CustomerBody()

describe('Validate API capabilities', () => {
	beforeEach(() => {
		//cleanup
		apiCustomersCommonOperations.DeleteAllCustomers(getHeaders)
	})

	it('[API Testcase] Validate that the API can list available products <Positive>', () => {
		//setup
		//execution
		apiCall
			.GetRequest(
				baseEndpoint + productsEndpoints.getAllProductsResource(),
				getHeaders
			)
			.then(allProductsResponse => {
				//validation
				expect(allProductsResponse.status).to.equal(200)
				Object.values(allProductsResponse.body).forEach(item => {
					let found = defaultProductList.find(function (product) {
						return product.productName === item.name
					})
					expect(found.productName).to.equal(item.name)
				})
			})
	})

	it('[API Testcase] Validate that a customer can be created through the API correctly <Positive>', () => {
		//setup
		const customerData = customerBody.getCreateRandomSingleUserBody()
		//execute
		apiCustomersCommonOperations
			.CreateNewGenericCustomerByApi(customerData)
			.then(createGenericUserResponse => {
				expect(createGenericUserResponse.status).to.equal(201)
				expect(createGenericUserResponse.body.email).to.equal(
					customerData.email
				)
				expect(createGenericUserResponse.body.username).to.equal(
					customerData.username
				)
				expect(createGenericUserResponse.body.first_name).to.equal(
					customerData.first_name
				)
				expect(createGenericUserResponse.body.last_name).to.equal(
					customerData.last_name
				)
			})
		//test
	})

	it('[API Testcase] Validate that the API can return existing customer data correctly <Positive>', () => {
		//setup
		const customerData = customerBody.getCreateRandomSingleUserBody()
		apiCustomersCommonOperations
			.CreateNewGenericCustomerByApi(customerData)
			.then(createCustomerResponse => {
				//execution
				apiCustomersCommonOperations
					.GetCustomerById(createCustomerResponse.body.id)
					.then(customer => {
						//validation
						expect(customer.body.first_name).to.equal(
							customerData.first_name
						)
						expect(customer.body.last_name).to.equal(
							customerData.last_name
						)
						expect(customer.body.username).to.equal(
							customerData.username
						)
						expect(customer.body.email).to.equal(customerData.email)
					})
			})
	})

	it('[API Testcase] Validate that the APi returns HTTP Response 404 for a request with a non-existent customerId <Negative>', () => {
		//setup
		//execution
		apiCustomersCommonOperations
			.GetCustomerById(100000000000)
			.then(customerByIdResponse => {
				//validation
				expect(customerByIdResponse.status).to.equal(404)
				expect(customerByIdResponse.body.message).to.equal(
					'Invalid resource ID.'
				)
			})
	})
})
