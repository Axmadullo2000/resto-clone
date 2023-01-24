import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import locate from '../../assets/location.png'
import kitchen from '../../assets/kitchen.png'
import schedule from '../../assets/schedule.png'

import './Card.scss'

const Card = () => {
	const { restaurantData, loading } = useSelector(state => state.restaurant)

	return (
		<div>
			{loading ? (
				<h2>Loading...</h2>
			) : !!restaurantData.length ? (
				restaurantData.map(restaurant => (
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
										src={restaurant.photo_one}
										alt='card photo'
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
											<span>{restaurant.type_cook}</span>
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
				))
			) : (
				<div className='mx-auto' style={{ background: 'red' }}>
					<h2
						style={{ textAlign: 'center', margin: '20px 0', padding: '20px' }}
					>
						Try again!!!
					</h2>
				</div>
			)}
		</div>
	)
}

export default Card
