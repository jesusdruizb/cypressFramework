import { faker } from '@faker-js/faker'

export default class CustomerBody {
	/**
	 *
	 * @returns {{firstName, lastName, password, username, email}}
	 */
	getCreateRandomSingleUserBody() {
		return {
			email: `${faker.name.firstName()}.${faker.name.lastName()}@fakerEmail.com`,
			first_name: `${faker.name.firstName()}`,
			last_name: `${faker.name.lastName()}`,
			username: `${faker.random.word()}`,
			password: 'pass1',
		}
	}
}
