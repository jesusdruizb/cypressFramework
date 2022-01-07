import myAccountPage from '../Pages/myAccount.js'

describe('example to-do app', () => {


    it(
        'Validate that the API returns HTTP response 404 for a get request with a non-existent customer ID correctly', () => {

            cy.visit("/my-account/")
            cy.get(myAccountPage.inputUsername.locator).type(
                "randomUser13123")
            cy.get(myAccountPage.inputPassword
                .locator).type("randomUser13123")
            cy.get(myAccountPage.buttonLogin
                .locator).click()
            cy.get(myAccountPage.messageLoginError.locator).contains(
                "Unknown username. Check again or try your email address."
            )
        })

})
