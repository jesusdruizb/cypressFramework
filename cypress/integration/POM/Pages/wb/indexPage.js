

class wbIndexPage {

    get welcomeMessageHeader() {
        const description = 'Welcome message header'
        const locator = 'div h1.elementor-heading-title'
        return {
            description, locator
        }
    }
}

export default new wbIndexPage()