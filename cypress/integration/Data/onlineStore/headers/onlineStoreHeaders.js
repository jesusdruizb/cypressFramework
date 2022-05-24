import { applicationTypes } from '../../../Constants/applicationTypes'

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
	/***
	 * Builds Headers for Post Requests
	 * 		{
	 * 			"accept": "application/json",
	 * 			"authorization": `Basic ${authToken}`,
	 * 			'Content-Type': 'application/x-www-form-urlencoded'
	 * 		}
	 * @param authToken {string}
	 * @returns {{authorization: string, accept: string}}
	 * @constructor
	 */
	PostOperationHeaders: function (apiAuthToken) {
		return {
			accept: applicationTypes.JSON,
			authorization: `Basic ${apiAuthToken}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		}
	},
}
