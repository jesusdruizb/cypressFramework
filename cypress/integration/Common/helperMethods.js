import { apiOperations } from '../Constants/apiOperations'
import { faker } from '@faker-js/faker'

export const Helpers = {
	PostRequest: function (url, headers, body) {
		return cy.ApiOperation(apiOperations.POST, url, headers, '', body)
	},
	GetRequest: function (url, headers) {
		return cy.ApiOperation(apiOperations.GET, url, headers, '', '')
	},
	PutRequest: function (url, headers, body) {
		return cy.ApiOperation(apiOperations.PUT, url, headers, '', body)
	},
	DeleteRequest: function (url, headers) {
		return cy.ApiOperation(apiOperations.DELETE, url, headers, '', '')
	},
	FetchRequest: function (url, headers) {
		return cy.ApiOperation(apiOperations.FETCH, url, headers, '', '')
	},
	createRandomCustomerData: function () {
		return {
			customerEmail: `${faker.name.firstName()}.${faker.name.lastName()}@fakerEmail.com`,
			customerFirstName: `${faker.name.firstName()}`,
			customerLastName: `${faker.name.lastName()}`,
			customerUsername: `${faker.random.word()}`,
			customerPassword: 'pass1',
		}
	},
}
