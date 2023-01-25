import axios from './api'

export const CommentsService = {
	async postComment(comment) {
		const { data } = await axios.post('/comments/create-comments/', comment)
		return data
	},
}
