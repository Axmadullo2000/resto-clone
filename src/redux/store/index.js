import { configureStore } from "@reduxjs/toolkit";

import RestaurantReducer from "../slice/RestaurantSlice";

export default configureStore({
	reducer: {
		restaurant: RestaurantReducer
	}
})
