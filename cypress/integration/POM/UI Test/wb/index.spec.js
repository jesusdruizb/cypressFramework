import wbIndexPage from '../../Pages/wb/indexPage.js'

describe('',
    () => {

    it('check welcome header', () => {
        cy.visit('https://www.wandabermudez.com')
        cy.get(wbIndexPage.welcomeMessageHeader.locator).should('have.text','Quiero ayudarte... ¡Hablemos!')
    })
})