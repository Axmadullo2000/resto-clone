import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'

import { restaurantDetailFetched } from '../../redux/slice/RestaurantSlice'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

import { restaurantsService } from '../../service'
import { CommentsService } from '../../service/comments'

export const RestaurantDetail = () => {
	let { loading, detailData } = useSelector(state => state.restaurant)
	const dispatch = useDispatch()
	const { slug } = useParams()
	const [name, setName] = useState('')
	const [comment, setComment] = useState('')
	const [uploadedImage, setUploadedImage] = useState(null)
	const data = { name, comment, uploadedImage }

	const detailOfRestaurants = async () => {
		try {
			const response = await restaurantsService.fetchDetailRestaurant(slug)
			dispatch(restaurantDetailFetched(response))
		} catch (error) {
			console.log(error)
		}
	}

	const addComment = async () => {
		const response = await CommentsService.postComment(data)
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log(name)
		console.log(comment)
		console.log(uploadedImage)
	}

	useEffect(() => {
		detailOfRestaurants()
	}, [slug])

	return (
		<div>
			<Header />
			<Navbar />
			{/* Restaurant details */}
			<div className='detailComponent'>
				{loading ? (
					<h2 style={{ textAlign: 'center' }}>Loading...</h2>
				) : (
					<>
						<h2>{detailData.name}</h2>
						<div className='carousel-wrapper'>
							<Carousel>
								<div style={{ width: '450px' }}>
									<img src={detailData.photo_one} alt={detailData.name} />
								</div>
								<div style={{ width: '450px' }}>
									<img src={detailData.photo_two} alt={detailData.name} />
								</div>
								<div style={{ width: '450px' }}>
									<img src={detailData.photo_three} alt={detailData.name} />
								</div>
							</Carousel>
						</div>
						<div className='right_part'>
							<ul>
								<li>
									Город:{' '}
									{!!detailData.adress && detailData.adress.split(' ')[5]}
								</li>
								<li>
									Адрес:{' '}
									{!!detailData.adress && detailData.adress.split(', ')[0]}
								</li>
								<li>
									Дом: {!!detailData.adress && detailData.adress.split(', ')[1]}
								</li>
								<li>Телефоны: {!!detailData.phone && detailData.phone}</li>
								<li>Время работы: {!!detailData.time && detailData.time}</li>
								<li>
									Тип заведения:{' '}
									<span style={{ textTransform: 'capitalize' }}>
										{detailData.type}
									</span>
								</li>
								<li>Бюджет: {detailData.budget}</li>
								<li>Кухня: {detailData.type_cook}</li>
								<li>Банкетные залы: {detailData.bancket}</li>
							</ul>
						</div>
					</>
				)}
			</div>

			<div className='feedback'>
				<h2>Отзывы о ресторане</h2>

				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Имя'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<br />
					<textarea
						placeholder='Ваш Комментарий'
						name='comment'
						cols='30'
						rows='10'
						onChange={e => setComment(e.target.value)}
					>
						{comment}
					</textarea>
					<br />
					<input
						type='file'
						name='photo'
						onChange={e => setUploadedImage(e.target.files[0])}
					/>
					<br />
					<button>Отправить</button>
				</form>
			</div>

			<Footer />
		</div>
	)
}
