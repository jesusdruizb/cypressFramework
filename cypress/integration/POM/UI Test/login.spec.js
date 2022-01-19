import myAccountPage from '../Pages/myAccount.js'

describe('Validate login feature', () => {


    it(
        'Validate that the system fails login for a known email with wrong password', () => {

            cy.visit("/my-account/")
            cy.Get(myAccountPage.inputUsername).type(
                "akamaru@shiba.com")
            cy.Get(myAccountPage.inputPassword).type(
                "secret_sauce12112123213423.")
            cy.Get(myAccountPage.buttonLogin).click()
            cy.Click(myAccountPage.messageLoginError)
            cy.Get(myAccountPage.messageLoginError)
                .should(
                    'have.text',
                    "\n\t\t\tUnknown email address. Check again or try your username.\t\t"
                )
        })

    it.only(
        'Validate that the system can authenticate a customer already registered in the system', () => {

            cy.visit("/my-account/")
            cy.Get(myAccountPage.inputUsername).type(
                "balalaika@chomp.com")
            cy.Get(myAccountPage.inputPassword).type(
                "Siguaraya1.")
            cy.Get(myAccountPage.buttonLogin).click()
        })
})
