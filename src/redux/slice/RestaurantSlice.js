import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	restaurantData: [],
	error: null,
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
	},
})

export const { restaurantsSuccessFetched, restaurantsFailFetched } =
	RestaurantSlice.actions

export default RestaurantSlice.reducer
