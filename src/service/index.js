import axios from './api'

export const restaurantsService = {
	async fetchRestaurantList() {
		const data = axios.get('/restorans/func/')
		console.log(data)
		return data
	},
}
