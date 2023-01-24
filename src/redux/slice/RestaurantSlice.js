import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	restaurantData: [],
	error: null,
	detailData: [],
	loading: false,
}

export const RestaurantSlice = createSlice({
	name: 'Restaurant Slice',
	initialState,
	reducers: {
		restaurantFetchingStart: state => {
			state.loading = true
		},
		restaurantsSuccessFetched: (state, action) => {
			state.restaurantData = action.payload
			state.loading = false
		},
		restaurantsFailFetched: (state, action) => {
			state.error = action.payload
			state.loading = false
		},

		detailDataFetchingStart: state => {
			state.loading = true
		},
		restaurantDetailFetched: (state, action) => {
			state.detailData = action.payload
			state.loading = false
		},

		restaurantDetailFailureFetched: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
	},
})

export const {
	restaurantFetchingStart,
	restaurantsSuccessFetched,
	restaurantsFailFetched,

	detailDataFetchingStart,
	restaurantDetailFetched,
	restaurantDetailFailureFetched,
} = RestaurantSlice.actions

export default RestaurantSlice.reducer
