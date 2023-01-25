import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	commentData: [],
	error: null,
}

export const commentSlice = createSlice({
	name: 'Comment Slice',
	initialState,
	reducers: {
		addingComment: (state, action) => {
			state.commentData = action.payload
		},
		errorOccurredInAdding: (state, action) => {
			state.error = action.payload
		},
	},
})

export const { addingComment, errorOccurredInAdding } = commentSlice.actions

export default commentSlice.reducer
