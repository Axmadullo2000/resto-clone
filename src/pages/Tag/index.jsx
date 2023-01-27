import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

import locate from '../../assets/location.png'
import kitchen from '../../assets/kitchen.png'
import schedule from '../../assets/schedule.png'

import '../../components/Card/Card.scss'
import {
	restaurantTagFailureFetched,
	restaurantTagSuccessFetched,
} from '../../redux/slice/RestaurantSlice'
import { restaurantsService } from '../../service'

export const Tag = () => {
	const { slug } = useParams()
	const { tagsData } = useSelector(state => state.restaurant)
	const dispatch = useDispatch()
	console.log(tagsData)
	console.log(slug)
	const filteredData = tagsData.filter(restaurant =>
		restaurant.tags.includes(slug)
	)

	const tagsDataFetched = async () => {
		try {
			const response = await restaurantsService.fetchRestaurantList()
			dispatch(restaurantTagSuccessFetched(response))
		} catch (error) {
			dispatch(restaurantTagFailureFetched(error.response.data))
		}
	}

	useEffect(() => {
		tagsDataFetched()
	}, [slug])
	console.log(filteredData)
	return (
		<div>
			<Header />
			<Navbar />

			{!!filteredData.length &&
				filteredData.map(restaurant => (
					<div className='card' key={restaurant.id}>
						<div className='card__container'>
							<div className='card__header'>
								<Link
									to={`/catalog-restaurant/${restaurant.slug}`}
									className='card__header--name'
								>
									{restaurant.name}
								</Link>

								<button className='card__header--location'>
									<img src={locate} alt='location' />
									<span>{restaurant.address}</span>
								</button>
							</div>
							<div className='card__main'>
								<div className='card__main--left'>
									<img
										alt={restaurant.name}
										src={restaurant.photo_one}
										width={450}
									/>
								</div>
								<div className='card__main--right'>
									<ul>
										<li>
											<img src={locate} alt='address' />
											<span>{restaurant.adress}</span>
										</li>
										<li>
											<img src={kitchen} alt='kitchen' />
											{restaurant.tags.split(',').map(item => {
												return (
													<Link
														key={item}
														to={`/tag/${item}`}
														style={{ textDecoration: 'none' }}
													>
														{item}
														{' ,  '}
													</Link>
												)
											})}
										</li>
										<li>
											<img src={schedule} alt='schedule' />
											<span>{restaurant.time}</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				))}

			<Footer />
		</div>
	)
}
