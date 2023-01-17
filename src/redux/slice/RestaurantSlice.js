import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	restaurantData: [],
	error: null,
	searchedData: [],
}

export const RestaurantSlice = createSlice({
	name: 'Resurant Slice',
	initialState,
	reducers: {
		restaurantsListFetching: state => {
			state.loading = true
		},
		restaurantsSuccessFetched: (state, action) => {
			state.loading = false
			state.restaurantData = action.payload
		},
		searchRestaurantsStart: state => {
			state.loading = true
		},
		searchRestaurantsSuccess: (state, action) => {
			state.loading = false
			state.searchedData = action.payload
		},
	},
})

export const {
	restaurantsListFetching,
	restaurantsSuccessFetched,
	errorOccuredInFetching,
	searchRestaurantsStart,
	searchRestaurantsSuccess,
} = RestaurantSlice.actions

export default RestaurantSlice.reducer
