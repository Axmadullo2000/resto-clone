import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	addingComment,
	errorOccurredInAdding,
} from '../../redux/slice/CommentSlice'
import { CommentsService } from '../../service/comments'

const Comment = () => {
	const [comment, setComment] = useState('')
	const [username, setUsername] = useState('')

	const { user } = useSelector(state => state.auth)
	const { detailData } = useSelector(state => state.restaurant)
	const { commentData, error } = useSelector(state => state.comment)

	const dispatch = useDispatch()

	const data = {
		user_info: {
			username: user != null ? user.username : username,
		},
		restorans_id: detailData.id,
		comment,
	}

	const addCommentToDetailPage = async () => {
		try {
			const response = await CommentsService.postComment(data)
			dispatch(addingComment(response))
		} catch (error) {
			console.log(error.response.data.comment)
			Object.values(error.response.data.comment).map(item =>
				dispatch(errorOccurredInAdding(item))
			)
		}
	}

	const commentHandleSubmit = e => {
		e.preventDefault()
		addCommentToDetailPage()
	}

	return (
		<div>
			<h1 style={{textTransform: 'capitalize'}}>{commentData.comment}</h1>
			<form onSubmit={commentHandleSubmit}>
				<h2>Отзывы о кафе Chocolate</h2>
				<input
					type='text'
					placeholder='Имя'
					value={user != null ? user.username : username}
					onChange={e => setUsername(e.target.value)}
				/>
				<br />
				<input type='hidden' name='restoran_id' value={detailData.id} />
				<textarea
					name='comment'
					cols='30'
					rows='10'
					defaultValue={comment}
					onChange={e => setComment(e.target.value)}
				></textarea>
				{comment == '' && <h4>{error}</h4>}
				<br />
				<button>Отправить</button>
			</form>
		</div>
	)
}

export default Comment
