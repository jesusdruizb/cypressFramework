import myAccountPage from '../Pages/myAccount.js'

describe('Validate login feature', () => {


    it(
        'Validate that the API returns HTTP response 404 for a get request with a non-existent customer ID correctly', () => {

            cy.visit("/my-account/")
            cy.Get(myAccountPage.inputUsername).type(
                "randomUser13123")
            cy.Get(myAccountPage.inputPassword).type(
                "randomUser13123")
            cy.Get(myAccountPage.buttonLogin).click()
            cy.Get(myAccountPage.messageLoginError)
                .should(
                    'have.text',
                    "\n\t\t\tUnknown username. Check again or try your email address.\t\t"
                )
        })
})
