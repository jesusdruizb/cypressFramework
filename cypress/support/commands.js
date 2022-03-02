// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const apiUrl = Cypress.env('apiUrl')

Cypress.Commands.add('Get', element => {
	cy.log(`Obtaining ${element.description}`)
	return cy.get(element.locator)
})

Cypress.Commands.add('Click', element => {
	cy.log(`Clicking on ${element.description}`)
	return cy.Get(element).click()
})

Cypress.Commands.add('getAllProducts', authToken => {
	return cy
		.request({
			method: 'GET',
			url: `${apiUrl}/products`,
			headers: {
				accept: 'application/json',
				authorization: `Basic ${authToken}`,
			},
		})
		.then(getProductResponse => {
			expect(getProductResponse.status).to.equal(200)
			expect(getProductResponse.body).to.not.be.null
			expect(getProductResponse.body).to.not.be.empty
			return getProductResponse.body
		})
		.as('productList')
})

Cypress.Commands.add(ApiOperation, (apiOperationType, url,headers,body) => {
	return cy.request({
		method:apiOperationType,
		url:url,
		headers:headers,
		body:body}).as("apiResponse")
})