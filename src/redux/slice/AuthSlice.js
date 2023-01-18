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
		registerUserStart: state => {
			state.loading = true
		},
		registerUserSuccess: (state, action) => {
			state.loading = false
			state.user = action.payload
			state.error = null
		},
		registerUserFailure: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
	},
})

export const { registerUserStart, registerUserSuccess, registerUserFailure } =
	AuthSlice.actions

export default AuthSlice.reducer
