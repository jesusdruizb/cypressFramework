//myAccount.js

class myAccountPage {

    get inputUsername() {
        let description = 'Username Input'
        let locator = '#username'
        return {
            description, locator
        }
    }

    get inputPassword() {
        let description = 'Password Input'
        let locator = '#password'
        return {
            description, locator
        }
    }

    get buttonLogin() {
        let description = 'Login Button'
        let locator = '.login button.woocommerce-form-login__submit'
        return {
            description, locator
        }
    }

    get messageLoginError() {
        let description = 'Error Message'
        let locator = '.woocommerce-error li'
        return {
            description, locator
        }
    }
}

export default new myAccountPage()
