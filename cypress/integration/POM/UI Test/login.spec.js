import myAccountPage from '../Pages/myAccount.js'
import userCatalog from '../../Data/userCatalog'

describe('Validate login feature', () => {


    it(
        'Validate that the system fails login for a known email with wrong password', () => {

            cy.visit("/my-account/")
            cy.Get(myAccountPage.inputUsername).type(
                userCatalog.validUsername)
            cy.Get(myAccountPage.inputPassword).type(
                userCatalog.invalidPassword)
            cy.Get(myAccountPage.buttonLogin).click()
            cy.Click(myAccountPage.messageLoginError)
            cy.Get(myAccountPage.messageLoginError)
                .should(
                    'have.text',
                    "\n\t\t\tError: The password you entered for the username auto is incorrect. Lost your password?\t\t"
                )
        })

    it(
        'Validate that the system can authenticate a customer already registered in the system', () => {

            cy.visit("/my-account/")
            cy.Get(myAccountPage.inputUsername).type(
                userCatalog.validUsername)
            cy.Get(myAccountPage.inputPassword).type(
                userCatalog.validPassword)
            cy.Get(myAccountPage.buttonLogin).click()
        })
})
