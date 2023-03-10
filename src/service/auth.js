import axios from './api'

export const authService = {
	async registration(user) {
		const { data } = await axios.post('/accounts/create/', user)
		return data
	},

	async getUser() {
		const { data } = await axios.get('/accounts/user/')

		return data
	},

	async login(user_data) {
		const { data } = await axios.post('/accounts/login/', user_data)
		return data
	},
}
