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
		registerUser: (state, action) => {
			state.user = action.payload
			state.isLoggedIn = true
			state.error = null
		},
		registerUserFailure: (state, action) => {
			state.error = action.payload
		},

		loginUserSuccess: (state, action) => {
			state.user = action.payload
			state.error = null
			state.isLoggedIn = true
		},

		loginUserFailure: (state, action) => {
			state.error = action.payload
		},

		logoutUser: state => {
			state.isLoggedIn = false
			state.user = null
			state.error = null
		},
		logoutUserFailure: (state, action) => {
			state.error = action.payload
		},
	},
})

export const {
	registerUser,
	registerUserFailure,
	logoutUser,
	logoutUserFailure,
	loginUserSuccess,
	loginUserFailure,
} = AuthSlice.actions

export default AuthSlice.reducer
