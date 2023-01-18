import axios from './api'

export const authService = {
	async registration(user) {
		const data = await axios.post('/accounts/create/', user)
		return data
	},
}
