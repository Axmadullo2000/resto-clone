import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	user: null,
	isLoggedIn: false,
	error: null,
}

export const AuthSlice = createSlice({
	name: 'Auth Slicer',
	initialState,
	reducers: {
		registerUserSuccess: (state, action) => {
			state.loading = false
			state.user = action.payload
			state.isLoggedIn = true
		},
		registerUserFailure: (state, action) => {
			state.loading = false
			state.error = action.payload
		},

		logoutUser: state => {
			state.isLoggedIn = false
			state.user = null
		},
		logoutUserFailure: (state, action) => {
			state.error = action.payload
		},
	},
})

export const { registerUserSuccess, registerUserFailure, logoutUser } =
	AuthSlice.actions

export default AuthSlice.reducer
