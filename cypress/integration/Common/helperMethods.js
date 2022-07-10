import { apiOperations } from '../Constants/apiOperations'

export default class ApiCall {
	PostRequest(url, headers, body) {
		return cy
			.request({
				method: apiOperations.POST,
				url: url,
				headers: headers,
				params: '',
				body: body,
				failOnStatusCode: false,
			})
			.as('postResponse')
	}
	GetRequest(url, headers) {
		return cy
			.request({
				method: apiOperations.GET,
				url: url,
				headers: headers,
				params: '',
				body: '',
				failOnStatusCode: false,
			})
			.as('getResponse')
	}
	DeleteRequest(url, headers) {
		return cy
			.request({
				method: apiOperations.DELETE,
				url: url,
				headers: headers,
				params: '',
				body: '',
				failOnStatusCode: false,
			})
			.as('deleteResponse')
	}
}
