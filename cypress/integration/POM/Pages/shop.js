class shopPage {
	get listPageNumbers() {
		let description = 'Page Numbers Menu'
		let locator = 'ul.page-numbers'
		return {
			description,
			locator,
		}
	}

	get listProductThumbnail() {
		let description = 'Item Thumbnail list'
		let locator = '#main > ul'
		return {
			description,
			locator,
		}
	}
}

export default new shopPage()
