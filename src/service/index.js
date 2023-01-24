import axios from './api'

export const restaurantsService = {
	async fetchRestaurantList() {
		const { data } = await axios.get('/restorans/func/')
		return data
	},

	async fetchDetailRestaurant(slug) {
		const { data } = await axios.get(`/restoran/${slug}/`)
		return data
	},
}
