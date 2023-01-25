import { configureStore } from '@reduxjs/toolkit'

import RestaurantReducer from '../slice/RestaurantSlice'
import AuthReducer from '../slice/AuthSlice'
import CommentReducer from '../slice/CommentSlice'

export default configureStore({
	reducer: {
		restaurant: RestaurantReducer,
		auth: AuthReducer,
		comment: CommentReducer,
	},
})
