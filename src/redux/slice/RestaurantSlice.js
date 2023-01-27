import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	restaurantData: [],
	error: null,
	detailData: [],
	tagsData: [],
}

export const RestaurantSlice = createSlice({
	name: 'Restaurant Slice',
	initialState,
	reducers: {
		restaurantsSuccessFetched: (state, action) => {
			state.restaurantData = action.payload
		},
		restaurantsFailFetched: (state, action) => {
			state.error = action.payload
		},

		restaurantDetailFetched: (state, action) => {
			state.detailData = action.payload
		},

		restaurantTagSuccessFetched: (state, action) => {
			state.tagsData = action.payload
		},
		restaurantTagFailureFetched: (state, action) => {
			state.error = action.payload
		},
	},
})

export const {
	restaurantsSuccessFetched,
	restaurantsFailFetched,

	restaurantDetailFetched,

	restaurantTagSuccessFetched,
	restaurantTagFailureFetched,
} = RestaurantSlice.actions

export default RestaurantSlice.reducer
