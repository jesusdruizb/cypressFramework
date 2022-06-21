import { customerBody } from '../../Data/onlineStore/apiBody/customerBody'
import { Helpers } from '../helperMethods'
import { customerEndpoints } from '../../Data/onlineStore/endpoints/customers'
import { onlineStoreHeaders } from '../../Data/onlineStore/headers/onlineStoreHeaders'

const apiAuthToken = Cypress.env('api').apiAuthToken
const baseEndpoint = Cypress.env('api').apiUrl
const getAllCustomersResource = customerEndpoints.getAllCustomersResource()
const postHeaders = onlineStoreHeaders.PostOperationHeaders(apiAuthToken)
const getHeaders = onlineStoreHeaders.GetOperationHeaders(apiAuthToken)

export const apiCustomersCommonOperations = {
	/**
	 * Creates customer by using a customer data object as shown
	 * @param customerData {customerData}
	 *      {
	 * 			customerEmail: 'test@2testAutoCypress.com',
	 * 			customerFirstName: 'testName',
	 * 			customerLastName: 'testLastName',
	 * 			customerUsername: 'cypressTestusername',
	 * 			customerPassword: 'pass1',
	 * 		}
	 */
	createNewCustomer: function (customerData) {
		const createCustomerBody = customerBody.getCreateSingleUserBody(
			customerData.customerEmail,
			customerData.customerFirstName,
			customerData.customerLastName,
			customerData.customerUsername,
			customerData.customerPassword
		)
		Helpers.PostRequest(
			baseEndpoint + getAllCustomersResource,
			postHeaders,
			createCustomerBody
		)
	},
	/**
	 * Deletes single customer by id
	 * @param customerId {int}
	 */
	deleteCustomer: function (customerId) {
		Helpers.DeleteRequest(
			baseEndpoint +
				customerEndpoints.getDeleteCustomerByIdResource(customerId),
			getHeaders
		)
	},
	/**
	 * Deletes all customers, uses API authentication headers
	 * @param getHeaders
	 */
	deleteAllCustomers: function (getHeaders) {
		Helpers.GetRequest(
			baseEndpoint + getAllCustomersResource,
			getHeaders
		).then(allCustomersResponse => {
			for (let customer of allCustomersResponse.body) {
				this.deleteCustomer(customer.id)
			}
		})
	},
}
