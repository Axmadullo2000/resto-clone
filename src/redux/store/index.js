import { configureStore } from '@reduxjs/toolkit'

import RestaurantReducer from '../slice/RestaurantSlice'
import AuthReducer from '../slice/AuthSlice'

export default configureStore({
	reducer: {
		restaurant: RestaurantReducer,
		auth: AuthReducer,
	},
})
