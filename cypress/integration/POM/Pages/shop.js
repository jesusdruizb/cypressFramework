class shopPage {

    get listPageNumbers() {
        let description = "Page Numbers Menu"
        let locator = "ul.page-numbers"
        return {
            description,
            locator
        }
    }
}

export default new shopPage()
