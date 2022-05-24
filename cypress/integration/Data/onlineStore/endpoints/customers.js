export const customerEndpoints = {
	/**
	 *
	 * @returns {string}
	 */
	getAllCustomersResource: function () {
		return `/wc/v2/customers`
	},
	/**
	 *
	 * @param customerId {string}
	 * @returns {string}
	 */
	getCustomerByIdResource: function (customerId) {
		return `/wc/v2/customers/${customerId}`
	},
	/**
	 *
	 * @param customerId {int}
	 * @returns {string}
	 */
	getDeleteCustomerByIdResource: function (customerId) {
		return `/wc/v2/customers/${customerId}?force=true`
	},
}
