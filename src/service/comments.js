import axios from './api'

export const CommentsService = {
	async postComment(comment_data) {
		const { data } = await axios.post(
			'/comments/create-comments/',
			comment_data
		)
		return data
	},
}
