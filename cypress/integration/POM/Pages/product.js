class productPage {
	get labelProductSKU() {
		let description = 'Product SKU'
		let locator = '.sku'
		return {
			description,
			locator,
		}
	}
}

export default new productPage()
