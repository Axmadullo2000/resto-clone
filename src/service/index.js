import axios from './api'

export const restaurantsService = {
	async fetchRestaurantList() {
		const { data } = await axios.get('/restorans/func/')
		return data
	},

	async fetchUniqueRestaurant(id) {
		const { data } = await axios.get(`/restorans/func/${id}/`)
		return data
	},
}
