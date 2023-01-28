import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'

import { restaurantDetailFetched } from '../../redux/slice/RestaurantSlice'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { restaurantsService } from '../../service'
import Comment from '../../components/Comment'

export const RestaurantDetail = () => {
	const { detailData } = useSelector(state => state.restaurant)
	const dispatch = useDispatch()
	const { slug } = useParams()
	const detailOfRestaurants = async () => {
		try {
			const response = await restaurantsService.fetchDetailRestaurant(slug)
			dispatch(restaurantDetailFetched(response))
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		detailOfRestaurants()
		// eslint-disable-next-line
	}, [slug])

	return (
		<div>
			<Header />
			<div className='detailComponent'>
				{' '}
				<h2>{detailData.name}</h2>
				{/* Это сделай в отдельном компоненте */}
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
				{/* До сюда */}
				<div className='right_part'>
					<ul>
						<li>
							Город: {!!detailData.adress && detailData.adress.split(' ')[5]}
						</li>
						<li>
							Адрес: {!!detailData.adress && detailData.adress.split(', ')[0]}
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
			</div>
			<a href={detailData.location} style={{display: 'block', textDecoration: 'none', color: 'red', border: '2px solid silver', width: '300px', margin: 'auto', padding: '20px'}}>Показать карту</a>

			<Comment />
			<Footer />
		</div>
	)
}
