import shopPage from '../Pages/shop.js'

describe('Validate login feature', () => {


    it(
        'Validate that Product data matches both in UI and in Backend', () => {

            cy.visit("/")
            cy.Get(shopPage.listPageNumbers).find('li')
        })

})
