import shopPage from '../Pages/shop.js'

describe('Validate login feature', () => {
	it('Validate that Product data matches both in UI and in Backend', () => {
		cy.visit('/')
		cy.Get(shopPage.listPageNumbers)
			.find('li')
			.then(pageListElements => {
				const menuPages = pageListElements.length - 1
				cy.log(menuPages)
				const randomNumber = Math.floor(Math.random() * menuPages)
				cy.log(randomNumber)
				cy.get(pageListElements[randomNumber]).click()
			})

		cy.Get(shopPage.listProductThumbnail)
			.find('li')
			.then(pageListElements => {
				const menuPages = pageListElements.length
				cy.log(menuPages)
				const randomNumber = Math.floor(Math.random() * menuPages)
				cy.log(randomNumber)
				cy.get(pageListElements[randomNumber]).click()
			})
	})
})
