import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	restaurantData: [],
	error: null,
	detailData: [],
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
	},
})

export const {
	restaurantsSuccessFetched,
	restaurantsFailFetched,
	restaurantDetailFetched,
} = RestaurantSlice.actions

export default RestaurantSlice.reducer
