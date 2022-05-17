import { applicationTypes } from '../../../../integration/Constants/applicationTypes'

export const onlineStoreHeaders = {
	/***
	 * Builds Headers for Get Requests
	 * 		{
	 * 			"accept": "application/json",
	 * 			"authorization": `Basic ${authToken}`,
	 * 		}
	 * @param authToken {string}
	 * @returns {{authorization: string, accept: string}}
	 * @constructor
	 */
	GetOperationHeaders: function (apiAuthToken) {
		return {
			accept: applicationTypes.JSON,
			authorization: `Basic ${apiAuthToken}`,
		}
	},
}
