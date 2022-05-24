export const customerBody = {
	/**
	 *
	 * @param customerEmail {string}
	 * @param customerFirstName {string}
	 * @param customerLastName {string}
	 * @param customerUsername {string}
	 * @param customerPassword {string}
	 * @returns {{firstName, lastName, password, username, email}}
	 */
	getCreateSingleUserBody: function (
		customerEmail,
		customerFirstName,
		customerLastName,
		customerUsername,
		customerPassword
	) {
		return {
			email: customerEmail,
			first_name: customerFirstName,
			last_name: customerLastName,
			username: customerUsername,
			password: customerPassword,
		}
	},
}
