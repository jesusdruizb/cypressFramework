import ApiCall from '../helperMethods'
import { customerEndpoints } from '../../Data/onlineStore/endpoints/customers'
import { onlineStoreHeaders } from '../../Data/onlineStore/headers/onlineStoreHeaders'

const apiAuthToken = Cypress.env('api').apiAuthToken
const baseEndpoint = Cypress.env('api').apiUrl
const getAllCustomersResource = customerEndpoints.getAllCustomersResource()
const postHeaders = onlineStoreHeaders.PostOperationHeaders(apiAuthToken)
const getHeaders = onlineStoreHeaders.GetOperationHeaders(apiAuthToken)
const apiCall = new ApiCall()

export default class apiCustomersCommonOperations {
	/**
	 * Creates customer by using a customer data object as shown
	 * @param customerBody {customerBody}
	 *      {
	 * 			email: 'test@2testAutoCypress.com',
	 * 			first_name: 'testName',
	 * 			last_name: 'testLastName',
	 * 			username: 'cypressTestusername',
	 * 			password: 'pass1',
	 * 		}
	 */
	CreateNewGenericCustomerByApi(customerBody) {
		return apiCall.PostRequest(
			baseEndpoint + getAllCustomersResource,
			postHeaders,
			customerBody
		)
	}
	/**
	 * Deletes single customer by id
	 * @param customerId {int}
	 */
	DeleteCustomer(customerId) {
		apiCall.DeleteRequest(
			baseEndpoint +
				customerEndpoints.getDeleteCustomerByIdResource(customerId),
			getHeaders
		)
	}
	/**
	 * Deletes all customers, uses API authentication headers
	 * @param getHeaders
	 */
	DeleteAllCustomers(getHeaders) {
		apiCall
			.GetRequest(baseEndpoint + getAllCustomersResource, getHeaders)
			.then(allCustomersResponse => {
				for (let customer of allCustomersResponse.body) {
					this.DeleteCustomer(customer.id)
				}
			})
	}

	/**
	 * Fetches single customer by id
	 * @param customerId
	 * @constructor
	 */
	GetCustomerById(customerId) {
		return apiCall.GetRequest(
			baseEndpoint +
				customerEndpoints.getCustomerByIdResource(customerId),
			getHeaders
		)
	}
}
